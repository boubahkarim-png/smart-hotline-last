import { NextApiRequest, NextApiResponse } from 'next/types'
import mysql from 'mysql2/promise'
import { validateCsrfToken } from '@/lib/csrf'
import { checkRateLimit } from '@/lib/rateLimit'
import { sanitizeText, sanitizeEmail, sanitizePhone, sanitizeSqlInput } from '@/lib/sanitize'

const dbConfig = {
  host: process.env.SUITECRM_DB_HOST || 'localhost',
  port: parseInt(process.env.SUITECRM_DB_PORT || '3306', 10),
  user: process.env.SUITECRM_DB_USER || 'root',
  password: process.env.SUITECRM_DB_PASSWORD || '',
  database: process.env.SUITECRM_DB_NAME || 'suitecrm'
}

const MAUTIC_API_URL = process.env.MAUTIC_API_URL || 'https://app.smart-hotline.com:8084'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const MAUTIC_API_KEY = process.env.MAUTIC_API_KEY || ''
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'direction@smart-hotline.com'
const NO_REPLY_EMAIL = process.env.NO_REPLY_EMAIL || 'noreply@smart-hotline.com'

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim()
  }
  if (Array.isArray(forwarded)) {
    return forwarded[0].trim()
  }
  return req.socket.remoteAddress || 'unknown'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const clientIp = getClientIp(req)
  const rateLimitResult = checkRateLimit(`leads:${clientIp}`)
  
  if (!rateLimitResult.allowed) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
    })
  }

  const csrfToken = req.headers['x-csrf-token'] as string | undefined
  if (!csrfToken || !validateCsrfToken(csrfToken)) {
    return res.status(403).json({ error: 'Invalid CSRF token' })
  }

  const { name, email, phone, company, message, source } = req.body

  const sanitizedName = sanitizeText(name)
  const sanitizedEmail = sanitizeEmail(email)
  const sanitizedPhone = sanitizePhone(phone || '')
  const sanitizedCompany = sanitizeText(company || '')
  const sanitizedMessage = sanitizeText(message || '')
  const sanitizedSource = sanitizeText(source || 'website')

  if (!sanitizedName || !sanitizedEmail) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  const nameParts = sanitizedName.trim().split(/\s+/)
  const firstName = sanitizeSqlInput(nameParts[0] || '')
  const lastName = sanitizeSqlInput(nameParts.slice(1).join(' ') || '')

  try {
    const connection = await mysql.createConnection(dbConfig)

    const [result] = await connection.execute(`
      INSERT INTO leads (
        id,
        first_name,
        last_name,
        email1,
        phone_work,
        account_name,
        description,
        lead_source,
        status,
        assigned_user_id,
        date_entered,
        date_modified,
        deleted
      ) VALUES (
        UUID(),
        ?, ?, ?, ?, ?, ?, ?, 'New', '1', NOW(), NOW(), 0
      )
    `, [firstName, lastName, sanitizedEmail, sanitizedPhone, sanitizedCompany, sanitizedMessage, sanitizedSource])

    await connection.end()

    await fetch(`${MAUTIC_API_URL}/api/contacts/new`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAUTIC_API_KEY}`
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        company: sanitizedCompany,
        tags: ['website-form', 'lead'],
        ipAddress: clientIp
      })
    }).catch(() => {
      console.log('Mautic sync failed, but lead saved to SuiteCRM')
    })

    return res.status(200).json({
      success: true,
      message: 'Lead created successfully',
      leadId: (result as any).insertId
    })

  } catch (error: any) {
    console.error('SuiteCRM insert error:', error)

    const fallbackData = {
      timestamp: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      company: sanitizedCompany,
      message: sanitizedMessage,
      source: sanitizedSource,
      ip: clientIp
    }

    console.log('FALLBACK LEAD DATA:', JSON.stringify(fallbackData, null, 2))

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: NO_REPLY_EMAIL,
          to: CONTACT_EMAIL,
          subject: `Nouveau lead: ${sanitizedName} - ${sanitizedCompany || 'Sans entreprise'}`,
          html: `
            <h2>Nouveau lead depuis le site web</h2>
            <p><strong>Nom:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Téléphone:</strong> ${sanitizedPhone || 'Non fourni'}</p>
            <p><strong>Entreprise:</strong> ${sanitizedCompany || 'Non fourni'}</p>
            <p><strong>Message:</strong> ${sanitizedMessage || 'Aucun message'}</p>
            <p><strong>Source:</strong> ${sanitizedSource}</p>
          `
        })
      })
    } catch (emailError) {
      console.log('Email fallback also failed')
    }

    return res.status(200).json({
      success: true,
      message: 'Lead received and will be processed',
      fallback: true
    })
  }
}
