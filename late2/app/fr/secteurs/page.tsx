import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('sectors', 'fr'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "Secteurs d&apos;Activite | Smart Hotline Agency" }
     3|const SECTORS = [
     4|  { icon: "🍽️", name: "Restauration", desc: "Reservations, livraisons, service client. Ne manquez aucune commande.", examples: ["Restaurants", "Traiteurs", "Dark kitchens"] },
     5|  { icon: "🏥", name: "Sante & Cliniques", desc: "Prise de RDV, rappels patients, urgences. Disponible 24/7.", examples: ["Cliniques", "Medecins", "Physiotherapie"] },
     6|  { icon: "🏢", name: "Immobilier", desc: "Qualification des acheteurs, visites, suivi des leads.", examples: ["Agences", "Courtiers", "Promoteurs"] },
     7|  { icon: "🚗", name: "Automobile", desc: "Service apres-vente, RDV atelier, relance clients.", examples: ["Concessionnaires", "Garages", "Location"] },
     8|  { icon: "⚖️", name: "Services Juridiques", desc: "Filtrage des appels, prise de RDV, urgences juridiques.", examples: ["Cabinets avocats", "Notaires", "Huissiers"] },
     9|  { icon: "🏗️", name: "Construction & BTP", desc: "Devis, suivi chantiers, coordination sous-traitants.", examples: ["Entrepreneurs", "Architectes", "Renovations"] },
    10|  { icon: "💻", name: "Tech & SaaS", desc: "Support niveau 1, onboarding clients, escalades.", examples: ["Startups", "SaaS", "Agences web"] },
    11|  { icon: "🛒", name: "E-commerce", desc: "SAV, retours, suivi commandes, fidelisation.", examples: ["Boutiques online", "Marketplaces", "Dropshipping"] },
    12|  { icon: "🎓", name: "Education & Formation", desc: "Inscriptions, questions, suivi eleves et parents.", examples: ["Ecoles", "Centres formation", "Tuteurs"] },
    13|]
    14|export default function Secteurs() {
    15|  return (
    16|    <>
    17|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    18|        <div className="max-w-4xl mx-auto px-4 text-center">
    19|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Secteurs que nous servons</h1>
    20|          <p className="text-lg text-blue-100">Notre expertise couvre plus de 20 secteurs d&apos;activite en Amerique du Nord et en Europe francophone.</p>
    21|        </div>
    22|      </section>
    23|      <section className="py-20">
    24|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    25|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    26|            {SECTORS.map(({icon, name, desc, examples}) => (
    27|              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
    28|                <div className="text-4xl mb-4">{icon}</div>
    29|                <h3 className="font-bold text-xl mb-2">{name}</h3>
    30|                <p className="text-gray-500 text-sm mb-4">{desc}</p>
    31|                <div className="flex flex-wrap gap-2">
    32|                  {examples.map(e => <span key={e} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{e}</span>)}
    33|                </div>
    34|              </div>
    35|            ))}
    36|          </div>
    37|        </div>
    38|      </section>
    39|      <section className="bg-blue-50 py-16">
    40|        <div className="max-w-4xl mx-auto px-4 text-center">
    41|          <h2 className="text-3xl font-bold mb-3">Votre secteur n&apos;est pas liste?</h2>
    42|          <p className="text-gray-600 mb-8">Nous nous adaptons a tout secteur. Contactez-nous pour une consultation personnalisee.</p>
    43|          <Link href="/fr/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Parler a un Expert</Link>
    44|        </div>
    45|      </section>
    46|    </>
    47|  )
    48|}
    49|