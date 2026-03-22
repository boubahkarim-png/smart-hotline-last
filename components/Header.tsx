'use client'
import Link from 'next/link'
import { useState } from 'react'
import { NAV_FR, NAV_EN, CONTACT, type NavItem } from '@/lib/nav'
import { T, type Lang } from '@/lib/i18n'

interface Props {
  lang: Lang
  otherLangHref: string
}

export default function Header({ lang, otherLangHref }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const nav = lang === 'fr' ? NAV_FR : NAV_EN
  const t = T[lang]
  const otherLabel = lang === 'fr' ? 'EN' : 'FR'

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-6">

          {/* Logo */}
          <Link href={lang === 'fr' ? '/fr' : '/en'}
            className="flex items-center gap-2 font-bold text-lg text-blue-700 flex-shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">SH</span>
            </div>
            Smart Hotline
          </Link>

          {/* Desktop nav — always fully visible */}
          <nav className="hidden lg:flex items-center gap-5 flex-1">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setDdOpen(true)}
                  onMouseLeave={() => setDdOpen(false)}>
                  <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium text-sm whitespace-nowrap">
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {ddOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm whitespace-nowrap">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <Link href={otherLangHref}
              className="text-xs font-bold px-2.5 py-1 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
              {otherLabel}
            </Link>
            <Link href={lang === 'fr' ? '/fr/contact' : '/en/contact'}
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t.nav_cta}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          {nav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-3 mb-1">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-3 py-1.5 text-sm text-gray-600 hover:text-blue-600">
                      {child.label}
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b border-gray-50">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link href={lang === 'fr' ? '/fr/contact' : '/en/contact'}
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center bg-blue-600 text-white py-2.5 rounded-lg font-semibold">
            {t.nav_cta}
          </Link>
        </div>
      )}
    </header>
  )
}
