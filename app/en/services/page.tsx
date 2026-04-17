import basePath from '@/lib/basePath'
import Link from 'next/link'
export const metadata = { title: "Our Services | Smart Hotline Agency" }
const SERVICES = [
  { icon: "📞", title: "Inbound Calls", desc: "Professional 24/7 reception. Never miss a call again.", href: "/en/inbound", color: "blue" },
  { icon: "📢", title: "Outbound Calls", desc: "Prospecting, telemarketing, appointment setting. Qualified leads guaranteed.", href: "/en/outbound", color: "green" },
  { icon: "🤖", title: "Voice AI Agents", desc: "Sophie answers in 2 sec, 24/7. Up to 70% cheaper.", href: "/en/ai-agents", color: "purple", badge: "New" },
  { icon: "🎧", title: "Customer Support", desc: "Tickets, email, chat, WhatsApp. 5-star support for your clients.", href: "/en/support", color: "teal" },
  { icon: "🗄️", title: "CRM & Lists", desc: "Integrated SuiteCRM + qualified B2B/B2C prospecting lists.", href: "/en/crm", color: "indigo" },
  { icon: "🏭", title: "Industry Expertise", desc: "Specialized solutions for healthcare, real estate, legal, and more.", href: "/en/sectors", color: "orange" },
]
const STATS = [
 { value: "500+", label: "SMEs accompanied" },
 { value: "98%", label: "Client satisfaction" },
 { value: "24/7", label: "Availability" },
 { value: "50K+", label: "Calls handled/month" },
]
const TESTIMONIALS = [
{ quote: "I have a dental clinic on Saint-Denis. Before, I was losing patients because no one answered during procedures. Now? Zero missed calls. My patients think I have a full-time receptionist.", author: "Marie D.", role: "Dentist, Clinique du Parc — Plateau Mont-Royal", rating: 5, img: '/images/testimonial-marie.jpg' },
{ quote: "Sophie AI reduced my costs by 60%. True. And the funniest part? My clients prefer it. 'Your receptionist is super efficient,' they say. It's a robot, guys!", author: "Pierre L.", role: "CEO, TechStart Inc. — Mile-End, Montreal", rating: 5, img: '/images/testimonial-pierre-new.jpg' },
{ quote: "I'm in construction. My guys are on job sites, they can't answer. Smart Hotline takes calls, qualifies leads. My conversion rate went up 35%. It's measurable.", author: "Sophie M.", role: "Sales Director, BatiPro Quebec — Laval", rating: 5, img: '/images/testimonial-sophie-new.jpg' },
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
{/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Everything You Need<br/>To Manage Your Clients
              </h1>
              <p className="text-lg text-slate-600 mb-8">We handle your phone while you handle your business. Simple as that.</p>
              <Link href="/en/contact" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Free Trial
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src={`${basePath}/images/services-hero.webp`} alt="Our Services Smart Hotline" width="800" height="380" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
 {/* SECTION 2: DARK - SERVICES OVERVIEW */}
 <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
 <div className="max-w-4xl mx-auto px-4 text-center">
 <h2 className="text-3xl lg:text-4xl font-bold mb-6">Solutions That Truly Make a Difference</h2>
 <p className="text-lg text-white mb-8 max-w-2xl mx-auto"> From answering calls to client follow-up, we manage it all so you can focus on what you do best. </p>
 </div>
 </section>
 {/* SECTION 3: LIGHT - SERVICES GRID */}
 <section className="py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Our Services</h2>
 <p className="text-slate-600 text-lg">What we actually do for you and your business</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
 {SERVICES.map(({icon, title, desc, href, badge}, i) => (
 <Link key={href} href={href} className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all group modern-box animate-delay-${(i+1)*100}`}>
 <div className="text-5xl mb-5">{icon}</div>
 <div className="flex items-center gap-2 mb-3">
 <h2 className="font-bold text-xl text-slate-900">{title}</h2>
 {badge && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{badge}</span>}
 </div>
 <p className="text-slate-600 mb-5 text-sm" dangerouslySetInnerHTML={{__html: desc}}/>
 <span className="text-blue-600 font-semibold group-hover:underline">Learn more →</span>
 </Link>
 ))}
 </div>
 </div>
 </section>
{/* SECTION 4: DARK STATS */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-20 border-t-4 border-blue-600">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-children">
{STATS.map(({value, label}, i) => (
<div key={label} className={`modern-box animate-delay-${(i+1)*100}`}>
<div className="text-4xl lg:text-5xl font-extrabold text-blue-300">{value}</div>
<div className="text-slate-100 mt-2 font-medium">{label}</div>
</div>
))}
</div>
</div>
</section>
      {/* SECTION 5: DARK - TESTIMONIALS AUTO-SLIDE */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
      {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
      <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 min-w-[320px] max-w-[320px] flex-shrink-0">
        <div className="flex mb-4" role="img" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({length: t.rating}).map((_, j) => (
        <span key={j} className="text-yellow-400 text-xl" aria-hidden="true">★</span>
        ))}
        </div>
        <p className="text-slate-100 mb-6 italic">"{t.quote}"</p>
        <div className="flex items-center gap-3 mb-2">
        <img src={basePath + t.img} alt={t.author} className="w-10 h-10 rounded-full object-cover shadow-lg" />
        <div>
        <div className="font-semibold text-white">{t.author}</div>
        <div className="text-sm text-slate-100">{t.role}</div>
        </div>
        </div>
      </div>
      ))}
          </div>
        </div>
      </section>
      {/* SECTION 6: LIGHT HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From initial consultation to ongoing support, we accompany you every step of the way.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {STEPS.map(({num, title, desc}, i) => (
              <div key={num} className={`relative modern-box animate-delay-${(i+1)*100}`}>
                <div className="text-6xl font-extrabold text-blue-100 mb-3">{num}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* SECTION 7: DARK ADDITIONAL VALUE */}
 <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
 <div className="max-w-6xl mx-auto px-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
 <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-100`}>
 <h3 className="text-2xl font-bold text-white mb-4">Why Choose Smart Hotline?</h3>
 <p className="text-slate-100 mb-6"> We understand the unique challenges of SMEs and offer solutions that adapt to your growth, not the other way around. </p>
 <ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-100">
  <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
  <span>24/7 availability, including weekends and holidays</span>
</li>
<li className="flex items-center gap-3 text-slate-100">
  <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
  <span>Quick setup in less than 48 hours</span>
</li>
<li className="flex items-center gap-3 text-slate-100">
  <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
  <span>No long-term commitment</span>
</li>
<li className="flex items-center gap-3 text-slate-100">
  <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
  <span>Transparent reporting and real-time data access</span>
</li>
 </ul>
 </div>
 <div className={`bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 modern-box animate-delay-200`}>
 <h3 className="text-2xl font-bold text-white mb-4">Concrete Results for Your Business</h3>
 <p className="text-slate-100 mb-6"> Our clients typically see significant improvement in their efficiency and customer satisfaction within the first few weeks. </p>
 <ul className="space-y-4 text-slate-100">
 <li className="flex items-center gap-3">
 <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
 <span>Up to 70% reduction in call management costs</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
 <span>Increased customer satisfaction through constant availability</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
 <span>Improved lead qualification for better conversion rates</span>
 </li>
 <li className="flex items-center gap-3">
 <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm"> ✓ </span>
 <span>More time to focus on your core business</span>
 </li>
 </ul>
 </div>
</div>
            </div>
        </section>
        {/* SECTION 8: LIGHT - FAQ */}
        <section className="py-20 bg-white border-t-4 border-slate-200">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
                    <p className="text-slate-600">Everything you need to know about our services</p>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"/>
                </div>
                <div className="space-y-4">
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            How quickly can you start?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Most clients are operational within 48 hours. We configure your lines, train our agents, and you&apos;re ready. No weeks of waiting like hiring in-house staff.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Can I combine multiple services?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            Absolutely! Many clients combine inbound reception with outbound prospecting and AI agents. We create custom packages that fit your exact needs and budget.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            What&apos;s included in the CRM?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            SuiteCRM with custom configuration for your business, call recording, lead tracking, reporting dashboard, and mobile app access. No extra setup fees.
                        </p>
                    </details>
                    <details className="bg-slate-50 rounded-2xl p-6 cursor-pointer group">
                        <summary className="font-bold text-slate-900 flex justify-between items-center">
                            Do you serve my industry?
                            <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            We specialize in healthcare, real estate, legal, restaurants, automotive, and professional services. Our agents receive industry-specific training for your sector.
                        </p>
                    </details>
                </div>
            </div>
        </section>
        {/* SECTION 9: DARK FINAL CTA */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
     <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Customer Relationships?</h2>
     <p className="text-lg text-white mb-8">Free consultation. No commitment. Guaranteed results.</p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">Free Consultation</Link>
      <Link href="/en/pricing" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">View Pricing</Link>
     </div>
    </div>
   </section>
  </>
 )
}
