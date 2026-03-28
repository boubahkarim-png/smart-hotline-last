'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, StarIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const FEATURES = [
{icon: TargetIcon, title: 'Leads qualifiés', desc: 'Ciblage précis et qualification de chaque lead avant transfert.'},
{icon: TrendingIcon, title: 'Scripts de conversion', desc: 'Scripts optimisés par nos experts pour maximiser les résultats.'},
{icon: FolderIcon, title: 'CRM intégré', desc: 'Chaque appel enregistré avec notes, statut et suivi.'},
{icon: CalendarIcon, title: 'Prise de rendez-vous', desc: 'Agenda rempli avec des RDV qualifiés et confirmés.'},
]

const TESTIMONIALS = [
{q: "Notre nombre de rendez-vous qualifiés a doublé en 2 mois. L'équipe comprend vraiment notre industrie.", name: 'Jean-François Lambert', role: 'Directeur des ventes, Solutions TechPlus', av: 'JFL'},
{q: "La qualité des leads est exceptionnelle. On passe moins de temps à filtrer et plus de temps à conclure.", name: 'Marie-Chantal Dubois', role: 'Propriétaire, Dubois Consulting', av: 'MCD'},
{q: "Le reporting quotidien nous permet d'ajuster notre stratégie en temps réel. C'est un véritable partenariat.", name: 'Patrick Gagnon', role: 'PDG, Gagnon Stratégies', av: 'PG'},
{q: "On a arrêté les annonces Google pour leur service. Coût par lead 3x moins cher et les leads sont vraiment qualifiés.", name: 'Stéphane Olivier', role: 'Fondateur, Olivier & Associés', av: 'SO'},
]

function CTAButtons({ slug }: { slug: string }) {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href={`/fr/contact?service=${slug}`} className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
Démo Sans Engagement
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
WhatsApp 24/7
</a>
)}
</div>
)
}

export default function Page() {
return (
<>
{/* SECTION 1: HERO */}
<section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<TargetIcon className="w-5 h-5" /> Appels Sortants
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Multipliez vos Leads<br/>
<span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">avec nos Conseillers</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Prospection, télémarketing, prise de rendez-vous. Nos conseillers connaissent l'art de décrocher des rendez-vous — sans faire peur à vos prospects.</p>
<CTAButtons slug="emission"/>
<div className="flex flex-wrap gap-3 mt-6">
{['Leads qualifiés', 'CRM inclus', 'Scripts optimisés', 'Reporting daily'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-emerald-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
<img src="/images/telemarketing.jpg" alt="Appels sortants" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
<TrendingIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">+40% de RDV</p>
<p className="text-slate-500 text-sm">en moyenne</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 2: FEATURES */}
<section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
<p className="text-emerald-200 text-xl max-w-2xl mx-auto">Tout ce qu'il faut pour multiplier vos rendez-vous qualifiés.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-emerald-200 leading-relaxed">{desc}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 3: STATS */}
<section className="bg-white py-16 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">98%</p>
<p className="text-slate-600 mt-2 font-medium">Taux de satisfaction</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">500+</p>
<p className="text-slate-600 mt-2 font-medium">PME accompagnées</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">+40%</p>
<p className="text-slate-600 mt-2 font-medium">Augmentation RDV</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">24/7</p>
<p className="text-slate-600 mt-2 font-medium">Disponibilité</p>
</div>
</div>
</div>
</section>

{/* SECTION 4: HOW IT WORKS */}
<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça marche</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{[
{n: '1', t: 'Définition des cibles', d: "Analyse de votre marché et création des profils prospects"},
{n: '2', t: 'Script & formation', d: "Script sur mesure et formation à votre offre"},
{n: '3', t: 'Lancement campagne', d: "Démarrage des appels selon votre planning"},
{n: '4', t: 'Rapports & optimisation', d: "Ajustements quotidiens pour maximiser les résultats"},
].map((step, i) => (
<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
<p className="text-slate-600 leading-relaxed">{step.d}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 5: BENEFITS */}
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Pourquoi nous faire confiance?</h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Nos conseillers sont formés pour représenter votre entreprise comme si c'était la leur. Résultats garantis ou on ajuste.</p>
<ul className="space-y-4 mb-8">
{[
'Conseillers francophones du Québec et de France',
'Rapports quotidiens avec KPIs détaillés',
'Prix PME — 40-60% moins cher qu\'un employé',
'Annulez quand vous voulez — pas de contrat long',
].map((item, i) => (
<li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
<span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
{item}
</li>
))}
</ul>
<Link href="/fr/contact?service=emission" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Voir une démo
</Link>
</div>
<div className="w-full lg:w-1/2">
<div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-emerald-50">
<h3 className="font-bold text-2xl text-slate-900 mb-6">Des tarifs adaptés à votre croissance</h3>
<p className="text-slate-600 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> Aucun frais caché</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> Annulez quand vous voulez</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> CRM et autodialer inclus</li>
</ul>
<Link href="/fr/tarifs" className="text-emerald-600 font-bold text-lg hover:underline flex items-center gap-2">
Voir tous les tarifs
</Link>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 6: TESTIMONIALS */}
<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{TESTIMONIALS.map((t, i) => (
<div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
<div className="flex gap-1 mb-5">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
<div>
<p className="font-bold text-slate-900">{t.name}</p>
<p className="text-slate-500 text-sm">{t.role}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* SECTION 7: FINAL CTA */}
<section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à multiplier vos leads?</h2>
<p className="text-emerald-200 text-xl mb-12 max-w-2xl mx-auto">Essai gratuit de 2 semaines. Sans engagement. On commence quand vous voulez.</p>
<CTAButtons slug="emission"/>
<p className="text-emerald-300 mt-8 text-lg">
<Link href="/fr/tarifs" className="underline hover:text-white transition-colors">Voir les tarifs</Link>
<span className="mx-3">·</span>
<Link href="/fr/contact" className="underline hover:text-white transition-colors">Nous contacter</Link>
</p>
</div>
</section>

{/* SECTION 8: FAQ */}
<section className="bg-white py-20">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Combien de temps prend une campagne typique?", a: "Nos campagnes sont flexibles selon vos besoins. Nous recommandons un minimum de 3 mois pour voir des résultats significatifs, mais vous pouvez ajuster la durée à tout moment."},
{q: "Est-ce que je peux cibler des régions spécifiques?", a: "Absolument ! Nous pouvons cibler par ville, région, province ou même par code postal spécifique pour maximiser la pertinence de vos appels sortants."},
{q: "Comment je reçois les leads qualifiés?", a: "Par SMS, email, ou directement dans votre CRM — vous choisissez. Les leads sont transmis en temps réel avec toutes les informations nécessaires."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/fr/contact?service=emission" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Démarrer Maintenant
</Link>
</div>
</div>
</section>
</>
)
}
