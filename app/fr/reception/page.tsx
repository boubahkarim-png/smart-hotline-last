'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, GlobeIcon, FileIcon, ChartIcon, TransferIcon, BoltIcon, CheckIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': PhoneIcon, 'title': 'Réception 24/7', 'desc': 'Vos appels répondus à toute heure, week-ends et jours fériés inclus.'},
  {'icon': GlobeIcon, 'title': 'Bilingue FR/EN', 'desc': 'Conseillers francophones et anglophones pour tous vos clients.'},
  {'icon': FileIcon, 'title': 'Scripts personnalisés', 'desc': 'Nous adoptons votre ton, vos scripts et procédures internes.'},
  {'icon': ChartIcon, 'title': 'Rapports détaillés', 'desc': 'Volume, durée, satisfaction — tableaux de bord en temps réel.'},
  {'icon': TransferIcon, 'title': 'Transfert intelligent', 'desc': 'Transfert vers votre équipe selon vos règles de priorité.'},
  {'icon': BoltIcon, 'title': 'Mise en place rapide', 'desc': 'Opérationnel en 48h. Aucune infrastructure requise.'},
]
const STEPS = [
  {'n': '1', 't': 'Analyse de vos besoins', 'd': 'Consultation gratuite 30 min pour comprendre votre activité.'},
  {'n': '2', 't': 'Rédaction des scripts', 'd': 'Nos experts créent des scripts qui reflètent votre marque.'},
  {'n': '3', 't': 'Formation de l’équipe', 'd': 'Conseillers dédiés formés à votre secteur et vos produits.'},
  {'n': '4', 't': 'Go live en 48h', 'd': 'Vos appels pris en charge. Rapports quotidiens envoyés.'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/fr/contact?service=${slug}`}
        className="bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-800 text-center shadow-lg">
        Démo Sans Engagement
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Appels Entrants
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Réception 24/7<br/>Zéro Appel Manqué
              </h1>
              <p className="text-lg text-slate-600 mb-8">Nos conseillers répondent à votre place. Vrai français du Québec ou de France. Vos clients entendent quelqu'un qui maîtrise le sujet — pas un script robotique.</p>
              <CTAButtons slug="reception"/>
              <div className="flex flex-wrap gap-3">
                {['24/7, même la nuit', 'Accents FR/EN au choix', 'Setup en 48h', 'Scripts qui vous ressemblent'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/reception-hero.jpg" alt="Conseillere reception appels"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
<div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
<CheckIcon className="w-5 h-5 text-green-600" />
</div>
<div><p className="font-black text-sm">98% renouvellent</p><p className="text-slate-500 text-xs">après l'essai</p></div>
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
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded"/>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({icon: Icon, title, desc}: any) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-blue-700" />
            </div>
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
              <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Prêt à démarrer?</h2>
          <p className="text-white text-opacity-80 mb-8">Essai 2 semaines — sans engagement.</p>
          <CTAButtons slug="reception"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link>
          </p>
        </div>
      </section>
    </>
  )
}
