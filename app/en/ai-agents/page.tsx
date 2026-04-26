'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { BoltIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, StarIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'
import { AIAgentSchema } from '@/components/AIAgentSchema'
import GeoTestimonials from '@/components/GeoTestimonials'

const FEATURES = [
{icon: BoltIcon, title: 'Instant Response', desc: 'Under 2 seconds, 24/7, no hold time ever.'},
{icon: CalendarIcon, title: 'Appointment Booking', desc: 'Synced with Google Calendar, Calendly. Auto confirmation.'},
{icon: QuestionIcon, title: 'Automated FAQ', desc: 'Answers common questions: hours, rates, location.'},
{icon: TransferIcon, title: 'Smart Transfer', desc: 'Detects complex situations, transfers to advisor.'},
]


function CTAButtons({ slug }: { slug: string }) {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href={`/en/contact?service=${slug}`} className="bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
Free Demo
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center hover:shadow-xl">
WhatsApp 24/7
</a>
)}
</div>
)
}

export default function Page() {
return (
<>
{/* SECTION 1: HERO */}
<section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-[40%] animate-slide-left">
<span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<BoltIcon className="w-5 h-5" /> AI Voice Agents
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Sophie, Your AI<br/>
<span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Native English Agent 24/7</span>
</h1>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">She responds in under 2 seconds. With the accent you want. And the best part? Your callers won't know it's AI — they'll just think your receptionist is super efficient.</p>
<CTAButtons slug="ia"/>
<div className="flex flex-wrap gap-3 mt-6">
{['Response < 2 sec', 'Accent of choice', '24/7 even at night', 'Per-minute rate'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-violet-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-[60%] animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/agents-ia-hero.webp`} alt="AI Agent Sophie" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<BoltIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">2 seconds max</p>
<p className="text-slate-500 text-sm">no hold music</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 2: FEATURES */}
<section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
<p className="text-violet-200 text-xl max-w-2xl mx-auto">Everything needed to never miss a call again.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-violet-200 leading-relaxed">{desc}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 3: STATS */}
<section className="bg-white py-16 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">98%</p>
<p className="text-slate-600 mt-2 font-medium text-lg">Satisfaction Rate</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">2s</p>
<p className="text-slate-600 mt-2 font-medium text-lg">Response Time</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">500+</p>
<p className="text-slate-600 mt-2 font-medium text-lg">Businesses Served</p>
</div>
<div className="modern-box p-8">
<p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">24/7</p>
<p className="text-slate-600 mt-2 font-medium text-lg">Availability</p>
</div>
</div>
</div>
</section>

{/* SECTION 4: HOW IT WORKS */}
<section className="py-20 bg-gradient-to-br from-slate-50 to-white">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{[
{n: '1', t: 'Configuration', d: 'Voice, script, and knowledge base customization'},
{n: '2', t: 'Test & Validate', d: 'Real call simulations to validate responses'},
{n: '3', t: 'Integration', d: 'Connected to your existing number in under 24h'},
{n: '4', t: 'Go Live', d: 'Sophie handles your calls. Real-time dashboard'},
].map((step, i) => (
<div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
<p className="text-slate-600 leading-relaxed">{step.d}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 5: DARK - BENEFITS */}
<section className="bg-gradient-to-br from-slate-900 via-violet-950 to-purple-900 text-white py-20 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 relative">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose Sophie?</h2>
<p className="text-xl text-violet-200 mb-8 leading-relaxed">Sophie doesn't sleep, doesn't take breaks, and never has a bad day. She handles the repetitive stuff so your team can focus on what really matters.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-4 text-white text-lg">
<span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
Quebec, France, or Belgium accent available
</li>
<li className="flex items-center gap-4 text-white text-lg">
<span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
Transcription and analysis of every call
</li>
<li className="flex items-center gap-4 text-white text-lg">
<span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
70% cheaper than a receptionist
</li>
<li className="flex items-center gap-4 text-white text-lg">
<span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
Installation in 24-48h
</li>
</ul>
<Link href="/en/contact?service=ia" className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
See a Demo
</Link>
</div>
<div className="w-full lg:w-1/2">
<div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
<h3 className="font-bold text-2xl text-white mb-6">Per-minute rates</h3>
<p className="text-violet-200 text-lg mb-4">You only pay for what you use. No fixed fees, no commitment.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> No setup fees</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Cancel anytime</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-violet-400"/> Support included</li>
</ul>
<Link href="/en/pricing" className="text-violet-400 font-bold text-lg hover:underline flex items-center gap-2">
View all pricing
</Link>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 6: TESTIMONIALS - AUTO-SLIDE */}
<section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
</div>
</div>
<GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
</section>

{/* SECTION 7: FINAL CTA */}
<section className="bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Never Miss a Call?</h2>
<p className="text-violet-200 text-xl mb-12 max-w-2xl mx-auto">2-week free trial. No commitment. We start when you're ready.</p>
<CTAButtons slug="ia"/>
<p className="text-violet-300 mt-8 text-lg">
<Link href="/en/pricing" className="underline hover:text-white transition-colors">View pricing</Link>
<span className="mx-3">·</span>
<Link href="/en/contact" className="underline hover:text-white transition-colors">Contact us</Link>
</p>
</div>
</section>

{/* SECTION 8: FAQ */}
<section className="bg-white py-20">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Will callers know they're talking to AI?", a: "Most don't notice. Sophie speaks naturally, handles interruptions, and adjusts her pace. We've had clients whose customers specifically complimented 'your lovely receptionist.'"},
{q: 'What languages does Sophie speak?', a: 'Native French (Quebec, France, Belgium), English and Spanish. She switches automatically based on what the caller uses.'},
{q: 'How long does Sophie take to install?', a: 'Usually 24-48 hours. We configure the voice, script and knowledge base, then test with real scenarios before going live.'},
{q: 'What if Sophie gets stuck?', a: "She transfers to a human. That's the point — handle the routine perfectly, escalate the complex to you."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/en/contact?service=ia" className="inline-block bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Start Now
</Link>
</div>
</div>
</section>
<ServiceSchema name="AI Voice Agents" description="AI voice agent Sophie - under 2 second response, 24/7 availability" slug="ai-agents" offers={{ priceFrom: "0.11", priceCurrency: "USD" }} />
<AIAgentSchema
name="Sophie"
description="Professional AI voice assistant for SMBs. Answers calls in under 2 seconds, 24/7, with native French (Quebec, France, Belgium, Switzerland) and English accents."
capabilities={[
"Instant call answering",
"Automated appointment booking",
"FAQ automation",
"Smart transfer to humans",
"Message taking and notifications",
"Real-time analytics",
"CRM integration",
"Multilingual support"
]}
responseTime="2 seconds"
availability="24/7, 365 days a year"
languages={["French (Quebec)", "French (France)", "French (Belgium)", "French (Switzerland)", "English (North American)"]}
pricingModel="per-minute billing"
startingPrice={{ amount: "0.08", currency: "CAD", unit: "minute" }}
/>
<FAQSchema faqs={[
{ question: "Will callers know they're talking to AI?", answer: "Most don't notice. Sophie speaks naturally, handles interruptions, and adjusts her pace. We've had clients whose customers specifically complimented 'your lovely receptionist.'" },
{ question: "What languages does Sophie speak?", answer: "Native French (Quebec, France, Belgium), English and Spanish. She switches automatically based on what the caller uses." },
{ question: "How long does Sophie take to install?", answer: "Usually 24-48 hours. We configure the voice, script and knowledge base, then test with real scenarios before going live." },
{ question: "What if Sophie gets stuck?", answer: "She transfers to a human. That's the point — handle the routine perfectly, escalate the complex to you." }
]} />
</>
)
}
