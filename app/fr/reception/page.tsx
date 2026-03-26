'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon } from '@/components/Icons'

const FEATURES = [
  {icon: PhoneIcon, title: 'Réception 24/7', desc: 'Pas de répondeur. Un vrai conseiller répond à chaque appel, même à 3h du matin.'},
  {icon: ClockIcon, title: 'Moins de 3 sonneries', desc: 'Vos clients n\'attendent pas. On décroche vite, point final.'},
  {icon: ShieldCheckIcon, title: 'Données sécurisées', desc: 'Tous les messages sont transmis en temps réel. Rien ne se perd.'},
  {icon: UsersIcon, title: 'Équipe dédiée', desc: 'Les mêmes conseillers répondent pour vous. Ils connaissent votre entreprise.'},
]

const TESTIMONIALS = [
  {q: "J\'ai un resto sur la Main. Avant, je perdais facilement 10-15 clients par semaine parce que j\'étais incapable de répondre. Maintenant? Zéro appel manqué.", name: 'Pierre Lacroix', role: 'Propriétaire, Bistro du Vieux-Montréal', av: 'PL'},
  {q: "C\'est pas juste de la réception. Ils prennent les réservations, répondent aux questions, et me textent les urgences. C\'est comme avoir une réceptionniste, mais à fraction du prix.", name: 'Sophie Mercier', role: 'Directrice, Clinique Médicale Plateau', av: 'SM'},
  {q: "Pendant le rush du temps des fêtes, ils ont géré plus de 200 appels par jour. Mon équipe était tranquille, les clients heureux. Vraiment.", name: 'Marc-André Dubé', role: 'Gérant, Magasin Électronique QC', av: 'MD'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`} className="bg-sky-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-sky-700 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-7 py-3.5 rounded-xl hover:bg-sky-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-7 py-3.5 rounded-xl hover:bg-sky-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: LIGHT - Hero */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Réception d\'Appels
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Zéro Appel Manqué,<br/>Zéro Client Perdu
              </h1>
              <p className="text-lg text-slate-600 mb-8">Des conseillers professionnels répondent à vos appels 24/7. Vos clients parlent à un vrai humain, pas à un robot.</p>
              <CTAButtons slug="reception"/>
              <div className="flex flex-wrap gap-3">
                {['24/7 sans arrêt', 'Moins de 3 sonneries', 'Messages en temps réel', 'Essai 2 semaines'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-sky-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/reception-hero.webp" alt="Réception d\'appels" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
<div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
<PhoneIcon className="w-5 h-5 text-sky-600" />
                    </div>
                    <div><p className="font-black text-sm">500+ appels/jour</p><p className="text-slate-500 text-xs">gérés pour nos clients</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - Features */}
<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 lg:py-24 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Ce qui est inclus</h2>
<p className="text-sky-200 text-lg max-w-2xl mx-auto">Tout ce qu\'il faut pour ne plus jamais rater un appel important.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{FEATURES.map(({icon: Icon, title, desc}) => (
<div key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
<div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-sky-300" />
</div>
<h3 className="font-bold text-lg text-white mb-2">{title}</h3>
<p className="text-sky-200 text-sm">{desc}</p>
</div>
))}
</div>
</div>
</section>

      {/* SECTION 3: LIGHT - Stats */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div><p className="text-4xl font-black text-sky-600">99.2%</p><p className="text-slate-500 text-sm mt-1">Taux de réponse</p></div>
<div><p className="text-4xl font-black text-sky-600">2.8s</p><p className="text-slate-500 text-sm mt-1">Temps de réponse</p></div>
<div><p className="text-4xl font-black text-sky-600">150+</p><p className="text-slate-500 text-sm mt-1">Entreprises servies</p></div>
<div><p className="text-4xl font-black text-sky-600">24/7</p><p className="text-slate-500 text-sm mt-1">Disponibilité</p></div>
        </div>
      </section>

      {/* SECTION 4: LIGHT - How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Comment ça marche</h2>
<div className="w-16 h-1 bg-sky-600 mx-auto rounded"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">1</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Briefing</h3>
<p className="text-slate-500 text-sm">On apprend à connaître votre entreprise et vos besoins</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">2</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Scripts sur mesure</h3>
<p className="text-slate-500 text-sm">On rédige les réponses adaptées à votre activité</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">3</div>
<h3 className="font-bold text-slate-900 text-lg mb-2">Démarrage 48h</h3>
<p className="text-slate-500 text-sm">Vos appels sont pris en charge rapidement</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">4</div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Suivi continu</h3>
              <p className="text-slate-500 text-sm">Rapports quotidiens et ajustements</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">Pourquoi nous faire confiance?</h2>
              <p className="text-slate-600 text-lg mb-6">Nos conseillers sont formés pour représenter votre entreprise comme si c'était la leur. Pas de scripts robots — de vraies conversations.</p>
              <ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Conseillers francophones du Québec et de France</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Messages transmis par SMS, email, ou appel</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Prix PME — 40-60% moins cher qu\'un employé</li>
<li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Annulez quand vous voulez — pas de contrat long</li>
</ul>
<Link href="/fr/contact?service=reception" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-sky-700 transition-colors">
Voir une démo →
</Link>
</div>
<div className="w-full lg:w-[40%]">
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h3 className="font-bold text-slate-900 text-lg mb-4">Ce que ça vous coûte</h3>
<p className="text-3xl font-black text-sky-600 mb-2">À partir de 15$/h</p>
<p className="text-slate-600 mb-4">Comparé à un employé à 25-30$/h + avantages sociaux + formation.</p>
<Link href="/fr/tarifs" className="text-sky-600 font-semibold hover:underline">Voir tous les tarifs →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LIGHT - Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce que nos clients disent</h2>
<div className="w-16 h-1 bg-sky-600 mx-auto rounded"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
{TESTIMONIALS.map((t, i) => (
<div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
<div className="flex gap-0.5 mb-4">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
</div>
<p className="text-slate-600 mb-5 leading-relaxed italic">"{t.q}"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{t.av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 7: DARK - Final CTA */}
<section className="bg-gradient-to-br from-slate-900 to-sky-800 py-20">
<div className="max-w-4xl mx-auto px-4 text-center text-white">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à ne plus rater un appel?</h2>
<p className="text-sky-200 text-lg mb-10 max-w-2xl mx-auto">Essai gratuit de 2 semaines. Sans engagement. On commence quand vous voulez.</p>
<CTAButtons slug="reception"/>
<p className="text-sky-300 text-sm mt-6">
<Link href="/fr/tarifs" className="underline hover:text-white">Voir les tarifs</Link> · <Link href="/fr/contact" className="underline hover:text-white">Nous contacter</Link>
</p>
</div>
</section>

{/* SECTION 8: LIGHT - FAQ */}
<section className="bg-white py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
<div className="text-left space-y-4 mt-8">
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
<summary className="font-bold text-slate-900">Combien de temps pour démarrer?</summary>
<p className="text-slate-600 mt-2">En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer.</p>
</details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
<summary className="font-bold text-slate-900">Est-ce que je peux changer les scripts?</summary>
<p className="text-slate-600 mt-2">Absolument. C\'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez.</p>
</details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
<summary className="font-bold text-slate-900">Comment je reçois les messages?</summary>
<p className="text-slate-600 mt-2">Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement.</p>
</details>
</div>
<Link href="/fr/contact?service=reception" className="inline-block mt-8 bg-sky-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-sky-700">
Démarrer Maintenant
</Link>
</div>
</section>

      {/* SECTION 8: LIGHT - FAQ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Questions fréquentes</h2>
          <div className="text-left space-y-4 mt-8">
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Combien de temps pour démarrer?</summary>
              <p className="text-slate-600 mt-2">En général 48 heures. On prend le temps de bien comprendre votre entreprise avant de commencer.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Est-ce que je peux changer les scripts?</summary>
              <p className="text-slate-600 mt-2">Absolument. C'est votre entreprise — vous décidez comment on répond. On ajuste quand vous voulez.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Comment je reçois les messages?</summary>
              <p className="text-slate-600 mt-2">Par SMS, email, ou appel — vous choisissez. Les messages urgents sont transmis immédiatement.</p>
            </details>
          </div>
          <Link href="/fr/contact?service=reception" className="inline-block mt-8 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700">
            Démarrer Maintenant
          </Link>
        </div>
      </section>
    </>
  )
}
