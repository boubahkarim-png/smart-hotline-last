     1|import GeoTestimonials from '@/components/GeoTestimonials'

export const metadata = {
  title: "Smart Hotline | Nos Solutions | Centre d'Appels & IA Vocale",
  description: "Découvrez toutes nos solutions: réception 24/7, appels sortants, agents IA vocaux, support client et CRM. Externalisation relation client PME.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|export const metadata = { title: "Nos Services | Smart Hotline Agency" }
     5|const SERVICES = [
     6|  { icon: "📞", title: "Appels Entrants", desc: "Réception professionnelle 24/7. Ne manquez plus jamais un appel.", href: "/fr/reception", color: "blue" },
     7|  { icon: "📢", title: "Appels Sortants", desc: "Prospection, télémarketing, prise de RDV. Leads qualifiés garantis.", href: "/fr/emission", color: "green" },
     8|  { icon: "🤖", title: "Agents IA Vocaux", desc: "Sophie répond en 2 sec, 24/7. Jusqu'à 70% moins cher.", href: "/fr/agents-ia", color: "purple", badge: "Nouveau" },
     9|  { icon: "🎧", title: "Support Client", desc: "Tickets, email, chat, WhatsApp. Support 5 étoiles pour vos clients.", href: "/fr/support", color: "teal" },
    10|  { icon: "🗄️", title: "CRM & Listes", desc: "CRM SuiteCRM intégré + listes de prospection B2B/B2C qualifiées.", href: "/fr/crm", color: "indigo" },
    11|  { icon: "🏭", title: "Expertise Sectorielle", desc: "Solutions spécialisées pour santé, immobilier, juridique et plus.", href: "/fr/secteurs", color: "orange" },
    12|]
    13|const STATS = [
    14|  { value: "500+", label: "PME accompagnées" },
    15|  { value: "98%", label: "Satisfaction client" },
    16|  { value: "24/7", label: "Disponibilité" },
    17|  { value: "50K+", label: "Appels traités/mois" },
    18|]
    19|const STEPS = [
    20|  { num: "01", title: "Consultation Gratuite", desc: "On analyse vos besoins et objectifs lors d'un appel de 30 minutes." },
    21|  { num: "02", title: "Solution Sur Mesure", desc: "On conçoit une stratégie adaptée à votre budget et votre secteur." },
    22|  { num: "03", title: "Déploiement Rapide", desc: "Installation en 24-72h. Formation incluse pour votre équipe." },
    23|  { num: "04", title: "Suivi Continu", desc: "Rapports mensuels, optimisation constante, support dédié." },
    24|]
    25|export default function Services() {
    26|  return (
    27|    <>
    28|      {/* SECTION 1: LIGHT HERO */}
    29|      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
    30|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    31|          <div className="flex flex-col lg:flex-row items-center gap-12">
    32|            <div className="w-full lg:w-[55%]">
    33|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
    34|                Tout ce qu'il vous faut<br/>Pour gérer vos clients
    35|              </h1>
    36|              <p className="text-lg text-slate-600 mb-8">On s'occupe de votre téléphone pendant que vous vous occupez de votre business. Simple comme bonjour.</p>
    37|              <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
    38|                Essai Gratuit
    39|              </Link>
    40|            </div>
    41|            <div className="w-full lg:w-[40%]">
    42|              <img src={`${basePath}/images/services-hero.webp`} alt="Nos services Smart Hotline" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
    43|            </div>
    44|          </div>
    45|        </div>
    46|      </section>
    47|
    48|      {/* SECTION 2: DARK - SERVICES GRID */}
    49|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
    50|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    51|          <div className="text-center mb-12">
    52|            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Nos Services</h2>
    53|            <p className="text-white text-lg">Ce qu'on fait vraiment pour toi et ton business</p>
    54|            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mt-4"/>
    55|          </div>
    56|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
    57|            {SERVICES.map(({icon, title, desc, href, badge}, i) => (
    58|              <Link key={href} href={href} className={`bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group modern-box animate-delay-${(i+1)*100}`}>
    59|                <div className="text-4xl mb-4">{icon}</div>
    60|                <div className="flex items-center gap-2 mb-2">
    61|                  <h3 className="font-bold text-lg text-white">{title}</h3>
    62|                  {badge && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full font-medium">{badge}</span>}
    63|                </div>
    64|                <p className="text-white text-sm mb-4" dangerouslySetInnerHTML={{__html: desc}}/>
    65|                <span className="text-white font-semibold group-hover:underline text-sm">En savoir plus →</span>
    66|              </Link>
    67|            ))}
    68|          </div>
    69|        </div>
    70|      </section>
    71|
    72|{/* SECTION 3: DARK STATS - Changed from light to dark */}
    73|<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-20 border-t-4 border-blue-600">
    74|<div className="max-w-6xl mx-auto px-4">
    75|<div className="text-center mb-8">
    76|<h3 className="text-2xl font-bold text-white mb-2">Des résultats qui parlent</h3>
    77|</div>
    78|<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
    79|{STATS.map(({value, label}, i) => (
    80|<div key={label} className={`modern-box animate-delay-${(i+1)*100}`}>
    81|<div className="text-4xl lg:text-5xl font-extrabold text-white">{value}</div>
    82|<div className="text-white mt-2">{label}</div>
    83|</div>
    84|))}
    85|</div>
    86|</div>
    87|</section>
    88|
    89|{/* SECTION 4: LIGHT - TESTIMONIALS AUTO-SLIDE */}
    90|<section className="py-24 bg-white border-t-4 border-slate-200 overflow-hidden">
    91|<div className="max-w-6xl mx-auto px-4">
    92|<h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-slate-900">Ce que disent nos clients</h2>
    93|</div>
    94|<GeoTestimonials lang="fr" theme="light" layout="marquee" cardSize="sm" basePath={basePath} />
    95|</section>
    96|
    97|{/* SECTION 5: DARK HOW IT WORKS */}
    98|<section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white border-t-4 border-slate-700">
    99|        <div className="max-w-6xl mx-auto px-4">
   100|          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-slate-900">Comment ça marche?</h2>
   101|          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">De la consultation initiale au suivi continu, on vous accompagne à chaque étape.</p>
   102|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   103|            {STEPS.map(({num, title, desc}, i) => (
   104|<div key={num} className={`relative modern-box animate-delay-${(i+1)*100}`}>
   105|<div className="text-6xl font-extrabold text-blue-400/30 mb-3">{num}</div>
   106|<h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
   107|<p className="text-white">{desc}</p>
   108|</div>
   109|            ))}
   110|          </div>
   111|        </div>
   112|      </section>
   113|
   114|      {/* SECTION 6: DARK ADDITIONAL VALUE */}
   115|      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
   116|        <div className="max-w-6xl mx-auto px-4">
   117|          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
   118|            <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-100`}>
   119|              <h3 className="text-2xl font-bold text-white mb-4">Pourquoi choisir Smart Hotline?</h3>
   120|<p className="text-white mb-6">
   121|        Nous comprenons les défis uniques des PME et offrons des solutions qui s'adaptent
   122|        à votre croissance, pas l'inverse.
   123|        </p>
   124|              <ul className="space-y-4">
   125|<li className="flex items-center gap-3 text-white">
   126|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   127|        <span>Disponibilité 24/7, même les weekends</span>
   128|        </li>
   129|        <li className="flex items-center gap-3 text-white">
   130|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   131|        <span>Mise en place rapide en moins de 48h</span>
   132|        </li>
   133|        <li className="flex items-center gap-3 text-white">
   134|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   135|        <span>Aucun engagement à long terme</span>
   136|        </li>
   137|        <li className="flex items-center gap-3 text-white">
   138|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   139|        <span>Reporting transparent en temps réel</span>
   140|        </li>
   141|              </ul>
   142|            </div>
   143|            <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-200`}>
   144|              <h3 className="text-2xl font-bold text-white mb-4">Résultats concrets</h3>
   145|<p className="text-white mb-6">
   146|        Nos clients voient une amélioration significative de leur efficacité
   147|        et satisfaction client dès les premières semaines.
   148|        </p>
   149|        <ul className="space-y-4">
   150|        <li className="flex items-center gap-3 text-white">
   151|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   152|        <span>Jusqu'à 70% de réduction des coûts</span>
   153|        </li>
   154|        <li className="flex items-center gap-3 text-white">
   155|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   156|        <span>Satisfaction client en hausse constante</span>
   157|        </li>
   158|        <li className="flex items-center gap-3 text-white">
   159|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   160|        <span>Meilleur taux de conversion des leads</span>
   161|        </li>
   162|        <li className="flex items-center gap-3 text-white">
   163|        <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm">✓</span>
   164|        <span>Temps libéré pour votre cœur de métier</span>
   165|        </li>
   166|        </ul>
   167|            </div>
   168|</div>
   169|            </div>
   170|        </section>
   171|
   172|        {/* SECTION 7: LIGHT - FAQ */}
   173|        <section className="py-20 bg-white border-t-4 border-slate-200">
   174|            <div className="max-w-4xl mx-auto px-4">
   175|                <div className="text-center mb-12">
   176|                    <h2 className="text-3xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
   177|                    <p className="text-slate-600">Tout ce que vous devez savoir sur nos services</p>
   178|                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"/>
   179|                </div>
   180|                <div className="space-y-4">
   181|                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
   182|                        <summary className="font-bold text-slate-900 flex justify-between items-center">
   183|                            Combien de temps pour démarrer?
   184|                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
   185|                        </summary>
   186|                        <p className="text-slate-600 mt-4 leading-relaxed">
   187|                            La plupart de nos clients sont opérationnels en 48 heures. On configure vos lignes, forme nos agents, et vous êtes prêt. Pas de semaines d&apos;attente comme avec l&apos;embauche.
   188|                        </p>
   189|                    </details>
   190|                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
   191|                        <summary className="font-bold text-slate-900 flex justify-between items-center">
   192|                            Puis-je combiner plusieurs services?
   193|                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
   194|                        </summary>
   195|                        <p className="text-slate-600 mt-4 leading-relaxed">
   196|                            Absolument! Plusieurs clients combinent réception entrante, prospection sortante et agents IA. On crée des forfaits sur mesure selon vos besoins et budget.
   197|                        </p>
   198|                    </details>
   199|                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
   200|                        <summary className="font-bold text-slate-900 flex justify-between items-center">
   201|                            Qu&apos;est-ce qui est inclus dans le CRM?
   202|                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
   203|                        </summary>
   204|                        <p className="text-slate-600 mt-4 leading-relaxed">
   205|                            SuiteCRM configuré pour votre entreprise, enregistrement d&apos;appels, suivi des leads, tableau de bord, et application mobile. Aucun frais d&apos;installation supplémentaire.
   206|                        </p>
   207|                    </details>
   208|                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
   209|                        <summary className="font-bold text-slate-900 flex justify-between items-center">
   210|                            Desservez-vous mon industrie?
   211|                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
   212|                        </summary>
   213|                        <p className="text-slate-600 mt-4 leading-relaxed">
   214|                            On se spécialise en santé, immobilier, juridique, restauration, automobile et services professionnels. Nos agents reçoivent une formation spécifique à votre secteur.
   215|                        </p>
   216|                    </details>
   217|                </div>
   218|            </div>
   219|        </section>
   220|
   221|        {/* SECTION 8: DARK FINAL CTA */}
   222|        <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 border-t-8 border-blue-400">
   223|        <div className="max-w-4xl mx-auto px-4 text-center">
   224|          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prêt à mieux gérer vos appels?</h2>
   225|          <p className="text-lg text-white mb-8">Consultation gratuite. Sans engagement. Résultats garantis.</p>
   226|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   227|            <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Consultation Gratuite</Link>
   228|            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">Voir nos tarifs</Link>
   229|          </div>
   230|        </div>
   231|      </section>
   232|    </>
   233|  )
   234|}
   235|