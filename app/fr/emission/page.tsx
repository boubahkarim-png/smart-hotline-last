'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

const FEATURES = [
  {'icon': '🎯', 'title': 'Leads qualifiés', 'desc': 'Ciblage précis et qualification de chaque lead avant transfert.'},
  {'icon': '📈', 'title': 'Scripts de conversion', 'desc': 'Scripts optimisés par nos experts pour maximiser les résultats.'},
  {'icon': '🗂️', 'title': 'CRM intégré', 'desc': 'Chaque appel enregistré avec notes, statut et suivi.'},
  {'icon': '📅', 'title': 'Prise de rendez-vous', 'desc': 'Agenda rempli avec des RDV qualifiés et confirmés.'},
  {'icon': '🔬', 'title': 'KPIs détaillés', 'desc': 'Appels, contacts, leads, conversions, coût par lead.'},
  {'icon': '🌐', 'title': 'Multi-canal', 'desc': 'Appels sortants combinés SMS et email pour plus de portée.'},
]
const STEPS = [
  {'n': '1', 't': 'Définition des cibles', 'd': 'Analyse de votre marché et création des profils prospects.'},
  {'n': '2', 't': 'Script & formation', 'd': 'Script sur mesure et formation à votre offre.'},
  {'n': '3', 't': 'Lancement de la campagne', 'd': 'Démarrage des appels selon votre planning.'},
  {'n': '4', 't': 'Rapports & optimisation', 'd': 'Ajustements quotidiens pour maximiser les résultats.'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-white text-emerald-800 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-50 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white text-emerald-800 transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white text-emerald-800 transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-emerald-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full mb-5">
                📢 Appels Sortants
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight">
                Multipliez vos Leads<br/>avec nos Conseillers
              </h1>
              <p className="text-lg text-white text-opacity-90 mb-8">Prospection, télémarketing, prise de RDV. Nos conseillers experts transforment vos cibles en clients avec des résultats mesurables.</p>
              <CTAButtons slug="emission"/>
              <div className="flex flex-wrap gap-3">
                {['Leads qualifiés', 'CRM inclus', 'Scripts optimisés', 'Reporting daily'].map(b => (
                  <span key={b} className="bg-white bg-opacity-15 text-sm px-3 py-1.5 rounded-full">&#10003; {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" alt="Conseiller appels sortants"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xl">📈</div>
                    <div><p className="font-black text-sm">+40% de leads</p><p className="text-slate-500 text-xs">en moyenne</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce qui est inclus</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-gradient-to-br from-slate-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Prêt à démarrer?</h2>
          <p className="text-white text-opacity-80 mb-8">Essai 2 semaines — sans engagement.</p>
          <CTAButtons slug="emission"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link>
          </p>
        </div>
      </section>
    </>
  )
}
