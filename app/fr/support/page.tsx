'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const FEATURES = [
{icon: HeadphonesIcon, title: 'Support multicanal', desc: 'Téléphone, email, chat, WhatsApp — on gère tout depuis une seule interface.'},
{icon: MailIcon, title: 'Tickets organisés', desc: 'Chaque demande devient un ticket. Rien ne se perd, tout est tracé.'},
{icon: ChatIcon, title: 'Chat en temps réel', desc: 'Réponses instantanées pour vos clients qui préfèrent écrire.'},
{icon: PhoneIcon, title: 'Ligne dédiée', desc: 'Un numéro pour votre support. On répond au nom de votre entreprise.'},
]

const TESTIMONIALS = [
{q: "On reçoit des questions sur nos produits toute la journée. Avant, c'était le chaos dans les emails. Maintenant, chaque demande est bien tracée.", name: 'Catherine R.', role: 'Responsable service client', av: 'CR'},
{q: "Ils ont réglé un problème de 3 semaines en 48h. Le fait qu'ils parlent bien — ça aide vraiment avec nos clients.", name: 'Jean-François P.', role: 'Directeur, Services Financiers', av: 'JP'},
{q: "Nos clients sont plus satisfaits. On le voit dans les commentaires. Un bon support, ça fait toute la différence.", name: 'Martine L.', role: 'Fondatrice', av: 'ML'},
{q: "On a réduit notre temps de réponse de 4 jours à 2 heures. Nos clients n'en reviennent pas. L'équipe est super professionnelle.", name: 'Sylvie B.', role: 'Directrice', av: 'SB'},
]

function CTAButtons({ slug }: { slug: string }) {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href={`/fr/contact?service=${slug}`} className="bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-teal-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
Démo Sans Engagement
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
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
<section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<HeadphonesIcon className="w-5 h-5" /> Support Client
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Support Client<br/>
<span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">Qui Ressemble à Vous</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Téléphone, email, chat, WhatsApp — on gère tout. Vos clients obtiennent des réponses rapides, en français, par des vrais humains.</p>
<CTAButtons slug="support"/>
<div className="flex flex-wrap gap-3 mt-6">
{['Multicanal', 'Tickets organisés', 'Réponses < 2h', 'Équipe dédiée'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-teal-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/support-tech.jpg`} alt="Support client" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
<ClockIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">Réponse &lt; 2h</p>
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
<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">Canaux de support</h2>
<p className="text-teal-200 text-xl max-w-2xl mx-auto">On répond partout où vos clients vous contactent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-teal-200 leading-relaxed">{desc}</p>
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
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">98%</p>
<p className="text-slate-600 mt-2 font-medium">Satisfaction client</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">&lt; 2h</p>
<p className="text-slate-600 mt-2 font-medium">Temps de réponse</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">50K+</p>
<p className="text-slate-600 mt-2 font-medium">Tickets/mois</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">24/7</p>
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
<div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{[
{n: '1', t: 'Analyse', d: "On étudie vos types de demandes"},
{n: '2', t: 'Base de connaissances', d: "On crée les réponses pour chaque cas"},
{n: '3', t: 'Démarrage', d: "On prend les appels et emails"},
{n: '4', t: 'Amélioration', d: "On ajuste selon vos retours"},
].map((step, i) => (
<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
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
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Pourquoi externaliser votre support?</h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Un client satisfait revient. Un client frustré parle mal de vous. On s'assure que chaque interaction se passe bien.</p>
<ul className="space-y-4 mb-8">
{[
'Équipe formée sur vos produits',
'Réponses en français ou anglais',
'Escalade intelligente vers votre équipe',
'Rapports hebdomadaires sur les tendances',
].map((item, i) => (
<li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
<span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
{item}
</li>
))}
</ul>
<Link href="/fr/contact?service=support" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Voir une démo
</Link>
</div>
<div className="w-full lg:w-1/2">
<div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-teal-50">
<h3 className="font-bold text-2xl text-slate-900 mb-6">Résultats typiques</h3>
<p className="text-slate-600 text-lg mb-4">Nos clients voient des améliorations mesurables en quelques semaines.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> +40% satisfaction client</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> -60% temps de réponse</li>
<li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> Équipe libérée pour les ventes</li>
</ul>
<Link href="/fr/tarifs" className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2">
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
<div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{TESTIMONIALS.map((t, i) => (
<div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
<div className="flex gap-1 mb-5">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-700 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
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
<section className="bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à améliorer votre support?</h2>
<p className="text-teal-200 text-xl mb-12 max-w-2xl mx-auto">Des clients plus satisfaits, moins de stress pour votre équipe. On commence ensemble.</p>
<CTAButtons slug="support"/>
<p className="text-teal-300 mt-8 text-lg">
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
<div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Quels canaux gérez-vous?", a: "Téléphone, email, chat sur votre site, WhatsApp, et même les réseaux sociaux. Tout est centralisé."},
{q: "Comment escaladez-vous les problèmes?", a: "On a un protocole clair. Problème simple = on répond. Problème complexe = on vous transfère avec le contexte."},
{q: "Combien de temps pour former l'équipe?", a: "Environ 1 semaine. On apprend vos produits, vos processus, et votre façon de parler aux clients."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/fr/contact?service=support" className="inline-block bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Démarrer Maintenant
</Link>
</div>
</div>
</section>
</>
)
}
