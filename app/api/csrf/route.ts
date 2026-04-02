import { NextResponse } from 'next/server'
import { randomBytes } from 'crypto'

export async function GET() {
  const token = randomBytes(32).toString('hex')
  const response = NextResponse.json({ token })
  response.headers.set('Set-Cookie', `csrf_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`)
  return response
}
