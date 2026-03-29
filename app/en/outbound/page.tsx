'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, StarIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const FEATURES = [
  {icon: TargetIcon, title: 'Qualified Leads', desc: 'Precise targeting and qualification of each lead before transfer.'},
  {icon: TrendingIcon, title: 'Conversion Scripts', desc: 'Scripts optimized by our experts to maximize results.'},
  {icon: FolderIcon, title: 'Integrated CRM', desc: 'Every call recorded with notes, status and follow-up.'},
  {icon: CalendarIcon, title: 'Appointment Setting', desc: 'Calendar filled with qualified and confirmed appointments.'},
]

const TESTIMONIALS = [
  {q: "Our qualified appointments doubled in 2 months. The team really understands our industry.", name: 'Jean-François Lambert', role: 'Sales Director, TechPlus Solutions', av: 'JFL'},
  {q: "Lead quality is exceptional. We spend less time filtering and more time closing.", name: 'Marie-Chantal Dubois', role: 'Owner, Dubois Consulting', av: 'MCD'},
  {q: "Daily reporting lets us adjust strategy in real time. It's a real partnership.", name: 'Patrick Gagnon', role: 'CEO, Gagnon Strategies', av: 'PG'},
  {q: "We stopped Google ads for their service. Cost per lead is 3x cheaper and leads are actually qualified.", name: 'Stephane Olivier', role: 'Founder, Olivier & Associates', av: 'SO'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`} className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
          WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <TargetIcon className="w-5 h-5" /> Outbound Calls
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Multiply Your Leads<br/>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">with Our Agents</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prospecting, telemarketing, appointment setting. Our agents know the art of landing appointments — without scaring your prospects.</p>
              <CTAButtons slug="emission"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Qualified leads', 'CRM included', 'Optimized scripts', 'Daily reporting'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-emerald-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/telemarketing.jpg`} alt="Outbound calls" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">+40% Appointments</p>
                      <p className="text-slate-500 text-sm">on average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
            <p className="text-emerald-200 text-xl max-w-2xl mx-auto">Everything you need to multiply your qualified appointments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-emerald-200 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">98%</p>
              <p className="text-slate-600 mt-2 font-medium">Satisfaction Rate</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">5000+</p>
              <p className="text-slate-600 mt-2 font-medium">SMEs Supported</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">+40%</p>
              <p className="text-slate-600 mt-2 font-medium">More Appointments</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">24/7</p>
              <p className="text-slate-600 mt-2 font-medium">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {n: '1', t: 'Target Definition', d: "Market analysis and prospect profile creation"},
              {n: '2', t: 'Script & Training', d: "Custom script and training on your offer"},
              {n: '3', t: 'Campaign Launch', d: "Start calls according to your schedule"},
              {n: '4', t: 'Reports & Optimization', d: "Daily adjustments to maximize results"},
            ].map((step, i) => (
              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Why Trust Us?</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Our agents are trained to represent your business as if it were their own. Guaranteed results or we adjust.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Experienced bilingual agents',
                  'Daily reports with detailed KPIs',
                  'SME pricing — 40-60% cheaper than an employee',
                  'Cancel anytime — no long contracts',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
                    <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckIcon className="w-5 h-5"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/contact?service=emission" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                See a Demo
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-emerald-50">
                <h3 className="font-bold text-2xl text-slate-900 mb-6">Pricing Adapted to Your Growth</h3>
                <p className="text-slate-600 text-lg mb-4">Competitive pricing, no long-term commitment. You pay for what you use.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> No hidden fees</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> Cancel anytime</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-emerald-600"/> CRM and autodialer included</li>
                </ul>
                <Link href="/en/pricing" className="text-emerald-600 font-bold text-lg hover:underline flex items-center gap-2">
                  View all pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Multiply Your Leads?</h2>
          <p className="text-emerald-200 text-xl mb-12 max-w-2xl mx-auto">Free 2-week trial. No commitment. We start whenever you want.</p>
          <CTAButtons slug="emission"/>
          <p className="text-emerald-300 mt-8 text-lg">
            <Link href="/en/pricing" className="underline hover:text-white transition-colors">View pricing</Link>
            <span className="mx-3">·</span>
            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact us</Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 stagger-children">
            {[
              {q: "How long does a typical campaign take?", a: "Our campaigns are flexible based on your needs. We recommend a minimum of 3 months to see significant results, but you can adjust the duration at any time."},
              {q: "Can I target specific regions?", a: "Absolutely! We can target by city, region, province or even specific postal codes to maximize the relevance of your outbound calls."},
              {q: "How do I receive qualified leads?", a: "By SMS, email, or directly in your CRM — you choose. Leads are transmitted in real time with all necessary information."},
            ].map((faq, i) => (
              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/en/contact?service=emission" className="inline-block bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
