'use client'
import GeoTestimonials from '@/components/GeoTestimonials'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useState } from 'react'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import BlogArticleModal, { type Article } from '@/components/BlogArticleModal'
import { PhoneIcon, QuestionIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon, HotelIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const SECTORS = [
  { icon: UtensilsIcon, name: "Restauration", desc: "Reservations, livraisons, service client. Ne manquez aucune commande.", examples: ["Restaurants", "Traiteurs", "Dark kitchens"] },
  { icon: HeartIcon, name: "Sante & Cliniques", desc: "Prise de RDV, rappels patients, urgences. Disponible 24/7.", examples: ["Cliniques", "Medecins", "Physiotherapie"] },
  { icon: BuildingIcon, name: "Immobilier", desc: "Qualification des acheteurs, visites, suivi des leads.", examples: ["Agences", "Courtiers", "Promoteurs"] },
  { icon: CarIcon, name: "Automobile", desc: "Service apres-vente, RDV atelier, relance clients.", examples: ["Concessionnaires", "Garages", "Location"] },
  { icon: ScaleIcon, name: "Services Juridiques", desc: "Filtrage des appels, prise de RDV, urgences juridiques.", examples: ["Cabinets avocats", "Notaires", "Huissiers"] },
  { icon: HammerIcon, name: "Construction & BTP", desc: "Devis, suivi chantiers, coordination sous-traitants.", examples: ["Entrepreneurs", "Architectes", "Renovations"] },
  { icon: ComputerIcon, name: "Tech & SaaS", desc: "Support niveau 1, onboarding clients, escalades.", examples: ["Startups", "SaaS", "Agences web"] },
  { icon: CartIcon, name: "E-commerce", desc: "SAV, retours, suivi commandes, fidelisation.", examples: ["Boutiques online", "Marketplaces", "Dropshipping"] },
  { icon: GraduationIcon, name: "Education & Formation", desc: "Inscriptions, questions, suivi eleves et parents.", examples: ["Ecoles", "Centres formation", "Tuteurs"] },
  { icon: HotelIcon, name: "Hotellerie & Tourisme", desc: "Reservations, conciergerie, support voyageurs.", examples: ["Hotels", "Auberges", "Agences voyage"] },
]

const STATS = [
  { value: '20+', label: 'Secteurs desservis' },
  { value: '500+', label: 'PME accompagnees' },
  { value: '98%', label: 'Taux de satisfaction' },
  { value: '24/7', label: 'Disponibilite' },
]


const FAQ = [
  {
    question: "Travaillez-vous dans tous les secteurs d'activite ?",
    answer: "Nous avons une experience dans plus de 20 secteurs differents et nous nous adaptons rapidement a de nouveaux domaines grace a notre methodologie flexible."
  },
  {
    question: "Comment assurez-vous la qualite du service dans des secteurs specialises ?",
    answer: "Nous commencant toujours par une analyse approfondie de votre secteur et nous formons specifiquement nos agents sur votre terminologie et vos processus."
  }
]

// SEO-Optimized Sector Articles
const SECTOR_ARTICLES: Article[] = [
  {
    slug: 'secteur-restauration-externalisation',
    title: "Secteur Restauration: Comment l'Externalisation Telephonique Multiplie Vos Reservations",
    date: "15 mars 2026",
    cat: "Restauration",
    img: "/images/secteurs/restauration.jpg",
    excerpt: "Decouvrez comment 3 restaurants quebecois ont double leurs reservations grace a une gestion telephonique professionnelle.",
    author: "Marie-Chantal Dubois",
    readTime: "6 min",
    metaDesc: "Externalisation telephonique restauration Quebec: doublez vos reservations, reduisez les no-shows et captez chaque appel. Etudes de cas et ROI.",
    keywords: ["externalisation restauration", "reservation restaurant Quebec", "service client restaurant", "centre appels restauration", "PME restauration"],
    content: `<p>La restauration, c'est des marges fines et des journees longues. Le dernier truc qu'un restaurateur veut faire, c'est decrocher le telephone pendant le service.</p>
<h2>Le probleme qu'on ne veut pas admettre</h2>
<p>« J'ai mes serveurs qui repondent quand ils peuvent », me disait Pierre, proprietaire d'un bistro du Plateau. Resultat : 20% des reservations ne se presentaient pas.</p>
<h2>Ce que l'externalisation apporte</h2>
<ul><li>Zero appel manque</li><li>Confirmation automatique</li><li>Disponibilite 24/7</li><li>Service en francais natif</li></ul>
<h2>ROI concret</h2>
<p>Pour un restaurant de 50-100 couverts : Cout du service : 400-800$/mois. Revenus recuperes : 2000$+/mois. ROI moyen : 300% des le premier mois.</p>`
  },
  {
    slug: 'secteur-sante-cliniques-telephonie',
    title: "Secteur Sante: Optimiser la Prise de Rendez-Vous Medical",
    date: "12 mars 2026",
    cat: "Sante",
    img: "/images/secteurs/sante.jpg",
    excerpt: "Comment les cliniques medicales reduisent les appels manques et ameliorent la satisfaction patient.",
    author: "Dr. Jean-Michel Leclerc",
    readTime: "7 min",
    metaDesc: "Externalisation telephonique clinique medicale Quebec: prise de rendez-vous 24/7, rappels patients, reduction des no-shows.",
    keywords: ["externalisation sante", "prise rendez-vous medical", "clinique Quebec", "telephonie medicale", "rappel patient"],
    content: `<p>Une clinique medicale recoit en moyenne 50-100 appels par jour.</p>
<h2>Les defis specifiques</h2>
<ul><li>Confidentialite - Conformite Loi 25</li><li>Urgences - Triage des appels critiques</li><li>Disponibilite - Patients apres les heures</li></ul>
<h2>Resultats mesures</h2>
<ul><li>Appels manques : 35% a 2%</li><li>No-shows : 22% a 8%</li><li>Satisfaction patient : +40%</li></ul>`
  },
  {
    slug: 'secteur-immobilier-qualification-leads',
    title: "Secteur Immobilier: Qualifier Vos Leads en 30 Secondes",
    date: "8 mars 2026",
    cat: "Immobilier",
    img: "/images/secteurs/immobilier.jpg",
    excerpt: "Comment les agents immobiliers doublent leurs conversions grace a une qualification telephonique professionnelle.",
    author: "Francois Martel",
    readTime: "5 min",
    metaDesc: "Externalisation telephonique immobilier Quebec: qualification leads, prise de rendez-vous visite, suivi acheteurs.",
    keywords: ["externalisation immobilier", "qualification leads Quebec", "courtier immobilier", "prise rendez-vous visite"],
    content: `<p>Dans l'immobilier, chaque appel est une vente potentielle.</p>
<h2>Notre methode BANQ</h2>
<ul><li>Budget - Verification du pre-approve</li><li>Autorite - Identification du decideur</li><li>Need - Comprehension du besoin reel</li><li>Qualification - Scoring du lead</li></ul>
<h2>Resultats typiques</h2>
<ul><li>Leads qualifies : +85%</li><li>Taux de conversion : 12% a 22%</li></ul>`
  },
  {
    slug: 'secteur-automobile-service-client',
    title: "Secteur Automobile: Service Apres-Vente qui Fidelise",
    date: "5 mars 2026",
    cat: "Automobile",
    img: "/images/secteurs/automobile.jpg",
    excerpt: "Comment les concessionnaires ameliorent la satisfaction client et les rendez-vous atelier.",
    author: "Sophie Bertrand",
    readTime: "5 min",
    metaDesc: "Externalisation telephonique concessionnaire automobile Quebec: prise de rendez-vous atelier, SAV, relance clients.",
    keywords: ["externalisation automobile", "concessionnaire Quebec", "service apres-vente auto", "rendez-vous atelier"],
    content: `<p>Un concessionnaire perd en moyenne 25% de ses clients chaque annee. La principale raison ? Un service apres-vente defaillant.</p>
<h2>Resultats mesures</h2>
<ul><li>Taux de retention client : +18%</li><li>Rendez-vous atelier : +40%</li><li>Satisfaction SAV : 68% a 89%</li></ul>`
  },
  {
    slug: 'secteur-juridique-cabinet-avocat',
    title: "Secteur Juridique: Filtrer les Urgences, Capturer les Dossiers",
    date: "1 mars 2026",
    cat: "Juridique",
    img: "/images/secteurs/juridique.jpg",
    excerpt: "Comment les cabinets d'avocats gerent les appels avec discretion et efficacite.",
    author: "Claire Dupont",
    readTime: "6 min",
    metaDesc: "Externalisation telephonique cabinet avocat Quebec: filtrage d'appels, prise de rendez-vous, gestion urgences juridiques.",
    keywords: ["externalisation juridique", "cabinet avocat Quebec", "telephonie notaire", "filtrage appels"],
    content: `<p>Dans le domaine juridique, chaque appel peut etre un nouveau dossier.</p>
<h2>Protocoles specifiques</h2>
<ul><li>Identification de l'urgence</li><li>Transfert immediat vers l'avocat</li><li>Confidentialite garantie</li></ul>`
  },
  {
    slug: 'secteur-construction-btp',
    title: "Secteur BTP: Gerer les Appels sur les Chantiers",
    date: "25 fevrier 2026",
    cat: "Construction",
    img: "/images/secteurs/construction.jpg",
    excerpt: "Comment les entrepreneurs en construction gardent le contact avec clients et sous-traitants.",
    author: "Rejean Lavoie",
    readTime: "5 min",
    metaDesc: "Externalisation telephonique construction BTP Quebec: gestion devis, suivi chantiers, coordination sous-traitants.",
    keywords: ["externalisation BTP", "construction Quebec", "devis chantier", "suivi sous-traitants"],
    content: `<p>Sur un chantier, on ne peut pas repondre au telephone. Mais un entrepreneur qui ne repond pas, c'est un contrat perdu.</p>
<h2>Solution adaptee</h2>
<p>Nos agents sont formes a la terminologie du batiment. Ils comprennent la difference entre une urgence et une question standard.</p>`
  },
  {
    slug: 'secteur-tech-saas-support',
    title: "Secteur Tech: Support Niveau 1 qui Degage Vos Devs",
    date: "20 fevrier 2026",
    cat: "Tech",
    img: "/images/secteurs/tech.jpg",
    excerpt: "Comment les startups et SaaS reduisent les tickets de support de 60%.",
    author: "Jean-Michel Leclerc",
    readTime: "6 min",
    metaDesc: "Externalisation support technique SaaS Quebec: support niveau 1, onboarding clients, reduction tickets.",
    keywords: ["externalisation tech", "support SaaS", "support niveau 1 Quebec", "onboarding clients"],
    content: `<p>Vos developpeurs passent 30% de leur temps a repondre a des questions simples.</p>
<h2>Resultats</h2>
<ul><li>Tickets resolus niveau 1 : 65%</li><li>Temps developpeurs recupere : 12h/semaine</li><li>Satisfaction support : +35%</li></ul>`
  },
  {
    slug: 'secteur-ecommerce-sav',
    title: "Secteur E-commerce: SAV qui Convertit les Mecontents",
    date: "15 fevrier 2026",
    cat: "E-commerce",
    img: "/images/secteurs/ecommerce.jpg",
    excerpt: "Comment les boutiques en ligne transforment les reclamations en clients fideles.",
    author: "Marie-Chantal Dubois",
    readTime: "5 min",
    metaDesc: "Externalisation SAV e-commerce Quebec: retours, suivi commandes, reclamations.",
    keywords: ["externalisation e-commerce", "SAV boutique en ligne", "retours produits", "fidelisation client"],
    content: `<p>En e-commerce, un client mecontent partage son experience avec 15 personnes.</p>
<h2>Nos KPIs SAV</h2>
<ul><li>Resolution premier contact : 85%</li><li>Temps de reponse : moins de 2h</li><li>30% des reclamations deviennent des ventes</li></ul>`
  },
  {
    slug: 'secteur-education-inscriptions',
    title: "Secteur Education: Inscriptions et Suivi Parents",
    date: "10 fevrier 2026",
    cat: "Education",
    img: "/images/secteurs/education.jpg",
    excerpt: "Comment les ecoles et centres de formation gerent les inscriptions.",
    author: "Sophie Bertrand",
    readTime: "5 min",
    metaDesc: "Externalisation telephonique education Quebec: inscriptions, questions parents, suivi eleves.",
    keywords: ["externalisation education", "inscriptions ecole Quebec", "suivi parents", "centre formation"],
    content: `<p>Les periodes d'inscriptions sont infernales pour les ecoles.</p>
<h2>Solution</h2>
<p>Un service dedie pendant les periodes de pointe. Agents formes sur vos programmes, tarifs et processus.</p>`
  },
  {
    slug: 'secteur-hotellerie-tourisme',
    title: "Secteur Hotellerie: Reservations et Conciergerie",
    date: "5 fevrier 2026",
    cat: "Tourisme",
    img: "/images/secteurs/hotellerie.jpg",
    excerpt: "Comment les hotels captent chaque reservation, meme apres la reception fermee.",
    author: "Francois Martel",
    readTime: "5 min",
    metaDesc: "Externalisation telephonique hotellerie Quebec: reservations 24/7, conciergerie, support voyageurs.",
    keywords: ["externalisation hotellerie", "reservation hotel Quebec", "conciergerie", "support voyageurs"],
    content: `<p>Un hotel qui ne repond pas a 22h perd des reservations.</p>
<h2>Service 24/7</h2>
<p>Nos agents repondent a toute heure, en francais et en anglais. Integration directe avec votre PMS.</p>`
  }
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
        Demo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Secteurs() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  return (
    <>
      {/* SECTION 1: LIGHT HERO */}
      <section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[40%]">
							<span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Secteurs d'Activite
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Nous Servons<br/>Plus de 20 Secteurs
              </h1>
              <p className="text-lg text-slate-600 mb-8">De la restauration a la technologie, en passant par la sante et l'immobilier, notre expertise couvre un large eventail d'industries.</p>
              <CTAButtons slug="secteurs"/>
              <div className="flex flex-wrap gap-3">
                {['Restauration', 'Sante', 'Immobilier', 'Technologie'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
                ))}
              </div>
            </div>
<div className="w-full lg:w-[60%]">
							<div className="relative">
								<img src={`${basePath}/images/secteurs-hero.webp`} alt="Diversite des secteurs desservis" loading="lazy"
              className="rounded-2xl shadow-2xl w-full object-cover"
              style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div><p className="font-black text-sm">{"20+"}</p><p className="text-slate-500 text-xs">secteurs desservis</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - STATS */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Notre Expertise en Chiffres</h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Des resultats concrets dans tous les secteurs que nous servons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-indigo-400">{value}</p>
                <p className="text-white text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SECTORS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Nos Secteurs d'Expertise</h2>
            <p className="text-slate-500 mb-4">Cliquez sur un secteur pour decouvrir notre expertise detaillee</p>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.slice(0, 8).map(({icon: Icon, name, desc}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all cursor-pointer hover:border-indigo-200"
                onClick={() => {
                  const article = SECTOR_ARTICLES.find(a => a.cat.toLowerCase() === name.toLowerCase() || a.cat.toLowerCase().includes(name.toLowerCase().split(' ')[0]))
                  if (article) setSelectedArticle(article)
                }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 text-sm font-medium">Voir les details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ARTICLES GRID */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Expertise Sectorielle</h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Articles approfondis sur chaque secteur d'activite</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SECTOR_ARTICLES.slice(0, 8).map((article) => (
              <article key={article.slug}
                className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                onClick={() => setSelectedArticle(article)}>
                <img src={article.img} alt={article.title} loading="lazy"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-2 py-1 rounded-full">{article.cat}</span>
                    <span className="text-slate-200 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors text-sm leading-tight">{article.title}</h3>
                  <p className="text-indigo-200 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
                  <span className="text-indigo-300 text-xs font-semibold group-hover:underline">Lire l'article</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 5: TESTIMONIALS AUTO-SLIDE */}
<section className="py-20 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent vraiment</h2>
<div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
</div>
</div>
<GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="sm" basePath={basePath} />
</section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Questions frequentes</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
          </div>
          <div className="space-y-6">
            {FAQ.map(({question, answer}, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <QuestionIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{question}</h3>
                    <p className="text-slate-500">{answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BENEFITS */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Avantages supplementaires</h2>
            <div className="w-16 h-1 bg-indigo-400 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Conformite totale</h3>
              <p className="text-white text-sm">Respect des regulations les plus strictes dans chaque secteur.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Evolution constante</h3>
              <p className="text-white text-sm">Mises a jour regulieres basees sur les retours terrain.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Support dédié</h3>
              <p className="text-white text-sm">Equipe de support disponible pour optimiser votre service.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Garantie qualite</h3>
              <p className="text-white text-sm">SLA garanti et suivi des performances en temps reel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à optimiser votre relation client?</h2>
          <p className="text-slate-500 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
          <CTAButtons slug="secteurs"/>
        </div>
      </section>

{/* ARTICLE MODAL */}
{selectedArticle && (
  <BlogArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
)}
<ServiceSchema name="Secteurs d'Activité" description="Services téléphoniques adaptés à chaque secteur: restauration, santé, immobilier, juridique, et plus" slug="secteurs" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "Quels secteurs dessert Smart Hotline?", answer: "Nous desservons tous les secteurs: restauration, santé, immobilier, juridique, commerce, éducation, hôtellerie, et plus encore. Chaque secteur bénéficie d'un service adapté." },
  { question: "Comment adaptez-vous le service à mon secteur?", answer: "On forme nos conseillers aux spécificités de votre industrie: vocabulaire, réglementations, attentes des clients. Votre service est sur mesure." },
  { question: "Puis-je changer de secteur?", answer: "Oui, votre service évolue avec vous. Si vous diversifiez votre activité, on adapte les scripts et la formation." },
  { question: "Avez-vous de l'expérience dans mon domaine?", answer: "Avec plus de 150 entreprises servies, nous avons de l'expérience dans la plupart des secteurs. Demandez-nous!" }
]} />
</>
  )
}
