import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUPPORTED_LANGS = ['fr', 'en']
const DEFAULT_LANG = 'fr'

function getPreferredLanguage(acceptLanguage: string | null): string {
  if (!acceptLanguage) return DEFAULT_LANG
  
  const languages = acceptLanguage.split(',').map(lang => {
    const [code] = lang.trim().split('-')
    return code.toLowerCase()
  })
  
  for (const lang of languages) {
    if (SUPPORTED_LANGS.includes(lang)) {
      return lang
    }
  }
  
  return DEFAULT_LANG
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next()
  }
  
  // Check if already has language prefix
  const langMatch = pathname.match(/^\/(fr|en)(\/|$)/)
  
  if (langMatch) {
    // Already has language, continue
    return NextResponse.next()
  }
  
  // Root path - redirect based on browser language
  if (pathname === '/' || pathname === '') {
    const acceptLanguage = request.headers.get('accept-language')
    const preferredLang = getPreferredLanguage(acceptLanguage)
    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLang}`
    return NextResponse.redirect(url)
  }
  
  // No language prefix - add default
  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LANG}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|images|videos|api|favicon.ico|.*\\..*).*)']
}
