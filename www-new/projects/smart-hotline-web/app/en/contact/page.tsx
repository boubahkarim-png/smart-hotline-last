     1|'use client'

export const metadata = {
  title: "Smart Hotline | Contact Us for Free Consultation",
  description: "Contact Smart Hotline. Free consultation, no commitment. Response within 2h. Start your 2-week free trial today.",
}

     2|import GeoTestimonials from '@/components/GeoTestimonials'
     3|import basePath from '@/lib/basePath'
     4|import { useState, useEffect } from 'react'
     5|import Link from 'next/link'
     6|import { useGeo } from '@/hooks/useGeo'
     7|import { GeoContactInfo, GeoContactCTA } from '@/components/GeoContactInfo'
     8|import { CaptchaField } from '@/components/CaptchaField'
     9|
    10|const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.smart-hotline.com'
    11|const RATE_LIMIT_KEY = 'smart-hotline-submissions'
    12|const MAX_SUBMISSIONS_PER_HOUR = 10
    13|
    14|
    15|function getSubmissionCount(): { count: number; resetTime: number } {
    16|  if (typeof window === 'undefined') return { count: 0, resetTime: Date.now() + 3600000 }
    17|  
    18|  const stored = localStorage.getItem(RATE_LIMIT_KEY)
    19|  if (!stored) return { count: 0, resetTime: Date.now() + 3600000 }
    20|  
    21|  try {
    22|    const data = JSON.parse(stored)
    23|    if (Date.now() > data.resetTime) {
    24|      return { count: 0, resetTime: Date.now() + 3600000 }
    25|    }
    26|    return data
    27|  } catch {
    28|    return { count: 0, resetTime: Date.now() + 3600000 }
    29|  }
    30|}
    31|
    32|function incrementSubmissionCount() {
    33|  if (typeof window === 'undefined') return
    34|  const current = getSubmissionCount()
    35|  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
    36|    count: current.count + 1,
    37|    resetTime: current.resetTime
    38|  }))
    39|}
    40|
    41|export default function EnContact() {
    42|  const [sent, setSent] = useState(false)
    43|  const [sending, setSending] = useState(false)
    44|  const [error, setError] = useState('')
    45|  const [rateLimited, setRateLimited] = useState(false)
    46|  const [remainingSubmissions, setRemainingSubmissions] = useState(MAX_SUBMISSIONS_PER_HOUR)
    47|  const { geo, loading } = useGeo()
    48|  const showPhone = !loading && geo.showPhone
    49|
    50|  useEffect(() => {
    51|    const { count, resetTime } = getSubmissionCount()
    52|    const remaining = MAX_SUBMISSIONS_PER_HOUR - count
    53|    setRemainingSubmissions(Math.max(0, remaining))
    54|    setRateLimited(count >= MAX_SUBMISSIONS_PER_HOUR)
    55|  }, [])
    56|
    57|  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    58|    e.preventDefault()
    59|
    60|    if (rateLimited) {
    61|      setError('Too many submissions. Please wait before trying again.')
    62|      return
    63|    }
    64|
    65|    const form = e.currentTarget
    66|    const formData = new FormData(form)
    67|
    68|    const honeypot = formData.get('website') as string
    69|    const formTimestamp = parseInt(formData.get('form_timestamp') as string || '0')
    70|
    71|    if (honeypot) {
    72|      setError('Verification failed. Please try again.')
    73|      return
    74|    }
    75|
    76|    const timeDiff = Date.now() - formTimestamp
    77|    if (timeDiff < 2000 || timeDiff > 3600000) {
    78|      setError('Form expired. Please refresh the page.')
    79|      return
    80|    }
    81|
    82|    setSending(true)
    83|    setError('')
    84|
    85|    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
    86|    const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)
    87|
    88|const data = {
    89|                name: sanitize(formData.get('name') as string || ''),
    90|                email: sanitizeEmail(formData.get('email') as string || ''),
    91|                phone: sanitize(formData.get('phone') as string || ''),
    92|                company: sanitize(formData.get('company') as string || ''),
    93|                service: sanitize(formData.get('service') as string || ''),
    94|                volume: sanitize(formData.get('volume') as string || ''),
    95|                message: sanitize(formData.get('message') as string || ''),
    96|                source: 'contact-form-en',
    97|                language: 'en'
    98|            }
    99|
   100|    if (!data.name || !data.email) {
   101|      setError('Name and email are required.')
   102|      setSending(false)
   103|      return
   104|    }
   105|
   106|    try {
   107|      const response = await fetch(`${API_URL}/leads/contact.php`, {
   108|        method: 'POST',
   109|        headers: { 'Content-Type': 'application/json' },
   110|        body: JSON.stringify(data)
   111|      })
   112|
   113|      if (response.ok) {
   114|        incrementSubmissionCount()
   115|        setSent(true)
   116|        setRemainingSubmissions(prev => Math.max(0, prev - 1))
   117|      } else {
   118|        const subject = encodeURIComponent(`Contact Request - ${data.name}`)
   119|        const body = encodeURIComponent(
   120|          `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
   121|        )
   122|        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
   123|        setSent(true)
   124|      }
   125|    } catch (err) {
   126|      const subject = encodeURIComponent(`Contact Request - ${data.name}`)
   127|      const body = encodeURIComponent(
   128|        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
   129|      )
   130|      window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
   131|      setSent(true)
   132|    }
   133|
   134|    setSending(false)
   135|  }
   136|
   137|  return (
   138|    <>
   139|      {/* SECTION 1: LIGHT HERO */}
   140|      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
   141|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   142|          <div className="flex flex-col lg:flex-row items-center gap-12">
   143|<div className="w-full lg:w-[40%]">
   144|								<h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
   145|                Contact Us
   146|              </h1>
   147|              <p className="text-lg text-slate-600 mb-8">Free consultation — response within 2h. Our team is ready to answer all your questions.</p>
   148|              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
   149|                Send Message →
   150|              </Link>
   151|            </div>
   152|<div className="w-full lg:w-[60%]">
   153|								<img src={`${basePath}/images/contact-hero.webp`} alt="Contact Smart Hotline" width="800" height="380" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
   154|            </div>
   155|          </div>
   156|        </div>
   157|      </section>
   158|
   159|      {/* SECTION 2: DARK - CONTACT INFO */}
   160|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
   161|        <div className="max-w-4xl mx-auto px-4 text-center">
   162|          <h2 className="text-3xl lg:text-4xl font-black mb-8">Get in Touch</h2>
   163|
   164|          {/* GEO-AWARE CONTACT INFO */}
   165|          <div className="max-w-md mx-auto">
   166|            <GeoContactInfo lang="en" />
   167|          </div>
   168|
   169|          {/* GEO-AWARE CTA BUTTONS */}
   170|          <div className="mt-8 flex justify-center">
   171|            <GeoContactCTA lang="en" />
   172|          </div>
   173|</div>
   174|</section>
   175|
   176|{/* SECTION 3: LIGHT - HOW WE HELP */}
   177|<section className="py-20 bg-white">
   178|<div className="max-w-4xl mx-auto px-4">
   179|<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   180|<div className="text-center">
   181|<h3 className="text-2xl font-bold text-slate-900 mb-4">Free Analysis</h3>
   182|<p className="text-gray-600">
   183|30-minute consultation to understand your specific needs
   184|and propose an adapted solution.
   185|</p>
   186|</div>
   187|<div className="text-center">
   188|<h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Setup</h3>
   189|<p className="text-gray-600">
   190|Operational in less than 48 hours after solution validation.
   191|Training included for your team.
   192|</p>
   193|</div>
   194|<div className="text-center">
   195|<h3 className="text-2xl font-bold text-slate-900 mb-4">Continuous Support</h3>
   196|<p className="text-gray-600">
   197|Monthly reports, constant optimization and dedicated support
   198|to guarantee your long-term success.
   199|</p>
   200|</div>
   201|<div className="text-center">
   202|<h3 className="text-2xl font-bold text-slate-900 mb-4">Transparent Pricing</h3>
   203|<p className="text-gray-600">
   204|No hidden fees, no surprises. Clear pricing adapted to
   205|your actual needs.
   206|</p>
   207|</div>
   208|</div>
   209|</div>
   210|</section>
   211|
   212|{/* SECTION 4: LIGHT - FORM */}
   213|      <section id="contact-form" className="bg-slate-50 py-20">
   214|        <div className="max-w-2xl mx-auto px-4">
   215|          {sent ? (
   216|            <div className="bg-green-100 border border-green-300 rounded-2xl p-12 text-center">
   217|              <div className="text-6xl mb-4">✅</div>
   218|              <h2 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h2>
   219|              <p className="text-green-700">We will respond within 2 hours.</p>
   220|            </div>
   221|          ) : (
   222|            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
   223|              <CaptchaField onValidChange={() => {}} />
   224|
   225|              {rateLimited && (
   226|                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
   227|                  Too many submissions. Please wait before trying again.
   228|                </div>
   229|              )}
   230|
   231|              <h2 className="text-2xl font-black text-slate-900 mb-6">Send a Message</h2>
   232|
   233|<div className="space-y-4 mb-6">
   234|                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   235|                            <div>
   236|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name *</label>
   237|                                <input
   238|                                    type="text"
   239|                                    name="name"
   240|                                    required
   241|                                    maxLength={100}
   242|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   243|                                    placeholder="Your name"
   244|                                />
   245|                            </div>
   246|                            <div>
   247|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
   248|                                <input
   249|                                    type="text"
   250|                                    name="company"
   251|                                    maxLength={100}
   252|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   253|                                    placeholder="Your company"
   254|                                />
   255|                            </div>
   256|                        </div>
   257|                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   258|                            <div>
   259|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
   260|                                <input
   261|                                    type="email"
   262|                                    name="email"
   263|                                    required
   264|                                    maxLength={254}
   265|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   266|                                    placeholder="your@email.com"
   267|                                />
   268|                            </div>
   269|                            <div>
   270|                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
   271|                                <input
   272|                                    type="tel"
   273|                                    name="phone"
   274|                                    maxLength={20}
   275|                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   276|                                    placeholder="+1 514 123-4567"
   277|                                />
   278|                            </div>
   279|                        </div>
   280|                        <div>
   281|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service of Interest</label>
   282|                            <select
   283|                                name="service"
   284|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   285|                            >
   286|                                <option value="">Select a service...</option>
   287|                                <option value="inbound">Inbound Calls / 24-7 Reception</option>
   288|                                <option value="outbound">Outbound Calls / Prospecting</option>
   289|                                <option value="ai-agents">AI Voice Agents</option>
   290|                                <option value="support">Customer Support</option>
   291|                                <option value="crm">CRM & Lists</option>
   292|                                <option value="other">Other</option>
   293|                            </select>
   294|                        </div>
   295|                        <div>
   296|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Call Volume</label>
   297|                            <select
   298|                                name="volume"
   299|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
   300|                            >
   301|                                <option value="">Select volume...</option>
   302|                                <option value="small">Less than 50 calls/month</option>
   303|                                <option value="medium">50-200 calls/month</option>
   304|                                <option value="large">200-500 calls/month</option>
   305|                                <option value="enterprise">500+ calls/month</option>
   306|                            </select>
   307|                        </div>
   308|                        <div>
   309|                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
   310|                            <textarea
   311|                                name="message"
   312|                                required
   313|                                rows={4}
   314|                                maxLength={2000}
   315|                                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
   316|                                placeholder="Tell us about your needs..."
   317|                            />
   318|                        </div>
   319|                    </div>
   320|
   321|              {error && (
   322|                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
   323|                  {error}
   324|                </div>
   325|              )}
   326|
   327|              <button
   328|                type="submit"
   329|                disabled={sending}
   330|                className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg"
   331|              >
   332|                {sending ? 'Sending...' : 'Send Message →'}
   333|              </button>
   334|              <p className="text-center text-slate-500 text-sm mt-4">Response within 2h • No commitment required</p>
   335|            </form>
   336|          )}
   337|        </div>
   338|      </section>
   339|
   340|      {/* SECTION 5: DARK - FAQ */}
   341|      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
   342|        <div className="max-w-4xl mx-auto px-4">
   343|          <h2 className="text-3xl font-black mb-8 text-center">Common Questions</h2>
   344|          <div className="space-y-4">
   345|            {[
   346|              { q: 'How fast can you start?', a: 'Most clients are operational within 48 hours. We just need your scripts and information.' },
   347|              { q: 'Is there a minimum commitment?', a: 'No long-term contracts. You can stop anytime with 7 days notice.' },
   348|              { q: 'What languages do you support?', a: 'French (Quebec, France, Belgium), English, and Spanish. Our agents match your clients.' },
   349|            ].map(({ q, a }) => (
   350|              <div key={q} className="bg-white/10 rounded-xl p-6">
   351|                <h3 className="font-bold text-lg mb-2">{q}</h3>
   352|                <p className="text-slate-200">{a}</p>
   353|              </div>
   354|            ))}
   355|          </div>
   356|        </div>
   357|      </section>
   358|
   359|      {/* SECTION 6: LIGHT - TRUST */}
   360|      <section className="bg-white py-16">
   361|        <div className="max-w-4xl mx-auto px-4 text-center">
   362|          <h2 className="text-2xl font-black text-slate-900 mb-4">Why Businesses Choose Us</h2>
   363|          <div className="flex flex-wrap justify-center gap-8 text-slate-600">
   364|            <span className="flex items-center gap-2">🔒 Law 25 Compliant</span>
   365|            <span className="flex items-center gap-2">🇨🇦 Data Hosted in Canada</span>
   366|            <span className="flex items-center gap-2">⭐ 4.9/5 Google Reviews</span>
   367|            <span className="flex items-center gap-2">📞 24/7/365 Service</span>
   368|          </div>
   369|        </div>
   370|      </section>
   371|
   372|{/* SECTION 7: DARK - TESTIMONIALS MARQUEE */}
   373|<section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white overflow-hidden">
   374|<div className="max-w-7xl mx-auto px-4 mb-10">
   375|<h2 className="text-3xl lg:text-4xl font-bold text-center">What Our Clients Say</h2>
   376|<p className="text-sky-200 text-center mt-3">Trusted by over 500 businesses</p>
   377|</div>
   378|<GeoTestimonials lang="en" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
   379|</section>
   380|
   381|      {/* SECTION 8: LIGHT - MAP/LOCATION */}
   382|      <section className="bg-white py-16">
   383|        <div className="max-w-4xl mx-auto px-4 text-center">
   384|          <h2 className="text-2xl font-black text-slate-900 mb-4">Based in Montreal, Serving All of Canada</h2>
   385|          <p className="text-slate-600 mb-8">Our team handles calls from coast to coast, 24/7.</p>
   386|          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
   387|            <span>📍 Montreal, QC</span>
   388|            <span>•</span>
   389|            <span>🇨🇦 All Canadian Provinces</span>
   390|            <span>•</span>
   391|            <span>🌍 French & English</span>
   392|          </div>
   393|        </div>
   394|      </section>
   395|
   396|      {/* SECTION 9: DARK - FINAL CTA */}
   397|      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
   398|        <div className="max-w-4xl mx-auto px-4 text-center">
   399|          <h2 className="text-3xl font-black mb-4">Ready to Stop Missing Calls?</h2>
   400|          <p className="text-white mb-8">Join 500+ businesses that never miss an opportunity.</p>
   401|          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   402|            <a href="tel:+151****0559" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
   403|              📞 Call Now: +1 514 819-0559
   404|            </a>
   405|            <a href="https://wa.me/15148190559" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
   406|              💬 WhatsApp Us
   407|            </a>
   408|          </div>
   409|        </div>
   410|      </section>
   411|
   412|      {/* Hidden SEO keywords */}
   413|      <div className="sr-only" aria-hidden="true">
   414|        call center montreal, answering service quebec, virtual receptionist canada,
   415|        phone answering service, inbound call center, customer support outsourcing,
   416|        AI voice agents, call center services, outsourced customer service
   417|      </div>
   418|    </>
   419|  )
   420|}
   421|