'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'
import { CONTACT } from '@/lib/nav'

export default function FrContact() {
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
      // Netlify forms — works automatically on Netlify deployment
      await fetch('/fr/contact/', {
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
          <h1 className="text-4xl font-black mb-3">Contactez-Nous</h1>
          <p className="text-blue-200 text-lg">Consultation sans engagement \u2014 r\u00e9ponse sous 2h</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">Nos Coordonn\u00e9es</h2>
              <div className="space-y-4">
                {showPhone && (
                  <a href={"tel:" + CONTACT.phone}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-slate-900">{CONTACT.phoneDisplay}</p>
                      <p className="text-slate-500 text-sm">Canada & USA — Lun-Ven 9h-18h</p>
                    </div>
                  </a>
                )}
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-slate-500 text-sm">24/7 \u2014 R\u00e9ponse imm\u00e9diate</p>
                  </div>
                </a>
                <a href={"mailto:" + CONTACT.email}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900">{CONTACT.email}</p>
                    <p className="text-slate-500 text-sm">R\u00e9ponse sous 2h</p>
                  </div>
                </a>
                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-slate-900">R\u00e9server 30 min</p>
                    <p className="text-slate-500 text-sm">Consultation gratuite</p>
                  </div>
                </a>
              </div>

              {/* Why contact */}
              <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-3">Ce que vous obtenez</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Analyse de vos besoins (30 min)', 'Recommandation personnalis\u00e9e', 'Devis d\u00e9taill\u00e9 sous 24h', 'Z\u00e9ro engagement'].map(i => (
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
                  <h3 className="text-2xl font-black text-green-800 mb-2">Message envoy\u00e9!</h3>
                  <p className="text-green-700 text-lg">Nous vous r\u00e9pondons sous 2h.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact-fr"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                  <input type="hidden" name="form-name" value="contact-fr"/>
                  <input type="hidden" name="bot-field" className="hidden"/>

                  <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: 'name', label: 'Nom Complet *', type: 'text', required: true },
                      { name: 'email', label: 'Email *', type: 'email', required: true },
                      { name: 'phone', label: 'T\u00e9l\u00e9phone', type: 'tel', required: false },
                      { name: 'company', label: 'Entreprise', type: 'text', required: false },
                    ].map(({ name, label, type, required }) => (
                      <div key={name}>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                        <input type={type} name={name} required={required}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"/>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service souhait\u00e9</label>
                    <select name="service" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
                      <option value="">S\u00e9lectionnez...</option>
                      <option>Appels Entrants</option>
                      <option>Appels Sortants</option>
                      <option>Agents IA Vocaux</option>
                      <option>Support Client</option>
                      <option>CRM &amp; Listes</option>
                      <option>Offre Essai</option>
                      <option>Sur mesure</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Volume d\u2019appels estim\u00e9</label>
                    <select name="volume" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
                      <option value="">S\u00e9lectionnez...</option>
                      <option>Moins de 100 appels/mois</option>
                      <option>100 \u2013 500 appels/mois</option>
                      <option>500 \u2013 2\u00a0000 appels/mois</option>
                      <option>Plus de 2\u00a0000 appels/mois</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea name="message" rows={4}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
                      placeholder="D\u00e9crivez vos besoins, vos horaires, votre secteur..."/>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
                      <span className="text-sm text-slate-600">
                        J\u2019accepte le traitement de mes donn\u00e9es conform\u00e9ment \u00e0 la{' '}
                        <Link href="/fr/confidentialite" className="text-blue-600 underline">politique de confidentialit\u00e9</Link>.
                      </span>
                    </label>
                  </div>

                  <button type="submit" disabled={sending}
                    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg">
                    {sending ? 'Envoi en cours...' : 'Envoyer le Message \u2192'}
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
