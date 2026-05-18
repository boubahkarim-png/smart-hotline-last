     1|'use client'

export const metadata = {
  title: "Smart Hotline | Tarifs Centre d'Appels PME | À partir de 15$/h",
  description: "Tarifs transparents. À partir de 15$/h. Forfaits flexibles 20h à 120h/semaine. CAD, EUR, USD, CHF acceptés. Essai gratuit 2 semaines.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { StarIcon } from '@/components/Icons'
     6|
     7|function PricingSlider({
     8|  title, subtitle, accentColor, children
     9|}: {
    10|  title: string, subtitle?: string, accentColor: string, children: React.ReactNode
    11|}) {
    12|  return (
    13|    <div className="mb-20">
    14|      <div className="text-center mb-10">
    15|        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    16|        {subtitle && <p className="text-slate-500">{subtitle}</p>}
    17|        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
    18|      </div>
    19|      <div className="relative">
    20|        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1
    21|        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    22|          {children}
    23|        </div>
    24|      </div>
    25|    </div>
    26|  )
    27|}
    28|
    29|function PricingCard({
    30|  name, desc, price, unit, popular, accent, ctaHref, features
    31|}: {
    32|  name: string, desc: string, price: string, unit: string,
    33|  popular?: boolean, accent: string, ctaHref: string, features?: string[]
    34|}) {
    35|  return (
    36|    <div className={`
    37|      flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative
    38|      ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'}
    39|    `}>
    40|      {popular && (
    41|        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
    42|          <span className={`${accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>Populaire</span>
    43|        </div>
    44|      )}
    45|      <h3 className="font-bold text-lg text-slate-900 mb-1">{name}</h3>
    46|      <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{desc}</p>
    47|      <div className="mb-1">
    48|        <span className={`text-4xl font-extrabold ${accent.replace('bg-', 'text-')}`}>{price}</span>
    49|      </div>
    50|      <p className="text-slate-400 text-sm mb-5">/{unit}</p>
    51|      {features && (
    52|        <ul className="space-y-2 mb-6">
    53|          {features.map(f => (
    54|            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
    55|              <span className="text-green-500 font-bold">&#10003;</span> {f}
    56|            </li>
    57|          ))}
    58|        </ul>
    59|      )}
    60|      <Link href={ctaHref}
    61|        className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors
    62|        ${popular
    63|          ? `${accent} text-white hover:opacity-90`
    64|          : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}`
    65|        }`}>
    66|        Choisir
    67|      </Link>
    68|    </div>
    69|  )
    70|}
    71|
    72|export default function Tarifs() {
    73|  const { prices, loading } = useGeo()
    74|  const sym = prices.symbol
    75|  const fmt = (n: number) => loading ? '...' : `${sym}${n}`
    76|  const fmtDec = (n: number) => loading ? '...' : `${sym}${n.toFixed(2)}`
    77|
    78|  return (
    79|    <>
    80|    {/* SECTION 1: HERO - Modern design with image */}
    81|    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    82|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    83|        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    84|          <div className="w-full lg:w-[40%]">
    85|            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
    86|              💰 Tarifs Transparents
    87|            </span>
    88|            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    89|              20 à 40%<br/>
    90|              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Moins Cher Que le Marché</span>
    91|            </h1>
    92|            <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prix adaptés automatiquement à votre région. Sans frais cachés, sans surprises.</p>
    93|            <div className="flex flex-col sm:flex-row gap-4">
    94|              <Link href="#tarifs" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-800 text-center shadow-xl">
    95|                Voir les Tarifs
    96|              </Link>
    97|              <Link href="/fr/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 hover:text-white transition-all text-center">
    98|                Devis Personnalisé
    99|              </Link>
   100|            </div>
   101|          </div>
   102|          <div className="w-full lg:w-[60%]">
   103|            <div className="relative">
   104|              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
   105|              <img src={`${basePath}/images/pricing-hero.webp`} alt="Tarifs transparents" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{maxHeight:'500px', objectFit:'cover'}}/>
   106|            </div>
   107|          </div>
   108|        </div>
   109|      </div>
   110|    </section>
   111|
   112|      {/* SECTION 2: Pricing Sliders - LIGHT (bg-white implicit) */}
   113|      <section className="py-16 bg-white">
   114|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   115|
   116|          {/* OUTBOUND */}
   117|          <PricingSlider title="Appels Sortants" subtitle="Conseillers professionnels — facturation à l'heure" accentColor="bg-blue-700">
   118|
   119|            {/* Trial card */}
   120|            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
   121|              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
   122|                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Offre Essai</span>
   123|              </div>
   124|              <h3 className="font-bold text-lg text-slate-900 mb-1">Démarrage</h3>
   125|              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/semaine, 2 semaines</p>
   126|              <div className="mb-1">
   127|                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
   128|              </div>
   129|              <p className="text-slate-400 text-sm mb-3">/heure</p>
   130|              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
   131|                OU : 1 semaine offerte — payez seulement 3 semaines
   132|              </p>
   133|              <Link href="/fr/contact?plan=essai"
   134|                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
   135|                Démarrer l'Essai
   136|              </Link>
   137|            </div>
   138|
   139|            {[
   140|              { name: "Starter", desc: "20h/semaine", i: 0, features: ["Conseiller dédié", "Scripts sur mesure", "Rapport quotidien"] },
   141|              { name: "Professionnel", desc: "40h/semaine", i: 1, popular: true, features: ["2 conseillers", "CRM intégré", "Rapport temps réel"] },
   142|              { name: "Business", desc: "80h/semaine", i: 2, features: ["4 conseillers", "Manager dédié", "SLA garanti"] },
   143|              { name: "Enterprise", desc: "120h/semaine — 3 agents", i: 3, features: ["6 conseillers", "Account manager", "Tarif dégressif"] },
   144|            ].map(({ name, desc, i, popular, features }) => (
   145|              <PricingCard key={name}
   146|                name={name} desc={desc}
   147|                price={fmt(prices.outbound[i])} unit="heure"
   148|                popular={popular} accent="bg-blue-700"
   149|                ctaHref={`/fr/contact?plan=outbound-${name.toLowerCase()}`}
   150|                features={features}
   151|              />
   152|            ))}
   153|          </PricingSlider>
   154|
   155|          {/* AI AGENTS */}
   156|          <PricingSlider
   157|            title="Agents IA Vocaux"
   158|            subtitle="Tarification à la minute — marché -30% — disponible 24/7"
   159|            accentColor="bg-violet-600">
   160|            {[
   161|              { name: "Starter", desc: "Jusqu'à 1 000 min/mois", i: 0, features: ["Réponse < 2 sec", "Français natif", "Prise de messages"] },
   162|              { name: "Professionnel", desc: "Jusqu'à 3 000 min/mois", i: 1, popular: true, features: ["Tout Starter +", "Prise de RDV", "Intégration CRM"] },
   163|              { name: "Business", desc: "Jusqu'à 8 000 min/mois", i: 2, features: ["Tout Pro +", "Transfert conseiller", "Tableau de bord"] },
   164|              { name: "Enterprise", desc: "Volume illimité", i: 3, features: ["Tout Business +", "SLA 99.9%", "Support prioritaire"] },
   165|            ].map(({ name, desc, i, popular, features }) => (
   166|              <PricingCard key={name}
   167|                name={name} desc={desc}
   168|                price={fmtDec(prices.ai_per_min[i])} unit="minute"
   169|                popular={popular} accent="bg-violet-600"
   170|                ctaHref={`/fr/contact?plan=ia-${name.toLowerCase()}`}
   171|                features={features}
   172|              />
   173|            ))}
   174|          </PricingSlider>
   175|
   176|          {/* INBOUND */}
   177|          <PricingSlider title="Appels Entrants" subtitle="Forfaits mensuels — conseillers dédiés" accentColor="bg-teal-600">
   178|            {[
   179|              { name: "Basic", desc: "Jusqu'à 500 appels/mois", i: 0, features: ["Réception 24/7", "Bilingue FR/EN", "Rapport mensuel"] },
   180|              { name: "Advanced", desc: "Jusqu'à 1 500 appels/mois", i: 1, popular: true, features: ["Tout Basic +", "Transfert intelligent", "Rapport hebdo"] },
   181|              { name: "Premium", desc: "Jusqu'à 2 500 appels/mois", i: 2, features: ["Tout Advanced +", "Conseiller dédié", "SLA garanti"] },
   182|            ].map(({ name, desc, i, popular, features }) => (
   183|              <PricingCard key={name}
   184|                name={name} desc={desc}
   185|                price={fmt(prices.inbound[i])} unit="mois"
   186|                popular={popular} accent="bg-teal-600"
   187|                ctaHref={`/fr/contact?plan=inbound-${name.toLowerCase()}`}
   188|                features={features}
   189|              />
   190|            ))}
   191|		</PricingSlider>
   192|
   193|		{/* CRM */}
   194|          <PricingSlider title="CRM & Listes" subtitle="SuiteCRM intégré + listes de prospection" accentColor="bg-indigo-600">
   195|            {[
   196|              { name: "Starter", desc: "500 contacts/mois", i: 0, features: ["CRM SuiteCRM", "500 leads/mois", "Intégration email"] },
   197|              { name: "Pro", desc: "2 000 contacts + listes", i: 1, popular: true, features: ["Tout Starter +", "Listes B2B/B2C", "Automatisations"] },
   198|              { name: "Enterprise", desc: "Illimité + sur mesure", i: 2, features: ["Tout Pro +", "Intégrations custom", "Account manager"] },
   199|            ].map(({ name, desc, i, popular, features }) => (
   200|              <PricingCard key={name}
   201|                name={name} desc={desc}
   202|                price={fmt(prices.crm_monthly[i])} unit="mois"
   203|                popular={popular} accent="bg-indigo-600"
   204|                ctaHref={`/fr/contact?plan=crm-${name.toLowerCase()}`}
   205|                features={features}
   206|              />
   207|            ))}
   208|          </PricingSlider>
   209|
   210|        </div>
   211|      </section>
   212|
   213|      {/* SECTION 3: FAQ - LIGHT (bg-slate-50) */}
   214|      <section className="py-20 bg-slate-50">
   215|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   216|          <div className="text-center mb-12">
   217|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
   218|            <p className="text-slate-500">Tout ce que vous devez savoir avant de commencer</p>
   219|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   220|          </div>
   221|          <div className="space-y-4">
   222|            {[
   223|              { q: 'Vraiment, combien de temps pour démarrer?', a: 'En général 48h. Mais ça dépend de vous. Si vous nous donnez vos scripts et infos aujourd\'hui, on peut être opérationnels demain. Le plus long, c\'est souvent de vous décider — et ça, on comprend.' },
   224|              { q: 'Y a-t-il un engagement minimum?', a: 'Non, zéro. Vous pouvez arrêter du jour au lendemain avec 7 jours de préavis. Pourquoi? Parce qu\'on sait que si ça fonctionne pas, vous partirez anyway. Autant être transparents.' },
   225|              { q: 'Comment ça fonctionne la facturation?', a: 'Simple. Sortants : vous payez les heures réellement utilisées. Entrants : forfait mensuel. Agents IA : à la minute. Pas de frais cachés, pas de surprise sur la facture.' },
   226|              { q: 'Quels accents vous avez?', a: 'Québec (standard et joual léger), France (parisien et régional), Belgique, Suisse. Pour l\'IA, c\'est au choix. Pour les conseillers humains, on vous assigne quelqu\'un qui matche votre clientèle.' },
   227|              { q: 'Puis-je changer de forfait?', a: 'Oui, à tout moment. Up ou down. La facturation s\'ajuste au prorata. Si vous grandissez, on grandit avec vous. Si vous ralentissez, on s\'adapte.' },
   228|              { q: 'Mes données sont-elles sécurisées?', a: 'Hébergement au Canada (et UE pour clients européens). Chiffrement bout en bout. RGPD + Loi 25. On ne vend rien, on ne partage rien. Vos données = vos données.' },
   229|            ].map(({ q, a }, i) => (
   230|              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
   231|                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
   232|                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
   233|                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
   234|                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
   235|                  </span>
   236|                </summary>
   237|                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
   238|              </details>
   239|            ))}
   240|          </div>
   241|        </div>
   242|      </section>
   243|
   244|      {/* SECTION 4: Testimonials - LIGHT (bg-white) */}
   245|      <section className="py-20 bg-white">
   246|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   247|          <div className="text-center mb-12">
   248|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Ce que disent nos clients</h2>
   249|            <p className="text-slate-500">Plus de 500 PME nous font confiance</p>
   250|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   251|          </div>
   252|          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   253|            {[
   254|              { q: "J'ai comparé 3 centres d'appels. Vous êtes le seul où les agents comprennent vraiment ce que je fais. Et ça se sent quand mes clients appellent.", name: 'Marie-Claire Dupont', role: 'CEO, StartupTech — Mile-End, Montréal', av: 'MD' },
   255|              { q: "Mon comptable m'a dit : 'Tu devrais engager une réceptionniste.' J'ai dit non, j'ai pris Smart Hotline. Résultat? 40% moins cher, et je peux scaler demain si je veux.", name: 'Philippe Martin', role: 'Fondateur, AgenceDigitale — Lyon, France', av: 'PM' },
   256|              { q: "Pendant l'essai de 2 semaines, ils ont pris 87 appels pour moi. J'ai signé le contrat le jour 10. Pas besoin de plus.", name: 'Stéphanie Bernier', role: 'Directrice, Cabinet Conseil — Paris 11e', av: 'SB' },
   257|            ].map(({ q, name, role, av }) => (
   258|              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
   259|                <div className="flex gap-0.5 mb-4">
   260|                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
   261|                </div>
   262|                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
   263|                <div className="flex items-center gap-3">
   264|                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
   265|                  <div>
   266|                    <p className="font-bold text-slate-900 text-sm">{name}</p>
   267|                    <p className="text-slate-500 text-xs">{role}</p>
   268|                  </div>
   269|                </div>
   270|              </div>
   271|            ))}
   272|          </div>
   273|        </div>
   274|      </section>
   275|
   276|      {/* SECTION 5: How it Works - LIGHT (bg-slate-50) */}
   277|      <section className="py-20 bg-slate-50">
   278|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   279|          <div className="text-center mb-12">
   280|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Comment ça marche</h2>
   281|            <p className="text-slate-500">De l'appel initial au déploiement en 4 étapes</p>
   282|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   283|          </div>
   284|          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
   285|            {[
   286|              { n: '1', t: 'Appel Découverte', d: '30 min pour comprendre vos besoins et objectifs' },
   287|              { n: '2', t: 'Proposition', d: 'Devis personnalisé sous 24h avec tarifs adaptés' },
   288|              { n: '3', t: 'Configuration', d: 'Scripts, formation et tests en 48h' },
   289|              { n: '4', t: 'Lancement', d: 'Vos appels pris en charge, suivi en temps réel' },
   290|            ].map(({ n, t, d }) => (
   291|              <div key={n} className="text-center">
   292|                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
   293|                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
   294|                <p className="text-slate-500 text-sm">{d}</p>
   295|              </div>
   296|            ))}
   297|          </div>
   298|        </div>
   299|      </section>
   300|
   301|      {/* SECTION 6: Custom Pricing CTA - DARK */}
   302|      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900">
   303|        <div className="max-w-4xl mx-auto px-4 text-center">
   304|          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Volume supérieur ou solution sur mesure?</h2>
   305|          <p className="text-white text-lg mb-8">On crée des offres personnalisées pour les grandes équipes et les besoins spécifiques. Vous avez un projet particulier? On en parle.</p>
   306|          <Link href="/fr/contact?plan=sur-mesure"
   307|            className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   308|            Demander un Devis Personnalisé
   309|            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
   310|          </Link>
   311|          <p className="text-white text-sm mt-6">Réponse sous 24h — sans engagement</p>
   312|        </div>
   313|      </section>
   314|
   315|      {/* SECTION 7: Final CTA - DARK */}
   316|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
   317|        <div className="max-w-4xl mx-auto px-4 text-center">
   318|          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à économiser 40% sur vos appels?</h2>
   319|          <p className="text-white text-lg mb-8">Essai de 2 semaines. Si c'est pas pour vous, on vous laisse tranquille. Pas de pression.</p>
   320|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   321|            <Link href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   322|              Demander un Devis Gratuit
   323|            </Link>
   324|            <a href="tel:+151****0559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
   325|              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
   326|              +1 514 819-0559
   327|            </a>
   328|          </div>
   329|          <p className="text-white text-sm mt-8">Ouvert 24/7 - Réponse immédiate</p>
   330|        </div>
   331|      </section>
   332|
   333|      {/* SECTION 8: Nos Engagements - LIGHT (bg-white) */}
   334|      <section className="py-20 bg-white">
   335|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   336|          <div className="text-center mb-12">
   337|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Engagements</h2>
   338|            <p className="text-slate-500">Pourquoi plus de 500 PME restent avec nous</p>
   339|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   340|          </div>
   341|          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
   342|            {[
   343|              { icon: '🛡️', t: 'Données Protégées', d: 'Hébergement local, chiffrement E2E, RGPD et Loi 25. Vos infos ne quittent pas nos serveurs sécurisés.' },
   344|              { icon: '⚡', t: 'Dispo 24/7/365', d: 'Vos appels sont pris même quand vous dormez. Weekends, fêtes, 3h du matin — on est là.' },
   345|              { icon: '💰', t: 'Prix Transparents', d: 'Pas de frais cachés, pas de surprises. Vous savez exactement ce que vous payez avant de signer.' },
   346|              { icon: '🤝', t: 'Contrat Flexible', d: 'Zéro engagement forcé. 7 jours de préavis et vous êtes libre. On préfère vous garder par choix, pas par force.' },
   347|            ].map(({ icon, t, d }) => (
   348|              <div key={t} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
   349|                <div className="text-4xl mb-4">{icon}</div>
   350|                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
   351|                <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
   352|              </div>
   353|            ))}
   354|          </div>
   355|          <div className="mt-12 text-center">
   356|            <p className="text-slate-400 text-sm mb-6">Des questions? On répond en moins de 2h en moyenne.</p>
   357|            <div className="flex flex-col sm:flex-row gap-4 justify-center">
   358|              <Link href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
   359|                Nous Contacter
   360|              </Link>
   361|              <a href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
   362|                direction@smart-hotline.com
   363|              </a>
   364|            </div>
   365|          </div>
   366|        </div>
   367|      </section>
   368|    </>
   369|  )
   370|}
   371|