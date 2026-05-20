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
    if (typeof window !== 'undefined') {
      if (showBanner === false) {
        // Show the cookie consent banner
        const banner = document.createElement('div')
        banner.id = 'cookie-consent-banner'
        banner.style.position = 'fixed'
        banner.style.bottom = '0'
        banner.style.left = '0'
        banner.style.right = '0'
        banner.style.background = '#333'
        banner.style.color = '#fff'
        banner.style.padding = '15px'
        banner.style.textAlign = 'center'
        banner.style.zIndex = '9999'
        banner.innerHTML = `
          Nous utilisons des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez notre utilisation des cookies.
          <button style="margin-left: 10px; padding: 5px 10px; background: #007bff; color: white; border: none; cursor: pointer;">Accepter</button>
          <button style="margin-left: 10px; padding: 5px 10px; background: #6c757d; color: white; border: none; cursor: pointer;">Refuser</button>
        `
        banner.querySelector('button:nth-child(2)')?.addEventListener('click', () => {
          banner.remove()
          localStorage.setItem('cookieConsent', 'true')
        })
        banner.querySelector('button:nth-child(1)')?.addEventListener('click', () => {
          banner.remove()
          localStorage.setItem('cookieConsent', 'true')
        })
        document.body.appendChild(banner)
      }
    }
  }, [showBanner])

  // Always show a small test indicator to verify the component is loaded
  return (
    <>
      <div data-testid="cookie-consent-component" style={{position: 'fixed', bottom: 0, left: 0, background: 'blue', color: 'white', padding: '5px', zIndex: 9999, fontSize: '10px'}}>
        CookieConsent Loaded
      </div>
    </>
  )
}
