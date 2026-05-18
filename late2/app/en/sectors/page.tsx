import Link from 'next/link'
export const metadata = { title: "Sectors We Serve | Smart Hotline Agency" }
const SECTORS = [
  { icon: "🍽️", name: "Restaurants", desc: "Reservations, deliveries, customer service. Never miss an order.", examples: ["Restaurants", "Caterers", "Dark kitchens"] },
  { icon: "🏥", name: "Healthcare", desc: "Appointment scheduling, patient reminders, emergencies. Available 24/7.", examples: ["Clinics", "Doctors", "Physiotherapy"] },
  { icon: "🏢", name: "Real Estate", desc: "Buyer qualification, property tours, lead follow-up.", examples: ["Agencies", "Brokers", "Developers"] },
  { icon: "🚗", name: "Automotive", desc: "After-sales service, workshop appointments, customer follow-up.", examples: ["Dealerships", "Garages", "Rentals"] },
  { icon: "⚖️", name: "Legal Services", desc: "Call screening, appointment scheduling, legal emergencies.", examples: ["Law firms", "Notaries", "Bailiffs"] },
  { icon: "🏗️", name: "Construction", desc: "Quotes, site tracking, subcontractor coordination.", examples: ["Contractors", "Architects", "Renovations"] },
  { icon: "💻", name: "Tech & SaaS", desc: "Tier 1 support, client onboarding, escalations.", examples: ["Startups", "SaaS", "Web agencies"] },
  { icon: "🛒", name: "E-commerce", desc: "Customer support, returns, order tracking, loyalty.", examples: ["Online stores", "Marketplaces", "Dropshipping"] },
  { icon: "🎓", name: "Education", desc: "Enrollments, inquiries, student and parent follow-up.", examples: ["Schools", "Training centers", "Tutors"] },
]
export default function Sectors() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Sectors We Serve</h1>
          <p className="text-lg text-blue-100">Our expertise covers over 20 industries across North America and Europe.</p>
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
          <h2 className="text-3xl font-bold mb-3">Your Sector Not Listed?</h2>
          <p className="text-gray-600 mb-8">We adapt to any industry. Contact us for a personalized consultation.</p>
          <Link href="/en/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Talk to an Expert</Link>
        </div>
      </section>
    </>
  )
}
