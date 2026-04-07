'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const FEATURES = [
  {icon: PhoneIcon, title: 'Réception 24/7', desc: 'Pas de répondeur. Un vrai conseiller répond à chaque appel, même à 3h du matin.'},
  {icon: ClockIcon, title: 'Moins de 3 sonneries', desc: 'Vos clients n\'attendent pas. On décroche vite, point final.'},
  {icon: ShieldCheckIcon, title: 'Données sécurisées', desc: 'Tous les messages sont transmis en temps réel. Rien ne se perd.'},
  {icon: UsersIcon, title: 'Équipe dédiée', desc: 'Les mêmes conseillers répondent pour vous. Ils connaissent votre entreprise.'},
]

const TESTIMONIALS = [
  {q: "J'ai un resto sur la Main. Avant, je perdais facilement 10-15 clients par semaine parce que j'étais incapable de répondre. Maintenant? Zéro appel manqué.", name: 'Pierre Lacroix', role: 'Propriétaire, Bistro du Vieux-Montréal', img: '/images/testimonial-pierre-new.jpg'},
  {q: "C'est pas juste de la réception. Ils prennent les réservations, répondent aux questions, et me textent les urgences. C'est comme avoir une réceptionniste, mais à fraction du prix.", name: 'Sophie Mercier', role: 'Directrice, Clinique Médicale Plateau', img: '/images/testimonial-sophie-new.jpg'},
  {q: "Pendant le rush du temps des fêtes, ils ont géré plus de 200 appels par jour. Mon équipe était tranquille, les clients heureux. Vraiment.", name: 'Marc-André Dubé', role: 'Gérant, Magasin Électronique QC', img: '/images/testimonial-marc-new.jpg'},
  {q: "On a essayé 3 autres services avant. C'est le seul où les conseillers comprennent vraiment notre business. Nos clients sont contents, c'est tout ce qui compte.", name: 'Nathalie Tremblay', role: 'Directrice, Cabinet Juridique Tremblay & Associés', img: '/images/testimonial-nathalie-new.jpg'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`} className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <PhoneIcon className="w-5 h-5" /> Réception d'Appels
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Zéro Appel Manqué,<br/>
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Zéro Client Perdu</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Des conseillers professionnels répondent à vos appels 24/7. Vos clients parlent à un vrai humain, pas à un robot.</p>
              <CTAButtons slug="reception"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['24/7 sans arrêt', 'Moins de 3 sonneries', 'Messages en temps réel', 'Essai 2 semaines'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-sky-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/reception-hero.webp`} alt="Réception d'appels" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES - Modern cards with animations */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Ce qui est inclus</h2>
            <p className="text-sky-200 text-xl max-w-2xl mx-auto">Tout ce qu'il faut pour ne plus jamais rater un appel important.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-sky-200 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3: DARK STATS - Modern big numbers */}
<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-900 text-white py-20 border-t-4 border-sky-600">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-10">
<h3 className="text-2xl font-bold text-sky-300">Des chiffres qui inspirent confiance</h3>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">99.2%</p>
<p className="text-sky-200 mt-2 font-medium">Taux de réponse</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">2.8s</p>
<p className="text-sky-200 mt-2 font-medium">Temps de réponse</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">150+</p>
<p className="text-sky-200 mt-2 font-medium">Entreprises servies</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black text-white">24/7</p>
<p className="text-sky-200 mt-2 font-medium">Disponibilité</p>
</div>
</div>
</div>
</section>

{/* SECTION 4: HOW IT WORKS - Modern numbered cards */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Comment ça marche</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {n: '1', t: 'Briefing', d: "On apprend à connaître votre entreprise et vos besoins"},
              {n: '2', t: 'Scripts sur mesure', d: "On rédige les réponses adaptées à votre activité"},
              {n: '3', t: 'Démarrage 48h', d: "Vos appels sont pris en charge rapidement"},
              {n: '4', t: 'Suivi continu', d: "Rapports quotidiens et ajustements"},
            ].map((step, i) => (
              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 5: DARK BENEFITS - Two columns */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white border-t-4 border-sky-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Pourquoi nous faire confiance?</h2>
<p className="text-xl text-sky-200 mb-8 leading-relaxed">Nos conseillers sont formés pour représenter votre entreprise comme si c'était la leur. Pas de scripts robots — de vraies conversations.</p>
<ul className="space-y-4 mb-8">
{[
'Conseillers francophones du Québec et de France',
'Messages transmis par SMS, email, ou appel',
'Prix PME — 40-60% moins cher qu\'un employé',
'Annulez quand vous voulez — pas de contrat long',
].map((item, i) => (
<li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
<span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
{item}
</li>
))}
</ul>
<Link href="/fr/contact?service=reception" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
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

      {/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Ce que nos clients disent</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
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
                  <img src={basePath + t.img} alt={t.name} className="w-14 h-14 rounded-xl object-cover shadow-lg" />
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

      {/* SECTION 7: FINAL CTA - Gradient */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à ne plus rater un appel?</h2>
          <p className="text-sky-200 text-xl mb-12 max-w-2xl mx-auto">Essai gratuit de 2 semaines. Sans engagement. On commence quand vous voulez.</p>
          <CTAButtons slug="reception"/>
          <p className="text-sky-300 mt-8 text-lg">
            <Link href="/fr/tarifs" className="underline hover:text-white transition-colors">Voir les tarifs</Link>
            <span className="mx-3">·</span>
            <Link href="/fr/contact" className="underline hover:text-white transition-colors">Nous contacter</Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: FAQ - Modern expandable */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 stagger-children">
            {[
              {q: "Combien de temps pour démarrer?", a: "En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer."},
              {q: "Est-ce que je peux changer les scripts?", a: "Absolument. C'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez."},
              {q: "Comment je reçois les messages?", a: "Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement."},
            ].map((faq, i) => (
              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/fr/contact?service=reception" className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Démarrer Maintenant
            </Link>
          </div>
		</div>
		</section>
		<ServiceSchema name="Réception d'Appels 24/7" description="Service de réception d'appels professionnel avec conseillers francophones 24/7" slug="reception" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
		<FAQSchema faqs={[
			{ question: "Combien de temps pour démarrer?", answer: "En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer." },
			{ question: "Est-ce que je peux changer les scripts?", answer: "Absolument. C'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez." },
			{ question: "Comment je reçois les messages?", answer: "Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement." },
			{ question: "Les conseillers parlent-ils français?", answer: "Oui, tous nos conseillers sont francophones du Québec ou de France. Ils maîtrisent le français et l'anglais." }
		]} />
	</>
  )
}
