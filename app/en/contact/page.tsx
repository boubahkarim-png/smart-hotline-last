'use client'
import basePath from '@/lib/basePath'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { GeoContactInfo, GeoContactCTA } from '@/components/GeoContactInfo'
import { CaptchaField } from '@/components/CaptchaField'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.smart-hotline.com'
const RATE_LIMIT_KEY = 'smart-hotline-submissions'
const MAX_SUBMISSIONS_PER_HOUR = 10

const TESTIMONIALS_EN = [
  {
    quote: "We tried two other call centers before. The difference? Here, agents actually understand our business.",
    name: "Sarah Mitchell",
    role: "Owner, TechStart Montreal",
    image: "testimonial-1.jpg"
  },
  {
    quote: "During the snowstorm, they handled 47 calls. Not one missed. That's what convinced me.",
    name: "Mike Chen",
    role: "Founder, InnovateQC",
    image: "testimonial-2.jpg"
  },
  {
    quote: "The service is impeccable. Our clients don't even realize it's not our in-house team.",
    name: "David Thompson",
    role: "CEO, SolutionsPro",
    image: "testimonial-3.jpg"
  },
  {
    quote: "24/7 availability, exceptional responsiveness. We gained 30% time on our customer service.",
    name: "Jennifer Wilson",
    role: "Manager, AutoExpert Quebec",
    image: "testimonial-4.jpg"
  }
]

function getSubmissionCount(): { count: number; resetTime: number } {
  if (typeof window === 'undefined') return { count: 0, resetTime: Date.now() + 3600000 }
  
  const stored = localStorage.getItem(RATE_LIMIT_KEY)
  if (!stored) return { count: 0, resetTime: Date.now() + 3600000 }
  
  try {
    const data = JSON.parse(stored)
    if (Date.now() > data.resetTime) {
      return { count: 0, resetTime: Date.now() + 3600000 }
    }
    return data
  } catch {
    return { count: 0, resetTime: Date.now() + 3600000 }
  }
}

function incrementSubmissionCount() {
  if (typeof window === 'undefined') return
  const current = getSubmissionCount()
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
    count: current.count + 1,
    resetTime: current.resetTime
  }))
}

export default function EnContact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [rateLimited, setRateLimited] = useState(false)
  const [remainingSubmissions, setRemainingSubmissions] = useState(MAX_SUBMISSIONS_PER_HOUR)
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone

  useEffect(() => {
    const { count, resetTime } = getSubmissionCount()
    const remaining = MAX_SUBMISSIONS_PER_HOUR - count
    setRemainingSubmissions(Math.max(0, remaining))
    setRateLimited(count >= MAX_SUBMISSIONS_PER_HOUR)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (rateLimited) {
      setError('Too many submissions. Please wait before trying again.')
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    const honeypot = formData.get('website') as string
    const formTimestamp = parseInt(formData.get('form_timestamp') as string || '0')

    if (honeypot) {
      setError('Verification failed. Please try again.')
      return
    }

    const timeDiff = Date.now() - formTimestamp
    if (timeDiff < 2000 || timeDiff > 3600000) {
      setError('Form expired. Please refresh the page.')
      return
    }

    setSending(true)
    setError('')

    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
    const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)

const data = {
                name: sanitize(formData.get('name') as string || ''),
                email: sanitizeEmail(formData.get('email') as string || ''),
                phone: sanitize(formData.get('phone') as string || ''),
                company: sanitize(formData.get('company') as string || ''),
                service: sanitize(formData.get('service') as string || ''),
                volume: sanitize(formData.get('volume') as string || ''),
                message: sanitize(formData.get('message') as string || ''),
                source: 'contact-form-en',
                language: 'en'
            }

    if (!data.name || !data.email) {
      setError('Name and email are required.')
      setSending(false)
      return
    }

    try {
      const response = await fetch(`${API_URL}/leads/contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        incrementSubmissionCount()
        setSent(true)
        setRemainingSubmissions(prev => Math.max(0, prev - 1))
      } else {
        const subject = encodeURIComponent(`Contact Request - ${data.name}`)
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        )
        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
        setSent(true)
      }
    } catch (err) {
      const subject = encodeURIComponent(`Contact Request - ${data.name}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )
      window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
      setSent(true)
    }

    setSending(false)
  }

  return (
    <>
      {/* SECTION 1: LIGHT HERO */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-[40%]">
								<h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Contact Us
              </h1>
              <p className="text-lg text-slate-600 mb-8">Free consultation — response within 2h. Our team is ready to answer all your questions.</p>
              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Send Message →
              </Link>
            </div>
<div className="w-full lg:w-[60%]">
								<img src={`${basePath}/images/contact-hero.webp`} alt="Contact Smart Hotline" width="800" height="380" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - CONTACT INFO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-8">Get in Touch</h2>

          {/* GEO-AWARE CONTACT INFO */}
          <div className="max-w-md mx-auto">
            <GeoContactInfo lang="en" />
          </div>

          {/* GEO-AWARE CTA BUTTONS */}
          <div className="mt-8 flex justify-center">
            <GeoContactCTA lang="en" />
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - FORM */}
      <section id="contact-form" className="bg-slate-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          {sent ? (
            <div className="bg-green-100 border border-green-300 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h2>
              <p className="text-green-700">We will respond within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <CaptchaField onValidChange={() => {}} />

              {rateLimited && (
                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
                  Too many submissions. Please wait before trying again.
                </div>
              )}

              <h2 className="text-2xl font-black text-slate-900 mb-6">Send a Message</h2>

<div className="space-y-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    maxLength={100}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    maxLength={100}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="Your company"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    maxLength={254}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    maxLength={20}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="+1 514 123-4567"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service of Interest</label>
                            <select
                                name="service"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                            >
                                <option value="">Select a service...</option>
                                <option value="inbound">Inbound Calls / 24-7 Reception</option>
                                <option value="outbound">Outbound Calls / Prospecting</option>
                                <option value="ai-agents">AI Voice Agents</option>
                                <option value="support">Customer Support</option>
                                <option value="crm">CRM & Lists</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Call Volume</label>
                            <select
                                name="volume"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                            >
                                <option value="">Select volume...</option>
                                <option value="small">Less than 50 calls/month</option>
                                <option value="medium">50-200 calls/month</option>
                                <option value="large">200-500 calls/month</option>
                                <option value="enterprise">500+ calls/month</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                maxLength={2000}
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
                                placeholder="Tell us about your needs..."
                            />
                        </div>
                    </div>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg"
              >
                {sending ? 'Sending...' : 'Send Message →'}
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">Response within 2h • No commitment required</p>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 4: DARK - FAQ */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How fast can you start?', a: 'Most clients are operational within 48 hours. We just need your scripts and information.' },
              { q: 'Is there a minimum commitment?', a: 'No long-term contracts. You can stop anytime with 7 days notice.' },
              { q: 'What languages do you support?', a: 'French (Quebec, France, Belgium), English, and Spanish. Our agents match your clients.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{q}</h3>
                <p className="text-blue-200">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LIGHT - TRUST */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Why Businesses Choose Us</h2>
          <div className="flex flex-wrap justify-center gap-8 text-slate-600">
            <span className="flex items-center gap-2">🔒 Law 25 Compliant</span>
            <span className="flex items-center gap-2">🇨🇦 Data Hosted in Canada</span>
            <span className="flex items-center gap-2">⭐ 4.9/5 Google Reviews</span>
            <span className="flex items-center gap-2">📞 24/7/365 Service</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: DARK - TESTIMONIALS MARQUEE */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-center">What Our Clients Say</h2>
          <p className="text-sky-200 text-center mt-3">Trusted by over 500 businesses</p>
        </div>
        <div className="overflow-hidden">
          <div className="testimonial-track testimonial-marquee">
            {[...TESTIMONIALS_EN, ...TESTIMONIALS_EN].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[350px] bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <svg key={starIdx} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sky-100 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`${basePath}/images/${t.image}`}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
                  />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-sky-300">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: LIGHT - MAP/LOCATION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Based in Montreal, Serving All of Canada</h2>
          <p className="text-slate-600 mb-8">Our team handles calls from coast to coast, 24/7.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span>📍 Montreal, QC</span>
            <span>•</span>
            <span>🇨🇦 All Canadian Provinces</span>
            <span>•</span>
            <span>🌍 French & English</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK - FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Stop Missing Calls?</h2>
          <p className="text-blue-200 mb-8">Join 500+ businesses that never miss an opportunity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15148190559" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              📞 Call Now: +1 514 819-0559
            </a>
            <a href="https://wa.me/15148190559" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Hidden SEO keywords */}
      <div className="sr-only" aria-hidden="true">
        call center montreal, answering service quebec, virtual receptionist canada,
        phone answering service, inbound call center, customer support outsourcing,
        AI voice agents, call center services, outsourced customer service
      </div>
    </>
  )
}
