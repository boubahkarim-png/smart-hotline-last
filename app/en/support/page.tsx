'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, MailIcon, ChatIcon, TicketIcon, MobileIcon, AnalyticsIcon, CheckIcon, HeadphonesIcon, StarIcon, UsersIcon, ClockIcon, ShieldCheckIcon, BoltIcon } from '@/components/Icons'

const FEATURES = [
  {icon: PhoneIcon, title: 'Phone Support', desc: 'Inbound calls, escalation, proactive callbacks.'},
  {icon: MailIcon, title: 'Email Management', desc: 'Responses within 2h in your name, personalized tone.'},
  {icon: ChatIcon, title: 'Live Chat', desc: 'Integration with Tawk.to, Intercom, Zendesk.'},
  {icon: TicketIcon, title: 'Ticket Management', desc: 'Opening, tracking, resolution and systematic closure.'},
  {icon: MobileIcon, title: 'WhatsApp Business', desc: 'Support via WhatsApp for a modern experience.'},
  {icon: AnalyticsIcon, title: 'CSAT Reports', desc: 'Customer satisfaction score and monthly NPS.'},
]
const STEPS = [
  {n: '1', t: 'Current Support Audit', d: 'Analysis of channels, volumes and friction points.'},
  {n: '2', t: 'Tool Configuration', d: 'Integration of your existing helpdesk or creation.'},
  {n: '3', t: 'Team Training', d: 'Agents trained on your products, policies and brand tone.'},
  {n: '4', t: 'Continuous Quality Follow-up', d: 'CSAT monitoring, coaching, weekly reports.'},
]
const METRICS = [
  {v: '98%', l: 'Satisfaction Rate', Icon: StarIcon},
  {v: '< 4h', l: 'Average Resolution', Icon: ClockIcon},
  {v: '50+', l: 'Trusted SMEs', Icon: UsersIcon},
]
const TESTIMONIALS = [
  {quote: 'Our response time dropped from 24h to under 4h. Clients are impressed.', author: 'Marie L.', role: 'E-commerce Founder'},
  {quote: 'They learned our product in a week. Feels like an in-house team.', author: 'Thomas B.', role: 'SaaS Director'},
  {quote: 'Finally a partner who understands French SME reality.', author: 'Sophie M.', role: 'Agency CEO'},
]
const FAQS = [
  {q: 'What channels do you cover?', a: 'Phone, email, live chat, WhatsApp Business, and social media. We adapt to where your customers are.'},
  {q: 'How fast can you start?', a: 'After the audit, we can be live within 5 business days. Training your team on your products takes another week.'},
  {q: 'Do you work in English?', a: 'Yes, our agents are fluent in English and French. We can also add other languages on request.'},
  {q: 'What about data security?', a: 'We follow strict data protection protocols. All agents sign NDAs, and we use encrypted channels for all communications.'},
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
      {/* 1. Hero - Light */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full mb-5">
                <HeadphonesIcon className="w-4 h-4" /> Customer Support
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                5-Star Support<br/>for Your SME
              </h1>
              <p className="text-lg text-slate-600 mb-8">Turn your clients into ambassadors. Our agents handle tickets, emails, chat and calls with excellence and responsiveness.</p>
              <CTAButtons slug="support"/>
              <div className="flex flex-wrap gap-3">
                {['Multi-channel', 'Tickets & Email', 'Live Chat', 'WhatsApp Business'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-teal-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/support-tech.jpg" alt="Professional customer support"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <HeadphonesIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div><p className="font-black text-sm">{"< 4h resolution"}</p><p className="text-slate-500 text-xs">average time</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metrics - Dark */}
      <section className="bg-gradient-to-r from-slate-900 to-teal-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            {METRICS.map(({v, l, Icon}) => (
              <div key={l} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-teal-400" />
                </div>
                <p className="text-4xl font-black mb-1">{v}</p>
                <p className="text-white/70 text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features - Light */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What's Included</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
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

      {/* 4. How It Works - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How It Works</h2>
          {STEPS.map(({n, t, d}: any) => (
            <div key={n} className="flex gap-5 mb-8 items-start">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us - Light */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Why SMEs Trust Us</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {Icon: BoltIcon, title: 'Fast Setup', desc: 'Live in under 2 weeks. No lengthy onboarding.'},
              {Icon: UsersIcon, title: 'Dedicated Team', desc: 'Same agents every day. They learn your business.'},
              {Icon: ShieldCheckIcon, title: 'Data Secure', desc: 'NDAs, encrypted channels, GDPR compliant.'},
              {Icon: AnalyticsIcon, title: 'Full Visibility', desc: 'Weekly reports, real-time dashboards, CSAT scores.'},
            ].map(({Icon, title, desc}) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({quote, author, role}) => (
              <div key={author} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-4 h-4 text-amber-400" />)}
                </div>
                <p className="text-slate-700 italic mb-4">"{quote}"</p>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-bold text-slate-900 text-sm">{author}</p>
                  <p className="text-slate-500 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ - Dark */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-2">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded"/>
          </div>
          <div className="space-y-4">
            {FAQS.map(({q, a}) => (
              <div key={q} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="font-bold text-white mb-2">{q}</h3>
                <p className="text-white/70 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA - Light */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-3">Ready to Upgrade Your Support?</h2>
          <p className="text-slate-600 mb-8">Start your free 2-week trial today. No commitment, no credit card required.</p>
          <CTAButtons slug="support"/>
          <p className="text-slate-500 text-sm mt-4">
            Questions? <Link href="/en/contact" className="text-teal-600 hover:underline">Contact our team</Link> or check our <Link href="/en/pricing" className="text-teal-600 hover:underline">pricing page</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
