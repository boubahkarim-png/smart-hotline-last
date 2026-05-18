     1|'use client'

export const metadata = {
  title: "Smart Hotline | 24/7 Phone Partner Quebec",
  description: "Never miss a call. 24/7 receptionists and AI voice agents for SMBs. From $11/hr. Free 2-week trial — no commitment.",
}

     2|import GeoTestimonials from '@/components/GeoTestimonials'
     3|import basePath from '@/lib/basePath'
     4|import Link from 'next/link'
     5|import { useState } from 'react'
     6|import { useGeo } from '@/hooks/useGeo'
     7|import { CONTACT } from '@/lib/nav'
     8|import BlogArticleModal, { type Article } from '@/components/BlogArticleModal'
     9|import { PhoneIcon, QuestionIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon, HotelIcon } from '@/components/Icons'
    10|import { FAQSchema } from '@/components/FAQSchema'
    11|import { ServiceSchema } from '@/components/ServiceSchema'
    12|
    13|const SECTORS = [
    14|  { icon: UtensilsIcon, name: "Restaurants", desc: "Reservations, delivery, customer service. Never miss an order.", examples: ["Restaurants", "Caterers", "Dark kitchens"] },
    15|  { icon: HeartIcon, name: "Healthcare", desc: "Appointment scheduling, patient reminders, emergencies. Available 24/7.", examples: ["Clinics", "Doctors", "Physiotherapy"] },
    16|  { icon: BuildingIcon, name: "Real Estate", desc: "Buyer qualification, property viewings, lead follow-up.", examples: ["Agencies", "Brokers", "Developers"] },
    17|  { icon: CarIcon, name: "Automotive", desc: "After-sales service, workshop appointments, customer follow-up.", examples: ["Dealerships", "Garages", "Rental"] },
    18|  { icon: ScaleIcon, name: "Legal Services", desc: "Call filtering, appointment scheduling, legal emergencies.", examples: ["Law firms", "Notaries", "Bailiffs"] },
    19|  { icon: HammerIcon, name: "Construction", desc: "Quotes, site monitoring, subcontractor coordination.", examples: ["Contractors", "Architects", "Renovations"] },
    20|  { icon: ComputerIcon, name: "Tech & SaaS", desc: "Level 1 support, client onboarding, escalations.", examples: ["Startups", "SaaS", "Web agencies"] },
    21|  { icon: CartIcon, name: "E-commerce", desc: "Customer service, returns, order tracking, loyalty.", examples: ["Online stores", "Marketplaces", "Dropshipping"] },
    22|  { icon: GraduationIcon, name: "Education", desc: "Enrollments, questions, student and parent follow-up.", examples: ["Schools", "Training centers", "Tutors"] },
    23|  { icon: HotelIcon, name: "Hotels & Tourism", desc: "Reservations, concierge, traveler support.", examples: ["Hotels", "Inns", "Travel agencies"] },
    24|]
    25|
    26|const STATS = [
    27|  { value: '20+', label: 'Sectors served' },
    28|  { value: '500+', label: 'SMEs accompanied' },
    29|  { value: '98%', label: 'Satisfaction rate' },
    30|  { value: '24/7', label: 'Availability' },
    31|]
    32|
    33|
    34|const FAQ = [
    35|  {
    36|    question: "Do you work in all business sectors?",
    37|    answer: "We have experience in over 20 different sectors and we adapt quickly to new fields thanks to our flexible methodology."
    38|  },
    39|  {
    40|    question: "How do you ensure service quality in specialized sectors?",
    41|    answer: "We always start with an in-depth analysis of your sector and specifically train our agents on your terminology and processes."
    42|  }
    43|]
    44|
    45|// SEO-Optimized Sector Articles
    46|const SECTOR_ARTICLES: Article[] = [
    47|  {
    48|    slug: 'sector-restaurant-outsourcing',
    49|    title: "Restaurant Sector: How Phone Outsourcing Multiplies Your Reservations",
    50|    date: "March 15, 2026",
    51|    cat: "Restaurants",
    52|    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    53|    excerpt: "Discover how 3 Quebec restaurants doubled their reservations through professional phone management.",
    54|    author: "Marie-Chantal Dubois",
    55|    readTime: "6 min",
    56|    metaDesc: "Restaurant phone outsourcing Quebec: double your reservations, reduce no-shows, capture every call. Case studies and ROI.",
    57|    keywords: ["restaurant outsourcing", "reservation Quebec", "restaurant customer service", "call center restaurant", "SME restaurant"],
    58|    content: `<p>Restaurants operate on thin margins with long days. The last thing a restaurateur wants is to answer the phone during service.</p>
    59|<h2>The Problem We Don't Want to Admit</h2>
    60|<p>« My servers answer when they can », Pierre, owner of a Plateau bistro, told me. Result: 20% of reservations didn't show up.</p>
    61|<h2>What Outsourcing Brings</h2>
    62|<ul><li>Zero missed calls</li><li>Automatic confirmation</li><li>24/7 availability</li><li>Native French service</li></ul>
    63|<h2>Concrete ROI</h2>
    64|<p>For a 50-100 cover restaurant: Service cost: $400-800/month. Recovered revenue: $2000+/month. Average ROI: 300% from month one.</p>`
    65|  },
    66|  {
    67|    slug: 'sector-healthcare-clinics-telephony',
    68|    title: "Healthcare Sector: Optimizing Medical Appointment Scheduling",
    69|    date: "March 12, 2026",
    70|    cat: "Healthcare",
    71|    img: "https://images.unsplash.com/photo-1519494026895-4e9cceb15c6b?w=800&q=80",
    72|    excerpt: "How medical clinics reduce missed calls and improve patient satisfaction.",
    73|    author: "Dr. Jean-Michel Leclerc",
    74|    readTime: "7 min",
    75|    metaDesc: "Medical clinic phone outsourcing Quebec: 24/7 appointment scheduling, patient reminders, reducing no-shows.",
    76|    keywords: ["healthcare outsourcing", "medical appointments", "Quebec clinic", "medical telephony", "patient reminders"],
    77|    content: `<p>A medical clinic receives an average of 50-100 calls per day.</p>
    78|<h2>Specific Challenges</h2>
    79|<ul><li>Privacy - Law 25 compliance required</li><li>Emergencies - Critical call triage</li><li>Availability - Patients calling after hours</li></ul>
    80|<h2>Measured Results</h2>
    81|<ul><li>Missed calls: 35% to 2%</li><li>No-shows: 22% to 8%</li><li>Patient satisfaction: +40%</li></ul>`
    82|  },
    83|  {
    84|    slug: 'sector-real-estate-lead-qualification',
    85|    title: "Real Estate Sector: Qualify Your Leads in 30 Seconds",
    86|    date: "March 8, 2026",
    87|    cat: "Real Estate",
    88|    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    89|    excerpt: "How real estate agents double their conversions through professional phone qualification.",
    90|    author: "Francois Martel",
    91|    readTime: "5 min",
    92|    metaDesc: "Real estate phone outsourcing Quebec: lead qualification, viewing appointments, buyer follow-up.",
    93|    keywords: ["real estate outsourcing", "lead qualification Quebec", "real estate broker", "viewing appointments"],
    94|    content: `<p>In real estate, every call is a potential sale.</p>
    95|<h2>Our BANQ Method</h2>
    96|<ul><li>Budget - Pre-approval verification</li><li>Authority - Decision maker identification</li><li>Need - Understanding real needs</li><li>Qualification - Lead scoring</li></ul>
    97|<h2>Typical Results</h2>
    98|<ul><li>Qualified leads: +85%</li><li>Conversion rate: 12% to 22%</li></ul>`
    99|  },
   100|  {
   101|    slug: 'sector-automotive-customer-service',
   102|    title: "Automotive Sector: After-Sales Service That Retains",
   103|    date: "March 5, 2026",
   104|    cat: "Automotive",
   105|    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
   106|    excerpt: "How dealerships improve customer satisfaction and workshop appointments.",
   107|    author: "Sophie Bertrand",
   108|    readTime: "5 min",
   109|    metaDesc: "Automotive dealership phone outsourcing Quebec: workshop appointments, after-sales service, customer follow-up.",
   110|    keywords: ["automotive outsourcing", "Quebec dealership", "after-sales service", "workshop appointments"],
   111|    content: `<p>A dealership loses an average of 25% of its customers each year. The main reason? Poor after-sales service.</p>
   112|<h2>Measured Results</h2>
   113|<ul><li>Customer retention: +18%</li><li>Workshop appointments: +40%</li><li>After-sales satisfaction: 68% to 89%</li></ul>`
   114|  },
   115|  {
   116|    slug: 'sector-legal-law-firm',
   117|    title: "Legal Sector: Filter Emergencies, Capture Cases",
   118|    date: "March 1, 2026",
   119|    cat: "Legal",
   120|    img: "https://images.unsplash.com/photo-1589829545856-d10d5576dd6e?w=800&q=80",
   121|    excerpt: "How law firms manage calls with discretion and efficiency.",
   122|    author: "Claire Dupont",
   123|    readTime: "6 min",
   124|    metaDesc: "Law firm phone outsourcing Quebec: call filtering, appointment scheduling, legal emergency handling.",
   125|    keywords: ["legal outsourcing", "Quebec law firm", "notary telephony", "call filtering"],
   126|    content: `<p>In the legal field, every call can be a new case.</p>
   127|<h2>Specific Protocols</h2>
   128|<ul><li>Emergency identification</li><li>Immediate transfer to lawyer</li><li>Guaranteed confidentiality</li></ul>`
   129|  },
   130|  {
   131|    slug: 'sector-construction-btp',
   132|    title: "Construction Sector: Managing Calls on Job Sites",
   133|    date: "February 25, 2026",
   134|    cat: "Construction",
   135|    img: "https://images.unsplash.com/photo-1504307658843-309106c0e9d2?w=800&q=80",
   136|    excerpt: "How construction contractors stay in touch with clients and subcontractors.",
   137|    author: "Rejean Lavoie",
   138|    readTime: "5 min",
   139|    metaDesc: "Construction BTP phone outsourcing Quebec: quote management, site monitoring, subcontractor coordination.",
   140|    keywords: ["BTP outsourcing", "Quebec construction", "site quotes", "subcontractor follow-up"],
   141|    content: `<p>On a job site, you can't answer the phone. But a contractor who doesn't answer loses contracts.</p>
   142|<h2>Adapted Solution</h2>
   143|<p>Our agents are trained in construction terminology. They understand the difference between an emergency and a standard question.</p>`
   144|  },
   145|  {
   146|    slug: 'sector-tech-saas-support',
   147|    title: "Tech Sector: Level 1 Support That Frees Your Devs",
   148|    date: "February 20, 2026",
   149|    cat: "Tech",
   150|    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
   151|    excerpt: "How startups and SaaS reduce support tickets by 60%.",
   152|    author: "Jean-Michel Leclerc",
   153|    readTime: "6 min",
   154|    metaDesc: "SaaS technical support outsourcing Quebec: level 1 support, client onboarding, ticket reduction.",
   155|    keywords: ["tech outsourcing", "SaaS support", "Quebec level 1 support", "client onboarding"],
   156|    content: `<p>Your developers spend 30% of their time answering simple support questions.</p>
   157|<h2>Results</h2>
   158|<ul><li>Level 1 resolved tickets: 65%</li><li>Developer time recovered: 12h/week</li><li>Support satisfaction: +35%</li></ul>`
   159|  },
   160|  {
   161|    slug: 'sector-ecommerce-customer-service',
   162|    title: "E-commerce Sector: Customer Service That Converts Complainers",
   163|    date: "February 15, 2026",
   164|    cat: "E-commerce",
   165|    img: "https://images.unsplash.com/photo-1556742049-0f7977658737?w=800&q=80",
   166|    excerpt: "How online stores turn complaints into loyal customers.",
   167|    author: "Marie-Chantal Dubois",
   168|    readTime: "5 min",
   169|    metaDesc: "E-commerce customer service outsourcing Quebec: returns, order tracking, complaints handling.",
   170|    keywords: ["e-commerce outsourcing", "online store customer service", "product returns", "customer loyalty"],
   171|    content: `<p>In e-commerce, an unhappy customer shares their experience with 15 people.</p>
   172|<h2>Our CS KPIs</h2>
   173|<ul><li>First contact resolution: 85%</li><li>Response time: under 2h</li><li>30% of complaints become sales</li></ul>`
   174|  },
   175|  {
   176|    slug: 'sector-education-enrollments',
   177|    title: "Education Sector: Enrollments and Parent Follow-up",
   178|    date: "February 10, 2026",
   179|    cat: "Education",
   180|    img: "https://images.unsplash.com/photo-1523050854058-8081f5f2f1b8?w=800&q=80",
   181|    excerpt: "How schools and training centers manage enrollments.",
   182|    author: "Sophie Bertrand",
   183|    readTime: "5 min",
   184|    metaDesc: "Education phone outsourcing Quebec: enrollments, parent questions, student follow-up.",
   185|    keywords: ["education outsourcing", "Quebec school enrollments", "parent follow-up", "training center"],
   186|    content: `<p>Enrollment periods are hectic for schools.</p>
   187|<h2>Solution</h2>
   188|<p>A dedicated service during peak periods. Agents trained on your programs, fees, and enrollment processes.</p>`
   189|  },
   190|  {
   191|    slug: 'sector-hospitality-tourism',
   192|    title: "Hospitality Sector: Reservations and Concierge",
   193|    date: "February 5, 2026",
   194|    cat: "Tourism",
   195|    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
   196|    excerpt: "How hotels capture every reservation, even after the front desk closes.",
   197|    author: "Francois Martel",
   198|    readTime: "5 min",
   199|    metaDesc: "Hospitality phone outsourcing Quebec: 24/7 reservations, concierge, traveler support.",
   200|    keywords: ["hospitality outsourcing", "Quebec hotel reservations", "concierge", "traveler support"],
   201|    content: `<p>A hotel that doesn't answer at 10pm loses reservations.</p>
   202|<h2>24/7 Service</h2>
   203|<p>Our agents answer around the clock, in French and English. Direct integration with your PMS.</p>`
   204|  }
   205|]
   206|
   207|function CTAButtons({ slug }: { slug: string }) {
   208|  const { geo, loading } = useGeo()
   209|  const showPhone = !loading && geo.showPhone
   210|  return (
   211|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
   212|      <Link href={`/en/contact?service=${slug}`}
   213|        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
   214|        Free Demo
   215|      </Link>
   216|      {showPhone ? (
   217|        <a href={`tel:${CONTACT.phone}`}
   218|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
   219|          {CONTACT.phoneDisplay}
   220|        </a>
   221|      ) : (
   222|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
   223|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
   224|          WhatsApp 24/7
   225|        </a>
   226|      )}
   227|    </div>
   228|  )
   229|}
   230|
   231|export default function Sectors() {
   232|  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
   233|
   234|  return (
   235|    <>
   236|      {/* SECTION 1: LIGHT HERO */}
   237|      <section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
   238|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   239|          <div className="flex flex-col lg:flex-row items-center gap-12">
   240|<div className="w-full lg:w-[40%]">
   241|							<span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
   242|                <PhoneIcon className="w-4 h-4" /> Business Sectors
   243|              </span>
   244|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
   245|                We Serve<br/>More Than 20 Sectors
   246|              </h1>
   247|              <p className="text-lg text-slate-600 mb-8">From restaurants to technology, through healthcare and real estate, our expertise covers a wide range of industries.</p>
   248|              <CTAButtons slug="sectors"/>
   249|              <div className="flex flex-wrap gap-3">
   250|                {['Restaurants', 'Healthcare', 'Real Estate', 'Technology'].map(b => (
   251|                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
   252|                ))}
   253|              </div>
   254|            </div>
   255|<div className="w-full lg:w-[60%]">
   256|							<div className="relative">
   257|								<img src={`${basePath}/images/secteurs-hero.webp`} alt="Diversity of sectors served"
   258|                  className="rounded-2xl shadow-2xl w-full object-cover"
   259|                  style={{maxHeight:'550px', objectFit:'cover'}}/>
   260|                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
   261|                  <div className="flex items-center gap-2.5">
   262|                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
   263|                      <PhoneIcon className="w-5 h-5 text-indigo-600" />
   264|                    </div>
   265|                    <div><p className="font-black text-sm">{"20+"}</p><p className="text-slate-500 text-xs">sectors served</p></div>
   266|                  </div>
   267|                </div>
   268|              </div>
   269|            </div>
   270|          </div>
   271|        </div>
   272|      </section>
   273|
   274|      {/* SECTION 2: DARK - STATS */}
   275|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-28 overflow-hidden relative">
   276|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
   277|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
   278|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
   279|        </div>
   280|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
   281|          <div className="text-center mb-12">
   282|            <h2 className="text-3xl lg:text-4xl font-black mb-4">Our Expertise in Numbers</h2>
   283|            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Concrete results across all sectors we serve</p>
   284|          </div>
   285|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
   286|            {STATS.map(({value, label}) => (
   287|              <div key={label}>
   288|                <p className="text-4xl font-black text-indigo-400">{value}</p>
   289|                <p className="text-slate-200 text-sm mt-1 font-medium">{label}</p>
   290|              </div>
   291|            ))}
   292|          </div>
   293|        </div>
   294|      </section>
   295|
   296|      {/* SECTION 3: SECTORS GRID */}
   297|      <section className="py-20 bg-slate-50">
   298|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   299|          <div className="text-center mb-12">
   300|            <h2 className="text-3xl font-black text-slate-900 mb-2">Our Sectors of Expertise</h2>
   301|            <p className="text-slate-500 mb-4">Click on a sector to discover our detailed expertise</p>
   302|            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
   303|          </div>
   304|          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   305|            {SECTORS.slice(0, 8).map(({icon: Icon, name, desc}) => (
   306|              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all cursor-pointer hover:border-indigo-200"
   307|                onClick={() => {
   308|                  const article = SECTOR_ARTICLES.find(a => a.cat.toLowerCase() === name.toLowerCase() || a.cat.toLowerCase().includes(name.toLowerCase().split(' ')[0]))
   309|                  if (article) setSelectedArticle(article)
   310|                }}>
   311|                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
   312|                  <Icon className="w-6 h-6 text-indigo-600" />
   313|                </div>
   314|                <h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
   315|                <p className="text-slate-500 text-sm">{desc}</p>
   316|                <div className="mt-4">
   317|                  <span className="text-indigo-600 text-sm font-medium">View details</span>
   318|                </div>
   319|              </div>
   320|            ))}
   321|          </div>
   322|        </div>
   323|      </section>
   324|
   325|      {/* SECTION 4: ARTICLES GRID */}
   326|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-24 overflow-hidden relative">
   327|        <div className="absolute inset-0 pointer-events-none overflow-hidden">
   328|          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
   329|          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
   330|        </div>
   331|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
   332|          <div className="text-center mb-12">
   333|            <h2 className="text-3xl lg:text-4xl font-black mb-4">Sector Expertise</h2>
   334|            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">In-depth articles on each business sector</p>
   335|          </div>
   336|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   337|            {SECTOR_ARTICLES.slice(0, 8).map((article) => (
   338|              <article key={article.slug}
   339|                className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
   340|                onClick={() => setSelectedArticle(article)}>
   341|                <img src={article.img} alt={article.title} loading="lazy"
   342|                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
   343|                <div className="p-4">
   344|                  <div className="flex items-center gap-2 mb-2">
   345|                    <span className="bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-2 py-1 rounded-full">{article.cat}</span>
   346|                    <span className="text-slate-200 text-xs">{article.readTime}</span>
   347|                  </div>
   348|                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors text-sm leading-tight">{article.title}</h3>
   349|                  <p className="text-indigo-200 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
   350|                  <span className="text-indigo-300 text-xs font-semibold group-hover:underline">Read article</span>
   351|                </div>
   352|              </article>
   353|            ))}
   354|          </div>
   355|        </div>
   356|      </section>
   357|
   358|{/* SECTION 5: TESTIMONIALS AUTO-SLIDE */}
   359|<section className="py-20 bg-slate-50 overflow-hidden">
   360|<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   361|<div className="text-center mb-12">
   362|<h2 className="text-3xl font-black text-slate-900 mb-3">What our clients really say</h2>
   363|<div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
   364|</div>
   365|</div>
   366|<GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="sm" basePath={basePath} />
   367|</section>
   368|
   369|      {/* SECTION 6: FAQ */}
   370|      <section className="py-20 bg-white">
   371|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   372|          <div className="text-center mb-12">
   373|            <h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
   374|            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
   375|          </div>
   376|          <div className="space-y-6">
   377|            {FAQ.map(({question, answer}, index) => (
   378|              <div key={index} className="bg-slate-50 rounded-2xl p-6">
   379|                <div className="flex items-start gap-4 mb-3">
   380|                  <div className="flex-shrink-0">
   381|                    <QuestionIcon className="w-5 h-5 text-indigo-600" />
   382|                  </div>
   383|                  <div>
   384|                    <h3 className="font-bold text-slate-900">{question}</h3>
   385|                    <p className="text-slate-500">{answer}</p>
   386|                  </div>
   387|                </div>
   388|              </div>
   389|            ))}
   390|          </div>
   391|        </div>
   392|      </section>
   393|
   394|      {/* SECTION 7: BENEFITS */}
   395|      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 text-white">
   396|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   397|          <div className="text-center mb-12">
   398|            <h2 className="text-3xl font-black text-white mb-3">Additional Benefits</h2>
   399|            <div className="w-16 h-1 bg-indigo-400 mx-auto rounded-full"/>
   400|          </div>
   401|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
   402|            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   403|              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   404|                <ShieldCheckIcon className="w-6 h-6 text-indigo-300" />
   405|              </div>
   406|<h3 className="font-bold text-lg text-white mb-2">Full Compliance</h3>
   407|						<p className="text-slate-200 text-sm">Meeting the strictest regulations in every sector.</p>
   408|					</div>
   409|					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   410|						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   411|							<UsersIcon className="w-6 h-6 text-indigo-300" />
   412|						</div>
   413|						<h3 className="font-bold text-lg text-white mb-2">Constant Evolution</h3>
   414|						<p className="text-slate-200 text-sm">Regular updates based on field feedback.</p>
   415|					</div>
   416|					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   417|						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   418|							<ClockIcon className="w-6 h-6 text-indigo-300" />
   419|						</div>
   420|						<h3 className="font-bold text-lg text-white mb-2">Dedicated Support</h3>
   421|						<p className="text-slate-200 text-sm">Support team available to optimize your service.</p>
   422|					</div>
   423|					<div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
   424|						<div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
   425|							<CheckIcon className="w-6 h-6 text-indigo-300" />
   426|						</div>
   427|						<h3 className="font-bold text-lg text-white mb-2">Quality Guarantee</h3>
   428|						<p className="text-slate-200 text-sm">Guaranteed SLA and real-time performance tracking.</p>
   429|            </div>
   430|          </div>
   431|        </div>
   432|      </section>
   433|
   434|      {/* SECTION 8: CTA */}
   435|      <section className="py-20 bg-slate-50">
   436|        <div className="max-w-4xl mx-auto px-4 text-center">
   437|          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to optimize your customer relations?</h2>
   438|          <p className="text-slate-500 text-lg mb-10">Up and running in 48h. No long-term commitment. We start whenever you're ready.</p>
   439|          <CTAButtons slug="sectors"/>
   440|        </div>
   441|      </section>
   442|
   443|      {/* ARTICLE MODAL */}
   444|      {selectedArticle && (
   445|<BlogArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
   446|)}
   447|<ServiceSchema name="Industry Sectors" description="Phone services tailored to each sector: restaurants, healthcare, real estate, legal, and more" slug="sectors" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
   448|<FAQSchema faqs={[
   449|  { question: "What sectors does Smart Hotline serve?", answer: "We serve all sectors: restaurants, healthcare, real estate, legal, retail, education, hospitality, and more. Each sector receives customized service." },
   450|  { question: "How do you adapt service to my sector?", answer: "We train our agents on your industry specifics: vocabulary, regulations, client expectations. Your service is tailored." },
   451|  { question: "Can I change sectors?", answer: "Yes, your service evolves with you. If you diversify, we adapt scripts and training." },
   452|  { question: "Do you have experience in my field?", answer: "With over 150 companies served, we have experience in most sectors. Ask us!" }
   453|]} />
   454|</>
   455|  )
   456|}
   457|