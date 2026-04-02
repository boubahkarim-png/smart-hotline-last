const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
}

const SQL_KEYWORDS = [
  'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'UNION',
  'OR', 'AND', 'WHERE', 'FROM', 'INTO', 'TABLE', 'DATABASE'
]

const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /data:/gi,
  /vbscript:/gi
]

export function sanitizeHtml(input: string): string {
  if (!input) return ''
  
  let sanitized = input
  
  for (const pattern of DANGEROUS_PATTERNS) {
    sanitized = sanitized.replace(pattern, '')
  }
  
  return sanitized
}

export function escapeHtml(input: string): string {
  if (!input) return ''
  
  return input.replace(/[&<>"'`=\/]/g, char => HTML_ENTITIES[char] || char)
}

export function sanitizeText(input: string): string {
  if (!input) return ''
  
  return escapeHtml(sanitizeHtml(input.trim()))
}

export function sanitizeEmail(email: string): string {
  if (!email) return ''
  
  const sanitized = email.trim().toLowerCase()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  if (!emailRegex.test(sanitized)) {
    return ''
  }
  
  return sanitized
}

export function sanitizePhone(phone: string): string {
  if (!phone) return ''
  
  return phone.replace(/[^\d+\-\s()]/g, '').trim()
}

export function sanitizeSqlInput(input: string): string {
  if (!input) return ''
  
  let sanitized = input
  
  for (const keyword of SQL_KEYWORDS) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    sanitized = sanitized.replace(regex, '')
  }
  
  return sanitized.replace(/['";\\]/g, '')
}

export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T,
  sanitizeFn: (input: string) => string = sanitizeText
): T {
  const sanitized: Record<string, unknown> = {}
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeFn(value)
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value as Record<string, unknown>, sanitizeFn)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized as T
}

export function stripTags(input: string): string {
  if (!input) return ''
  
  return input.replace(/<[^>]*>/g, '')
}

export function truncateText(input: string, maxLength: number): string {
  if (!input) return ''
  if (input.length <= maxLength) return input
  
  return input.substring(0, maxLength - 3) + '...'
}

export function isValidUrl(url: string): boolean {
  if (!url) return false
  
  try {
    const parsed = new URL(url)
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

export function sanitizeUrl(url: string): string {
  if (!url) return ''
  if (!isValidUrl(url)) return ''
  
  return url
}
