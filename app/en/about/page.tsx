import Link from 'next/link'
import { StarIcon } from '@/components/Icons'
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
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">The Agency That Gives SMEs Enterprise-Grade Tools</h1>
              <p className="text-lg text-blue-100 mb-6">Founded in Montreal, Smart Hotline Agency believes every SME deserves great customer service — without the high costs of building an in-house team.</p>
              <Link href="/en/contact" className="bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 inline-block">Contact Us</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/images/about-hero.jpg" alt="Smart Hotline Team" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: DARK - MISSION & VALUES */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Our Mission & Values
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We believe customer relationships are the heart of every successful business. Our mission is to enable SMEs to deliver excellent customer experiences — without recruiting, training or managing in-house teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🎯", title: "Customer-Centric Approach", desc: "We put your customers at the center of everything we do"},
              {icon: "💬", title: "Authentic Communication", desc: "Our agents speak like your customers, with your tone and style"},
              {icon: "🔒", title: "Total Confidentiality", desc: "GDPR, Law 25 and highest security standards strictly respected"},
              {icon: "📈", title: "Measurable Results", desc: "Clear KPIs to track real impact on your business"},
              {icon: "🚀", title: "Continuous Innovation", desc: "Modern AI tools and regular service updates"},
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
      
      {/* SECTION 3: LIGHT - STATS & ACHIEVEMENTS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{n:"2018", l:"Founded in Montreal"},{n:"500+", l:"SME Clients Served"},{n:"98%", l:"Client Satisfaction Rate"},{n:"24/7", l:"Round-the-clock Support"}].map(({n,l}) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-600">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECTION 4: LIGHT - HOW WE WORK */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-slate-500 text-lg">How we deliver exceptional service, step by step</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {n: "1", title: "Needs Analysis", desc: "Free consultation to understand your specific requirements"},
              {n: "2", title: "Custom Configuration", desc: "Tailored scripts and setup to match your brand identity"},
              {n: "3", title: "Rapid Deployment", desc: "Service activated within 48 hours of agreement"},
              {n: "4", title: "Ongoing Optimization", desc: "Continuous improvement based on performance data and feedback"}
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
      
      {/* SECTION 5: LIGHT - TEAM & EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Expert Team</h2>
<p className="text-slate-600 mb-6">
Our success comes from combining experienced professionals with practical AI tools to deliver consistent quality.
</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    2018
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Founded in Montreal</h3>
                    <p className="text-gray-600">Started with a simple idea: help SMEs answer every call</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    2020
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">AI Integration</h3>
                    <p className="text-gray-600">Added our first AI agent to handle routine calls</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
                    2022
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Expansion</h3>
                    <p className="text-gray-600">Expanded services to serve SMEs across Canada and internationally</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    2024
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900">Full CRM Integration</h3>
                    <p className="text-gray-600">Direct connection with major CRM platforms for smooth operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Smart Hotline Team Collaboration" loading="lazy" className="rounded-2xl shadow-xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 6: LIGHT - TECHNOLOGY & INNOVATION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Technology Edge</h2>
            <p className="text-slate-500 text-lg">Innovation that makes the difference for your SME</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🤖", title: "Advanced Voice AI", desc: "Sophie understands context, accents and cultural nuances"},
              {icon: "🔗", title: "Simple Integrations", desc: "Direct connection with your existing tools: CRM, calendars, help desks"},
              {icon: "📊", title: "Real-time Analytics", desc: "Custom dashboards to monitor your performance metrics"},
              {icon: "🛡️", title: "Strong Security", desc: "End-to-end encryption and compliance with industry standards"},
              {icon: "🌐", title: "Redundant Infrastructure", desc: "99.9% uptime with geographically distributed backups"},
              {icon: "📱", title: "Mobile-First Access", desc: "iOS/Android apps to manage your service anywhere"}
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
      
      {/* SECTION 7: DARK - CLIENT IMPACT & TESTIMONIALS */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-blue-200 text-lg">
              Hear directly from our clients about the impact we've made on their businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
{q: "Smart Hotline made us look bigger. Truly impressive service for our SMB.", name: 'Marc Lefebvre', role: 'Founder, TechInnov', av: 'ML' },
    {q: "Incredible ROI. No missed opportunities since we started working together.", name: 'Sophie Dubois', role: 'Director, Accounting Firm', av: 'SD' },
    {q: "One of the best investments. Total call management and qualified leads.", name: 'Jean-Pierre Tremblay', role: 'Owner, Restaurant Le Gourmet', av: 'JT' },
    {q: "Their team understood our industry in just 2 weeks. Tripled our appointments without increasing costs.", name: 'François Martel', role: 'Sales Director, Quartier Realty', av: 'FM' }
  ].map(({q, name, role, av}) => (
              <div key={name} className="text-center">
                <div className="flex gap-0.5 mb-4">
                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-blue-200 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-300 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
            {[
              {value: "70%", label: "Operational Cost Reduction"},
              {value: "35%", label: "Conversion Rate Increase"},
              {value: "50h/mo", label: "Time Saved for Core Business"},
              {value: "95%", label: "Client Satisfaction Score"}
            ].map(({value, label}) => (
              <div key={label} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-blue-400">{value}</div>
                <div className="text-blue-200 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 8: LIGHT - FINAL CALL TO ACTION */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to never miss a call?</h2>
          <p className="text-slate-600 text-lg mb-8">Get started in 48 hours. No long-term commitment. We begin when you're ready.</p>
          <Link href="/en/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block">Get Started Now</Link>
        </div>
      </section>
    </>
  )
}
