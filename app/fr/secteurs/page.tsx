'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, BoltIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon } from '@/components/Icons'

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
]

const STATS = [
  { value: '20+', label: 'Secteurs desservis' },
  { value: '500+', label: 'PME accompagnées' },
  { value: '98%', label: 'Taux de satisfaction' },
  { value: '24/7', label: 'Disponibilité' },
]

const TESTIMONIALS = [
  {
  quote: "Smart Hotline comprend vraiment notre secteur de la restauration. Ils gèrent nos réservations et nos livraisons avec une efficacité impressionnante.",
  name: "Marie-Lucie Boucher",
  role: "Propriétaire, Restaurant Le Petit Jérôme",
  initials: "MLB"
  },
  {
  quote: "Grâce à leur service d\'émission d\'appels, nous avons augmenté nos prises de rendez-vous de 60% en 3 mois.",
  name: "Thomas Girard",
  role: "Directeur, Clinique Médicale Plus",
  initials: "TG"
  },
  {
  quote: "Dans notre domaine juridique, chaque appel compte. Ils filtrent parfaitement les urgences et prennent les rendez-vous comme il faut.",
  name: "Claire Dupont",
  role: "Associée, Cabinet Dupont & Mercier",
  initials: "CD"
  },
  {
  quote: "On est dans le BTP, c\'est pas toujours évident de gérer les appels sur les chantiers. Eux, ils captent notre réalité et ça fait toute la différence.",
  name: "Réjean Lavoie",
  role: "Propriétaire, Construction Lavoie",
  initials: "RL"
  }
  ]

const FAQ = [
  {
    question: "Travaillez-vous dans tous les secteurs d'activité ?",
    answer: "Nous avons une expérience dans plus de 20 secteurs différents et nous nous adaptons rapidement à de nouveaux domaines grâce à notre méthodologie flexible."
  },
  {
    question: "Comment assurez-vous la qualité du service dans des secteurs spécialisés ?",
    answer: "Nous commençant toujours par une analyse approfondie de votre secteur et nous formons spécifiquement nos agents sur votre terminologie et vos processus."
  }
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-amber-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-amber-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-amber-600 text-amber-600 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-amber-600 text-amber-600 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Secteurs() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Secteurs d'Activité
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Nous Servons<br/>Plus de 20 Secteurs
              </h1>
              <p className="text-lg text-slate-600 mb-8">De la restauration à la technologie, en passant par la santé et l'immobilier, notre expertise couvre un large éventail d'industries.</p>
              <CTAButtons slug="secteurs"/>
              <div className="flex flex-wrap gap-3">
                {['Restauration', 'Santé', 'Immobilier', 'Technologie'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-amber-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/secteurs-hero.png" alt="Diversité des secteurs desservis"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div><p className="font-black text-sm">{"20+"}</p><p className="text-slate-500 text-xs">secteurs desservis</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - STATS SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-amber-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Notre Expertise en Chiffres
            </h2>
            <p className="text-amber-200 text-lg max-w-2xl mx-auto">
              Des résultats concrets dans tous les secteurs que nous servons
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-amber-700">{value}</p>
                <p className="text-slate-500 text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - SECTORS GRID (4 BOXES INSTEAD OF 3) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Nos Secteurs d'Expertise</h2>
<div className="w-16 h-1 bg-amber-600 mx-auto rounded"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{SECTORS.slice(0, 4).map(({icon: Icon, name, desc, examples}) => (
<div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-amber-600" />
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
<p className="text-slate-500 text-sm">{desc}</p>
<div className="mt-4">
<span className="text-slate-600 text-sm font-medium">Exemples : {examples.join(', ')}</span>
</div>
</div>
))}
</div>
</div>
</section>

      {/* SECTION 4: LIGHT - HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Comment ça fonctionne</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Analyse de votre secteur</h3>
              <p className="text-slate-500 text-sm">Nous étudions en profondeur votre industrie pour comprendre vos défis spécifiques.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Personnalisation du service</h3>
              <p className="text-slate-500 text-sm">Nous adaptons nos scripts et processus à votre réalité opérationnelle.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Formation spécialisée</h3>
              <p className="text-slate-500 text-sm">Nos agents sont formés sur votre terminologie et vos processus métier.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Optimisation continue</h3>
              <p className="text-slate-500 text-sm">Nous suivons les performances et ajustons en temps réel pour maximiser vos résultats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent vraiment</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(({quote, name, role, initials}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{initials}</div>
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

      {/* SECTION 6: LIGHT - FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Questions fréquentes</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full"/>
          </div>
          <div className="space-y-6">
            {FAQ.map(({question, answer}, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <QuestionIcon className="w-5 h-5 text-amber-600" />
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

{/* SECTION 7: DARK - ADDITIONAL BENEFITS */}
<section className="bg-gradient-to-br from-slate-900 via-amber-950 to-amber-900 py-20 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-white mb-3">Avantages supplémentaires</h2>
<div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4">
<ShieldCheckIcon className="w-6 h-6 text-amber-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Conformité totale</h3>
<p className="text-slate-300 text-sm">Respect des réglementations les plus strictes dans chaque secteur desservi.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4">
<UsersIcon className="w-6 h-6 text-amber-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Évolution constante</h3>
<p className="text-slate-300 text-sm">Mises à jour régulières de notre expertise basée sur les retours terrain.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4">
<ClockIcon className="w-6 h-6 text-amber-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Support dédié</h3>
<p className="text-slate-300 text-sm">Équipe de support disponible pour optimiser votre service.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center mb-4">
<CheckIcon className="w-6 h-6 text-amber-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Garantie qualité</h3>
<p className="text-slate-300 text-sm">SLA garanti et suivi des performances en temps réel.</p>
</div>
</div>
</div>
</section>

      {/* SECTION 8: LIGHT - FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à optimiser votre relation client?</h2>
          <p className="text-slate-500 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
          <CTAButtons slug="secteurs"/>
        </div>
      </section>
    </>
  )
}
