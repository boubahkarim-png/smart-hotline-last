'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'
import GeoTestimonials from '@/components/GeoTestimonials'

const FEATURES = [
  {icon: PhoneIcon, title: '24/7 Reception', desc: 'No voicemail. A real agent answers every call, even at 3 AM.'},
  {icon: ClockIcon, title: 'Under 3 Rings', desc: "Your clients don't wait. We pick up quickly, period."},
  {icon: ShieldCheckIcon, title: 'Secure Data', desc: 'All messages transmitted in real time. Nothing gets lost.'},
  {icon: UsersIcon, title: 'Dedicated Team', desc: 'The same agents answer for you. They know your business.'},
]


function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`} className="bg-sky-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-sky-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-sky-600 text-sky-600 font-bold px-8 py-4 rounded-2xl hover:bg-sky-600 hover:text-white transition-all text-center hover:shadow-xl">
          WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: HERO - Modern design with bigger image */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[40%] animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <PhoneIcon className="w-5 h-5" /> Inbound Calls
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Zero Missed Calls,<br/>
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Zero Lost Clients</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Professional agents answer your calls 24/7. Your clients speak to a real human, not a robot.</p>
              <CTAButtons slug="reception"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['24/7 non-stop', 'Under 3 Rings', 'Real-time Messages', '2-Week Trial'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-sky-600" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[60%] animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/reception-hero.webp`} alt="Inbound Calls" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <PhoneIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">500+ calls/day</p>
                      <p className="text-slate-500 text-sm">managed for our clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES - Modern cards with animations */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
            <p className="text-sky-200 text-xl max-w-2xl mx-auto">Everything you need to never miss an important call again.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-sky-200 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3: DARK STATS - Modern big numbers */}
<section className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-900 text-white py-20 border-t-4 border-sky-600">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h3 className="text-2xl font-bold text-white">Numbers that inspire confidence</h3>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <p className="text-5xl lg:text-6xl font-black text-white">99.2%</p>
        <p className="text-sky-200 mt-2 font-medium text-lg">Answer Rate</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <p className="text-5xl lg:text-6xl font-black text-white">2.8s</p>
        <p className="text-sky-200 mt-2 font-medium text-lg">Response Time</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <p className="text-5xl lg:text-6xl font-black text-white">150+</p>
        <p className="text-sky-200 mt-2 font-medium text-lg">Businesses Served</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <p className="text-5xl lg:text-6xl font-black text-white">24/7</p>
        <p className="text-sky-200 mt-2 font-medium text-lg">Availability</p>
      </div>
    </div>
  </div>
</section>

      {/* SECTION 4: HOW IT WORKS - Modern numbered cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {[
            {n: '1', t: 'Briefing', d: "We learn about your business and your needs"},
            {n: '2', t: 'Custom Scripts', d: "We write responses tailored to your activity"},
            {n: '3', t: '48h Launch', d: "Your calls are handled quickly"},
            {n: '4', t: 'Ongoing Support', d: "Daily reports and adjustments"},
          ].map((step, i) => (
            <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
              <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
              <p className="text-slate-600 leading-relaxed">{step.d}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

 {/* SECTION 5: DARK - BENEFITS */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white border-t-4 border-sky-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
 <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Trust Us?</h2>
 <p className="text-xl text-sky-200 mb-8 leading-relaxed">Our agents are trained to represent your business as if it were their own. No robotic scripts — real conversations.</p>
 <ul className="space-y-4 mb-8">
 {[
 'French-speaking agents from Quebec and France',
 'Messages sent by SMS, email, or call',
 'SME pricing — 40-60% cheaper than an employee',
 'Cancel anytime — no long contracts',
 ].map((item, i) => (
 <li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
 <span className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
 <CheckIcon className="w-5 h-5"/>
 </span>
 {item}
 </li>
 ))}
 </ul>
 <Link href="/en/contact?service=reception" className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
 See a Demo
 </Link>
 </div>
 <div className="w-full lg:w-1/2">
 <div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
 <h3 className="font-bold text-2xl text-white mb-6">Pricing Adapted to Your Growth</h3>
 <p className="text-sky-200 text-lg mb-4">Competitive pricing, no long-term commitment. You pay for what you use.</p>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> No hidden fees</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> Cancel anytime</li>
 <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-sky-400"/> CRM and autodialer included</li>
 </ul>
 <Link href="/en/pricing" className="text-sky-400 font-bold text-lg hover:underline flex items-center gap-2">
 View All Pricing
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
<div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
</div>
</div>
<GeoTestimonials lang="en" theme="light" layout="marquee" cardSize="lg" basePath={basePath} />
</section>

      {/* SECTION 7: FINAL CTA - Gradient */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-sky-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Never Miss a Call?</h2>
          <p className="text-sky-200 text-xl mb-12 max-w-2xl mx-auto">Free 2-week trial. No commitment. We start whenever you're ready.</p>
          <CTAButtons slug="reception"/>
          <p className="text-sky-300 mt-8 text-lg">
            <Link href="/en/pricing" className="underline hover:text-white transition-colors">View Pricing</Link>
            <span className="mx-3">·</span>
            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact Us</Link>
          </p>
        </div>
      </section>

{/* SECTION 8: FAQ - Modern expandable */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-sky-600 to-blue-700 mx-auto rounded-full"></div>
    </div>
    <div className="space-y-6 stagger-children">
      {[
        {q: "How long to get started?", a: "Usually 48 hours. We take the time to understand your business well before starting."},
        {q: "Can I change the scripts?", a: "Absolutely. It's your business — you decide how we answer. We adjust whenever you want."},
        {q: "How do I receive messages?", a: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately."},
      ].map((faq, i) => (
        <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
          <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
          <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link href="/en/contact?service=reception" className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
        Start Now
      </Link>
    </div>
  </div>
</section>
<ServiceSchema name="Inbound Calls 24/7" description="Professional inbound call service with French-speaking agents 24/7" slug="inbound" offers={{ priceFrom: "1.50", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "How long to get started?", answer: "Usually 48 hours. We take the time to understand your business well before starting." },
  { question: "Can I change the scripts?", answer: "Absolutely. It's your business — you decide how we answer. We adjust whenever you want." },
  { question: "How do I receive messages?", answer: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately." },
  { question: "Do the agents speak French?", answer: "Yes, all our agents are French-speaking from Quebec or France. They master both French and English." }
]} />
</>
  )
}
