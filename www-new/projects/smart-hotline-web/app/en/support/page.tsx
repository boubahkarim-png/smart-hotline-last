'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { HeadphonesIcon, MailIcon, ChatIcon, PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@/components/Icons'
import { ServiceSchema } from '@/components/ServiceSchema'
import { FAQSchema } from '@/components/FAQSchema'
import GeoTestimonials from '@/components/GeoTestimonials'

const FEATURES = [
{icon: HeadphonesIcon, title: 'Multichannel Support', desc: 'Phone, email, chat, WhatsApp — we handle everything from a single interface.'},
{icon: MailIcon, title: 'Organized Tickets', desc: 'Every request becomes a ticket. Nothing gets lost, everything is tracked.'},
{icon: ChatIcon, title: 'Real-Time Chat', desc: 'Instant responses for customers who prefer to write.'},
{icon: PhoneIcon, title: 'Dedicated Line', desc: "A number for your support. We answer in your company's name."},
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
      {/* SECTION 1: HERO - Modern design with bigger image */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[40%] animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <HeadphonesIcon className="w-5 h-5" /> Customer Support
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Customer Support<br/>
                <span className="bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">That Resembles You</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Phone, email, chat, WhatsApp — we handle everything. Your customers get fast answers, in English, from real humans.
              </p>
              <CTAButtons slug="support"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Multichannel', 'Organized Tickets', '< 2h Response', 'Dedicated Team'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-teal-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[60%] animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/support-tech.webp`} alt="Customer support" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <HeadphonesIcon className="w-7 h-7 text-white" />
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

{/* SECTION 2: DARK - Features */}
<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white py-20 lg:py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Support Channels</h2>
<p className="text-white text-lg max-w-2xl mx-auto">We answer everywhere your customers contact you.</p>
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

{/* SECTION 3: DARK - Stats */}
<section className="bg-gradient-to-br from-slate-900 via-teal-950 to-indigo-900 text-white py-20 border-t-4 border-teal-600">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white">Measurable Results</h3>
</div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
        <div className="modern-box-dark p-8 animate-delay-100"><p className="text-4xl font-black text-white">98%</p><p className="text-teal-200 text-lg mt-1">Client Satisfaction</p></div>
        <div className="modern-box-dark p-8 animate-delay-200"><p className="text-4xl font-black text-white">&lt; 2h</p><p className="text-teal-200 text-lg mt-1">Response Time</p></div>
        <div className="modern-box-dark p-8 animate-delay-300"><p className="text-4xl font-black text-white">50K+</p><p className="text-teal-200 text-lg mt-1">Tickets/Month</p></div>
        <div className="modern-box-dark p-8 animate-delay-400"><p className="text-4xl font-black text-white">24/7</p><p className="text-teal-200 text-lg mt-1">Availability</p></div>
      </div>
</div>
</section>

{/* SECTION 4: LIGHT - How it works */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black text-slate-900 mb-4">How It Works</h2>
<p className="text-slate-600 text-lg">4 simple steps to improve your customer support</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
<div className="text-center modern-box animate-delay-100">
<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">1</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Analysis</h3>
<p className="text-slate-600 text-sm">We study your types of requests</p>
</div>
<div className="text-center modern-box animate-delay-200">
<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">2</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Knowledge Base</h3>
<p className="text-slate-600 text-sm">We create answers for each case</p>
</div>
<div className="text-center modern-box animate-delay-300">
<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">3</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Launch</h3>
<p className="text-slate-600 text-sm">We take calls and emails</p>
</div>
<div className="text-center modern-box animate-delay-400">
<div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black shadow-lg">4</div>
<h3 className="font-bold text-lg mb-2 text-slate-900">Improvement</h3>
<p className="text-slate-600 text-sm">We adjust based on your feedback</p>
</div>
</div>
</div>
</section>

{/* SECTION 5: DARK - Value proposition */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950 to-teal-900 text-white border-t-4 border-teal-700">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col lg:flex-row items-center gap-14">
<div className="w-full lg:w-[55%]">
<h2 className="text-3xl lg:text-4xl font-black text-white mb-5">Why Outsource Your Support?</h2>
<p className="text-white text-lg mb-6">A satisfied client comes back. A frustrated one speaks ill of you. We ensure every interaction goes well.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Team trained on your products</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Responses in Quebec or France French</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Smart escalation to your team</li>
<li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-teal-500/30 text-white rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Weekly trend reports</li>
</ul>
<Link href="/en/contact?service=support" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-teal-700 transition-colors">See a demo →</Link>
</div>
      <div className="w-full lg:w-[40%]">
        <div className="modern-box-dark p-8">
          <h3 className="font-bold text-white text-lg mb-4">Typical Results</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> +40% client satisfaction</li>
            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> -60% response time</li>
            <li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-teal-400"/> Team freed for sales</li>
          </ul>
        </div>
      </div>
</div>
</div>
</section>

{/* SECTION 6: DARK - Testimonials AUTO-SLIDE */}
<section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-black mb-4">What Our Clients Say</h2>
<p className="text-slate-200 text-lg">Real results for businesses like yours</p>
</div>
</div>
<GeoTestimonials lang="en" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
</section>

{/* SECTION 7: DARK - CTA */}
<section className="bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Improve Your Support?</h2>
<p className="text-white text-lg mb-10 max-w-2xl mx-auto">More satisfied clients, less stress for your team. Let's start together.</p>
<CTAButtons slug="support"/>
<p className="text-slate-200 text-sm mt-6"><Link href="/en/pricing" className="underline hover:text-white">View pricing</Link> · <Link href="/en/contact" className="underline hover:text-white">Contact us</Link></p>
</div>
</section>

{/* SECTION 8: LIGHT - FAQ */}
<section className="bg-white py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">What channels do you support?</summary><p className="text-slate-600 mt-2">Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized.</p></details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How do you handle escalations?</summary><p className="text-slate-600 mt-2">We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context.</p></details>
<details className="bg-slate-50 rounded-xl p-4 cursor-pointer"><summary className="font-bold text-slate-900">How long for team training?</summary><p className="text-slate-600 mt-2">About 1 week. We learn your products, processes, and how you talk to customers.</p></details>
</div>
<div className="text-center mt-8">
<Link href="/en/contact?service=support" className="inline-block bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700">Get Started Now</Link>
</div>
</div>
</section>

<ServiceSchema name="Multichannel Customer Support" description="Multichannel customer support - phone, email, chat, WhatsApp with dedicated English-speaking team" slug="support" offers={{ priceFrom: "2.00", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
{ question: "What channels do you support?", answer: "Phone, email, chat on your website, WhatsApp, and even social media. Everything is centralized." },
{ question: "How do you handle escalations?", answer: "We have a clear protocol. Simple problems = we answer. Complex problems = we transfer to you with full context." },
{ question: "How long for team training?", answer: "About 1 week. We learn your products, processes, and how you talk to customers." },
{ question: "Do you offer 24/7 service?", answer: "Yes, our team is available 24/7 to answer your customers, even on holidays." }
]} />
</>
)
}
