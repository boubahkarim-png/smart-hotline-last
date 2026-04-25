'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { StarIcon } from '@/components/Icons'

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
    {/* SECTION 1: HERO - Modern design with image */}
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[40%]">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              💰 Tarifs Transparents
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
              20 à 40%<br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Moins Cher Que le Marché</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prix adaptés automatiquement à votre région. Sans frais cachés, sans surprises.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#tarifs" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-800 text-center shadow-xl">
                Voir les Tarifs
              </Link>
              <Link href="/fr/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 hover:text-white transition-all text-center">
                Devis Personnalisé
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <img src={`${basePath}/images/pricing-hero.webp`} alt="Tarifs transparents" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{maxHeight:'500px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 2: Pricing Sliders - LIGHT (bg-white implicit) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* OUTBOUND */}
          <PricingSlider title="Appels Sortants" subtitle="Conseillers professionnels — facturation à l'heure" accentColor="bg-blue-700">

            {/* Trial card */}
            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Offre Essai</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Démarrage</h3>
              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/semaine, 2 semaines</p>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">/heure</p>
              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
                OU : 1 semaine offerte — payez seulement 3 semaines
              </p>
              <Link href="/fr/contact?plan=essai"
                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
                Démarrer l'Essai
              </Link>
            </div>

            {[
              { name: "Starter", desc: "20h/semaine", i: 0, features: ["Conseiller dédié", "Scripts sur mesure", "Rapport quotidien"] },
              { name: "Professionnel", desc: "40h/semaine", i: 1, popular: true, features: ["2 conseillers", "CRM intégré", "Rapport temps réel"] },
              { name: "Business", desc: "80h/semaine", i: 2, features: ["4 conseillers", "Manager dédié", "SLA garanti"] },
              { name: "Enterprise", desc: "120h/semaine — 3 agents", i: 3, features: ["6 conseillers", "Account manager", "Tarif dégressif"] },
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
            subtitle="Tarification à la minute — marché -30% — disponible 24/7"
            accentColor="bg-violet-600">
            {[
              { name: "Starter", desc: "Jusqu'à 1 000 min/mois", i: 0, features: ["Réponse < 2 sec", "Français natif", "Prise de messages"] },
              { name: "Professionnel", desc: "Jusqu'à 3 000 min/mois", i: 1, popular: true, features: ["Tout Starter +", "Prise de RDV", "Intégration CRM"] },
              { name: "Business", desc: "Jusqu'à 8 000 min/mois", i: 2, features: ["Tout Pro +", "Transfert conseiller", "Tableau de bord"] },
              { name: "Enterprise", desc: "Volume illimité", i: 3, features: ["Tout Business +", "SLA 99.9%", "Support prioritaire"] },
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
          <PricingSlider title="Appels Entrants" subtitle="Forfaits mensuels — conseillers dédiés" accentColor="bg-teal-600">
            {[
              { name: "Basic", desc: "Jusqu'à 500 appels/mois", i: 0, features: ["Réception 24/7", "Bilingue FR/EN", "Rapport mensuel"] },
              { name: "Advanced", desc: "Jusqu'à 1 500 appels/mois", i: 1, popular: true, features: ["Tout Basic +", "Transfert intelligent", "Rapport hebdo"] },
              { name: "Premium", desc: "Jusqu'à 2 500 appels/mois", i: 2, features: ["Tout Advanced +", "Conseiller dédié", "SLA garanti"] },
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

		{/* CRM */}
          <PricingSlider title="CRM & Listes" subtitle="SuiteCRM intégré + listes de prospection" accentColor="bg-indigo-600">
            {[
              { name: "Starter", desc: "500 contacts/mois", i: 0, features: ["CRM SuiteCRM", "500 leads/mois", "Intégration email"] },
              { name: "Pro", desc: "2 000 contacts + listes", i: 1, popular: true, features: ["Tout Starter +", "Listes B2B/B2C", "Automatisations"] },
              { name: "Enterprise", desc: "Illimité + sur mesure", i: 2, features: ["Tout Pro +", "Intégrations custom", "Account manager"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.crm_monthly[i])} unit="mois"
                popular={popular} accent="bg-indigo-600"
                ctaHref={`/fr/contact?plan=crm-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

        </div>
      </section>

      {/* SECTION 3: FAQ - LIGHT (bg-slate-50) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
            <p className="text-slate-500">Tout ce que vous devez savoir avant de commencer</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Vraiment, combien de temps pour démarrer?', a: 'En général 48h. Mais ça dépend de vous. Si vous nous donnez vos scripts et infos aujourd\'hui, on peut être opérationnels demain. Le plus long, c\'est souvent de vous décider — et ça, on comprend.' },
              { q: 'Y a-t-il un engagement minimum?', a: 'Non, zéro. Vous pouvez arrêter du jour au lendemain avec 7 jours de préavis. Pourquoi? Parce qu\'on sait que si ça fonctionne pas, vous partirez anyway. Autant être transparents.' },
              { q: 'Comment ça fonctionne la facturation?', a: 'Simple. Sortants : vous payez les heures réellement utilisées. Entrants : forfait mensuel. Agents IA : à la minute. Pas de frais cachés, pas de surprise sur la facture.' },
              { q: 'Quels accents vous avez?', a: 'Québec (standard et joual léger), France (parisien et régional), Belgique, Suisse. Pour l\'IA, c\'est au choix. Pour les conseillers humains, on vous assigne quelqu\'un qui matche votre clientèle.' },
              { q: 'Puis-je changer de forfait?', a: 'Oui, à tout moment. Up ou down. La facturation s\'ajuste au prorata. Si vous grandissez, on grandit avec vous. Si vous ralentissez, on s\'adapte.' },
              { q: 'Mes données sont-elles sécurisées?', a: 'Hébergement au Canada (et UE pour clients européens). Chiffrement bout en bout. RGPD + Loi 25. On ne vend rien, on ne partage rien. Vos données = vos données.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Testimonials - LIGHT (bg-white) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Ce que disent nos clients</h2>
            <p className="text-slate-500">Plus de 500 PME nous font confiance</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: "J'ai comparé 3 centres d'appels. Vous êtes le seul où les agents comprennent vraiment ce que je fais. Et ça se sent quand mes clients appellent.", name: 'Marie-Claire Dupont', role: 'CEO, StartupTech — Mile-End, Montréal', av: 'MD' },
              { q: "Mon comptable m'a dit : 'Tu devrais engager une réceptionniste.' J'ai dit non, j'ai pris Smart Hotline. Résultat? 40% moins cher, et je peux scaler demain si je veux.", name: 'Philippe Martin', role: 'Fondateur, AgenceDigitale — Lyon, France', av: 'PM' },
              { q: "Pendant l'essai de 2 semaines, ils ont pris 87 appels pour moi. J'ai signé le contrat le jour 10. Pas besoin de plus.", name: 'Stéphanie Bernier', role: 'Directrice, Cabinet Conseil — Paris 11e', av: 'SB' },
            ].map(({ q, name, role, av }) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: How it Works - LIGHT (bg-slate-50) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Comment ça marche</h2>
            <p className="text-slate-500">De l'appel initial au déploiement en 4 étapes</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'Appel Découverte', d: '30 min pour comprendre vos besoins et objectifs' },
              { n: '2', t: 'Proposition', d: 'Devis personnalisé sous 24h avec tarifs adaptés' },
              { n: '3', t: 'Configuration', d: 'Scripts, formation et tests en 48h' },
              { n: '4', t: 'Lancement', d: 'Vos appels pris en charge, suivi en temps réel' },
            ].map(({ n, t, d }) => (
              <div key={n} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Custom Pricing CTA - DARK */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Volume supérieur ou solution sur mesure?</h2>
          <p className="text-white text-lg mb-8">On crée des offres personnalisées pour les grandes équipes et les besoins spécifiques. Vous avez un projet particulier? On en parle.</p>
          <Link href="/fr/contact?plan=sur-mesure"
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Demander un Devis Personnalisé
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-white text-sm mt-6">Réponse sous 24h — sans engagement</p>
        </div>
      </section>

      {/* SECTION 7: Final CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à économiser 40% sur vos appels?</h2>
          <p className="text-white text-lg mb-8">Essai de 2 semaines. Si c'est pas pour vous, on vous laisse tranquille. Pas de pression.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Demander un Devis Gratuit
            </Link>
            <a href="tel:+15148190559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 514 819-0559
            </a>
          </div>
          <p className="text-white text-sm mt-8">Ouvert 24/7 - Réponse immédiate</p>
        </div>
      </section>

      {/* SECTION 8: Nos Engagements - LIGHT (bg-white) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Engagements</h2>
            <p className="text-slate-500">Pourquoi plus de 500 PME restent avec nous</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🛡️', t: 'Données Protégées', d: 'Hébergement local, chiffrement E2E, RGPD et Loi 25. Vos infos ne quittent pas nos serveurs sécurisés.' },
              { icon: '⚡', t: 'Dispo 24/7/365', d: 'Vos appels sont pris même quand vous dormez. Weekends, fêtes, 3h du matin — on est là.' },
              { icon: '💰', t: 'Prix Transparents', d: 'Pas de frais cachés, pas de surprises. Vous savez exactement ce que vous payez avant de signer.' },
              { icon: '🤝', t: 'Contrat Flexible', d: 'Zéro engagement forcé. 7 jours de préavis et vous êtes libre. On préfère vous garder par choix, pas par force.' },
            ].map(({ icon, t, d }) => (
              <div key={t} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-6">Des questions? On répond en moins de 2h en moyenne.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
                Nous Contacter
              </Link>
              <a href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                direction@smart-hotline.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
