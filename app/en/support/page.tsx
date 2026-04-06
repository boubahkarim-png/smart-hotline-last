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
  {q: "We receive questions about our products all day. Before, it was chaos in emails. Now, every request is properly tracked.", name: 'Catherine Rouleau', role: 'Customer Service Manager, Online Store QC', av: 'CR'},
  {q: "They fixed a 3-week problem in 48h. The fact that they speak proper French — that really helps with our clients.", name: 'Jean-François Poissant', role: 'Director, Financial Services MTL', av: 'JP'},
  {q: "Our clients are more satisfied. We see it in the comments. Support in French, it makes all the difference.", name: 'Martine Lévesque', role: 'Founder, Tech Support Quebec', av: 'ML'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-teal-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-teal-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-teal-600 text-teal-600 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-teal-600 text-teal-600 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
return (
<>
{/* HERO - Unified gradient background */}
<section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse"/>
Customer Support
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
5-Star Support<br/>
<span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">for Your SME</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
Turn your clients into ambassadors. Our agents handle tickets, emails, chat and calls with excellence and responsiveness.
</p>
<CTAButtons slug="support"/>
<div className="flex flex-wrap gap-3">
{['Multi-channel', 'Tickets & Email', 'Live Chat', 'WhatsApp Business'].map(b => (
<span key={b} className="flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md">
<CheckIcon className="w-5 h-5 text-teal-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/support-tech.webp`} alt="Professional customer support" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
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

<section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What&apos;s Included</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}: any, i: number) => (
              <div key={title} className={`bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all modern-box animate-delay-${(i+1)*100}`}>
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {STEPS.map(({n, t, d}: any, i: number) => (
              <div key={n} className={`text-center modern-box animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: STATS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
            <div className="modern-box animate-delay-100"><p className="text-4xl font-black text-teal-600">98%</p><p className="text-slate-500 text-sm mt-1">Client satisfaction</p></div>
            <div className="modern-box animate-delay-200"><p className="text-4xl font-black text-teal-600">&lt; 2h</p><p className="text-slate-500 text-sm mt-1">Response time</p></div>
            <div className="modern-box animate-delay-300"><p className="text-4xl font-black text-teal-600">50K+</p><p className="text-slate-500 text-sm mt-1">Tickets/month</p></div>
            <div className="modern-box animate-delay-400"><p className="text-4xl font-black text-teal-600">24/7</p><p className="text-slate-500 text-sm mt-1">Availability</p></div>
        </div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm modern-box animate-delay-${(i+1)*100}`}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed italic">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{t.av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
          <CTAButtons slug="support"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
          </p>
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
