import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') === 'true'
    }
    return false
  })

  // Always show a prominent test banner to verify component is loaded
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create a very visible test banner
      const testBanner = document.createElement('div')
      testBanner.id = 'cookie-consent-debug-banner'
      testBanner.style.position = 'fixed'
      testBanner.style.top = '0'
      testBanner.style.left = '0'
      testBanner.style.right = '0'
      testBanner.style.background = 'linear-gradient(to right, #ff0000, #ff6600)'
      testBanner.style.color = 'white'
      testBanner.style.textAlign = 'center'
      testBanner.style.padding = '15px'
      testBanner.style.fontSize = '18px'
      testBanner.style.fontWeight = 'bold'
      testBanner.style.zIndex = '9999'
      testBanner.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
      testBanner.innerHTML = `
        <div>🍪 COOKIE CONSENT COMPONENT IS LOADED AND WORKING! 🍪</div>
        <div style="font-size: 14px; margin-top: 5px;">
          This banner confirms the component is rendering correctly.
        </div>
      `
      document.body.appendChild(testBanner)
    }
  }, [])

  // If user has already made a choice, don't show the consent banner
  if (showBanner) {
    return null
  }

  // Show cookie consent banner
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 z-50 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="text-center sm:text-left">
        <h3 className="font-bold mb-2">Nous utilisons des cookies</h3>
        <p className="mb-4">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
      </div>
      <div className="flex space-x-3 mt-4 sm:mt-0">
        <button onClick={() => {
          localStorage.setItem('cookieConsent', 'true')
          setShowBanner(true)
        }} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Accepter
        </button>
        <button onClick={() => {
          localStorage.setItem('cookieConsent', 'false')
          setShowBanner(true)
        }} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Refuser
        </button>
      </div>
    </div>
  )
}
