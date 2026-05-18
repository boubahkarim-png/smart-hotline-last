import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('about', 'fr'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "A Propos | Smart Hotline Agency" }
     3|export default function APropos() {
     4|  return (
     5|    <>
     6|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
     7|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     8|          <div className="flex flex-col lg:flex-row items-center gap-12">
     9|            <div className="w-full lg:w-[55%]">
    10|<span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">Notre Histoire</span>
    11|<h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Parti d'un Plateau Mont-Royal<br/>avec 3 Clients en 2018</h1>
    12|<p className="text-lg text-blue-100 mb-6">Aujourd'hui, on accompagne plus de 500 PME au Québec et en France. Mais au début, c'était juste Karim, son laptop, et des nuits blanches à répondre aux appels de ses premiers clients.</p>
    13|              <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Nous Contacter</Link>
    14|            </div>
    15|            <div className="w-full lg:w-[40%]">
    16|              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Equipe Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
    17|            </div>
    18|          </div>
    19|        </div>
    20|      </section>
    21|      <section className="py-20 bg-gray-50">
    22|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    23|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
    24|            {[{n:"2018", l:"Fondé à Montréal"},{n:"512", l:"PME actives"},{n:"98%", l:"Renouvellent"},{n:"6", l:"Accents français"}].map(({n,l}) => (
    25|              <div key={l}><p className="text-4xl font-extrabold text-blue-600">{n}</p><p className="text-gray-600 mt-1">{l}</p></div>
    26|            ))}
    27|          </div>
    28|          <div className="flex flex-col lg:flex-row items-center gap-12">
    29|            <div className="w-full lg:w-[40%]">
    30|              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Centre appels Smart Hotline" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'360px', objectFit:'cover'}}/>
    31|            </div>
    32|            <div className="w-full lg:w-[55%]">
    33|<h2 className="text-3xl font-bold mb-6">Pourquoi on fait ça</h2>
    34|<p className="text-gray-600 mb-4">Karim a commencé par constater un truc simple : les PME québécoises perdaient des clients parce qu'elles ne pouvaient pas répondre au téléphone. Pas faute de vouloir — juste pas les moyens d'emballer quelqu'un à temps plein.</p>
    35|<p className="text-gray-600 mb-4">Le premier client? Un restaurateur de la rue Saint-Denis qui ratat des réservations parce que personne répondait pendant le service. Après 2 semaines, il nous a dit : "J'ai gagné 15 réservations de plus cette semaine. C'est du cash dans mes poches."</p>
    36|<p className="text-gray-600 mb-6">Depuis, on a grandi. Mais on garde la même approche : comprendre le métier de chaque client, former nos agents pour parler comme eux, et livrer des résultats mesurables. Pas de promesses en l'air.</p>
    37|              <div className="space-y-3">
    38|                {["Agents formés au Québec et en France", "Technologie IA made in Canada", "RGPD + Loi 25 conformes", "Un vrai humain au bout du fil"].map(v => (
    39|                  <div key={v} className="flex items-center gap-3"><span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span><span className="text-gray-700">{v}</span></div>
    40|                ))}
    41|              </div>
    42|            </div>
    43|          </div>
    44|        </div>
    45|      </section>
    46|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
    47|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
    48|<h2 className="text-3xl font-bold mb-3">Venez nous voir</h2>
    49|<p className="text-blue-100 mb-8">On est basés à Montréal, mais on travaille avec des PME de partout. Appelez, WhatsApp, ou prenez un café si vous passez par le Plateau.</p>
    50|          <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Commencer Maintenant</Link>
    51|        </div>
    52|      </section>
    53|    </>
    54|  )
    55|}
    56|