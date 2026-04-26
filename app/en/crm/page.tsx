'use client'
import basePath from '@/lib/basePath'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'
import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@/components/Icons'
import { FAQSchema } from '@/components/FAQSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

const FEATURES = [
  {'icon': FolderIcon, 'title': 'Lead Management', 'desc': 'Capture, qualification and tracking of all your prospects.'},
  {'icon': MailIcon, 'title': 'Email Marketing', 'desc': 'Automated campaigns with Mautic. Nurturing and follow-ups.'},
  {'icon': PhoneIcon, 'title': 'Click-to-call', 'desc': 'Call your prospects in one click from the CRM.'},
  {'icon': TrendingIcon, 'title': 'Sales Pipeline', 'desc': 'Visualize and manage your sales funnel in real time.'},
  {'icon': DatabaseIcon, 'title': 'Qualified Lists', 'desc': 'B2B and B2C lists by sector, region, company size.'},
  {'icon': LinkIcon, 'title': 'Integrations', 'desc': 'Connection with your site, Zapier, Google Workspace and more.'},
]

const STEPS = [
  {'n': '1', 't': 'Database Audit', 'd': 'Analysis of existing data and cleanup.'},
  {'n': '2', 't': 'SuiteCRM Configuration', 'd': 'Module customization based on your sales process.'},
  {'n': '3', 't': 'Data Import', 'd': 'Migration of contacts and history without data loss.'},
  {'n': '4', 't': 'Training & Follow-up', 'd': 'Team training and ongoing support.'},
]

const TESTIMONIALS = [
{q: "Before, our leads were in 3 different Excel files. Now everything is in one place. We don't lose anything anymore.", name: 'Marie-Claire Beaumont', role: 'Sales Director, Solutions Pro QC', img: '/images/testimonial-marie.jpg'},
{q: "The B2B lists they provided? Clean, up-to-date. Not like the ones we used to buy for $500 with emails that no longer existed.", name: 'François Gagnon', role: 'Founder, InnoTech Montreal', img: '/images/testimonial-francois.jpg'},
{q: "We doubled our conversion rate in 4 months. CRM + outbound calls makes a huge difference.", name: 'Isabelle Tremblay', role: 'Sales Manager, Groupe Nordik', img: '/images/testimonial-isabelle.jpg'},
{q: "The training took 2 hours. Next day, we were operational. It's really not complicated like they said.", name: 'Michael Richard', role: 'CEO, Richard & Sons Construction', img: '/images/testimonial-michel.jpg'},
]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    <Link href={`/en/contact?service=${slug}`} className="bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-700 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple">
      Free Demo
    </Link>
    {showPhone ? (
      <a href={`tel:${CONTACT.phone}`} className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
        {CONTACT.phoneDisplay}
      </a>
    ) : (
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-orange-600 hover:text-white transition-all text-center hover:shadow-xl">
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[40%] animate-slide-left">
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-slow-float">
                <CRMIcon className="w-5 h-5" /> CRM & Lists
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
                Integrated CRM &<br/>
                <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Prospect Lists</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Centralize your leads, track opportunities and maximize conversions with SuiteCRM and our qualified B2B/B2C lists.
              </p>
              <CTAButtons slug="crm"/>
              <div className="flex flex-wrap gap-3 mt-6">
                {['SuiteCRM included', 'B2B/B2C lists', 'Mautic integrated', 'Auto reports'].map((b, i) => (
                  <span key={b} className={`flex items-center gap-2 bg-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full shadow-md animate-fade-in-up animate-delay-${(i+2)*100}`}>
                    <CheckIcon className="w-5 h-5 text-orange-600" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[60%] animate-slide-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
                <img src={`${basePath}/images/crm-interface.webp`} alt="CRM dashboard" loading="lazy" className="relative rounded-3xl shadow-2xl w-full object-cover hero-image-zoom" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 animate-float-badge modern-box">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-xl">+35% conversion</p>
                      <p className="text-slate-500 text-sm">client average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* SECTION 2: FEATURES */}
<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 lg:py-28 overflow-hidden relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16 animate-fade-in-up">
<h2 className="text-4xl lg:text-5xl font-black mb-4">What's Included</h2>
<p className="text-orange-200 text-xl max-w-2xl mx-auto">Everything you need to manage your contacts and sales.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{FEATURES.map(({icon: Icon, title, desc}, i) => (
<div key={title} className={`modern-box-dark p-8 text-center hover:scale-105 transition-all duration-500 animate-delay-${(i+1)*100}`}>
<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
<Icon className="w-8 h-8 text-white" />
</div>
<h3 className="font-bold text-xl text-white mb-3">{title}</h3>
<p className="text-orange-200 leading-relaxed">{desc}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 3: DARK STATS */}
<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 border-t-4 border-orange-600">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white">Numbers That Matter</h3>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
<p className="text-5xl lg:text-6xl font-black text-white">250K+</p>
<p className="text-orange-200 mt-2 font-medium text-lg">B2B Contacts</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
<p className="text-5xl lg:text-6xl font-black text-white">98%</p>
<p className="text-orange-200 mt-2 font-medium text-lg">Verified Data</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
<p className="text-5xl lg:text-6xl font-black text-white">+35%</p>
<p className="text-orange-200 mt-2 font-medium text-lg">Conversion Rate</p>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
<p className="text-5xl lg:text-6xl font-black text-white">48h</p>
<p className="text-orange-200 mt-2 font-medium text-lg">Full Setup</p>
</div>
</div>
</div>
</section>

{/* SECTION 4: HOW IT WORKS */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-white border-t-4 border-slate-200">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
{STEPS.map(({n, t, d}: any, i: number) => (
<div key={n} className={`modern-box p-8 text-center animate-delay-${(i+1)*100}`}>
<div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-xl">{n}</div>
<h3 className="font-bold text-xl text-slate-900 mb-3">{t}</h3>
<p className="text-slate-600 leading-relaxed">{d}</p>
</div>
))}
</div>
</div>
</section>

{/* SECTION 5: DARK - BENEFITS */}
<section className="bg-gradient-to-br from-slate-900 via-orange-950 to-amber-900 text-white py-20 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 relative">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose Our CRM?</h2>
<p className="text-xl text-orange-200 mb-8 leading-relaxed">We don't just sell you software. We help you structure your sales process from A to Z.</p>
<ul className="space-y-4 mb-8">
{[
'Training included — no endless learning curves',
'French-speaking support based in Quebec',
'Automatic updates, no hidden fees',
'Integrated with our outbound calling services',
].map((item, i) => (
<li key={i} className={`flex items-center gap-4 text-white text-lg animate-fade-in-up animate-delay-${(i+1)*100}`}>
<span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
<CheckIcon className="w-5 h-5"/>
</span>
{item}
</li>
))}
</ul>
<Link href="/en/contact?service=crm" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
See a Demo
</Link>
</div>
<div className="w-full lg:w-1/2">
<div className="bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
<h3 className="font-bold text-2xl text-white mb-6">Pricing Adapted to Your Growth</h3>
<p className="text-orange-200 text-lg mb-4">Competitive rates, no long-term commitment. You pay for what you use.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> No hidden fees</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Cancel anytime</li>
<li className="flex items-center gap-2 text-white"><CheckIcon className="w-5 h-5 text-orange-400"/> Support included</li>
</ul>
<Link href="/en/pricing" className="text-orange-400 font-bold text-lg hover:underline flex items-center gap-2">
See all pricing
</Link>
</div>
</div>
</div>
</div>
</section>

{/* SECTION 6: DARK TESTIMONIALS AUTO-SLIDE */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white border-t-4 border-indigo-700 overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-black text-white mb-4">What Our Clients Say</h2>
<div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
</div>
</div>
<div className="overflow-hidden">
<div className="testimonial-track testimonial-marquee">
{[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
<div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all min-w-[320px] max-w-[320px] flex-shrink-0">
<div className="flex gap-1 mb-5">
{[1,2,3,4,5].map(s => <StarIcon key={s} className="w-6 h-6 text-amber-400" />)}
</div>
<p className="text-white mb-6 leading-relaxed text-lg italic">"{t.q}"</p>
<div className="flex items-center gap-4">
<img src={basePath + t.img} alt={t.name} loading="lazy" className="w-14 h-14 rounded-xl object-cover shadow-lg" />
<div>
<p className="font-bold text-white">{t.name}</p>
<p className="text-orange-200 text-sm">{t.role}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* SECTION 7: FINAL CTA */}
<section className="bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 py-24 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-4 text-center text-white relative">
<h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Centralize Your Leads?</h2>
<p className="text-orange-200 text-xl mb-12 max-w-2xl mx-auto">CRM + qualified lists + French-speaking support. Everything you need to sell more.</p>
<CTAButtons slug="crm"/>
<p className="text-orange-300 mt-8 text-lg">
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
<div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-amber-700 mx-auto rounded-full"></div>
</div>
<div className="space-y-6 stagger-children">
{[
{q: "Can I import my existing contacts?", a: "Yes, we handle the migration. Excel, CSV, Google Contacts, old CRM — we import everything without data loss."},
{q: "Are the B2B lists up to date?", a: "We update them monthly. Bounce rate guaranteed under 5%, or we replace them."},
{q: "How long does training take?", a: "About 2 hours. We show you the basics and remain available for questions."},
].map((faq, i) => (
<details key={i} className={`modern-box p-6 cursor-pointer animate-delay-${(i+1)*100}`}>
<summary className="font-bold text-xl text-slate-900">{faq.q}</summary>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">{faq.a}</p>
</details>
))}
</div>
<div className="text-center mt-12">
<Link href="/en/contact?service=crm" className="inline-block bg-gradient-to-r from-orange-600 to-amber-700 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
Get Started Now
</Link>
</div>
</div>
</section>
<ServiceSchema name="CRM & Prospect Lists" description="Integrated SuiteCRM with qualified B2B/B2C lists and Mautic email marketing" slug="crm" offers={{ priceFrom: "50", priceCurrency: "CAD" }} />
<FAQSchema faqs={[
  { question: "Can I import my existing contacts?", answer: "Yes, we handle the migration. Excel, CSV, Google Contacts, old CRM — we import everything without data loss." },
  { question: "Are the B2B lists up to date?", answer: "We update them monthly. Bounce rate guaranteed under 5%, or we replace them." },
  { question: "How long does training take?", answer: "About 2 hours. We show you the basics and remain available for questions." },
  { question: "Is the CRM included with phone plans?", answer: "Yes, basic CRM is included free with all our reception and outbound call packages." }
]} />
</>
  )
}
