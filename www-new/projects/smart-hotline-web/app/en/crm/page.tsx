     1|'use client'

export const metadata = {
  title: "Smart Hotline | CRM & B2B/B2C Lists for SMBs",
  description: "SuiteCRM integration, qualified B2B/B2C prospect lists, Mautic email marketing. Complete lead and pipeline management. Setup included.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|  {icon: FolderIcon, title: 'Lead Management', desc: 'Capture, qualification and tracking of all your prospects.'},
    14|  {icon: MailIcon, title: 'Email Marketing', desc: 'Automated campaigns with Mautic. Nurturing and follow-ups.'},
    15|  {icon: PhoneIcon, title: 'Click-to-call', desc: 'Call your prospects in one click from the CRM.'},
    16|  {icon: TrendingIcon, title: 'Sales Pipeline', desc: 'Visualize and manage your sales funnel in real time.'},
    17|  {icon: DatabaseIcon, title: 'Qualified Lists', desc: 'B2B and B2C lists by sector, region, company size.'},
    18|  {icon: LinkIcon, title: 'Integrations', desc: 'Connection with your site, Zapier, Google Workspace and more.'},
    19|]
    20|
    21|
    22|function CTAButtons({ slug }: { slug: string }) {
    23|  const { geo, loading } = useGeo()
    24|  const showPhone = !loading && geo.showPhone
    25|  return (
    26|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    27|      <Link href={`/en/contact?service=${slug}`} className="bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    28|        Free Demo
    29|      </Link>
    30|      {showPhone ? (
    31|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
    32|          {CONTACT.phoneDisplay}
    33|        </a>
    34|      ) : (
    35|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
    36|          WhatsApp 24/7
    37|        </a>
    38|      )}
    39|    </div>
    40|  )
    41|}
    42|
    43|export default function Page() {
    44|  return (
    45|    <>
    46|      {/* SECTION 1: HERO */}
    47|      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    48|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    49|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    50|            <div className="w-full lg:w-[40%] animate-slide-left">
    51|              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    52|                <CRMIcon className="w-5 h-5" /> CRM & Lists
    53|              </span>
    54|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    55|                Integrated CRM &<br/>
    56|                <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Prospect Lists</span>
    57|              </h1>
    58|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
    59|                Centralize your leads, track opportunities and maximize conversions with SuiteCRM and our qualified B2B/B2C lists.
    60|              </p>
    61|              <CTAButtons slug="crm"/>
    62|              <div className="flex flex-wrap gap-3 mt-6">
    63|                {['SuiteCRM included', 'B2B/B2C lists', 'Mautic integrated', 'Auto reports'].map((b, i) => (
    64|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    65|                    <CheckIcon className="w-5 h-5 text-orange-600" /> {b}
    66|                  </span>
    67|                ))}
    68|              </div>
    69|            </div>
    70|            <div className="w-full lg:w-[60%] animate-slide-right">
    71|              <div className="relative">
    72|                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
    73|                <img src={`${basePath}/images/crm-interface.webp`} alt="CRM dashboard" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    74|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    75|                  <div className="flex items-center gap-4">
    76|                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
    77|                      <TrendingIcon className="w-7 h-7 text-white" />
    78|                    </div>
    79|                    <div>
    80|                      <p className="font-black text-xl">+35% conversion</p>
    81|                      <p className="text-slate-500 text-sm">client average</p>
    82|                    </div>
    83|                  </div>
    84|                </div>
    85|              </div>
    86|            </div>
    87|          </div>
    88|        </div>
    89|      </section>
    90|
    91|      {/* SECTION 2: FEATURES */}
    92|      <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 lg:py-28 overflow-hidden relative">
    93|        <div className="absolute inset-0 pointer-events-none">
    94|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    95|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
    96|        </div>
    97|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    98|          <div className="text-center mb-16 animate-fade-in-up">
    99|            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
   100|            <p className="text-orange-200 text-xl max-w-2xl mx-auto">Everything you need to manage your contacts and sales.</p>
   101|          </div>
   102|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   103|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
   104|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   105|                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   106|                  <Icon className="w-8 h-8 text-white" />
   107|                </div>
   108|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   109|                <p className="text-orange-200 leading-relaxed">{desc}</p>
   110|              </div>
   111|            ))}
   112|          </div>
   113|        </div>
   114|      </section>
   115|
   116|  {/* SECTION 3: DARK STATS */}
   117|  <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20">
   118|    <div className="max-w-7xl mx-auto px-4">
   119|      <div className="text-center mb-8">
   120|        <h3 className="text-2xl font-bold text-white mb-8">Numbers That Matter</h3>
   121|      </div>
   122|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   123|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   124|              <p className="text-5xl lg:text-6xl font-black text-white">250K+</p>
   125|              <p className="text-orange-200 mt-2 font-medium text-lg">B2B Contacts</p>
   126|            </div>
   127|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   128|              <p className="text-5xl lg:text-6xl font-black text-white">98%</p>
   129|              <p className="text-orange-200 mt-2 font-medium text-lg">Verified Data</p>
   130|            </div>
   131|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   132|              <p className="text-5xl lg:text-6xl font-black text-white">+35%</p>
   133|              <p className="text-orange-200 mt-2 font-medium text-lg">Conversion Rate</p>
   134|            </div>
   135|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   136|              <p className="text-5xl lg:text-6xl font-black text-white">48h</p>
   137|              <p className="text-orange-200 mt-2 font-medium text-lg">Full Setup</p>
   138|            </div>
   139|          </div>
   140|        </div>
   141|      </section>
   142|
   143|  {/* SECTION 4: HOW IT WORKS */}
   144|  <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   145|    <div className="max-w-6xl mx-auto px-4">
   146|      <div className="text-center mb-16">
   147|        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
   148|        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   149|      </div>
   150|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   151|            {[
   152|              {n: '1', t: 'Database Audit', d: 'Analysis of existing data and cleanup.'},
   153|              {n: '2', t: 'SuiteCRM Configuration', d: 'Module customization based on your sales process.'},
   154|              {n: '3', t: 'Data Import', d: 'Migration of contacts and history without data loss.'},
   155|              {n: '4', t: 'Training & Follow-up', d: 'Team training and ongoing support.'},
   156|            ].map((step, i) => (
   157|              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   158|                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   159|                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   160|                <p className="text-slate-600 leading-relaxed">{step.d}</p>
   161|              </div>
   162|            ))}
   163|          </div>
   164|        </div>
   165|      </section>
   166|
   167|  {/* SECTION 5: DARK - BENEFITS */}
   168|  <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 relative overflow-hidden">
   169|    <div className="absolute inset-0 pointer-events-none">
   170|      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
   171|      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
   172|    </div>
   173|        <div className="max-w-7xl mx-auto px-4 relative">
   174|          <div className="flex flex-col lg:flex-row items-center gap-16">
   175|            <div className="w-full lg:w-1/2">
   176|              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose Our CRM?</h2>
   177|              <p className="text-xl text-orange-200 mb-8 leading-relaxed">We don't just sell you software. We help you structure your sales process from A to Z.</p>
   178|              <ul className="space-y-4 mb-8">
   179|                {[
   180|                  'Training included — no endless learning curves',
   181|                  'French-speaking support based in Quebec',
   182|                  'Automatic updates, no hidden fees',
   183|                  'Integrated with our outbound calling services',
   184|                ].map((item, i) => (
   185|                  <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   186|                    <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   187|                      <CheckIcon className="w-5 h-5"/>
   188|                    </span>
   189|                    {item}
   190|                  </li>
   191|                ))}
   192|              </ul>
   193|              <Link href="/en/contact?service=crm" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   194|                See a Demo
   195|              </Link>
   196|            </div>
   197|            <div className="w-full lg:w-1/2">
   198|              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   199|                <h3 className="font-bold text-2xl text-white mb-6">Pricing Adapted to Your Growth</h3>
   200|                <p className="text-orange-200 text-lg mb-4">Competitive rates, no long-term commitment. You pay for what you use.</p>
   201|                <ul className="space-y-3 mb-6">
   202|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> No hidden fees</li>
   203|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Cancel anytime</li>
   204|                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Support included</li>
   205|                </ul>
   206|                <Link href="/en/pricing" className="text-orange-400 font-bold text-lg hover:underline flex items-center gap-2">
   207|                  See all pricing
   208|                </Link>
   209|              </div>
   210|            </div>
   211|          </div>
   212|        </div>
   213|      </section>
   214|
   215|      {/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
   216|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   217|        <div className="max-w-7xl mx-auto px-4">
   218|          <div className="text-center mb-16">
   219|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
   220|            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   221|          </div>
   222|        </div>
   223|        <GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   224|      </section>
   225|
   226|      {/* SECTION 7: FINAL CTA */}
   227|      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 py-24 relative overflow-hidden">
   228|        <div className="absolute inset-0 pointer-events-none">
   229|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
   230|        </div>
   231|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   232|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Centralize Your Leads?</h2>
   233|          <p className="text-orange-200 text-xl mb-12 max-w-2xl mx-auto">CRM + qualified lists + French-speaking support. Everything you need to sell more.</p>
   234|          <CTAButtons slug="crm"/>
   235|          <p className="text-orange-300 mt-8 text-lg">
   236|            <Link href="/en/pricing" className="underline hover:text-white transition-colors">View pricing</Link>
   237|            <span className="mx-3">·</span>
   238|            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact us</Link>
   239|          </p>
   240|        </div>
   241|      </section>
   242|
   243|      {/* SECTION 8: FAQ */}
   244|      <section className="bg-white py-20">
   245|        <div className="max-w-4xl mx-auto px-4">
   246|          <div className="text-center mb-12">
   247|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
   248|            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
   249|          </div>
   250|          <div className="space-y-6 stagger-children">
   251|            {[
   252|              {q: "Can I import my existing contacts?", a: "Yes, we handle the migration. Excel, CSV, Google Contacts, old CRM — we import everything without data loss."},
   253|              {q: "Are the B2B lists up to date?", a: "We update them monthly. Bounce rate guaranteed under 5%, or we replace them."},
   254|              {q: "How long does training take?", a: "About 2 hours. We show you the basics and remain available for questions."},
   255|              {q: "Is the CRM included with phone plans?", a: "Yes, basic CRM is included free with all our reception and outbound call packages."},
   256|            ].map((faq, i) => (
   257|              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   258|                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   259|                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   260|              </details>
   261|            ))}
   262|          </div>
   263|          <div className="text-center mt-12">
   264|            <Link href="/en/contact?service=crm" className="inline-block bg-gradient-to-r from-orange-600 to-amber-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   265|              Get Started Now
   266|            </Link>
   267|          </div>
   268|        </div>
   269|      </section>
   270|      <ServiceSchema name="CRM & Prospect Lists" description="Integrated SuiteCRM with qualified B2B/B2C lists and Mautic email marketing" slug="crm" offers={{ priceFrom: "50", priceCurrency: "CAD" }} />
   271|  <AIAgentSchema
   272|    name="CRM Integration Service"
   273|    description="Professional CRM integration service for Canadian SMEs. Includes SuiteCRM setup, data migration, team training, and ongoing support to centralize your leads and maximize conversions."
   274|    capabilities={[
   275|      "SuiteCRM setup & configuration",
   276|      "Data migration & cleanup",
   277|      "Team training & support",
   278|      "Mautic email integration",
   279|      "Zapier & API connections",
   280|      "Custom reporting dashboards",
   281|      "B2B/B2C list integration",
   282|      "Click-to-call functionality"
   283|    ]}
   284|    responseTime="48 hour setup"
   285|    availability="Business days support"
   286|    languages={["English", "French"]}
   287|    pricingModel="project-based pricing"
   288|    startingPrice={{ amount: "50", currency: "CAD", unit: "hour" }}
   289|  />
   290|      <FAQSchema faqs={[
   291|        { question: "Can I import my existing contacts?", answer: "Yes, we handle the migration. Excel, CSV, Google Contacts, old CRM — we import everything without data loss." },
   292|        { question: "Are the B2B lists up to date?", answer: "We update them monthly. Bounce rate guaranteed under 5%, or we replace them." },
   293|        { question: "How long does training take?", answer: "About 2 hours. We show you the basics and remain available for questions." },
   294|        { question: "Is the CRM included with phone plans?", answer: "Yes, basic CRM is included free with all our reception and outbound call packages." }
   295|      ]} />
   296|    </>
   297|  )
   298|}
   299|