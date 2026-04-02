'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, MailIcon, ChatIcon, TicketIcon, MobileIcon, AnalyticsIcon, CheckIcon, HeadphonesIcon } from '@/components/Icons'

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
    </>
  )
}
