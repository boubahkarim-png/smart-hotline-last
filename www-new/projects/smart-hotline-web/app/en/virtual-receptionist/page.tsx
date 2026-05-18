     1|'use client'

export const metadata = {
  title: "Smart Hotline | Virtual Receptionist Services | Quebec Canada",
  description: "Professional virtual receptionist services for SMBs. 24/7 bilingual FR/EN agents. Answer in under 3 rings. From $11/hr. Free trial.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon, MessageIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import GeoTestimonials from '@/components/GeoTestimonials'
    10|
    11|const FEATURES = [
    12|  {icon: PhoneIcon, title: 'Professional Reception', desc: 'A real agent answers every call with your company name.'},
    13|  {icon: ClockIcon, title: 'Available 24/7', desc: 'Even at night, weekends and holidays. Never miss a call.'},
    14|  {icon: MessageIcon, title: 'Message Taking', desc: 'Messages transmitted in real-time via SMS, email or call based on your preferences.'},
    15|  {icon: UsersIcon, title: 'Dedicated Team', desc: 'The same agents answer for you. They know your business.'},
    16|]
    17|
    18|
    19|const FAQS = [
    20|  {question: "What's the difference from an answering machine?", answer: "A real agent answers in person, understands context, and transmits urgent messages immediately. No hold music, no voicemail."},
    21|  {question: "Can I customize the scripts?", answer: "Absolutely. We write answers tailored to your business. You validate everything before launch and we adjust whenever you want."},
    22|  {question: "How do I receive messages?", answer: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately, others according to your preference."},
    23|  {question: "What's the setup timeline?", answer: "Usually 48 hours. We take the time to properly understand your business and needs before starting."},
    24|]
    25|
    26|function CTAButtons({ slug }: { slug: string }) {
    27|  const { geo, loading } = useGeo()
    28|  const showPhone = !loading && geo.showPhone
    29|  return (
    30|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    31|      <Link href={`/en/contact?service=${slug}`} className="bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-teal-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    32|        Free Demo
    33|      </Link>
    34|      {showPhone ? (
    35|        <a href={`tel:${CONTACT.phone}`} className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
    36|          {CONTACT.phoneDisplay}
    37|        </a>
    38|      ) : (
    39|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
    40|          WhatsApp 24/7
    41|        </a>
    42|      )}
    43|    </div>
    44|  )
    45|}
    46|
    47|export default function Page() {
    48|  return (
    49|    <>
    50|      <ServiceSchema
    51|        name="Virtual Receptionist"
    52|        description="Virtual receptionist service for SMBs. Professional agents who answer your calls 24/7, take messages and transmit information in real-time."
    53|        slug="virtual-receptionist"
    54|        offers={{ priceFrom: "11", priceCurrency: "USD" }}
    55|      />
    56|      <FAQSchema faqs={FAQS} />
    57|      
    58|      {/* SECTION 1: HERO */}
    59|      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    60|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    61|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    62|            <div className="w-full lg:w-1/2 animate-slide-left">
    63|              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    64|                <PhoneIcon className="w-5 h-5" /> Virtual Receptionist
    65|              </span>
    66|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    67|                Your Receptionist,<br/>
    68|                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Without Fixed Costs</span>
    69|              </h1>
    70|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Professional agents answer your calls in your company's name. Your clients speak to a real human, 24/7.</p>
    71|              <CTAButtons slug="virtual-receptionist"/>
    72|              <div className="flex flex-wrap gap-3 mt-6">
    73|                {['24/7 availability', 'Real-time messages', 'Dedicated team', '2-week trial'].map((b, i) => (
    74|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    75|                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
    76|                  </span>
    77|                ))}
    78|              </div>
    79|            </div>
    80|            <div className="w-full lg:w-1/2 animate-slide-right">
    81|              <div className="relative">
    82|                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
    83|                <img src={`${basePath}/images/reception-hero.webp`} alt="Virtual receptionist" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    84|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    85|                  <div className="flex items-center gap-4">
    86|                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
    87|                      <PhoneIcon className="w-7 h-7 text-white" />
    88|                    </div>
    89|                    <div>
    90|                      <p className="font-black text-xl">99.2%</p>
    91|                      <p className="text-slate-500 text-sm">answer rate</p>
    92|                    </div>
    93|                  </div>
    94|                </div>
    95|              </div>
    96|            </div>
    97|          </div>
    98|        </div>
    99|      </section>
   100|
   101|      {/* SECTION 2: FEATURES */}
   102|      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden relative">
   103|        <div className="absolute inset-0 pointer-events-none">
   104|          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
   105|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
   106|        </div>
   107|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
   108|          <div className="text-center mb-16 animate-fade-in-up">
   109|            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
   110|            <p className="text-white text-xl max-w-2xl mx-auto">Everything you need for professional call handling.</p>
   111|          </div>
   112|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   113|            {FEATURES.map(({icon: Icon, title, desc}, i) => (
   114|              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   115|                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   116|                  <Icon className="w-8 h-8 text-white" />
   117|                </div>
   118|                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   119|                <p className="text-white leading-relaxed">{desc}</p>
   120|              </div>
   121|            ))}
   122|          </div>
   123|        </div>
   124|      </section>
   125|
   126|      {/* SECTION 3: STATS */}
   127|      <section className="bg-white py-16 border-b border-slate-100">
   128|        <div className="max-w-7xl mx-auto px-4">
   129|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   130|            <div className="modern-box p-8">
   131|              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">99.2%</p>
   132|              <p className="text-slate-600 mt-2 font-medium text-lg">Answer Rate</p>
   133|            </div>
   134|            <div className="modern-box p-8">
   135|              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">2.8s</p>
   136|              <p className="text-slate-600 mt-2 font-medium text-lg">Response Time</p>
   137|            </div>
   138|            <div className="modern-box p-8">
   139|              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">150+</p>
   140|              <p className="text-slate-600 mt-2 font-medium text-lg">Businesses Served</p>
   141|            </div>
   142|            <div className="modern-box p-8">
   143|              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">24/7</p>
   144|              <p className="text-slate-600 mt-2 font-medium text-lg">Availability</p>
   145|            </div>
   146|          </div>
   147|        </div>
   148|      </section>
   149|
   150|      {/* SECTION 4: HOW IT WORKS */}
   151|      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   152|        <div className="max-w-6xl mx-auto px-4">
   153|          <div className="text-center mb-16">
   154|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
   155|            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
   156|          </div>
   157|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   158|            {[
   159|              {n: '1', t: 'Briefing', d: "We learn about your business, hours and needs"},
   160|              {n: '2', t: 'Custom Scripts', d: "We write answers tailored to your activity"},
   161|              {n: '3', t: 'Launch in 48h', d: "Your calls are handled quickly"},
   162|              {n: '4', t: 'Ongoing Support', d: "Daily reports and adjustments as needed"},
   163|            ].map((step, i) => (
   164|              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   165|                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   166|                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   167|                <p className="text-slate-600 leading-relaxed">{step.d}</p>
   168|              </div>
   169|            ))}
   170|          </div>
   171|        </div>
   172|      </section>
   173|
   174|      {/* SECTION 5: BENEFITS */}
   175|      <section className="py-20 bg-white">
   176|        <div className="max-w-7xl mx-auto px-4">
   177|          <div className="flex flex-col lg:flex-row items-center gap-16">
   178|            <div className="w-full lg:w-1/2">
   179|              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Why Choose Our Service?</h2>
   180|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Our agents are trained to represent your company as if it were their own. No robot scripts — real human conversations.</p>
   181|              <ul className="space-y-4 mb-8">
   182|                {[
   183|                  'French-speaking agents from Quebec and France',
   184|                  'Messages via SMS, email, or call',
   185|                  'SMB pricing — 40-60% cheaper than an employee',
   186|                  'Cancel anytime — no long contracts',
   187|                ].map((item, i) => (
   188|                  <li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   189|                    <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   190|                      <CheckIcon className="w-5 h-5"/>
   191|                    </span>
   192|                    {item}
   193|                  </li>
   194|                ))}
   195|              </ul>
   196|              <Link href="/en/contact?service=virtual-receptionist" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   197|                See a Demo
   198|              </Link>
   199|            </div>
   200|            <div className="w-full lg:w-1/2">
   201|              <div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-teal-50">
   202|                <h3 className="font-bold text-2xl text-slate-900 mb-6">Pricing Adapted to Your Growth</h3>
   203|                <p className="text-slate-600 text-lg mb-4">Competitive rates, no long-term commitment. You pay for what you use.</p>
   204|                <ul className="space-y-3 mb-6">
   205|                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> No hidden fees</li>
   206|                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> Cancel anytime</li>
   207|                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> CRM and autodialer included</li>
   208|                </ul>
   209|                <Link href="/en/pricing" className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2">
   210|                  See all pricing
   211|                </Link>
   212|              </div>
   213|            </div>
   214|          </div>
   215|        </div>
   216|      </section>
   217|
   218|{/* SECTION 6: TESTIMONIALS */}
   219|<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   220|<div className="max-w-7xl mx-auto px-4">
   221|<div className="text-center mb-16">
   222|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
   223|<div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
   224|</div>
   225|<GeoTestimonials lang="en" theme="light" layout="grid" cardSize="lg" basePath={basePath} />
   226|</div>
   227|</section>
   228|
   229|      {/* SECTION 7: FINAL CTA */}
   230|      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-24 relative overflow-hidden">
   231|        <div className="absolute inset-0 pointer-events-none">
   232|          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
   233|        </div>
   234|        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   235|          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Improve Your Reception?</h2>
   236|<p className="text-white text-xl mb-12 max-w-2xl mx-auto">2-week free trial. No commitment. We start whenever you want.</p>
   237|    <CTAButtons slug="virtual-receptionist"/>
   238|    <p className="text-white mt-8 text-lg">
   239|            <Link href="/en/pricing" className="underline hover:text-white transition-colors">See pricing</Link>
   240|            <span className="mx-3">·</span>
   241|            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact us</Link>
   242|          </p>
   243|        </div>
   244|      </section>
   245|
   246|      {/* SECTION 8: FAQ */}
   247|      <section className="bg-white py-20">
   248|        <div className="max-w-4xl mx-auto px-4">
   249|          <div className="text-center mb-12">
   250|            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
   251|            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
   252|          </div>
   253|          <div className="space-y-6 stagger-children">
   254|            {FAQS.map((faq, i) => (
   255|              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   256|                <summary className="font-bold text-xl text-slate-900">{faq.question}</summary>
   257|                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.answer}</p>
   258|              </details>
   259|            ))}
   260|          </div>
   261|          <div className="text-center mt-12">
   262|            <Link href="/en/contact?service=virtual-receptionist" className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   263|              Get Started Now
   264|            </Link>
   265|          </div>
   266|        </div>
   267|      </section>
   268|    </>
   269|  )
   270|}
   271|