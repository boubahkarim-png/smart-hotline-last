'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function Popup({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone

  useEffect(() => {
    if (dismissed) return
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrolled > 0.30) setShow(true)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  const dismiss = () => { setShow(false); setDismissed(true) }

  if (!show || dismissed) return null

  const fr = lang === 'fr'

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-72 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-white font-semibold text-sm">
              {fr ? 'Besoin d\u2019aide ?' : 'Need help?'}
            </span>
          </div>
          <button onClick={dismiss} className="text-white opacity-70 hover:opacity-100 text-lg leading-none">
            &times;
          </button>
        </div>
        {/* Body */}
        <div className="p-4">
          <p className="text-slate-600 text-sm mb-4">
            {fr
              ? 'Notre \u00e9quipe r\u00e9pond en moins de 2h. Choisissez votre moyen de contact :'
              : 'Our team replies in under 2h. Choose how to reach us:'}
          </p>
          <div className="space-y-2">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
              <span className="text-lg">💬</span>
              <span>WhatsApp — {fr ? 'R\u00e9ponse imm\u00e9diate' : 'Instant reply'}</span>
            </a>
            {showPhone && (
              <a href={"tel:" + CONTACT.phone}
                className="flex items-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                <span className="text-lg">📞</span>
                <span>{CONTACT.phoneDisplay}</span>
              </a>
            )}
            <Link href={fr ? '/fr/contact' : '/en/contact'}
              onClick={dismiss}
              className="flex items-center gap-3 w-full border-2 border-slate-200 hover:border-blue-300 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
              <span className="text-lg">✉️</span>
              <span>{fr ? 'Formulaire de contact' : 'Contact form'}</span>
            </Link>
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 w-full border-2 border-slate-200 hover:border-blue-300 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
              <span className="text-lg">📅</span>
              <span>{fr ? 'R\u00e9server 30 min' : 'Book 30 min'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
