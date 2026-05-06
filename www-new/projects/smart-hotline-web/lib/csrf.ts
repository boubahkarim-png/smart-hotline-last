import { randomBytes, createHash } from 'crypto'

const CSRF_SECRET = process.env.CSRF_SECRET || 'change-this-in-production'
const CSRF_TOKEN_EXPIRY = 60 * 60 * 1000 // 1 hour

export interface CsrfToken {
  token: string
  expires: number
}

export function generateCsrfToken(): CsrfToken {
  const randomString = randomBytes(32).toString('hex')
  const timestamp = Date.now()
  const expires = timestamp + CSRF_TOKEN_EXPIRY
  const payload = `${randomString}.${timestamp}`
  const signature = createHash('sha256')
    .update(`${payload}.${CSRF_SECRET}`)
    .digest('hex')
  
  return {
    token: `${payload}.${signature}`,
    expires
  }
}

export function validateCsrfToken(token: string): boolean {
  if (!token) return false
  
  const parts = token.split('.')
  if (parts.length !== 3) return false
  
  const [randomString, timestampStr, signature] = parts
  const timestamp = parseInt(timestampStr, 10)
  
  if (isNaN(timestamp)) return false
  if (Date.now() > timestamp + CSRF_TOKEN_EXPIRY) return false
  
  const payload = `${randomString}.${timestamp}`
  const expectedSignature = createHash('sha256')
    .update(`${payload}.${CSRF_SECRET}`)
    .digest('hex')
  
  return signature === expectedSignature
}

export function getCsrfTokenFromRequest(req: Request): string | null {
  const headerToken = req.headers.get('x-csrf-token')
  if (headerToken) return headerToken
  
  return null
}
