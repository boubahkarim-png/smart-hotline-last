import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('crm', 'en'),
}

     1|'use client'
     2|import Link from 'next/link'
     3|import { useGeo } from '@/hooks/useGeo'
     4|import { CONTACT } from '@/lib/nav'
     5|import { FolderIcon, MailIcon, PhoneIcon, TrendingIcon, DatabaseIcon, LinkIcon, CheckIcon, DatabaseIcon as CRMIcon } from '@/components/Icons'
     6|
     7|const FEATURES = [
     8|  {'icon': FolderIcon, 'title': 'Lead Management', 'desc': 'Capture, qualification and tracking of all your prospects.'},
     9|  {'icon': MailIcon, 'title': 'Email Marketing', 'desc': 'Automated campaigns with Mautic. Nurturing and follow-ups.'},
    10|  {'icon': PhoneIcon, 'title': 'Click-to-call', 'desc': 'Call your prospects in one click from the CRM.'},
    11|  {'icon': TrendingIcon, 'title': 'Sales Pipeline', 'desc': 'Visualize and manage your sales funnel in real time.'},
    12|  {'icon': DatabaseIcon, 'title': 'Qualified Lists', 'desc': 'B2B and B2C lists by sector, region, company size.'},
    13|  {'icon': LinkIcon, 'title': 'Integrations', 'desc': 'Connection with your site, Zapier, Google Workspace and more.'},
    14|]
    15|const STEPS = [
    16|  {'n': '1', 't': 'Database Audit', 'd': 'Analysis of existing data and cleanup.'},
    17|  {'n': '2', 't': 'SuiteCRM Configuration', 'd': 'Module customization based on your sales process.'},
    18|  {'n': '3', 't': 'Data Import', 'd': 'Migration of contacts and history without data loss.'},
    19|  {'n': '4', 't': 'Training & Follow-up', 'd': 'Team training and ongoing support.'},
    20|]
    21|
    22|function CTAButtons({ slug }: { slug: string }) {
    23|  const { geo, loading } = useGeo()
    24|  const showPhone = !loading && geo.showPhone
    25|  return (
    26|    <div className="flex flex-col sm:flex-row gap-4 mb-6">
    27|      <Link href={`/en/contact?service=${slug}`}
    28|        className="bg-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-700 text-center shadow-lg">
    29|        Free Demo
    30|      </Link>
    31|      {showPhone ? (
    32|        <a href={`tel:${CONTACT.phone}`}
    33|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-center">
    34|          {CONTACT.phoneDisplay}
    35|        </a>
    36|      ) : (
    37|        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
    38|          className="border-2 border-indigo-600 text-indigo-600 font-bold px-7 py-3.5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-center">
    39|          💬 WhatsApp 24/7
    40|        </a>
    41|      )}
    42|    </div>
    43|  )
    44|}
    45|
    46|export default function Page() {
    47|  return (
    48|    <>
    49|      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
    50|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    51|          <div className="flex flex-col lg:flex-row items-center gap-12">
    52|            <div className="w-full lg:w-[55%]">
    53|              <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full mb-5">
    54|                <CRMIcon className="w-4 h-4" /> CRM & Lists
    55|              </span>
    56|              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
    57|                Integrated CRM &<br/>Prospect Lists
    58|              </h1>
    59|              <p className="text-lg text-slate-600 mb-8">Centralize your leads, track opportunities and maximize conversions with SuiteCRM and our qualified B2B/B2C lists.</p>
    60|              <CTAButtons slug="crm"/>
    61|              <div className="flex flex-wrap gap-3">
    62|                {['SuiteCRM included', 'B2B/B2C lists', 'Mautic integrated', 'Auto reports'].map(b => (
    63|                  <span key={b} className="flex items-center gap-1 bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full"><CheckIcon className="w-4 h-4 text-indigo-600" /> {b}</span>
    64|                ))}
    65|              </div>
    66|            </div>
    67|            <div className="w-full lg:w-[40%]">
    68|              <div className="relative">
    69|                <img src="/smart-hotline-late2/images/crm-interface.jpg" alt="CRM dashboard"
    70|                  className="rounded-2xl shadow-2xl w-full object-cover"
    71|                  style={{maxHeight:'380px', objectFit:'cover'}}/>
    72|                <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl p-3.5 shadow-xl border border-slate-100">
    73|                  <div className="flex items-center gap-2.5">
    74|                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
    75|                      <TrendingIcon className="w-5 h-5 text-indigo-600" />
    76|                    </div>
    77|                    <div><p className="font-black text-sm">+35% conversion</p><p className="text-slate-500 text-xs">client average</p></div>
    78|                  </div>
    79|                </div>
    80|              </div>
    81|            </div>
    82|          </div>
    83|        </div>
    84|      </section>
    85|
    86|      <section className="py-20 bg-slate-50">
    87|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    88|          <div className="text-center mb-12">
    89|            <h2 className="text-3xl font-black text-slate-900 mb-2">What's Included</h2>
    90|            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"/>
    91|          </div>
    92|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    93|            {FEATURES.map(({icon: Icon, title, desc}: any) => (
    94|              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all">
    95|                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
    96|                  <Icon className="w-6 h-6 text-indigo-700" />
    97|                </div>
    98|                <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
    99|                <p className="text-slate-500 text-sm">{desc}</p>
   100|              </div>
   101|            ))}
   102|          </div>
   103|        </div>
   104|      </section>
   105|
   106|      <section className="py-20 bg-white">
   107|        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   108|          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">How It Works</h2>
   109|          {STEPS.map(({n, t, d}: any) => (
   110|            <div key={n} className="flex gap-5 mb-8 items-start">
   111|              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">{n}</div>
   112|              <div className="pt-1">
   113|                <h3 className="font-bold text-slate-900 text-lg mb-1">{t}</h3>
   114|                <p className="text-slate-500">{d}</p>
   115|              </div>
   116|            </div>
   117|          ))}
   118|        </div>
   119|      </section>
   120|
   121|      <section className="bg-gradient-to-br from-slate-900 to-indigo-800 py-16">
   122|        <div className="max-w-4xl mx-auto px-4 text-center text-white">
   123|          <h2 className="text-3xl font-black mb-3">Ready to Get Started?</h2>
   124|          <p className="text-white text-opacity-80 mb-8">2-week trial — no commitment.</p>
   125|          <CTAButtons slug="crm"/>
   126|          <p className="text-white text-opacity-60 text-sm mt-4">
   127|            <Link href="/en/pricing" className="underline hover:text-white">View all pricing</Link>
   128|          </p>
   129|        </div>
   130|      </section>
   131|    </>
   132|  )
   133|}
   134|