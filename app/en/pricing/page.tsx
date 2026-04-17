'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { StarIcon } from '@/components/Icons'

function PricingSlider({
  title, subtitle, accentColor, children
}: {
  title: string, subtitle?: string, accentColor: string, children: React.ReactNode
}) {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
        {subtitle && <p className="text-slate-500">{subtitle}</p>}
        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

function PricingCard({
  name, desc, price, unit, popular, accent, ctaHref, features
}: {
  name: string, desc: string, price: string, unit: string,
  popular?: boolean, accent: string, ctaHref: string, features?: string[]
}) {
  return (
    <div className={`
      flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative
      ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'}
    `}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className={`${accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>Popular</span>
        </div>
      )}
      <h3 className="font-bold text-lg text-slate-900 mb-1">{name}</h3>
      <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{desc}</p>
      <div className="mb-1">
        <span className={`text-4xl font-extrabold ${accent.replace('bg-', 'text-')}`}>{price}</span>
      </div>
      <p className="text-slate-400 text-sm mb-5">/{unit}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="text-green-500 font-bold">&#10003;</span> {f}
            </li>
          ))}
        </ul>
      )}
      <Link href={ctaHref}
        className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors
        ${popular
          ? `${accent} text-white hover:opacity-90`
          : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}`
        }`}>
        Choose
      </Link>
    </div>
  )
}

export default function Pricing() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol
  const fmt = (n: number) => loading ? '...' : `${sym}${n}`
  const fmtDec = (n: number) => loading ? '...' : `${sym}${n.toFixed(2)}`

  return (
    <>
    {/* SECTION 1: HERO - Modern design with image */}
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[40%]">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              💰 Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
              20 to 40%<br/>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Cheaper Than Market</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prices automatically adjusted to your region. No hidden fees, no surprises.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-800 text-center shadow-xl">
                View Plans
              </Link>
              <Link href="/en/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 hover:text-white transition-all text-center">
                Get Custom Quote
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
              <img src={`${basePath}/images/pricing-hero.webp`} alt="Transparent pricing plans" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{maxHeight:'500px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* OUTBOUND */}
          <PricingSlider title="Outbound Calls" subtitle="Professional agents — billed per hour" accentColor="bg-blue-700">

            {/* Trial card */}
            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Trial Offer</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Starter</h3>
              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/week, 2 weeks</p>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
              </div>
              <p className="text-slate-400 text-sm mb-3">/hour</p>
              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
                OR: 1 week free — pay only 3 weeks
              </p>
              <Link href="/en/contact?plan=trial"
                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
                Start Trial
              </Link>
            </div>

            {[
              { name: "Starter", desc: "20h/week", i: 0, features: ["Dedicated agent", "Custom scripts", "Daily reports"] },
              { name: "Professional", desc: "40h/week", i: 1, popular: true, features: ["2 agents", "Integrated CRM", "Real-time reports"] },
              { name: "Business", desc: "80h/week", i: 2, features: ["4 agents", "Dedicated manager", "Guaranteed SLA"] },
              { name: "Enterprise", desc: "120h/week — 3 agents", i: 3, features: ["6 agents", "Account manager", "Volume discounts"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.outbound[i])} unit="hour"
                popular={popular} accent="bg-blue-700"
                ctaHref={`/en/contact?plan=outbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* AI AGENTS */}
          <PricingSlider
            title="Voice AI Agents"
            subtitle="Per-minute billing — 30% below market — 24/7 availability"
            accentColor="bg-violet-600">
            {[
              { name: "Starter", desc: "Up to 1,000 min/month", i: 0, features: ["Response < 2 sec", "Native English", "Message taking"] },
              { name: "Professional", desc: "Up to 3,000 min/month", i: 1, popular: true, features: ["All Starter +", "Appointment booking", "CRM integration"] },
              { name: "Business", desc: "Up to 8,000 min/month", i: 2, features: ["All Pro +", "Agent transfer", "Dashboard"] },
              { name: "Enterprise", desc: "Unlimited volume", i: 3, features: ["All Business +", "99.9% SLA", "Priority support"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmtDec(prices.ai_per_min[i])} unit="minute"
                popular={popular} accent="bg-violet-600"
                ctaHref={`/en/contact?plan=ai-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* INBOUND */}
          <PricingSlider title="Inbound Calls" subtitle="Monthly packages — dedicated agents" accentColor="bg-teal-600">
            {[
              { name: "Basic", desc: "Up to 500 calls/month", i: 0, features: ["24/7 reception", "Bilingual EN/FR", "Monthly reports"] },
              { name: "Advanced", desc: "Up to 1,500 calls/month", i: 1, popular: true, features: ["All Basic +", "Smart transfer", "Weekly reports"] },
              { name: "Premium", desc: "Up to 2,500 calls/month", i: 2, features: ["All Advanced +", "Dedicated agent", "Guaranteed SLA"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.inbound[i])} unit="month"
                popular={popular} accent="bg-teal-600"
                ctaHref={`/en/contact?plan=inbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
		</PricingSlider>

		{/* CRM */}
          <PricingSlider title="CRM & Lists" subtitle="Integrated SuiteCRM + prospecting lists" accentColor="bg-indigo-600">
            {[
              { name: "Starter", desc: "500 contacts/month", i: 0, features: ["SuiteCRM", "500 leads/month", "Email integration"] },
              { name: "Pro", desc: "2,000 contacts + lists", i: 1, popular: true, features: ["All Starter +", "B2B/B2C lists", "Automations"] },
              { name: "Enterprise", desc: "Unlimited + custom", i: 2, features: ["All Pro +", "Custom integrations", "Account manager"] },
            ].map(({ name, desc, i, popular, features }) => (
              <PricingCard key={name}
                name={name} desc={desc}
                price={fmt(prices.crm_monthly[i])} unit="month"
                popular={popular} accent="bg-indigo-600"
                ctaHref={`/en/contact?plan=crm-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

          {/* Custom */}
          <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-3">Need higher volume or a custom solution?</h3>
            <p className="text-white mb-8">We create personalized offers for large teams and specific needs.</p>
            <Link href="/en/contact?plan=custom"
              className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know before getting started</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How long to get started?', a: 'Setup takes 48h maximum after signing. We configure your scripts, train agents and test together before launch.' },
              { q: 'Is there a minimum commitment?', a: 'No. All our plans are commitment-free. You can modify or cancel anytime with 7 days notice.' },
              { q: 'How are calls billed?', a: 'Outbound calls: billed per hour actually used. Inbound calls: monthly package including call volume. AI agents: billed per minute.' },
              { q: 'What languages do you support?', a: 'Native English (US, Canada) and French. Our AI agents support both languages with regional accents.' },
              { q: 'Can I change plans during my subscription?', a: 'Absolutely. You can upgrade or downgrade anytime. Billing is adjusted pro-rata.' },
              { q: 'Is my data secure?', a: '100% GDPR compliant. Hosting in Canada/EU. End-to-end encryption. No data sold or shared.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">What Our Clients Say</h2>
            <p className="text-slate-500">Over 500 SMEs trust us</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: 'Unbeatable prices and impeccable service. ROI was visible from the first month.', name: 'John Smith', role: 'CEO, TechStart Montreal', av: 'JS' },
              { q: 'I reduced my costs by 40% compared to an in-house employee. And zero missed calls.', name: 'Michael Brown', role: 'Founder, Digital Agency NYC', av: 'MB' },
              { q: '2-week trial was convincing. The team perfectly understood our business.', name: 'Sarah Johnson', role: 'Director, Consulting Firm Boston', av: 'SJ' },
            ].map(({ q, name, role, av }) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-500">From initial call to deployment in 4 steps</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '1', t: 'Discovery Call', d: '30 min to understand your needs and goals' },
              { n: '2', t: 'Proposal', d: 'Customized quote within 24h with adapted pricing' },
              { n: '3', t: 'Configuration', d: 'Scripts, training and testing in 48h' },
              { n: '4', t: 'Launch', d: 'Your calls handled, real-time monitoring' },
            ].map(({ n, t, d }) => (
              <div key={n} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/en/contact" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
              Get Started Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Reduce Your Costs by 40%?</h2>
          <p className="text-white text-lg mb-8">Free 2-week trial. No commitment. Guaranteed results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Request a Free Quote
            </Link>
            <a href="tel:+15148190559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 514 819-0559
            </a>
          </div>
          <p className="text-slate-100 text-sm mt-8">Open 24/7 — Immediate response</p>
        </div>
      </section>
    </>
  )
}
