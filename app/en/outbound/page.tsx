'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, PhoneIcon, UsersIcon, BoltIcon, ShieldCheckIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

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
const INDUSTRIES = [
  {'name': 'Real Estate', 'result': 'Property viewings scheduled'},
  {'name': 'Insurance', 'result': 'Policy renewal calls'},
  {'name': 'SaaS & Tech', 'result': 'Demo requests generated'},
  {'name': 'Professional Services', 'result': 'Consultation bookings'},
  {'name': 'Healthcare', 'result': 'Patient follow-ups'},
]
const RESULTS = [
  {'value': '15K+', 'label': 'Calls per month'},
  {'value': '35%', 'label': 'Contact rate'},
  {'value': '12%', 'label': 'Conversion rate'},
  {'value': '48h', 'label': 'Campaign launch'},
]
const PROCESS = [
  {'title': 'Discovery Call', 'desc': 'We learn about your goals, target market, and what success looks like for you.'},
  {'title': 'Custom Strategy', 'desc': 'Tailored targeting, messaging, and agent training for your specific offer.'},
  {'title': 'Agent Assignment', 'desc': 'Dedicated agents trained on your product and equipped with your scripts.'},
  {'title': 'Go Live', 'desc': 'Campaigns launch with real-time tracking and daily performance updates.'},
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
      {/* Section 1: Hero - Light */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12">
			<div className="w-full lg:w-[40%]">
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
			<div className="w-full lg:w-[60%]">
              <div className="relative">
                <img src="/images/telemarketing.webp" alt="Outbound calling agent"
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

      {/* Section 2: Results Stats - Dark */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Results That Speak</h2>
            <p className="text-emerald-200">Real numbers from real campaigns</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RESULTS.map(({value, label}) => (
              <div key={label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-1">{value}</div>
                <div className="text-emerald-200 text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Features - Light */}
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

      {/* Section 4: How It Works - Light */}
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

 {/* Section 5: DARK - Industries */}
 <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 text-white py-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-black text-white mb-2">Industries We Serve</h2>
 <p className="text-emerald-200">Specialized campaigns for every sector</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
 {INDUSTRIES.map(({name, result}) => (
 <div key={name} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all text-center">
 <h3 className="font-bold text-white mb-1">{name}</h3>
 <p className="text-emerald-300 text-sm">{result}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

      {/* Section 6: Our Process - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Our Process</h2>
            <p className="text-slate-600">From first call to qualified lead</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({title, desc}, i) => (
              <div key={title} className="relative">
                <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA - Dark */}
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

      {/* Section 8: FAQ/Benefits - Light */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Why Choose Us</h2>
            <p className="text-slate-600">What makes our outbound different</p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BoltIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Fast Setup</h3>
                <p className="text-slate-500 text-sm">Your campaign goes live within 48 hours. No lengthy onboarding, no complicated setup. Just results.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UsersIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Dedicated Agents</h3>
                <p className="text-slate-500 text-sm">Your agents work exclusively on your campaign. They know your product, your market, your goals.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Quality Guarantee</h3>
                <p className="text-slate-500 text-sm">Every call is recorded and reviewed. You only pay for qualified leads that meet your criteria.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AnalyticsIcon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Full Transparency</h3>
                <p className="text-slate-500 text-sm">Real-time dashboard, daily reports, call recordings. You see everything, always.</p>
              </div>
            </div>
          </div>
</div>
</section>

{/* FAQ SECTION - LIGHT */}
<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
<p className="text-slate-600">Common questions about our outbound service</p>
<div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mt-4"/>
</div>
<div className="space-y-4">
<details className="bg-white rounded-2xl p-6 cursor-pointer group border border-slate-100">
<summary className="font-bold text-slate-900 flex justify-between items-center">
How do you qualify leads?
<span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
We use criteria defined together: budget, authority, need, timing. Each lead is validated before transfer to ensure quality.
</p>
</details>
<details className="bg-white rounded-2xl p-6 cursor-pointer group border border-slate-100">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Do you offer custom scripts?
<span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
Yes, our experts write scripts tailored to your offer and market. We test and optimize continuously for best results.
</p>
</details>
<details className="bg-white rounded-2xl p-6 cursor-pointer group border border-slate-100">
<summary className="font-bold text-slate-900 flex justify-between items-center">
How many calls per day?
<span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
One agent can make 50-80 calls per day. We adapt to your goals and processing capacity.
</p>
</details>
<details className="bg-white rounded-2xl p-6 cursor-pointer group border border-slate-100">
<summary className="font-bold text-slate-900 flex justify-between items-center">
Can I listen to the calls?
<span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">
Yes, all calls are recorded (with consent) and available in your CRM for replay. Full transparency is our standard.
</p>
</details>
</div>
</div>
</section>
<ServiceSchema name="Outbound Calls & Prospecting" description="Phone prospecting and telemarketing service with qualified leads and appointment setting" slug="outbound" offers={{ priceFrom: "3.00", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "How do you qualify leads?", answer: "We use criteria defined together: budget, authority, need, timing. Each lead is validated before transfer." },
  { question: "Do you offer custom scripts?", answer: "Yes, our experts write scripts tailored to your offer and market. We test and optimize continuously." },
  { question: "How many calls per day?", answer: "One agent can make 50-80 calls per day. We adapt to your goals and processing capacity." },
  { question: "Can I listen to the calls?", answer: "Yes, all calls are recorded (with consent) and available in your CRM for replay." }
]} />
</>
  )
}
