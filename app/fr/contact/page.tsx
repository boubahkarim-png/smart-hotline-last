'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export default function FrContact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch('http://194.163.187.192:8084/api/contacts/new', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: data.name, email: data.email, phone: data.phone, company: data.company }),
      })
    } catch {}
    setSent(true)
    setSending(false)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Contactez-Nous</h1>
          <p className="text-blue-100 text-lg">Consultation gratuite sans engagement</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos Coordonnees</h2>
              <div className="space-y-4">
                {[
                  { icon: '📞', label: '+1 514 819-0559', href: 'tel:+15148190559', sub: 'Lun-Ven 9h-18h' },
                  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/15148190559', sub: '24/7' },
                  { icon: '✉️', label: 'direction@smart-hotline.com', href: 'mailto:direction@smart-hotline.com', sub: 'Reponse sous 24h' },
                  { icon: '📅', label: 'Reserver 30 min', href: 'https://calendly.com/smart-hotline/30min', sub: 'Consultation gratuite' },
                ].map(({ icon, label, href, sub }) => (
                  <a key={href} href={href}
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-semibold">{label}</p>
                      <p className="text-gray-500 text-sm">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message envoye!</h3>
                  <p className="text-green-700">Nous vous repondons sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-nous un Message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { name: 'name', label: 'Nom Complet *', type: 'text', required: true },
                      { name: 'email', label: 'Email *', type: 'email', required: true },
                      { name: 'phone', label: 'Telephone', type: 'tel', required: false },
                      { name: 'company', label: 'Entreprise', type: 'text', required: false },
                    ].map(({ name, label, type, required }) => (
                      <div key={name}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                        <input type={type} name={name} required={required}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"/>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                    <select name="service" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Selectionnez...</option>
                      <option>Appels Entrants</option>
                      <option>Appels Sortants</option>
                      <option>Agents IA Vocaux</option>
                      <option>Support Client</option>
                      <option>CRM & Listes</option>
                      <option>Demonstration</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea name="message" rows={4}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"/>
                  </div>
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1"/>
                      <span className="text-sm text-gray-600">
                        J'accepte le traitement de mes donnees conformement a la{' '}
                        <Link href="/fr/confidentialite" className="text-blue-600 underline">
                          politique de confidentialite
                        </Link>.
                      </span>
                    </label>
                  </div>
                  <button type="submit" disabled={sending}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 text-lg">
                    {sending ? 'Envoi...' : 'Envoyer le Message ✉️'}
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
