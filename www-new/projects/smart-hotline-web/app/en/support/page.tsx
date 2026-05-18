     1|'use client'

export const metadata = {
  title: "Smart Hotline | Multichannel Customer Support | Quebec",
  description: "Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT score. From $11/hr. Free 2-week trial.",
}

     2|import basePath from '@/lib/basePath'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@/components/Icons'
     7|import { ServiceSchema } from '@/components/ServiceSchema'
     8|import { FAQSchema } from '@/components/FAQSchema'
     9|import GeoTestimonials from '@/components/GeoTestimonials'
    10|
    11|const FEATURES = [
    12|{icon: HeadphonesIcon, title: 'Multichannel Support', desc: 'Phone, email, chat, WhatsApp — we handle everything from a single interface.'},
    13|{icon: MailIcon, title: 'Organized Tickets', desc: 'Every request becomes a ticket. Nothing gets lost, everything is tracked.'},
    14|{icon: ChatIcon, title: 'Real-Time Chat', desc: 'Instant responses for customers who prefer to write.'},
    15|{icon: PhoneIcon, title: 'Dedicated Line', desc: "A number for your support. We answer in your company's name."},
    16|]
    17|
    18|
    19|function CTAButtons({ slug }: { slug: string }) {
    20|  const { geo, loading } = useGeo()
    21|  const showPhone = !loading && geo.showPhone
    22|  return (
    23|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    24|      <Link href={`/en/contact?service=${slug}`} className="bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-teal-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
    25|        Free Demo
    26|      </Link>
    27|      {showPhone ? (
    28|      <a href={`tel:${CONTACT.phone}`} className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
    29|        {CONTACT.phoneDisplay}
    30|      </a>
    31|      ) : (
    32|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
    33|          WhatsApp 24/7
    34|        </a>
    35|      )}
    36|    </div>
    37|  )
    38|}
    39|
    40|export default function Page() {
    41|return (
    42|<>
    43|      {/* SECTION 1: HERO - Modern design with bigger image */}
    44|      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    45|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    46|          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
    47|            <div className="w-full lg:w-[40%] animate-slide-left">
    48|              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
    49|                <HeadphonesIcon className="w-5 h-5" /> Customer Support
    50|              </span>
    51|              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
    52|                Customer Support<br/>
    53|                <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">That Resembles You</span>
    54|              </h1>
    55|              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
    56|                Phone, email, chat, WhatsApp — we handle everything. Your customers get fast answers, in English, from real humans.
    57|              </p>
    58|              <CTAButtons slug="support"/>
    59|              <div className="flex flex-wrap gap-3 mt-6">
    60|                {['Multichannel', 'Organized Tickets', '< 2h Response', 'Dedicated Team'].map((b, i) => (
    61|                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
    62|                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
    63|                  </span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[60%] animate-slide-right">
    68|              <div className="relative">
    69|                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
    70|                <img src={`${basePath}/images/support-tech.webp`} alt="Customer support" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
    71|                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
    72|                  <div className="flex items-center gap-4">
    73|                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
    74|                      <HeadphonesIcon className="w-7 h-7 text-white" />
    75|                    </div>
    76|                    <div>
    77|                      <p className="font-black text-xl">Response &lt; 2h</p>
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
    88|{/* SECTION 2: DARK - Features */}
    89|<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white py-20 lg:py-24 relative overflow-hidden">
    90|<div className="absolute inset-0 pointer-events-none">
    91|<div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
    92|</div>
    93|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    94|<div className="text-center mb-12">
    95|<h2 className="text-3xl lg:text-4xl font-black mb-4">Support Channels</h2>
    96|<p className="text-white text-lg max-w-2xl mx-auto">We answer everywhere your customers contact you.</p>
    97|</div>
    98|  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
    99|        {FEATURES.map(({icon: Icon, title, desc}, i) => (
   100|          <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
   101|            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
   102|              <Icon className="w-8 h-8 text-white" />
   103|            </div>
   104|            <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
   105|            <p className="text-teal-200 leading-relaxed">{desc}</p>
   106|          </div>
   107|        ))}
   108|      </div>
   109|</div>
   110|</section>
   111|
   112|{/* SECTION 3: DARK - Stats */}
   113|<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-900 text-white py-20 border-t-4 border-teal-600">
   114|<div className="max-w-7xl mx-auto px-4">
   115|<div className="text-center mb-8">
   116|<h3 className="text-2xl font-bold text-white">Measurable Results</h3>
   117|</div>
   118|    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
   119|        <div className="modern-box-dark p-8 animate-delay-100"><p className="text-4xl font-black text-white">98%</p><p className="text-teal-200 text-lg mt-1">Client Satisfaction</p></div>
   120|        <div className="modern-box-dark p-8 animate-delay-200"><p className="text-4xl font-black text-white">&lt; 2h</p><p className="text-teal-200 text-lg mt-1">Response Time</p></div>
   121|        <div className="modern-box-dark p-8 animate-delay-300"><p className="text-4xl font-black text-white">50K+</p><p className="text-teal-200 text-lg mt-1">Tickets/Month</p></div>
   122|        <div className="modern-box-dark p-8 animate-delay-400"><p className="text-4xl font-black text-white">24/7</p><p className="text-teal-200 text-lg mt-1">Availability</p></div>
   123|      </div>
   124|</div>
   125|</section>
   126|
   127|{/* SECTION 4: LIGHT - How it works */}
   128|<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
   129|<div className="max-w-6xl mx-auto px-4">
   130|<div className="text-center mb-12">
   131|<h2 className="text-3xl font-black text-slate-900 mb-4">How It Works</h2>
   132|<p className="text-slate-600 text-lg">4 simple steps to improve your customer support</p>
   133|</div>
   134|<div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
   135|<div className="text-center modern-box animate-delay-100">
   136|<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">1</div>
   137|<h3 className="font-bold text-lg mb-2 text-slate-900">Analysis</h3>
   138|<p className="text-slate-600 text-sm">We study your types of requests</p>
   139|</div>
   140|<div className="text-center modern-box animate-delay-200">
   141|<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">2</div>
   142|<h3 className="font-bold text-lg mb-2 text-slate-900">Knowledge Base</h3>
   143|<p className="text-slate-600 text-sm">We create answers for each case</p>
   144|</div>
   145|<div className="text-center modern-box animate-delay-300">
   146|<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">3</div>
   147|<h3 className="font-bold text-lg mb-2 text-slate-900">Launch</h3>
   148|<p className="text-slate-600 text-sm">We take calls and emails</p>
   149|</div>
   150|<div className="text-center modern-box animate-delay-400">
   151|<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">4</div>
   152|<h3 className="font-bold text-lg mb-2 text-slate-900">Improvement</h3>
   153|<p className="text-slate-600 text-sm">We adjust based on your feedback</p>
   154|</div>
   155|</div>
   156|</div>
   157|</section>
   158|
   159|{/* SECTION 5: DARK - Value proposition */}
   160|<section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white border-t-4 border-teal-700">
   161|<div className="max-w-7xl mx-auto px-4">
   162|<div className="flex flex-col lg:flex-row items-center gap-14">
   163|<div className="w-full lg:w-[55%]">
   164|<h2 className="text-3xl lg:text-4xl font-black text-white mb-5">Why Outsource Your Support?</h2>
   165|<p className="text-white text-lg mb-6">A satisfied client comes back. A frustrated one speaks ill of you. We ensure every interaction goes well.</p>
   166|<ul className="space-y-3 mb-8">
   167|<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Team trained on your products</li>
   168|<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Responses in Quebec or France French</li>
   169|<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Smart escalation to your team</li>
   170|<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Weekly trend reports</li>
   171|</ul>
   172|<Link href="/en/contact?service=support" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors">See a demo →</Link>
   173|</div>
   174|      <div className="w-full lg:w-[40%]">
   175|        <div className="modern-box-dark p-8">
   176|          <h3 className="font-bold text-white text-lg mb-4">Typical Results</h3>
   177|          <ul className="space-y-3">
   178|            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> +40% client satisfaction</li>
   179|            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> -60% response time</li>
   180|            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> Team freed for sales</li>
   181|          </ul>
   182|        </div>
   183|      </div>
   184|</div>
   185|</div>
   186|</section>
   187|
   188|{/* SECTION 6: DARK - Testimonials AUTO-SLIDE */}
   189|<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 overflow-hidden">
   190|<div className="max-w-7xl mx-auto px-4">
   191|<div className="text-center mb-12">
   192|<h2 className="text-3xl font-black mb-4">What Our Clients Say</h2>
   193|<p className="text-slate-200 text-lg">Real results for businesses like yours</p>
   194|</div>
   195|</div>
   196|<GeoTestimonials lang="en" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
   197|</section>
   198|
   199|{/* SECTION 7: DARK - CTA */}
   200|<section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20">
   201|<div className="max-w-4xl mx-auto px-4 text-center">
   202|<h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Improve Your Support?</h2>
   203|<p className="text-white text-lg mb-10 max-w-2xl mx-auto">More satisfied clients, less stress for your team. Let's start together.</p>
   204|<CTAButtons slug="support"/>
   205|<p className="text-slate-200 text-sm mt-6"><Link href="/en/pricing" className="underline hover:text-white">View pricing</Link> · <Link href="/en/contact" className="underline hover:text-white">Contact us</Link></p>
   206|</div>
   207|</section>
   208|
   209|{/* SECTION 8: LIGHT - FAQ */}
   210|<section className="bg-white py-20 border-t border-slate-100">
   211|<div className="max-w-4xl mx-auto px-4">
   212|<h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
   213|<div className="space-y-4">
   214|<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">What channels do you support?</summary><p className="text-slate-600 mt-2">Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized.</p></details>
   215|<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How do you handle escalations?</summary><p className="text-slate-600 mt-2">We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context.</p></details>
   216|<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How long for team training?</summary><p className="text-slate-600 mt-2">About 1 week. We learn your products, processes, and how you talk to customers.</p></details>
   217|</div>
   218|<div className="text-center mt-8">
   219|<Link href="/en/contact?service=support" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700">Get Started Now</Link>
   220|</div>
   221|</div>
   222|</section>
   223|
   224|<ServiceSchema name="Multichannel Customer Support" description="Multichannel customer support - phone, email, chat, WhatsApp with dedicated English-speaking team" slug="support" offers={{ priceFrom: "2.00", priceCurrency: "CAD" }} />
   225|<FAQSchema faqs={[
   226|{ question: "What channels do you support?", answer: "Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized." },
   227|{ question: "How do you handle escalations?", answer: "We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context." },
   228|{ question: "How long for team training?", answer: "About 1 week. We learn your products, processes, and how you talk to customers." },
   229|{ question: "Do you offer 24/7 service?", answer: "Yes, our team is available 24/7 to answer your customers, even on holidays." }
   230|]} />
   231|</>
   232|)
   233|}
   234|