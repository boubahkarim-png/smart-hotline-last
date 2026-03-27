'use client'
import Link from 'next/link'
import { useState } from 'react'

const POSTS = [
  { 
    title: "5 raisons d'externaliser votre service client en 2025", 
    date: "15 mars 2026", 
    cat: "Strategie", 
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", 
    excerpt: "Découvrez pourquoi de plus en plus de PME font le choix de l'externalisation pour leur relation client.",
    content: "L'externalisation du service client connaît une croissance sans précédent en 2025. De nombreuses PME reconnaissent les avantages stratégiques de cette approche, allant bien au-delà de la simple réduction de coûts. Dans cet article, nous explorons les cinq raisons principales qui poussent les entreprises québécoises et françaises à franchir le pas."
  },
  { 
    title: "Agent IA vs Agent Humain: lequel choisir?", 
    date: "8 mars 2026", 
    cat: "IA", 
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80", 
    excerpt: "Comparaison complète pour vous aider à faire le bon choix selon votre activité et budget.",
    content: "L'arrivée des agents IA vocaux a changé l'industrie des centres d'appels. Mais faut-il vraiment choisir entre l'IA et l'humain, ou peut-on bénéficier du meilleur des deux mondes ? Nous analysons les forces et limites de chaque approche pour vous aider à prendre une décision."
  },
  { 
    title: "Comment qualifier vos leads au téléphone: guide complet", 
    date: "1 mars 2026", 
    cat: "Prospection", 
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80", 
    excerpt: "Les techniques et scripts utilisés par nos meilleurs conseillers pour qualifier efficacement.",
    content: "La qualification efficace des leads est l'art de transformer un simple appel téléphonique en opportunité commerciale qualifiée. Dans ce guide, nous partageons les techniques et les scripts que nos conseillers utilisent pour maximiser vos taux de conversion."
  },
  { 
    title: "Taux de satisfaction client: les KPIs à surveiller", 
    date: "22 février 2026", 
    cat: "Mesure", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", 
    excerpt: "CSAT, NPS, FCR — comprendre et améliorer vos indicateurs de satisfaction.",
    content: "Dans un marché où l'expérience client fait la différence, mesurer et améliorer votre satisfaction client n'est plus optionnel. Nous décortiquons les KPIs essentiels (CSAT, NPS, FCR, CES) que toute PME devrait surveiller, avec des conseils pratiques pour les améliorer durablement."
  },
  { 
    title: "Secteur restauration: pourquoi un centre d'appels change tout", 
    date: "14 février 2026", 
    cat: "Secteurs", 
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80", 
    excerpt: "Témoignage de 3 restaurants qui ont doublé leurs réservations en 30 jours.",
    content: "L'industrie de la restauration fait face à des défis uniques en matière de gestion des réservations et du service client. À travers trois témoignages concrets de restaurants montréalais, nous montrons comment un centre d'appels peut vous faire gagner du temps et de l'argent."
  },
  { 
    title: "RGPD et centre d'appels: ce qu'il faut savoir", 
    date: "5 février 2026", 
    cat: "Conformite", 
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80", 
    excerpt: "Guide pratique pour rester conforme tout en optimisant votre relation client.",
    content: "Le RGPD (Règlement Général sur la Protection des Données) représente un défi majeur pour les centres d'appels, mais aussi une opportunité d'améliorer significativement la confiance des clients. Nous vous guidons à travers les exigences essentielles, les bonnes pratiques et les outils techniques pour assurer une conformité totale tout en optimisant votre opérationnel."
  }
]

const FAQ = [
  {
    question: "Quels types d'entreprises bénéficient le plus de vos services ?",
    answer: "Nos services sont particulièrement adaptés aux PME de 5 à 200 employés dans des secteurs variés : restauration, retail, services professionnels, santé, technologie et commerce électronique. Nous adaptons nos solutions selon votre taille, votre secteur et vos objectifs spécifiques."
  },
  {
    question: "Comment garantissez-vous la qualité de service avec vos agents IA ?",
    answer: "Nos agents IA sont continuellement supervisés et formés. Ils gèrent les requêtes simples et répétitives, tandis que les cas complexes sont transférés vers des agents humains. Nous maintenons un taux de satisfaction supérieur à 92% grâce à cette approche hybride."
  },
  {
    question: "Quel est le délai de mise en place habituel ?",
    answer: "Nous sommes opérationnels en 48 heures après la signature du contrat. Cela inclut la configuration de vos scripts, l'intégration avec vos systèmes existants et la formation de l'équipe dédiée à votre compte."
  },
  {
    question: "Proposez-vous des contrats flexibles sans engagement longue durée ?",
    answer: "Absolument ! Nous croyons en des partenariats basés sur la satisfaction, pas sur les engagements contraignants. Nos contrats sont renouvelables mensuellement avec un préavis de 30 jours seulement."
  }
]

const TESTIMONIALS = [
  { quote: "Smart Hotline a changé notre façon de gérer les appels. On a gagné 30% en efficacité et nos clients sont plus satisfaits.", name: "Marie-Chantal Dubois", role: "Directrice Opérations, Clinique SantéPlus", avatar: "MC" },
  { quote: "La flexibilité de leur approche hybride IA/humain nous a permis de réduire nos coûts de 40% tout en améliorant notre disponibilité.", name: "Jean-Michel Leclerc", role: "PDG, Boutique Mode Urbaine", avatar: "JL" },
  { quote: "Pendant la tempête du siècle, leurs agents ont assuré une continuité de service parfaite. Aucun appel manqué, aucun client frustré.", name: "Sophie Bertrand", role: "Propriétaire, Bistro Le Petit Coin", avatar: "SB" },
  { quote: "Leur équipe a compris notre secteur en 2 semaines. On a triplé nos prises de rendez-vous sans augmenter nos coûts.", name: "François Martel", role: "Directeur Commercial, Immobilière du Quartier", avatar: "FM" }
]

const STATS = [
  { value: "92%", label: "Taux de satisfaction client" },
  { value: "40%", label: "Réduction moyenne des coûts" },
  { value: "24/7", label: "Disponibilité garantie" },
  { value: "5+", label: "Années d'expérience moyenne des conseillers" }
]

export default function BlogFr() {
  return (
    <>
{/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
<section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[55%]">
<div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
Ressources & Expertise
</div>
<h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
Blog Smart Hotline<br/>
<span className="text-blue-700">Conseils d'Experts</span><br/>
pour votre Relation Client
</h1>
<p className="text-slate-600 text-lg mb-6">
Découvrez nos analyses, stratégies et meilleures pratiques pour optimiser votre service client et votre prospection téléphonique.
</p>
</div>
<div className="w-full lg:w-[40%]">
<img src="/images/main-hero.jpg" alt="Blog Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
</div>
</div>
</div>
</section>

      {/* SECTION 2: DARK - FEATURED POSTS */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Articles à la Une
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Sélection de nos meilleurs articles pour inspirer votre stratégie de relation client
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {POSTS.slice(0, 2).map(({ title, date, cat, img, excerpt }) => (
              <article key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cat}</span>
                  <span className="text-blue-200 text-xs">{date}</span>
                </div>
                <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors" dangerouslySetInnerHTML={{__html: title}}/>
                <p className="text-blue-200 text-sm mb-4" dangerouslySetInnerHTML={{__html: excerpt}}/>
                <button onClick={(e) => {
                  e.preventDefault();
                  alert(`Vous avez cliqué sur "${title}". Fonctionnalité "Lire la suite" à implémenter avec un modal ou une page dédiée.`);
                }} className="text-blue-200 text-sm font-semibold group-hover:underline">
                  Lire la suite →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - NEWSLETTER */}
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">Recevez nos conseils chaque semaine</h2>
          <p className="text-gray-600 mb-6">Inscrivez-vous à notre newsletter — 100% utile, 0% spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="votre@email.com" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"/>
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700">S'inscrire</button>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIGHT - FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Questions Fréquentes</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="space-y-8">
            {FAQ.map(({ question, answer }, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 text-lg mb-3">{question}</h3>
                <p className="text-slate-600 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TESTIMONIALS.map(({ quote, name, role, avatar }) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{avatar}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LIGHT - STATS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-black text-blue-700">{value}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: DARK - ALL POSTS WITH POP-UPS */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Tous nos Articles
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Explorez notre collection complète d'articles sur la relation client, l'IA vocale et la prospection téléphonique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {POSTS.map(({ title, date, cat, img, excerpt }) => (
              <article key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
                <img src={img} alt={title} loading="lazy" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cat}</span>
                    <span className="text-blue-200 text-xs">{date}</span>
                  </div>
                  <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors" dangerouslySetInnerHTML={{__html: title}}/>
                  <p className="text-blue-200 text-sm mb-4" dangerouslySetInnerHTML={{__html: excerpt}}/>
                  <button onClick={(e) => {
                    e.preventDefault();
                    alert(`Vous avez cliqué sur "${title}". Fonctionnalité "Lire la suite" à implémenter avec un modal ou une page dédiée.`);
                  }} className="text-blue-200 text-sm font-semibold group-hover:underline block w-fit">
                    Lire la suite →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK - CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à mieux gérer vos appels ?</h2>
          <p className="text-blue-200 text-lg mb-10">Découvrez comment nos solutions peuvent aider votre entreprise.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Link href="/fr/reception" className="flex-1 bg-white/20 backdrop-blur hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/20">
              Appels Entrants
            </Link>
            <Link href="/fr/emission" className="flex-1 bg-white/20 backdrop-blur hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all border border-white/20">
              Appels Sortants
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}