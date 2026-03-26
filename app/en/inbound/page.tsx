'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, GlobeIcon, FileIcon, ChartIcon, TransferIcon, BoltIcon, CheckIcon, UsersIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@/components/Icons'

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

const INDUSTRIES = [
  {'name': 'Medical & Healthcare', 'desc': 'Appointments, urgent calls, patient follow-ups'},
  {'name': 'Legal & Notary', 'desc': 'Client intake, scheduling, urgent matters'},
  {'name': 'Real Estate', 'desc': 'Property inquiries, viewing requests'},
  {'name': 'Trades & Services', 'desc': 'Emergency calls, quotes, scheduling'},
]

const TESTIMONIALS = [
  {'quote': 'We were missing 40% of calls. Now? Zero. The ROI was obvious within the first month.', 'author': 'Marie D.', 'role': 'Dental Clinic Manager'},
  {'quote': 'Professional, reliable, and our clients can\'t tell it\'s not our own team.', 'author': 'Thomas B.', 'role': 'Law Firm Partner'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-sky-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-sky-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-sky-600 text-sky-600 font-bold px-7 py-3.5 rounded-xl hover:bg-sky-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-sky-600 text-sky-600 font-bold px-7 py-3.5 rounded-xl hover:bg-sky-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* Section 1: Hero - Light */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 text-sm px-3 py-1 rounded-full mb-5">
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
                <img src="/smart-hotline-last/images/reception-hero.png" alt="Reception agents"
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

      {/* Section 2: Statistics - Dark */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Numbers That Speak</h2>
            <p className="text-slate-400">Real results from businesses like yours</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
              <p className="text-4xl lg:text-5xl font-black text-sky-400 mb-2">50K+</p>
              <p className="text-slate-400 text-sm">Calls handled monthly</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
              <p className="text-4xl lg:text-5xl font-black text-sky-400 mb-2">98%</p>
              <p className="text-slate-400 text-sm">Client satisfaction</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
              <p className="text-4xl lg:text-5xl font-black text-sky-400 mb-2">48h</p>
              <p className="text-slate-400 text-sm">Average setup time</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
              <p className="text-4xl lg:text-5xl font-black text-sky-400 mb-2">200+</p>
              <p className="text-slate-400 text-sm">Active clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Features - Light */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What's Included</h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({icon: Icon, title, desc}: any) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industries - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Built for Your Industry</h2>
              <p className="text-slate-600 mb-8">Every sector has its own rhythm. Our agents are trained to understand yours — from medical emergencies to legal intake.</p>
              <div className="space-y-4">
                {INDUSTRIES.map(({name, desc}) => (
                  <div key={name} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">{name}</h3>
                      <p className="text-slate-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-sky-50 to-slate-100 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">GDPR Compliant</h3>
                </div>
                <p className="text-slate-600 mb-6">All call recordings and client data are stored securely in Europe. Full audit trail available.</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-green-600" /> End-to-end encryption</li>
                  <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-green-600" /> 30-day data retention</li>
                  <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-green-600" /> Right to deletion on request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials - Light */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded"/>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(({quote, author, role}) => (
              <div key={author} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{author}</p>
                  <p className="text-slate-500 text-sm">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How It Works</h2>
          {STEPS.map(({n, t, d}: any) => (
            <div key={n} className="flex gap-5 mb-8 items-start">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: CTA - Dark */}
      <section className="bg-gradient-to-br from-slate-900 to-sky-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
          <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
          <CTAButtons slug="reception"/>
          <p className="text-white text-opacity-60 text-sm mt-4">
            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
          </p>
        </div>
      </section>

      {/* Section 8: FAQ - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Common Questions</h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded"/>
          </div>
          <div className="space-y-4">
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                How quickly can we get started?
                <span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">Most clients are live within 48 hours. Script writing and agent training happen in parallel to speed things up.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                Can I keep my current phone number?
                <span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">Absolutely. We simply forward your calls to our platform. No number change, no hassle for your clients.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                What happens after hours?
                <span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">Our night team handles calls directly. Urgent calls get routed based on your rules — we never leave a caller waiting.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-6 group">
              <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                Is there a minimum commitment?
                <span className="text-sky-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">No long-term contracts. Month-to-month billing, cancel anytime. The 2-week free trial lets you test the service risk-free.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
