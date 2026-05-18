import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('contact', 'en'),
}

     1|'use client'
     2|import { useState } from 'react'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|
     7|export default function EnContact() {
     8|  const [sent, setSent] = useState(false)
     9|  const [sending, setSending] = useState(false)
    10|  const { geo, loading } = useGeo()
    11|  const showPhone = !loading && geo.showPhone
    12|
    13|  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    14|    e.preventDefault()
    15|    setSending(true)
    16|    const form = e.currentTarget
    17|    const data = new FormData(form)
    18|
    19|    try {
    20|      await fetch('/en/contact/', {
    21|        method: 'POST',
    22|        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    23|        body: new URLSearchParams(data as any).toString(),
    24|      })
    25|    } catch {}
    26|
    27|    setSent(true)
    28|    setSending(false)
    29|  }
    30|
    31|  return (
    32|    <>
    33|      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
    34|        <div className="max-w-4xl mx-auto px-4 text-center">
    35|          <h1 className="text-4xl font-black mb-3">Contact Us</h1>
    36|          <p className="text-blue-200 text-lg">Free consultation — response within 2h</p>
    37|        </div>
    38|      </section>
    39|
    40|      <section className="py-16 bg-slate-50">
    41|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    42|          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    43|
    44|            {/* Contact info */}
    45|            <div>
    46|              <h2 className="text-2xl font-black text-slate-900 mb-6">Our Contact Info</h2>
    47|              <div className="space-y-4">
    48|                {showPhone && (
    49|                  <a href={"tel:" + CONTACT.phone}
    50|                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    51|                    <span className="text-2xl">📞</span>
    52|                    <div>
    53|                      <p className="font-semibold text-slate-900">{CONTACT.phoneDisplay}</p>
    54|                      <p className="text-slate-500 text-sm">Canada & USA — Mon-Fri 9am-6pm</p>
    55|                    </div>
    56|                  </a>
    57|                )}
    58|                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
    59|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
    60|                  <span className="text-2xl">💬</span>
    61|                  <div>
    62|                    <p className="font-semibold text-slate-900">WhatsApp</p>
    63|                    <p className="text-slate-500 text-sm">24/7 — Immediate response</p>
    64|                  </div>
    65|                </a>
    66|                <a href={"mailto:" + CONTACT.email}
    67|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    68|                  <span className="text-2xl">✉️</span>
    69|                  <div>
    70|                    <p className="font-semibold text-slate-900">{CONTACT.email}</p>
    71|                    <p className="text-slate-500 text-sm">Response within 2h</p>
    72|                  </div>
    73|                </a>
    74|                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
    75|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    76|                  <span className="text-2xl">📅</span>
    77|                  <div>
    78|                    <p className="font-semibold text-slate-900">Book 30 min</p>
    79|                    <p className="text-slate-500 text-sm">Free consultation</p>
    80|                  </div>
    81|                </a>
    82|              </div>
    83|
    84|              {/* Why contact */}
    85|              <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
    86|                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
    87|                <ul className="space-y-2 text-sm text-slate-600">
    88|                  {['Needs analysis (30 min)', 'Personalized recommendation', 'Detailed quote within 24h', 'No commitment'].map(i => (
    89|                    <li key={i} className="flex items-center gap-2">
    90|                      <span className="text-green-500 font-bold">&#10003;</span> {i}
    91|                    </li>
    92|                  ))}
    93|                </ul>
    94|              </div>
    95|            </div>
    96|
    97|            {/* Form */}
    98|            <div className="lg:col-span-2">
    99|              {sent ? (
   100|                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
   101|                  <div className="text-6xl mb-4">✅</div>
   102|                  <h3 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h3>
   103|                  <p className="text-green-700 text-lg">We will respond within 2h.</p>
   104|                </div>
   105|              ) : (
   106|                <form
   107|                  onSubmit={handleSubmit}
   108|                  name="contact-en"
   109|                  method="POST"
   110|                  data-netlify="true"
   111|                  netlify-honeypot="bot-field"
   112|                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
   113|                  <input type="hidden" name="form-name" value="contact-en"/>
   114|                  <input type="hidden" name="bot-field" className="hidden"/>
   115|
   116|                  <h2 className="text-2xl font-black text-slate-900 mb-6">Send Us a Message</h2>
   117|
   118|                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
   119|                    {[
   120|                      { name: 'name', label: 'Full Name *', type: 'text', required: true },
   121|                      { name: 'email', label: 'Email *', type: 'email', required: true },
   122|                      { name: 'phone', label: 'Phone', type: 'tel', required: false },
   123|                      { name: 'company', label: 'Company', type: 'text', required: false },
   124|                    ].map(({ name, label, type, required }) => (
   125|                      <div key={name}>
   126|                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
   127|                        <input type={type} name={name} required={required}
   128|                          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"/>
   129|                      </div>
   130|                    ))}
   131|                  </div>
   132|
   133|                  <div className="mb-4">
   134|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
   135|                    <select name="service" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
   136|                      <option value="">Select...</option>
   137|                      <option>Inbound Calls</option>
   138|                      <option>Outbound Calls</option>
   139|                      <option>Voice AI Agents</option>
   140|                      <option>Customer Support</option>
   141|                      <option>CRM & Lists</option>
   142|                      <option>Trial Offer</option>
   143|                      <option>Custom</option>
   144|                    </select>
   145|                  </div>
   146|
   147|                  <div className="mb-4">
   148|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Call Volume</label>
   149|                    <select name="volume" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
   150|                      <option value="">Select...</option>
   151|                      <option>Less than 100 calls/month</option>
   152|                      <option>100 – 500 calls/month</option>
   153|                      <option>500 – 2,000 calls/month</option>
   154|                      <option>More than 2,000 calls/month</option>
   155|                    </select>
   156|                  </div>
   157|
   158|                  <div className="mb-5">
   159|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
   160|                    <textarea name="message" rows={4}
   161|                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
   162|                      placeholder="Describe your needs, schedule, industry..."/>
   163|                  </div>
   164|
   165|                  <div className="mb-6">
   166|                    <label className="flex items-start gap-3 cursor-pointer">
   167|                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
   168|                      <span className="text-sm text-slate-600">
   169|                        I accept the processing of my data in accordance with the{' '}
   170|                        <Link href="/en/privacy" className="text-blue-600 underline">privacy policy</Link>.
   171|                      </span>
   172|                    </label>
   173|                  </div>
   174|
   175|                  <button type="submit" disabled={sending}
   176|                    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg">
   177|                    {sending ? 'Sending...' : 'Send Message →'}
   178|                  </button>
   179|                </form>
   180|              )}
   181|            </div>
   182|          </div>
   183|        </div>
   184|      </section>
   185|    </>
   186|  )
   187|}
   188|