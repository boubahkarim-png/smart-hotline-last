'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { StarIcon } from '@/components/Icons'

function PricingSlider({ title, subtitle, accentColor, children }: { title: string, subtitle?: string, accentColor: string, children: React.ReactNode }) {
  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
        {subtitle && <p className="text-slate-500">{subtitle}</p>}
        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </div>
  )
}

function PricingCard({ name, desc, price, unit, popular, accent, ctaHref, features }: { name: string, desc: string, price: string, unit: string, popular?: boolean, accent: string, ctaHref: string, features?: string[] }) {
  return (
    <div className={` flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'} `}>
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
      <Link href={ctaHref} className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${popular ? `${accent} text-white hover:opacity-90` : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}` }`}>
        Choose
      </Link>
    </div>
  )
}

export default function Pricing() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol
  const fmt = (n: number) => `${sym}${n}`
  const fmtDec = (n: number) => `${sym}${n.toFixed(2)}`

  return (
    <>
      {/* SECTION 1: Hero - LIGHT with Image */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Transparent Pricing
              </h1>
              <p className="text-lg text-slate-600 mb-4">20 to 40% cheaper than market rates</p>
              <p className="text-slate-500 text-sm mb-6">Prices automatically adjusted to your region</p>
              <Link href="#pricing" className="bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-emerald-700 inline-block shadow-lg">
                View Pricing
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/pricing-hero.webp" alt="Smart Hotline Pricing" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pricing Sliders - LIGHT (bg-white implicit) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* OUTBOUND */}
<PricingSlider title="Outbound Calls" subtitle="Professional agents — more hours = better rate" accentColor="bg-emerald-600">
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
<Link href="/en/contact?plan=trial" className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
Start Trial
</Link>
</div>
{[
{ name: "Starter", desc: "20h/week", i: 0, features: ["Dedicated agent", "Custom scripts", "Daily reports"] },
{ name: "Pro", desc: "40h/week", i: 1, features: ["2 agents", "Integrated CRM", "Real-time reports"] },
{ name: "Business", desc: "80h/week", i: 2, popular: true, features: ["4 agents", "Dedicated manager", "Guaranteed SLA"] },
{ name: "Premium", desc: "120h/week", i: 3, features: ["6 agents", "Account manager", "Volume discounts"] },
{ name: "Enterprise", desc: "Unlimited", i: 4, features: ["Custom team", "Senior manager", "Annual contract"] },
].map(({ name, desc, i, popular, features }) => (
              <PricingCard
                key={name}
                name={name}
                desc={desc}
                price={fmt(prices.outbound[i])}
                unit="hour"
                popular={popular}
      accent="bg-emerald-600"
      ctaHref={`/en/contact?plan=outbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

{/* AI AGENTS */}
<PricingSlider title="Voice AI Agents" subtitle="Per-minute billing — more volume = better rate" accentColor="bg-violet-600">
{[
{ name: "Starter", desc: "500 min/month", i: 0, features: ["Response < 2 sec", "Native English", "Message taking"] },
{ name: "Pro", desc: "2,000 min/month", i: 1, features: ["All Starter +", "Appointment booking", "CRM integration"] },
{ name: "Business", desc: "5,000 min/month", i: 2, popular: true, features: ["All Pro +", "Agent transfer", "Dashboard"] },
{ name: "Premium", desc: "10,000 min/month", i: 3, features: ["All Business +", "99.9% SLA", "Priority support"] },
{ name: "Enterprise", desc: "Unlimited volume", i: 4, features: ["All Premium +", "Account manager", "Custom rate"] },
].map(({ name, desc, i, popular, features }) => (
              <PricingCard
                key={name}
                name={name}
                desc={desc}
                price={fmtDec(prices.ai_per_min[i])}
                unit="minute"
                popular={popular}
                accent="bg-violet-600"
                ctaHref={`/en/contact?plan=ai-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

{/* INBOUND */}
<PricingSlider title="Inbound Calls" subtitle="Monthly packages — more calls = better rate" accentColor="bg-sky-600">
{[
{ name: "Basic", desc: "300 calls/month", i: 0, features: ["24/7 reception", "Bilingual EN/FR", "Monthly reports"] },
{ name: "Standard", desc: "750 calls/month", i: 1, features: ["All Basic +", "Smart transfer", "Weekly reports"] },
{ name: "Pro", desc: "1,500 calls/month", i: 2, popular: true, features: ["All Standard +", "Dedicated agent", "Guaranteed SLA"] },
{ name: "Premium", desc: "3,000 calls/month", i: 3, features: ["All Pro +", "2 agents", "Priority routing"] },
{ name: "Enterprise", desc: "Unlimited", i: 4, features: ["Custom team", "Dedicated manager", "Annual contract"] },
].map(({ name, desc, i, popular, features }) => (
              <PricingCard
                key={name}
                name={name}
                desc={desc}
                price={fmt(prices.inbound[i])}
                unit="month"
                popular={popular}
      accent="bg-sky-600"
      ctaHref={`/en/contact?plan=inbound-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>

{/* CRM */}
<PricingSlider title="CRM & Lists" subtitle="Integrated SuiteCRM + prospecting lists — more contacts = better rate" accentColor="bg-purple-600">
{[
{ name: "Starter", desc: "500 contacts/month", i: 0, features: ["SuiteCRM", "500 leads/month", "Email integration"] },
{ name: "Pro", desc: "2,000 contacts + lists", i: 1, popular: true, features: ["All Starter +", "B2B/B2C lists", "Automations"] },
{ name: "Business", desc: "5,000 contacts", i: 2, features: ["All Pro +", "Custom integrations", "Account manager"] },
{ name: "Premium", desc: "15,000 contacts", i: 3, features: ["All Business +", "Full API", "Priority support"] },
{ name: "Enterprise", desc: "Unlimited + custom", i: 4, features: ["All Premium +", "Unlimited training", "Annual contract"] },
].map(({ name, desc, i, popular, features }) => (
              <PricingCard
                key={name}
                name={name}
                desc={desc}
                price={fmt(prices.crm[i])}
                unit="month"
                popular={popular}
      accent="bg-purple-600"
      ctaHref={`/en/contact?plan=crm-${name.toLowerCase()}`}
                features={features}
              />
            ))}
          </PricingSlider>
        </div>
      </section>

      {/* SECTION 3: FAQ - LIGHT (bg-slate-50) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know before getting started</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How long to get started?', a: 'Usually 48 hours. But honestly, it depends on you. Give us your scripts and info today, we could be live tomorrow. The longest part is often making the decision — and we get that.' },
              { q: 'Is there a minimum commitment?', a: 'Nope, zero. You can stop anytime with 7 days notice. Why? Because we know if it doesn\'t work out, you\'ll leave anyway. Might as well be upfront about it.' },
              { q: 'How does billing work?', a: 'Simple. Outbound: you pay for hours actually used. Inbound: monthly package. AI agents: per minute. No hidden fees, no surprises on the invoice.' },
              { q: 'What accents do you offer?', a: 'US (standard and regional), Canadian, British, Australian. For AI, it\'s your choice. For human agents, we match someone who fits your clientele.' },
              { q: 'Can I switch plans?', a: 'Yes, anytime. Up or down. Billing adjusts pro-rata. If you grow, we grow with you. If you slow down, we adapt.' },
              { q: 'Is my data secure?', a: 'Hosting in Canada (and EU for European clients). End-to-end encryption. GDPR compliant. We don\'t sell anything, don\'t share anything. Your data = your data.' },
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

      {/* SECTION 4: Testimonials - LIGHT (bg-white) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">What Our Clients Say</h2>
            <p className="text-slate-500">Over 500 SMEs trust us</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { q: 'I compared 3 call centers. You\'re the only one where agents actually understand what I do. And it shows when my clients call.', name: 'Sarah Mitchell', role: 'CEO, TechStart Montreal', av: 'SM' },
              { q: 'My accountant said: "You should hire a receptionist." I said no, took Smart Hotline. Result? 40% cheaper, and I can scale tomorrow if I want.', name: 'Michael Brown', role: 'Founder, Digital Agency NYC', av: 'MB' },
              { q: 'During the 2-week trial, they took 87 calls for me. I signed the contract on day 10. Didn\'t need more than that.', name: 'Jennifer Adams', role: 'Director, Consulting Firm Boston', av: 'JA' },
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

      {/* SECTION 5: How It Works - LIGHT (bg-slate-50) */}
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

      {/* SECTION 6: Custom Pricing CTA - DARK */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Need Higher Volume or a Custom Solution?</h2>
          <p className="text-blue-200 text-lg mb-8">We create tailored offers for large teams and specific needs. Have a particular project? Let's talk about it.</p>
          <Link href="/en/contact?plan=custom" className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
            Request a Custom Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-blue-300 text-sm mt-6">Response within 24h — no commitment</p>
        </div>
      </section>

      {/* SECTION 7: Final CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Cut Your Call Costs by 40%?</h2>
          <p className="text-blue-200 text-lg mb-8">2-week free trial. If it's not for you, no hard feelings. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Get a Free Quote
            </Link>
            <a href="tel:+15148190559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.045 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 514 819-0559
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-8">Open 24/7 — Immediate response</p>
        </div>
      </section>

      {/* SECTION 8: Our Commitments - LIGHT (bg-white) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Our Commitments</h2>
            <p className="text-slate-500">Why over 500 SMEs stay with us</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🛡️', t: 'Protected Data', d: 'Local hosting, E2E encryption, GDPR compliant. Your info stays on our secure servers.' },
              { icon: '⚡', t: 'Available 24/7/365', d: 'Your calls get answered even when you\'re sleeping. Weekends, holidays, 3am — we\'re there.' },
              { icon: '💰', t: 'Transparent Pricing', d: 'No hidden fees, no surprises. You know exactly what you\'re paying before signing anything.' },
              { icon: '🤝', t: 'Flexible Contract', d: 'Zero forced commitment. 7 days notice and you\'re free. We\'d rather keep you by choice, not by force.' },
            ].map(({ icon, t, d }) => (
              <div key={t} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-6">Questions? We respond in under 2 hours on average.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
                Contact Us
              </Link>
              <a href="mailto:contact@smarthotline.ca" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                contact@smarthotline.ca
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
