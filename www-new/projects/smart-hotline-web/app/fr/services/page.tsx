import GeoTestimonials from '@/components/GeoTestimonials'
import basePath from '@/lib/basePath'
import Link from 'next/link'
export const metadata = { title: "Nos Services | Smart Hotline Agency" }
const SERVICES = [
  { icon: "📞", title: "Appels Entrants", desc: "Réception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
  { icon: "📢", title: "Appels Sortants", desc: "Prospection, télémarketing, prise de RDV. Leads qualifiés garantis.", href: "/fr/emission", color: "green" },
  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie répond en 2 sec, 24/7. Jusqu'à 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 étoiles pour vos clients.", href: "/fr/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM intégré + listes de prospection B2B/B2C qualifiées.", href: "/fr/crm", color: "indigo" },
  { icon: "🏭", title: "Expertise Sectorielle", desc: "Solutions spécialisées pour santé, immobilier, juridique et plus.", href: "/fr/secteurs", color: "orange" },
]
const STATS = [
  { value: "500+", label: "PME accompagnées" },
  { value: "98%", label: "Satisfaction client" },
  { value: "24/7", label: "Disponibilité" },
  { value: "50K+", label: "Appels traités/mois" },
]
const STEPS = [
  { num: "01", title: "Consultation Gratuite", desc: "On analyse vos besoins et objectifs lors d'un appel de 30 minutes." },
  { num: "02", title: "Solution Sur Mesure", desc: "On conçoit une stratégie adaptée à votre budget et votre secteur." },
  { num: "03", title: "Déploiement Rapide", desc: "Installation en 24-72h. Formation incluse pour votre équipe." },
  { num: "04", title: "Suivi Continu", desc: "Rapports mensuels, optimisation constante, support dédié." },
]
export default function Services() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO */}
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
              <img src={`${basePath}/images/services-hero.webp`} alt="Nos services Smart Hotline" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - SERVICES GRID */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Nos Services</h2>
            <p className="text-white text-lg">Ce qu'on fait vraiment pour toi et ton business</p>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {SERVICES.map(({icon, title, desc, href, badge}, i) => (
              <Link key={href} href={href} className={`bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group modern-box animate-delay-${(i+1)*100}`}>
                <div className="text-4xl mb-4">{icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-white">{title}</h3>
                  {badge && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full font-medium">{badge}</span>}
                </div>
                <p className="text-white text-sm mb-4" dangerouslySetInnerHTML={{__html: desc}}/>
                <span className="text-white font-semibold group-hover:underline text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3: DARK STATS - Changed from light to dark */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-20 border-t-4 border-blue-600">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-2">Des résultats qui parlent</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
{STATS.map(({value, label}, i) => (
<div key={label} className={`modern-box animate-delay-${(i+1)*100}`}>
<div className="text-4xl lg:text-5xl font-extrabold text-white">{value}</div>
<div className="text-white mt-2">{label}</div>
</div>
))}
</div>
</div>
</section>

{/* SECTION 4: LIGHT - TESTIMONIALS AUTO-SLIDE */}
<section className="py-24 bg-white border-t-4 border-slate-200 overflow-hidden">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Ce que disent nos clients</h2>
</div>
<GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="sm" basePath={basePath} />
</section>

{/* SECTION 5: DARK HOW IT WORKS */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white border-t-4 border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Comment ça marche?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">De la consultation initiale au suivi continu, on vous accompagne à chaque étape.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {STEPS.map(({num, title, desc}, i) => (
<div key={num} className={`relative modern-box animate-delay-${(i+1)*100}`}>
<div className="text-6xl font-extrabold text-blue-400/30 mb-3">{num}</div>
<h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
<p className="text-white">{desc}</p>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK ADDITIONAL VALUE */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-100`}>
              <h3 className="text-2xl font-bold text-white mb-4">Pourquoi choisir Smart Hotline?</h3>
<p className="text-white mb-6">
        Nous comprenons les défis uniques des PME et offrons des solutions qui s'adaptent
        à votre croissance, pas l'inverse.
        </p>
              <ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Disponibilité 24/7, même les weekends</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Mise en place rapide en moins de 48h</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Aucun engagement à long terme</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Reporting transparent en temps réel</span>
        </li>
              </ul>
            </div>
            <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-200`}>
              <h3 className="text-2xl font-bold text-white mb-4">Résultats concrets</h3>
<p className="text-white mb-6">
        Nos clients voient une amélioration significative de leur efficacité
        et satisfaction client dès les premières semaines.
        </p>
        <ul className="space-y-4">
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Jusqu'à 70% de réduction des coûts</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Satisfaction client en hausse constante</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Meilleur taux de conversion des leads</span>
        </li>
        <li className="flex items-center gap-3 text-white">
        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
        <span>Temps libéré pour votre cœur de métier</span>
        </li>
        </ul>
            </div>
</div>
            </div>
        </section>

        {/* SECTION 7: LIGHT - FAQ */}
        <section className="py-20 bg-white border-t-4 border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
                    <p className="text-slate-600">Tout ce que vous devez savoir sur nos services</p>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"/>
                </div>
                <div className="space-y-4">
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Combien de temps pour démarrer?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            La plupart de nos clients sont opérationnels en 48 heures. On configure vos lignes, forme nos agents, et vous êtes prêt. Pas de semaines d&apos;attente comme avec l&apos;embauche.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Puis-je combiner plusieurs services?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Absolument! Plusieurs clients combinent réception entrante, prospection sortante et agents IA. On crée des forfaits sur mesure selon vos besoins et budget.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Qu&apos;est-ce qui est inclus dans le CRM?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            SuiteCRM configuré pour votre entreprise, enregistrement d&apos;appels, suivi des leads, tableau de bord, et application mobile. Aucun frais d&apos;installation supplémentaire.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Desservez-vous mon industrie?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            On se spécialise en santé, immobilier, juridique, restauration, automobile et services professionnels. Nos agents reçoivent une formation spécifique à votre secteur.
                        </p>
                    </details>
                </div>
            </div>
        </section>

        {/* SECTION 8: DARK FINAL CTA */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 border-t-8 border-blue-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prêt à mieux gérer vos appels?</h2>
          <p className="text-lg text-white mb-8">Consultation gratuite. Sans engagement. Résultats garantis.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Consultation Gratuite</Link>
            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">Voir nos tarifs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
