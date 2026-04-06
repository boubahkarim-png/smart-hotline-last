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
  {q: "Before, our leads were in 3 different Excel files. Now everything is in one place. We don't lose anything anymore.", name: 'Marie-Claire Beaumont', role: 'Sales Director, Solutions Pro QC', av: 'MB'},
  {q: "The B2B lists they provided? Clean, up-to-date. Not like the ones we used to buy for $500 with emails that no longer existed.", name: 'François Gagnon', role: 'Founder, InnoTech Montreal', av: 'FG'},
  {q: "We doubled our conversion rate in 4 months. CRM + outbound calls makes a huge difference.", name: 'Isabelle Tremblay', role: 'Sales Manager, Groupe Nordik', av: 'IT'},
  {q: "The training took 2 hours. Next day, we were operational. It's really not complicated like they said.", name: 'Michael Richard', role: 'CEO, Richard & Sons Construction', av: 'MR'},
  ]

function CTAButtons({ slug }: { slug: string }) {
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <Link href={`/en/contact?service=${slug}`} className="bg-purple-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-purple-700 text-center shadow-lg">
        Free Demo
      </Link>
      {showPhone ? (
        <a href={`tel:${CONTACT.phone}`} className="border-2 border-purple-600 text-purple-600 font-bold px-8 py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all text-center">
          {CONTACT.phoneDisplay}
        </a>
      ) : (
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="border-2 border-purple-600 text-purple-600 font-bold px-8 py-4 rounded-2xl hover:bg-purple-600 hover:text-white transition-all text-center">
          💬 WhatsApp 24/7
        </a>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <>
      {/* SECTION 1: LIGHT - Hero */}
      <section className="bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-5">
                <CRMIcon className="w-4 h-4" /> CRM & Lists
              </span>
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Integrated CRM &<br/>Prospect Lists
              </h1>
              <p className="text-lg text-slate-600 mb-8">Centralize your leads, track opportunities and maximize conversions with SuiteCRM and our qualified B2B/B2C lists.</p>
              <CTAButtons slug="crm"/>
              <div className="flex flex-wrap gap-3">
                {['SuiteCRM included', 'B2B/B2C lists', 'Mautic integrated', 'Auto reports'].map(b => (
                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-purple-600" /> {b}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                <img src={`${basePath}/images/crm-interface.webp`} alt="CRM dashboard" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'550px', objectFit:'cover'}}/>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div><p className="font-black text-sm">+35% conversion</p><p className="text-slate-500 text-xs">client average</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - Features */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-purple-900 text-white py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">What's Included</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">Everything you need to manage your contacts and sales.</p>
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({icon: Icon, title, desc}: any) => (
          <div key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-purple-300" />
          </div>
          <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
          <p className="text-purple-200 text-sm">{desc}</p>
        </div>
        ))}
      </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - Stats */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center stagger-children">
          <div className="modern-box animate-delay-100"><p className="text-4xl font-black text-purple-600">250K+</p><p className="text-slate-500 text-sm mt-1">B2B Contacts</p></div>
          <div className="modern-box animate-delay-200"><p className="text-4xl font-black text-purple-600">98%</p><p className="text-slate-500 text-sm mt-1">Verified Data</p></div>
          <div className="modern-box animate-delay-300"><p className="text-4xl font-black text-purple-600">+35%</p><p className="text-slate-500 text-sm mt-1">Conversion Rate</p></div>
          <div className="modern-box animate-delay-400"><p className="text-4xl font-black text-purple-600">48h</p><p className="text-slate-500 text-sm mt-1">Full Setup</p></div>
        </div>
      </section>

      {/* SECTION 4: LIGHT - How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">How It Works</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded"></div>
          </div>
          {STEPS.map(({n, t, d}: any) => (
            <div key={n} className="flex gap-5 mb-8 items-start">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
              <div className="pt-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
                <p className="text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

 {/* SECTION 5: DARK - Benefits */}
 <section className="bg-gradient-to-br from-slate-900 via-purple-950 to-purple-900 text-white py-20 relative overflow-hidden">
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
 </div>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
 <div className="flex flex-col lg:flex-row items-center gap-14">
 <div className="w-full lg:w-[55%]">
 <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">Why Choose Our CRM?</h2>
 <p className="text-purple-200 text-lg mb-6">We don't just sell you software. We help you structure your sales process from A to Z.</p>
 <ul className="space-y-3 mb-8">
 <li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Training included — no endless learning curves</li>
 <li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>French-speaking support based in Quebec</li>
 <li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Automatic updates, no hidden fees</li>
 <li className="flex items-center gap-3 text-white"><span className="w-6 h-6 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center"><CheckIcon className="w-4 h-4"/></span>Integrated with our outbound calling services</li>
 </ul>
 <Link href="/en/contact?service=crm" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-purple-700 transition-colors">
 See a Demo →
 </Link>
 </div>
 <div className="w-full lg:w-[40%]">
 <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
 <div className="flex items-center gap-3 mb-4">
 <ClockIcon className="w-6 h-6 text-purple-400" />
 <span className="font-bold text-white">Time Saved</span>
 </div>
 <p className="text-purple-200 mb-6">Our clients save an average of 8 hours per week managing their contacts.</p>
 <div className="flex items-center gap-3 mb-4">
 <ShieldCheckIcon className="w-6 h-6 text-purple-400" />
 <span className="font-bold text-white">Secure Data</span>
 </div>
 <p className="text-purple-200">Hosted in Canada, GDPR and PIPEDA compliant.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

      {/* SECTION 6: LIGHT - Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm modern-box animate-delay-${(i+1)*100}`}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-5 h-5 text-amber-400" />)}
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed italic">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center font-bold text-white text-sm">{t.av}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: DARK - Final CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-purple-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Ready to Centralize Your Leads?</h2>
          <p className="text-purple-200 text-lg mb-10 max-w-2xl mx-auto">CRM + qualified lists + French-speaking support. Everything you need to sell more.</p>
          <CTAButtons slug="crm"/>
          <p className="text-purple-300 text-sm mt-6">
            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link> · <Link href="/en/contact" className="underline hover:text-white">Contact us</Link>
          </p>
        </div>
      </section>

      {/* SECTION 8: LIGHT - FAQ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 mb-8">Everything you need to know before getting started.</p>
          <div className="text-left space-y-4">
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Can I import my existing contacts?</summary>
              <p className="text-slate-600 mt-2">Yes, we handle the migration. Excel, CSV, Google Contacts, old CRM — we import everything without data loss.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">Are the B2B lists up to date?</summary>
              <p className="text-slate-600 mt-2">We update them monthly. Bounce rate guaranteed under 5%, or we replace them.</p>
            </details>
            <details className="bg-slate-50 rounded-xl p-4 cursor-pointer">
              <summary className="font-bold text-slate-900">How long does training take?</summary>
              <p className="text-slate-600 mt-2">About 2 hours. We show you the basics and remain available for questions.</p>
            </details>
          </div>
          <Link href="/en/contact?service=crm" className="inline-block mt-8 bg-purple-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-700">
            Get Started Now
          </Link>
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
