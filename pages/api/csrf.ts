import { NextApiRequest, NextApiResponse } from 'next/types'
import { generateCsrfToken } from '@/lib/csrf'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const csrfData = generateCsrfToken()

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
  res.status(200).json({
    token: csrfData.token,
    expires: csrfData.expires
  })
}
