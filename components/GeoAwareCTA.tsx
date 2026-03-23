'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function GeoAwareCTA({ lang = 'fr' }: { lang?: 'fr' | 'en' }) {
  const { geo, prices, content, loading } = useGeo(lang)
  const showPhone = !loading && geo.showPhone
  const sym = loading ? '' : prices.symbol
  const trial = loading ? '' : String(prices.outbound_trial)
  const contactHref = lang === 'fr' ? '/fr/contact' : '/en/contact'
  const fr = lang === 'fr'

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <Link href={contactHref}
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-7 py-4 rounded-xl hover:bg-blue-50 shadow-xl transition-all">
          {fr ? 'Démo Sans Engagement' : 'Free Demo'} &rarr;
        </Link>
        {showPhone ? (
          <a href={"tel:" + CONTACT.phone}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all">
            &#128222; {CONTACT.phoneDisplay}
          </a>
        ) : (
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all">
            &#128172; WhatsApp 24/7
          </a>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {!loading && (
          <>
            <span className="text-blue-200">
              {fr ? `Essai 2 semaines — ${sym}${trial}/h` : `2-week trial — ${sym}${trial}/h`}
            </span>
            <span className="text-blue-300 text-xs">{content.marketNote}</span>
          </>
        )}
        <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
          className="text-blue-300 hover:text-white transition-colors underline underline-offset-2 text-xs">
          &#128197; {fr ? 'Réserver une consultation' : 'Book a consultation'}
        </a>
      </div>
    </div>
  )
}
