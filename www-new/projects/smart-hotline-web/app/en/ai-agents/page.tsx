     1|'use client'

export const metadata = {
  title: "Smart Hotline | AI Voice Agents 24/7 for Your SMB",
  description: "Smart Hotline's AI voice agent Sophie answers in 2 seconds. Native French Quebec, France. Up to 70% cheaper than traditional agents. Free trial.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { BoltIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, StarIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
     7|import { FAQSchema } from '@/components/FAQSchema'
     8|import { ServiceSchema } from '@/components/ServiceSchema'
     9|import { AIAgentSchema } from '@/components/AIAgentSchema'
    10|import GeoTestimonials from '@/components/GeoTestimonials'
    11|
    12|const FEATURES = [
    13|{icon: BoltIcon, title: 'Instant Response', desc: 'Under 2 seconds, 24/7, no hold time ever.'},
    14|{icon: CalendarIcon, title: 'Appointment Booking', desc: 'Synced with Google Calendar, Calendly. Auto confirmation.'},
    15|{icon: QuestionIcon, title: 'Automated FAQ', desc: 'Answers common questions: hours, rates, location.'},
    16|{icon: TransferIcon, title: 'Smart Transfer', desc: 'Detects complex situations, transfers to advisor.'},
    17|]
    18|
    19|
    20|function CTAButtons({ slug }: { slug: string }) {
    21|const { geo, loading } = useGeo()
    22|const showPhone = !loading && geo.showPhone
    23|return (
    24|<div className="flex flex-col sm:flex-row gap-4 mb-6">
    25|<Link href={`/en/contact?service=${slug}`} className="bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    26|Free Demo
    27|</Link>
    28|{showPhone ? (
    29|<a href={`tel:${CONTACT.phone}`} className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
    30|{CONTACT.phoneDisplay}
    31|</a>
    32|) : (
    33|<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
    34|WhatsApp 24/7
    35|</a>
    36|)}
    37|</div>
    38|)
    39|}
    40|
    41|export default function Page() {
    42|return (
    43|<>
    44|{/* SECTION 1: HERO */}
    45|<section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    46|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    47|<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    48|<div className="w-full lg:w-[40%] animate-slide-left">
    49|<span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    50|<BoltIcon className="w-5 h-5" /> AI Voice Agents
    51|</span>
    52|<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    53|Sophie, Your AI<br/>
    54|<span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Native English Agent 24/7</span>
    55|</h1>
    56|<p className="text-xl text-slate-600 mb-8 leading-relaxed">She responds in under 2 seconds. With the accent you want. And the best part? Your callers won't know it's AI — they'll just think your receptionist is super efficient.</p>
    57|<CTAButtons slug="ia"/>
    58|<div className="flex flex-wrap gap-3 mt-6">
    59|{['Response < 2 sec', 'Accent of choice', '24/7 even at night', 'Per-minute rate'].map((b, i) => (
    60|<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    61|<CheckIcon className="w-5 h-5 text-violet-600" /> {b}
    62|</span>
    63|))}
    64|</div>
    65|</div>
    66|<div className="w-full lg:w-[60%] animate-slide-right">
    67|<div className="relative">
    68|<div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
    69|<img src={`${basePath}/images/agents-ia-hero.webp`} alt="AI Agent Sophie" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    70|<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    71|<div className="flex items-center gap-4">
    72|<div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
    73|<BoltIcon className="w-7 h-7 text-white" />
    74|</div>
    75|<div>
    76|<p className="font-black text-xl">2 seconds max</p>
    77|<p className="text-slate-500 text-sm">no hold music</p>
    78|</div>
    79|</div>
    80|</div>
    81|</div>
    82|</div>
    83|</div>
    84|</div>
    85|</section>
    86|
    87|{/* SECTION 2: FEATURES */}
    88|<section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 lg:py-28 overflow-hidden relative">
    89|<div className="absolute inset-0 pointer-events-none">
    90|<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
    91|<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
    92|</div>
    93|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    94|<div className="text-center mb-16 animate-fade-in-up">
    95|<h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
    96|<p className="text-violet-200 text-xl max-w-2xl mx-auto">Everything needed to never miss a call again.</p>
    97|</div>
    98|<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
    99|{FEATURES.map(({icon: Icon, title, desc}, i) => (
   100|<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   101|<div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   102|<Icon className="w-8 h-8 text-white" />
   103|</div>
   104|<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   105|<p className="text-violet-200 leading-relaxed">{desc}</p>
   106|</div>
   107|))}
   108|</div>
   109|</div>
   110|</section>
   111|
   112|{/* SECTION 3: DARK STATS */}
   113|      <section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 border-t-4 border-violet-600">
   114|        <div className="max-w-7xl mx-auto px-4">
   115|          <div className="text-center mb-8">
   116|            <h3 className="text-2xl font-bold text-white">Results That Speak</h3>
   117|          </div>
   118|          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   119|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   120|              <p className="text-5xl lg:text-6xl font-black text-white">98%</p>
   121|              <p className="text-violet-200 mt-2 font-medium text-lg">Satisfaction Rate</p>
   122|            </div>
   123|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   124|              <p className="text-5xl lg:text-6xl font-black text-white">2s</p>
   125|              <p className="text-violet-200 mt-2 font-medium text-lg">Response Time</p>
   126|            </div>
   127|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   128|              <p className="text-5xl lg:text-6xl font-black text-white">500+</p>
   129|              <p className="text-violet-200 mt-2 font-medium text-lg">Businesses Served</p>
   130|            </div>
   131|            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
   132|              <p className="text-5xl lg:text-6xl font-black text-white">24/7</p>
   133|              <p className="text-violet-200 mt-2 font-medium text-lg">Availability</p>
   134|            </div>
   135|          </div>
   136|        </div>
   137|      </section>
   138|
   139|{/* SECTION 4: HOW IT WORKS */}
   140|<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
   141|<div className="max-w-6xl mx-auto px-4">
   142|<div className="text-center mb-16">
   143|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
   144|<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
   145|</div>
   146|<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
   147|{[
   148|{n: '1', t: 'Configuration', d: 'Voice, script, and knowledge base customization'},
   149|{n: '2', t: 'Test & Validate', d: 'Real call simulations to validate responses'},
   150|{n: '3', t: 'Integration', d: 'Connected to your existing number in under 24h'},
   151|{n: '4', t: 'Go Live', d: 'Sophie handles your calls. Real-time dashboard'},
   152|].map((step, i) => (
   153|<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
   154|<div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
   155|<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
   156|<p className="text-slate-600 leading-relaxed">{step.d}</p>
   157|</div>
   158|))}
   159|</div>
   160|</div>
   161|</section>
   162|
   163|{/* SECTION 5: DARK - BENEFITS */}
   164|<section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 relative overflow-hidden">
   165|<div className="absolute inset-0 pointer-events-none">
   166|<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
   167|</div>
   168|<div className="max-w-7xl mx-auto px-4 relative">
   169|<div className="flex flex-col lg:flex-row items-center gap-16">
   170|<div className="w-full lg:w-1/2">
   171|<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose Sophie?</h2>
   172|<p className="text-xl text-violet-200 mb-8 leading-relaxed">Sophie doesn't sleep, doesn't take breaks, and never has a bad day. She handles the repetitive stuff so your team can focus on what really matters.</p>
   173|        <ul className="space-y-4 mb-8">
   174|          {[ 
   175|            'Quebec, France, or Belgium accent available', 
   176|            'Transcription and analysis of every call', 
   177|            '70% cheaper than a receptionist', 
   178|            'Installation in 24-48h',
   179|          ].map((item, i) => (
   180|            <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
   181|              <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
   182|                <CheckIcon className="w-5 h-5"/>
   183|              </span>
   184|              {item}
   185|            </li>
   186|          ))}
   187|        </ul>
   188|<Link href="/en/contact?service=ia" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   189|See a Demo
   190|</Link>
   191|</div>
   192|<div className="w-full lg:w-1/2">
   193|<div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
   194|<h3 className="font-bold text-2xl text-white mb-6">Per-minute rates</h3>
   195|<p className="text-violet-200 text-lg mb-4">You only pay for what you use. No fixed fees, no commitment.</p>
   196|<ul className="space-y-3 mb-6">
   197|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> No setup fees</li>
   198|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Cancel anytime</li>
   199|<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Support included</li>
   200|</ul>
   201|<Link href="/en/pricing" className="text-violet-400 font-bold text-lg hover:underline flex items-center gap-2">
   202|View all pricing
   203|</Link>
   204|</div>
   205|</div>
   206|</div>
   207|</div>
   208|</section>
   209|
   210|{/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
   211|<section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
   212|<div className="max-w-7xl mx-auto px-4">
   213|<div className="text-center mb-16">
   214|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
   215|<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
   216|</div>
   217|</div>
   218|<GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
   219|</section>
   220|
   221|{/* SECTION 7: FINAL CTA */}
   222|<section className="bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 py-24 relative overflow-hidden">
   223|<div className="absolute inset-0 pointer-events-none">
   224|<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
   225|</div>
   226|<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
   227|<h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Never Miss a Call?</h2>
   228|<p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">2-week free trial. No commitment. We start when you're ready.</p>
   229|<CTAButtons slug="ia"/>
   230|<p className="text-violet-300 mt-8 text-lg">
   231|<Link href="/en/pricing" className="underline hover:text-white transition-colors">View pricing</Link>
   232|<span className="mx-3">·</span>
   233|<Link href="/en/contact" className="underline hover:text-white transition-colors">Contact us</Link>
   234|</p>
   235|</div>
   236|</section>
   237|
   238|{/* SECTION 8: FAQ */}
   239|<section className="bg-white py-20">
   240|<div className="max-w-4xl mx-auto px-4">
   241|<div className="text-center mb-12">
   242|<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
   243|<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
   244|</div>
   245|<div className="space-y-6 stagger-children">
   246|{[
   247|{q: "Will callers know they're talking to AI?", a: "Most don't notice. Sophie speaks naturally, handles interruptions, and adjusts her pace. We've had clients whose customers specifically complimented 'your lovely receptionist.'"},
   248|{q: 'What languages does Sophie speak?', a: 'Native French (Quebec, France, Belgium), English and Spanish. She switches automatically based on what the caller uses.'},
   249|{q: 'How long does Sophie take to install?', a: 'Usually 24-48 hours. We configure the voice, script and knowledge base, then test with real scenarios before going live.'},
   250|{q: 'What if Sophie gets stuck?', a: "She transfers to a human. That's the point — handle the routine perfectly, escalate the complex to you."},
   251|].map((faq, i) => (
   252|<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
   253|<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
   254|<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
   255|</details>
   256|))}
   257|</div>
   258|<div className="text-center mt-12">
   259|<Link href="/en/contact?service=ia" className="inline-block bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
   260|Start Now
   261|</Link>
   262|</div>
   263|</div>
   264|</section>
   265|<ServiceSchema name="AI Voice Agents" description="AI voice agent Sophie - under 2 second response, 24/7 availability" slug="ai-agents" offers={{ priceFrom: "0.11", priceCurrency: "USD" }} />
   266|<AIAgentSchema
   267|name="Sophie"
   268|description="Professional AI voice assistant for SMBs. Answers calls in under 2 seconds, 24/7, with native French (Quebec, France, Belgium, Switzerland) and English accents."
   269|capabilities={[
   270|"Instant call answering",
   271|"Automated appointment booking",
   272|"FAQ automation",
   273|"Smart transfer to humans",
   274|"Message taking and notifications",
   275|"Real-time analytics",
   276|"CRM integration",
   277|"Multilingual support"
   278|]}
   279|responseTime="2 seconds"
   280|availability="24/7, 365 days a year"
   281|languages={["French (Quebec)", "French (France)", "French (Belgium)", "French (Switzerland)", "English (North American)"]}
   282|pricingModel="per-minute billing"
   283|startingPrice={{ amount: "0.08", currency: "CAD", unit: "minute" }}
   284|/>
   285|<FAQSchema faqs={[
   286|{ question: "Will callers know they're talking to AI?", answer: "Most don't notice. Sophie speaks naturally, handles interruptions, and adjusts her pace. We've had clients whose customers specifically complimented 'your lovely receptionist.'" },
   287|{ question: "What languages does Sophie speak?", answer: "Native French (Quebec, France, Belgium), English and Spanish. She switches automatically based on what the caller uses." },
   288|{ question: "How long does Sophie take to install?", answer: "Usually 24-48 hours. We configure the voice, script and knowledge base, then test with real scenarios before going live." },
   289|{ question: "What if Sophie gets stuck?", answer: "She transfers to a human. That's the point — handle the routine perfectly, escalate the complex to you." }
   290|]} />
   291|</>
   292|)
   293|}
   294|