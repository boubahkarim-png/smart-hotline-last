'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import type { Metadata } from 'next'

function PricingSlider({
  title, subtitle, accentColor, children
}: {
  title: string, subtitle?: string, accentColor: string, children: React.ReactNode
}) {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
        {subtitle && <p className="text-slate-500">{subtitle}</p>}
        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

function PricingCard({
  name, desc, price, unit, popular, accent, ctaHref, features
}: {
  name: string, desc: string, price: string, unit: string,
  popular?: boolean, accent: string, ctaHref: string, features?: string[]
}) {
  return (
    <div className={`
      flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative
      ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'}
    `}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className={`${accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>Populaire</span>
        </div>
      )}
      <h3 className="font-bold text-lg text-slate-900 mb-1">{name}</h3>
      <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{desc}</p>
      <div className="mb-1">
        <span className={`text-4xl font-extrabold ${accent.replace('bg-', 'text-')}`}>{price}</span>
      </div>
      <p className="text-slate-400 text-sm mb-5">/{unit}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold">&#10003;</span> {f}
            </li>
          ))}
        </ul>
      )}
      <Link href={ctaHref}
        className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors
          ${popular
            ? `${accent} text-white hover:opacity-90`
            : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}`
          }`}>
        Choisir
      </Link>
    </div>
  )
}

export default function Tarifs() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol
  const fmt = (n: number) => loading ? '...' : `${sym}${n}`
  const fmtDec = (n: number) => loading ? '...' : `${sym}${n.toFixed(2)}`

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Tarifs Transparents</h1>
          <p className="text-xl text-blue-200 mb-4">20 \u00e0 40% moins chers que le march\u00e9</p>
          <p className="text-blue-300 text-sm">Prix adapt\u00e9s automatiquement \u00e0 votre r\u00e9gion</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* OUTBOUND */}
          <PricingSlider title="Appels Sortants" subtitle="Conseillers professionnels \u2014 facturation \u00e0 l\u2019heure" accentColor="bg-blue-700">

            {/* Trial card */}
            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Offre Essai</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">D\u00e9marrage</h3>
              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/semaine, 2 semaines</p>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">/heure</p>
              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
                OU : 1 semaine offerte \u2014 payez seulement 3 semaines
              </p>
              <Link href="/fr/contact?plan=essai"
                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
                D\u00e9marrer l\u2019Essai
              </Link>
            </div>

            {[
              { name: "Starter", desc: "20h/semaine", i: 0, features: ["Conseiller d\u00e9di\u00e9", "Scripts sur mesure", "Rapport quotidien"] },
              { name: "Professionnel", desc: "40h/semaine", i: 1, popular: true, features: ["2 conseillers", "CRM int\u00e9gr\u00e9", "Rapport temps r\u00e9el"] },
              { name: "Business", desc: "80h/semaine", i: 2, features: ["4 conseillers", "Manager d\u00e9di\u00e9", "SLA garanti"] },
              { name: "Enterprise", desc: "120h/semaine \u2014 3 agents", i: 3, features: ["6 conseillers", "Account manager", "Tarif d\u00e9gressif"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.outbound[i])} unit="heure"
                popular={popular} accent="bg-blue-700"
                ctaHref={`/fr/contact?plan=outbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* AI AGENTS */}
          <PricingSlider
            title="Agents IA Vocaux"
            subtitle="Tarification \u00e0 la minute \u2014 march\u00e9 -30% \u2014 disponible 24/7"
            accentColor="bg-violet-600">
            {[
              { name: "Starter", desc: "Jusqu\u2019\u00e0 1\u00a0000 min/mois", i: 0, features: ["R\u00e9ponse < 2 sec", "Fran\u00e7ais natif", "Prise de messages"] },
              { name: "Professionnel", desc: "Jusqu\u2019\u00e0 3\u00a0000 min/mois", i: 1, popular: true, features: ["Tout Starter +", "Prise de RDV", "Int\u00e9gration CRM"] },
              { name: "Business", desc: "Jusqu\u2019\u00e0 8\u00a0000 min/mois", i: 2, features: ["Tout Pro +", "Transfert conseiller", "Tableau de bord"] },
              { name: "Enterprise", desc: "Volume illimit\u00e9", i: 3, features: ["Tout Business +", "SLA 99.9%", "Support prioritaire"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmtDec(prices.ai_per_min[i])} unit="minute"
                popular={popular} accent="bg-violet-600"
                ctaHref={`/fr/contact?plan=ia-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* INBOUND */}
          <PricingSlider title="Appels Entrants" subtitle="Forfaits mensuels \u2014 conseillers d\u00e9di\u00e9s" accentColor="bg-teal-600">
            {[
              { name: "Basic", desc: "Jusqu\u2019\u00e0 500 appels/mois", i: 0, features: ["R\u00e9ception 24/7", "Bilingue FR/EN", "Rapport mensuel"] },
              { name: "Advanced", desc: "Jusqu\u2019\u00e0 1\u00a0500 appels/mois", i: 1, popular: true, features: ["Tout Basic +", "Transfert intelligent", "Rapport hebdo"] },
              { name: "Premium", desc: "Jusqu\u2019\u00e0 2\u00a0500 appels/mois", i: 2, features: ["Tout Advanced +", "Conseiller d\u00e9di\u00e9", "SLA garanti"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.inbound[i])} unit="mois"
                popular={popular} accent="bg-teal-600"
                ctaHref={`/fr/contact?plan=inbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* SUPPORT */}
          <PricingSlider title="Support Client" subtitle="Tickets, email, chat \u2014 multi-canal" accentColor="bg-cyan-600">
            {[
              { name: "Basic", desc: "Jusqu\u2019\u00e0 300 tickets/mois", i: 0, features: ["Email + t\u00e9l\u00e9phone", "Rapport mensuel", "R\u00e9ponse < 8h"] },
              { name: "Pro", desc: "Jusqu\u2019\u00e0 800 tickets/mois", i: 1, popular: true, features: ["Tout Basic +", "Chat live", "R\u00e9ponse < 4h"] },
              { name: "Premium", desc: "Volume illimit\u00e9", i: 2, features: ["Tout Pro +", "WhatsApp Business", "R\u00e9ponse < 2h"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.support[i])} unit="mois"
                popular={popular} accent="bg-cyan-600"
                ctaHref={`/fr/contact?plan=support-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* CRM */}
          <PricingSlider title="CRM & Listes" subtitle="SuiteCRM int\u00e9gr\u00e9 + listes de prospection" accentColor="bg-indigo-600">
            {[
              { name: "Starter", desc: "500 contacts/mois", i: 0, features: ["CRM SuiteCRM", "500 leads/mois", "Int\u00e9gration email"] },
              { name: "Pro", desc: "2\u00a0000 contacts + listes", i: 1, popular: true, features: ["Tout Starter +", "Listes B2B/B2C", "Automatisations"] },
              { name: "Enterprise", desc: "Illimit\u00e9 + sur mesure", i: 2, features: ["Tout Pro +", "Int\u00e9grations custom", "Account manager"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.crm[i])} unit="mois"
                popular={popular} accent="bg-indigo-600"
                ctaHref={`/fr/contact?plan=crm-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* Custom */}
          <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-3">Volume sup\u00e9rieur ou solution sur mesure?</h3>
            <p className="text-blue-200 mb-8">Nous cr\u00e9ons des offres personnalis\u00e9es pour les grandes \u00e9quipes et les besoins sp\u00e9cifiques.</p>
            <Link href="/fr/contact?plan=sur-mesure"
              className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Demander un Devis
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
