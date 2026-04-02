'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': TargetIcon, 'title': 'Qualified Leads', 'desc': 'Precise targeting and qualification of each lead before transfer.'},
  {'icon': TrendingIcon, 'title': 'Conversion Scripts', 'desc': 'Scripts optimized by our experts to maximize results.'},
  {'icon': FolderIcon, 'title': 'Integrated CRM', 'desc': 'Every call recorded with notes, status and follow-up.'},
  {'icon': CalendarIcon, 'title': 'Appointment Setting', 'desc': 'Calendar filled with qualified and confirmed appointments.'},
  {'icon': AnalyticsIcon, 'title': 'Detailed KPIs', 'desc': 'Calls, contacts, leads, conversions, cost per lead.'},
  {'icon': GlobeIcon, 'title': 'Multi-channel', 'desc': 'Outbound calls combined with SMS and email for more reach.'},
]
const STEPS = [
  {'n': '1', 't': 'Target Definition', 'd': 'Market analysis and prospect profile creation.'},
  {'n': '2', 't': 'Script & Training', 'd': 'Custom script and training on your offer.'},
  {'n': '3', 't': 'Campaign Launch', 'd': 'Start calls according to your schedule.'},
  {'n': '4', 't': 'Reports & Optimization', 'd': 'Daily adjustments to maximize results.'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-emerald-600 text-emerald-600 font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all text-center">
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
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full mb-5">
                <TargetIcon className="w-4 h-4" /> Outbound Calls
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Multiply Your Leads<br/>with Our Agents
              </h1>
              <p className="text-lg text-slate-600 mb-8">Prospecting, telemarketing, appointment setting. Our expert agents turn your targets into clients with measurable results.</p>
              <CTAButtons slug="emission"/>
              <div className="flex flex-wrap gap-3">
                {['Qualified leads', 'CRM included', 'Optimized scripts', 'Daily reporting'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-emerald-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/images/telemarketing.jpg" alt="Outbound calling agent"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingIcon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div><p className="font-black text-sm">+40% more leads</p><p className="text-slate-500 text-xs">on average</p></div>
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
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-700" />
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
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-emerald-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
          <CTAButtons slug="emission"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
          </p>
        </div>
      </section>
    </>
  )
}
