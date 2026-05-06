import Link from 'next/link'
export const metadata = { title: "Secteurs d&apos;Activite | Smart Hotline Agency" }
const SECTORS = [
  { icon: "🍽️", name: "Restauration", desc: "Reservations, livraisons, service client. Ne manquez aucune commande.", examples: ["Restaurants", "Traiteurs", "Dark kitchens"] },
  { icon: "🏥", name: "Sante & Cliniques", desc: "Prise de RDV, rappels patients, urgences. Disponible 24/7.", examples: ["Cliniques", "Medecins", "Physiotherapie"] },
  { icon: "🏢", name: "Immobilier", desc: "Qualification des acheteurs, visites, suivi des leads.", examples: ["Agences", "Courtiers", "Promoteurs"] },
  { icon: "🚗", name: "Automobile", desc: "Service apres-vente, RDV atelier, relance clients.", examples: ["Concessionnaires", "Garages", "Location"] },
  { icon: "⚖️", name: "Services Juridiques", desc: "Filtrage des appels, prise de RDV, urgences juridiques.", examples: ["Cabinets avocats", "Notaires", "Huissiers"] },
  { icon: "🏗️", name: "Construction & BTP", desc: "Devis, suivi chantiers, coordination sous-traitants.", examples: ["Entrepreneurs", "Architectes", "Renovations"] },
  { icon: "💻", name: "Tech & SaaS", desc: "Support niveau 1, onboarding clients, escalades.", examples: ["Startups", "SaaS", "Agences web"] },
  { icon: "🛒", name: "E-commerce", desc: "SAV, retours, suivi commandes, fidelisation.", examples: ["Boutiques online", "Marketplaces", "Dropshipping"] },
  { icon: "🎓", name: "Education & Formation", desc: "Inscriptions, questions, suivi eleves et parents.", examples: ["Ecoles", "Centres formation", "Tuteurs"] },
]
export default function Secteurs() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Secteurs que nous servons</h1>
          <p className="text-lg text-blue-100">Notre expertise couvre plus de 20 secteurs d&apos;activite en Amerique du Nord et en Europe francophone.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map(({icon, name, desc, examples}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="text-gray-500 text-sm mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {examples.map(e => <span key={e} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{e}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Votre secteur n&apos;est pas liste?</h2>
          <p className="text-gray-600 mb-8">Nous nous adaptons a tout secteur. Contactez-nous pour une consultation personnalisee.</p>
          <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Parler a un Expert</Link>
        </div>
      </section>
    </>
  )
}
