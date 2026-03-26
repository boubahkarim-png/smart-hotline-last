'use client'
import Link from 'next/link'
import GeoAwareCTA from '@/components/GeoAwareCTA'
import GeoHeroSubtitle from '@/components/GeoHeroSubtitle'
import GeoTestimonials from '@/components/GeoTestimonials'
import GeoStats from '@/components/GeoStats'
import GeoHeroStats from '@/components/GeoHeroStats'
import GeoComplianceBadge from '@/components/GeoComplianceBadge'
import GeoWhyUsSection from '@/components/GeoWhyUsSection'
import { useGeo } from '@/hooks/useGeo'

import { PhoneIcon, MegaphoneIcon, BotIcon, HeadphonesIcon, DatabaseIcon, CheckIcon, ClockIcon } from '@/components/Icons'

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

function GeoLocationBadge({ lang }: { lang: 'fr' | 'en' }) {
  const { geo, loading } = useGeo(lang)
  
  if (loading) return <span className="text-slate-400 text-sm">...</span>
  
  const countryCode = geo.country === 'Canada' ? 'CA' :
                      geo.country === 'United States' ? 'US' :
                      geo.country === 'United Kingdom' ? 'GB' : 'OTHER'
  
  const labels: Record<string, string> = {
    'CA': 'Montreal, Canada',
    'US': 'New York, USA',
    'GB': 'United Kingdom',
    'OTHER': 'International'
  }
  
  return (
    <span className="text-slate-400 text-sm">{labels[countryCode] || 'International'}</span>
  )
}

export default function EnHome() {
  return (
    <>
      <div className="sr-only" aria-hidden="true">
        call center montreal, answering service quebec, virtual receptionist canada, outsourced call center, phone answering service, inbound call center, outbound calling services, customer support outsourcing, AI voice agents
      </div>
      
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[55%] animate-slide-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-float">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Agents & AI available 24/7
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight text-slate-900">
                Never Miss<br/>
                <span className="gradient-text-animated">Another Call</span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-4 mb-6">
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">*****</span>
                  <GeoLocationBadge lang="en" />
                </span>
              </div>
              <GeoHeroSubtitle lang="en"/>
              <div className="mt-6 mb-8">
                <GeoAwareCTA lang="en"/>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <ClockIcon className="w-4 h-4" /> 2 week trial
                </span>
                <GeoComplianceBadge lang="en" />
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <ClockIcon className="w-4 h-4" /> 24/7
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  <CheckIcon className="w-4 h-4" /> Setup 48h
                </span>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src="/smart-hotline-last/images/main-hero.jpg"
                  alt="Smart Hotline Team"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{maxHeight:'420px', objectFit:'cover'}}/>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                  <GeoHeroStats lang="en" />
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

      <GeoWhyUsSection lang="en" />

      <section className="bg-white border-b border-slate-100 py-10">
        <GeoStats lang="en" />
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Our Solutions</h2>
            <p className="text-slate-500 text-lg">Everything your SMB needs for customer relations</p>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full mt-4"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SERVICES.map(({ Icon, title, desc, href, bg, color, badge }: any, i: number) => (
              <Link key={href} href={href}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 hover-lift transition-all group animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  {badge && <span className="text-xs bg-violet-100 text-violet-700 px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">{badge}</span>}
                </div>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <span className="text-blue-700 text-sm font-semibold group-hover:underline">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                Response in under 2 seconds. Native French accents for your region. Up to 70% cheaper than traditional agents.
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
                Discover AI Agents &rarr;
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

      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"/>
          </div>
          <GeoTestimonials lang="en" />
        </div>
      </section>

      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to Stop Missing Calls?</h2>
          <p className="text-slate-600 text-lg mb-8">Setup in 48h. No commitment. Free 2-week trial.</p>
          <Link href="/en/contact" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 inline-block pulse-cta">Get Started Now</Link>
        </div>
      </section>
    </>
  )
}
