import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('outbound', 'fr'),
}

     1|'use client'
     2|import Link from 'next/link'
     3|import { useGeo } from '@/hooks/useGeo'
     4|import { CONTACT } from '@/lib/nav'
     5|import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon } from '@/components/Icons'
     6|
     7|const FEATURES = [
     8|  {'icon': TargetIcon, 'title': 'Leads qualifiés', 'desc': 'Ciblage précis et qualification de chaque lead avant transfert.'},
     9|  {'icon': TrendingIcon, 'title': 'Scripts de conversion', 'desc': 'Scripts optimisés par nos experts pour maximiser les résultats.'},
    10|  {'icon': FolderIcon, 'title': 'CRM intégré', 'desc': 'Chaque appel enregistré avec notes, statut et suivi.'},
    11|  {'icon': CalendarIcon, 'title': 'Prise de rendez-vous', 'desc': 'Agenda rempli avec des RDV qualifiés et confirmés.'},
    12|  {'icon': AnalyticsIcon, 'title': 'KPIs détaillés', 'desc': 'Appels, contacts, leads, conversions, coût par lead.'},
    13|  {'icon': GlobeIcon, 'title': 'Multi-canal', 'desc': 'Appels sortants combinés SMS et email pour plus de portée.'},
    14|]
    15|const STEPS = [
    16|  {'n': '1', 't': 'Définition des cibles', 'd': 'Analyse de votre marché et création des profils prospects.'},
    17|  {'n': '2', 't': 'Script & formation', 'd': 'Script sur mesure et formation à votre offre.'},
    18|  {'n': '3', 't': 'Lancement de la campagne', 'd': 'Démarrage des appels selon votre planning.'},
    19|  {'n': '4', 't': 'Rapports & optimisation', 'd': 'Ajustements quotidiens pour maximiser les résultats.'},
    20|]
    21|
    22|function CTAButtons({ slug }: { slug: string }) {
    23|  const { geo, loading } = useGeo()
    24|  const showPhone = !loading && geo.showPhone
    25|  return (
    26|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    27|      <Link href={`/fr/contact?service=${slug}`}
    28|        className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 text-center shadow-lg">
    29|        Démo Sans Engagement
    30|      </Link>
    31|      {showPhone ? (
    32|        <a href={`tel:${CONTACT.phone}`}
    33|          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
    34|          {CONTACT.phoneDisplay}
    35|        </a>
    36|      ) : (
    37|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
    38|          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
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
    53|              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full mb-5">
    54|                <TargetIcon className="w-4 h-4" /> Appels Sortants
    55|              </span>
    56|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
    57|                Multipliez vos Leads<br/>avec nos Conseillers
    58|              </h1>
    59|              <p className="text-lg text-slate-600 mb-8">Prospection, télémarketing, prise de rendez-vous. Nos conseillers connaissent l'art de décrocher des rendez-vous — sans faire peur à vos prospects.</p>
    60|              <CTAButtons slug="emission"/>
    61|              <div className="flex flex-wrap gap-3">
    62|                {['Leads qualifiés', 'CRM inclus', 'Scripts optimisés', 'Reporting daily'].map(b => (
    63|                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-emerald-600" /> {b}</span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[40%]">
    68|              <div className="relative">
    69|                <img src="/smart-hotline-late2/images/telemarketing.jpg" alt="Conseiller appels sortants"
    70|                className="rounded-2xl shadow-2xl w-full object-cover"
    71|                style={{maxHeight:'380px', objectFit:'cover'}}/>
    72|                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
    73|                  <div className="flex items-center gap-2.5">
    74|                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
    75|                      <TrendingIcon className="w-5 h-5 text-emerald-600" />
    76|                    </div>
    77|                    <div><p className="font-black text-sm">+40% de RDV</p><p className="text-slate-500 text-xs">en moyenne</p></div>
    78|                  </div>
    79|                </div>
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
    90|            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded"/>
    91|          </div>
    92|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    93|            {FEATURES.map(({icon: Icon, title, desc}: any) => (
    94|              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
    95|                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
    96|                  <Icon className="w-6 h-6 text-emerald-700" />
    97|                </div>
    98|                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
    99|                <p className="text-slate-500 text-sm">{desc}</p>
   100|              </div>
   101|            ))}
   102|          </div>
   103|        </div>
   104|      </section>
   105|
   106|      <section className="py-20 bg-white">
   107|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   108|          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Comment ça fonctionne</h2>
   109|          {STEPS.map(({n, t, d}: any) => (
   110|            <div key={n} className="flex gap-5 mb-8 items-start">
   111|              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
   112|              <div className="pt-1">
   113|                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
   114|                <p className="text-slate-500">{d}</p>
   115|              </div>
   116|            </div>
   117|          ))}
   118|        </div>
   119|      </section>
   120|
   121|      <section className="bg-gradient-to-br from-slate-900 to-emerald-800 py-16">
   122|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
   123|          <h2 className="text-3xl font-black mb-3">Prêt à démarrer?</h2>
   124|          <p className="text-white text-opacity-80 mb-8">Essai 2 semaines — sans engagement.</p>
   125|          <CTAButtons slug="emission"/>
   126|          <p className="text-white text-opacity-60 text-sm mt-4">
   127|            <Link href="/fr/tarifs" className="underline hover:text-white">Voir tous les tarifs</Link>
   128|          </p>
   129|        </div>
   130|      </section>
   131|    </>
   132|  )
   133|}
   134|