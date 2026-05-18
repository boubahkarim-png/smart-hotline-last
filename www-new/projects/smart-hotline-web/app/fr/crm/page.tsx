     1|'use client'

export const metadata = {
  title: "Smart Hotline | CRM & Listes B2B/B2C | SuiteCRM Intégré",
  description: "SuiteCRM intégré, listes B2B/B2C qualifiées, email marketing Mautic. Gérez votre pipeline de A à Z. Installation incluse.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
     7|import { ServiceSchema } from '@/components/ServiceSchema'
     8|import { AIAgentSchema } from '@/components/AIAgentSchema'
     9|import { FAQSchema } from '@/components/FAQSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: FolderIcon, title: 'Gestion des leads', desc: 'Capture, qualification et suivi de tous vos prospects.'},
    14|  {icon: MailIcon, title: 'Email marketing', desc: 'Campagnes automatisées avec Mautic. Nurturing et relances.'},
    15|  {icon: PhoneIcon, title: 'Click-to-call', desc: 'Appelez vos prospects en un clic depuis le CRM.'},
    16|  {icon: TrendingIcon, title: 'Pipeline de ventes', desc: 'Visualisez et gérez votre tunnel de vente en temps réel.'},
    17|  {icon: DatabaseIcon, title: 'Listes qualifiées', desc: 'Listes B2B et B2C par secteur, région et taille d\'entreprise.'},
    18|  {icon: LinkIcon, title: 'Intégrations', desc: 'Connexion avec votre site, Zapier, Google Workspace et plus.'},
    19|]
    20|
    21|
    22|
    23|function CTAButtons({ slug }: { slug: string }) {
    24|const { geo, loading } = useGeo()
    25|const showPhone = !loading && geo.showPhone
    26|return (
    27|<div className="flex flex-col sm:flex-row gap-4 mb-6">
    28|<Link href={`/fr/contact?service=${slug}`} className="bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    29|Démo Sans Engagement
    30|</Link>
    31|{showPhone ? (
    32|<a href={`tel:${CONTACT.phone}`} className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
    33|{CONTACT.phoneDisplay}
    34|</a>
    35|) : (
    36|<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
    37|WhatsApp 24/7
    38|</a>
    39|)}
    40|</div>
    41|)
    42|}
    43|
    44|export default function Page() {
    45|return (
    46|<>
    47|{/* SECTION 1: HERO */}
    48|<section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    49|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    50|<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    51|<div className="w-full lg:w-[40%] animate-slide-left">
    52|						<span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    53|<CRMIcon className="w-5 h-5" /> CRM & Listes
    54|</span>
    55|<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    56|CRM Intégré &<br/>
    57|<span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Listes de Prospects</span>
    58|</h1>
    59|<p className="text-xl text-slate-600 mb-8 leading-relaxed">Centralisez vos leads, suivez vos opportunités et maximisez vos conversions avec SuiteCRM et nos listes B2B/B2C qualifiées.</p>
    60|<CTAButtons slug="crm"/>
    61|<div className="flex flex-wrap gap-3 mt-6">
    62|{['SuiteCRM inclus', 'Listes B2B/B2C', 'Mautic intégré', 'Rapports auto'].map((b, i) => (
    63|<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    64|<CheckIcon className="w-5 h-5 text-orange-600" /> {b}
    65|</span>
    66|))}
    67|</div>
    68|</div>
    69|<div className="w-full lg:w-[60%] animate-slide-right">
    70|						<div className="relative">
    71|							<div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
    72|<img src={`${basePath}/images/crm-interface.webp`} alt="CRM dashboard" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    73|<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    74|<div className="flex items-center gap-4">
    75|<div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
    76|<TrendingIcon className="w-7 h-7 text-white" />
    77|</div>
    78|<div>
    79|<p className="font-black text-xl">+35% conversion</p>
    80|<p className="text-slate-500 text-sm">moyenne clients</p>
    81|</div>
    82|</div>
    83|</div>
    84|</div>
    85|</div>
    86|</div>
    87|</div>
    88|</section>
    89|
    90|{/* SECTION 2: FEATURES */}
    91|<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 lg:py-28 overflow-hidden relative">
    92|<div className="absolute inset-0 pointer-events-none">
    93|<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    94|<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
    95|</div>
    96|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    97|<div className="text-center mb-16 animate-fade-in-up">
    98|<h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
    99|<p className="text-orange-200 text-xl max-w-2xl mx-auto">Tout ce dont vous avez besoin pour gérer vos contacts et vos ventes.</p>
   100|</div>
   101|<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   102|{FEATURES.map(({icon: Icon, title, desc}, i) => (
   103|<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   104|<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   105|<Icon className="w-8 h-8 text-white" />
   106|</div>
   107|<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   108|<p className="text-orange-200 leading-relaxed">{desc}</p>
   109|</div>
   110|))}
   111|</div>
   112|</div>
   113|</section>
   114|
   115|{/* SECTION 3: DARK STATS */}
   116|<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 border-t-4 border-orange-600">
   117|<div className="max-w-7xl mx-auto px-4">
   118|<div className="text-center mb-8">
   119|<h3 className="text-2xl font-bold text-white">Des chiffres qui comptent</h3>
   120|</div>
   121|<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   122|<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   123|<p className="text-5xl lg:text-6xl font-black text-white">250K+</p>
   124|<p className="text-orange-200 mt-2 font-medium text-lg">Contacts B2B</p>
   125|</div>
   126|<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   127|<p className="text-5xl lg:text-6xl font-black text-white">98%</p>
   128|<p className="text-orange-200 mt-2 font-medium text-lg">Données validées</p>
   129|</div>
   130|<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   131|<p className="text-5xl lg:text-6xl font-black text-white">+35%</p>
   132|<p className="text-orange-200 mt-2 font-medium text-lg">Taux conversion</p>
   133|</div>
   134|<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   135|<p className="text-5xl lg:text-6xl font-black text-white">48h</p>
   136|<p className="text-orange-200 mt-2 font-medium text-lg">Setup complet</p>
   137|</div>
   138|</div>
   139|</div>
   140|</section>
   141|
   142|{/* SECTION 4: HOW IT WORKS */}
   143|<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   144|<div className="max-w-6xl mx-auto px-4">
   145|<div className="text-center mb-16">
   146|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça marche</h2>
   147|<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   148|</div>
   149|<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   150|{[
   151|{ n: '1', t: 'Audit', d: "Analyse de vos données existantes et nettoyage." },
   152|{ n: '2', t: 'Configuration', d: "Personnalisation des modules selon votre processus." },
   153|{ n: '3', t: 'Import', d: "Migration de vos contacts sans perte de données." },
   154|{ n: '4', t: 'Formation', d: "Formation de votre équipe et support continu." },
   155|].map((step, i) => (
   156|<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   157|<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   158|<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   159|<p className="text-slate-600 leading-relaxed">{step.d}</p>
   160|</div>
   161|))}
   162|</div>
   163|</div>
   164|</section>
   165|
   166| {/* SECTION 5: DARK - BENEFITS */}
   167| <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 relative overflow-hidden">
   168|<div className="absolute inset-0 pointer-events-none">
   169|<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
   170|<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
   171|</div>
   172|<div className="max-w-7xl mx-auto px-4 relative">
   173| <div className="flex flex-col lg:flex-row items-center gap-16">
   174| <div className="w-full lg:w-1/2">
   175| <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi choisir notre CRM?</h2>
   176| <p className="text-xl text-orange-200 mb-8 leading-relaxed">On ne vous vend pas juste un logiciel. On vous aide à structurer votre processus de vente de A à Z.</p>
   177| <ul className="space-y-4 mb-8">
   178| {[
   179| 'Formation incluse — pas de courbes d\'apprentissage interminables',
   180| 'Support francophone basé au Québec',
   181| 'Mises à jour automatiques, sans frais cachés',
   182| 'Intégré à nos services d\'appels sortants',
   183| ].map((item, i) => (
   184| <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   185| <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   186| <CheckIcon className="w-5 h-5"/>
   187| </span>
   188| {item}
   189| </li>
   190| ))}
   191| </ul>
   192| <Link href="/fr/contact?service=crm" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   193| Voir une démo
   194| </Link>
   195| </div>
   196| <div className="w-full lg:w-1/2">
   197| <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   198| <h3 className="font-bold text-2xl text-white mb-6">Des tarifs adaptés à votre croissance</h3>
   199| <p className="text-orange-200 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
   200| <ul className="space-y-3 mb-6">
   201| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Aucun frais caché</li>
   202| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Annulez quand vous voulez</li>
   203| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Support inclus</li>
   204| </ul>
   205| <Link href="/fr/tarifs" className="text-orange-400 font-bold text-lg hover:underline flex items-center gap-2">
   206| Voir tous les tarifs
   207| </Link>
   208| </div>
   209| </div>
   210| </div>
   211| </div>
   212| </section>
   213|
   214|{/* SECTION 6: DARK TESTIMONIALS AUTO-SLIDE */}
   215|<section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   216|        <div className="max-w-7xl mx-auto px-4">
   217|          <div className="text-center mb-16">
   218|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
   219|            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   220|          </div>
   221|        </div>
   222|        <GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   223|      </section>
   224|
   225|{/* SECTION 7: FINAL CTA */}
   226|<section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 py-24 relative overflow-hidden">
   227|<div className="absolute inset-0 pointer-events-none">
   228|<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
   229|</div>
   230|<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   231|<h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à centraliser vos leads?</h2>
   232|<p className="text-orange-200 text-xl mb-12 max-w-2xl mx-auto">CRM + listes qualifiées + support francophone. Tout ce qu'il vous faut pour vendre plus.</p>
   233|<CTAButtons slug="crm"/>
   234|<p className="text-orange-300 mt-8 text-lg">
   235|<Link href="/fr/tarifs" className="underline hover:text-white transition-colors">Voir les tarifs</Link>
   236|<span className="mx-3">·</span>
   237|<Link href="/fr/contact" className="underline hover:text-white transition-colors">Nous contacter</Link>
   238|</p>
   239|</div>
   240|</section>
   241|
   242|{/* SECTION 8: FAQ */}
   243|<section className="bg-white py-20">
   244|<div className="max-w-4xl mx-auto px-4">
   245|<div className="text-center mb-12">
   246|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
   247|<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   248|</div>
   249|<div className="space-y-6 stagger-children">
   250|{[
   251|{q: "Est-ce que je peux importer mes contacts existants?", a: "Oui, on s'occupe de la migration. Excel, CSV, Google Contacts, ancien CRM — on importe tout sans perte de données."},
   252|{q: "Les listes B2B sont-elles à jour?", a: "On les met à jour mensuellement. Taux de rebond garanti sous 5%, sinon on les remplace."},
   253|{q: "Combien de temps prend la formation?", a: "Environ 2 heures. On vous montre les bases, et on reste disponible pour les questions."},
   254|].map((faq, i) => (
   255|<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   256|<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   257|<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   258|</details>
   259|))}
   260|</div>
   261|<div className="text-center mt-12">
   262|<Link href="/fr/contact?service=crm" className="inline-block bg-gradient-to-r from-orange-600 to-amber-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   263|Démarrer Maintenant
   264|</Link>
   265|</div>
   266|</div>
   267|		</section>
   268|<ServiceSchema name="CRM & Listes de Prospects" description="CRM SuiteCRM intégré avec listes B2B/B2C qualifiées et email marketing Mautic" slug="crm" offers={{ priceFrom: "50", priceCurrency: "CAD" }} />
   269|<AIAgentSchema
   270|name="CRM SuiteCRM"
   271|description="CRM intégré avec gestion de leads, email marketing Mautic, listes B2B/B2C qualifiées et click-to-call pour PME canadiennes."
   272|capabilities={[
   273|"Gestion des leads et contacts",
   274|"Email marketing automatisé avec Mautic",
   275|"Click-to-call intégré",
   276|"Pipeline de ventes en temps réel",
   277|"Listes B2B/B2C qualifiées",
   278|"Intégrations Zapier, Google Workspace",
   279|"Rapports et analytics automatiques",
   280|"Support francophone au Québec"
   281|]}
   282|responseTime="immédiat"
   283|availability="24/7, support francophone Québec"
   284|languages={["Français", "Anglais"]}
   285|pricingModel="forfait mensuel"
   286|startingPrice={{ amount: "50", currency: "CAD", unit: "mois" }}
   287|/>
   288|<FAQSchema faqs={[
   289|  { question: "Est-ce que je peux importer mes contacts existants?", answer: "Oui, on s'occupe de la migration. Excel, CSV, Google Contacts, ancien CRM — on importe tout sans perte de données." },
   290|  { question: "Les listes B2B sont-elles à jour?", answer: "On les met à jour mensuellement. Taux de rebond garanti sous 5%, sinon on les remplace." },
   291|  { question: "Combien de temps prend la formation?", answer: "Environ 2 heures. On vous montre les bases, et on reste disponible pour les questions." },
   292|  { question: "Est-ce que le CRM est inclus dans les forfaits téléphoniques?", answer: "Oui, le CRM de base est inclus gratuitement avec tous nos forfaits de réception et d'émission d'appels." }
   293|]} />
   294|</>
   295|)
   296|}
   297|