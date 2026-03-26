'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, QuestionIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': TargetIcon, 'title': 'Leads qualifiés', 'desc': 'Ciblage précis et qualification de chaque lead avant transfert.'},
  {'icon': TrendingIcon, 'title': 'Scripts de conversion', 'desc': 'Scripts optimisés par nos experts pour maximiser les résultats.'},
  {'icon': FolderIcon, 'title': 'CRM intégré', 'desc': 'Chaque appel enregistré avec notes, statut et suivi.'},
  {'icon': CalendarIcon, 'title': 'Prise de rendez-vous', 'desc': 'Agenda rempli avec des RDV qualifiés et confirmés.'},
  {'icon': AnalyticsIcon, 'title': 'KPIs détaillés', 'desc': 'Appels, contacts, leads, conversions, coût par lead.'},
  {'icon': GlobeIcon, 'title': 'Multi-canal', 'desc': 'Appels sortants combinés SMS et email pour plus de portée.'},
]

const STEPS = [
  {'n': '1', 't': 'Définition des cibles', 'd': 'Analyse de votre marché et création des profils prospects.'},
  {'n': '2', 't': 'Script & formation', 'd': 'Script sur mesure et formation à votre offre.'},
  {'n': '3', 't': 'Lancement de la campagne', 'd': 'Démarrage des appels selon votre planning.'},
  {'n': '4', 't': 'Rapports & optimisation', 'd': 'Ajustements quotidiens pour maximiser les résultats.'},
]

const STATS = [
  { value: '98%', label: 'Taux de satisfaction client' },
  { value: '500+', label: 'PME québécoises accompagnées' },
  { value: '24/7', label: 'Disponibilité garantie' },
  { value: '+40%', label: 'Augmentation moyenne des RDV' },
]

const TESTIMONIALS = [
  {
  quote: "Notre nombre de rendez-vous qualifiés a doublé en 2 mois. L\'équipe comprend vraiment notre industrie et sait comment parler à nos prospects.",
  name: "Jean-François Lambert",
  role: "Directeur des ventes, Solutions TechPlus",
  initials: "JFL"
  },
  {
  quote: "La qualité des leads est exceptionnelle. On passe moins de temps à filtrer et plus de temps à conclure des ventes.",
  name: "Marie-Chantal Dubois",
  role: "Propriétaire, Dubois Consulting",
  initials: "MCD"
  },
  {
  quote: "Le reporting quotidien nous permet d\'ajuster notre stratégie en temps réel. C\'est un véritable partenariat, pas juste un service.",
  name: "Patrick Gagnon",
  role: "PDG, Gagnon Stratégies",
  initials: "PG"
  },
  {
  quote: "On a arrêté les annonces Google pour leur service. Coût par lead 3x moins cher et les leads sont vraiment qualifiés.",
  name: "Stéphane Olivier",
  role: "Fondateur, Olivier & Associés",
  initials: "SO"
  }
  ]

const FAQ = [
  {
    question: "Combien de temps prend une campagne typique ?",
    answer: "Nos campagnes sont flexibles selon vos besoins. Nous recommandons un minimum de 3 mois pour voir des résultats significatifs, mais vous pouvez ajuster la durée à tout moment."
  },
  {
    question: "Est-ce que je peux cibler des régions spécifiques ?",
    answer: "Absolument ! Nous pouvons cibler par ville, région, province ou même par code postal spécifique pour maximiser la pertinence de vos appels sortants."
  },
  {
    question: "Quel est le coût par lead qualifié ?",
    answer: "Le coût varie selon votre industrie et la complexité de votre offre, mais nos clients voient généralement un coût par lead 50-70% inférieur aux méthodes traditionnelles."
  }
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
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
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full mb-5">
                <TargetIcon className="w-4 h-4" /> Appels Sortants
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Multipliez vos Leads<br/>avec nos Conseillers
              </h1>
              <p className="text-lg text-slate-600 mb-8">Prospection, télémarketing, prise de rendez-vous. Nos conseillers connaissent l'art de décrocher des rendez-vous — sans faire peur à vos prospects.</p>
              <CTAButtons slug="emission"/>
              <div className="flex flex-wrap gap-3">
                {['Leads qualifiés', 'CRM inclus', 'Scripts optimisés', 'Reporting daily'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-emerald-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/telemarketing.jpg" alt="Conseiller appels sortants"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div><p className="font-black text-sm">+40% de RDV</p><p className="text-slate-500 text-xs">en moyenne</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - STATS SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-800 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Des Résultats Qui Font la Différence
            </h2>
            <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
              Des chiffres concrets qui démontrent l'efficacité de notre approche de prospection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-emerald-700">{value}</p>
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
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-700" />
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
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
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
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(({quote, name, role, initials}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{initials}</div>
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
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"/>
          </div>
          <div className="space-y-6">
            {FAQ.map(({question, answer}, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <QuestionIcon className="w-5 h-5 text-emerald-600" />
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
<section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-800 py-20 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-white mb-3">Avantages supplémentaires</h2>
<div className="w-16 h-1 bg-emerald-400 mx-auto rounded-full"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-4">
<ShieldCheckIcon className="w-6 h-6 text-emerald-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Conformité totale</h3>
<p className="text-slate-300 text-sm">Respect des réglementations telemarketing, enregistrement conforme et gestion des listes d\'exclusion.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-4">
<UsersIcon className="w-6 h-6 text-emerald-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Évolution constante</h3>
<p className="text-slate-300 text-sm">Mises à jour des scripts et stratégies basées sur les retours terrain.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-4">
<ClockIcon className="w-6 h-6 text-emerald-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Support dédié</h3>
<p className="text-slate-300 text-sm">Équipe disponible pour optimiser vos campagnes en temps réel.</p>
</div>
<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
<div className="w-12 h-12 bg-emerald-500/30 rounded-xl flex items-center justify-center mb-4">
<CheckIcon className="w-6 h-6 text-emerald-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">Garantie résultats</h3>
<p className="text-slate-300 text-sm">SLA garanti avec suivi des performances et rapports détaillés.</p>
</div>
</div>
</div>
</section>

      {/* SECTION 8: LIGHT - FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à multiplier vos leads?</h2>
          <p className="text-slate-500 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
          <CTAButtons slug="emission"/>
        </div>
      </section>
    </>
  )
}
