'use client'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'
import VideoHero from '@/components/VideoHero'
import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const SERVICES = [
  { Icon: PhoneIcon, title: 'Inbound Calls', desc: '24/7 reception. Zero missed calls.', href: '/en/inbound', bg: 'bg-blue-100', color: 'text-blue-700' },
  { Icon: MegaphoneIcon, title: 'Outbound Calls', desc: 'Prospecting & qualified leads.', href: '/en/outbound', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { Icon: BotIcon, title: 'AI Voice Agents', desc: 'Sophie answers in 2 sec, 24/7.', href: '/en/ai-agents', bg: 'bg-violet-100', color: 'text-violet-700', badge: 'New' },
  { Icon: HeadphonesIcon, title: 'Client Support', desc: 'Tickets, email, chat, WhatsApp.', href: '/en/support', bg: 'bg-teal-100', color: 'text-teal-700' },
  { Icon: DatabaseIcon, title: 'CRM & Lists', desc: 'SuiteCRM + B2B/B2C lists.', href: '/en/crm', bg: 'bg-indigo-100', color: 'text-indigo-700' },
]

const STEPS = [
  { n: '1', t: 'Consultation', d: 'Free needs analysis in 30 min' },
  { n: '2', t: 'Customization', d: 'Scripts tailored to your brand' },
  { n: '3', t: 'Launch in 48h', d: 'Your calls handled quickly' },
  { n: '4', t: 'Ongoing Support', d: 'Reports, optimization, dedicated support' },
]

const TESTIMONIALS = [
  { q: 'Smart Hotline made us look bigger. Truly impressive service for our SMB.', name: 'Marc Lefebvre', role: 'Founder, TechInnov', av: 'ML' },
  { q: 'Incredible ROI. No missed opportunities since we started working together.', name: 'Sophie Dubois', role: 'Director, Accounting Firm', av: 'SD' },
  { q: 'One of the best investments. Total call management and qualified leads.', name: 'Jean-Pierre Tremblay', role: 'Owner, Restaurant Le Gourmet', av: 'JT' },
]

export default function EnHome() {
  return (
    <>
      {/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Agents & AI available 24/7
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-slate-900">
                The Call Center<br/>
                <span className="text-blue-700">That Grows</span><br/>
                Your SMB
              </h1>
              <GeoHeroSubtitle lang="en"/>
              <div className="mt-6 mb-8">
                <GeoAwareCTA lang="en"/>
              </div>
              <div className="flex flex-wrap gap-3">
                {[{icon: ClockIcon, text: '2 week trial'}, {icon: ShieldCheckIcon, text: 'GDPR compliant'}, {icon: ClockIcon, text: '24/7'}, {icon: CheckIcon, text: 'Setup 48h'}].map(({icon: Icon, text}: any) => (
                  <span key={text} className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                    <Icon className="w-4 h-4" /> {text}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/main-hero.jpg"
                  alt="Smart Hotline Team"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'420px', objectFit:'cover'}}/>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900 text-xl leading-none">500+</p>
                      <p className="text-slate-500 text-xs mt-0.5">Satisfied SMBs</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 bg-blue-700 rounded-2xl p-4 shadow-xl text-white">
                  <p className="font-black text-2xl leading-none">98%</p>
                  <p className="text-blue-200 text-xs mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: VIDEO HERO */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoHero />
        </div>
      </section>

      {/* SECTION 2: DARK - WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"/>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500 opacity-10 rounded-full blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Why SMBs Trust Us?
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Over 500 companies have chosen Smart Hotline to outsource their customer relations successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {icon: CheckIcon, title: 'Answer in under 3 rings', desc: 'Your clients never wait'},
              {icon: CheckIcon, title: 'French-English bilingual', desc: 'Native agents from Quebec and France'},
              {icon: CheckIcon, title: 'Custom scripts', desc: 'Tailored to your brand and sector'},
              {icon: CheckIcon, title: 'Real-time reports', desc: 'Detailed dashboards 24/7'},
              {icon: CheckIcon, title: 'Setup in 48h', desc: 'No infrastructure required'},
              {icon: CheckIcon, title: 'SMB pricing', desc: 'Up to 60% cheaper than in-house'},
            ].map(({icon: Icon, title, desc}, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{n:'500+',l:'Satisfied SMBs'},{n:'98%',l:'Client Satisfaction'},{n:'40%',l:'Time Saved'},{n:'24/7',l:'Availability'}].map(({n,l}) => (
            <div key={l}>
              <p className="text-4xl font-black text-blue-700">{n}</p>
              <p className="text-slate-500 text-sm mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Our Solutions</h2>
            <p className="text-slate-500 text-lg">Everything your SMB needs for customer relations</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }: any) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">{badge}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-700 text-sm font-semibold group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURE - WITH IMAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1.5 rounded-full mb-5">
                New Service
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5">
                Sophie, your Native<br/>French AI Agent
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Response in under 2 seconds. Native French from Quebec, France, Belgium, Switzerland.
                Up to 70% cheaper than traditional agents.
              </p>
              <ul className="space-y-3 mb-8">
                {[CheckIcon, CheckIcon, CheckIcon, CheckIcon, CheckIcon].map((Icon, i) => {
                  const features = ['Response in under 2 seconds', 'Native French multi-region', 'Smart transfer to agent', 'Up to 70% cheaper', 'Available 24/7 with no wait']
                  return (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      {features[i]}
                    </li>
                  )})}
              </ul>
              <Link href="/en/ai-agents" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-violet-700 transition-colors">
                Discover AI Agents →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/agents-ia-hero.jpg"
                alt="AI Agent Sophie"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">How It Works</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map(({ n, t, d }) => (
              <div key={n} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">{n}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t}</h3>
                <p className="text-slate-500 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ q, name, role, av }) => (
              <div key={name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-4">
                  {[StarIcon, StarIcon, StarIcon, StarIcon, StarIcon].map((Icon, i) => <Icon key={i} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-5 leading-relaxed italic">&ldquo;{q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Discover Smart Hotline in Video</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our team of agents and AI ready to transform your customer relations</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              <video
                className="w-full aspect-video"
                controls
                poster="/smart-hotline-last/images/team.webp"
                preload="metadata"
              >
                <source src="/smart-hotline-last/videos/smart_hotline_promo.webm" type="video/webm" />
                <p>Your browser does not support video playback.</p>
              </video>
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">Smart Hotline promotional video - Call center & AI for SMBs</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Transform Your Customer Relations?</h2>
          <p className="text-blue-200 text-lg mb-10">Setup in 48h. No commitment.</p>
          <GeoAwareCTA lang="en"/>
        </div>
      </section>
    </>
  )
}
