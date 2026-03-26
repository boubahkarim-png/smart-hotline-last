'use client'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, CalendarIcon, QuestionIcon, TransferIcon, MessageIcon, AnalyticsIcon, CheckIcon, BoltIcon } from '@/components/Icons'

const FEATURES = [
  {'icon': PhoneIcon, 'title': 'Instant Response', 'desc': 'Under 2 seconds, 24/7, no hold time ever.'},
  {'icon': CalendarIcon, 'title': 'Appointment Booking', 'desc': 'Synced with Google Calendar, Calendly. Auto confirmation.'},
  {'icon': QuestionIcon, 'title': 'Automated FAQ', 'desc': 'Answers common questions: hours, rates, location.'},
  {'icon': TransferIcon, 'title': 'Smart Transfer', 'desc': 'Detects complex situations, transfers to advisor.'},
  {'icon': MessageIcon, 'title': 'Message Taking', 'desc': 'Records name, number, reason — sent via email or CRM.'},
  {'icon': AnalyticsIcon, 'title': 'Transcriptions & Analytics', 'desc': 'Every call transcribed. Monthly trends and insights.'},
]
const STEPS = [
  {'n': '1', 't': 'Sophie Configuration', 'd': 'Voice, script, and knowledge base customization.'},
  {'n': '2', 't': 'Testing & Validation', 'd': 'Real call simulations to validate responses.'},
  {'n': '3', 't': 'Integration', 'd': 'Connected to your existing number in under 24h.'},
  {'n': '4', 't': 'Go Live & Optimization', 'd': 'Sophie handles your calls. Real-time dashboard.'},
]

const USE_CASES = [
  {'title': 'Medical & Healthcare', 'desc': 'Appointment reminders, prescription refill requests, after-hours triage. Patients get answers fast — your staff focuses on what matters.'},
  {'title': 'Real Estate', 'desc': 'Property inquiries, showing scheduling, qualifying leads. Never miss a hot lead because you were on another call.'},
  {'title': 'Legal Services', 'desc': 'Initial consultations, document status updates, appointment booking. Clients feel heard, even at 11pm.'},
  {'title': 'Home Services', 'desc': 'Quote requests, scheduling, emergency call routing. Your plumbers and electricians get jobs, not voicemails.'},
]

const TESTIMONIALS = [
  {'quote': "We were missing 40% of calls during peak hours. Sophie caught every single one last month. That's 127 potential clients we would've lost.", 'author': 'Dr. Martin K.', 'role': 'Dental Clinic Owner'},
  {'quote': "Honestly thought AI callers would feel robotic. But my clients keep thanking me for the 'receptionist' who's always helpful. They don't even know it's AI.", 'author': 'Sarah L.', 'role': 'Real Estate Agent'},
  {'quote': "We pay less for Sophie than we did for one part-time receptionist — and Sophie works nights, weekends, holidays. No complaints, no sick days.", 'author': 'Jean-Pierre M.', 'role': 'Law Firm Partner'},
  {'quote': "At first I was skeptical. But honestly? Clients don't notice a thing. These are real conversations.", 'author': 'Pierre H.', 'role': 'Manager, Houde & Sons Garage'},
  ]

const FAQS = [
  {'q': "Will callers know they're talking to AI?", 'a': "Most don't notice. Sophie speaks naturally, handles interruptions, and adjusts her pace. We've had clients' customers specifically compliment 'your lovely receptionist.'"},
  {'q': 'What languages does Sophie speak?', 'a': 'Native English, French, and Spanish. She switches automatically based on what the caller uses.'},
  {'q': 'How long until Sophie is answering my calls?', 'a': 'Usually 24-48 hours. We configure the voice, script, and knowledge base, then test with real scenarios before going live.'},
  {'q': 'What if Sophie gets stuck?', 'a': "She transfers to a human. That's the point — handle the routine stuff perfectly, escalate the tricky stuff to you."},
  {'q': 'Is my data secure?', 'a': "Yes. Call recordings are encrypted, stored in GDPR-compliant servers in Europe. You own all your data — we never share or sell it."},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`}
        className="bg-violet-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-violet-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`}
          className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
          className="border-2 border-violet-600 text-violet-600 font-bold px-8 py-4 rounded-2xl hover:bg-violet-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
{/* Section 1: Hero - Light */}
  <section className="bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 animate-slide-left">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
            <BoltIcon className="w-5 h-5" /> AI Voice Agents
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
            Sophie, Your Native<br/>
            <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">English AI Agent 24/7</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">Response in under 2 seconds. Native English, French, Spanish. Up to 70% cheaper than traditional agents.</p>
          <CTAButtons slug="ia"/>
          <div className="flex flex-wrap gap-3">
            {['2 sec response', 'Native English', '24/7', 'Pay per minute'].map((b, i) => (
              <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+1)*100}`}><CheckIcon className="w-5 h-5 text-violet-600" /> {b}</span>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 animate-slide-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <img src="/smart-hotline-last/images/agents-ia-hero.jpg" alt="AI Agent Sophie" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BoltIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-black text-xl">&lt; 2 seconds</p>
                  <p className="text-slate-500 text-sm">response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    {/* Section 2: Why AI Agents - Dark */}
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">Why Businesses Are Switching to AI Voice Agents</h2>
            <p className="text-lg text-slate-300 mb-6">Let's be honest — missed calls are missed money. Every time a potential client hits voicemail, there's a good chance they're calling your competitor next.</p>
            <p className="text-lg text-slate-300 mb-6">Sophie doesn't sleep, doesn't take breaks, and never has a bad day. She handles the repetitive stuff so your team can focus on what actually needs human attention.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-3xl font-black text-violet-400">70%</p>
                <p className="text-sm text-slate-300">Lower cost than hiring</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-3xl font-black text-violet-400">0</p>
                <p className="text-sm text-slate-300">Missed calls</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-3xl font-black text-violet-400">2s</p>
                <p className="text-sm text-slate-300">Average pickup time</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-3xl font-black text-violet-400">24/7</p>
                <p className="text-sm text-slate-300">Always available</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4">Here's what Sophie handles:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>Incoming calls during peak hours — no more "all lines busy"</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>After-hours inquiries — because clients don't only call 9-to-5</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>Appointment scheduling and reminders — synced with your calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>FAQ responses — hours, location, rates, the basics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>Message taking when you're in meetings or with clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>Call routing — transfers to the right person when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 3: Features - Light (bg-slate-50) */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2">What's Included</h2>
          <div className="w-16 h-1 bg-violet-600 mx-auto rounded"/>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({icon: Icon, title, desc}: any) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-violet-700" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 text-sm">{desc}</p>
        </div>
        ))}
      </div>
      </div>
    </section>

    {/* Section 4: Use Cases - Light */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Who's Using Sophie</h2>
          <p className="text-slate-500">Different industries, same problem: missed calls. Here's how they're solving it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASES.map(({title, desc}) => (
            <div key={title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-violet-200 transition-all">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 5: Testimonials - Light */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2">What Our Clients Say</h2>
          <p className="text-slate-500">Real results from real businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {TESTIMONIALS.map(({quote, author, role}) => (
            <div key={author} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="text-slate-700 mb-4 italic">"{quote}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-900">{author}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 6: How It Works - Light (bg-white) */}
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How It Works</h2>
        {STEPS.map(({n, t, d}: any) => (
          <div key={n} className="flex gap-5 mb-8 items-start">
            <div className="w-12 h-12 bg-violet-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
            <div className="pt-1">
              <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
              <p className="text-slate-500">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section 7: CTA - Dark */}
    <section className="bg-gradient-to-br from-slate-900 to-violet-800 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
        <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
        <CTAButtons slug="ia"/>
        <p className="text-white text-opacity-60 text-sm mt-4">
          <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
        </p>
      </div>
    </section>

    {/* Section 8: FAQ - Light */}
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-2">Common Questions</h2>
          <p className="text-slate-500">Everything you need to know about Sophie.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map(({q, a}) => (
            <details key={q} className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-900 hover:text-violet-600">
                {q}
                <span className="text-violet-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-slate-600">
                {a}
              </div>
            </details>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <Link href="/en/contact" className="inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700">
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
