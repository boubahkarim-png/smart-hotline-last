     1|'use client'

export const metadata = {
  title: "Smart Hotline | Appels Sortants & Prospection | Leads Qualifiés",
  description: "Service d'appels sortants pour PME. Prospection téléphonique, prise de rendez-vous, leads qualifiés. Scripts optimisés. À partir de 15$/h.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, PhoneIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: TargetIcon, title: 'Leads qualifiés', desc: 'Ciblage précis et qualification de chaque lead avant transfert.'},
    14|  {icon: TrendingIcon, title: 'Scripts de conversion', desc: 'Scripts optimisés par nos experts pour maximiser les résultats.'},
    15|  {icon: FolderIcon, title: 'CRM intégré', desc: 'Chaque appel enregistré avec notes, statut et suivi.'},
    16|  {icon: CalendarIcon, title: 'Prise de rendez-vous', desc: 'Agenda rempli avec des RDV qualifiés et confirmés.'},
    17|  {icon: AnalyticsIcon, title: 'KPIs détaillés', desc: 'Appels, contacts, leads, conversions, coût par lead.'},
    18|  {icon: GlobeIcon, title: 'Multi-canal', desc: 'Appels sortants combinés SMS et email pour plus de portée.'},
    19|]
    20|
    21|function CTAButtons({ slug }: { slug: string }) {
    22|  const { geo, loading } = useGeo()
    23|  const showPhone = !loading && geo.showPhone
    24|  return (
    25|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    26|      <Link href={`/fr/contact?service=${slug}`} className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    27|        Démo Sans Engagement
    28|      </Link>
    29|      {showPhone ? (
    30|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
    31|          {CONTACT.phoneDisplay}
    32|        </a>
    33|      ) : (
    34|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
    35|          WhatsApp 24/7
    36|        </a>
    37|      )}
    38|    </div>
    39|  )
    40|}
    41|
    42|export default function Page() {
    43|  return (
    44|    <>
    45|      {/* SECTION 1: HERO */}
    46|      <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    47|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    48|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    49|            <div className="w-full lg:w-[40%] animate-slide-left">
    50|              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    51|                <PhoneIcon className="w-5 h-5" /> Appels Sortants
    52|              </span>
    53|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    54|                Multipliez vos Leads,<br/>
    55|                <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Zéro Effort</span>
    56|              </h1>
    57|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prospection, télémarketing, prise de rendez-vous. Nos conseillers connaissent l'art de décrocher des rendez-vous — sans faire peur à vos prospects.</p>
    58|              <CTAButtons slug="emission"/>
    59|              <div className="flex flex-wrap gap-3 mt-6">
    60|                {['Leads qualifiés', 'CRM inclus', 'Scripts optimisés', 'Reporting daily'].map((b, i) => (
    61|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    62|                    <CheckIcon className="w-5 h-5 text-emerald-600" /> {b}
    63|                  </span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[60%] animate-slide-right">
    68|              <div className="relative">
    69|                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
    70|                <img src={`${basePath}/images/telemarketing.webp`} alt="Conseiller appels sortants" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    71|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    72|                  <div className="flex items-center gap-4">
    73|                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
    74|                      <TrendingIcon className="w-7 h-7 text-white" />
    75|                    </div>
    76|                    <div>
    77|                      <p className="font-black text-xl">+40% de RDV</p>
    78|                      <p className="text-slate-500 text-sm">en moyenne</p>
    79|                    </div>
    80|                  </div>
    81|                </div>
    82|              </div>
    83|            </div>
    84|          </div>
    85|        </div>
    86|      </section>
    87|
    88|      {/* SECTION 2: FEATURES */}
    89|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white py-20 lg:py-28 overflow-hidden relative">
    90|        <div className="absolute inset-0 pointer-events-none">
    91|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    92|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
    93|        </div>
    94|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    95|          <div className="text-center mb-16 animate-fade-in-up">
    96|            <h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
    97|            <p className="text-emerald-200 text-xl max-w-2xl mx-auto">Tout ce qu'il faut pour générer des leads et remplir votre agenda.</p>
    98|          </div>
    99|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   100|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
   101|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   102|                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   103|                  <Icon className="w-8 h-8 text-white" />
   104|                </div>
   105|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   106|                <p className="text-emerald-200 leading-relaxed">{desc}</p>
   107|              </div>
   108|            ))}
   109|          </div>
   110|        </div>
   111|      </section>
   112|
   113|      {/* SECTION 3: DARK STATS */}
   114|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white py-20 border-t-4 border-emerald-600">
   115|        <div className="max-w-7xl mx-auto px-4">
   116|          <div className="text-center mb-8">
   117|            <h3 className="text-2xl font-bold text-white">Des résultats qui parlent</h3>
   118|          </div>
   119|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   120|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   121|              <p className="text-5xl lg:text-6xl font-black text-white">15K+</p>
   122|              <p className="text-emerald-200 mt-2 font-medium text-lg">Appels par mois</p>
   123|            </div>
   124|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   125|              <p className="text-5xl lg:text-6xl font-black text-white">35%</p>
   126|              <p className="text-emerald-200 mt-2 font-medium text-lg">Taux de contact</p>
   127|            </div>
   128|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   129|              <p className="text-5xl lg:text-6xl font-black text-white">+40%</p>
   130|              <p className="text-emerald-200 mt-2 font-medium text-lg">Augmentation RDV</p>
   131|            </div>
   132|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   133|              <p className="text-5xl lg:text-6xl font-black text-white">48h</p>
   134|              <p className="text-emerald-200 mt-2 font-medium text-lg">Lancement campagne</p>
   135|            </div>
   136|          </div>
   137|        </div>
   138|      </section>
   139|
   140|      {/* SECTION 4: HOW IT WORKS */}
   141|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   142|        <div className="max-w-6xl mx-auto px-4">
   143|          <div className="text-center mb-16">
   144|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça fonctionne</h2>
   145|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
   146|          </div>
   147|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   148|            {[
   149|              {n: '1', t: 'Définition des cibles', d: "Analyse de votre marché et création des profils prospects."},
   150|              {n: '2', t: 'Script & formation', d: "Script sur mesure et formation à votre offre."},
   151|              {n: '3', t: 'Lancement de la campagne', d: "Démarrage des appels selon votre planning."},
   152|              {n: '4', t: 'Rapports & optimisation', d: "Ajustements quotidiens pour maximiser les résultats."},
   153|            ].map((step, i) => (
   154|              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   155|                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   156|                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   157|                <p className="text-slate-600 leading-relaxed">{step.d}</p>
   158|              </div>
   159|            ))}
   160|          </div>
   161|        </div>
   162|      </section>
   163|
   164|      {/* SECTION 5: DARK - BENEFITS */}
   165|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 text-white py-20 relative overflow-hidden">
   166|        <div className="absolute inset-0 pointer-events-none">
   167|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
   168|        </div>
   169|        <div className="max-w-7xl mx-auto px-4 relative">
   170|          <div className="flex flex-col lg:flex-row items-center gap-16">
   171|            <div className="w-full lg:w-1/2">
   172|              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi nous faire confiance?</h2>
   173|              <p className="text-xl text-emerald-200 mb-8 leading-relaxed">Nos conseillers sont formés pour représenter votre entreprise et décrocher des rendez-vous. Pas de scripts robots — de vraies conversations qui convertissent.</p>
   174|              <ul className="space-y-4 mb-8">
   175|                {[
   176|                  'Conseillers francophones du Québec et de France',
   177|                  'Scripts testés et optimisés en continu',
   178|                  'CRM et autodialer inclus dans chaque forfait',
   179|                  'Annulez quand vous voulez — pas de contrat long',
   180|                ].map((item, i) => (
   181|                  <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   182|                    <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   183|                      <CheckIcon className="w-5 h-5"/>
   184|                    </span>
   185|                    {item}
   186|                  </li>
   187|                ))}
   188|              </ul>
   189|              <Link href="/fr/contact?service=emission" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   190|                Voir une démo
   191|              </Link>
   192|            </div>
   193|            <div className="w-full lg:w-1/2">
   194|              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   195|                <h3 className="font-bold text-2xl text-white mb-6">Des tarifs adaptés à votre croissance</h3>
   196|                <p className="text-emerald-200 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
   197|                <ul className="space-y-3 mb-6">
   198|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> Aucun frais caché</li>
   199|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> Annulez quand vous voulez</li>
   200|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> CRM et autodialer inclus</li>
   201|                </ul>
   202|                <Link href="/fr/tarifs" className="text-emerald-400 font-bold text-lg hover:underline flex items-center gap-2">
   203|                  Voir tous les tarifs
   204|                </Link>
   205|              </div>
   206|            </div>
   207|          </div>
   208|        </div>
   209|      </section>
   210|
   211|      {/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
   212|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   213|        <div className="max-w-7xl mx-auto px-4">
   214|          <div className="text-center mb-16">
   215|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
   216|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
   217|          </div>
   218|        </div>
   219|        <GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   220|      </section>
   221|
   222|      {/* SECTION 7: FINAL CTA */}
   223|      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 py-24 relative overflow-hidden">
   224|        <div className="absolute inset-0 pointer-events-none">
   225|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
   226|        </div>
   227|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   228|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à multiplier vos leads?</h2>
   229|          <p className="text-emerald-200 text-xl mb-12 max-w-2xl mx-auto">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
   230|          <CTAButtons slug="emission"/>
   231|          <p className="text-emerald-300 mt-8 text-lg">
   232|            <Link href="/fr/tarifs" className="underline hover:text-white transition-colors">Voir les tarifs</Link>
   233|            <span className="mx-3">·</span>
   234|            <Link href="/fr/contact" className="underline hover:text-white transition-colors">Nous contacter</Link>
   235|          </p>
   236|        </div>
   237|      </section>
   238|
   239|      {/* SECTION 8: FAQ */}
   240|      <section className="bg-white py-20">
   241|        <div className="max-w-4xl mx-auto px-4">
   242|          <div className="text-center mb-12">
   243|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
   244|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
   245|          </div>
   246|          <div className="space-y-6 stagger-children">
   247|            {[
   248|              {q: "Combien de temps prend une campagne typique?", a: "Nos campagnes sont flexibles selon vos besoins. Nous recommandons un minimum de 3 mois pour voir des résultats significatifs, mais vous pouvez ajuster la durée à tout moment."},
   249|              {q: "Est-ce que je peux cibler des régions spécifiques?", a: "Absolument! Nous pouvons cibler par ville, région, province ou même par code postal spécifique pour maximiser la pertinence de vos appels sortants."},
   250|              {q: "Quel est le coût par lead qualifié?", a: "Le coût varie selon votre industrie et la complexité de votre offre, mais nos clients voient généralement un coût par lead 50-70% inférieur aux méthodes traditionnelles."},
   251|            ].map((faq, i) => (
   252|              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   253|                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   254|                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   255|              </details>
   256|            ))}
   257|          </div>
   258|          <div className="text-center mt-12">
   259|            <Link href="/fr/contact?service=emission" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   260|              Démarrer Maintenant
   261|            </Link>
   262|          </div>
   263|        </div>
   264|      </section>
   265|      <ServiceSchema name="Appels Sortants & Prospection" description="Service de prospection téléphonique et télémarketing avec leads qualifiés et prise de rendez-vous" slug="emission" offers={{ priceFrom: "3.00", priceCurrency: "CAD" }} />
   266|      <AIAgentSchema
   267|        name="Émission Pro"
   268|        description="Service d'appels sortants IA pour PME. Prospection téléphonique, qualification de leads et prise de rendez-vous automatisée avec conseillers francophones du Québec et de France."
   269|        capabilities={[
   270|          "Prospection téléphonique ciblée",
   271|          "Qualification de leads automatisée",
   272|          "Prise de rendez-vous confirmée",
   273|          "Scripts de conversion optimisés",
   274|          "CRM et autodialer intégrés",
   275|          "Rapports KPIs détaillés",
   276|          "Multi-canal appels, SMS, email",
   277|          "Suivi et optimisation quotidienne"
   278|        ]}
   279|        responseTime="48 heures pour lancement"
   280|        availability="Heures ouvrables, 5 jours par semaine"
   281|        languages={["Français (Québec)", "Français (France)", "Anglais (Amérique du Nord)"]}
   282|        pricingModel="facturation au forfait mensuel"
   283|        startingPrice={{ amount: "3.00", currency: "CAD", unit: "lead qualifié" }}
   284|      />
   285|      <FAQSchema faqs={[
   286|        { question: "Comment qualifiez-vous les leads?", answer: "On utilise des critères définis ensemble: budget, autorité, besoin, timing. Chaque lead est validé avant transfert." },
   287|        { question: "Proposez-vous des scripts sur mesure?", answer: "Oui, nos experts rédigent des scripts adaptés à votre offre et votre marché. On les teste et optimise en continu." },
   288|        { question: "Combien d'appels par jour?", answer: "Un agent peut effectuer 50-80 appels par jour. On s'adapte à vos objectifs et votre capacité de traitement." },
   289|        { question: "Puis-je écouter les appels?", answer: "Oui, tous les appels sont enregistrés (avec consentement) et disponibles dans votre CRM pour réécoute." }
   290|      ]} />
   291|    </>
   292|  )
   293|}
   294|