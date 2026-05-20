import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    // Check if consent is already given
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent')
      return consent !== 'accepted' && consent !== 'rejected'
    }
    return true
  })

  const [accepting, setAccepting] = useState(false)
  const [rejecting, setRejecting] = useState(false)

  const acceptCookies = async () => {
    setAccepting(true)
    try {
      localStorage.setItem('cookieConsent', 'accepted')
      // Dispatch a custom event so other scripts can react
      window.dispatchEvent(new CustomEvent('cookieConsentAccepted'))
      setShowBanner(false)
    } finally {
      setAccepting(false)
    }
  }

  const rejectCookies = async () => {
    setRejecting(true)
    try {
      localStorage.setItem('cookieConsent', 'rejected')
      window.dispatchEvent(new CustomEvent('cookieConsentRejected'))
      setShowBanner(false)
    } finally {
      setRejecting(false)
    }
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm text-white p-4 z-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-slate-300 space-y-2">
            <h3 className="font-semibold text-white">Privacy & Cookies</h3>
            <p className="text-sm">
              We use cookies to improve your experience, analyze site traffic, and for marketing purposes.
              <br />
              By continuing, you accept our use of cookies. You can <a href="/privacy" className="text-sky-400 hover:underline">learn more</a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={acceptCookies}
              disabled={accepting}
              className="flex-1 sm:flex-none bg-white text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
            >
              {accepting ? 'Accepting...' : 'Accept All'}
            </button>
            <button
              onClick={rejectCookies}
              disabled={rejecting}
              className="flex-1 sm:flex-none bg-slate-800 text-white hover:bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              {rejecting ? 'Rejecting...' : 'Reject Non-Essential'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}