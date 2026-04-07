'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { BoltIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, StarIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const FEATURES = [
{icon: BoltIcon, title: 'Réponse instantanée', desc: 'Moins de 2 secondes, 24h/24, 7j/7, sans temps d\'attente.'},
{icon: CalendarIcon, title: 'Prise de rendez-vous', desc: 'Synchronisé avec Google Calendar, Calendly. Confirmation auto.'},
{icon: QuestionIcon, title: 'FAQ automatisée', desc: 'Répond aux questions fréquentes : horaires, tarifs, adresse.'},
{icon: TransferIcon, title: 'Transfert intelligent', desc: 'Détecte les situations complexes, transfert vers conseiller.'},
]

const TESTIMONIALS = [
{q: "Sophie a transformé notre service client. On ne rate plus aucun appel, même pendant nos périodes de pointe.", name: 'Marie-Claude Lévesque', role: 'Directrice opérationnelle, Clinique SantéPlus', av: 'MCL'},
{q: "L'installation a été rapide et l'équipe extrêmement professionnelle. Nos clients pensent que c'est une vraie personne!", name: 'Daniel Bouchard', role: 'Propriétaire, Bouchard Mécanique', av: 'DB'},
{q: "Le rapport qualité-prix est imbattable. On économise près de 60% comparé à une réceptionniste à temps plein.", name: 'Isabelle Morin', role: 'Comptable associée, Fiduciaire LMN', av: 'IM'},
{q: "Au début j'étais sceptique. Mais honnêtement? Les clients ne se rendent compte de rien. Ce sont de vraies conversations.", name: 'Pierre Houde', role: 'Gérant, Garage Houde & Fils', av: 'PH'},
]

function CTAButtons({ slug }: { slug: string }) {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href={`/fr/contact?service=${slug}`} className="bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
Démo Sans Engagement
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
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
<section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<BoltIcon className="w-5 h-5" /> Agents IA Vocaux
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Sophie, votre IA<br/>
<span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">en Français Natif 24/7</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">Elle répond en 2 secondes max. Avec l'accent que vous voulez. Et le meilleur? Vos clients ne savent pas que c'est de l'IA — ils pensent juste que votre réceptionniste est super efficace.</p>
<CTAButtons slug="ia"/>
<div className="flex flex-wrap gap-3 mt-6">
{['Réponse < 2 sec', 'Accent au choix', '24/7 même la nuit', 'Tarif à la minute'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-violet-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/agents-ia-hero.webp`} alt="Agent IA Sophie" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<BoltIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">2 secondes max</p>
<p className="text-slate-500 text-sm">pas de musique d'attente</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 2: FEATURES */}
<section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
<p className="text-violet-200 text-xl max-w-2xl mx-auto">Tout ce qu'il faut pour ne plus jamais rater un appel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-violet-200 leading-relaxed">{desc}</p>
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
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">98%</p>
<p className="text-slate-600 mt-2 font-medium">Taux de satisfaction</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">2s</p>
<p className="text-slate-600 mt-2 font-medium">Temps de réponse</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">500+</p>
<p className="text-slate-600 mt-2 font-medium">Entreprises servies</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">24/7</p>
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
<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{[
{n: '1', t: 'Configuration', d: "Personnalisation de la voix, du script et de la base de connaissance"},
{n: '2', t: 'Test & validation', d: "Simulation d'appels réels pour valider les réponses"},
{n: '3', t: 'Intégration', d: "Connexion à votre numéro existant en moins de 24h"},
{n: '4', t: 'Go live', d: "Sophie gère vos appels. Tableau de bord en temps réel"},
].map((step, i) => (
<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
<p className="text-slate-600 leading-relaxed">{step.d}</p>
</div>
))}
</div>
</div>
</section>

 {/* SECTION 5: DARK - BENEFITS */}
 <section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 relative overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
 </div>
 <div className="max-w-7xl mx-auto px-4 relative">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 <div className="w-full lg:w-1/2">
 <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi choisir Sophie?</h2>
 <p className="text-xl text-violet-200 mb-8 leading-relaxed">Sophie ne dort pas, ne prend pas de pauses, et n\'a jamais une mauvaise journée. Elle gère le répétitif pour que votre équipe puisse se concentrer sur ce qui compte vraiment.</p>
 <ul className="space-y-4 mb-8">
 {[
 'Accent du Québec, de France, ou Belgique au choix',
 'Transcription et analyse de chaque appel',
 '70% moins cher qu\'une réceptionniste',
 'Installation en 24-48h',
 ].map((item, i) => (
 <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
 <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
 <CheckIcon className="w-5 h-5"/>
 </span>
 {item}
 </li>
 ))}
 </ul>
 <Link href="/fr/contact?service=ia" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
 Voir une démo
 </Link>
 </div>
 <div className="w-full lg:w-1/2">
 <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
 <h3 className="font-bold text-2xl text-white mb-6">Des tarifs à la minute</h3>
 <p className="text-violet-200 text-lg mb-4">Vous ne payez que pour ce que vous utilisez. Pas de frais fixes, pas d\'engagement.</p>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Pas de frais de setup</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Annulez quand vous voulez</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Support inclus</li>
 </ul>
 <Link href="/fr/tarifs" className="text-violet-400 font-bold text-lg hover:underline flex items-center gap-2">
 Voir tous les tarifs
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

      {/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg min-w-[320px] max-w-[320px] flex-shrink-0">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-700 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
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
<section className="bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à ne plus rater un appel?</h2>
<p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">Essai gratuit de 2 semaines. Sans engagement. On commence quand vous voulez.</p>
<CTAButtons slug="ia"/>
<p className="text-violet-300 mt-8 text-lg">
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
<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Les appelants sauront-ils que c'est de l'IA?", a: "La plupart ne s'en rendent pas compte. Sophie parle naturellement, gère les interruptions, et ajuste son rythme. Nous avons eu des clients dont les clients complimentent spécifiquement 'votre charmante réceptionniste'."},
{q: "Quelles langues Sophie parle-t-elle?", a: "Français natif (Québec, France, Belgique), anglais et espagnol. Elle change automatiquement selon la langue utilisée par l'appelant."},
{q: "Combien de temps pour installer Sophie?", a: "Généralement 24-48 heures. Nous configurons la voix, le script et la base de connaissances, puis nous testons avec des scénarios réels avant de lancer."},
{q: "Que se passe-t-il si Sophie est coincée?", a: "Elle transfère vers un humain. C'est le but — gérer le routinier parfaitement, escalader le complexe vers vous."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/fr/contact?service=ia" className="inline-block bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Démarrer Maintenant
</Link>
</div>
		</div>
		</section>
		<ServiceSchema name="Agents IA Vocaux" description="Assistant vocal IA Sophie - réponse en moins de 2 secondes, 24/7" slug="agents-ia" offers={{ priceFrom: "0.15", priceCurrency: "CAD" }} />
		<FAQSchema faqs={[
			{ question: "Les appelants sauront-ils que c'est de l'IA?", answer: "La plupart ne s'en rendent pas compte. Sophie parle naturellement, gère les interruptions, et ajuste son rythme. Nous avons eu des clients dont les clients complimentent spécifiquement 'votre charmante réceptionniste'." },
			{ question: "Quelles langues Sophie parle-t-elle?", answer: "Français natif (Québec, France, Belgique), anglais et espagnol. Elle change automatiquement selon la langue utilisée par l'appelant." },
			{ question: "Combien de temps pour installer Sophie?", answer: "Généralement 24-48 heures. Nous configurons la voix, le script et la base de connaissances, puis nous testons avec des scénarios réels avant de lancer." },
			{ question: "Que se passe-t-il si Sophie est coincée?", answer: "Elle transfère vers un humain. C'est le but — gérer le routinier parfaitement, escalader le complexe vers vous." }
		]} />
	</>
)
}
