import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('blog', 'fr'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "Blog | Smart Hotline Agency" }
     3|const POSTS = [
     4|  { title: "5 raisons d&apos;externaliser votre service client en 2025", date: "15 mars 2026", cat: "Strategie", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", excerpt: "Decouvrez pourquoi de plus en plus de PME font le choix de l&apos;externalisation pour leur relation client." },
     5|  { title: "Agent IA vs Agent Humain: lequel choisir?", date: "8 mars 2026", cat: "IA", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80", excerpt: "Comparaison complete pour vous aider a faire le bon choix selon votre activite et budget." },
     6|  { title: "Comment qualifier vos leads au telephone: guide complet", date: "1 mars 2026", cat: "Prospection", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80", excerpt: "Les techniques et scripts utilises par nos meilleurs conseillers pour qualifier efficacement." },
     7|  { title: "Taux de satisfaction client: les KPIs a surveiller", date: "22 fevrier 2026", cat: "Mesure", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", excerpt: "CSAT, NPS, FCR — comprendre et ameliorer vos indicateurs de satisfaction." },
     8|  { title: "Secteur restauration: pourquoi un centre d&apos;appels change tout", date: "14 fevrier 2026", cat: "Secteurs", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", excerpt: "Temoignage de 3 restaurants qui ont double leurs reservations en 30 jours." },
     9|  { title: "RGPD et centre d&apos;appels: ce qu&apos;il faut savoir", date: "5 fevrier 2026", cat: "Conformite", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80", excerpt: "Guide pratique pour rester conforme tout en optimisant votre relation client." },
    10|]
    11|export default function Blog() {
    12|  return (
    13|    <>
    14|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    15|        <div className="max-w-4xl mx-auto px-4 text-center">
    16|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Blog Smart Hotline</h1>
    17|          <p className="text-lg text-blue-100">Conseils, strategies et insights pour optimiser votre relation client.</p>
    18|        </div>
    19|      </section>
    20|      <section className="py-20">
    21|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    22|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    23|            {POSTS.map(({title, date, cat, img, excerpt}) => (
    24|              <article key={title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
    25|                <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    26|                <div className="p-6">
    27|                  <div className="flex items-center gap-2 mb-3">
    28|                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cat}</span>
    29|                    <span className="text-gray-400 text-xs">{date}</span>
    30|                  </div>
    31|                  <h2 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{__html: title}}/>
    32|                  <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{__html: excerpt}}/>
    33|                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">Lire la suite →</span>
    34|                </div>
    35|              </article>
    36|            ))}
    37|          </div>
    38|        </div>
    39|      </section>
    40|      <section className="bg-blue-50 py-16">
    41|        <div className="max-w-4xl mx-auto px-4 text-center">
    42|          <h2 className="text-2xl font-bold mb-3">Recevez nos conseils chaque semaine</h2>
    43|          <p className="text-gray-600 mb-6">Inscrivez-vous a notre newsletter — 100% utile, 0% spam.</p>
    44|          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
    45|            <input type="email" placeholder="votre@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
    46|            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">S&apos;inscrire</button>
    47|          </div>
    48|        </div>
    49|      </section>
    50|    </>
    51|  )
    52|}
    53|