'use client'
import basePath from '@/lib/basePath'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CheckIcon } from '@/components/Icons'

const TIERS_4 = [
  { name: 'Starter', desc: 'To get started', badge: null },
  { name: 'Pro', desc: 'To grow', badge: 'Popular' },
  { name: 'Business', desc: 'To scale', badge: null },
  { name: 'Enterprise', desc: 'Unlimited', badge: 'Best Value' },
]

const OUTBOUND_TIERS = [
  { name: 'Trial', hours: '20h/week', i: -1, isTrial: true },
  { name: 'Starter', hours: '20h/week', i: 0 },
  { name: 'Pro', hours: '40h/week', i: 1 },
  { name: 'Business', hours: '80h/week', i: 2, popular: true },
  { name: 'Premium', hours: '120h/week', i: 3 },
  { name: 'Enterprise', hours: 'Unlimited', i: 4 },
]

function PricingSlider({ children, title }: { children: React.ReactNode; title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 280
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative">
      <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 text-center">{title}</h2>
      <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
<button
onClick={() => scroll('left')}
aria-label="Scroll left"
className={`w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
disabled={!canScrollLeft}
>
<svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
</button>
      </div>
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
<button
onClick={() => scroll('right')}
aria-label="Scroll right"
className={`w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'}`}
disabled={!canScrollRight}
>
<svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
</button>
      </div>
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-4 px-2 lg:px-16 scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Pricing() {
  const { prices, loading } = useGeo()
  const sym = prices.symbol
  const fmt = (n: number) => loading ? '...' : `${sym}${n}`

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-slow-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-slow-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Transparent Pricing
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
                Prices That<br/>
                <span className="animated-gradient-text">Respect Your Growth</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                No hidden fees. No surprises. Clear packages per service, adapted to your country.
              </p>
              <div className="flex flex-wrap gap-3">
                {['No commitment', 'Cancel anytime', 'CRM included', 'FR/EN Support'].map((b, i) => (
                  <span key={b} className="flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md">
                    <CheckIcon className="w-5 h-5 text-green-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative float-card">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
                <img src={`${basePath}/images/pricing-hero.webp`} alt="Smart Hotline Pricing" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{maxHeight:'450px', objectFit:'cover'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTBOUND CALLS - HOURLY RATE */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Outbound Calls
            </span>
          </div>
          <PricingSlider title="Phone Prospecting - Hourly Rate (CRM + Autodialer included)">
            {OUTBOUND_TIERS.map((tier, idx) => (
              <div key={tier.name} className={`flex-shrink-0 w-72 bg-white rounded-2xl p-6 snap-start ${tier.isTrial ? 'border-2 border-amber-400 bg-amber-50' : tier.popular ? 'border-2 border-emerald-500 shadow-2xl' : 'border border-slate-200 shadow-lg'}`}>
                {tier.isTrial ? (
                  <div className="mb-4">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">2-week Trial</span>
                  </div>
                ) : tier.popular && (
                  <div className="mb-4">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{tier.hours}</p>
                <div className="mb-2">
                  <span className="text-3xl font-black text-emerald-600">
                    {tier.isTrial ? fmt(prices.outbound_trial) : fmt(prices.outbound[tier.i])}
                  </span>
                  <span className="text-slate-500">/hour</span>
                </div>
                {tier.isTrial && (
                  <p className="text-amber-700 text-sm font-semibold mb-4">OR 1 week free</p>
                )}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Dedicated agent</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> CRM with autodialer</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Answering machine detection</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Dedicated phone number</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Free B2B/B2C lists</li>
                  {!tier.isTrial && tier.i > 0 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Daily reports</li>}
                  {!tier.isTrial && tier.i > 1 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-emerald-600" /> Dedicated manager</li>}
                </ul>
                <Link href={`/en/contact?service=outbound&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3 px-4 rounded-xl font-bold ${tier.isTrial ? 'bg-amber-500 text-white hover:bg-amber-600' : tier.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'}`}>
                  {tier.isTrial ? 'Try Now' : 'Choose'}
                </Link>
              </div>
            ))}
          </PricingSlider>
        </div>
      </section>

      {/* AI VOICE AGENTS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              AI Voice Agents
            </span>
          </div>
          <PricingSlider title="Sophie, Your AI Receptionist">
            {TIERS_4.map((tier, i) => (
              <div key={tier.name} className={`flex-shrink-0 w-72 bg-white rounded-2xl p-6 snap-start ${tier.badge === 'Popular' ? 'border-2 border-violet-500 shadow-2xl' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="mb-4">
                    <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-3xl font-black text-violet-600">{fmt(prices.ai_monthly[i])}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-4">{loading ? '...' : `${prices.ai_minutes[i].toLocaleString()} minutes included`}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> Response &lt; 2 seconds</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> Native French</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> Message taking</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> Appointment booking</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> Human transfer</li>
                  {i > 0 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> CRM integration</li>}
                  {i > 2 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-violet-600" /> 99.9% SLA</li>}
                </ul>
                <Link href={`/en/contact?service=ai&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3 px-4 rounded-xl font-bold ${tier.badge === 'Popular' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </PricingSlider>
          <p className="text-center text-slate-500 mt-8">
            Extra minutes: <span className="font-semibold">{fmt(prices.ai_per_min[0])}/min</span> (Starter) to <span className="font-semibold">{fmt(prices.ai_per_min[3])}/min</span> (Enterprise)
          </p>
        </div>
      </section>

      {/* INBOUND RECEPTION */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              24/7 Reception
            </span>
          </div>
          <PricingSlider title="Inbound Calls">
            {TIERS_4.map((tier, i) => (
              <div key={tier.name} className={`flex-shrink-0 w-72 bg-white rounded-2xl p-6 snap-start ${tier.badge === 'Popular' ? 'border-2 border-sky-500 shadow-2xl' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="mb-4">
                    <span className="bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full">{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-3xl font-black text-sky-600">{fmt(prices.inbound[i])}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-4">{loading ? '...' : `${prices.inbound_calls[i]} calls/month included`}</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> 24/7 reception</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> Bilingual FR/EN</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> Under 3 rings</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> Real-time messages</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> Dedicated agent</li>
                  {i > 0 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> Weekly report</li>}
                  {i > 2 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-sky-600" /> 99.9% SLA</li>}
                </ul>
                <Link href={`/en/contact?service=reception&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3 px-4 rounded-xl font-bold ${tier.badge === 'Popular' ? 'bg-sky-600 text-white hover:bg-sky-700' : 'border-2 border-sky-600 text-sky-600 hover:bg-sky-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </PricingSlider>
          <p className="text-center text-slate-500 mt-8">
            Extra calls: <span className="font-semibold">{fmt(prices.inbound_per_call[0])}/call</span> (Starter) to <span className="font-semibold">{fmt(prices.inbound_per_call[3])}/call</span> (Enterprise)
          </p>
        </div>
      </section>

      {/* CRM */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              CRM & Lists
            </span>
          </div>
          <PricingSlider title="SuiteCRM + B2B/B2C Lists">
            {TIERS_4.map((tier, i) => (
              <div key={tier.name} className={`flex-shrink-0 w-72 bg-white rounded-2xl p-6 snap-start ${tier.badge === 'Popular' ? 'border-2 border-purple-500 shadow-2xl' : 'border border-slate-200 shadow-lg'}`}>
                {tier.badge && (
                  <div className="mb-4">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">{tier.badge}</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-slate-900 mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{tier.desc}</p>
                <div className="mb-2">
                  <span className="text-3xl font-black text-purple-600">{fmt(prices.crm_monthly[i])}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="text-slate-600 font-semibold mb-1">{loading ? '...' : `${prices.crm_contacts[i].toLocaleString()} contacts included`}</p>
                <p className="text-emerald-600 text-sm font-semibold mb-4">Free setup</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> Hosted SuiteCRM</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> Training included</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> FR support</li>
                  <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> Data import</li>
                  {i > 0 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> B2B/B2C lists</li>}
                  {i > 1 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> Automations</li>}
                  {i > 2 && <li className="flex items-center gap-2 text-slate-600"><CheckIcon className="w-4 h-4 text-purple-600" /> Full API</li>}
                </ul>
                <Link href={`/en/contact?service=crm&plan=${tier.name.toLowerCase()}`} className={`block text-center py-3 px-4 rounded-xl font-bold ${tier.badge === 'Popular' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </PricingSlider>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is there a minimum commitment?', a: 'No commitment. Cancel with 7 days notice.' },
              { q: 'Is CRM really included?', a: 'Yes! SuiteCRM with autodialer, answering machine detection, dedicated number, and free B2B/B2C lists for all outbound packages.' },
              { q: 'Can I change plans?', a: 'Yes, anytime. Prorated billing.' },
              { q: 'What accents are available?', a: 'Quebec, France, Belgium, Switzerland. Configurable for AI, assigned based on your clientele for agents.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-white transition-colors">
                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
                  <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 animated-gradient-text">Not sure which plan to choose?</h2>
          <p className="text-sky-200 text-lg mb-8">Free 30-minute consultation.</p>
          <Link href="/en/contact" className="inline-block bg-white text-sky-700 font-bold px-10 py-4 rounded-2xl hover:bg-sky-50 transition-all shadow-xl">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
