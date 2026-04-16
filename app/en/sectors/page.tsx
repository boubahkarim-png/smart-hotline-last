'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useState } from 'react'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import BlogArticleModal, { type Article } from '@/components/BlogArticleModal'
import { PhoneIcon, QuestionIcon, CheckIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon, HotelIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const SECTORS = [
  { icon: UtensilsIcon, name: "Restaurants", desc: "Reservations, delivery, customer service. Never miss an order.", examples: ["Restaurants", "Caterers", "Dark kitchens"] },
  { icon: HeartIcon, name: "Healthcare", desc: "Appointment scheduling, patient reminders, emergencies. Available 24/7.", examples: ["Clinics", "Doctors", "Physiotherapy"] },
  { icon: BuildingIcon, name: "Real Estate", desc: "Buyer qualification, property viewings, lead follow-up.", examples: ["Agencies", "Brokers", "Developers"] },
  { icon: CarIcon, name: "Automotive", desc: "After-sales service, workshop appointments, customer follow-up.", examples: ["Dealerships", "Garages", "Rental"] },
  { icon: ScaleIcon, name: "Legal Services", desc: "Call filtering, appointment scheduling, legal emergencies.", examples: ["Law firms", "Notaries", "Bailiffs"] },
  { icon: HammerIcon, name: "Construction", desc: "Quotes, site monitoring, subcontractor coordination.", examples: ["Contractors", "Architects", "Renovations"] },
  { icon: ComputerIcon, name: "Tech & SaaS", desc: "Level 1 support, client onboarding, escalations.", examples: ["Startups", "SaaS", "Web agencies"] },
  { icon: CartIcon, name: "E-commerce", desc: "Customer service, returns, order tracking, loyalty.", examples: ["Online stores", "Marketplaces", "Dropshipping"] },
  { icon: GraduationIcon, name: "Education", desc: "Enrollments, questions, student and parent follow-up.", examples: ["Schools", "Training centers", "Tutors"] },
  { icon: HotelIcon, name: "Hotels & Tourism", desc: "Reservations, concierge, traveler support.", examples: ["Hotels", "Inns", "Travel agencies"] },
]

const STATS = [
  { value: '20+', label: 'Sectors served' },
  { value: '500+', label: 'SMEs accompanied' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '24/7', label: 'Availability' },
]

const TESTIMONIALS = [
{
quote: "Smart Hotline really understands our restaurant industry. They manage our reservations and deliveries with impressive efficiency.",
name: "Marie-Lucie Boucher",
role: "Owner, Restaurant Le Petit Jerome",
img: '/images/testimonial-1.jpg'
},
{
quote: "Thanks to their outbound calling service, we increased our appointment bookings by 60% in 3 months.",
name: "Thomas Girard",
role: "Director, Clinique Medicale Plus",
img: '/images/testimonial-2.jpg'
},
{
quote: "In our legal field, every call counts. They perfectly filter emergencies and handle appointments properly.",
name: "Claire Dupont",
role: "Partner, Cabinet Dupont & Mercier",
img: '/images/testimonial-3.jpg'
},
{
quote: "In construction, it's not always easy to manage calls on job sites. They get our reality and it makes all the difference.",
name: "Rejean Lavoie",
role: "Owner, Construction Lavoie",
img: '/images/testimonial-4.jpg'
}
]

const FAQ = [
  {
    question: "Do you work in all business sectors?",
    answer: "We have experience in over 20 different sectors and we adapt quickly to new fields thanks to our flexible methodology."
  },
  {
    question: "How do you ensure service quality in specialized sectors?",
    answer: "We always start with an in-depth analysis of your sector and specifically train our agents on your terminology and processes."
  }
]

// SEO-Optimized Sector Articles
const SECTOR_ARTICLES: Article[] = [
  {
    slug: 'sector-restaurant-outsourcing',
    title: "Restaurant Sector: How Phone Outsourcing Multiplies Your Reservations",
    date: "March 15, 2026",
    cat: "Restaurants",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    excerpt: "Discover how 3 Quebec restaurants doubled their reservations through professional phone management.",
    author: "Marie-Chantal Dubois",
    readTime: "6 min",
    metaDesc: "Restaurant phone outsourcing Quebec: double your reservations, reduce no-shows, capture every call. Case studies and ROI.",
    keywords: ["restaurant outsourcing", "reservation Quebec", "restaurant customer service", "call center restaurant", "SME restaurant"],
    content: `<p>Restaurants operate on thin margins with long days. The last thing a restaurateur wants is to answer the phone during service.</p>
<h2>The Problem We Don't Want to Admit</h2>
<p>« My servers answer when they can », Pierre, owner of a Plateau bistro, told me. Result: 20% of reservations didn't show up.</p>
<h2>What Outsourcing Brings</h2>
<ul><li>Zero missed calls</li><li>Automatic confirmation</li><li>24/7 availability</li><li>Native French service</li></ul>
<h2>Concrete ROI</h2>
<p>For a 50-100 cover restaurant: Service cost: $400-800/month. Recovered revenue: $2000+/month. Average ROI: 300% from month one.</p>`
  },
  {
    slug: 'sector-healthcare-clinics-telephony',
    title: "Healthcare Sector: Optimizing Medical Appointment Scheduling",
    date: "March 12, 2026",
    cat: "Healthcare",
    img: "https://images.unsplash.com/photo-1519494026895-4e9cceb15c6b?w=800&q=80",
    excerpt: "How medical clinics reduce missed calls and improve patient satisfaction.",
    author: "Dr. Jean-Michel Leclerc",
    readTime: "7 min",
    metaDesc: "Medical clinic phone outsourcing Quebec: 24/7 appointment scheduling, patient reminders, reducing no-shows.",
    keywords: ["healthcare outsourcing", "medical appointments", "Quebec clinic", "medical telephony", "patient reminders"],
    content: `<p>A medical clinic receives an average of 50-100 calls per day.</p>
<h2>Specific Challenges</h2>
<ul><li>Privacy - Law 25 compliance required</li><li>Emergencies - Critical call triage</li><li>Availability - Patients calling after hours</li></ul>
<h2>Measured Results</h2>
<ul><li>Missed calls: 35% to 2%</li><li>No-shows: 22% to 8%</li><li>Patient satisfaction: +40%</li></ul>`
  },
  {
    slug: 'sector-real-estate-lead-qualification',
    title: "Real Estate Sector: Qualify Your Leads in 30 Seconds",
    date: "March 8, 2026",
    cat: "Real Estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    excerpt: "How real estate agents double their conversions through professional phone qualification.",
    author: "Francois Martel",
    readTime: "5 min",
    metaDesc: "Real estate phone outsourcing Quebec: lead qualification, viewing appointments, buyer follow-up.",
    keywords: ["real estate outsourcing", "lead qualification Quebec", "real estate broker", "viewing appointments"],
    content: `<p>In real estate, every call is a potential sale.</p>
<h2>Our BANQ Method</h2>
<ul><li>Budget - Pre-approval verification</li><li>Authority - Decision maker identification</li><li>Need - Understanding real needs</li><li>Qualification - Lead scoring</li></ul>
<h2>Typical Results</h2>
<ul><li>Qualified leads: +85%</li><li>Conversion rate: 12% to 22%</li></ul>`
  },
  {
    slug: 'sector-automotive-customer-service',
    title: "Automotive Sector: After-Sales Service That Retains",
    date: "March 5, 2026",
    cat: "Automotive",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    excerpt: "How dealerships improve customer satisfaction and workshop appointments.",
    author: "Sophie Bertrand",
    readTime: "5 min",
    metaDesc: "Automotive dealership phone outsourcing Quebec: workshop appointments, after-sales service, customer follow-up.",
    keywords: ["automotive outsourcing", "Quebec dealership", "after-sales service", "workshop appointments"],
    content: `<p>A dealership loses an average of 25% of its customers each year. The main reason? Poor after-sales service.</p>
<h2>Measured Results</h2>
<ul><li>Customer retention: +18%</li><li>Workshop appointments: +40%</li><li>After-sales satisfaction: 68% to 89%</li></ul>`
  },
  {
    slug: 'sector-legal-law-firm',
    title: "Legal Sector: Filter Emergencies, Capture Cases",
    date: "March 1, 2026",
    cat: "Legal",
    img: "https://images.unsplash.com/photo-1589829545856-d10d5576dd6e?w=800&q=80",
    excerpt: "How law firms manage calls with discretion and efficiency.",
    author: "Claire Dupont",
    readTime: "6 min",
    metaDesc: "Law firm phone outsourcing Quebec: call filtering, appointment scheduling, legal emergency handling.",
    keywords: ["legal outsourcing", "Quebec law firm", "notary telephony", "call filtering"],
    content: `<p>In the legal field, every call can be a new case.</p>
<h2>Specific Protocols</h2>
<ul><li>Emergency identification</li><li>Immediate transfer to lawyer</li><li>Guaranteed confidentiality</li></ul>`
  },
  {
    slug: 'sector-construction-btp',
    title: "Construction Sector: Managing Calls on Job Sites",
    date: "February 25, 2026",
    cat: "Construction",
    img: "https://images.unsplash.com/photo-1504307658843-309106c0e9d2?w=800&q=80",
    excerpt: "How construction contractors stay in touch with clients and subcontractors.",
    author: "Rejean Lavoie",
    readTime: "5 min",
    metaDesc: "Construction BTP phone outsourcing Quebec: quote management, site monitoring, subcontractor coordination.",
    keywords: ["BTP outsourcing", "Quebec construction", "site quotes", "subcontractor follow-up"],
    content: `<p>On a job site, you can't answer the phone. But a contractor who doesn't answer loses contracts.</p>
<h2>Adapted Solution</h2>
<p>Our agents are trained in construction terminology. They understand the difference between an emergency and a standard question.</p>`
  },
  {
    slug: 'sector-tech-saas-support',
    title: "Tech Sector: Level 1 Support That Frees Your Devs",
    date: "February 20, 2026",
    cat: "Tech",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    excerpt: "How startups and SaaS reduce support tickets by 60%.",
    author: "Jean-Michel Leclerc",
    readTime: "6 min",
    metaDesc: "SaaS technical support outsourcing Quebec: level 1 support, client onboarding, ticket reduction.",
    keywords: ["tech outsourcing", "SaaS support", "Quebec level 1 support", "client onboarding"],
    content: `<p>Your developers spend 30% of their time answering simple support questions.</p>
<h2>Results</h2>
<ul><li>Level 1 resolved tickets: 65%</li><li>Developer time recovered: 12h/week</li><li>Support satisfaction: +35%</li></ul>`
  },
  {
    slug: 'sector-ecommerce-customer-service',
    title: "E-commerce Sector: Customer Service That Converts Complainers",
    date: "February 15, 2026",
    cat: "E-commerce",
    img: "https://images.unsplash.com/photo-1556742049-0f7977658737?w=800&q=80",
    excerpt: "How online stores turn complaints into loyal customers.",
    author: "Marie-Chantal Dubois",
    readTime: "5 min",
    metaDesc: "E-commerce customer service outsourcing Quebec: returns, order tracking, complaints handling.",
    keywords: ["e-commerce outsourcing", "online store customer service", "product returns", "customer loyalty"],
    content: `<p>In e-commerce, an unhappy customer shares their experience with 15 people.</p>
<h2>Our CS KPIs</h2>
<ul><li>First contact resolution: 85%</li><li>Response time: under 2h</li><li>30% of complaints become sales</li></ul>`
  },
  {
    slug: 'sector-education-enrollments',
    title: "Education Sector: Enrollments and Parent Follow-up",
    date: "February 10, 2026",
    cat: "Education",
    img: "https://images.unsplash.com/photo-1523050854058-8081f5f2f1b8?w=800&q=80",
    excerpt: "How schools and training centers manage enrollments.",
    author: "Sophie Bertrand",
    readTime: "5 min",
    metaDesc: "Education phone outsourcing Quebec: enrollments, parent questions, student follow-up.",
    keywords: ["education outsourcing", "Quebec school enrollments", "parent follow-up", "training center"],
    content: `<p>Enrollment periods are hectic for schools.</p>
<h2>Solution</h2>
<p>A dedicated service during peak periods. Agents trained on your programs, fees, and enrollment processes.</p>`
  },
  {
    slug: 'sector-hospitality-tourism',
    title: "Hospitality Sector: Reservations and Concierge",
    date: "February 5, 2026",
    cat: "Tourism",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    excerpt: "How hotels capture every reservation, even after the front desk closes.",
    author: "Francois Martel",
    readTime: "5 min",
    metaDesc: "Hospitality phone outsourcing Quebec: 24/7 reservations, concierge, traveler support.",
    keywords: ["hospitality outsourcing", "Quebec hotel reservations", "concierge", "traveler support"],
    content: `<p>A hotel that doesn't answer at 10pm loses reservations.</p>
<h2>24/7 Service</h2>
<p>Our agents answer around the clock, in French and English. Direct integration with your PMS.</p>`
  }
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all text-center">
          WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Sectors() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  return (
    <>
      {/* SECTION 1: LIGHT HERO */}
      <section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[40%]">
							<span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
                <PhoneIcon className="w-4 h-4" /> Business Sectors
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                We Serve<br/>More Than 20 Sectors
              </h1>
              <p className="text-lg text-slate-600 mb-8">From restaurants to technology, through healthcare and real estate, our expertise covers a wide range of industries.</p>
              <CTAButtons slug="sectors"/>
              <div className="flex flex-wrap gap-3">
                {['Restaurants', 'Healthcare', 'Real Estate', 'Technology'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
                ))}
              </div>
            </div>
<div className="w-full lg:w-[60%]">
							<div className="relative">
								<img src={`${basePath}/images/secteurs-hero.webp`} alt="Diversity of sectors served"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div><p className="font-black text-sm">{"20+"}</p><p className="text-slate-500 text-xs">sectors served</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - STATS */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Our Expertise in Numbers</h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Concrete results across all sectors we serve</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({value, label}) => (
              <div key={label}>
                <p className="text-4xl font-black text-indigo-400">{value}</p>
                <p className="text-slate-300 text-sm mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SECTORS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Our Sectors of Expertise</h2>
            <p className="text-slate-500 mb-4">Click on a sector to discover our detailed expertise</p>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.slice(0, 8).map(({icon: Icon, name, desc}) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all cursor-pointer hover:border-indigo-200"
                onClick={() => {
                  const article = SECTOR_ARTICLES.find(a => a.cat.toLowerCase() === name.toLowerCase() || a.cat.toLowerCase().includes(name.toLowerCase().split(' ')[0]))
                  if (article) setSelectedArticle(article)
                }}>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 text-sm font-medium">View details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ARTICLES GRID */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Sector Expertise</h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">In-depth articles on each business sector</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SECTOR_ARTICLES.slice(0, 8).map((article) => (
              <article key={article.slug}
                className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                onClick={() => setSelectedArticle(article)}>
                <img src={article.img} alt={article.title} loading="lazy"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-2 py-1 rounded-full">{article.cat}</span>
                    <span className="text-slate-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors text-sm leading-tight">{article.title}</h3>
                  <p className="text-indigo-200 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
                  <span className="text-indigo-300 text-xs font-semibold group-hover:underline">Read article</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS AUTO-SLIDE */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">What our clients really say</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
      {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
      <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg min-w-[320px] max-w-[320px] flex-shrink-0">
        <div className="flex gap-0.5 mb-4">
        {[1,2,3,4,5].map(s => <CheckIcon key={s} className="w-5 h-5 text-indigo-400" />)}
        </div>
        <p className="text-slate-700 mb-5 leading-relaxed italic">"{t.quote}"</p>
        <div className="flex items-center gap-3">
        <img src={basePath + t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover shadow-lg" />
        <div>
        <p className="font-bold text-slate-900 text-sm">{t.name}</p>
        <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
          </div>
          <div className="space-y-6">
            {FAQ.map(({question, answer}, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <QuestionIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{question}</h3>
                    <p className="text-slate-500">{answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BENEFITS */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Additional Benefits</h2>
            <div className="w-16 h-1 bg-indigo-400 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Full Compliance</h3>
              <p className="text-slate-300 text-sm">Meeting the strictest regulations in every sector.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Constant Evolution</h3>
              <p className="text-slate-300 text-sm">Regular updates based on field feedback.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Dedicated Support</h3>
              <p className="text-slate-300 text-sm">Support team available to optimize your service.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Quality Guarantee</h3>
              <p className="text-slate-300 text-sm">Guaranteed SLA and real-time performance tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to optimize your customer relations?</h2>
          <p className="text-slate-500 text-lg mb-10">Up and running in 48h. No long-term commitment. We start whenever you're ready.</p>
          <CTAButtons slug="sectors"/>
        </div>
      </section>

      {/* ARTICLE MODAL */}
      {selectedArticle && (
<BlogArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
)}
<ServiceSchema name="Industry Sectors" description="Phone services tailored to each sector: restaurants, healthcare, real estate, legal, and more" slug="sectors" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "What sectors does Smart Hotline serve?", answer: "We serve all sectors: restaurants, healthcare, real estate, legal, retail, education, hospitality, and more. Each sector receives customized service." },
  { question: "How do you adapt service to my sector?", answer: "We train our agents on your industry specifics: vocabulary, regulations, client expectations. Your service is tailored." },
  { question: "Can I change sectors?", answer: "Yes, your service evolves with you. If you diversify, we adapt scripts and training." },
  { question: "Do you have experience in my field?", answer: "With over 150 companies served, we have experience in most sectors. Ask us!" }
]} />
</>
  )
}
