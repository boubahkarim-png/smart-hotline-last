'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function EnContact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const { geo, loading } = useGeo()
  const showPhone = !loading && geo.showPhone

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('/en/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      })
    } catch {}

    setSent(true)
    setSending(false)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-3">Contact Us</h1>
          <p className="text-blue-200 text-lg">Free consultation — response within 2h</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">Our Contact Info</h2>
              <div className="space-y-4">
                {showPhone && (
                  <a href={"tel:" + CONTACT.phone}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-slate-900">{CONTACT.phoneDisplay}</p>
                      <p className="text-slate-500 text-sm">Canada & USA — Mon-Fri 9am-6pm</p>
                    </div>
                  </a>
                )}
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-slate-500 text-sm">24/7 — Immediate response</p>
                  </div>
                </a>
                <a href={"mailto:" + CONTACT.email}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900">{CONTACT.email}</p>
                    <p className="text-slate-500 text-sm">Response within 2h</p>
                  </div>
                </a>
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-slate-900">Book 30 min</p>
                    <p className="text-slate-500 text-sm">Free consultation</p>
                  </div>
                </a>
              </div>

              {/* Why contact */}
              <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Needs analysis (30 min)', 'Personalized recommendation', 'Detailed quote within 24h', 'No commitment'].map(i => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">&#10003;</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-lg">We will respond within 2h.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact-en"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                  <input type="hidden" name="form-name" value="contact-en"/>
                  <input type="hidden" name="bot-field" className="hidden"/>

                  <h2 className="text-2xl font-black text-slate-900 mb-6">Send Us a Message</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: 'name', label: 'Full Name *', type: 'text', required: true },
                      { name: 'email', label: 'Email *', type: 'email', required: true },
                      { name: 'phone', label: 'Phone', type: 'tel', required: false },
                      { name: 'company', label: 'Company', type: 'text', required: false },
                    ].map(({ name, label, type, required }) => (
                      <div key={name}>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                        <input type={type} name={name} required={required}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"/>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
                    <select name="service" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
                      <option value="">Select...</option>
                      <option>Inbound Calls</option>
                      <option>Outbound Calls</option>
                      <option>Voice AI Agents</option>
                      <option>Customer Support</option>
                      <option>CRM & Lists</option>
                      <option>Trial Offer</option>
                      <option>Custom</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Call Volume</label>
                    <select name="volume" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
                      <option value="">Select...</option>
                      <option>Less than 100 calls/month</option>
                      <option>100 – 500 calls/month</option>
                      <option>500 – 2,000 calls/month</option>
                      <option>More than 2,000 calls/month</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea name="message" rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
                      placeholder="Describe your needs, schedule, industry..."/>
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

                  <button type="submit" disabled={sending}
                    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg">
                    {sending ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
