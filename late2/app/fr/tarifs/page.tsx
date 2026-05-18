import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('pricing', 'fr'),
}

     1|'use client'
     2|import Link from 'next/link'
     3|import { useGeo } from '@/hooks/useGeo'
     4|import { StarIcon } from '@/components/Icons'
     5|
     6|function PricingSlider({
     7|  title, subtitle, accentColor, children
     8|}: {
     9|  title: string, subtitle?: string, accentColor: string, children: React.ReactNode
    10|}) {
    11|  return (
    12|    <div className="mb-20">
    13|      <div className="text-center mb-10">
    14|        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    15|        {subtitle && <p className="text-slate-500">{subtitle}</p>}
    16|        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
    17|      </div>
    18|      <div className="relative">
    19|        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1
    20|          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    21|          {children}
    22|        </div>
    23|      </div>
    24|    </div>
    25|  )
    26|}
    27|
    28|function PricingCard({
    29|  name, desc, price, unit, popular, accent, ctaHref, features
    30|}: {
    31|  name: string, desc: string, price: string, unit: string,
    32|  popular?: boolean, accent: string, ctaHref: string, features?: string[]
    33|}) {
    34|  return (
    35|    <div className={`
    36|      flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative
    37|      ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'}
    38|    `}>
    39|      {popular && (
    40|        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
    41|          <span className={`${accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>Populaire</span>
    42|        </div>
    43|      )}
    44|      <h3 className="font-bold text-lg text-slate-900 mb-1">{name}</h3>
    45|      <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{desc}</p>
    46|      <div className="mb-1">
    47|        <span className={`text-4xl font-extrabold ${accent.replace('bg-', 'text-')}`}>{price}</span>
    48|      </div>
    49|      <p className="text-slate-400 text-sm mb-5">/{unit}</p>
    50|      {features && (
    51|        <ul className="space-y-2 mb-6">
    52|          {features.map(f => (
    53|            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
    54|              <span className="text-green-500 font-bold">&#10003;</span> {f}
    55|            </li>
    56|          ))}
    57|        </ul>
    58|      )}
    59|      <Link href={ctaHref}
    60|        className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors
    61|          ${popular
    62|            ? `${accent} text-white hover:opacity-90`
    63|            : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}`
    64|          }`}>
    65|        Choisir
    66|      </Link>
    67|    </div>
    68|  )
    69|}
    70|
    71|export default function Tarifs() {
    72|  const { prices, loading } = useGeo()
    73|  const sym = prices.symbol
    74|  const fmt = (n: number) => loading ? '...' : `${sym}${n}`
    75|  const fmtDec = (n: number) => loading ? '...' : `${sym}${n.toFixed(2)}`
    76|
    77|  return (
    78|    <>
    79|      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
    80|        <div className="max-w-4xl mx-auto px-4 text-center">
    81|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Tarifs Transparents</h1>
    82|          <p className="text-xl text-blue-200 mb-4">20 à 40% moins chers que le marché</p>
    83|          <p className="text-blue-300 text-sm">Prix adaptés automatiquement à votre région</p>
    84|        </div>
    85|      </section>
    86|
    87|      <section className="py-16">
    88|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    89|
    90|          {/* OUTBOUND */}
    91|          <PricingSlider title="Appels Sortants" subtitle="Conseillers professionnels — facturation à l’heure" accentColor="bg-blue-700">
    92|
    93|            {/* Trial card */}
    94|            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
    95|              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
    96|                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Offre Essai</span>
    97|              </div>
    98|              <h3 className="font-bold text-lg text-slate-900 mb-1">Démarrage</h3>
    99|              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/semaine, 2 semaines</p>
   100|              <div className="mb-1">
   101|                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
   102|              </div>
   103|              <p className="text-slate-400 text-sm mb-3">/heure</p>
   104|              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
   105|                OU : 1 semaine offerte — payez seulement 3 semaines
   106|              </p>
   107|              <Link href="/fr/contact?plan=essai"
   108|                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
   109|                Démarrer l’Essai
   110|              </Link>
   111|            </div>
   112|
   113|            {[
   114|              { name: "Starter", desc: "20h/semaine", i: 0, features: ["Conseiller dédié", "Scripts sur mesure", "Rapport quotidien"] },
   115|              { name: "Professionnel", desc: "40h/semaine", i: 1, popular: true, features: ["2 conseillers", "CRM intégré", "Rapport temps réel"] },
   116|              { name: "Business", desc: "80h/semaine", i: 2, features: ["4 conseillers", "Manager dédié", "SLA garanti"] },
   117|              { name: "Enterprise", desc: "120h/semaine — 3 agents", i: 3, features: ["6 conseillers", "Account manager", "Tarif dégressif"] },
   118|            ].map(({ name, desc, i, popular, features }) => (
   119|              <PricingCard key={name}
   120|                name={name} desc={desc}
   121|                price={fmt(prices.outbound[i])} unit="heure"
   122|                popular={popular} accent="bg-blue-700"
   123|                ctaHref={`/fr/contact?plan=outbound-${name.toLowerCase()}`}
   124|                features={features}
   125|              />
   126|            ))}
   127|          </PricingSlider>
   128|
   129|          {/* AI AGENTS */}
   130|          <PricingSlider
   131|            title="Agents IA Vocaux"
   132|            subtitle="Tarification à la minute — marché -30% — disponible 24/7"
   133|            accentColor="bg-violet-600">
   134|            {[
   135|              { name: "Starter", desc: "Jusqu’à 1 000 min/mois", i: 0, features: ["Réponse < 2 sec", "Français natif", "Prise de messages"] },
   136|              { name: "Professionnel", desc: "Jusqu’à 3 000 min/mois", i: 1, popular: true, features: ["Tout Starter +", "Prise de RDV", "Intégration CRM"] },
   137|              { name: "Business", desc: "Jusqu’à 8 000 min/mois", i: 2, features: ["Tout Pro +", "Transfert conseiller", "Tableau de bord"] },
   138|              { name: "Enterprise", desc: "Volume illimité", i: 3, features: ["Tout Business +", "SLA 99.9%", "Support prioritaire"] },
   139|            ].map(({ name, desc, i, popular, features }) => (
   140|              <PricingCard key={name}
   141|                name={name} desc={desc}
   142|                price={fmtDec(prices.ai_per_min[i])} unit="minute"
   143|                popular={popular} accent="bg-violet-600"
   144|                ctaHref={`/fr/contact?plan=ia-${name.toLowerCase()}`}
   145|                features={features}
   146|              />
   147|            ))}
   148|          </PricingSlider>
   149|
   150|          {/* INBOUND */}
   151|          <PricingSlider title="Appels Entrants" subtitle="Forfaits mensuels — conseillers dédiés" accentColor="bg-teal-600">
   152|            {[
   153|              { name: "Basic", desc: "Jusqu’à 500 appels/mois", i: 0, features: ["Réception 24/7", "Bilingue FR/EN", "Rapport mensuel"] },
   154|              { name: "Advanced", desc: "Jusqu’à 1 500 appels/mois", i: 1, popular: true, features: ["Tout Basic +", "Transfert intelligent", "Rapport hebdo"] },
   155|              { name: "Premium", desc: "Jusqu’à 2 500 appels/mois", i: 2, features: ["Tout Advanced +", "Conseiller dédié", "SLA garanti"] },
   156|            ].map(({ name, desc, i, popular, features }) => (
   157|              <PricingCard key={name}
   158|                name={name} desc={desc}
   159|                price={fmt(prices.inbound[i])} unit="mois"
   160|                popular={popular} accent="bg-teal-600"
   161|                ctaHref={`/fr/contact?plan=inbound-${name.toLowerCase()}`}
   162|                features={features}
   163|              />
   164|            ))}
   165|          </PricingSlider>
   166|
   167|          {/* SUPPORT */}
   168|          <PricingSlider title="Support Client" subtitle="Tickets, email, chat — multi-canal" accentColor="bg-cyan-600">
   169|            {[
   170|              { name: "Basic", desc: "Jusqu’à 300 tickets/mois", i: 0, features: ["Email + téléphone", "Rapport mensuel", "Réponse < 8h"] },
   171|              { name: "Pro", desc: "Jusqu’à 800 tickets/mois", i: 1, popular: true, features: ["Tout Basic +", "Chat live", "Réponse < 4h"] },
   172|              { name: "Premium", desc: "Volume illimité", i: 2, features: ["Tout Pro +", "WhatsApp Business", "Réponse < 2h"] },
   173|            ].map(({ name, desc, i, popular, features }) => (
   174|              <PricingCard key={name}
   175|                name={name} desc={desc}
   176|                price={fmt(prices.support[i])} unit="mois"
   177|                popular={popular} accent="bg-cyan-600"
   178|                ctaHref={`/fr/contact?plan=support-${name.toLowerCase()}`}
   179|                features={features}
   180|              />
   181|            ))}
   182|          </PricingSlider>
   183|
   184|          {/* CRM */}
   185|          <PricingSlider title="CRM & Listes" subtitle="SuiteCRM intégré + listes de prospection" accentColor="bg-indigo-600">
   186|            {[
   187|              { name: "Starter", desc: "500 contacts/mois", i: 0, features: ["CRM SuiteCRM", "500 leads/mois", "Intégration email"] },
   188|              { name: "Pro", desc: "2 000 contacts + listes", i: 1, popular: true, features: ["Tout Starter +", "Listes B2B/B2C", "Automatisations"] },
   189|              { name: "Enterprise", desc: "Illimité + sur mesure", i: 2, features: ["Tout Pro +", "Intégrations custom", "Account manager"] },
   190|            ].map(({ name, desc, i, popular, features }) => (
   191|              <PricingCard key={name}
   192|                name={name} desc={desc}
   193|                price={fmt(prices.crm[i])} unit="mois"
   194|                popular={popular} accent="bg-indigo-600"
   195|                ctaHref={`/fr/contact?plan=crm-${name.toLowerCase()}`}
   196|                features={features}
   197|              />
   198|            ))}
   199|          </PricingSlider>
   200|
   201|          {/* Custom */}
   202|          <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 text-white">
   203|            <h3 className="text-2xl font-bold mb-3">Volume supérieur ou solution sur mesure?</h3>
   204|            <p className="text-blue-200 mb-8">Nous créons des offres personnalisées pour les grandes équipes et les besoins spécifiques.</p>
   205|            <Link href="/fr/contact?plan=sur-mesure"
   206|              className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   207|        Demander un Devis
   208|        </Link>
   209|      </div>
   210|
   211|    </div>
   212|  </section>
   213|
   214|  {/* FAQ SECTION - bg-slate-50 */}
   215|  <section className="py-20 bg-slate-50">
   216|    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   217|      <div className="text-center mb-12">
   218|        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
   219|        <p className="text-slate-500">Tout ce que vous devez savoir avant de commencer</p>
   220|        <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   221|      </div>
   222|      <div className="space-y-4">
   223|{[
   224|{ q: 'Vraiment, combien de temps pour démarrer?', a: 'En général 48h. Mais ça dépend de vous. Si vous nous donnez vos scripts et infos aujourd\'hui, on peut être opérationnels demain. Le plus long, c\'est souvent de vous décider — et ça, on comprend.' },
   225|{ q: 'Y a-t-il un engagement minimum?', a: 'Non, zéro. Vous pouvez arrêter du jour au lendemain avec 7 jours de préavis. Pourquoi? Parce qu\'on sait que si ça fonctionne pas, vous partirez anyway. Autant être transparents.' },
   226|{ q: 'Comment ça fonctionne la facturation?', a: 'Simple. Sortants : vous payez les heures réellement utilisées. Entrants : forfait mensuel. Agents IA : à la minute. Pas de frais cachés, pas de surprise sur la facture.' },
   227|{ q: 'Quels accents vous avez?', a: 'Québec (standard et joual léger), France (parisien et régional), Belgique, Suisse. Pour l\'IA, c\'est au choix. Pour les conseillers humains, on vous assigne quelqu\'un qui matche votre clientèle.' },
   228|{ q: 'Puis-je changer de forfait?', a: 'Oui, à tout moment. Up ou down. La facturation s\'ajuste au prorata. Si vous grandissez, on grandit avec vous. Si vous ralentissez, on s\'adapte.' },
   229|{ q: 'Mes données sont-elles sécurisées?', a: 'Hébergement au Canada (et UE pour clients européens). Chiffrement bout en bout. RGPD + Loi 25. On ne vend rien, on ne partage rien. Vos données = vos données.' },
   230|].map(({ q, a }, i) => (
   231|          <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
   232|            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
   233|              <span className="font-semibold text-slate-900 pr-4">{q}</span>
   234|              <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
   235|                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
   236|              </span>
   237|            </summary>
   238|            <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
   239|          </details>
   240|        ))}
   241|      </div>
   242|    </div>
   243|  </section>
   244|
   245|  {/* TESTIMONIALS SECTION - bg-white */}
   246|  <section className="py-20 bg-white">
   247|    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   248|      <div className="text-center mb-12">
   249|        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Ce que disent nos clients</h2>
   250|        <p className="text-slate-500">Plus de 500 PME nous font confiance</p>
   251|        <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   252|      </div>
   253|      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   254|{[
   255|{ q: "J'ai comparé 3 centres d'appels. Vous êtes le seul où les agents comprennent vraiment ce que je fais. Et ça se sent quand mes clients appellent.", name: 'Marie-Claire Dupont', role: 'CEO, StartupTech — Mile-End, Montréal', av: 'MD' },
   256|{ q: "Mon comptable m'a dit : 'Tu devrais engager une réceptionniste.' J'ai dit non, j'ai pris Smart Hotline. Résultat? 40% moins cher, et je peux scaler demain si je veux.", name: 'Philippe Martin', role: 'Fondateur, AgenceDigitale — Lyon, France', av: 'PM' },
   257|{ q: "Pendant l'essai de 2 semaines, ils ont pris 87 appels pour moi. J'ai signé le contrat le jour 10. Pas besoin de plus.", name: 'Stéphanie Bernier', role: 'Directrice, Cabinet Conseil — Paris 11e', av: 'SB' },
   258|].map(({ q, name, role, av }) => (
   259|          <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
   260|            <div className="flex gap-0.5 mb-4">
   261|              {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
   262|            </div>
   263|            <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
   264|            <div className="flex items-center gap-3">
   265|              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
   266|              <div>
   267|                <p className="font-bold text-slate-900 text-sm">{name}</p>
   268|                <p className="text-slate-500 text-xs">{role}</p>
   269|              </div>
   270|            </div>
   271|          </div>
   272|        ))}
   273|      </div>
   274|    </div>
   275|  </section>
   276|
   277|  {/* HOW IT WORKS SECTION - bg-slate-50 */}
   278|  <section className="py-20 bg-slate-50">
   279|    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   280|      <div className="text-center mb-12">
   281|        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Comment ça marche</h2>
   282|        <p className="text-slate-500">De l\'appel initial au deploiement en 4 etapes</p>
   283|        <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   284|      </div>
   285|      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
   286|        {[
   287|          { n: '1', t: 'Appel Decouverte', d: '30 min pour comprendre vos besoins et objectifs' },
   288|          { n: '2', t: 'Proposition', d: 'Devis personnalise sous 24h avec tarifs adaptes' },
   289|          { n: '3', t: 'Configuration', d: 'Scripts, formation et tests en 48h' },
   290|          { n: '4', t: 'Lancement', d: 'Vos appels pris en charge, suivi en temps reel' },
   291|        ].map(({ n, t, d }) => (
   292|          <div key={n} className="text-center">
   293|            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
   294|            <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
   295|            <p className="text-slate-500 text-sm">{d}</p>
   296|          </div>
   297|        ))}
   298|      </div>
   299|      <div className="mt-12 text-center">
   300|        <Link href="/fr/contact" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
   301|          Demarrer Maintenant
   302|          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
   303|        </Link>
   304|      </div>
   305|    </div>
   306|  </section>
   307|
   308|  {/* FINAL CTA SECTION - dark gradient */}
   309|  <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
   310|    <div className="max-w-4xl mx-auto px-4 text-center">
   311|<h2 className="text-3xl lg:text-4xl font-black mb-4">Pret a economiser 40% sur vos appels?</h2>
   312|<p className="text-blue-200 text-lg mb-8">Essai de 2 semaines. Si c'est pas pour vous, on vous laisse tranquille. Pas de pression.</p>
   313|      <div className="flex flex-col sm:flex-row gap-4 justify-center">
   314|        <Link href="/fr/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   315|          Demander un Devis Gratuit
   316|        </Link>
   317|        <a href="tel:+151****0559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
   318|          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
   319|          +1 514 819-0559
   320|        </a>
   321|      </div>
   322|      <p className="text-blue-300 text-sm mt-8">Ouvert 24/7 - Reponse immediate</p>
   323|    </div>
   324|  </section>
   325|  </>
   326|  )
   327|}
   328|