'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { PhoneIcon, ClockIcon, ShieldCheckIcon, CheckIcon, StarIcon, UsersIcon, MessageIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const FEATURES = [
  {icon: PhoneIcon, title: 'Professional Reception', desc: 'A real agent answers every call with your company name.'},
  {icon: ClockIcon, title: 'Available 24/7', desc: 'Even at night, weekends and holidays. Never miss a call.'},
  {icon: MessageIcon, title: 'Message Taking', desc: 'Messages transmitted in real-time via SMS, email or call based on your preferences.'},
  {icon: UsersIcon, title: 'Dedicated Team', desc: 'The same agents answer for you. They know your business.'},
]

const TESTIMONIALS = [
  {q: "I have a restaurant on the Main. Before, I was easily losing 10-15 customers a week because I couldn't answer. Now? Zero missed calls.", name: 'Pierre Lacroix', role: 'Owner, Bistro du Vieux-Montréal', av: 'PL'},
  {q: "It's not just reception. They take reservations, answer questions, and text me urgencies. It's like having a receptionist, but at a fraction of the cost.", name: 'Sophie Mercier', role: 'Director, Clinique Médicale Plateau', av: 'SM'},
  {q: "During the holiday rush, they handled over 200 calls a day. My team was calm, customers happy. Really.", name: 'Marc-André Dubé', role: 'Manager, Magasin Électronique QC', av: 'MD'},
  {q: "We tried 3 other services before. This is the only one where agents really understand our business. Our clients are happy, that's all that matters.", name: 'Nathalie Tremblay', role: 'Director, Cabinet Juridique Tremblay & Associés', av: 'NT'},
]

const FAQS = [
  {question: "What's the difference from an answering machine?", answer: "A real agent answers in person, understands context, and transmits urgent messages immediately. No hold music, no voicemail."},
  {question: "Can I customize the scripts?", answer: "Absolutely. We write answers tailored to your business. You validate everything before launch and we adjust whenever you want."},
  {question: "How do I receive messages?", answer: "By SMS, email, or call — you choose. Urgent messages are transmitted immediately, others according to your preference."},
  {question: "What's the setup timeline?", answer: "Usually 48 hours. We take the time to properly understand your business and needs before starting."},
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
      <ServiceSchema
        name="Virtual Receptionist"
        description="Virtual receptionist service for SMBs. Professional agents who answer your calls 24/7, take messages and transmit information in real-time."
        slug="virtual-receptionist"
        offers={{ priceFrom: "11", priceCurrency: "USD" }}
      />
      <FAQSchema faqs={FAQS} />
      
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <PhoneIcon className="w-5 h-5" /> Virtual Receptionist
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Your Receptionist,<br/>
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Without Fixed Costs</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Professional agents answer your calls in your company's name. Your clients speak to a real human, 24/7.</p>
              <CTAButtons slug="virtual-receptionist"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['24/7 availability', 'Real-time messages', 'Dedicated team', '2-week trial'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/reception-hero.jpg`} alt="Virtual receptionist" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <PhoneIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">99.2%</p>
                      <p className="text-slate-500 text-sm">answer rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-900 text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
            <p className="text-teal-200 text-xl max-w-2xl mx-auto">Everything you need for professional call handling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {FEATURES.map(({icon: Icon, title, desc}, i) => (
              <div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">99.2%</p>
              <p className="text-slate-600 mt-2 font-medium">Answer Rate</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">2.8s</p>
              <p className="text-slate-600 mt-2 font-medium">Response Time</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">150+</p>
              <p className="text-slate-600 mt-2 font-medium">Businesses Served</p>
            </div>
            <div className="modern-box p-8">
              <p className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">24/7</p>
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
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {n: '1', t: 'Briefing', d: "We learn about your business, hours and needs"},
              {n: '2', t: 'Custom Scripts', d: "We write answers tailored to your activity"},
              {n: '3', t: 'Launch in 48h', d: "Your calls are handled quickly"},
              {n: '4', t: 'Ongoing Support', d: "Daily reports and adjustments as needed"},
            ].map((step, i) => (
              <div key={step.n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{step.n}</div>
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
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Why Choose Our Service?</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Our agents are trained to represent your company as if it were their own. No robot scripts — real human conversations.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'French-speaking agents from Quebec and France',
                  'Messages via SMS, email, or call',
                  'SMB pricing — 40-60% cheaper than an employee',
                  'Cancel anytime — no long contracts',
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-4 text-slate-700 text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
                    <span className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <CheckIcon className="w-5 h-5"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/en/contact?service=virtual-receptionist" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                See a Demo
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="modern-box p-10 bg-gradient-to-br from-slate-50 to-teal-50">
                <h3 className="font-bold text-2xl text-slate-900 mb-6">Pricing Adapted to Your Growth</h3>
                <p className="text-slate-600 text-lg mb-4">Competitive rates, no long-term commitment. You pay for what you use.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> No hidden fees</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> Cancel anytime</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckIcon className="w-5 h-5 text-teal-600"/> CRM and autodialer included</li>
                </ul>
                <Link href="/en/pricing" className="text-teal-600 font-bold text-lg hover:underline flex items-center gap-2">
                  See all pricing
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
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`modern-box p-8 testimonial-card animate-delay-${(i+1)*100}`}>
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg">{t.av}</div>
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
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Improve Your Reception?</h2>
          <p className="text-teal-200 text-xl mb-12 max-w-2xl mx-auto">2-week free trial. No commitment. We start whenever you want.</p>
          <CTAButtons slug="virtual-receptionist"/>
          <p className="text-teal-300 mt-8 text-lg">
            <Link href="/en/pricing" className="underline hover:text-white transition-colors">See pricing</Link>
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
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 stagger-children">
            {FAQS.map((faq, i) => (
              <details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
                <summary className="font-bold text-xl text-slate-900">{faq.question}</summary>
                <p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/en/contact?service=virtual-receptionist" className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
