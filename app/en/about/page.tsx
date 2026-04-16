import basePath from '@/lib/basePath'
import Link from 'next/link'
export const metadata = { title: "About Us | Smart Hotline Agency" }
export default function About() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-block bg-blue-500 bg-opacity-50 text-blue-100 text-sm px-3 py-1 rounded-full mb-5">Our Story</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Started From Plateau Mont-Royal<br/>With 3 Clients in 2018</h1>
              <p className="text-lg text-blue-100 mb-6">Today, we support over 500 SMEs in Quebec and France. But in the beginning, it was just Karim, his laptop, and sleepless nights answering calls from his first clients.</p>
              <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Contact Us</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src={`${basePath}/images/about-hero.webp`} alt="Smart Hotline Team" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - NO IMAGE */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Our Mission and Values
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We help Quebec and French SMEs thrive by offering them impeccable customer relationships adapted to their specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🎯", title: "Operational Excellence", desc: "We aim for perfection in every customer interaction"},
              {icon: "💬", title: "Authentic Communication", desc: "Our agents speak like your customers, with your tone and style"},
              {icon: "🔒", title: "Total Confidentiality", desc: "GDPR, Law 25 and strictest security standards respected"},
              {icon: "📈", title: "Measurable Results", desc: "Clear KPIs to track real impact on your business"},
              {icon: "🚀", title: "Continuous Innovation", desc: "Modern tools and regular updates"},
              {icon: "❤️", title: "Human Approach", desc: "We treat your customers as if they were ours"}
            ].map(({icon, title, desc}, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-green-400 text-2xl">{icon}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - STATS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{n:"2018", l:"Founded in Montreal"},{n:"512", l:"Active SMEs"},{n:"98%", l:"Renew"},{n:"6", l:"French Accents"}].map(({n,l}) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-600">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: LIGHT - OUR JOURNEY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Evolution</h2>
              <p className="text-slate-600 mb-6">
                From humble beginnings to recognized leader, our journey is guided by a single obsession: 
                offering the best possible service to every SME we support.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    2018
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Foundation in Montreal</h3>
                    <p className="text-gray-600">With 3 clients and a vision: offer SMEs the same service as large enterprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    2020
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">First Voice AI</h3>
                    <p className="text-gray-600">Launch of Sophie, our first Quebec voice AI agent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
                    2022
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">French Expansion</h3>
                    <p className="text-gray-600">Opening our services to French SMEs with cultural adaptation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    2024
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Complete CRM Integration</h3>
                    <p className="text-gray-600">Native connection with SuiteCRM and other major platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Smart Hotline Evolution" loading="lazy" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Methodology</h2>
            <p className="text-slate-500 text-lg">How we ensure your success, step by step</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {n: "1", title: "In-Depth Analysis", desc: "We study your business, your customers and your specific challenges"},
              {n: "2", title: "Total Customization", desc: "Scripts, tone and approach 100% adapted to your identity"},
              {n: "3", title: "Specialized Training", desc: "Our agents are trained on your sector and your processes"},
              {n: "4", title: "Launch & Optimization", desc: "Rapid deployment followed by continuous optimization based on data"}
            ].map(({n, title, desc}) => (
              <div key={n} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {n}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: LIGHT - TECHNOLOGY & INNOVATION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Technological Edge</h2>
            <p className="text-slate-500 text-lg">Innovation that makes the difference for your SME</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🤖", title: "Advanced Voice AI", desc: "Sophie understands context, accents and cultural nuances"},
              {icon: "🔗", title: "Simple Integrations", desc: "Direct connection with your tools: CRM, calendars, help desks"},
              {icon: "📊", title: "Real-time Analytics", desc: "Custom dashboards to track your performance"},
              {icon: "🛡️", title: "Solid Security", desc: "End-to-end encryption and compliance with current standards"},
              {icon: "🌐", title: "Redundant Infrastructure", desc: "99.9% availability with geo-distributed backups"},
              {icon: "📱", title: "Mobile First", desc: "iOS/Android apps to manage your service wherever you are"}
            ].map(({icon, title, desc}) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DARK - CLIENT IMPACT */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Impact On Your Business
            </h2>
            <p className="text-blue-200 text-lg">
              Concrete results our clients measure every day
            </p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {value: "70%", label: "Reduction in operational costs"},
              {value: "35%", label: "Increase in conversion rate"},
              {value: "50h/mo", label: "Time saved for core business"},
              {value: "95%", label: "Customer satisfaction rate"}
            ].map(({value, label}) => (
              <div key={label} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-blue-400">{value}</div>
                <div className="text-blue-200 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 8: LIGHT - FAQ */}
<section className="bg-slate-50 py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
<summary className="font-bold text-slate-900 cursor-pointer">What makes Smart Hotline different from other call centers?</summary>
<p className="mt-4 text-slate-600">We specialize in Quebec and French SMEs with native French-speaking agents who understand local accents and cultural nuances. Our agents are trained specifically for your industry, not generic scripts.</p>
</details>
<details className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
<summary className="font-bold text-slate-900 cursor-pointer">How quickly can you start handling our calls?</summary>
<p className="mt-4 text-slate-600">Most clients are operational within 5-10 business days. This includes agent training, script customization, and CRM integration. For urgent needs, we can expedite the process.</p>
</details>
<details className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
<summary className="font-bold text-slate-900 cursor-pointer">Do you offer contracts or is it month-to-month?</summary>
<p className="mt-4 text-slate-600">We offer flexible terms. Start with a 2-week trial, then choose from weekly packages (20h, 40h, 80h, 120h). No long-term lock-in required - we earn your business every month.</p>
</details>
<details className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-all">
<summary className="font-bold text-slate-900 cursor-pointer">How do you ensure data security and privacy?</summary>
<p className="mt-4 text-slate-600">We comply with GDPR, Quebec's Law 25, and use end-to-end encryption. All calls are recorded securely, and access is strictly controlled. We sign confidentiality agreements with every client.</p>
</details>
</div>
</div>
</section>

{/* SECTION 9: LIGHT - FINAL CTA */}
<section className="bg-white py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to write your success story?</h2>
<p className="text-slate-600 text-lg mb-8">Like our 500+ partner SMEs, discover what exceptional customer relationships can do for your business.</p>
<Link href="/en/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Start Your Transformation</Link>
</div>
</section>
    </>
  )
}
