import Link from 'next/link'
export const metadata = { title: "A Propos | Smart Hotline Agency" }
export default function APropos() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">Notre Histoire</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Parti d'un Plateau Mont-Royal<br/>avec 3 Clients en 2018</h1>
              <p className="text-lg text-blue-100 mb-6">Aujourd'hui, on accompagne plus de 500 PME au Québec et en France. Mais au début, c'était juste Karim, son laptop, et des nuits blanches à répondre aux appels de ses premiers clients.</p>
              <Link href="/fr/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Nous Contacter</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/about-hero.webp" alt="Equipe Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: DARK - NO IMAGE */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Notre Mission et Nos Valeurs
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Nous aidons les PME québécoises et françaises à prospérer en leur offrant
              une relation client irréprochable, adaptée à leurs besoins spécifiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🎯", title: "Excellence Opérationnelle", desc: "Nous visons la perfection dans chaque interaction client"},
              {icon: "💬", title: "Communication Authentique", desc: "Nos agents parlent comme vos clients, avec votre ton et votre style"},
              {icon: "🔒", title: "Confidentialité Totale", desc: "RGPD, Loi 25 et normes de sécurité les plus strictes respectées"},
              {icon: "📈", title: "Résultats Mesurables", desc: "Des KPI clairs pour suivre l'impact réel sur votre business"},
              {icon: "🚀", title: "Innovation Continue", desc: "Des outils modernes et des mises à jour régulières"},
              {icon: "❤️", title: "Approche Humaine", desc: "Nous traitons vos clients comme s'ils étaient les nôtres"}
            ].map(({icon, title, desc}, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-green-400 text-2xl">{icon}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 3: LIGHT - STATS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{n:"2018", l:"Fondé à Montréal"},{n:"512", l:"PME actives"},{n:"98%", l:"Renouvellent"},{n:"6", l:"Accents français"}].map(({n,l}) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-600">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECTION 4: LIGHT - OUR JOURNEY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Notre Évolution</h2>
              <p className="text-slate-600 mb-6">
                De humble début à leader reconnu, notre parcours est guidé par une seule obsession:
                offrir le meilleur service possible à chaque PME que nous accompagnons.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    2018
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Fondation à Montréal</h3>
                    <p className="text-gray-600">Avec 3 clients et une vision: offrir aux PME le même service qu'aux grandes entreprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    2020
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Première IA Vocale</h3>
                    <p className="text-gray-600">Lancement de Sophie, notre première agente IA vocale québécoise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
                    2022
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Expansion Française</h3>
                    <p className="text-gray-600">Ouverture de nos services aux PME françaises avec adaptation culturelle</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    2024
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Intégration CRM Complète</h3>
                    <p className="text-gray-600">Connexion native avec SuiteCRM et autres plateformes majeures</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Évolution de Smart Hotline" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 5: LIGHT - HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Notre Méthodologie</h2>
            <p className="text-slate-500 text-lg">Comment nous assurons votre succès, étape par étape</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {n: "1", title: "Analyse Approfondie", desc: "Nous étudions votre métier, vos clients et vos défis spécifiques"},
              {n: "2", title: "Personnalisation Totale", desc: "Scripts, ton et approche 100% adaptés à votre identité"},
              {n: "3", title: "Formation Spécialisée", desc: "Nos agents sont formés sur votre secteur et vos processus"},
              {n: "4", title: "Lancement & Optimisation", desc: "Déploiement rapide suivi d'optimisation continue basée sur les données"}
            ].map(({n, title, desc}) => (
              <div key={n} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 6: LIGHT - TECHNOLOGY & INNOVATION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Notre Avantage Technologique</h2>
            <p className="text-slate-500 text-lg">L'innovation qui fait la différence pour votre PME</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🤖", title: "IA Vocale Avancée", desc: "Sophie comprend le contexte, les accents et les nuances culturelles"},
              {icon: "🔗", title: "Intégrations Simples", desc: "Connexion directe avec vos outils: CRM, calendriers, help desks"},
              {icon: "📊", title: "Analytics en Temps Réel", desc: "Tableaux de bord personnalisés pour suivre vos performances"},
              {icon: "🛡️", title: "Sécurité Solide", desc: "Chiffrement de bout en bout et conformité aux normes en vigueur"},
              {icon: "🌐", title: "Infrastructure Redondante", desc: "99.9% de disponibilité avec sauvegardes géo-distribuées"},
              {icon: "📱", title: "Mobile First", desc: "Applications iOS/Android pour gérer votre service où que vous soyez"}
            ].map(({icon, title, desc}) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        {/* SECTION 7: DARK - CLIENT IMPACT */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">
                L'Impact Sur Votre Business
              </h2>
              <p className="text-blue-200 text-lg">
                Des résultats concrets que nos clients mesurent chaque jour
              </p>
              <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {value: "70%", label: "Réduction des coûts opérationnels"},
                {value: "35%", label: "Augmentation du taux de conversion"},
                {value: "50h/mois", label: "Temps libéré pour le cœur de métier"},
                {value: "95%", label: "Taux de satisfaction client"}
              ].map(({value, label}) => (
                <div key={label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-blue-400">{value}</div>
                  <div className="text-blue-200 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
        {/* SECTION 8: LIGHT - FINAL CTA */}
        <section className="bg-white py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Prêt à écrire votre histoire de succès?</h2>
            <p className="text-slate-600 text-lg mb-8">Comme nos 500+ PME partenaires, découvrez ce qu'une relation client exceptionnelle peut faire pour votre business.</p>
            <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Commencer Votre Transformation</Link>
          </div>
        </section>
    </>
  )
}
