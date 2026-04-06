'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'
import GeoTestimonials from '@/components/GeoTestimonials'
import GeoStats from '@/components/GeoStats'
import GeoComplianceBadge from '@/components/GeoComplianceBadge'
import ScrollAnimate from '@/components/ScrollAnimate'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, ClockIcon, StarIcon, BanknoteIcon } from '@/components/Icons'

const SERVICES = [
  { Icon: PhoneIcon, title: 'Réception 24/7', desc: 'Vos téléphonistes, jour et nuit.', href: '/fr/reception', bg: 'bg-sky-100', color: 'text-sky-700' },
  { Icon: MegaphoneIcon, title: 'Votre Équipe Vente', desc: 'Prospection & leads qualifiés.', href: '/fr/emission', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { Icon: BotIcon, title: 'Agents IA Vocaux', desc: 'Sophie répond en 2 sec, 24/7.', href: '/fr/agents-ia', bg: 'bg-violet-100', color: 'text-violet-700', badge: 'Nouveau' },
  { Icon: HeadphonesIcon, title: 'Support Client', desc: 'Tickets, email, chat, WhatsApp.', href: '/fr/support', bg: 'bg-teal-100', color: 'text-teal-700' },
  { Icon: DatabaseIcon, title: 'CRM & Listes', desc: 'SuiteCRM + listes B2B/B2C.', href: '/fr/crm', bg: 'bg-orange-100', color: 'text-orange-700' },
  { Icon: BanknoteIcon, title: 'Nos Tarifs', desc: 'Prix compétitifs, sans engagement.', href: '/fr/tarifs', bg: 'bg-amber-100', color: 'text-amber-700', badge: 'Populaire' },
]

const MOVING_MESSAGES = [
"500+ appels gérés par jour",
"98% de satisfaction client",
"Réponse en moins de 3 sonneries",
"Disponible 24/7",
"Agents francophones natifs",
"Setup en 48h",
"Sans engagement longue durée",
"CRM inclus",
"IA + Humains",
"Tarifs compétitifs",
]

const TESTIMONIALS_DATA = [
{ q: "J\'ai un resto sur la Main. Avant, je perdais facilement 10-15 clients par semaine. Maintenant? Zéro appel manqué.", name: "Pierre Lacroix", role: "Propriétaire, Bistro du Vieux-Montréal", img: "/images/testimonial-1.jpg", alt: "Portrait de Pierre Lacroix, propriétaire du Bistro du Vieux-Montréal" },
{ q: "C\'est pas juste de la réception. Ils prennent les réservations, répondent aux questions. C\'est comme avoir une réceptionniste, mais à fraction du prix.", name: "Sophie Mercier", role: "Directrice, Clinique Médicale Plateau", img: "/images/testimonial-sophie.jpg", alt: "Portrait de Sophie Mercier, directrice de la Clinique Médicale Plateau" },
{ q: "Pendant le rush du temps des fêtes, ils ont géré plus de 200 appels par jour. Mon équipe était tranquille, les clients heureux.", name: "Marc-André Dubé", role: "Gérant, Magasin Électronique QC", img: "/images/testimonial-2.jpg", alt: "Portrait de Marc-André Dubé, gérant du Magasin Électronique QC" },
{ q: "On a essayé 3 autres services avant. C\'est le seul où les conseillers comprennent vraiment notre business.", name: "Nathalie Tremblay", role: "Directrice, Cabinet Juridique Tremblay", img: "/images/testimonial-nathalie.jpg", alt: "Portrait de Nathalie Tremblay, directrice du Cabinet Juridique Tremblay" },
]

function CTAButtons() {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href="/fr/contact" className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Démo Sans Engagement
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
💬 WhatsApp 24/7
</a>
)}
</div>
)
}

export default function FrHome() {
return (
<>
{/* HERO - Similar to reception page */}
<section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"/>
Conseillers & IA disponibles 24/7
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Votre Partenaire Téléphonique<br/>
<span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Qui Comprend</span><br/>
les PME d\'Ici
</h1>
<GeoHeroSubtitle lang="fr"/>
<CTAButtons />
<div className="flex flex-wrap gap-3 mt-6">
{['24/7 sans arrêt', 'Setup en 48h', 'Sans engagement', '98% satisfaction'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-sky-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/main-hero.webp`} alt="Smart Hotline" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
<PhoneIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">500+ appels/jour</p>
<p className="text-slate-500 text-sm">gérés pour nos clients</p>
</div>
</div>
</div>
<div className="absolute -top-5 -right-5 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-4 shadow-xl text-white">
<p className="font-black text-2xl leading-none">98%</p>
<p className="text-sky-200 text-xs mt-0.5">satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

{/* MOVING MARQUEE - Forever scrolling */}
<section className="bg-gradient-to-r from-sky-600 to-blue-700 py-4 overflow-hidden">
<div className="marquee">
<div className="flex gap-8 animate-[marquee_30s_linear_infinite]">
{[...MOVING_MESSAGES, ...MOVING_MESSAGES].map((msg, i) => (
<span key={i} className="text-white font-semibold text-sm whitespace-nowrap flex items-center gap-2">
<StarIcon className="w-4 h-4 text-amber-400" /> {msg}
</span>
))}
</div>
</div>
</section>

{/* SERVICES */}
<ScrollAnimate animation="fade-up">
<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Nos Solutions</h2>
<p className="text-slate-500 text-lg">Tout ce dont votre PME a besoin pour sa relation client</p>
<div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mt-4"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{SERVICES.map(({ Icon, title, desc, href, bg, color, badge }, i) => (
<Link key={href} href={href} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group auto-float" style={{animationDelay: `${i * 100}ms`}}>
<div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
<Icon className={`w-6 h-6 ${color}`} />
</div>
<div className="flex items-start gap-2 mb-2">
<h3 className="font-bold text-slate-900">{title}</h3>
{badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold">{badge}</span>}
</div>
<p className="text-slate-500 text-sm mb-3">{desc}</p>
<span className="text-sky-600 text-sm font-semibold group-hover:underline">En savoir plus →</span>
</Link>
))}
</div>
</div>
</section>
</ScrollAnimate>

{/* STATS */}
<section className="bg-white border-b border-slate-100 py-10">
<GeoStats lang="fr" />
</section>

{/* AI SECTION */}
<ScrollAnimate animation="fade-left" delay={1}>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2">
<span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-4 py-2 rounded-full mb-6 animate-slow-float">
<span className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse"/>
Nouveau Service
</span>
<h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
Sophie, l'Agente IA<br/>
<span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Qui Parle comme Nous</span>
</h2>
<p className="text-slate-600 text-lg mb-6 leading-relaxed">
Elle répond en moins de 2 secondes. Avec l'accent de votre région — au choix. Et ça coûte une fraction d'un salaire.
</p>
<ul className="space-y-3 mb-8">
{['Réponse en moins de 2 secondes', 'Accents adaptés à votre région', 'Transfert vers un humain si compliqué', 'Coût: ~30% d\'un salaire', 'Dispo 24/7'].map((f, i) => (
<li key={i} className="flex items-center gap-3 text-slate-700">
<span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
<CheckIcon className="w-4 h-4" />
</span>
{f}
</li>
))}
</ul>
<Link href="/fr/agents-ia" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all">
Découvrir les Agents IA →
</Link>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/agents-ia-hero.webp`} alt="Agent IA Sophie" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
</div>
</div>
</div>
</div>
</section>
</ScrollAnimate>

{/* TESTIMONIALS */}
<ScrollAnimate animation="fade-up" delay={2}>
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-black mb-3">Ce que nos clients disent</h2>
<div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{TESTIMONIALS_DATA.map((t, i) => (
<div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
<div className="flex gap-1 mb-4">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
</div>
<p className="text-slate-300 mb-4 leading-relaxed italic">"{t.q}"</p>
<div className="flex items-center gap-3">
<img src={basePath + t.img} alt={t.alt} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
<div>
<p className="font-bold text-white text-sm">{t.name}</p>
<p className="text-slate-400 text-xs">{t.role}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>
</ScrollAnimate>

{/* FINAL CTA */}
<section className="bg-white py-20">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Prêt à ne plus rater un appel?</h2>
<p className="text-slate-600 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/fr/contact" className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 shadow-lg">
Démarrer Maintenant
</Link>
<Link href="/fr/tarifs" className="border-2 border-slate-300 text-slate-700 font-bold px-8 py-4 rounded-2xl hover:border-sky-600 hover:text-sky-600 transition-all">
Voir les Tarifs
</Link>
</div>
</div>
</section>
</>
)
}
