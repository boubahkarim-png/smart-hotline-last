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
{ quote: "J'ai un cabinet dentaire sur Saint-Denis. Avant, je perdais des patients parce que personne répondait pendant les soins. Maintenant? Zéro appel manqué. Mes patients pensent que j'ai une réceptionniste à temps plein.", author: "Marie D.", role: "Dentiste, Clinique du Parc — Plateau Mont-Royal", rating: 5 },
{ quote: "L'IA Sophie a réduit mes coûts de 60%. Vrai. Et le plus drôle? Mes clients préfèrent. 'Votre réceptionniste est super efficace', ils disent. C'est un robot, les gars!", author: "Pierre L.", role: "CEO, TechStart Inc. — Mile-End, Montréal", rating: 5 },
{ quote: "Je suis dans la construction. Mes gars sont sur les chantiers, ils peuvent pas répondre. Smart Hotline prend les appels, qualifie les leads. Mon taux de conversion a monté de 35%. C'est mesurable.", author: "Sophie M.", role: "Directrice commerciale, BatiPro Québec — Laval", rating: 5 },
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
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Tout ce qu'il vous faut<br/>Pour gérer vos clients
              </h1>
              <p className="text-lg text-slate-600 mb-8">On s'occupe de votre téléphone pendant que vous vous occupez de votre business. Simple comme bonjour.</p>
              <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Essai Gratuit
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/images/services-hero.jpg" alt="Nos services Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: DARK - SERVICES OVERVIEW */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Des solutions qui font vraiment la différence</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Du décroché de téléphone au suivi client, on gère tout ça pour que tu puisses te concentrer sur ce que tu fais le mieux.
          </p>
        </div>
      </section>
      
      {/* SECTION 3: LIGHT - SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Nos Services</h2>
            <p className="text-slate-500 text-lg">Ce qu'on fait vraiment pour toi et ton business</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(({icon, title, desc, href, badge}) => (
              <Link key={href} href={href} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all group">
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
      
      {/* SECTION 4: LIGHT STATS */}
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
      
      {/* SECTION 5: LIGHT TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(({quote, author, role, rating}) => (
<div key={author} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
<div className="flex mb-4" role="img" aria-label={`${rating} sur 5 étoiles`}>
{Array.from({length: rating}).map((_, i) => (
<span key={i} className="text-yellow-400 text-xl" aria-hidden="true">★</span>
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
      
      {/* SECTION 6: LIGHT HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Comment ça marche?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">De la consultation initiale au suivi continu, on vous accompagne à chaque étape.</p>
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
      
      {/* SECTION 7: LIGHT ADDITIONAL VALUE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi choisir Smart Hotline?</h3>
              <p className="text-gray-600 mb-6">
                Nous comprenons les défis uniques des PME et offrons des solutions qui s'adaptent
                à votre croissance, pas l'inverse.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Disponibilité 24/7, même les weekends et jours fériés</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Mise en place rapide en moins de 48 heures</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Aucun engagement à long terme</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Reporting transparent et accès aux données en temps réel</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Résultats concrets pour votre business</h3>
              <p className="text-gray-600 mb-6">
                Nos clients voient généralement une amélioration significative de leur efficacité
                et de leur satisfaction client dès les premières semaines.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Réduction de jusqu'à 70% des coûts liés à la gestion des appels</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Augmentation de la satisfaction client grâce à une disponibilité constante</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Qualification améliorée des leads pour un meilleur taux de conversion</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Libération de temps pour vous concentrer sur votre cœur de métier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 8: DARK FINAL CTA */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prêt à mieux gérer vos appels?</h2>
          <p className="text-lg text-blue-100 mb-8">Consultation gratuite. Sans engagement. Résultats garantis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Consultation Gratuite</Link>
            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">Voir nos tarifs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
