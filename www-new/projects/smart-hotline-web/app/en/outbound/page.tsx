     1|'use client'

export const metadata = {
  title: "Smart Hotline | Outbound Call Center | Lead Generation Quebec",
  description: "Outbound call center for SMBs. Qualified leads, appointment setting, phone prospecting. Optimized scripts. From $11/hr. Free trial.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { TargetIcon, TrendingIcon, FolderIcon, CalendarIcon, AnalyticsIcon, GlobeIcon, CheckIcon, PhoneIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: TargetIcon, title: 'Qualified Leads', desc: 'Precise targeting and qualification of each lead before transfer.'},
    14|  {icon: TrendingIcon, title: 'Conversion Scripts', desc: 'Scripts optimized by our experts to maximize results.'},
    15|  {icon: FolderIcon, title: 'Integrated CRM', desc: 'Every call recorded with notes, status and follow-up.'},
    16|  {icon: CalendarIcon, title: 'Appointment Setting', desc: 'Calendar filled with qualified and confirmed appointments.'},
    17|  {icon: AnalyticsIcon, title: 'Detailed KPIs', desc: 'Calls, contacts, leads, conversions, cost per lead.'},
    18|  {icon: GlobeIcon, title: 'Multi-channel', desc: 'Outbound calls combined with SMS and email for more reach.'},
    19|]
    20|
    21|function CTAButtons({ slug }: { slug: string }) {
    22|  const { geo, loading } = useGeo()
    23|  const showPhone = !loading && geo.showPhone
    24|  return (
    25|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    26|      <Link href={`/en/contact?service=${slug}`} className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-emerald-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    27|        Free Demo
    28|      </Link>
    29|      {showPhone ? (
    30|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
    31|          {CONTACT.phoneDisplay}
    32|        </a>
    33|      ) : (
    34|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-4 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-center hover:shadow-xl">
    35|          WhatsApp 24/7
    36|        </a>
    37|      )}
    38|    </div>
    39|  )
    40|}
    41|
    42|export default function Page() {
    43|  return (
    44|    <>
    45|      {/* SECTION 1: HERO */}
    46|      <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    47|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    48|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    49|            <div className="w-full lg:w-[40%] animate-slide-left">
    50|              <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    51|                <PhoneIcon className="w-5 h-5" /> Outbound Calls
    52|              </span>
    53|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    54|                Multiply Your Leads,<br/>
    55|                <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">Zero Effort</span>
    56|              </h1>
    57|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Prospecting, telemarketing, appointment setting. Our agents know the art of booking meetings — without scaring off your prospects.</p>
    58|              <CTAButtons slug="emission"/>
    59|              <div className="flex flex-wrap gap-3 mt-6">
    60|                {['Qualified leads', 'CRM included', 'Optimized scripts', 'Daily reporting'].map((b, i) => (
    61|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    62|                    <CheckIcon className="w-5 h-5 text-emerald-600" /> {b}
    63|                  </span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[60%] animate-slide-right">
    68|              <div className="relative">
    69|                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl blur-2xl opacity-20"></div>
    70|                <img src={`${basePath}/images/telemarketing.webp`} alt="Outbound calling agent" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    71|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    72|                  <div className="flex items-center gap-4">
    73|                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
    74|                      <TrendingIcon className="w-7 h-7 text-white" />
    75|                    </div>
    76|                    <div>
    77|                      <p className="font-black text-xl">+40% more appointments</p>
    78|                      <p className="text-slate-500 text-sm">on average</p>
    79|                    </div>
    80|                  </div>
    81|                </div>
    82|              </div>
    83|            </div>
    84|          </div>
    85|        </div>
    86|      </section>
    87|
    88|      {/* SECTION 2: FEATURES */}
    89|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden relative">
    90|        <div className="absolute inset-0 pointer-events-none">
    91|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    92|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-green-500 opacity-10 rounded-full blur-3xl"></div>
    93|        </div>
    94|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    95|          <div className="text-center mb-16 animate-fade-in-up">
    96|            <h2 className="text-4xl lg:text-5xl font-black mb-4">What&apos;s Included</h2>
    97|            <p className="text-emerald-200 text-xl max-w-2xl mx-auto">Everything you need to generate leads and fill your calendar.</p>
    98|          </div>
    99|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   100|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
   101|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   102|                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   103|                  <Icon className="w-8 h-8 text-white" />
   104|                </div>
   105|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   106|                <p className="text-emerald-200 leading-relaxed">{desc}</p>
   107|              </div>
   108|            ))}
   109|          </div>
   110|        </div>
   111|      </section>
   112|
   113|      {/* SECTION 3: DARK STATS */}
   114|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900 text-white py-20 border-t-4 border-emerald-600">
   115|        <div className="max-w-7xl mx-auto px-4">
   116|          <div className="text-center mb-8">
   117|            <h3 className="text-2xl font-bold text-white">Results That Speak</h3>
   118|          </div>
   119|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   120|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   121|              <p className="text-5xl lg:text-6xl font-black text-white">15K+</p>
   122|              <p className="text-emerald-200 mt-2 font-medium text-lg">Calls per month</p>
   123|            </div>
   124|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   125|              <p className="text-5xl lg:text-6xl font-black text-white">35%</p>
   126|              <p className="text-emerald-200 mt-2 font-medium text-lg">Contact rate</p>
   127|            </div>
   128|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   129|              <p className="text-5xl lg:text-6xl font-black text-white">+40%</p>
   130|              <p className="text-emerald-200 mt-2 font-medium text-lg">More appointments</p>
   131|            </div>
   132|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   133|              <p className="text-5xl lg:text-6xl font-black text-white">48h</p>
   134|              <p className="text-emerald-200 mt-2 font-medium text-lg">Campaign launch</p>
   135|            </div>
   136|          </div>
   137|        </div>
   138|      </section>
   139|
   140|      {/* SECTION 4: HOW IT WORKS */}
   141|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   142|        <div className="max-w-6xl mx-auto px-4">
   143|          <div className="text-center mb-16">
   144|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
   145|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-green-700 mx-auto rounded-full"></div>
   146|          </div>
   147|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   148|            {[
   149|              {n: '1', t: 'Target Definition', d: 'Market analysis and prospect profile creation.'},
   150|              {n: '2', t: 'Script & Training', d: 'Custom script and training on your offer.'},
   151|              {n: '3', t: 'Campaign Launch', d: 'Start calls according to your schedule.'},
   152|              {n: '4', t: 'Reports & Optimization', d: 'Daily adjustments to maximize results.'},
   153|            ].map((step, i) => (
   154|              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   155|                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   156|                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   157|                <p className="text-slate-600 leading-relaxed">{step.d}</p>
   158|              </div>
   159|            ))}
   160|          </div>
   161|        </div>
   162|      </section>
   163|
   164|      {/* SECTION 5: DARK - BENEFITS */}
   165|      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900 text-white py-20 relative overflow-hidden">
   166|        <div className="absolute inset-0 pointer-events-none">
   167|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-emerald-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
   168|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
   169|        </div>
   170|        <div className="max-w-7xl mx-auto px-4 relative">
   171|          <div className="flex flex-col lg:flex-row items-center gap-16">
   172|            <div className="w-full lg:w-1/2">
   173|              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Trust Us?</h2>
   174|              <p className="text-xl text-emerald-200 mb-8 leading-relaxed">Our agents are trained to represent your business and book appointments. No robotic scripts — real conversations that convert.</p>
   175|              <ul className="space-y-4 mb-8">
   176|                {[
   177|                  'French-speaking agents from Quebec and France',
   178|                  'Scripts tested and optimized continuously',
   179|                  'CRM and autodialer included in every plan',
   180|                  'Cancel anytime — no long contracts',
   181|                ].map((item, i) => (
   182|                  <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   183|                    <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   184|                      <CheckIcon className="w-5 h-5"/>
   185|                    </span>
   186|                    {item}
   187|                  </li>
   188|                ))}
   189|              </ul>
   190|              <Link href="/en/contact?service=emission" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
   191|                See a Demo
   192|              </Link>
   193|            </div>
   194|            <div className="w-full lg:w-1/2">
   195|              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   196|                <h3 className="font-bold text-2xl text-white mb-6">Pricing Adapted to Your Growth</h3>
   197|                <p className="text-emerald-200 text-lg mb-4">Competitive pricing, no long-term commitment. You pay for what you use.</p>
   198|                <ul className="space-y-3 mb-6">
   199|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> No hidden fees</li>
   200|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> Cancel anytime</li>
   201|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-emerald-400"/> CRM and autodialer included</li>
   202|                </ul>
   203|                <Link href="/en/pricing" className="text-emerald-400 font-bold text-lg hover:underline flex items-center gap-2">
   204|                  View All Pricing
   205|                </Link>
   206|              </div>
   207|            </div>
   208|          </div>
   209|        </div>
   210|      </section>
   211|
   212|      {/* SECTION 6: TESTIMONIALS */}
   213|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   214|        <div className="max-w-7xl mx-auto px-4">
   215|          <div className="text-center mb-16">
   216|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
   217|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-green-700 mx-auto rounded-full"></div>
   218|          </div>
   219|        </div>
   220|        <GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   221|      </section>
   222|
   223|      {/* SECTION 7: FINAL CTA */}
   224|      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 py-24 relative overflow-hidden">
   225|        <div className="absolute inset-0 pointer-events-none">
   226|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
   227|        </div>
   228|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   229|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Multiply Your Leads?</h2>
   230|          <p className="text-emerald-200 text-xl mb-12 max-w-2xl mx-auto">Setup in 48h. No long-term commitment. We start whenever you want.</p>
   231|          <CTAButtons slug="emission"/>
   232|          <p className="text-emerald-300 mt-8 text-lg">
   233|            <Link href="/en/pricing" className="underline hover:text-white transition-colors">View Pricing</Link>
   234|            <span className="mx-3">·</span>
   235|            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact Us</Link>
   236|          </p>
   237|        </div>
   238|      </section>
   239|
   240|      {/* SECTION 8: FAQ */}
   241|      <section className="bg-white py-20">
   242|        <div className="max-w-4xl mx-auto px-4">
   243|          <div className="text-center mb-12">
   244|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
   245|            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-green-700 mx-auto rounded-full"></div>
   246|          </div>
   247|          <div className="space-y-6 stagger-children">
   248|            {[
   249|              {q: 'How long does a typical campaign take?', a: 'Our campaigns are flexible based on your needs. We recommend a minimum of 3 months to see significant results, but you can adjust the duration at any time.'},
   250|              {q: 'Can I target specific regions?', a: 'Absolutely! We can target by city, region, province or even specific postal codes to maximize the relevance of your outbound calls.'},
   251|              {q: 'What is the cost per qualified lead?', a: 'The cost varies depending on your industry and the complexity of your offer, but our clients typically see a 50-70% lower cost per lead compared to traditional methods.'},
   252|            ].map((faq, i) => (
   253|              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   254|                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   255|                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   256|              </details>
   257|            ))}
   258|          </div>
   259|          <div className="text-center mt-12">
   260|            <Link href="/en/contact?service=emission" className="inline-block bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
   261|              Start Now
   262|            </Link>
   263|          </div>
   264|        </div>
   265|      </section>
   266|
   267|      {/* SCHEMAS */}
   268|      <ServiceSchema name="Outbound Calls & Prospecting" description="Phone prospecting and telemarketing service with qualified leads and appointment setting" slug="outbound" offers={{ priceFrom: "3.00", priceCurrency: "CAD" }} />
   269|      <AIAgentSchema
   270|        name="Smart Outbound Agents"
   271|        description="Professional outbound calling agents for lead generation and appointment setting. Trained in Quebec French and France French, with CRM integration and real-time analytics."
   272|        capabilities={["Lead qualification", "Appointment setting", "CRM integration", "Multi-channel outreach (call, SMS, email)", "Real-time reporting", "Script optimization", "Bilingual support (FR/EN)"]}
   273|        responseTime="Immediate"
   274|        availability="24/7, 365 days per year"
   275|        languages={["French (Quebec)", "French (France)", "English"]}
   276|        pricingModel="pay per use"
   277|        startingPrice={{ amount: "3.00", currency: "CAD", unit: "lead" }}
   278|      />
   279|      <FAQSchema faqs={[
   280|        { question: "How do you qualify leads?", answer: "We use criteria defined together: budget, authority, need, timing. Each lead is validated before transfer." },
   281|        { question: "Do you offer custom scripts?", answer: "Yes, our experts write scripts tailored to your offer and market. We test and optimize continuously." },
   282|        { question: "How many calls per day?", answer: "One agent can make 50-80 calls per day. We adapt to your goals and processing capacity." },
   283|        { question: "Can I listen to the calls?", answer: "Yes, all calls are recorded (with consent) and available in your CRM for replay." }
   284|      ]} />
   285|    </>
   286|  )
   287|}