     1|'use client'

export const metadata = {
  title: "Smart Hotline | Call Center Pricing for SMBs | From $11/hr",
  description: "Transparent call center pricing for SMBs. From $11/hr. Free 2-week trial. Flexible plans 20h to 120h/week. CAD, EUR, USD, CHF accepted.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { StarIcon } from '@/components/Icons'
     6|
     7|function PricingSlider({
     8|  title, subtitle, accentColor, children
     9|}: {
    10|  title: string, subtitle?: string, accentColor: string, children: React.ReactNode
    11|}) {
    12|  return (
    13|    <div className="mb-20">
    14|      <div className="text-center mb-10">
    15|        <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    16|        {subtitle && <p className="text-slate-500">{subtitle}</p>}
    17|        <div className={`w-16 h-1 ${accentColor} mx-auto rounded mt-3`}/>
    18|      </div>
    19|      <div className="relative">
    20|        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1
    21|          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    22|          {children}
    23|        </div>
    24|      </div>
    25|    </div>
    26|  )
    27|}
    28|
    29|function PricingCard({
    30|  name, desc, price, unit, popular, accent, ctaHref, features
    31|}: {
    32|  name: string, desc: string, price: string, unit: string,
    33|  popular?: boolean, accent: string, ctaHref: string, features?: string[]
    34|}) {
    35|  return (
    36|    <div className={`
    37|      flex-shrink-0 w-72 snap-start bg-white rounded-2xl p-6 relative
    38|      ${popular ? `border-2 ${accent.replace('bg-', 'border-')} shadow-xl` : 'border border-slate-200 shadow-sm'}
    39|    `}>
    40|      {popular && (
    41|        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
    42|          <span className={`${accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>Popular</span>
    43|        </div>
    44|      )}
    45|      <h3 className="font-bold text-lg text-slate-900 mb-1">{name}</h3>
    46|      <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{desc}</p>
    47|      <div className="mb-1">
    48|        <span className={`text-4xl font-extrabold ${accent.replace('bg-', 'text-')}`}>{price}</span>
    49|      </div>
    50|      <p className="text-slate-400 text-sm mb-5">/{unit}</p>
    51|      {features && (
    52|        <ul className="space-y-2 mb-6">
    53|          {features.map(f => (
    54|            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
    55|              <span className="text-green-500 font-bold">&#10003;</span> {f}
    56|            </li>
    57|          ))}
    58|        </ul>
    59|      )}
    60|      <Link href={ctaHref}
    61|        className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors
    62|        ${popular
    63|          ? `${accent} text-white hover:opacity-90`
    64|          : `border-2 ${accent.replace('bg-', 'border-')} ${accent.replace('bg-', 'text-')} hover:${accent.replace(/bg-(\w+)-\d+/, 'bg-$1-50')}`
    65|        }`}>
    66|        Choose
    67|      </Link>
    68|    </div>
    69|  )
    70|}
    71|
    72|export default function Pricing() {
    73|  const { prices, loading } = useGeo()
    74|  const sym = prices.symbol
    75|  const fmt = (n: number) => loading ? '...' : `${sym}${n}`
    76|  const fmtDec = (n: number) => loading ? '...' : `${sym}${n.toFixed(2)}`
    77|
    78|  return (
    79|    <>
    80|    {/* SECTION 1: HERO - Modern design with image */}
    81|    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    82|      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    83|        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    84|          <div className="w-full lg:w-[40%]">
    85|            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
    86|              💰 Transparent Pricing
    87|            </span>
    88|            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    89|              20 to 40%<br/>
    90|              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Cheaper Than Market</span>
    91|            </h1>
    92|            <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prices automatically adjusted to your region. No hidden fees, no surprises.</p>
    93|            <div className="flex flex-col sm:flex-row gap-4">
    94|              <Link href="#pricing" className="bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-800 text-center shadow-xl">
    95|                View Plans
    96|              </Link>
    97|              <Link href="/en/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 hover:text-white transition-all text-center">
    98|                Get Custom Quote
    99|              </Link>
   100|            </div>
   101|          </div>
   102|          <div className="w-full lg:w-[60%]">
   103|            <div className="relative">
   104|              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
   105|              <img src={`${basePath}/images/pricing-hero.webp`} alt="Transparent pricing plans" className="relative rounded-3xl shadow-2xl w-full object-cover" style={{maxHeight:'500px', objectFit:'cover'}}/>
   106|            </div>
   107|          </div>
   108|        </div>
   109|      </div>
   110|    </section>
   111|
   112|      <section className="py-16 bg-white">
   113|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   114|
   115|          {/* OUTBOUND */}
   116|          <PricingSlider title="Outbound Calls" subtitle="Professional agents — billed per hour" accentColor="bg-blue-700">
   117|
   118|            {/* Trial card */}
   119|            <div className="flex-shrink-0 w-72 snap-start bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 relative">
   120|              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
   121|                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Trial Offer</span>
   122|              </div>
   123|              <h3 className="font-bold text-lg text-slate-900 mb-1">Starter</h3>
   124|              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">20h/week, 2 weeks</p>
   125|              <div className="mb-1">
   126|                <span className="text-4xl font-extrabold text-amber-600">{fmt(prices.outbound_trial)}</span>
   127|              </div>
   128|              <p className="text-slate-400 text-sm mb-3">/hour</p>
   129|              <p className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-lg p-2 mb-5">
   130|                OR: 1 week free — pay only 3 weeks
   131|              </p>
   132|              <Link href="/en/contact?plan=trial"
   133|                className="block text-center py-2.5 px-4 rounded-xl font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600">
   134|                Start Trial
   135|              </Link>
   136|            </div>
   137|
   138|            {[
   139|              { name: "Starter", desc: "20h/week", i: 0, features: ["Dedicated agent", "Custom scripts", "Daily reports"] },
   140|              { name: "Professional", desc: "40h/week", i: 1, popular: true, features: ["2 agents", "Integrated CRM", "Real-time reports"] },
   141|              { name: "Business", desc: "80h/week", i: 2, features: ["4 agents", "Dedicated manager", "Guaranteed SLA"] },
   142|              { name: "Enterprise", desc: "120h/week — 3 agents", i: 3, features: ["6 agents", "Account manager", "Volume discounts"] },
   143|            ].map(({ name, desc, i, popular, features }) => (
   144|              <PricingCard key={name}
   145|                name={name} desc={desc}
   146|                price={fmt(prices.outbound[i])} unit="hour"
   147|                popular={popular} accent="bg-blue-700"
   148|                ctaHref={`/en/contact?plan=outbound-${name.toLowerCase()}`}
   149|                features={features}
   150|              />
   151|            ))}
   152|          </PricingSlider>
   153|
   154|          {/* AI AGENTS */}
   155|          <PricingSlider
   156|            title="Voice AI Agents"
   157|            subtitle="Per-minute billing — 30% below market — 24/7 availability"
   158|            accentColor="bg-violet-600">
   159|            {[
   160|              { name: "Starter", desc: "Up to 1,000 min/month", i: 0, features: ["Response < 2 sec", "Native English", "Message taking"] },
   161|              { name: "Professional", desc: "Up to 3,000 min/month", i: 1, popular: true, features: ["All Starter +", "Appointment booking", "CRM integration"] },
   162|              { name: "Business", desc: "Up to 8,000 min/month", i: 2, features: ["All Pro +", "Agent transfer", "Dashboard"] },
   163|              { name: "Enterprise", desc: "Unlimited volume", i: 3, features: ["All Business +", "99.9% SLA", "Priority support"] },
   164|            ].map(({ name, desc, i, popular, features }) => (
   165|              <PricingCard key={name}
   166|                name={name} desc={desc}
   167|                price={fmtDec(prices.ai_per_min[i])} unit="minute"
   168|                popular={popular} accent="bg-violet-600"
   169|                ctaHref={`/en/contact?plan=ai-${name.toLowerCase()}`}
   170|                features={features}
   171|              />
   172|            ))}
   173|          </PricingSlider>
   174|
   175|          {/* INBOUND */}
   176|          <PricingSlider title="Inbound Calls" subtitle="Monthly packages — dedicated agents" accentColor="bg-teal-600">
   177|            {[
   178|              { name: "Basic", desc: "Up to 500 calls/month", i: 0, features: ["24/7 reception", "Bilingual EN/FR", "Monthly reports"] },
   179|              { name: "Advanced", desc: "Up to 1,500 calls/month", i: 1, popular: true, features: ["All Basic +", "Smart transfer", "Weekly reports"] },
   180|              { name: "Premium", desc: "Up to 2,500 calls/month", i: 2, features: ["All Advanced +", "Dedicated agent", "Guaranteed SLA"] },
   181|            ].map(({ name, desc, i, popular, features }) => (
   182|              <PricingCard key={name}
   183|                name={name} desc={desc}
   184|                price={fmt(prices.inbound[i])} unit="month"
   185|                popular={popular} accent="bg-teal-600"
   186|                ctaHref={`/en/contact?plan=inbound-${name.toLowerCase()}`}
   187|                features={features}
   188|              />
   189|            ))}
   190|		</PricingSlider>
   191|
   192|		{/* CRM */}
   193|          <PricingSlider title="CRM & Lists" subtitle="Integrated SuiteCRM + prospecting lists" accentColor="bg-indigo-600">
   194|            {[
   195|              { name: "Starter", desc: "500 contacts/month", i: 0, features: ["SuiteCRM", "500 leads/month", "Email integration"] },
   196|              { name: "Pro", desc: "2,000 contacts + lists", i: 1, popular: true, features: ["All Starter +", "B2B/B2C lists", "Automations"] },
   197|              { name: "Enterprise", desc: "Unlimited + custom", i: 2, features: ["All Pro +", "Custom integrations", "Account manager"] },
   198|            ].map(({ name, desc, i, popular, features }) => (
   199|              <PricingCard key={name}
   200|                name={name} desc={desc}
   201|                price={fmt(prices.crm_monthly[i])} unit="month"
   202|                popular={popular} accent="bg-indigo-600"
   203|                ctaHref={`/en/contact?plan=crm-${name.toLowerCase()}`}
   204|                features={features}
   205|              />
   206|            ))}
   207|          </PricingSlider>
   208|
   209|          {/* Custom */}
   210|          <div className="text-center bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 text-white">
   211|            <h3 className="text-2xl font-bold mb-3">Need higher volume or a custom solution?</h3>
   212|            <p className="text-white mb-8">We create personalized offers for large teams and specific needs.</p>
   213|            <Link href="/en/contact?plan=custom"
   214|              className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   215|              Request a Quote
   216|            </Link>
   217|          </div>
   218|
   219|        </div>
   220|      </section>
   221|
   222|      {/* FAQ SECTION */}
   223|      <section className="py-20 bg-slate-50">
   224|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   225|          <div className="text-center mb-12">
   226|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
   227|            <p className="text-slate-500">Everything you need to know before getting started</p>
   228|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   229|          </div>
   230|          <div className="space-y-4">
   231|            {[
   232|              { q: 'How long to get started?', a: 'Setup takes 48h maximum after signing. We configure your scripts, train agents and test together before launch.' },
   233|              { q: 'Is there a minimum commitment?', a: 'No. All our plans are commitment-free. You can modify or cancel anytime with 7 days notice.' },
   234|              { q: 'How are calls billed?', a: 'Outbound calls: billed per hour actually used. Inbound calls: monthly package including call volume. AI agents: billed per minute.' },
   235|              { q: 'What languages do you support?', a: 'Native English (US, Canada) and French. Our AI agents support both languages with regional accents.' },
   236|              { q: 'Can I change plans during my subscription?', a: 'Absolutely. You can upgrade or downgrade anytime. Billing is adjusted pro-rata.' },
   237|              { q: 'Is my data secure?', a: '100% GDPR compliant. Hosting in Canada/EU. End-to-end encryption. No data sold or shared.' },
   238|            ].map(({ q, a }, i) => (
   239|              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
   240|                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-slate-50 transition-colors">
   241|                  <span className="font-semibold text-slate-900 pr-4">{q}</span>
   242|                  <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
   243|                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
   244|                  </span>
   245|                </summary>
   246|                <div className="px-5 pb-5 text-slate-600 leading-relaxed">{a}</div>
   247|              </details>
   248|            ))}
   249|          </div>
   250|        </div>
   251|      </section>
   252|
   253|      {/* TESTIMONIALS SECTION */}
   254|      <section className="py-20 bg-white">
   255|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   256|          <div className="text-center mb-12">
   257|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">What Our Clients Say</h2>
   258|            <p className="text-slate-500">Over 500 SMEs trust us</p>
   259|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   260|          </div>
   261|          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   262|            {[
   263|              { q: 'Unbeatable prices and impeccable service. ROI was visible from the first month.', name: 'John Smith', role: 'CEO, TechStart Montreal', av: 'JS' },
   264|              { q: 'I reduced my costs by 40% compared to an in-house employee. And zero missed calls.', name: 'Michael Brown', role: 'Founder, Digital Agency NYC', av: 'MB' },
   265|              { q: '2-week trial was convincing. The team perfectly understood our business.', name: 'Sarah Johnson', role: 'Director, Consulting Firm Boston', av: 'SJ' },
   266|            ].map(({ q, name, role, av }) => (
   267|              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
   268|                <div className="flex gap-0.5 mb-4">
   269|                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
   270|                </div>
   271|                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
   272|                <div className="flex items-center gap-3">
   273|                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
   274|                  <div>
   275|                    <p className="font-bold text-slate-900 text-sm">{name}</p>
   276|                    <p className="text-slate-500 text-xs">{role}</p>
   277|                  </div>
   278|                </div>
   279|              </div>
   280|            ))}
   281|          </div>
   282|        </div>
   283|      </section>
   284|
   285|      {/* HOW IT WORKS SECTION */}
   286|      <section className="py-20 bg-slate-50">
   287|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   288|          <div className="text-center mb-12">
   289|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">How It Works</h2>
   290|            <p className="text-slate-500">From initial call to deployment in 4 steps</p>
   291|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   292|          </div>
   293|          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
   294|            {[
   295|              { n: '1', t: 'Discovery Call', d: '30 min to understand your needs and goals' },
   296|              { n: '2', t: 'Proposal', d: 'Customized quote within 24h with adapted pricing' },
   297|              { n: '3', t: 'Configuration', d: 'Scripts, training and testing in 48h' },
   298|              { n: '4', t: 'Launch', d: 'Your calls handled, real-time monitoring' },
   299|            ].map(({ n, t, d }) => (
   300|              <div key={n} className="text-center">
   301|                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
   302|                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
   303|                <p className="text-slate-500 text-sm">{d}</p>
   304|              </div>
   305|            ))}
   306|          </div>
   307|          <div className="mt-12 text-center">
   308|            <Link href="/en/contact" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors">
   309|              Get Started Now
   310|              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
   311|            </Link>
   312|          </div>
   313|        </div>
   314|      </section>
   315|
   316|      {/* SECTION 6: Custom Pricing CTA - DARK */}
   317|      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900">
   318|        <div className="max-w-4xl mx-auto px-4 text-center">
   319|          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Higher Volume or Custom Solution?</h2>
   320|          <p className="text-white text-lg mb-8">We create custom offers for large teams and specific needs. Have a particular project? Let&apos;s talk.</p>
   321|          <Link href="/en/contact?plan=custom"
   322|            className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   323|            Request a Custom Quote
   324|            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
   325|          </Link>
   326|          <p className="text-white text-sm mt-6">Response within 24h — no commitment</p>
   327|        </div>
   328|      </section>
   329|
   330|      {/* SECTION 7: Final CTA - DARK */}
   331|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20 text-white">
   332|        <div className="max-w-4xl mx-auto px-4 text-center">
   333|          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Reduce Your Costs by 40%?</h2>
   334|          <p className="text-white text-lg mb-8">Free 2-week trial. No commitment. Guaranteed results.</p>
   335|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   336|            <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   337|              Request a Free Quote
   338|            </Link>
   339|            <a href="tel:+151****0559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
   340|              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
   341|              +1 514 819-0559
   342|            </a>
   343|          </div>
   344|          <p className="text-white text-sm mt-8">Open 24/7 — Immediate response</p>
   345|        </div>
   346|      </section>
   347|
   348|      {/* SECTION 8: Our Commitments - LIGHT */}
   349|      <section className="py-20 bg-white">
   350|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   351|          <div className="text-center mb-12">
   352|            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Our Commitments</h2>
   353|            <p className="text-slate-500">Why over 500 SMEs stay with us</p>
   354|            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
   355|          </div>
   356|          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
   357|            {[
   358|              { icon: '🛡️', t: 'Protected Data', d: 'Local hosting, E2E encryption, GDPR and Law 25. Your info never leaves our secure servers.' },
   359|              { icon: '⚡', t: 'Available 24/7/365', d: 'Your calls are answered even when you sleep. Weekends, holidays, 3am — we\'re here.' },
   360|              { icon: '💰', t: 'Transparent Pricing', d: 'No hidden fees, no surprises. You know exactly what you pay before signing.' },
   361|              { icon: '🤝', t: 'Flexible Contract', d: 'Zero forced commitment. 7 days notice and you\'re free. We prefer to keep you by choice, not by force.' },
   362|            ].map(({ icon, t, d }) => (
   363|              <div key={t} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
   364|                <div className="text-4xl mb-4">{icon}</div>
   365|                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
   366|                <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
   367|              </div>
   368|            ))}
   369|          </div>
   370|          <div className="mt-12 text-center">
   371|            <p className="text-slate-400 text-sm mb-6">Questions? We respond in under 2h on average.</p>
   372|            <div className="flex flex-col sm:flex-row gap-4 justify-center">
   373|              <Link href="/en/contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors">
   374|                Contact Us
   375|              </Link>
   376|              <a href="mailto:direction@smart-hotline.com" className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
   377|                direction@smart-hotline.com
   378|              </a>
   379|            </div>
   380|          </div>
   381|        </div>
   382|      </section>
   383|    </>
   384|  )
   385|}
   386|