import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('sectors', 'en'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "Sectors We Serve | Smart Hotline Agency" }
     3|const SECTORS = [
     4|  { icon: "🍽️", name: "Restaurants", desc: "Reservations, deliveries, customer service. Never miss an order.", examples: ["Restaurants", "Caterers", "Dark kitchens"] },
     5|  { icon: "🏥", name: "Healthcare", desc: "Appointment scheduling, patient reminders, emergencies. Available 24/7.", examples: ["Clinics", "Doctors", "Physiotherapy"] },
     6|  { icon: "🏢", name: "Real Estate", desc: "Buyer qualification, property tours, lead follow-up.", examples: ["Agencies", "Brokers", "Developers"] },
     7|  { icon: "🚗", name: "Automotive", desc: "After-sales service, workshop appointments, customer follow-up.", examples: ["Dealerships", "Garages", "Rentals"] },
     8|  { icon: "⚖️", name: "Legal Services", desc: "Call screening, appointment scheduling, legal emergencies.", examples: ["Law firms", "Notaries", "Bailiffs"] },
     9|  { icon: "🏗️", name: "Construction", desc: "Quotes, site tracking, subcontractor coordination.", examples: ["Contractors", "Architects", "Renovations"] },
    10|  { icon: "💻", name: "Tech & SaaS", desc: "Tier 1 support, client onboarding, escalations.", examples: ["Startups", "SaaS", "Web agencies"] },
    11|  { icon: "🛒", name: "E-commerce", desc: "Customer support, returns, order tracking, loyalty.", examples: ["Online stores", "Marketplaces", "Dropshipping"] },
    12|  { icon: "🎓", name: "Education", desc: "Enrollments, inquiries, student and parent follow-up.", examples: ["Schools", "Training centers", "Tutors"] },
    13|]
    14|export default function Sectors() {
    15|  return (
    16|    <>
    17|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    18|        <div className="max-w-4xl mx-auto px-4 text-center">
    19|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Sectors We Serve</h1>
    20|          <p className="text-lg text-blue-100">Our expertise covers over 20 industries across North America and Europe.</p>
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
    41|          <h2 className="text-3xl font-bold mb-3">Your Sector Not Listed?</h2>
    42|          <p className="text-gray-600 mb-8">We adapt to any industry. Contact us for a personalized consultation.</p>
    43|          <Link href="/en/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Talk to an Expert</Link>
    44|        </div>
    45|      </section>
    46|    </>
    47|  )
    48|}
    49|