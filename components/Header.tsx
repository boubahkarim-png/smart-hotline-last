'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { NAV_FR, NAV_EN, CONTACT } from '@/lib/nav'
import { useGeo } from '@/hooks/useGeo'
import { getOtherLangPath } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'

interface Props {
  lang: Lang
}

export default function Header({ lang }: Props) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const ddRef = useRef<HTMLDivElement>(null)
  const { geo, loading } = useGeo()
  const nav = lang === 'fr' ? NAV_FR : NAV_EN
  const otherLabel = lang === 'fr' ? 'EN' : 'FR'
  const otherLangHref = getOtherLangPath(pathname || '/', lang)
  const showPhone = !loading && geo.showPhone
  const contactHref = lang === 'fr' ? '/fr/contact' : '/en/contact'
  const ctaLabel = lang === 'fr' ? 'Demo Gratuite' : 'Free Demo'

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setDdOpen(!ddOpen)
    } else if (e.key === 'Escape') {
      setDdOpen(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) {
        setDdOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-6">
          <Link href={lang === 'fr' ? '/fr' : '/en'} className="flex items-center gap-2 font-extrabold text-lg text-blue-800 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">SH</span>
            </div>
            Smart Hotline
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  ref={ddRef}
                  className="relative"
                  onMouseEnter={() => setDdOpen(true)}
                  onMouseLeave={() => setDdOpen(false)}
                >
                  <button
                    aria-expanded={ddOpen}
                    aria-haspopup="menu"
                    onKeyDown={handleKeyDown}
                    onClick={() => setDdOpen(!ddOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-blue-700 font-medium text-sm rounded-lg hover:bg-blue-50 whitespace-nowrap transition-colors"
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {ddOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-slate-700 hover:text-blue-700 font-medium text-sm rounded-lg hover:bg-blue-50 whitespace-nowrap transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href={otherLangHref}
            className="text-xs font-bold px-2.5 py-1.5 border-2 border-slate-300 text-slate-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            {otherLabel}
          </Link>

          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            {showPhone && (
              <a href={"tel:" + CONTACT.phone} className="flex items-center gap-1.5 text-sm text-slate-700 hover:text-blue-700 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {CONTACT.phoneDisplay}
              </a>
            )}
            {!showPhone && !loading && (
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-700 hover:text-green-600 font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.59.248-.17.597-.497.949-.75 1.088-.19.107-.406.166-.615.166-.395 0-.79-.149-1.103-.395-.517-.407-1.162-.972-1.795-1.687-.633-.715-1.074-1.382-1.355-1.997-.28-.616-.366-1.146-.286-1.558.08-.412.367-.65.597-.823.23-.173.517-.274.845-.274.149 0 .298.025.446.074.149.05.298.124.446.223.298.199.597.447.845.795.248.347.447.744.547 1.141.099.397.099.794 0 1.191-.099.397-.298.794-.547 1.141-.248.348-.547.646-.845.845-.149.099-.298.174-.446.223-.149.05-.298.074-.446.074-.328 0-.615-.1-.845-.274-.23-.173-.517-.41-.597-.823-.08-.412.006-.942.286-1.558.28-.615.722-1.282 1.355-1.997.633-.715 1.278-1.28 1.795-1.687.517-.407 1.062-.594 1.603-.594.209 0 .424.059.615.166.253.139.58.491.75 1.088.119.396.317.347.59.248.272-.1 1.733-.818 2.03-.967.297-.149.545-.248.744-.248.199 0 .398.1.597.248.199.149.398.347.597.594.199.248.398.545.597.893.199.347.398.744.597 1.19.199.447.398.944.597 1.49.199.546.398 1.142.597 1.787.199.645.398 1.34.597 2.083.199.744.398 1.537.597 2.38.149.594.298 1.188.446 1.782h-2.38c-.149-.594-.298-1.188-.446-1.782-.199-.843-.398-1.636-.597-2.38-.199-.744-.398-1.439-.597-2.083-.199-.645-.398-1.241-.597-1.787-.199-.546-.398-1.043-.597-1.49-.199-.447-.398-.843-.597-1.19-.199-.347-.398-.645-.597-.893-.199-.248-.398-.446-.597-.594-.199-.149-.398-.248-.597-.248-.199 0-.447.099-.744.248z"/>
                </svg>
                WhatsApp
              </a>
            )}
            <Link href={contactHref} className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
              {ctaLabel}
            </Link>
          </div>

          <button className="lg:hidden ml-2 p-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}>
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-3 mb-1 px-2">{item.label}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-4 py-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2.5 text-slate-700 hover:text-blue-700 border-b border-slate-50 text-sm font-medium"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2">
            {showPhone && (
              <a href={"tel:" + CONTACT.phone} className="flex items-center justify-center gap-2 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {CONTACT.phoneDisplay}
              </a>
            )}
            {!showPhone && (
              <a href={CONTACT.whatsapp} className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl font-semibold text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.59.248-.17.597-.497.949-.75 1.088-.19.107-.406.166-.615.166-.395 0-.79-.149-1.103-.395-.517-.407-1.162-.972-1.795-1.687-.633-.715-1.074-1.382-1.355-1.997-.28-.616-.366-1.146-.286-1.558.08-.412.367-.65.597-.823.23-.173.517-.274.845-.274.149 0 .298.025.446.074.149.05.298.124.446.223.298.199.597.447.845.795.248.347.447.744.547 1.141.099.397.099.794 0 1.191-.099.397-.298.794-.547 1.141-.248.348-.547.646-.845.845-.149.099-.298.174-.446.223-.149.05-.298.074-.446.074-.328 0-.615-.1-.845-.274-.23-.173-.517-.41-.597-.823-.08-.412.006-.942.286-1.558.28-.615.722-1.282 1.355-1.997.633-.715 1.278-1.28 1.795-1.687.517-.407 1.062-.594 1.603-.594.209 0 .424.059.615.166.253.139.58.491.75 1.088.119.396.317.347.59.248.272-.1 1.733-.818 2.03-.967.297-.149.545-.248.744-.248.199 0 .398.1.597.248.199.149.398.347.597.594.199.248.398.545.597.893.199.347.398.744.597 1.19.199.447.398.944.597 1.49.199.546.398 1.142.597 1.787.199.645.398 1.34.597 2.083.199.744.398 1.537.597 2.38.149.594.298 1.188.446 1.782h-2.38c-.149-.594-.298-1.188-.446-1.782-.199-.843-.398-1.636-.597-2.38-.199-.744-.398-1.439-.597-2.083-.199-.645-.398-1.241-.597-1.787-.199-.546-.398-1.043-.597-1.49-.199-.447-.398-.843-.597-1.19-.199-.347-.398-.645-.597-.893-.199-.248-.398-.446-.597-.594-.199-.149-.398-.248-.597-.248-.199 0-.447.099-.744.248z"/>
                </svg>
                WhatsApp 24/7
              </a>
            )}
            <Link href={contactHref} onClick={() => setMobileOpen(false)} className="block text-center bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm">
              {ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
