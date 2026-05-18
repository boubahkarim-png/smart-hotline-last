import { getPageMetadata } from '@/lib/seo'

export const metadata = {
  ...getPageMetadata('contact', 'fr'),
}

     1|'use client'
     2|import { useState } from 'react'
     3|import Link from 'next/link'
     4|import { useGeo } from '@/hooks/useGeo'
     5|import { CONTACT } from '@/lib/nav'
     6|
     7|export default function FrContact() {
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
    20|      // Netlify forms — works automatically on Netlify deployment
    21|      await fetch('/fr/contact/', {
    22|        method: 'POST',
    23|        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    24|        body: new URLSearchParams(data as any).toString(),
    25|      })
    26|    } catch {}
    27|
    28|    setSent(true)
    29|    setSending(false)
    30|  }
    31|
    32|  return (
    33|    <>
    34|      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
    35|        <div className="max-w-4xl mx-auto px-4 text-center">
    36|          <h1 className="text-4xl font-black mb-3">Contactez-Nous</h1>
    37|          <p className="text-blue-200 text-lg">Consultation sans engagement — réponse sous 2h</p>
    38|        </div>
    39|      </section>
    40|
    41|      <section className="py-16 bg-slate-50">
    42|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    43|          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    44|
    45|            {/* Contact info */}
    46|            <div>
    47|              <h2 className="text-2xl font-black text-slate-900 mb-6">Nos Coordonnées</h2>
    48|              <div className="space-y-4">
    49|                {showPhone && (
    50|                  <a href={"tel:" + CONTACT.phone}
    51|                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    52|                    <span className="text-2xl">📞</span>
    53|                    <div>
    54|                      <p className="font-semibold text-slate-900">{CONTACT.phoneDisplay}</p>
    55|                      <p className="text-slate-500 text-sm">Canada & USA — Lun-Ven 9h-18h</p>
    56|                    </div>
    57|                  </a>
    58|                )}
    59|                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
    60|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
    61|                  <span className="text-2xl">💬</span>
    62|                  <div>
    63|                    <p className="font-semibold text-slate-900">WhatsApp</p>
    64|                    <p className="text-slate-500 text-sm">24/7 — Réponse immédiate</p>
    65|                  </div>
    66|                </a>
    67|                <a href={"mailto:" + CONTACT.email}
    68|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    69|                  <span className="text-2xl">✉️</span>
    70|                  <div>
    71|                    <p className="font-semibold text-slate-900">{CONTACT.email}</p>
    72|                    <p className="text-slate-500 text-sm">Réponse sous 2h</p>
    73|                  </div>
    74|                </a>
    75|                <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer"
    76|                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
    77|                  <span className="text-2xl">📅</span>
    78|                  <div>
    79|                    <p className="font-semibold text-slate-900">Réserver 30 min</p>
    80|                    <p className="text-slate-500 text-sm">Consultation gratuite</p>
    81|                  </div>
    82|                </a>
    83|              </div>
    84|
    85|              {/* Why contact */}
    86|              <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
    87|                <h3 className="font-bold text-slate-900 mb-3">Ce que vous obtenez</h3>
    88|                <ul className="space-y-2 text-sm text-slate-600">
    89|                  {['Analyse de vos besoins (30 min)', 'Recommandation personnalisée', 'Devis détaillé sous 24h', 'Zéro engagement'].map(i => (
    90|                    <li key={i} className="flex items-center gap-2">
    91|                      <span className="text-green-500 font-bold">&#10003;</span> {i}
    92|                    </li>
    93|                  ))}
    94|                </ul>
    95|              </div>
    96|            </div>
    97|
    98|            {/* Form */}
    99|            <div className="lg:col-span-2">
   100|              {sent ? (
   101|                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
   102|                  <div className="text-6xl mb-4">✅</div>
   103|                  <h3 className="text-2xl font-black text-green-800 mb-2">Message envoyé!</h3>
   104|                  <p className="text-green-700 text-lg">Nous vous répondons sous 2h.</p>
   105|                </div>
   106|              ) : (
   107|                <form
   108|                  onSubmit={handleSubmit}
   109|                  name="contact-fr"
   110|                  method="POST"
   111|                  data-netlify="true"
   112|                  netlify-honeypot="bot-field"
   113|                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
   114|                  <input type="hidden" name="form-name" value="contact-fr"/>
   115|                  <input type="hidden" name="bot-field" className="hidden"/>
   116|
   117|                  <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>
   118|
   119|                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
   120|                    {[
   121|                      { name: 'name', label: 'Nom Complet *', type: 'text', required: true },
   122|                      { name: 'email', label: 'Email *', type: 'email', required: true },
   123|                      { name: 'phone', label: 'Téléphone', type: 'tel', required: false },
   124|                      { name: 'company', label: 'Entreprise', type: 'text', required: false },
   125|                    ].map(({ name, label, type, required }) => (
   126|                      <div key={name}>
   127|                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
   128|                        <input type={type} name={name} required={required}
   129|                          className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"/>
   130|                      </div>
   131|                    ))}
   132|                  </div>
   133|
   134|                  <div className="mb-4">
   135|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service souhaité</label>
   136|                    <select name="service" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
   137|                      <option value="">Sélectionnez...</option>
   138|                      <option>Appels Entrants</option>
   139|                      <option>Appels Sortants</option>
   140|                      <option>Agents IA Vocaux</option>
   141|                      <option>Support Client</option>
   142|                      <option>CRM &amp; Listes</option>
   143|                      <option>Offre Essai</option>
   144|                      <option>Sur mesure</option>
   145|                    </select>
   146|                  </div>
   147|
   148|                  <div className="mb-4">
   149|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Volume d’appels estimé</label>
   150|                    <select name="volume" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50">
   151|                      <option value="">Sélectionnez...</option>
   152|                      <option>Moins de 100 appels/mois</option>
   153|                      <option>100 – 500 appels/mois</option>
   154|                      <option>500 – 2 000 appels/mois</option>
   155|                      <option>Plus de 2 000 appels/mois</option>
   156|                    </select>
   157|                  </div>
   158|
   159|                  <div className="mb-5">
   160|                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
   161|                    <textarea name="message" rows={4}
   162|                      className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
   163|                      placeholder="Décrivez vos besoins, vos horaires, votre secteur..."/>
   164|                  </div>
   165|
   166|                  <div className="mb-6">
   167|                    <label className="flex items-start gap-3 cursor-pointer">
   168|                      <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
   169|                      <span className="text-sm text-slate-600">
   170|                        J’accepte le traitement de mes données conformément à la{' '}
   171|                        <Link href="/fr/confidentialite" className="text-blue-600 underline">politique de confidentialité</Link>.
   172|                      </span>
   173|                    </label>
   174|                  </div>
   175|
   176|                  <button type="submit" disabled={sending}
   177|                    className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 text-lg shadow-lg">
   178|                    {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
   179|                  </button>
   180|                </form>
   181|              )}
   182|            </div>
   183|          </div>
   184|        </div>
   185|      </section>
   186|    </>
   187|  )
   188|}
   189|