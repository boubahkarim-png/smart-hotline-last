'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@/components/Icons'
import { ServiceSchema } from '@/components/ServiceSchema'
import { FAQSchema } from '@/components/FAQSchema'
import GeoTestimonials from '@/components/GeoTestimonials'

const FEATURES = [
  {icon: HeadphonesIcon, title: 'Support multicanal', desc: 'Téléphone, email, chat, WhatsApp — on gère tout depuis une seule interface.'},
  {icon: MailIcon, title: 'Tickets organisés', desc: 'Chaque demande devient un ticket. Rien ne se perd, tout est tracé.'},
  {icon: ChatIcon, title: 'Chat en temps réel', desc: 'Réponses instantanées pour vos clients qui préfèrent écrire.'},
  {icon: PhoneIcon, title: 'Ligne dédiée', desc: 'Un numéro pour votre support. On répond au nom de votre entreprise.'},
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
{/* SECTION 1: HERO - Modern design with bigger image */}
<section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <div className="w-full lg:w-[40%] animate-slide-left">
        <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
          <HeadphonesIcon className="w-5 h-5" /> Support Client
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
          Support Client<br/>
          <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">Qui Ressemble à Vous</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Téléphone, email, chat, WhatsApp — on gère tout. Vos clients obtiennent des réponses rapides, en français, par des vrais humains.
        </p>
        <CTAButtons slug="support"/>
        <div className="flex flex-wrap gap-3 mt-6">
          {['Multicanal', 'Tickets organisés', 'Réponses < 2h', 'Équipe dédiée'].map((b, i) => (
            <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
              <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[60%] animate-slide-right">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
          <img src={`${basePath}/images/support-tech.webp`} alt="Support client" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
          <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <HeadphonesIcon className="w-7 h-7 text-white" />
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

      {/* SECTION 2: DARK - Features */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Canaux de support</h2>
<p className="text-white text-lg max-w-2xl mx-auto">On répond partout où vos clients vous contactent.</p>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all modern-box animate-delay-${(i+1)*100}`}>
<div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-white" />
</div>
<h3 className="font-bold text-lg text-white mb-2">{title}</h3>
<p className="text-white text-sm">{desc}</p>
</div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3: DARK - Stats */}
<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-900 text-white py-20 border-t-4 border-teal-600">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white">Des résultats mesurables</h3>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-delay-100"><p className="text-4xl font-black text-white">98%</p><p className="text-white text-lg mt-1">Satisfaction client</p></div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-delay-200"><p className="text-4xl font-black text-white">&lt; 2h</p><p className="text-white text-lg mt-1">Temps de réponse</p></div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-delay-300"><p className="text-4xl font-black text-white">50K+</p><p className="text-white text-lg mt-1">Tickets/mois</p></div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-delay-400"><p className="text-4xl font-black text-white">24/7</p><p className="text-white text-lg mt-1">Disponibilité</p></div>
</div>
</div>
</section>

{/* SECTION 4: LIGHT - How it works */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
 <div className="max-w-6xl mx-auto px-4">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-black text-slate-900 mb-4">Comment ça fonctionne</h2>
 <p className="text-slate-600 text-lg">4 étapes simples pour améliorer votre support client</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
 <div className="text-center modern-box animate-delay-100">
 <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">1</div>
 <h3 className="font-bold text-lg mb-2 text-slate-900">Analyse</h3>
 <p className="text-slate-600 text-sm">On étudie vos types de demandes</p>
 </div>
 <div className="text-center modern-box animate-delay-200">
 <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">2</div>
 <h3 className="font-bold text-lg mb-2 text-slate-900">Base de connaissances</h3>
 <p className="text-slate-600 text-sm">On crée les réponses pour chaque cas</p>
 </div>
 <div className="text-center modern-box animate-delay-300">
 <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">3</div>
 <h3 className="font-bold text-lg mb-2 text-slate-900">Démarrage</h3>
 <p className="text-slate-600 text-sm">On prend les appels et emails</p>
 </div>
 <div className="text-center modern-box animate-delay-400">
 <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">4</div>
 <h3 className="font-bold text-lg mb-2 text-slate-900">Amélioration</h3>
 <p className="text-slate-600 text-sm">On ajuste selon vos retours</p>
 </div>
 </div>
 </div>
 </section>

{/* SECTION 5: DARK - Value proposition */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white border-t-4 border-teal-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
<h2 className="text-3xl lg:text-4xl font-black text-white mb-5">Pourquoi externaliser votre support?</h2>
<p className="text-white text-lg mb-6">Un client satisfait revient. Un client frustré parle mal de vous. On s'assure que chaque interaction se passe bien.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Équipe formée sur vos produits</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Réponses en français du Québec ou de France</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Escalade intelligente vers votre équipe</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Rapports hebdomadaires sur les tendances</li>
</ul>
<Link href="/fr/contact?service=support" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors">Voir une démo →</Link>
</div>
<div className="w-full lg:w-[40%]">
<div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
<h3 className="font-bold text-white text-lg mb-4">Résultats typiques</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> +40% satisfaction client</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> -60% temps de réponse</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> Équipe libérée pour les ventes</li>
</ul>
</div>
</div>
          </div>
        </div>
      </section>

{/* SECTION 6: DARK - Testimonials AUTO-SLIDE */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black mb-4">Ce que nos clients disent</h2>
<p className="text-white text-lg">Des résultats concrets pour des entreprises comme la vôtre</p>
</div>
</div>
<GeoTestimonials lang="fr" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
</section>

{/* SECTION 7: DARK - CTA */}
<section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à améliorer votre support?</h2>
<p className="text-white text-lg mb-10 max-w-2xl mx-auto">Des clients plus satisfaits, moins de stress pour votre équipe. On commence ensemble.</p>
<CTAButtons slug="support"/>
<p className="text-white text-sm mt-6"><Link href="/fr/tarifs" className="underline hover:text-white">Voir les tarifs</Link> · <Link href="/fr/contact" className="underline hover:text-white">Nous contacter</Link></p>
</div>
</section>

      {/* SECTION 8: LIGHT - FAQ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Quels canaux gérez-vous?</summary><p className="text-slate-600 mt-2">Téléphone, email, chat sur votre site, WhatsApp, et même les réseaux sociaux. Tout est centralisé.</p></details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Comment escaladez-vous les problèmes?</summary><p className="text-slate-600 mt-2">On a un protocole clair. Problème simple = on répond. Problème complexe = on vous transfère avec le contexte.</p></details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">Combien de temps pour former l'équipe?</summary><p className="text-slate-600 mt-2">Environ 1 semaine. On apprend vos produits, vos processus, et votre façon de parler aux clients.</p></details>
          </div>
          <div className="text-center mt-8">
            <Link href="/fr/contact?service=support" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700">Démarrer Maintenant</Link>
          </div>
        </div>
      </section>

      <ServiceSchema name="Support Client Multicanal" description="Support client multicanal - téléphone, email, chat, WhatsApp avec équipe francophone dédiée" slug="support" offers={{ priceFrom: "2.00", priceCurrency: "CAD" }} />
      <FAQSchema faqs={[
        { question: "Quels canaux gérez-vous?", answer: "Téléphone, email, chat sur votre site, WhatsApp, et même les réseaux sociaux. Tout est centralisé." },
        { question: "Comment escaladez-vous les problèmes?", answer: "On a un protocole clair. Problème simple = on répond. Problème complexe = on vous transfère avec le contexte." },
        { question: "Combien de temps pour former l'équipe?", answer: "Environ 1 semaine. On apprend vos produits, vos processus, et votre façon de parler aux clients." },
        { question: "Proposez-vous un service 24/7?", answer: "Oui, notre équipe est disponible 24h/24, 7j/7 pour répondre à vos clients, même les jours fériés." }
      ]} />
    </>
  )
}
