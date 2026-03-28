'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'

const FEATURES = [
  {icon: HeadphonesIcon, title: 'Multi-channel Support', desc: 'Phone, email, chat, WhatsApp — all handled from a single interface.'},
  {icon: MailIcon, title: 'Organized Tickets', desc: 'Every request becomes a ticket. Nothing gets lost, everything is tracked.'},
  {icon: ChatIcon, title: 'Real-time Chat', desc: 'Instant responses for customers who prefer to type.'},
  {icon: PhoneIcon, title: 'Dedicated Line', desc: 'A number for your support. We answer in your company\'s name.'},
]

const TESTIMONIALS = [
{q: "We receive product questions all day long. Before, it was chaos in our emails. Now, every request is properly tracked.", name: 'Catherine R.', role: 'Customer Service Manager', av: 'CR'},
{q: "They fixed a 3-week problem in 48 hours. Professional and efficient — that really helps with our clients.", name: 'Jean-François P.', role: 'Director, Financial Services', av: 'JP'},
{q: "Our customers are more satisfied. We see it in the feedback. Great support makes all the difference.", name: 'Martine L.', role: 'Founder', av: 'ML'},
{q: "We reduced our response time from 4 days to 2 hours. Our clients can't believe it. The team is super professional.", name: 'Sylvie B.', role: 'Director', av: 'SB'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`} className="bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-teal-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-teal-600 text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-teal-600 hover:text-white transition-all text-center hover:shadow-xl">
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <HeadphonesIcon className="w-5 h-5" /> Customer Support
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Customer Support<br/>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">That Reflects You</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Phone, email, chat, WhatsApp — we handle it all. Your customers get fast answers, in the language of their choice, from real humans.</p>
              <CTAButtons slug="support"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Multi-channel', 'Organized Tickets', 'Response < 2h', 'Dedicated Team'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/support-tech.jpg`} alt="Customer support" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ClockIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">Response &lt; 2h</p>
                      <p className="text-slate-500 text-sm">on average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Support Channels</h2>
            <p className="text-teal-200 text-xl max-w-2xl mx-auto">We respond wherever your customers reach out.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{title}</h3>
                <p className="text-teal-200 leading-relaxed">{desc}</p>
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
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">98%</p>
              <p className="text-slate-600 mt-2 font-medium">Customer Satisfaction</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">&lt; 2h</p>
              <p className="text-slate-600 mt-2 font-medium">Response Time</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">50K+</p>
              <p className="text-slate-600 mt-2 font-medium">Tickets/month</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">24/7</p>
              <p className="text-slate-600 mt-2 font-medium">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {n: '1', t: 'Analysis', d: "We study your request types"},
              {n: '2', t: 'Knowledge Base', d: "We create answers for each case"},
              {n: '3', t: 'Launch', d: "We take calls and emails"},
              {n: '4', t: 'Improvement', d: "We adjust based on your feedback"},
            ].map((step, i) => (
              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Why Outsource Your Support?</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">A satisfied customer comes back. A frustrated one speaks badly about you. We make sure every interaction goes well.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Team trained on your products',
                  'Responses in English, French, or your language',
                  'Smart escalation to your team',
                  'Weekly reports on trends',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
                    <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckIcon className="w-5 h-5"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/contact?service=support" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                See a Demo
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-teal-50">
                <h3 className="font-bold text-2xl text-slate-900 mb-6">Typical Results</h3>
                <p className="text-slate-600 text-lg mb-4">Our clients see measurable improvements within weeks.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> +40% customer satisfaction</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> -60% response time</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> Team freed for sales</li>
                </ul>
                <Link href="/en/pricing" className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2">
                  See All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-700 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
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

      {/* SECTION 7: FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Improve Your Support?</h2>
          <p className="text-teal-200 text-xl mb-12 max-w-2xl mx-auto">More satisfied customers, less stress for your team. Let's start together.</p>
          <CTAButtons slug="support"/>
          <p className="text-teal-300 mt-8 text-lg">
            <Link href="/en/pricing" className="underline hover:text-white transition-colors">See Pricing</Link>
            <span className="mx-3">·</span>
            <Link href="/en/contact" className="underline hover:text-white transition-colors">Contact Us</Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-700 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 stagger-children">
            {[
              {q: "What channels do you handle?", a: "Phone, email, chat on your site, WhatsApp, and even social media. Everything is centralized."},
              {q: "How do you escalate problems?", a: "We have a clear protocol. Simple issue = we answer. Complex issue = we transfer to you with context."},
              {q: "How long to train the team?", a: "About 1 week. We learn your products, your processes, and how you talk to customers."},
            ].map((faq, i) => (
              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
                <summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/en/contact?service=support" className="inline-block bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
