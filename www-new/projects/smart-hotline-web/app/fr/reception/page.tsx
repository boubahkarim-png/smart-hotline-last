     1|'use client'

export const metadata = {
  title: "Smart Hotline | Réception d'Appels 24/7 | Zéro Appel Manqué",
  description: "Service de réception d'appels 24/7 pour PME québécoises et françaises. Réponse en moins de 3 sonneries. Conseillers bilingues. Essai gratuit 2 semaines.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: PhoneIcon, title: 'Réception 24/7', desc: 'Pas de répondeur. Un vrai conseiller répond à chaque appel, même à 3h du matin.'},
    14|  {icon: ClockIcon, title: 'Moins de 3 sonneries', desc: 'Vos clients n\'attendent pas. On décroche vite, point final.'},
    15|  {icon: ShieldCheckIcon, title: 'Données sécurisées', desc: 'Tous les messages sont transmis en temps réel. Rien ne se perd.'},
    16|  {icon: UsersIcon, title: 'Équipe dédiée', desc: 'Les mêmes conseillers répondent pour vous. Ils connaissent votre entreprise.'},
    17|]
    18|
    19|function CTAButtons({ slug }: { slug: string }) {
    20|  const { geo, loading } = useGeo()
    21|  const showPhone = !loading && geo.showPhone
    22|  return (
    23|    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
    24|      <Link href={`/fr/contact?service=${slug}`} className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    25|        Demander un devis gratuit
    26|      </Link>
    27|      {showPhone && (
    28|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
    29|          Appeler {CONTACT.phone}
    30|        </a>
    31|      )}
    32|      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
    33|        WhatsApp
    34|      </a>
    35|    </div>
    36|  )
    37|}
    38|
    39|export default function Page() {
    40|  return (
    41|    <>
    42|      {/* SECTION 1: HERO - Modern design with bigger image */}
    43|      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    44|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    45|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    46|            <div className="w-full lg:w-[40%] animate-slide-left">
    47|              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    48|                <PhoneIcon className="w-5 h-5" /> Réception d'Appels
    49|              </span>
    50|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    51|                Zéro Appel Manqué,<br/>
    52|                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Zéro Client Perdu</span>
    53|              </h1>
    54|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Des conseillers professionnels répondent à vos appels 24/7. Vos clients parlent à un vrai humain, pas à un robot.</p>
    55|              <CTAButtons slug="reception"/>
    56|              <div className="flex flex-wrap gap-3 mt-6">
    57|                {['24/7 sans arrêt', 'Moins de 3 sonneries', 'Messages en temps réel', 'Essai 2 semaines'].map((b, i) => (
    58|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    59|                    <CheckIcon className="w-5 h-5 text-sky-600" /> {b}
    60|                  </span>
    61|                ))}
    62|              </div>
    63|            </div>
    64|            <div className="w-full lg:w-[60%] animate-slide-right">
    65|              <div className="relative">
    66|                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
    67|                <img src={`${basePath}/images/reception-hero.webp`} alt="Réception d\'appels" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    68|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    69|                  <div className="flex items-center gap-4">
    70|                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
    71|                      <PhoneIcon className="w-7 h-7 text-white" />
    72|                    </div>
    73|                    <div>
    74|                      <p className="font-black text-xl">500+ appels/jour</p>
    75|                      <p className="text-slate-500 text-sm">gérés pour nos clients</p>
    76|                    </div>
    77|                  </div>
    78|                </div>
    79|              </div>
    80|            </div>
    81|          </div>
    82|        </div>
    83|      </section>
    84|
    85|      {/* SECTION 2: FEATURES - Modern cards with animations */}
    86|      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 lg:py-28 overflow-hidden relative">
    87|        <div className="absolute inset-0 pointer-events-none">
    88|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    89|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
    90|        </div>
    91|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    92|          <div className="text-center mb-16 animate-fade-in-up">
    93|            <h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
    94|            <p className="text-sky-200 text-xl max-w-2xl mx-auto">Tout ce qu'il faut pour ne plus jamais rater un appel important.</p>
    95|          </div>
    96|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
    97|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
    98|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
    99|                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   100|                  <Icon className="w-8 h-8 text-white" />
   101|                </div>
   102|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   103|                <p className="text-sky-200 leading-relaxed">{desc}</p>
   104|              </div>
   105|            ))}
   106|          </div>
   107|        </div>
   108|      </section>
   109|
   110|{/* SECTION 3: DARK STATS - Modern big numbers */}
   111|<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 border-t-4 border-sky-600">
   112|<div className="max-w-7xl mx-auto px-4">
   113|      <div className="text-center mb-8">
   114|        <h3 className="text-2xl font-bold text-white">Des chiffres qui inspirent confiance</h3>
   115|      </div>
   116|  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   117|  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   118|  <p className="text-5xl lg:text-6xl font-black text-white">99.2%</p>
   119|  <p className="text-sky-200 mt-2 font-medium text-lg">Taux de réponse</p>
   120|  </div>
   121|  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   122|  <p className="text-5xl lg:text-6xl font-black text-white">2.8s</p>
   123|  <p className="text-sky-200 mt-2 font-medium text-lg">Temps de réponse</p>
   124|  </div>
   125|  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   126|  <p className="text-5xl lg:text-6xl font-black text-white">150+</p>
   127|  <p className="text-sky-200 mt-2 font-medium text-lg">Entreprises servies</p>
   128|  </div>
   129|  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   130|  <p className="text-5xl lg:text-6xl font-black text-white">24/7</p>
   131|  <p className="text-sky-200 mt-2 font-medium text-lg">Disponibilité</p>
   132|  </div>
   133|  </div>
   134|</div>
   135|</section>
   136|
   137|{/* SECTION 4: HOW IT WORKS - Modern numbered cards */}
   138|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   139|        <div className="max-w-6xl mx-auto px-4">
   140|          <div className="text-center mb-16">
   141|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça marche</h2>
   142|            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   143|          </div>
   144|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   145|            {[
   146|              {n: '1', t: 'Briefing', d: "On apprend à connaître votre entreprise et vos besoins"},
   147|              {n: '2', t: 'Scripts sur mesure', d: "On rédige les réponses adaptées à votre activité"},
   148|              {n: '3', t: 'Démarrage 48h', d: "Vos appels sont pris en charge rapidement"},
   149|              {n: '4', t: 'Suivi continu', d: "Rapports quotidiens et ajustements"},
   150|            ].map((step, i) => (
   151|              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   152|                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   153|                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   154|                <p className="text-slate-600 leading-relaxed">{step.d}</p>
   155|              </div>
   156|            ))}
   157|          </div>
   158|        </div>
   159|      </section>
   160|
   161|{/* SECTION 5: DARK BENEFITS - Two columns */}
   162|<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white py-20 relative overflow-hidden">
   163|<div className="absolute inset-0 pointer-events-none">
   164|<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
   165|<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
   166|</div>
   167|<div className="max-w-7xl mx-auto px-4 relative">
   168|<div className="flex flex-col lg:flex-row items-center gap-16">
   169|<div className="w-full lg:w-1/2">
   170|<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi nous faire confiance?</h2>
   171|<p className="text-xl text-sky-200 mb-8 leading-relaxed">Nos conseillers sont formés pour représenter votre entreprise comme si c'était la leur. Pas de scripts robots — de vraies conversations.</p>
   172|<ul className="space-y-4 mb-8">
   173|{[
   174|'Conseillers francophones du Québec et de France',
   175|'Messages transmis par SMS, email, ou appel',
   176|'Prix PME — 40-60% moins cher qu\'un employé',
   177|'Annulez quand vous voulez — pas de contrat long',
   178|].map((item, i) => (
   179|<li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   180|<span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   181|<CheckIcon className="w-5 h-5"/>
   182|</span>
   183|{item}
   184|</li>
   185|))}
   186|</ul>
   187|<Link href="/fr/contact?service=reception" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   188|Voir une démo
   189|</Link>
   190|</div>
   191|<div className="w-full lg:w-1/2">
   192|<div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   193|<h3 className="font-bold text-2xl text-white mb-6">Des tarifs adaptés à votre croissance</h3>
   194|<p className="text-sky-200 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
   195|<ul className="space-y-3 mb-6">
   196|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Aucun frais caché</li>
   197|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Annulez quand vous voulez</li>
   198|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> CRM et autodialer inclus</li>
   199|</ul>
   200|<Link href="/fr/tarifs" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
   201|Voir tous les tarifs
   202|</Link>
   203|</div>
   204|</div>
   205|</div>
   206|</div>
   207|</section>
   208|
   209|{/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
   210|<section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   211|<div className="max-w-7xl mx-auto px-4">
   212|<div className="text-center mb-16">
   213|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
   214|<div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   215|</div>
   216|</div>
   217|    <GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   218|</section>
   219|
   220|      {/* SECTION 7: FINAL CTA - Gradient */}
   221|      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-24 relative overflow-hidden">
   222|        <div className="absolute inset-0 pointer-events-none">
   223|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
   224|        </div>
   225|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   226|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à ne plus rater un appel?</h2>
   227|          <p className="text-sky-200 text-xl mb-12 max-w-2xl mx-auto">Essai gratuit de 2 semaines. Sans engagement. On commence quand vous voulez.</p>
   228|          <CTAButtons slug="reception"/>
   229|          <p className="text-sky-300 mt-8 text-lg">
   230|            <Link href="/fr/tarifs" className="underline hover:text-white transition-colors">Voir les tarifs</Link>
   231|            <span className="mx-3">·</span>
   232|            <Link href="/fr/contact" className="underline hover:text-white transition-colors">Nous contacter</Link>
   233|          </p>
   234|        </div>
   235|      </section>
   236|
   237|      {/* SECTION 8: FAQ - Modern expandable */}
   238|      <section className="bg-white py-20">
   239|        <div className="max-w-4xl mx-auto px-4">
   240|          <div className="text-center mb-12">
   241|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
   242|            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   243|          </div>
   244|          <div className="space-y-6 stagger-children">
   245|            {[
   246|              {q: "Combien de temps pour démarrer?", a: "En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer."},
   247|              {q: "Est-ce que je peux changer les scripts?", a: "Absolument. C'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez."},
   248|              {q: "Comment je reçois les messages?", a: "Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement."},
   249|            ].map((faq, i) => (
   250|              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   251|                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   252|                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   253|              </details>
   254|            ))}
   255|          </div>
   256|          <div className="text-center mt-12">
   257|            <Link href="/fr/contact?service=reception" className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   258|              Démarrer Maintenant
   259|            </Link>
   260|          </div>
   261|		</div>
   262|		</section>
   263|<ServiceSchema name="Réception d'Appels 24/7" description="Service de réception d'appels professionnel avec conseillers francophones 24/7" slug="reception" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
   264|      <AIAgentSchema
   265|        name="Réception d'Appels Smart Hotline"
   266|        description="Service de réception d'appels professionnel avec conseillers francophones 24/7. Réponse en moins de 3 sonneries, messages transmis en temps réel, équipe dédiée formée pour votre entreprise."
   267|        capabilities={[
   268|          "Réception d'appels 24/7",
   269|          "Réponse en moins de 3 sonneries",
   270|          "Messages transmis en temps réel",
   271|          "Équipe dédiée et formée",
   272|          "Scripts personnalisés",
   273|          "Suivi et rapports quotidiens",
   274|          "Intégration CRM",
   275|          "Support multicanal (SMS, email, appel)"
   276|        ]}
   277|        responseTime="moins de 3 sonneries"
   278|        availability="24/7, 365 jours par année"
   279|        languages={["Français (Québec)", "Français (France)", "Anglais (Amérique du Nord)"]}
   280|        pricingModel="facturation à l'appel"
   281|        startingPrice={{ amount: "1.50", currency: "CAD", unit: "appel" }}
   282|      />
   283|      <FAQSchema faqs={[
   284|			{ question: "Combien de temps pour démarrer?", answer: "En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer." },
   285|			{ question: "Est-ce que je peux changer les scripts?", answer: "Absolument. C'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez." },
   286|			{ question: "Comment je reçois les messages?", answer: "Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement." },
   287|			{ question: "Les conseillers parlent-ils français?", answer: "Oui, tous nos conseillers sont francophones du Québec ou de France. Ils maîtrisent le français et l'anglais." }
   288|		]} />
   289|	</>
   290|  )
   291|}
   292|