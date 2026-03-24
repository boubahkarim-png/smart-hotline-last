import Link from 'next/link'
export const metadata = { title: "Nos Services | Smart Hotline Agency" }
const SERVICES = [
  { icon: "📞", title: "Appels Entrants", desc: "Reception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
  { icon: "📢", title: "Appels Sortants", desc: "Prospection, telemarketing, prise de RDV. Leads qualifies garantis.", href: "/fr/emission", color: "green" },
  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie repond en 2 sec, 24/7. Jusqu&apos;a 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 etoiles pour vos clients.", href: "/fr/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM integre + listes de prospection B2B/B2C qualifiees.", href: "/fr/crm", color: "indigo" },
]
const STATS = [
  { value: "500+", label: "PME accompagnees" },
  { value: "98%", label: "Satisfaction client" },
  { value: "24/7", label: "Disponibilite" },
  { value: "50K+", label: "Appels traites/mois" },
]
const TESTIMONIALS = [
  { quote: "Depuis qu'on travaille avec Smart Hotline, on ne manque plus jamais un appel. Leur equipe est professionnelle et reactive.", author: "Marie D.", role: "Directrice, Clinique du Parc", rating: 5 },
  { quote: "Les agents IA ont reduit nos couts de 60% tout en ameliorant la qualite du service. Incroyable technologie!", author: "Pierre L.", role: "CEO, TechStart Inc.", rating: 5 },
  { quote: "Service impeccable. Nos clients sont satisfaits et notre taux de conversion a augmente de 35%.", author: "Sophie M.", role: "Responsable commercial, BatiPro", rating: 5 },
]
const STEPS = [
  { num: "01", title: "Consultation Gratuite", desc: "On analyse vos besoins et objectifs lors d'un appel de 30 minutes." },
  { num: "02", title: "Solution Sur Mesure", desc: "On concoit une strategie adaptee a votre budget et votre secteur." },
  { num: "03", title: "Deploiement Rapide", desc: "Installation en 24-72h. Formation incluse pour votre equipe." },
  { num: "04", title: "Suivi Continu", desc: "Rapports mensuels, optimisation constante, support dedie." },
]
export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Nos Solutions</h1>
          <p className="text-lg text-blue-100 mb-8">Tout ce dont votre PME a besoin pour sa relation client — sous un seul toit.</p>
          <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Demo Gratuite</Link>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({icon, title, desc, href, badge}) => (
              <Link key={href} href={href} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-5">{icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-bold text-xl">{title}</h2>
                  {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
                </div>
                <p className="text-gray-500 mb-5" dangerouslySetInnerHTML={{__html: desc}}/>
                <span className="text-blue-600 font-semibold group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <div className="text-4xl lg:text-5xl font-extrabold text-blue-600">{value}</div>
                <div className="text-gray-600 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({quote, author, role, rating}) => (
              <div key={author} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {Array.from({length: rating}).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{quote}"</p>
                <div className="font-semibold text-gray-900">{author}</div>
                <div className="text-sm text-gray-500">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Comment ca marche?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">De la consultation initiale au suivi continu, on vous accompagne a chaque etape.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({num, title, desc}) => (
              <div key={num} className="relative">
                <div className="text-6xl font-extrabold text-blue-100 mb-3">{num}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pret a transformer votre relation client?</h2>
          <p className="text-lg text-blue-100 mb-8">Consultation gratuite. Sans engagement. Resultats garantis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Consultation Gratuite</Link>
            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">Voir nos tarifs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
