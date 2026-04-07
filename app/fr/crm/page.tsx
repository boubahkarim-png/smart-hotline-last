'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
import { ServiceSchema } from '@/components/ServiceSchema'
import { FAQSchema } from '@/components/FAQSchema'

const FEATURES = [
{icon: FolderIcon, title: 'Gestion des leads', desc: 'Capture, qualification et suivi de tous vos prospects.'},
{icon: MailIcon, title: 'Email marketing', desc: 'Campagnes automatisées avec Mautic. Nurturing et relances.'},
{icon: PhoneIcon, title: 'Click-to-call', desc: 'Appelez vos prospects en un clic depuis le CRM.'},
{icon: TrendingIcon, title: 'Pipeline de ventes', desc: 'Visualisez et gérez votre tunnel de vente en temps réel.'},
]

const TESTIMONIALS = [
{q: "Avant, nos leads étaient dans 3 fichiers Excel différents. Maintenant, tout est au même endroit. On perd plus rien.", name: 'Marie-Claire Beaumont', role: 'Directrice commerciale, Solutions Pro QC', img: '/images/testimonial-marie.jpg'},
{q: "Les listes B2B qu'ils nous ont fournies? Propres, à jour. Pas comme celles qu'on achetait avant à 500$.", name: 'François Gagnon', role: 'Fondateur, InnoTech Montreal', img: '/images/testimonial-francois.jpg'},
{q: "On a doublé notre taux de conversion en 4 mois. Le CRM + les appels sortants, ça fait une différence énorme.", name: 'Isabelle Tremblay', role: 'Responsable ventes, Groupe Nordik', img: '/images/testimonial-isabelle.jpg'},
{q: "La formation a pris 2 heures. Le lendemain, on était opérationnels. Vraiment, c'est pas compliqué.", name: 'Michel Richard', role: 'PDG, Richard & Fils Construction', img: '/images/testimonial-michel.jpg'},
]

function CTAButtons({ slug }: { slug: string }) {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href={`/fr/contact?service=${slug}`} className="bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
Démo Sans Engagement
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
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
<section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<CRMIcon className="w-5 h-5" /> CRM & Listes
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
CRM Intégré &<br/>
<span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Listes de Prospects</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Centralisez vos leads, suivez vos opportunités et maximisez vos conversions avec SuiteCRM et nos listes B2B/B2C qualifiées.</p>
<CTAButtons slug="crm"/>
<div className="flex flex-wrap gap-3 mt-6">
{['SuiteCRM inclus', 'Listes B2B/B2C', 'Mautic intégré', 'Rapports auto'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-orange-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/crm-interface.webp`} alt="CRM dashboard" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
<TrendingIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">+35% conversion</p>
<p className="text-slate-500 text-sm">moyenne clients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 2: FEATURES */}
<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
<p className="text-orange-200 text-xl max-w-2xl mx-auto">Tout ce dont vous avez besoin pour gérer vos contacts et vos ventes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-orange-200 leading-relaxed">{desc}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 3: DARK STATS */}
<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 border-t-4 border-orange-600">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-orange-300">Des chiffres qui comptent</h3>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">250K+</p>
<p className="text-orange-200 mt-2 font-medium">Contacts B2B</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">98%</p>
<p className="text-orange-200 mt-2 font-medium">Données validées</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">+35%</p>
<p className="text-orange-200 mt-2 font-medium">Taux conversion</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">48h</p>
<p className="text-orange-200 mt-2 font-medium">Setup complet</p>
</div>
</div>
</div>
</section>

{/* SECTION 4: HOW IT WORKS */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça marche</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{[
{n: '1', t: 'Audit', d: "Analyse de vos données existantes et nettoyage"},
{n: '2', t: 'Configuration', d: "Personnalisation des modules selon votre processus"},
{n: '3', t: 'Import', d: "Migration de vos contacts sans perte de données"},
{n: '4', t: 'Formation', d: "Formation de votre équipe et support continu"},
].map((step, i) => (
<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
<p className="text-slate-600 leading-relaxed">{step.d}</p>
</div>
))}
</div>
</div>
</section>

 {/* SECTION 5: DARK - BENEFITS */}
 <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 relative overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
 </div>
 <div className="max-w-7xl mx-auto px-4 relative">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 <div className="w-full lg:w-1/2">
 <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi choisir notre CRM?</h2>
 <p className="text-xl text-orange-200 mb-8 leading-relaxed">On ne vous vend pas juste un logiciel. On vous aide à structurer votre processus de vente de A à Z.</p>
 <ul className="space-y-4 mb-8">
 {[
 'Formation incluse — pas de courbes d\'apprentissage interminables',
 'Support francophone basé au Québec',
 'Mises à jour automatiques, sans frais cachés',
 'Intégré à nos services d\'appels sortants',
 ].map((item, i) => (
 <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
 <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
 <CheckIcon className="w-5 h-5"/>
 </span>
 {item}
 </li>
 ))}
 </ul>
 <Link href="/fr/contact?service=crm" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
 Voir une démo
 </Link>
 </div>
 <div className="w-full lg:w-1/2">
 <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
 <h3 className="font-bold text-2xl text-white mb-6">Des tarifs adaptés à votre croissance</h3>
 <p className="text-orange-200 text-lg mb-4">Tarifs compétitifs, sans engagement longue durée. Vous payez pour ce que vous utilisez.</p>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Aucun frais caché</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Annulez quand vous voulez</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Support inclus</li>
 </ul>
 <Link href="/fr/tarifs" className="text-orange-400 font-bold text-lg hover:underline flex items-center gap-2">
 Voir tous les tarifs
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

      {/* SECTION 6: DARK TESTIMONIALS AUTO-SLIDE */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white border-t-4 border-indigo-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Ce que nos clients disent</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all min-w-[320px] max-w-[320px] flex-shrink-0">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
                </div>
                <p className="text-white mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
      <div className="flex items-center gap-4">
        <img src={basePath + t.img} alt={t.name} className="w-14 h-14 rounded-xl object-cover shadow-lg" />
        <div>
        <p className="font-bold text-white">{t.name}</p>
        <p className="text-orange-200 text-sm">{t.role}</p>
        </div>
      </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 7: FINAL CTA */}
<section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à centraliser vos leads?</h2>
<p className="text-orange-200 text-xl mb-12 max-w-2xl mx-auto">CRM + listes qualifiées + support francophone. Tout ce qu'il vous faut pour vendre plus.</p>
<CTAButtons slug="crm"/>
<p className="text-orange-300 mt-8 text-lg">
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
<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Est-ce que je peux importer mes contacts existants?", a: "Oui, on s'occupe de la migration. Excel, CSV, Google Contacts, ancien CRM — on importe tout sans perte de données."},
{q: "Les listes B2B sont-elles à jour?", a: "On les met à jour mensuellement. Taux de rebond garanti sous 5%, sinon on les remplace."},
{q: "Combien de temps prend la formation?", a: "Environ 2 heures. On vous montre les bases, et on reste disponible pour les questions."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/fr/contact?service=crm" className="inline-block bg-gradient-to-r from-orange-600 to-amber-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Démarrer Maintenant
</Link>
</div>
</div>
		</section>
<ServiceSchema name="CRM & Listes de Prospects" description="CRM SuiteCRM intégré avec listes B2B/B2C qualifiées et email marketing Mautic" slug="crm" offers={{ priceFrom: "50", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "Est-ce que je peux importer mes contacts existants?", answer: "Oui, on s'occupe de la migration. Excel, CSV, Google Contacts, ancien CRM — on importe tout sans perte de données." },
  { question: "Les listes B2B sont-elles à jour?", answer: "On les met à jour mensuellement. Taux de rebond garanti sous 5%, sinon on les remplace." },
  { question: "Combien de temps prend la formation?", answer: "Environ 2 heures. On vous montre les bases, et on reste disponible pour les questions." },
  { question: "Est-ce que le CRM est inclus dans les forfaits téléphoniques?", answer: "Oui, le CRM de base est inclus gratuitement avec tous nos forfaits de réception et d'émission d'appels." }
]} />
</>
)
}
