'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, GlobeIcon, FileIcon, ChartIcon, TransferIcon, BoltIcon, CheckIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': PhoneIcon, 'title': '24/7 Reception', 'desc': 'Your calls answered at all hours, weekends and holidays included.'},
  {'icon': GlobeIcon, 'title': 'Bilingual FR/EN', 'desc': 'French and English-speaking agents for all your clients.'},
  {'icon': FileIcon, 'title': 'Custom Scripts', 'desc': 'We adopt your tone, scripts and internal procedures.'},
  {'icon': ChartIcon, 'title': 'Detailed Reports', 'desc': 'Volume, duration, satisfaction — real-time dashboards.'},
  {'icon': TransferIcon, 'title': 'Smart Transfer', 'desc': 'Transfer to your team based on your priority rules.'},
  {'icon': BoltIcon, 'title': 'Quick Setup', 'desc': 'Operational in 48h. No infrastructure required.'},
]
const STEPS = [
  {'n': '1', 't': 'Needs Analysis', 'd': 'Free 30-min consultation to understand your business.'},
  {'n': '2', 't': 'Script Writing', 'd': 'Our experts create scripts that reflect your brand.'},
  {'n': '3', 't': 'Team Training', 'd': 'Dedicated agents trained on your sector and products.'},
  {'n': '4', 't': 'Go Live in 48h', 'd': 'Your calls handled. Daily reports sent.'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-800 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-blue-700 text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all text-center">
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
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Inbound Calls
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                24/7 Reception<br/>Zero Missed Calls
              </h1>
              <p className="text-lg text-slate-600 mb-8">Our agents answer on your behalf around the clock. Premium client experience, you focus on your business.</p>
              <CTAButtons slug="reception"/>
              <div className="flex flex-wrap gap-3">
                {['24/7 included', 'Bilingual FR/EN', '48h setup', 'Custom scripts'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-green-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/images/reception-hero.jpg" alt="Reception agents"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'380px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div><p className="font-black text-sm">98% satisfaction</p><p className="text-slate-500 text-xs">SME clients</p></div>
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
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-700" />
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
              <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
          <CTAButtons slug="reception"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
          </p>
        </div>
      </section>
    </>
  )
}
