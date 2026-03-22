import Hero from '@/components/Hero'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Hotline Agency | Centre d\'Appels & IA pour PME',
  description: 'Centre d\'appels externalisé pour PME. Agents & IA vocaux 24/7. Essai 2 semaines sans engagement.',
}

const SERVICES = [
  { icon: '📞', title: 'Appels Entrants', desc: 'Ne manquez plus aucun appel. Conseillers 24/7.', href: '/fr/reception' },
  { icon: '📢', title: 'Appels Sortants', desc: 'Generez des leads qualifies avec nos conseillers.', href: '/fr/emission' },
  { icon: '🤖', title: 'Agents IA Vocaux', desc: 'Sophie, votre agente IA 24/7 a prix imbattable.', href: '/fr/agents-ia', badge: 'Nouveau' },
  { icon: '🗄️', title: 'CRM & Listes', desc: 'Maximisez vos ventes avec notre CRM integre.', href: '/fr/crm' },
]

const STEPS = [
  { n: '1', title: 'Consultation', desc: 'Analyse de vos besoins' },
  { n: '2', title: 'Personnalisation', desc: 'Adaptation a votre marque' },
  { n: '3', title: 'Mise en Oeuvre', desc: 'Configuration dediee' },
  { n: '4', title: 'Support', desc: 'Suivi et optimisation' },
]

const TESTIMONIALS = [
  { q: 'Smart Hotline nous a permis de paraitre plus grand. Service professionnel qui a impressionne nos clients.', name: 'Marc Lefebvre', role: 'Fondateur, TechInnov Quebec' },
  { q: 'Le retour sur investissement est incroyable. Nous ne manquons plus aucune opportunite commerciale.', name: 'Sophie Dubois', role: 'Directrice, Cabinet Comptable' },
  { q: 'Un de mes meilleurs investissements. Ils gerent tous mes appels pendant que je me concentre sur mon activite.', name: 'Jean-Pierre Tremblay', role: 'Proprietaire, Restaurant Le Gourmet' },
]

export default function FrHome() {
  return (
    <>
      <Hero
        title="Centre d'Appels & IA pour PME"
        subtitle="Externalisez votre relation client. Conseillers professionnels et agents IA vocaux disponibles 24/7. Essai 2 semaines sans engagement."
        cta1="Demo Gratuite"
        cta1href="/fr/contact"
        cta2="Nos Solutions"
        cta2href="/fr/services"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
        imageAlt="Centre d'appels Smart Hotline"
        badge="Agents & IA Vocaux"
        badges={['2 sem. essai gratuit', 'RGPD', '24/7', 'Sans engagement']}
      />

      {/* Stats */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { n: '500+', label: 'PME Satisfaites' },
            { n: '98%', label: 'Satisfaction' },
            { n: '40%', label: 'Economie de temps' },
            { n: '24/7', label: 'Disponibilite' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-blue-600">{n}</p>
              <p className="text-gray-600 mt-1 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Nos Solutions</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon, title, desc, href, badge }) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4">{icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{title}</h3>
                  {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
                </div>
                <p className="text-gray-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-600 text-sm font-medium group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Feature */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                🤖 Nouveau Service
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">
                Agents IA Vocaux assistes par Conseillers
              </h2>
              <p className="text-gray-600 mb-6">
                Sophie, notre agente IA, gere vos appels 24/7 en francais natif. Pour les situations complexes, elle transfere instantanement vers un conseiller expert.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Reponse en moins de 2 secondes',
                  'Francais natif: Quebec, France, Belgique, Suisse',
                  'Transfert intelligent vers conseiller',
                  "Jusqu'a 70% moins cher qu'un agent traditionnel",
                  'Disponible 24/7, aucun temps d'attente',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/fr/agents-ia"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Decouvrir les Agents IA →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80"
                alt="Agent IA Sophie"
                className="rounded-2xl shadow-xl w-full"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Comment Ca Marche</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {n}
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Ce Que Disent Nos Clients</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ q, name, role }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-yellow-400 text-lg">{s}</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-5 italic">"{q}"</p>
                <div>
                  <p className="font-bold text-sm">{name}</p>
                  <p className="text-gray-500 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Pret a Transformer Votre Communication?</h2>
          <p className="text-blue-100 mb-8">2 semaines d'essai gratuit. Sans engagement. Sans carte de credit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/fr/contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all">
              Demarrer l'Essai Gratuit
            </Link>
            <a href="tel:+15148190559"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all">
              +1 514 819-0559
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
