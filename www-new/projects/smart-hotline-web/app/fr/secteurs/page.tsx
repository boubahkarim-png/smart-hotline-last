     1|'use client'

export const metadata = {
  title: "Smart Hotline | Solutions par Secteur d'Activité",
  description: "Solutions de centre d'appels adaptées à chaque secteur: restauration, santé, finance, immobilier, services juridiques, e-commerce.",
}

     2|import GeoTestimonials from '@/components/GeoTestimonials'
     3|import basePath from '@/lib/basePath'
     4|import Link from 'next/link'
     5|import { useState } from 'react'
     6|import { useGeo } from '@/hooks/useGeo'
     7|import { CONTACT } from '@/lib/nav'
     8|import BlogArticleModal, { type Article } from '@/components/BlogArticleModal'
     9|import { PhoneIcon, QuestionIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon, HotelIcon } from '@/components/Icons'
    10|import { FAQSchema } from '@/components/FAQSchema'
    11|import { ServiceSchema } from '@/components/ServiceSchema'
    12|
    13|const SECTORS = [
    14|  { icon: UtensilsIcon, name: "Restauration", desc: "Reservations, livraisons, service client. Ne manquez aucune commande.", examples: ["Restaurants", "Traiteurs", "Dark kitchens"] },
    15|  { icon: HeartIcon, name: "Sante & Cliniques", desc: "Prise de RDV, rappels patients, urgences. Disponible 24/7.", examples: ["Cliniques", "Medecins", "Physiotherapie"] },
    16|  { icon: BuildingIcon, name: "Immobilier", desc: "Qualification des acheteurs, visites, suivi des leads.", examples: ["Agences", "Courtiers", "Promoteurs"] },
    17|  { icon: CarIcon, name: "Automobile", desc: "Service apres-vente, RDV atelier, relance clients.", examples: ["Concessionnaires", "Garages", "Location"] },
    18|  { icon: ScaleIcon, name: "Services Juridiques", desc: "Filtrage des appels, prise de RDV, urgences juridiques.", examples: ["Cabinets avocats", "Notaires", "Huissiers"] },
    19|  { icon: HammerIcon, name: "Construction & BTP", desc: "Devis, suivi chantiers, coordination sous-traitants.", examples: ["Entrepreneurs", "Architectes", "Renovations"] },
    20|  { icon: ComputerIcon, name: "Tech & SaaS", desc: "Support niveau 1, onboarding clients, escalades.", examples: ["Startups", "SaaS", "Agences web"] },
    21|  { icon: CartIcon, name: "E-commerce", desc: "SAV, retours, suivi commandes, fidelisation.", examples: ["Boutiques online", "Marketplaces", "Dropshipping"] },
    22|  { icon: GraduationIcon, name: "Education & Formation", desc: "Inscriptions, questions, suivi eleves et parents.", examples: ["Ecoles", "Centres formation", "Tuteurs"] },
    23|  { icon: HotelIcon, name: "Hotellerie & Tourisme", desc: "Reservations, conciergerie, support voyageurs.", examples: ["Hotels", "Auberges", "Agences voyage"] },
    24|]
    25|
    26|const STATS = [
    27|  { value: '20+', label: 'Secteurs desservis' },
    28|  { value: '500+', label: 'PME accompagnees' },
    29|  { value: '98%', label: 'Taux de satisfaction' },
    30|  { value: '24/7', label: 'Disponibilite' },
    31|]
    32|
    33|
    34|const FAQ = [
    35|  {
    36|    question: "Travaillez-vous dans tous les secteurs d'activite ?",
    37|    answer: "Nous avons une experience dans plus de 20 secteurs differents et nous nous adaptons rapidement a de nouveaux domaines grace a notre methodologie flexible."
    38|  },
    39|  {
    40|    question: "Comment assurez-vous la qualite du service dans des secteurs specialises ?",
    41|    answer: "Nous commencant toujours par une analyse approfondie de votre secteur et nous formons specifiquement nos agents sur votre terminologie et vos processus."
    42|  }
    43|]
    44|
    45|// SEO-Optimized Sector Articles
    46|const SECTOR_ARTICLES: Article[] = [
    47|  {
    48|    slug: 'secteur-restauration-externalisation',
    49|    title: "Secteur Restauration: Comment l'Externalisation Telephonique Multiplie Vos Reservations",
    50|    date: "15 mars 2026",
    51|    cat: "Restauration",
    52|    img: "/images/secteurs/restauration.jpg",
    53|    excerpt: "Decouvrez comment 3 restaurants quebecois ont double leurs reservations grace a une gestion telephonique professionnelle.",
    54|    author: "Marie-Chantal Dubois",
    55|    readTime: "6 min",
    56|    metaDesc: "Externalisation telephonique restauration Quebec: doublez vos reservations, reduisez les no-shows et captez chaque appel. Etudes de cas et ROI.",
    57|    keywords: ["externalisation restauration", "reservation restaurant Quebec", "service client restaurant", "centre appels restauration", "PME restauration"],
    58|    content: `<p>La restauration, c'est des marges fines et des journees longues. Le dernier truc qu'un restaurateur veut faire, c'est decrocher le telephone pendant le service.</p>
    59|<h2>Le probleme qu'on ne veut pas admettre</h2>
    60|<p>« J'ai mes serveurs qui repondent quand ils peuvent », me disait Pierre, proprietaire d'un bistro du Plateau. Resultat : 20% des reservations ne se presentaient pas.</p>
    61|<h2>Ce que l'externalisation apporte</h2>
    62|<ul><li>Zero appel manque</li><li>Confirmation automatique</li><li>Disponibilite 24/7</li><li>Service en francais natif</li></ul>
    63|<h2>ROI concret</h2>
    64|<p>Pour un restaurant de 50-100 couverts : Cout du service : 400-800$/mois. Revenus recuperes : 2000$+/mois. ROI moyen : 300% des le premier mois.</p>`
    65|  },
    66|  {
    67|    slug: 'secteur-sante-cliniques-telephonie',
    68|    title: "Secteur Sante: Optimiser la Prise de Rendez-Vous Medical",
    69|    date: "12 mars 2026",
    70|    cat: "Sante",
    71|    img: "/images/secteurs/sante.jpg",
    72|    excerpt: "Comment les cliniques medicales reduisent les appels manques et ameliorent la satisfaction patient.",
    73|    author: "Dr. Jean-Michel Leclerc",
    74|    readTime: "7 min",
    75|    metaDesc: "Externalisation telephonique clinique medicale Quebec: prise de rendez-vous 24/7, rappels patients, reduction des no-shows.",
    76|    keywords: ["externalisation sante", "prise rendez-vous medical", "clinique Quebec", "telephonie medicale", "rappel patient"],
    77|    content: `<p>Une clinique medicale recoit en moyenne 50-100 appels par jour.</p>
    78|<h2>Les defis specifiques</h2>
    79|<ul><li>Confidentialite - Conformite Loi 25</li><li>Urgences - Triage des appels critiques</li><li>Disponibilite - Patients apres les heures</li></ul>
    80|<h2>Resultats mesures</h2>
    81|<ul><li>Appels manques : 35% a 2%</li><li>No-shows : 22% a 8%</li><li>Satisfaction patient : +40%</li></ul>`
    82|  },
    83|  {
    84|    slug: 'secteur-immobilier-qualification-leads',
    85|    title: "Secteur Immobilier: Qualifier Vos Leads en 30 Secondes",
    86|    date: "8 mars 2026",
    87|    cat: "Immobilier",
    88|    img: "/images/secteurs/immobilier.jpg",
    89|    excerpt: "Comment les agents immobiliers doublent leurs conversions grace a une qualification telephonique professionnelle.",
    90|    author: "Francois Martel",
    91|    readTime: "5 min",
    92|    metaDesc: "Externalisation telephonique immobilier Quebec: qualification leads, prise de rendez-vous visite, suivi acheteurs.",
    93|    keywords: ["externalisation immobilier", "qualification leads Quebec", "courtier immobilier", "prise rendez-vous visite"],
    94|    content: `<p>Dans l'immobilier, chaque appel est une vente potentielle.</p>
    95|<h2>Notre methode BANQ</h2>
    96|<ul><li>Budget - Verification du pre-approve</li><li>Autorite - Identification du decideur</li><li>Need - Comprehension du besoin reel</li><li>Qualification - Scoring du lead</li></ul>
    97|<h2>Resultats typiques</h2>
    98|<ul><li>Leads qualifies : +85%</li><li>Taux de conversion : 12% a 22%</li></ul>`
    99|  },
   100|  {
   101|    slug: 'secteur-automobile-service-client',
   102|    title: "Secteur Automobile: Service Apres-Vente qui Fidelise",
   103|    date: "5 mars 2026",
   104|    cat: "Automobile",
   105|    img: "/images/secteurs/automobile.jpg",
   106|    excerpt: "Comment les concessionnaires ameliorent la satisfaction client et les rendez-vous atelier.",
   107|    author: "Sophie Bertrand",
   108|    readTime: "5 min",
   109|    metaDesc: "Externalisation telephonique concessionnaire automobile Quebec: prise de rendez-vous atelier, SAV, relance clients.",
   110|    keywords: ["externalisation automobile", "concessionnaire Quebec", "service apres-vente auto", "rendez-vous atelier"],
   111|    content: `<p>Un concessionnaire perd en moyenne 25% de ses clients chaque annee. La principale raison ? Un service apres-vente defaillant.</p>
   112|<h2>Resultats mesures</h2>
   113|<ul><li>Taux de retention client : +18%</li><li>Rendez-vous atelier : +40%</li><li>Satisfaction SAV : 68% a 89%</li></ul>`
   114|  },
   115|  {
   116|    slug: 'secteur-juridique-cabinet-avocat',
   117|    title: "Secteur Juridique: Filtrer les Urgences, Capturer les Dossiers",
   118|    date: "1 mars 2026",
   119|    cat: "Juridique",
   120|    img: "/images/secteurs/juridique.jpg",
   121|    excerpt: "Comment les cabinets d'avocats gerent les appels avec discretion et efficacite.",
   122|    author: "Claire Dupont",
   123|    readTime: "6 min",
   124|    metaDesc: "Externalisation telephonique cabinet avocat Quebec: filtrage d'appels, prise de rendez-vous, gestion urgences juridiques.",
   125|    keywords: ["externalisation juridique", "cabinet avocat Quebec", "telephonie notaire", "filtrage appels"],
   126|    content: `<p>Dans le domaine juridique, chaque appel peut etre un nouveau dossier.</p>
   127|<h2>Protocoles specifiques</h2>
   128|<ul><li>Identification de l'urgence</li><li>Transfert immediat vers l'avocat</li><li>Confidentialite garantie</li></ul>`
   129|  },
   130|  {
   131|    slug: 'secteur-construction-btp',
   132|    title: "Secteur BTP: Gerer les Appels sur les Chantiers",
   133|    date: "25 fevrier 2026",
   134|    cat: "Construction",
   135|    img: "/images/secteurs/construction.jpg",
   136|    excerpt: "Comment les entrepreneurs en construction gardent le contact avec clients et sous-traitants.",
   137|    author: "Rejean Lavoie",
   138|    readTime: "5 min",
   139|    metaDesc: "Externalisation telephonique construction BTP Quebec: gestion devis, suivi chantiers, coordination sous-traitants.",
   140|    keywords: ["externalisation BTP", "construction Quebec", "devis chantier", "suivi sous-traitants"],
   141|    content: `<p>Sur un chantier, on ne peut pas repondre au telephone. Mais un entrepreneur qui ne repond pas, c'est un contrat perdu.</p>
   142|<h2>Solution adaptee</h2>
   143|<p>Nos agents sont formes a la terminologie du batiment. Ils comprennent la difference entre une urgence et une question standard.</p>`
   144|  },
   145|  {
   146|    slug: 'secteur-tech-saas-support',
   147|    title: "Secteur Tech: Support Niveau 1 qui Degage Vos Devs",
   148|    date: "20 fevrier 2026",
   149|    cat: "Tech",
   150|    img: "/images/secteurs/tech.jpg",
   151|    excerpt: "Comment les startups et SaaS reduisent les tickets de support de 60%.",
   152|    author: "Jean-Michel Leclerc",
   153|    readTime: "6 min",
   154|    metaDesc: "Externalisation support technique SaaS Quebec: support niveau 1, onboarding clients, reduction tickets.",
   155|    keywords: ["externalisation tech", "support SaaS", "support niveau 1 Quebec", "onboarding clients"],
   156|    content: `<p>Vos developpeurs passent 30% de leur temps a repondre a des questions simples.</p>
   157|<h2>Resultats</h2>
   158|<ul><li>Tickets resolus niveau 1 : 65%</li><li>Temps developpeurs recupere : 12h/semaine</li><li>Satisfaction support : +35%</li></ul>`
   159|  },
   160|  {
   161|    slug: 'secteur-ecommerce-sav',
   162|    title: "Secteur E-commerce: SAV qui Convertit les Mecontents",
   163|    date: "15 fevrier 2026",
   164|    cat: "E-commerce",
   165|    img: "/images/secteurs/ecommerce.jpg",
   166|    excerpt: "Comment les boutiques en ligne transforment les reclamations en clients fideles.",
   167|    author: "Marie-Chantal Dubois",
   168|    readTime: "5 min",
   169|    metaDesc: "Externalisation SAV e-commerce Quebec: retours, suivi commandes, reclamations.",
   170|    keywords: ["externalisation e-commerce", "SAV boutique en ligne", "retours produits", "fidelisation client"],
   171|    content: `<p>En e-commerce, un client mecontent partage son experience avec 15 personnes.</p>
   172|<h2>Nos KPIs SAV</h2>
   173|<ul><li>Resolution premier contact : 85%</li><li>Temps de reponse : moins de 2h</li><li>30% des reclamations deviennent des ventes</li></ul>`
   174|  },
   175|  {
   176|    slug: 'secteur-education-inscriptions',
   177|    title: "Secteur Education: Inscriptions et Suivi Parents",
   178|    date: "10 fevrier 2026",
   179|    cat: "Education",
   180|    img: "/images/secteurs/education.jpg",
   181|    excerpt: "Comment les ecoles et centres de formation gerent les inscriptions.",
   182|    author: "Sophie Bertrand",
   183|    readTime: "5 min",
   184|    metaDesc: "Externalisation telephonique education Quebec: inscriptions, questions parents, suivi eleves.",
   185|    keywords: ["externalisation education", "inscriptions ecole Quebec", "suivi parents", "centre formation"],
   186|    content: `<p>Les periodes d'inscriptions sont infernales pour les ecoles.</p>
   187|<h2>Solution</h2>
   188|<p>Un service dedie pendant les periodes de pointe. Agents formes sur vos programmes, tarifs et processus.</p>`
   189|  },
   190|  {
   191|    slug: 'secteur-hotellerie-tourisme',
   192|    title: "Secteur Hotellerie: Reservations et Conciergerie",
   193|    date: "5 fevrier 2026",
   194|    cat: "Tourisme",
   195|    img: "/images/secteurs/hotellerie.jpg",
   196|    excerpt: "Comment les hotels captent chaque reservation, meme apres la reception fermee.",
   197|    author: "Francois Martel",
   198|    readTime: "5 min",
   199|    metaDesc: "Externalisation telephonique hotellerie Quebec: reservations 24/7, conciergerie, support voyageurs.",
   200|    keywords: ["externalisation hotellerie", "reservation hotel Quebec", "conciergerie", "support voyageurs"],
   201|    content: `<p>Un hotel qui ne repond pas a 22h perd des reservations.</p>
   202|<h2>Service 24/7</h2>
   203|<p>Nos agents repondent a toute heure, en francais et en anglais. Integration directe avec votre PMS.</p>`
   204|  }
   205|]
   206|
   207|function CTAButtons({ slug }: { slug: string }) {
   208|  const { geo, loading } = useGeo()
   209|  const showPhone = !loading && geo.showPhone
   210|  return (
   211|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
   212|      <Link href={`/fr/contact?service=${slug}`}
   213|        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
   214|        Demo Sans Engagement
   215|      </Link>
   216|      {showPhone ? (
   217|        <a href={`tel:${CONTACT.phone}`}
   218|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
   219|          {CONTACT.phoneDisplay}
   220|        </a>
   221|      ) : (
   222|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
   223|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
   224|          WhatsApp 24/7
   225|        </a>
   226|      )}
   227|    </div>
   228|  )
   229|}
   230|
   231|export default function Secteurs() {
   232|  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
   233|
   234|  return (
   235|    <>
   236|      {/* SECTION 1: LIGHT HERO */}
   237|      <section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
   238|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   239|          <div className="flex flex-col lg:flex-row items-center gap-12">
   240|<div className="w-full lg:w-[40%]">
   241|							<span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
   242|                <PhoneIcon className="w-4 h-4" /> Secteurs d'Activite
   243|              </span>
   244|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
   245|                Nous Servons<br/>Plus de 20 Secteurs
   246|              </h1>
   247|              <p className="text-lg text-slate-600 mb-8">De la restauration a la technologie, en passant par la sante et l'immobilier, notre expertise couvre un large eventail d'industries.</p>
   248|              <CTAButtons slug="secteurs"/>
   249|              <div className="flex flex-wrap gap-3">
   250|                {['Restauration', 'Sante', 'Immobilier', 'Technologie'].map(b => (
   251|                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
   252|                ))}
   253|              </div>
   254|            </div>
   255|<div className="w-full lg:w-[60%]">
   256|							<div className="relative">
   257|								<img src={`${basePath}/images/secteurs-hero.webp`} alt="Diversite des secteurs desservis" loading="lazy"
   258|              className="rounded-2xl shadow-2xl w-full object-cover"
   259|              style={{maxHeight:'550px', objectFit:'cover'}}/>
   260|                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
   261|                  <div className="flex items-center gap-2.5">
   262|                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
   263|                      <PhoneIcon className="w-5 h-5 text-indigo-600" />
   264|                    </div>
   265|                    <div><p className="font-black text-sm">{"20+"}</p><p className="text-slate-500 text-xs">secteurs desservis</p></div>
   266|                  </div>
   267|                </div>
   268|              </div>
   269|            </div>
   270|          </div>
   271|        </div>
   272|      </section>
   273|
   274|      {/* SECTION 2: DARK - STATS */}
   275|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-28 overflow-hidden relative">
   276|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
   277|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
   278|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
   279|        </div>
   280|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
   281|          <div className="text-center mb-12">
   282|            <h2 className="text-3xl lg:text-4xl font-black mb-4">Notre Expertise en Chiffres</h2>
   283|            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Des resultats concrets dans tous les secteurs que nous servons</p>
   284|          </div>
   285|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
   286|            {STATS.map(({value, label}) => (
   287|              <div key={label}>
   288|                <p className="text-4xl font-black text-indigo-400">{value}</p>
   289|                <p className="text-white text-sm mt-1 font-medium">{label}</p>
   290|              </div>
   291|            ))}
   292|          </div>
   293|        </div>
   294|      </section>
   295|
   296|      {/* SECTION 3: SECTORS GRID */}
   297|      <section className="py-20 bg-slate-50">
   298|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   299|          <div className="text-center mb-12">
   300|            <h2 className="text-3xl font-black text-slate-900 mb-2">Nos Secteurs d'Expertise</h2>
   301|            <p className="text-slate-500 mb-4">Cliquez sur un secteur pour decouvrir notre expertise detaillee</p>
   302|            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
   303|          </div>
   304|          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   305|            {SECTORS.slice(0, 8).map(({icon: Icon, name, desc}) => (
   306|              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all cursor-pointer hover:border-indigo-200"
   307|                onClick={() => {
   308|                  const article = SECTOR_ARTICLES.find(a => a.cat.toLowerCase() === name.toLowerCase() || a.cat.toLowerCase().includes(name.toLowerCase().split(' ')[0]))
   309|                  if (article) setSelectedArticle(article)
   310|                }}>
   311|                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
   312|                  <Icon className="w-6 h-6 text-indigo-600" />
   313|                </div>
   314|                <h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
   315|                <p className="text-slate-500 text-sm">{desc}</p>
   316|                <div className="mt-4">
   317|                  <span className="text-indigo-600 text-sm font-medium">Voir les details</span>
   318|                </div>
   319|              </div>
   320|            ))}
   321|          </div>
   322|        </div>
   323|      </section>
   324|
   325|      {/* SECTION 4: ARTICLES GRID */}
   326|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-24 overflow-hidden relative">
   327|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
   328|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
   329|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
   330|        </div>
   331|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
   332|          <div className="text-center mb-12">
   333|            <h2 className="text-3xl lg:text-4xl font-black mb-4">Expertise Sectorielle</h2>
   334|            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Articles approfondis sur chaque secteur d'activite</p>
   335|          </div>
   336|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   337|            {SECTOR_ARTICLES.slice(0, 8).map((article) => (
   338|              <article key={article.slug}
   339|                className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
   340|                onClick={() => setSelectedArticle(article)}>
   341|                <img src={article.img} alt={article.title} loading="lazy"
   342|                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
   343|                <div className="p-4">
   344|                  <div className="flex items-center gap-2 mb-2">
   345|                    <span className="bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-2 py-1 rounded-full">{article.cat}</span>
   346|                    <span className="text-slate-200 text-xs">{article.readTime}</span>
   347|                  </div>
   348|                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors text-sm leading-tight">{article.title}</h3>
   349|                  <p className="text-indigo-200 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
   350|                  <span className="text-indigo-300 text-xs font-semibold group-hover:underline">Lire l'article</span>
   351|                </div>
   352|              </article>
   353|            ))}
   354|          </div>
   355|        </div>
   356|      </section>
   357|
   358|{/* SECTION 5: TESTIMONIALS AUTO-SLIDE */}
   359|<section className="py-20 bg-slate-50 overflow-hidden">
   360|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   361|<div className="text-center mb-12">
   362|<h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent vraiment</h2>
   363|<div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
   364|</div>
   365|</div>
   366|<GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="sm" basePath={basePath} />
   367|</section>
   368|
   369|      {/* SECTION 6: FAQ */}
   370|      <section className="py-20 bg-white">
   371|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   372|          <div className="text-center mb-12">
   373|            <h2 className="text-3xl font-black text-slate-900 mb-3">Questions frequentes</h2>
   374|            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
   375|          </div>
   376|          <div className="space-y-6">
   377|            {FAQ.map(({question, answer}, index) => (
   378|              <div key={index} className="bg-slate-50 rounded-2xl p-6">
   379|                <div className="flex items-start gap-4 mb-3">
   380|                  <div className="flex-shrink-0">
   381|                    <QuestionIcon className="w-5 h-5 text-indigo-600" />
   382|                  </div>
   383|                  <div>
   384|                    <h3 className="font-bold text-slate-900">{question}</h3>
   385|                    <p className="text-slate-500">{answer}</p>
   386|                  </div>
   387|                </div>
   388|              </div>
   389|            ))}
   390|          </div>
   391|        </div>
   392|      </section>
   393|
   394|      {/* SECTION 7: BENEFITS */}
   395|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 text-white">
   396|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   397|          <div className="text-center mb-12">
   398|            <h2 className="text-3xl font-black text-white mb-3">Avantages supplementaires</h2>
   399|            <div className="w-16 h-1 bg-indigo-400 mx-auto rounded-full"/>
   400|          </div>
   401|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   402|            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   403|              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   404|                <ShieldCheckIcon className="w-6 h-6 text-indigo-300" />
   405|              </div>
   406|              <h3 className="font-bold text-lg text-white mb-2">Conformite totale</h3>
   407|              <p className="text-white text-sm">Respect des regulations les plus strictes dans chaque secteur.</p>
   408|            </div>
   409|            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   410|              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   411|                <UsersIcon className="w-6 h-6 text-indigo-300" />
   412|              </div>
   413|              <h3 className="font-bold text-lg text-white mb-2">Evolution constante</h3>
   414|              <p className="text-white text-sm">Mises a jour regulieres basees sur les retours terrain.</p>
   415|            </div>
   416|            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   417|              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   418|                <ClockIcon className="w-6 h-6 text-indigo-300" />
   419|              </div>
   420|              <h3 className="font-bold text-lg text-white mb-2">Support dédié</h3>
   421|              <p className="text-white text-sm">Equipe de support disponible pour optimiser votre service.</p>
   422|            </div>
   423|            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   424|              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   425|                <CheckIcon className="w-6 h-6 text-indigo-300" />
   426|              </div>
   427|              <h3 className="font-bold text-lg text-white mb-2">Garantie qualite</h3>
   428|              <p className="text-white text-sm">SLA garanti et suivi des performances en temps reel.</p>
   429|            </div>
   430|          </div>
   431|        </div>
   432|      </section>
   433|
   434|      {/* SECTION 8: CTA */}
   435|      <section className="py-20 bg-slate-50">
   436|        <div className="max-w-4xl mx-auto px-4 text-center">
   437|          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à optimiser votre relation client?</h2>
   438|          <p className="text-slate-500 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
   439|          <CTAButtons slug="secteurs"/>
   440|        </div>
   441|      </section>
   442|
   443|{/* ARTICLE MODAL */}
   444|{selectedArticle && (
   445|  <BlogArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
   446|)}
   447|<ServiceSchema name="Secteurs d'Activité" description="Services téléphoniques adaptés à chaque secteur: restauration, santé, immobilier, juridique, et plus" slug="secteurs" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
   448|<FAQSchema faqs={[
   449|  { question: "Quels secteurs dessert Smart Hotline?", answer: "Nous desservons tous les secteurs: restauration, santé, immobilier, juridique, commerce, éducation, hôtellerie, et plus encore. Chaque secteur bénéficie d'un service adapté." },
   450|  { question: "Comment adaptez-vous le service à mon secteur?", answer: "On forme nos conseillers aux spécificités de votre industrie: vocabulaire, réglementations, attentes des clients. Votre service est sur mesure." },
   451|  { question: "Puis-je changer de secteur?", answer: "Oui, votre service évolue avec vous. Si vous diversifiez votre activité, on adapte les scripts et la formation." },
   452|  { question: "Avez-vous de l'expérience dans mon domaine?", answer: "Avec plus de 150 entreprises servies, nous avons de l'expérience dans la plupart des secteurs. Demandez-nous!" }
   453|]} />
   454|</>
   455|  )
   456|}
   457|