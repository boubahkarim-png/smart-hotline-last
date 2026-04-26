import GeoTestimonials from '@/components/GeoTestimonials'
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

export default function FrContact() {
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
      setError('Trop de soumissions. Veuillez attendre avant de réessayer.')
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    const honeypot = formData.get('website') as string
    const formTimestamp = parseInt(formData.get('form_timestamp') as string || '0')

    if (honeypot) {
      setError('Erreur de vérification. Veuillez réessayer.')
      return
    }

    const timeDiff = Date.now() - formTimestamp
    if (timeDiff < 2000 || timeDiff > 3600000) {
      setError('Le formulaire a expiré. Veuillez rafraîchir la page.')
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
                source: 'contact-form-fr',
                language: 'fr'
            }

    if (!data.name || !data.email) {
      setError('Le nom et l\'email sont requis.')
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
        const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
        const body = encodeURIComponent(
          `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        )
        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
        setSent(true)
      }
    } catch (err) {
      const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
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
                Contactez-Nous
              </h1>
              <p className="text-lg text-slate-600 mb-8">Consultation sans engagement — réponse sous 2h. Notre équipe est prête à répondre à toutes vos questions.</p>
              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Envoyer un Message →
              </Link>
            </div>
<div className="w-full lg:w-[60%]">
								<img src={`${basePath}/images/contact-hero.webp`} alt="Contactez Smart Hotline" loading="lazy" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - CONTACT INFO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nous sommes là pour vous aider</h2>
<p className="text-lg text-white mb-8 max-w-2xl mx-auto">
Que vous ayez une question sur nos services, besoin d'une démonstration,
ou simplement envie de discuter de vos besoins en relation client,
notre équipe est prête à vous répondre.
</p>

          {/* GEO-AWARE CONTACT INFO */}
          <div className="max-w-md mx-auto mt-8">
            <GeoContactInfo lang="fr" />
          </div>

          {/* GEO-AWARE CTA BUTTONS */}
          <div className="mt-8 flex justify-center">
            <GeoContactCTA lang="fr" />
          </div>
        </div>
      </section>

      {/* SECTION 3: LIGHT - HOW WE HELP */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Analyse Gratuite</h3>
              <p className="text-gray-600">
                Consultation de 30 minutes pour comprendre vos besoins spécifiques
                et vous proposer une solution adaptée.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mise en Place Rapide</h3>
              <p className="text-gray-600">
                Opérationnel en moins de 48 heures après validation de la solution.
                Formation incluse pour votre équipe.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Support Continu</h3>
              <p className="text-gray-600">
                Rapports mensuels, optimisation constante et support dédié
                pour garantir votre succès à long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DARK - TRUST BADGES */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {n:'500+', l:'PME accompagnées'},
            {n:'98%', l:'Taux de satisfaction'},
            {n:'24/7', l:'Disponibilité'},
            {n:'70%', l:'Économie moyenne'}
          ].map(({n,l}) => (
            <div key={l}>
              <div className="text-4xl lg:text-5xl font-extrabold text-sky-400">{n}</div>
              <div className="text-sky-100 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: LIGHT - CONTACT FORM */}
      <section className="py-20 bg-slate-50" id="contact-form">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Envoyez-nous un Message</h2>
          <p className="text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Décrivez vos besoins et nous vous répondrons sous 2 heures avec
            une recommandation personnalisée.
          </p>

          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-green-800 mb-2">Message envoyé!</h3>
              <p className="text-green-700 text-lg">Nous vous répondons sous 2h.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8"
            >
              <CaptchaField onValidChange={() => {}} />

              {rateLimited && (
                <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
                  Trop de soumissions. Veuillez attendre avant de réessayer.
                </div>
              )}

              <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>

<div className="space-y-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom Complet *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    maxLength={100}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Entreprise</label>
                                <input
                                    type="text"
                                    name="company"
                                    maxLength={100}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                                    placeholder="Votre entreprise"
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
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Téléphone</label>
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
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service d'intérêt</label>
                            <select
                                name="service"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                            >
                                <option value="">Sélectionnez un service...</option>
                                <option value="reception">Appels Entrants / Réception 24/7</option>
                                <option value="emission">Appels Sortants / Prospection</option>
                                <option value="agents-ia">Agents IA Vocaux</option>
                                <option value="support">Support Client</option>
                                <option value="crm">CRM & Listes</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Volume d'appels estimé</label>
                            <select
                                name="volume"
                                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                            >
                                <option value="">Sélectionnez le volume...</option>
                                <option value="small">Moins de 50 appels/mois</option>
                                <option value="medium">50-200 appels/mois</option>
                                <option value="large">200-500 appels/mois</option>
                                <option value="enterprise">500+ appels/mois</option>
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
                                placeholder="Décrivez vos besoins..."
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
                {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
              </button>
              <p className="text-center text-slate-500 text-sm mt-4">Réponse sous 2h • Sans engagement</p>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 6: DARK - WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Notre Engagement Qualité</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Disponibilité 24/7, même les weekends et jours fériés</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Aucun engagement à long terme</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Reporting transparent et accès aux données en temps réel</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Amélioration continue basée sur vos retours</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Technologie Qui Marche</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>IA vocale avancée avec compréhension contextuelle</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Intégrations simples avec vos outils existants</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Sécurité solide et conformité RGPD</span>
                </li>
                <li className="flex items-center gap-3 text-sky-100">
                  <span className="w-5 h-5 bg-sky-500/30 text-sky-300 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Applications mobiles pour gérer votre service où que vous soyez</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LIGHT - FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Questions Fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: 'Combien de temps prend la mise en place ?', a: 'Notre service est opérationnel en moins de 48 heures après validation de la solution.' },
              { q: 'Proposez-vous un essai gratuit ?', a: 'Oui, nous offrons un essai de 2 semaines à notre tarif d\'entrée ou 1 semaine gratuite suivie de 3 semaines payantes.' },
              { q: 'Quel est votre taux de disponibilité ?', a: 'Nous garantissons un taux de disponibilité de 99.9% avec une infrastructure redondante.' },
              { q: 'Comment garantissez-vous la qualité du service ?', a: 'Grâce à notre recrutement sélectif, formation continue et suivi qualité quotidien.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 8: DARK - TESTIMONIALS MARQUEE */}
<section className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 mb-10">
<h2 className="text-3xl lg:text-4xl font-bold text-center">Ce que disent nos clients</h2>
<p className="text-sky-200 text-center mt-3">Plus de 500 entreprises nous font confiance</p>
</div>
<GeoTestimonials lang="fr" theme="dark" layout="marquee" cardSize="sm" basePath={basePath} />
</section>

      {/* SECTION 9: DARK - FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à ne plus rater un appel?</h2>
<p className="text-lg text-white mb-8">
En place en 48h. Pas d'engagement longue durée. On commence quand vous voulez.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact-form" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 inline-block">
              Consultation Gratuite
            </Link>
            <Link href="/fr/tarifs" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 inline-block">
              Voir nos tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
