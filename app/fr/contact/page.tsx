'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useGeo } from '@/hooks/useGeo'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.smart-hotline.com'

export default function FrContact() {
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
      setError('Erreur de sécurité. Veuillez rafraîchir la page.')
      return
    }
    
    setSending(true)
    setError('')
    const form = e.currentTarget
    const formData = new FormData(form)

    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '').substring(0, 500)
    const sanitizeEmail = (str: string) => str.trim().toLowerCase().substring(0, 254)
    const sanitizePhone = (str: string) => str.replace(/[^\d+\-\s()]/g, '').substring(0, 20)

    const data = {
      name: sanitize(formData.get('name') as string || ''),
      email: sanitizeEmail(formData.get('email') as string || ''),
      phone: sanitizePhone(formData.get('phone') as string || ''),
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
        headers: { 
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSent(true)
      } else {
        const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
        const body = encodeURIComponent(
          `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nEntreprise: ${data.company}\nService: ${data.service}\nVolume: ${data.volume}\n\nMessage:\n${data.message}`
        )
        window.location.href = `mailto:direction@smart-hotline.com?subject=${subject}&body=${body}`
        setSent(true)
      }
    } catch (err) {
      const subject = encodeURIComponent(`Demande de contact - ${data.name}`)
      const body = encodeURIComponent(
        `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nEntreprise: ${data.company}\nService: ${data.service}\nVolume: ${data.volume}\n\nMessage:\n${data.message}`
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
            <div className="w-full lg:w-[55%]">
              <h1 className="text-4xl lg:text-5xl font-black mb-5 leading-tight text-slate-900">
                Contactez-Nous
              </h1>
              <p className="text-lg text-slate-600 mb-8">Consultation sans engagement — réponse sous 2h. Notre équipe est prête à répondre à toutes vos questions.</p>
              <Link href="#contact-form" className="bg-blue-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-700 inline-block shadow-lg">
                Envoyer un Message →
              </Link>
            </div>
            <div className="w-full lg:w-[40%]">
              <img src="/smart-hotline-last/images/contact-hero.webp" alt="Contactez Smart Hotline" className="rounded-2xl shadow-2xl w-full object-cover" style={{maxHeight:'380px', objectFit:'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK - CONTACT INFO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nous sommes là pour vous aider</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Que vous ayez une question sur nos services, besoin d&apos;une démonstration,
            ou simplement envie de discuter de vos besoins en relation client,
            notre équipe est prête à vous répondre.
          </p>
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

      {/* SECTION 4: LIGHT - TRUST BADGES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {n:'500+', l:'PME accompagnées'},
            {n:'98%', l:'Taux de satisfaction'},
            {n:'24/7', l:'Disponibilité'},
            {n:'70%', l:'Économie moyenne'}
          ].map(({n,l}) => (
            <div key={l}>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-600">{n}</div>
              <div className="text-gray-600 mt-2">{l}</div>
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
              className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6"
            >
              <input type="hidden" name="csrf_token" value={csrfToken} />
              <h2 className="text-2xl font-black text-slate-900 mb-6">Envoyez-nous un Message</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  { name: 'name', label: 'Nom Complet *', type: 'text', required: true },
                  { name: 'email', label: 'Email *', type: 'email', required: true },
                  { name: 'phone', label: 'Téléphone', type: 'tel', required: false },
                  { name: 'company', label: 'Entreprise', type: 'text', required: false },
                ].map(({ name, label, type, required }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                    <input
                      type={type}
                      name={name}
                      required={required}
                      maxLength={254}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service souhaité</label>
                <select
                  name="service"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50"
                >
                  <option value="">Sélectionnez...</option>
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
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Volume d&apos;appels estimé</label>
                <select
                  name="volume"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50"
                >
                  <option value="">Sélectionnez...</option>
                  <option>Moins de 100 appels/mois</option>
                  <option>100 – 500 appels/mois</option>
                  <option>500 – 2 000 appels/mois</option>
                  <option>Plus de 2 000 appels/mois</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none text-slate-900 bg-slate-50"
                  placeholder="Décrivez vos besoins, vos horaires, votre secteur..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600"/>
                  <span className="text-sm text-slate-600">
                    J&apos;accepte le traitement de mes données conformément à la{' '}
                    <Link href="/fr/confidentialite" className="text-blue-600 underline">politique de confidentialité</Link>.
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
                {sending ? 'Envoi en cours...' : 'Envoyer le Message →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 6: LIGHT - WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Engagement Qualité</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Disponibilité 24/7, même les weekends et jours fériés</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Aucun engagement à long terme</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Reporting transparent et accès aux données en temps réel</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Amélioration continue basée sur vos retours</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technologie Qui Marche</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>IA vocale avancée avec compréhension contextuelle</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Intégrations simples avec vos outils existants</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Sécurité solide et conformité RGPD</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </span>
                  <span>Applications mobiles pour gérer votre service où que vous soyez</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LIGHT - ADDITIONAL INFO */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Questions Fréquentes</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-700">
                  <strong>Q:</strong> Combien de temps prend la mise en place ?
                </div>
                <div className="text-sm text-gray-600 ml-4">
                  <strong>R:</strong> Notre service est opérationnel en moins de 48 heures après validation de la solution.
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Q:</strong> Proposez-vous un essai gratuit ?
                </div>
                <div className="text-sm text-gray-600 ml-4">
                  <strong>R:</strong> Oui, nous offrons un essai de 2 semaines à notre tarif d&apos;entrée ou 1 semaine gratuite suivie de 3 semaines payantes.
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Q:</strong> Quel est votre taux de disponibilité ?
                </div>
                <div className="text-sm text-gray-600 ml-4">
                  <strong>R:</strong> Nous garantissons un taux de disponibilité de 99.9% avec une infrastructure redondante.
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Q:</strong> Comment garantissez-vous la qualité du service ?
                </div>
                <div className="text-sm text-gray-600 ml-4">
                  <strong>R:</strong> Grâce à notre recrutement sélectif, formation continue et suivi qualité quotidien.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Prêt à commencer ?</h3>
              <p className="text-gray-600 mb-6">
Chaque jour que vous attendez, vous manquez potentiellement des appels importants
et des opportunités. Appelez-nous pour en discuter.
              </p>
              <Link href="#contact-form" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Réserver un Appel →
                <span className="ml-2">📞</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DARK - FINAL CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à ne plus rater un appel?</h2>
          <p className="text-lg text-blue-100 mb-8">
            En place en 48h. Pas d&apos;engagement longue durée. On commence quand vous voulez.
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
