'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, BoltIcon, ShieldCheckIcon, UsersIcon, ClockIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': PhoneIcon, 'title': 'Réponse instantanée', 'desc': 'Moins de 2 secondes, 24h/24, 7j/7, sans temps d\'attente.'},
  {'icon': CalendarIcon, 'title': 'Prise de rendez-vous', 'desc': 'Synchronisé avec Google Calendar, Calendly. Confirmation auto.'},
  {'icon': QuestionIcon, 'title': 'FAQ automatisée', 'desc': 'Répond aux questions fréquentes : horaires, tarifs, adresse.'},
  {'icon': TransferIcon, 'title': 'Transfert intelligent', 'desc': 'Détecte les situations complexes, transfert vers conseiller.'},
  {'icon': MessageIcon, 'title': 'Prise de messages', 'desc': 'Enregistre nom, numéro, motif — transmis par email ou CRM.'},
  {'icon': AnalyticsIcon, 'title': 'Transcriptions & analyses', 'desc': 'Chaque appel transcrit. Tendances et insights mensuels.'},
]

const STEPS = [
  {'n': '1', 't': 'Configuration de Sophie', 'd': 'Personnalisation de la voix, du script et de la base de connaissance.'},
  {'n': '2', 't': 'Test & validation', 'd': 'Simulation d\'appels réels pour valider les réponses.'},
  {'n': '3', 't': 'Intégration', 'd': 'Connexion à votre numéro existant en moins de 24h.'},
  {'n': '4', 't': 'Go live & optimisation', 'd': 'Sophie gère vos appels. Tableau de bord en temps réel.'},
]

const STATS = [
  { value: '98%', label: 'Taux de satisfaction client' },
  { value: '500+', label: 'PME québécoises accompagnées' },
  { value: '24/7', label: 'Disponibilité garantie' },
  { value: '2 sec', label: 'Temps de réponse moyen' },
]

const TESTIMONIALS = [
  {
  quote: "Sophie a transformé notre service client. On ne rate plus aucun appel, même pendant nos périodes de pointe.",
  name: "Marie-Claude Lévesque",
  role: "Directrice opérationnelle, Clinique SantéPlus",
  initials: "MCL"
  },
  {
  quote: "L\'installation a été rapide et l\'équipe extrêmement professionnelle. Nos clients pensent que c\'est une vraie personne qui répond!",
  name: "Daniel Bouchard",
  role: "Propriétaire, Bouchard Mécanique",
  initials: "DB"
  },
  {
  quote: "Le rapport qualité-prix est imbattable. On économise près de 60% comparé à une réceptionniste à temps plein.",
  name: "Isabelle Morin",
  role: "Comptable associée, Fiduciaire LMN",
  initials: "IM"
  },
  {
  quote: "Au début j\'étais sceptique. Mais honnêtement? Les clients ne se rendent compte de rien. C\'sont des vraies conversations.",
  name: "Pierre Houde",
  role: "Gérant, Garage Houde & Frères",
  initials: "PH"
  }
  ]

const FAQ = [
  {
    question: "Combien de temps prend l'installation ?",
    answer: "L'installation complète prend moins de 48 heures. Nous nous occupons de tout: configuration, tests et mise en ligne."
  },
  {
    question: "Est-ce que mes données sont sécurisées ?",
    answer: "Oui, nous sommes entièrement conformes au RGPD et utilisons un chiffrement solide pour toutes vos données."
  },
  {
    question: "Puis-je personnaliser l'accent et le langage ?",
    answer: "Absolument ! Sophie peut parler avec l'accent du Québec, de France, de Belgique ou de Suisse, selon votre préférence."
  }
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
{/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
  <section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 animate-slide-left">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
            <BoltIcon className="w-5 h-5" /> Agents IA Vocaux
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
            Sophie, votre IA<br/>
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">en Français Natif 24/7</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">Elle répond en 2 secondes max. Avec l'accent que vous voulez. Et le meilleur? Vos clients ne savent pas que c'est de l'IA — ils pensent juste que votre réceptionniste est super efficace.</p>
          <CTAButtons slug="ia"/>
          <div className="flex flex-wrap gap-3">
            {['Réponse < 2 sec', 'Accent au choix', '24/7 même la nuit', 'Tarif à la minute'].map((b, i) => (
              <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+1)*100}`}><CheckIcon className="w-5 h-5 text-violet-600" /> {b}</span>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 animate-slide-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <img src="/smart-hotline-last/images/agents-ia-hero.jpg" alt="Agent IA Sophie"
            className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom"
            style={{maxHeight:'550px', objectFit:'cover'}}/>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BoltIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-black text-xl">2 secondes max</p>
                  <p className="text-slate-500 text-sm">pas de musique d&apos;attente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* SECTION 2: DARK - STATS SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Des Résultats Qui Parlent D'eux-mêmes
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Des chiffres concrets qui démontrent l'efficacité de notre solution IA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-blue-700">{value}</p>
                <p className="text-slate-500 text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3: LIGHT - FEATURES */}
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Ce qui est inclus</h2>
        <div className="w-16 h-1 bg-violet-600 mx-auto rounded"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({icon: Icon, title, desc}: any) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-violet-700" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm">{desc}</p>
        </div>
        ))}
      </div>
    </div>
  </section>

      {/* SECTION 4: LIGHT - HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Comment ça fonctionne</h2>
          {STEPS.map(({n, t, d}: any) => (
            <div key={n} className="flex gap-5 mb-8 items-start">
              <div className="w-12 h-12 bg-violet-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LIGHT - TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent vraiment</h2>
            <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(({quote, name, role, initials}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{initials}</div>
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
            <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"/>
          </div>
          <div className="space-y-6">
            {FAQ.map(({question, answer}, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <QuestionIcon className="w-5 h-5 text-violet-600" />
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

      {/* SECTION 7: LIGHT - ADDITIONAL BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Avantages supplémentaires</h2>
            <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-violet-700" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Sécurité maximale</h3>
              <p className="text-slate-500 text-sm">Conformité RGPD complète, chiffrement des données et sauvegardes quotidiennes pour protéger vos informations sensibles.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-violet-700" />
              </div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Évolution constante</h3>
<p className="text-slate-500 text-sm">Mises à jour régulières incluant de nouvelles fonctionnalités basé sur les retours clients et les avancées technologiques.</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
<ClockIcon className="w-6 h-6 text-violet-700" />
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Support dédié</h3>
<p className="text-slate-500 text-sm">Équipe de support disponible pour vous accompagner dans l\'utilisation quotidienne de Sophie.</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
<CheckIcon className="w-6 h-6 text-violet-700" />
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Analyse continue</h3>
<p className="text-slate-500 text-sm">Tableau de bord avec statistiques détaillées et optimisation automatique des réponses.</p>
</div>
</div>
</div>
</section>

      {/* SECTION 8: DARK - FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à ne plus rater un appel?</h2>
          <p className="text-blue-200 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
          <CTAButtons slug="ia"/>
        </div>
      </section>
    </>
  )
}
