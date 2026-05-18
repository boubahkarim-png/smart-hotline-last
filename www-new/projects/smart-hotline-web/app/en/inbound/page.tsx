     1|'use client'

export const metadata = {
  title: "Smart Hotline | 24/7 Inbound Call Center for SMBs Quebec",
  description: "24/7 inbound call center for SMBs. Zero missed calls. Bilingual FR/EN agents, custom scripts. From $11/hr. Free 2-week trial.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: PhoneIcon, title: '24/7 Reception', desc: 'No voicemail. A real agent answers every call, even at 3 AM.'},
    14|  {icon: ClockIcon, title: 'Under 3 Rings', desc: "Your clients don't wait. We pick up quickly, period."},
    15|  {icon: ShieldCheckIcon, title: 'Secure Data', desc: 'All messages transmitted in real time. Nothing gets lost.'},
    16|  {icon: UsersIcon, title: 'Dedicated Team', desc: 'The same agents answer for you. They know your business.'},
    17|]
    18|
    19|
    20|function CTAButtons({ slug }: { slug: string }) {
    21|  const { geo, loading } = useGeo()
    22|  const showPhone = !loading && geo.showPhone
    23|  return (
    24|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    25|      <Link href={`/en/contact?service=${slug}`} className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    26|        Free Demo
    27|      </Link>
    28|      {showPhone ? (
    29|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
    30|          {CONTACT.phoneDisplay}
    31|        </a>
    32|      ) : (
    33|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
    34|          WhatsApp 24/7
    35|        </a>
    36|      )}
    37|    </div>
    38|  )
    39|}
    40|
    41|export default function Page() {
    42|  return (
    43|    <>
    44|      {/* SECTION 1: HERO - Modern design with bigger image */}
    45|      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    46|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    47|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    48|            <div className="w-full lg:w-[40%] animate-slide-left">
    49|              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    50|                <PhoneIcon className="w-5 h-5" /> Inbound Calls
    51|              </span>
    52|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    53|                Zero Missed Calls,<br/>
    54|                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Zero Lost Clients</span>
    55|              </h1>
    56|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Professional agents answer your calls 24/7. Your clients speak to a real human, not a robot.</p>
    57|              <CTAButtons slug="reception"/>
    58|              <div className="flex flex-wrap gap-3 mt-6">
    59|                {['24/7 non-stop', 'Under 3 Rings', 'Real-time Messages', '2-Week Trial'].map((b, i) => (
    60|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    61|                    <CheckIcon className="w-5 h-5 text-sky-600" />
    62|                    {b}
    63|                  </span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[60%] animate-slide-right">
    68|              <div className="relative">
    69|                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
    70|                <img src={`${basePath}/images/reception-hero.webp`} alt="Inbound Calls" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    71|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    72|                  <div className="flex items-center gap-4">
    73|                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
    74|                      <PhoneIcon className="w-7 h-7 text-white" />
    75|                    </div>
    76|                    <div>
    77|                      <p className="font-black text-xl">500+ calls/day</p>
    78|                      <p className="text-slate-500 text-sm">managed for our clients</p>
    79|                    </div>
    80|                  </div>
    81|                </div>
    82|              </div>
    83|            </div>
    84|          </div>
    85|        </div>
    86|      </section>
    87|
    88|      {/* SECTION 2: FEATURES - Modern cards with animations */}
    89|      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 lg:py-28 overflow-hidden relative">
    90|        <div className="absolute inset-0 pointer-events-none">
    91|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    92|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
    93|        </div>
    94|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    95|          <div className="text-center mb-16 animate-fade-in-up">
    96|            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
    97|            <p className="text-sky-200 text-xl max-w-2xl mx-auto">Everything you need to never miss an important call again.</p>
    98|          </div>
    99|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   100|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
   101|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   102|                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   103|                  <Icon className="w-8 h-8 text-white" />
   104|                </div>
   105|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   106|                <p className="text-sky-200 leading-relaxed">{desc}</p>
   107|              </div>
   108|            ))}
   109|          </div>
   110|        </div>
   111|      </section>
   112|
   113|{/* SECTION 3: DARK STATS - Modern big numbers */}
   114|<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-900 text-white py-20">
   115|  <div className="max-w-7xl mx-auto px-4">
   116|<div className="text-center mb-8">
   117|        <h3 className="text-2xl font-bold text-white">Numbers that inspire confidence</h3>
   118|      </div>
   119|    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   120|      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   121|        <p className="text-5xl lg:text-6xl font-black text-white">99.2%</p>
   122|        <p className="text-sky-200 mt-2 font-medium text-lg">Answer Rate</p>
   123|      </div>
   124|      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   125|        <p className="text-5xl lg:text-6xl font-black text-white">2.8s</p>
   126|        <p className="text-sky-200 mt-2 font-medium text-lg">Response Time</p>
   127|      </div>
   128|      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   129|        <p className="text-5xl lg:text-6xl font-black text-white">150+</p>
   130|        <p className="text-sky-200 mt-2 font-medium text-lg">Businesses Served</p>
   131|      </div>
   132|      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   133|        <p className="text-5xl lg:text-6xl font-black text-white">24/7</p>
   134|        <p className="text-sky-200 mt-2 font-medium text-lg">Availability</p>
   135|      </div>
   136|    </div>
   137|  </div>
   138|</section>
   139|
   140|  {/* SECTION 4: HOW IT WORKS - Modern numbered cards */}
   141|  <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   142|    <div className="max-w-6xl mx-auto px-4">
   143|          <div className="text-center mb-16">
   144|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
   145|            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   146|          </div>
   147|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   148|          {[
   149|            {n: '1', t: 'Briefing', d: "We learn about your business and your needs"},
   150|            {n: '2', t: 'Custom Scripts', d: "We write responses tailored to your activity"},
   151|            {n: '3', t: '48h Launch', d: "Your calls are handled quickly"},
   152|            {n: '4', t: 'Ongoing Support', d: "Daily reports and adjustments"},
   153|          ].map((step, i) => (
   154|            <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   155|              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   156|              <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   157|              <p className="text-slate-600 leading-relaxed">{step.d}</p>
   158|            </div>
   159|          ))}
   160|          </div>
   161|        </div>
   162|      </section>
   163|
   164| {/* SECTION 5: DARK - BENEFITS */}
   165|<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white py-20 relative overflow-hidden">
   166|      <div className="absolute inset-0 pointer-events-none">
   167|        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
   168|      </div>
   169|      <div className="max-w-7xl mx-auto px-4 relative">
   170|          <div className="flex flex-col lg:flex-row items-center gap-16">
   171|          <div className="w-full lg:w-1/2">
   172| <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Trust Us?</h2>
   173| <p className="text-xl text-sky-200 mb-8 leading-relaxed">Our agents are trained to represent your business as if it were their own. No robotic scripts — real conversations.</p>
   174| <ul className="space-y-4 mb-8">
   175| {[
   176| 'French-speaking agents from Quebec and France',
   177| 'Messages sent by SMS, email, or call',
   178| 'SME pricing — 40-60% cheaper than an employee',
   179| 'Cancel anytime — no long contracts',
   180| ].map((item, i) => (
   181| <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   182| <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   183| <CheckIcon className="w-5 h-5"/>
   184| </span>
   185| {item}
   186| </li>
   187| ))}
   188| </ul>
   189| <Link href="/en/contact?service=reception" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   190| See a Demo
   191| </Link>
   192| </div>
   193| <div className="w-full lg:w-1/2">
   194| <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   195| <h3 className="font-bold text-2xl text-white mb-6">Pricing Adapted to Your Growth</h3>
   196| <p className="text-sky-200 text-lg mb-4">Competitive pricing, no long-term commitment. You pay for what you use.</p>
   197| <ul className="space-y-3 mb-6">
   198| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> No hidden fees</li>
   199| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Cancel anytime</li>
   200| <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> CRM and autodialer included</li>
   201| </ul>
   202| <Link href="/en/pricing" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
   203| View All Pricing
   204| </Link>
   205| </div>
   206| </div>
   207| </div>
   208| </div>
   209| </section>
   210|
   211|{/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
   212|<section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   213|<div className="max-w-7xl mx-auto px-4">
   214|<div className="text-center mb-16">
   215|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
   216|<div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   217|</div>
   218|</div>
   219|<GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   220|</section>
   221|
   222|      {/* SECTION 7: FINAL CTA - Gradient */}
   223|      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-24 relative overflow-hidden">
   224|        <div className="absolute inset-0 pointer-events-none">
   225|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
   226|        </div>
   227|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   228|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Never Miss a Call?</h2>
   229|          <p className="text-sky-200 text-xl mb-12 max-w-2xl mx-auto">Free 2-week trial. No commitment. We start whenever you're ready.</p>
   230|          <CTAButtons slug="reception"/>
   231|          <p className="text-sky-300 mt-8 text-lg">
   232|            <Link href="/en/pricing" className="underline hover:text-white transition-colors">View Pricing</Link>
   233|            <span className="mx-3">·</span>
   234|            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact Us</Link>
   235|          </p>
   236|        </div>
   237|      </section>
   238|
   239|{/* SECTION 8: FAQ - Modern expandable */}
   240|<section className="bg-white py-20">
   241|  <div className="max-w-4xl mx-auto px-4">
   242|    <div className="text-center mb-12">
   243|      <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
   244|      <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
   245|    </div>
   246|    <div className="space-y-6 stagger-children">
   247|      {[
   248|        {q: "How long to get started?", a: "Usually 48 hours. We take the time to understand your business well before starting."},
   249|        {q: "Can I change the scripts?", a: "Absolutely. It's your business — you decide how we answer. We adjust whenever you want."},
   250|        {q: "How do I receive messages?", a: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately."},
   251|      ].map((faq, i) => (
   252|        <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   253|          <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   254|          <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   255|        </details>
   256|      ))}
   257|    </div>
   258|    <div className="text-center mt-12">
   259|      <Link href="/en/contact?service=reception" className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   260|        Start Now
   261|      </Link>
   262|    </div>
   263|  </div>
   264|</section>
   265|<ServiceSchema name="Inbound Calls 24/7" description="Professional inbound call service with French-speaking agents 24/7" slug="inbound" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
   266|      <AIAgentSchema
   267|        name="Inbound Call Agent"
   268|        description="Professional inbound call answering service for SMEs. French-speaking agents answer calls in under 3 rings, 24/7, with real-time message transmission."
   269|        capabilities={[
   270|          "24/7 live call answering",
   271|          "Custom call scripts",
   272|          "Real-time message delivery",
   273|          "Dedicated agent assignment",
   274|          "SMS, email, and call forwarding",
   275|          "CRM integration",
   276|          "Bilingual French and English support",
   277|          "Daily reporting and adjustments"
   278|        ]}
   279|        responseTime="Under 3 rings"
   280|        availability="24/7, 365 days a year"
   281|        languages={["French (Quebec)", "French (France)", "English (North America)"]}
   282|        pricingModel="per-call pricing"
   283|        startingPrice={{ amount: "1.50", currency: "CAD", unit: "call" }}
   284|      />
   285|<FAQSchema faqs={[
   286|  { question: "How long to get started?", answer: "Usually 48 hours. We take the time to understand your business well before starting." },
   287|  { question: "Can I change the scripts?", answer: "Absolutely. It's your business — you decide how we answer. We adjust whenever you want." },
   288|  { question: "How do I receive messages?", answer: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately." },
   289|  { question: "Do the agents speak French?", answer: "Yes, all our agents are French-speaking from Quebec or France. They master both French and English." }
   290|]} />
   291|</>
   292|  )
   293|}
   294|