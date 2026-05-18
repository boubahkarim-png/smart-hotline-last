import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('inbound', 'fr'),
}

     1|'use client'
     2|import Link from 'next/link'
     3|import { useGeo } from '@/hooks/useGeo'
     4|import { CONTACT } from '@/lib/nav'
     5|import { PhoneIcon, GlobeIcon, FileIcon, ChartIcon, TransferIcon, BoltIcon, CheckIcon } from '@/components/Icons'
     6|
     7|const FEATURES = [
     8|  {'icon': PhoneIcon, 'title': 'Réception 24/7', 'desc': 'Vos appels répondus à toute heure, week-ends et jours fériés inclus.'},
     9|  {'icon': GlobeIcon, 'title': 'Bilingue FR/EN', 'desc': 'Conseillers francophones et anglophones pour tous vos clients.'},
    10|  {'icon': FileIcon, 'title': 'Scripts personnalisés', 'desc': 'Nous adoptons votre ton, vos scripts et procédures internes.'},
    11|  {'icon': ChartIcon, 'title': 'Rapports détaillés', 'desc': 'Volume, durée, satisfaction — tableaux de bord en temps réel.'},
    12|  {'icon': TransferIcon, 'title': 'Transfert intelligent', 'desc': 'Transfert vers votre équipe selon vos règles de priorité.'},
    13|  {'icon': BoltIcon, 'title': 'Mise en place rapide', 'desc': 'Opérationnel en 48h. Aucune infrastructure requise.'},
    14|]
    15|const STEPS = [
    16|  {'n': '1', 't': 'Analyse de vos besoins', 'd': 'Consultation gratuite 30 min pour comprendre votre activité.'},
    17|  {'n': '2', 't': 'Rédaction des scripts', 'd': 'Nos experts créent des scripts qui reflètent votre marque.'},
    18|  {'n': '3', 't': 'Formation de l’équipe', 'd': 'Conseillers dédiés formés à votre secteur et vos produits.'},
    19|  {'n': '4', 't': 'Go live en 48h', 'd': 'Vos appels pris en charge. Rapports quotidiens envoyés.'},
    20|]
    21|
    22|function CTAButtons({ slug }: { slug: string }) {
    23|  const { geo, loading } = useGeo()
    24|  const showPhone = !loading && geo.showPhone
    25|  return (
    26|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    27|      <Link href={`/fr/contact?service=${slug}`}
    28|        className="bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-800 text-center shadow-lg">
    29|        Démo Sans Engagement
    30|      </Link>
    31|      {showPhone ? (
    32|        <a href={`tel:${CONTACT.phone}`}
    33|          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
    34|          {CONTACT.phoneDisplay}
    35|        </a>
    36|      ) : (
    37|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
    38|          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
    39|          💬 WhatsApp 24/7
    40|        </a>
    41|      )}
    42|    </div>
    43|  )
    44|}
    45|
    46|export default function Page() {
    47|  return (
    48|    <>
    49|      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
    50|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    51|          <div className="flex flex-col lg:flex-row items-center gap-12">
    52|            <div className="w-full lg:w-[55%]">
    53|              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-5">
    54|                <PhoneIcon className="w-4 h-4" /> Appels Entrants
    55|              </span>
    56|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
    57|                Réception 24/7<br/>Zéro Appel Manqué
    58|              </h1>
    59|              <p className="text-lg text-slate-600 mb-8">Nos conseillers répondent à votre place. Vrai français du Québec ou de France. Vos clients entendent quelqu'un qui maîtrise le sujet — pas un script robotique.</p>
    60|              <CTAButtons slug="reception"/>
    61|              <div className="flex flex-wrap gap-3">
    62|                {['24/7, même la nuit', 'Accents FR/EN au choix', 'Setup en 48h', 'Scripts qui vous ressemblent'].map(b => (
    63|                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /> {b}</span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[40%]">
    68|              <div className="relative">
    69|                <img src="/smart-hotline-late2/images/reception-hero.jpg" alt="Conseillere reception appels"
    70|                className="rounded-2xl shadow-2xl w-full object-cover"
    71|                style={{maxHeight:'380px', objectFit:'cover'}}/>
    72|<div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
    73|<div className="flex items-center gap-2.5">
    74|<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
    75|<CheckIcon className="w-5 h-5 text-green-600" />
    76|</div>
    77|<div><p className="font-black text-sm">98% renouvellent</p><p className="text-slate-500 text-xs">après l'essai</p></div>
    78|</div>
    79|</div>
    80|              </div>
    81|            </div>
    82|          </div>
    83|        </div>
    84|      </section>
    85|
    86|      <section className="py-20 bg-slate-50">
    87|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    88|          <div className="text-center mb-12">
    89|            <h2 className="text-3xl font-black text-slate-900 mb-2">Ce qui est inclus</h2>
    90|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded"/>
    91|          </div>
    92|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    93|        {FEATURES.map(({icon: Icon, title, desc}: any) => (
    94|          <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
    95|            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
    96|              <Icon className="w-6 h-6 text-blue-700" />
    97|            </div>
    98|            <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
    99|            <p className="text-slate-500 text-sm">{desc}</p>
   100|          </div>
   101|        ))}
   102|      </div>
   103|        </div>
   104|      </section>
   105|
   106|      <section className="py-20 bg-white">
   107|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   108|          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Comment ça fonctionne</h2>
   109|          {STEPS.map(({n, t, d}: any) => (
   110|            <div key={n} className="flex gap-5 mb-8 items-start">
   111|              <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
   112|              <div className="pt-1">
   113|                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
   114|                <p className="text-slate-500">{d}</p>
   115|              </div>
   116|            </div>
   117|          ))}
   118|        </div>
   119|      </section>
   120|
   121|      <section className="bg-gradient-to-br from-slate-900 to-blue-800 py-16">
   122|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
   123|          <h2 className="text-3xl font-black mb-3">Prêt à démarrer?</h2>
   124|          <p className="text-white text-opacity-80 mb-8">Essai 2 semaines — sans engagement.</p>
   125|          <CTAButtons slug="reception"/>
   126|          <p className="text-white text-opacity-60 text-sm mt-4">
   127|            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link>
   128|          </p>
   129|        </div>
   130|      </section>
   131|    </>
   132|  )
   133|}
   134|