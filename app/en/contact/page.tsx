'use client'
import basePath from '@/lib/basePath'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.smart-hotline.com'

export default function EnContact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [csrfToken, setCsrfToken] = useState('')
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await fetch('/api/csrf')
        if (response.ok) {
          const data = await response.json()
          setCsrfToken(data.token)
        }
      } catch (err) {
        console.error('Failed to fetch CSRF token')
      }
    }
    fetchCsrfToken()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!csrfToken) {
      setError('Security error. Please refresh the page.')
      return
    }
    
    setSending(true)
    setError('')
    const form = e.currentTarget
    const formData = new FormData(form)

    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
    const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)

    const data = {
      name: sanitize(formData.get('name') as string || ''),
      email: sanitizeEmail(formData.get('email') as string || ''),
      phone: '',
      company: '',
      service: '',
      volume: '',
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
        headers: { 
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSent(true)
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
{/* SECTION 1: LIGHT HERO - Text LEFT, Image RIGHT */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[55%]">
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Contact Us
              </h1>
              <p className="text-lg text-slate-600 mb-8">Free consultation — response within 2h. Our team is ready to answer all your questions.</p>
              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Send Message →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src={`${basePath}/images/contact-hero.webp`} alt="Contact Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - CONTACT INFO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="tel:+15148190559" className="flex items-center justify-center gap-3 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-colors">
              <span className="text-2xl">📞</span>
              <span>+1 514 819-0559</span>
            </a>
            <a href="https://wa.me/15148190559" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-colors">
              <span className="text-2xl">💬</span>
              <span>WhatsApp 24/7</span>
            </a>
            <a href="mailto:direction@smart-hotline.com" className="flex items-center justify-center gap-3 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-colors">
              <span className="text-2xl">✉️</span>
              <span>Email Us</span>
            </a>
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
            <input type="hidden" name="csrf_token" value={csrfToken} />
            <h2 className="text-2xl font-black text-slate-900 mb-6">Get My Free Analysis</h2>

            <div className="space-y-4 mb-6">
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

              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
                  <span className="text-sm text-slate-600">
                    I accept the processing of my data in accordance with the{' '}
                    <Link href="/en/privacy" className="text-blue-600 underline">privacy policy</Link>.
                  </span>
                </label>
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
                {sending ? 'Sending...' : 'Get My Free Analysis →'}
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

      {/* SECTION 6: DARK - FINAL CTA */}
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

      {/* SECTION 7: LIGHT - TESTIMONIALS */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "We tried two other call centers before. The difference? Here, agents actually understand our business.", name: "Sarah Mitchell", role: "Owner, TechStart Montreal" },
              { q: "During the snowstorm, they handled 47 calls. Not one missed. That's what convinced me.", name: "Mike Chen", role: "Founder, InnovateQC" },
            ].map(({ q, name, role }) => (
              <div key={name} className="bg-white rounded-xl p-6 border border-slate-100">
                <p className="text-slate-700 mb-4 italic">"{q}"</p>
                <p className="font-bold text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LIGHT - MAP/LOCATION */}
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

      {/* Hidden SEO keywords */}
      <div className="sr-only" aria-hidden="true">
        call center montreal, answering service quebec, virtual receptionist canada,
        phone answering service, inbound call center, customer support outsourcing,
        AI voice agents, call center services, outsourced customer service
      </div>
    </>
  )
}
