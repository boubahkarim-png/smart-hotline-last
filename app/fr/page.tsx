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
  { q: "J'ai un resto sur la Main. Avant, je perdais facilement 10-15 clients par semaine. Maintenant? Zéro appel manqué.", name: "Pierre Lacroix", role: "Propriétaire, Bistro du Vieux-Montréal", img: "/images/testimonial-pierre-new.jpg", alt: "Portrait de Pierre Lacroix, propriétaire du Bistro du Vieux-Montréal" },
  { q: "C'est pas juste de la réception. Ils prennent les réservations, répondent aux questions. C'est comme avoir une réceptionniste, mais à fraction du prix.", name: "Sophie Mercier", role: "Directrice, Clinique Médicale Plateau", img: "/images/testimonial-sophie-new.jpg", alt: "Portrait de Sophie Mercier, directrice de la Clinique Médicale Plateau" },
  { q: "Pendant le rush du temps des fêtes, ils ont géré plus de 200 appels par jour. Mon équipe était tranquille, les clients heureux.", name: "Marc-André Dubé", role: "Gérant, Magasin Électronique QC", img: "/images/testimonial-marc-new.jpg", alt: "Portrait de Marc-André Dubé, gérant du Magasin Électronique QC" },
  { q: "On a essayé 3 autres services avant. C'est le seul où les conseillers comprennent vraiment notre business.", name: "Nathalie Tremblay", role: "Directrice, Cabinet Juridique Tremblay", img: "/images/testimonial-nathalie-new.jpg", alt: "Portrait de Nathalie Tremblay, directrice du Cabinet Juridique Tremblay" },
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

      {/* SERVICES - DARK */}
      <ScrollAnimate animation="fade-up">
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 text-white border-t-4 border-sky-600 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">Nos Solutions</h2>
              <p className="text-sky-200 text-lg">Tout ce dont votre PME a besoin pour sa relation client</p>
              <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full mt-4"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }, i) => (
                <Link key={href} href={href} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:shadow-xl hover:-translate-y-1 transition-all group" style={{animationDelay: `${i * 100}ms`}}>
                  <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-bold text-white">{title}</h3>
                    {badge && <span className="text-xs bg-violet-500/80 text-white px-1.5 py-0.5 rounded-full font-semibold">{badge}</span>}
                  </div>
                  <p className="text-sky-200 text-sm mb-3">{desc}</p>
                  <span className="text-sky-400 text-sm font-semibold group-hover:underline">En savoir plus →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

{/* STATS - DARK */}
<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 py-16 text-white border-t-4 border-sky-600">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
<p className="text-5xl font-black text-white">500+</p>
<p className="text-sky-200 text-lg mt-2 font-medium">Appels par jour</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
<p className="text-5xl font-black text-white">98%</p>
<p className="text-sky-200 text-lg mt-2 font-medium">Satisfaction client</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
<p className="text-5xl font-black text-white">48h</p>
<p className="text-sky-200 text-lg mt-2 font-medium">Délai de mise en place</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
<p className="text-5xl font-black text-white">24/7</p>
<p className="text-sky-200 text-lg mt-2 font-medium">Disponibilité</p>
</div>
</div>
</div>
</section>

      {/* AI SECTION - LIGHT */}
      <ScrollAnimate animation="fade-left" delay={1}>
        <section className="py-20 bg-slate-50 border-t-4 border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-4 py-2 rounded-full mb-6 animate-slow-float">
                  <span className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse"/>
                  Nouveau Service
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
                  Sophie, l&apos;Agente IA<br/>
                  <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Qui Parle comme Nous</span>
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Elle répond en moins de 2 secondes. Avec l&apos;accent de votre région — au choix. Et ça coûte une fraction d&apos;un salaire.
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
                  <img src={`${basePath}/images/agents-ia-hero.webp`} alt="Agent IA Sophie" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* BENEFITS - DARK */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white border-t-4 border-sky-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi Smart Hotline?</h2>
              <p className="text-xl text-sky-200 mb-8 leading-relaxed">Des conseillers qui représentent votre entreprise comme si c'était la leur. Pas de scripts robots — de vraies conversations.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Conseillers francophones du Québec et de France',
                  'Messages transmis par SMS, email, ou appel',
                  'Prix PME — 40-60% moins cher qu\'un employé',
                  'Annulez quand vous voulez — pas de contrat long',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-lg">
                    <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckIcon className="w-5 h-5"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/fr/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Voir une démo
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
                <h3 className="font-bold text-2xl text-white mb-6">Des tarifs adaptés à votre croissance</h3>
                <p className="text-sky-200 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Aucun frais caché</li>
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Annulez quand vous voulez</li>
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> CRM et autodialer inclus</li>
                </ul>
                <Link href="/fr/tarifs" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
                  Voir tous les tarifs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - DARK WITH AUTO-SLIDE */}
      <ScrollAnimate animation="fade-up" delay={2}>
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 border-t-4 border-indigo-700 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">Ce que nos clients disent</h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"/>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="testimonial-track testimonial-marquee">
              {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all min-w-[320px] max-w-[320px] flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                  </div>
                  <p className="text-white mb-4 leading-relaxed italic">"{t.q}"</p>
                  <div className="flex items-center gap-3">
                    <img src={basePath + t.img} alt={t.alt} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-slate-200 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* FAQ SECTION - LIGHT */}
      <section className="py-20 bg-white border-t-4 border-slate-200">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
<p className="text-slate-600">Tout ce que vous devez savoir avant de commencer</p>
<div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mt-4"/>
</div>
<div className="space-y-4">
<details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Combien de temps pour démarrer?
<span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
En moyenne 48 heures. On configure votre ligne, forme nos agents, et vous êtes opérationnel. Pas de mois d'attente comme avec l'embauche d'une réceptionniste.
</p>
</details>
<details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Est-ce que je peux annuler facilement?
<span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
Oui, sans engagement longue durée. Préavis de 30 jours et c'est tout. Pas de pénalités, pas de complications. On garde les choses simples.
</p>
</details>
<details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Comment ça fonctionne avec mon CRM?
<span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
On s'intègre avec SuiteCRM, HubSpot, Salesforce, et la plupart des CRM. Nos agents entrent les données directement dans votre système existant.
</p>
</details>
<details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Les agents connaissent vraiment mon business?
<span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
Absolument. Formation complète sur vos produits, services, et façon de parler. On ne lit pas un script générique — on parle comme vous.
</p>
</details>
</div>
</div>
</section>

      {/* FINAL CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-20 border-t-4 border-sky-700">
<div className="max-w-4xl mx-auto px-4 text-center text-white">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à ne plus rater un appel?</h2>
<p className="text-sky-200 text-lg mb-10">En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/fr/contact" className="bg-sky-500 text-white font-bold px-10 py-5 rounded-2xl hover:bg-sky-600 shadow-2xl transition-all">
Démarrer Maintenant
</Link>
<Link href="/fr/tarifs" className="border-2 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-sky-900 transition-all">
Voir les Tarifs
</Link>
</div>
</div>
</section>
</>
)
}
