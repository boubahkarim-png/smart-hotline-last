import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import basePath from '@/lib/basePath'
import { getAllPosts, type PostMeta } from '@/lib/posts'
import { FAQSchema } from '@/components/FAQSchema'

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
  { quote: "Smart Hotline a transformé notre service client. Nous avons gagné 30% en efficacité et nos clients sont plus satisfaits que jamais.", name: "Marie-Chantal Dubois", role: "Directrice Opérations, Clinique SantéPlus", img: "/images/testimonial-marie.jpg" },
  { quote: "La flexibilité de leur approche hybride IA/humain nous a permis de réduire nos coûts de 40% tout en améliorant notre disponibilité.", name: "Jean-Michel Leclerc", role: "PDG, Boutique Mode Urbaine", img: "/images/testimonial-jean.jpg" },
  { quote: "Pendant la tempête du siècle, leurs agents ont assuré une continuité de service parfaite. Aucun appel manqué, aucun client frustré.", name: "Claude Bertrand", role: "Propriétaire, Bistro Le Petit Coin", img: "/images/testimonial-claude.jpg" }
]

const STATS = [
  { value: "92%", label: "Taux de satisfaction client" },
  { value: "40%", label: "Réduction moyenne des coûts" },
  { value: "24/7", label: "Disponibilité garantie" },
  { value: "5+", label: "Années d'expérience moyenne des conseillers" }
]

export default function BlogFr() {
  const posts = getAllPosts('fr')
  const featuredPosts = posts.slice(0, 2)

  return (
    <>
      {/* SECTION 1: LIGHT HERO */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
              Ressources & Expertise
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-slate-900">
              Blog Smart Hotline<br/>
              <span className="text-blue-700">Conseils d'Experts</span><br/>
              pour votre Relation Client
            </h1>
            <p className="text-blue-600 text-lg max-w-2xl mx-auto">
              Découvrez nos analyses, stratégies et meilleures pratiques pour optimiser votre service client et votre prospection téléphonique.
            </p>
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
        {featuredPosts.map((post: PostMeta) => (
          <Link
            key={post.slug}
            href={`/fr/blog/${post.slug}`}
            className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                <span className="text-blue-200 text-xs">
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-blue-200 text-sm font-semibold group-hover:underline">
                Lire la suite →
              </span>
            </div>
          </Link>
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

      {/* SECTION 5: LIGHT - TESTIMONIALS AUTO-SLIDE */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Ce que nos clients disent</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-lg min-w-[320px] max-w-[320px] flex-shrink-0">
                <p className="text-slate-700 mb-5 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={basePath + t.img} alt={t.name} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
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

      {/* SECTION 7: DARK - ALL POSTS */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: PostMeta) => (
          <Link
            key={post.slug}
            href={`/fr/blog/${post.slug}`}
            className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all group"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                <span className="text-blue-200 text-xs">
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-blue-200 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-blue-200 text-sm font-semibold group-hover:underline">
                Lire la suite →
              </span>
            </div>
          </Link>
        ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK - CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Prêt à améliorer votre relation client ?</h2>
          <p className="text-blue-200 text-lg mb-10">Découvrez comment nos solutions peuvent transformer votre entreprise.</p>
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
