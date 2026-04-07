'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'
import GeoStats from '@/components/GeoStats'
import ScrollAnimate from '@/components/ScrollAnimate'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, StarIcon, BanknoteIcon } from '@/components/Icons'

const SERVICES = [
  { Icon: PhoneIcon, title: 'Inbound Calls', desc: '24/7 reception. Zero missed calls.', href: '/en/inbound', bg: 'bg-sky-100', color: 'text-sky-700' },
  { Icon: MegaphoneIcon, title: 'Outbound Calls', desc: 'Prospecting & qualified leads.', href: '/en/outbound', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { Icon: BotIcon, title: 'AI Voice Agents', desc: 'Sophie answers in 2 sec, 24/7.', href: '/en/ai-agents', bg: 'bg-violet-100', color: 'text-violet-700', badge: 'New' },
  { Icon: HeadphonesIcon, title: 'Client Support', desc: 'Tickets, email, chat, WhatsApp.', href: '/en/support', bg: 'bg-teal-100', color: 'text-teal-700' },
  { Icon: DatabaseIcon, title: 'CRM & Lists', desc: 'SuiteCRM + B2B/B2C lists.', href: '/en/crm', bg: 'bg-orange-100', color: 'text-orange-700' },
  { Icon: BanknoteIcon, title: 'Our Pricing', desc: 'Competitive rates, no commitment.', href: '/en/pricing', bg: 'bg-amber-100', color: 'text-amber-700', badge: 'Popular' },
]

const MOVING_MESSAGES = [
"500+ calls managed daily",
"98% customer satisfaction",
"Answer in under 3 rings",
"Available 24/7",
"Native French speakers",
"Setup in 48h",
"No long-term commitment",
"CRM included",
"AI + Humans",
"Competitive pricing",
]

const TESTIMONIALS_DATA = [
{ q: "I have a restaurant on the Main. Before, I was easily losing 10-15 customers per week. Now? Zero missed calls.", name: "Pierre Lacroix", role: "Owner, Bistro du Vieux-Montréal", img: "/images/testimonial-1.jpg", alt: "Portrait of Pierre Lacroix, owner of Bistro du Vieux-Montréal" },
{ q: "It\'s not just reception. They take reservations, answer questions. It\'s like having a receptionist, but at a fraction of the cost.", name: "Sophie Mercier", role: "Director, Clinique Médicale Plateau", img: "/images/testimonial-sophie.jpg", alt: "Portrait of Sophie Mercier, director of Clinique Médicale Plateau" },
{ q: "During the holiday rush, they handled over 200 calls per day. My team was calm, customers happy.", name: "Marc-André Dubé", role: "Manager, Électronique QC Store", img: "/images/testimonial-2.jpg", alt: "Portrait of Marc-André Dubé, manager of Électronique QC Store" },
{ q: "We tried 3 other services before. This is the only one where agents really understand our business.", name: "Nathalie Tremblay", role: "Director, Cabinet Tremblay", img: "/images/testimonial-nathalie.jpg", alt: "Portrait of Nathalie Tremblay, director of Cabinet Tremblay" },
]

function CTAButtons() {
const { geo, loading } = useGeo()
const showPhone = !loading && geo.showPhone
return (
<div className="flex flex-col sm:flex-row gap-4 mb-6">
<Link href="/en/contact" className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Free Demo
</Link>
{showPhone ? (
<a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
{CONTACT.phoneDisplay}
</a>
) : (
<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
💬 WhatsApp 24/7
</a>
)}
</div>
)
}

export default function EnHome() {
return (
<>
{/* HERO */}
<section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
<div className="w-full lg:w-1/2 animate-slide-left">
<span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
<span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"/>
Agents & AI Available 24/7
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
Your 24/7 Phone Partner<br/>
<span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">That Understands</span><br/>
Local SMEs
</h1>
<GeoHeroSubtitle lang="en"/>
<CTAButtons />
<div className="flex flex-wrap gap-3 mt-6">
{['24/7 non-stop', 'Setup in 48h', 'No commitment', '98% satisfaction'].map((b, i) => (
<span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
<CheckIcon className="w-5 h-5 text-sky-600" /> {b}
</span>
))}
</div>
</div>
<div className="w-full lg:w-1/2 animate-slide-right">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
<img src={`${basePath}/images/main-hero.webp`} alt="Smart Hotline" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
<div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
<PhoneIcon className="w-7 h-7 text-white" />
</div>
<div>
<p className="font-black text-xl">500+ calls/day</p>
<p className="text-slate-500 text-sm">managed for clients</p>
</div>
</div>
</div>
<div className="absolute -top-5 -right-5 bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-4 shadow-xl text-white">
<p className="font-black text-2xl leading-none">98%</p>
<p className="text-sky-200 text-xs mt-0.5">satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

{/* MOVING MARQUEE */}
<section className="bg-gradient-to-r from-sky-600 to-blue-700 py-4 overflow-hidden">
<div className="marquee">
<div className="flex gap-8 animate-[marquee_30s_linear_infinite]">
{[...MOVING_MESSAGES, ...MOVING_MESSAGES].map((msg, i) => (
<span key={i} className="text-white font-semibold text-sm whitespace-nowrap flex items-center gap-2">
<StarIcon className="w-4 h-4 text-amber-400" /> {msg}
</span>
))}
</div>
</div>
</section>

      {/* SERVICES - DARK */}
      <ScrollAnimate animation="fade-up">
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 text-white border-t-4 border-sky-600 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">Our Solutions</h2>
              <p className="text-sky-200 text-lg">Everything your SME needs for customer relations</p>
              <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full mt-4"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }, i) => (
                <Link key={href} href={href} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:shadow-xl hover:-translate-y-1 transition-all group" style={{animationDelay: `${i * 100}ms`}}>
                  <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-bold text-white">{title}</h3>
                    {badge && <span className="text-xs bg-violet-500/80 text-white px-1.5 py-0.5 rounded-full font-semibold">{badge}</span>}
                  </div>
                  <p className="text-sky-200 text-sm mb-3">{desc}</p>
                  <span className="text-sky-400 text-sm font-semibold group-hover:underline">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* STATS - LIGHT */}
      <section className="bg-white py-16 text-slate-900 border-t-4 border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <p className="text-5xl font-black bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">500+</p>
              <p className="text-slate-600 text-sm mt-2 font-medium">Calls per day</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '100ms'}}>
              <p className="text-5xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">98%</p>
              <p className="text-slate-600 text-sm mt-2 font-medium">Customer satisfaction</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <p className="text-5xl font-black bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">48h</p>
              <p className="text-slate-600 text-sm mt-2 font-medium">Setup time</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <p className="text-5xl font-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">24/7</p>
              <p className="text-slate-600 text-sm mt-2 font-medium">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION - LIGHT */}
      <ScrollAnimate animation="fade-left" delay={1}>
        <section className="py-20 bg-slate-50 border-t-4 border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-4 py-2 rounded-full mb-6 animate-slow-float">
                  <span className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse"/>
                  New Service
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
                  Sophie, the AI Agent<br/>
                  <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">Who Speaks Like Us</span>
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  She answers in under 2 seconds. With your region&apos;s accent — your choice. And it costs a fraction of a salary.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Answers in under 2 seconds', 'Accents adapted to your region', 'Transfer to human if complex', 'Cost: ~30% of a salary', 'Available 24/7'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-6 h-6 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-4 h-4" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/en/ai-agents" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all">
                  Discover AI Agents →
                </Link>
              </div>
              <div className="w-full lg:w-1/2 animate-slide-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                  <img src={`${basePath}/images/agents-ia-hero.webp`} alt="AI Agent Sophie" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* BENEFITS - DARK */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white border-t-4 border-sky-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Smart Hotline?</h2>
              <p className="text-xl text-sky-200 mb-8 leading-relaxed">Representatives who handle your business like it's their own. No robotic scripts — real conversations.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'French & English speaking agents',
                  'Messages via SMS, email, or call',
                  'SME pricing — 40-60% cheaper than an employee',
                  'Cancel anytime — no long contracts',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-lg">
                    <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckIcon className="w-5 h-5"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                See a Demo
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
                <h3 className="font-bold text-2xl text-white mb-6">Pricing that scales with you</h3>
                <p className="text-sky-200 text-lg mb-4">Competitive rates, no long-term commitment. Pay for what you use.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> No hidden fees</li>
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Cancel anytime</li>
                  <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> CRM and autodialer included</li>
                </ul>
                <Link href="/en/pricing" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
                  View all pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - DARK WITH AUTO-SLIDE */}
      <ScrollAnimate animation="fade-up" delay={2}>
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white py-20 border-t-4 border-indigo-700 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-3">What Our Clients Say</h2>
              <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"/>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="testimonial-track testimonial-marquee">
              {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all min-w-[320px] max-w-[320px] flex-shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed italic">"{t.q}"</p>
                  <div className="flex items-center gap-3">
                    <img src={basePath + t.img} alt={t.alt} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* FINAL CTA - DARK */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-20 border-t-4 border-sky-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Never Miss a Call?</h2>
          <p className="text-sky-200 text-lg mb-10">Operational in 48h. No long-term commitment. We start whenever you're ready.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="bg-sky-500 text-white font-bold px-10 py-5 rounded-2xl hover:bg-sky-600 shadow-2xl transition-all">
              Start Now
            </Link>
            <Link href="/en/pricing" className="border-2 border-white text-white font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-sky-900 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
</>
)
}
