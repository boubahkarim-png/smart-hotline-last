'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, MailIcon, ChatIcon, TicketIcon, MobileIcon, AnalyticsIcon, CheckIcon, HeadphonesIcon, StarIcon, ClockIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const FEATURES = [
  {'icon': PhoneIcon, 'title': 'Phone Support', 'desc': 'Inbound calls, escalation, proactive callbacks.'},
  {'icon': MailIcon, 'title': 'Email Management', 'desc': 'Responses within 2h in your name, personalized tone.'},
  {'icon': ChatIcon, 'title': 'Live Chat', 'desc': 'Integration with Tawk.to, Intercom, Zendesk.'},
  {'icon': TicketIcon, 'title': 'Ticket Management', 'desc': 'Opening, tracking, resolution and systematic closure.'},
  {'icon': MobileIcon, 'title': 'WhatsApp Business', 'desc': 'Support via WhatsApp for a modern experience.'},
  {'icon': AnalyticsIcon, 'title': 'CSAT Reports', 'desc': 'Customer satisfaction score and monthly NPS.'},
]
const STEPS = [
  {'n': '1', 't': 'Current Support Audit', 'd': 'Analysis of channels, volumes and friction points.'},
  {'n': '2', 't': 'Tool Configuration', 'd': 'Integration of your existing helpdesk or creation.'},
  {'n': '3', 't': 'Team Training', 'd': 'Agents trained on your products, policies and brand tone.'},
  {'n': '4', 't': 'Continuous Quality Follow-up', 'd': 'CSAT monitoring, coaching, weekly reports.'},
]

const TESTIMONIALS = [
{q: "We receive questions about our products all day. Before, it was chaos in emails. Now, every request is properly tracked.", name: 'Catherine Rouleau', role: 'Customer Service Manager, Online Store QC', img: '/images/testimonial-1.jpg'},
{q: "They fixed a 3-week problem in 48h. The fact that they speak proper French — that really helps with our clients.", name: 'Jean-François Poissant', role: 'Director, Financial Services MTL', img: '/images/testimonial-2.jpg'},
{q: "Our clients are more satisfied. We see it in the comments. Support in French, it makes all the difference.", name: 'Martine Lévesque', role: 'Founder, Tech Support Quebec', img: '/images/testimonial-3.jpg'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`} className="bg-teal-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-teal-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: LIGHT - Hero */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse"/>
                Customer Support
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                5-Star Support<br/>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">for Your SME</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Turn your clients into ambassadors. Our agents handle tickets, emails, chat and calls with excellence and responsiveness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/en/contact?service=support" className="bg-teal-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-teal-700 text-center shadow-lg">
                  Free Demo
                </Link>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-teal-600 text-teal-600 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-600 hover:text-white transition-all text-center">
                  💬 WhatsApp 24/7
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Multi-channel', 'Tickets & Email', 'Live Chat', 'WhatsApp Business'].map(b => (
                  <span key={b} className="flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/support-tech.webp`} alt="Professional customer support" className="relative rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <HeadphonesIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">{"< 4h resolution"}</p>
                      <p className="text-slate-500 text-sm">average time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - Features */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">What&apos;s Included</h2>
            <p className="text-teal-200 text-lg max-w-2xl mx-auto">Complete multichannel support for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}: any, i: number) => (
              <div key={title} className={`bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all modern-box animate-delay-${(i+1)*100}`}>
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                <p className="text-teal-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - Stats */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
          <div className="modern-box animate-delay-100"><p className="text-4xl font-black text-teal-600">98%</p><p className="text-slate-500 text-sm mt-1">Client satisfaction</p></div>
          <div className="modern-box animate-delay-200"><p className="text-4xl font-black text-teal-600">&lt; 2h</p><p className="text-slate-500 text-sm mt-1">Response time</p></div>
          <div className="modern-box animate-delay-300"><p className="text-4xl font-black text-teal-600">50K+</p><p className="text-slate-500 text-sm mt-1">Tickets/month</p></div>
          <div className="modern-box animate-delay-400"><p className="text-4xl font-black text-teal-600">24/7</p><p className="text-slate-500 text-sm mt-1">Availability</p></div>
        </div>
      </section>

      {/* SECTION 4: DARK - How it works */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">How It Works</h2>
            <p className="text-slate-300 text-lg">4 steps to transform your customer support</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {STEPS.map(({n, t, d}: any, i: number) => (
              <div key={n} className={`text-center modern-box animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-lg mb-2">{t}</h3>
                <p className="text-slate-300 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - Value proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">Why Outsource Your Support?</h2>
              <p className="text-slate-600 text-lg mb-6">A satisfied client comes back. A frustrated one speaks ill of you. We ensure every interaction goes well.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Team trained on your products</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Responses in French or English</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Smart escalation to your team</li>
                <li className="flex items-center gap-3 text-slate-700"><span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Weekly trend reports</li>
              </ul>
              <Link href="/en/contact?service=support" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors">See a demo →</Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Typical Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> +40% client satisfaction</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> -60% response time</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> Team freed for sales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK - Testimonials AUTO-SLIDE */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">What Our Clients Say</h2>
            <p className="text-blue-200 text-lg">Real results for businesses like yours</p>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 min-w-[320px] max-w-[320px] flex-shrink-0">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-blue-100 mb-5 leading-relaxed italic">"{t.q}"</p>
      <div className="flex items-center gap-3">
        <img src={basePath + t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover shadow-lg" />
        <div>
        <p className="font-bold text-white text-sm">{t.name}</p>
        <p className="text-blue-200 text-xs">{t.role}</p>
        </div>
      </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DARK - CTA */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Improve Your Support?</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">More satisfied clients, less stress for your team. Let&apos;s start together.</p>
          <CTAButtons slug="support"/>
          <p className="text-teal-200 text-sm mt-6"><Link href="/en/pricing" className="underline hover:text-white">View pricing</Link> · <Link href="/en/contact" className="underline hover:text-white">Contact us</Link></p>
        </div>
      </section>

      {/* SECTION 8: LIGHT - FAQ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">What channels do you support?</summary><p className="text-slate-600 mt-2">Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized.</p></details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How do you handle escalations?</summary><p className="text-slate-600 mt-2">We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context.</p></details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How long for team training?</summary><p className="text-slate-600 mt-2">About 1 week. We learn your products, processes, and how you talk to customers.</p></details>
          </div>
          <div className="text-center mt-8">
            <Link href="/en/contact?service=support" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700">Get Started Now</Link>
          </div>
        </div>
      </section>

      <ServiceSchema name="Multichannel Customer Support" description="Multichannel customer support - phone, email, chat, WhatsApp with dedicated team" slug="support" offers={{ priceFrom: "2.00", priceCurrency: "CAD" }} />
      <FAQSchema faqs={[
        { question: "What channels do you support?", answer: "Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized." },
        { question: "How do you handle escalations?", answer: "We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context." },
        { question: "How long for team training?", answer: "About 1 week. We learn your products, processes, and how you talk to customers." },
        { question: "Do you offer 24/7 service?", answer: "Yes, our team is available 24/7 to answer your customers, even on holidays." }
      ]} />
    </>
  )
}
