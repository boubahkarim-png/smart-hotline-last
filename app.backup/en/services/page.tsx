import Link from 'next/link'
export const metadata = { title: "Our Services | Smart Hotline Agency" }
const SERVICES = [
  { icon: "📞", title: "Inbound Calls", desc: "Professional 24/7 reception. Never miss a call again.", href: "/en/inbound", color: "blue" },
  { icon: "📢", title: "Outbound Calls", desc: "Prospecting, telemarketing, appointment setting. Qualified leads guaranteed.", href: "/en/outbound", color: "green" },
  { icon: "🤖", title: "Voice AI Agents", desc: "Sophie answers in 2 sec, 24/7. Up to 70% cheaper.", href: "/en/ai-agents", color: "purple", badge: "New" },
  { icon: "🎧", title: "Customer Support", desc: "Tickets, email, chat, WhatsApp. 5-star support for your clients.", href: "/en/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Lists", desc: "Integrated SuiteCRM + qualified B2B/B2C prospecting lists.", href: "/en/crm", color: "indigo" },
]
const STATS = [
  { value: "500+", label: "SMEs accompanied" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Availability" },
  { value: "50K+", label: "Calls handled/month" },
]
const TESTIMONIALS = [
  { quote: "Since working with Smart Hotline, we never miss a call. Their team is professional and responsive.", author: "John D.", role: "Director, Park Clinic", rating: 5 },
  { quote: "AI agents reduced our costs by 60% while improving service quality. Incredible technology!", author: "Peter L.", role: "CEO, TechStart Inc.", rating: 5 },
  { quote: "Impeccable service. Our clients are satisfied and our conversion rate increased by 35%.", author: "Sarah M.", role: "Sales Manager, BatiPro", rating: 5 },
]
const STEPS = [
  { num: "01", title: "Free Consultation", desc: "We analyze your needs and goals during a 30-minute call." },
  { num: "02", title: "Custom Solution", desc: "We design a strategy tailored to your budget and industry." },
  { num: "03", title: "Quick Deployment", desc: "Setup in 24-72h. Training included for your team." },
  { num: "04", title: "Continuous Follow-up", desc: "Monthly reports, constant optimization, dedicated support." },
]
export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Our Solutions</h1>
          <p className="text-lg text-blue-100 mb-8">Everything your SME needs for customer relationships — all under one roof.</p>
          <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Demo</Link>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(({icon, title, desc, href, badge}) => (
              <Link key={href} href={href} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-5">{icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-bold text-xl">{title}</h2>
                  {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
                </div>
                <p className="text-gray-500 mb-5" dangerouslySetInnerHTML={{__html: desc}}/>
                <span className="text-blue-600 font-semibold group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <div className="text-4xl lg:text-5xl font-extrabold text-blue-600">{value}</div>
                <div className="text-gray-600 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({quote, author, role, rating}) => (
              <div key={author} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {Array.from({length: rating}).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{quote}"</p>
                <div className="font-semibold text-gray-900">{author}</div>
                <div className="text-sm text-gray-500">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From initial consultation to ongoing support, we accompany you every step.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({num, title, desc}) => (
              <div key={num} className="relative">
                <div className="text-6xl font-extrabold text-blue-100 mb-3">{num}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
          <p className="text-lg text-blue-100 mb-8">Free consultation. No commitment. Guaranteed results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Consultation</Link>
            <Link href="/en/pricing" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
