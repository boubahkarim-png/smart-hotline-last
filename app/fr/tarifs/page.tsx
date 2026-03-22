'use client'
import Link from 'next/link'
import { useCurrency } from '@/hooks/useCurrency'
import { PRICES, type Currency } from '@/lib/prices'
import type { Metadata } from 'next'

const CURRENCIES: Currency[] = ['CAD', 'EUR', 'USD', 'CHF']

export default function FrTarifs() {
  const { currency, prices, loading, changeCurrency } = useCurrency()

  const fmt = (n: number) => (loading ? '...' : prices.symbol + n)

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Tarifs Competitifs</h1>
          <p className="text-blue-100 text-lg mb-6">20 a 40% moins cher que le marche</p>
          <div className="inline-flex items-center gap-3 bg-white bg-opacity-20 px-5 py-2.5 rounded-full">
            <span className="text-sm">Devise:</span>
            <div className="flex gap-2">
              {CURRENCIES.map((c) => (
                <button key={c} onClick={() => changeCurrency(c)}
                  className={[
                    'text-sm font-bold px-2.5 py-1 rounded-lg transition-colors',
                    currency === c ? 'bg-white text-blue-700' : 'text-white hover:bg-white hover:bg-opacity-20',
                  ].join(' ')}>
                  {PRICES[c].symbol}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Outbound */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-3">Appels Sortants</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded mb-10"/>
            {/* Trial banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full mb-2">
                  ⭐ Offre Speciale
                </span>
                <h3 className="font-bold text-xl">
                  Essai Starter — {fmt(prices?.outbound_trial || 0)}/heure
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  20h/semaine pendant 2 semaines<br/>
                  <strong>OU 1 semaine gratuite — payez seulement 3 semaines</strong>
                </p>
              </div>
              <Link href="/fr/contact?plan=essai"
                className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 whitespace-nowrap">
                Commencer l'Essai
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Starter 20h/sem', 'Pro 40h/sem', 'Business 80h/sem', 'Enterprise 120h/sem'].map((label, i) => (
                <div key={label} className={[
                  'bg-white rounded-2xl p-6 relative',
                  i === 3 ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200',
                ].join(' ')}>
                  {i === 3 && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span>
                    </div>
                  )}
                  <h3 className="font-bold mb-1">{label}</h3>
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">
                    {fmt(prices?.outbound?.[i] || 0)}
                  </div>
                  <p className="text-gray-400 text-sm mb-5">/heure</p>
                  <Link href={'/fr/contact?plan=outbound-' + i}
                    className={[
                      'block text-center py-2.5 rounded-lg font-semibold text-sm',
                      i === 3
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
                    ].join(' ')}>
                    Choisir
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agents */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-2">Agents IA Vocaux</h2>
            <p className="text-center text-gray-500 mb-3">Jusqu'a 70% moins cher qu'un agent traditionnel</p>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded mb-10"/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Starter', 'Professional', 'Business', 'Enterprise'].map((label, i) => (
                <div key={label} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="font-bold mb-1">{label}</h3>
                  <div className="text-4xl font-extrabold text-purple-600 mb-1">
                    {fmt(prices?.ai?.[i] || 0)}
                  </div>
                  <p className="text-gray-400 text-sm mb-5">/heure</p>
                  <Link href={'/fr/contact?plan=ia-' + i}
                    className="block text-center py-2.5 rounded-lg font-semibold text-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                    Choisir
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Inbound */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-3">Appels Entrants</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded mb-10"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Basic', desc: "Jusqu'a 500 appels/mois", pop: false },
                { label: 'Advanced', desc: "Jusqu'a 1500 appels/mois", pop: true },
                { label: 'Premium', desc: "Jusqu'a 2500 appels/mois", pop: false },
              ].map(({ label, desc, pop }, i) => (
                <div key={label} className={[
                  'bg-white rounded-2xl p-6 relative',
                  pop ? 'border-2 border-blue-500 shadow-xl' : 'border border-gray-200',
                ].join(' ')}>
                  {pop && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Populaire</span>
                    </div>
                  )}
                  <h3 className="font-bold mb-1">{label}</h3>
                  <p className="text-gray-500 text-sm mb-3">{desc}</p>
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">
                    {fmt(prices?.inbound?.[i] || 0)}
                  </div>
                  <p className="text-gray-400 text-sm mb-5">/mois</p>
                  <Link href={'/fr/contact?plan=inbound-' + label.toLowerCase()}
                    className={[
                      'block text-center py-2.5 rounded-lg font-semibold text-sm',
                      pop ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
                    ].join(' ')}>
                    Choisir
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Custom CTA */}
          <div className="text-center bg-blue-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-3">Volume superieur ou solution sur mesure?</h3>
            <Link href="/fr/contact?plan=sur-mesure"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700">
              Demander un Devis
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
