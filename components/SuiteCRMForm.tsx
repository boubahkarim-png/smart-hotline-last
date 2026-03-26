'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  source: string
}

interface SuiteCRMFormProps {
  lang?: 'fr' | 'en'
  source?: string
  onSuccess?: () => void
}

export default function SuiteCRMForm({ lang = 'fr', source = 'website', onSuccess }: SuiteCRMFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    source: source
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)

  const fr = lang === 'fr'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!acceptedPrivacy) {
      setError(fr ? 'Veuillez accepter la politique de confidentialité.' : 'Please accept the privacy policy.')
      return
    }

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('http://194.163.187.192:8090/module/Leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.name.split(' ')[0] || formData.name,
          last_name: formData.name.split(' ').slice(1).join(' ') || '',
          email1: formData.email,
          description: formData.message,
          lead_source: formData.source,
          status: 'New',
          assigned_user_id: '1'
        })
      })

      if (!response.ok) {
        const fallbackResponse = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        if (!fallbackResponse.ok) throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '', source })
      onSuccess?.()
    } catch (err) {
      setStatus('error')
      setError(fr ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {fr ? 'Merci !' : 'Thank you!'}
        </h3>
        <p className="text-green-700">
          {fr ? 'Nous vous contacterons dans les 2 heures.' : 'We will contact you within 2 hours.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Nom' : 'Name'} *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder={fr ? 'Jean Tremblay' : 'John Smith'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Courriel' : 'Email'} *
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          placeholder="nom@entreprise.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {fr ? 'Message' : 'Message'} *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
          placeholder={fr ? 'Comment pouvons-nous vous aider?' : 'How can we help you?'}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          checked={acceptedPrivacy}
          onChange={(e) => setAcceptedPrivacy(e.target.checked)}
          className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="privacy" className="text-sm text-slate-600">
          {fr ? (
            <>J'accepte la <a href="/fr/confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a> (RGPD)</>
          ) : (
            <>I accept the <a href="/en/privacy" className="text-blue-600 hover:underline">privacy policy</a> (GDPR)</>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {fr ? 'Envoi en cours...' : 'Sending...'}
          </>
        ) : (
          <>
            {fr ? 'Recevoir Mon Analyse Gratuite' : 'Get My Free Analysis'}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-sm text-slate-500 text-center font-medium">
        {fr ? 'Réponse garantie sous 2h • Aucun engagement' : 'Response guaranteed within 2h • No commitment'}
      </p>
    </form>
  )
}
