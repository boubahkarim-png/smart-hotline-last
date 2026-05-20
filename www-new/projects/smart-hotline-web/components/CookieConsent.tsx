'use client'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    // Check if consent is already given
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') === 'true'
    }
    return false
  })

  useEffect(() => {
    // Add test indicator to verify component is loaded
    if (typeof window !== 'undefined' && showBanner === false) {
      const testDiv = document.createElement('div')
      testDiv.id = 'cookie-consent-test-indicator'
      testDiv.style.position = 'fixed'
      testDiv.style.top = '0'
      testDiv.style.right = '0'
      testDiv.style.background = 'red'
      testDiv.style.color = 'white'
      testDiv.style.padding = '10px'
      testDiv.style.zIndex = '9999'
      testDiv.textContent = 'CookieConsent Loaded (Test Indicator)'
      document.body.appendChild(testDiv)
    }
  }, [])

  const acceptConsent = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(true)
  }

  const rejectConsent = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(true)
  }

  if (showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 z-50 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="text-center sm:text-left">
        <h3 className="font-bold mb-2">Nous utilisons des cookies</h3>
        <p className="mb-4">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
      </div>
      <div className="flex space-x-3 mt-4 sm:mt-0">
        <button onClick={acceptConsent} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Accepter
        </button>
        <button onClick={rejectConsent} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Refuser
        </button>
      </div>
    </div>
  )
}
