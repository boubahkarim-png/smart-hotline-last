import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('services', 'en'),
}

     1|import Link from 'next/link'
     2|export const metadata = { title: "Our Services | Smart Hotline Agency" }
     3|const SERVICES = [
     4|  { icon: "📞", title: "Inbound Calls", desc: "Professional 24/7 reception. Never miss a call again.", href: "/en/inbound", color: "blue" },
     5|  { icon: "📢", title: "Outbound Calls", desc: "Prospecting, telemarketing, appointment setting. Qualified leads guaranteed.", href: "/en/outbound", color: "green" },
     6|  { icon: "🤖", title: "Voice AI Agents", desc: "Sophie answers in 2 sec, 24/7. Up to 70% cheaper.", href: "/en/ai-agents", color: "purple", badge: "New" },
     7|  { icon: "🎧", title: "Customer Support", desc: "Tickets, email, chat, WhatsApp. 5-star support for your clients.", href: "/en/support", color: "teal" },
     8|  { icon: "🗄️", title: "CRM & Lists", desc: "Integrated SuiteCRM + qualified B2B/B2C prospecting lists.", href: "/en/crm", color: "indigo" },
     9|]
    10|const STATS = [
    11|  { value: "500+", label: "SMEs accompanied" },
    12|  { value: "98%", label: "Client satisfaction" },
    13|  { value: "24/7", label: "Availability" },
    14|  { value: "50K+", label: "Calls handled/month" },
    15|]
    16|const TESTIMONIALS = [
    17|  { quote: "Since working with Smart Hotline, we never miss a call. Their team is professional and responsive.", author: "John D.", role: "Director, Park Clinic", rating: 5 },
    18|  { quote: "AI agents reduced our costs by 60% while improving service quality. Incredible technology!", author: "Peter L.", role: "CEO, TechStart Inc.", rating: 5 },
    19|  { quote: "Impeccable service. Our clients are satisfied and our conversion rate increased by 35%.", author: "Sarah M.", role: "Sales Manager, BatiPro", rating: 5 },
    20|]
    21|const STEPS = [
    22|  { num: "01", title: "Free Consultation", desc: "We analyze your needs and goals during a 30-minute call." },
    23|  { num: "02", title: "Custom Solution", desc: "We design a strategy tailored to your budget and industry." },
    24|  { num: "03", title: "Quick Deployment", desc: "Setup in 24-72h. Training included for your team." },
    25|  { num: "04", title: "Continuous Follow-up", desc: "Monthly reports, constant optimization, dedicated support." },
    26|]
    27|export default function Services() {
    28|  return (
    29|    <>
    30|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    31|        <div className="max-w-4xl mx-auto px-4 text-center">
    32|          <h1 className="text-4xl lg:text-5xl font-extrabold mb-5">Our Solutions</h1>
    33|          <p className="text-lg text-blue-100 mb-8">Everything your SME needs for customer relationships — all under one roof.</p>
    34|          <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Demo</Link>
    35|        </div>
    36|      </section>
    37|      <section className="py-20 bg-white">
    38|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    39|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    40|            {SERVICES.map(({icon, title, desc, href, badge}) => (
    41|              <Link key={href} href={href} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
    42|                <div className="text-5xl mb-5">{icon}</div>
    43|                <div className="flex items-center gap-2 mb-3">
    44|                  <h2 className="font-bold text-xl">{title}</h2>
    45|                  {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
    46|                </div>
    47|                <p className="text-gray-500 mb-5" dangerouslySetInnerHTML={{__html: desc}}/>
    48|                <span className="text-blue-600 font-semibold group-hover:underline">Learn more →</span>
    49|              </Link>
    50|            ))}
    51|          </div>
    52|        </div>
    53|      </section>
    54|      <section className="py-16 bg-white">
    55|        <div className="max-w-6xl mx-auto px-4">
    56|          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    57|            {STATS.map(({value, label}) => (
    58|              <div key={label}>
    59|                <div className="text-4xl lg:text-5xl font-extrabold text-blue-600">{value}</div>
    60|                <div className="text-gray-600 mt-2">{label}</div>
    61|              </div>
    62|            ))}
    63|          </div>
    64|        </div>
    65|      </section>
    66|      <section className="py-20 bg-slate-50">
    67|        <div className="max-w-6xl mx-auto px-4">
    68|          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
    69|          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    70|            {TESTIMONIALS.map(({quote, author, role, rating}) => (
    71|              <div key={author} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
    72|                <div className="flex mb-4">
    73|                  {Array.from({length: rating}).map((_, i) => (
    74|                    <span key={i} className="text-yellow-400 text-xl">★</span>
    75|                  ))}
    76|                </div>
    77|                <p className="text-gray-600 mb-6 italic">"{quote}"</p>
    78|                <div className="font-semibold text-gray-900">{author}</div>
    79|                <div className="text-sm text-gray-500">{role}</div>
    80|              </div>
    81|            ))}
    82|          </div>
    83|        </div>
    84|      </section>
    85|      <section className="py-20 bg-white">
    86|        <div className="max-w-6xl mx-auto px-4">
    87|          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">How It Works</h2>
    88|          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From initial consultation to ongoing support, we accompany you every step.</p>
    89|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    90|            {STEPS.map(({num, title, desc}) => (
    91|              <div key={num} className="relative">
    92|                <div className="text-6xl font-extrabold text-blue-100 mb-3">{num}</div>
    93|                <h3 className="font-bold text-lg mb-2">{title}</h3>
    94|                <p className="text-gray-600">{desc}</p>
    95|              </div>
    96|            ))}
    97|          </div>
    98|        </div>
    99|      </section>
   100|      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
   101|        <div className="max-w-4xl mx-auto px-4 text-center">
   102|          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
   103|          <p className="text-lg text-blue-100 mb-8">Free consultation. No commitment. Guaranteed results.</p>
   104|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   105|            <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Consultation</Link>
   106|            <Link href="/en/pricing" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">View Pricing</Link>
   107|          </div>
   108|        </div>
   109|      </section>
   110|    </>
   111|  )
   112|}
   113|