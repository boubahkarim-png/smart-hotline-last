'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CheckIcon, QuestionIcon, ShieldCheckIcon, UsersIcon, ClockIcon, UtensilsIcon, HeartIcon, BuildingIcon, CarIcon, ScaleIcon, HammerIcon, ComputerIcon, CartIcon, GraduationIcon } from '@/components/Icons'

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
role: "Owner, Restaurant Le Petit Jérôme",
initials: "MLB"
},
{
quote: "Thanks to their outbound calling service, we increased our appointment bookings by 60% in 3 months.",
name: "Thomas Girard",
role: "Director, Clinique Médicale Plus",
initials: "TG"
},
{
quote: "In our legal field, every call counts. They perfectly filter emergencies and handle appointments properly.",
name: "Claire Dupont",
role: "Partner, Cabinet Dupont & Mercier",
initials: "CD"
},
{
quote: "In construction, it's not always easy to manage calls on job sites. They get our reality and it makes all the difference.",
name: "Réjean Lavoie",
role: "Owner, Construction Lavoie",
initials: "RL"
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
💬 WhatsApp 24/7
</a>
)}
</div>
)
}

export default function Sectors() {
return (
<>
{/* SECTION 1: HERO */}
<section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<PhoneIcon className="w-5 h-5" /> Business Sectors
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
We Serve<br/>
<span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">20+ Industries</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">From restaurants to technology, through healthcare and real estate, our expertise covers a wide range of industries.</p>
<CTAButtons slug="sectors"/>
<div className="flex flex-wrap gap-3 mt-6">
{['Restaurants', 'Healthcare', 'Real Estate', 'Tech'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-indigo-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/secteurs-hero.jpg`} alt="Business Sectors" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<PhoneIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">20+</p>
<p className="text-slate-500 text-sm">sectors served</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 2: FEATURES - DARK */}
<section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">Our Expertise by Industry</h2>
<p className="text-indigo-200 text-xl max-w-2xl mx-auto">Specialized solutions tailored to your sector's unique challenges.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
{SECTORS.slice(0, 6).map(({icon: Icon, name, desc, examples}, i) => (
<div key={name} className={`modern-box-dark p-8 hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{name}</h3>
<p className="text-indigo-200 leading-relaxed mb-4">{desc}</p>
<p className="text-indigo-300 text-sm">Examples: {examples.join(', ')}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 3: STATS */}
<section className="bg-white py-16 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
{STATS.map(({ value, label }) => (
<div key={label} className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">{value}</p>
<p className="text-slate-600 mt-2 font-medium">{label}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 4: MORE SECTORS */}
<section className="bg-slate-50 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">More Industries We Serve</h2>
<div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{SECTORS.slice(6).map(({icon: Icon, name, desc}) => (
<div key={name} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
<Icon className="w-6 h-6 text-indigo-600" />
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">{name}</h3>
<p className="text-slate-500 text-sm">{desc}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 5: TESTIMONIALS */}
<section className="bg-gradient-to-br from-slate-50 to-white py-20">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{TESTIMONIALS.map((t, i) => (
<div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
<div className="flex gap-1 mb-5">
{[1,2,3,4,5].map(s => <span key={s} className="text-amber-400">★</span>)}
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.quote}"</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-white">{t.initials}</div>
<div>
<p className="font-bold text-slate-900">{t.name}</p>
<p className="text-slate-500 text-sm">{t.role}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* SECTION 6: FAQ */}
<section className="bg-white py-20">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-slate-900 mb-3">Frequently Asked Questions</h2>
<div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
</div>
<div className="space-y-6">
{FAQ.map(({question, answer}, index) => (
<div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
<QuestionIcon className="w-5 h-5 text-indigo-600" />
</div>
<div>
<h3 className="font-bold text-slate-900 mb-2">{question}</h3>
<p className="text-slate-600">{answer}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* SECTION 7: CTA */}
<section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 text-white">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Optimize Your Customer Relations?</h2>
<p className="text-indigo-200 text-lg mb-10">Operational in 48h. No long-term commitment. We start whenever you're ready.</p>
<CTAButtons slug="sectors"/>
</div>
</section>
</>
)
}
