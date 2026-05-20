'use client'

import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') === 'true'
    }
    return false
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && showBanner === false) {
      // Create and show cookie consent banner
      const banner = document.createElement('div')
      banner.id = 'cookie-consent-banner'
      banner.style.position = 'fixed'
      banner.style.bottom = '0'
      banner.style.left = '0'
      banner.style.right = '0'
      banner.style.background = 'rgba(0,0,0,0.8)'
      banner.style.color = '#fff'
      banner.style.padding = '20px'
      banner.style.textAlign = 'center'
      banner.style.zIndex = '9999'
      banner.style.fontFamily = 'Arial, sans-serif'
      banner.innerHTML = `
        <div style="max-width: 500px; margin: 0 auto;">
          <p style="margin: 0 0 15px 0;">Nous utilisons des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez notre utilisation des cookies.</p>
          <button style="background: #007bff; color: white; border: none; padding: 10px 20px; margin: 0 5px; cursor: pointer;">Accepter</button>
          <button style="background: #6c757d; color: white; border: none; padding: 10px 20px; margin: 0 5px; cursor: pointer;">Refuser</button>
        </div>
      `
      const acceptBtn = banner.querySelector('button:nth-child(1)')
      const rejectBtn = banner.querySelector('button:nth-child(2)')
      acceptBtn?.addEventListener('click', () => {
        banner.remove()
        localStorage.setItem('cookieConsent', 'true')
      })
      rejectBtn?.addEventListener('click', () => {
        banner.remove()
        localStorage.setItem('cookieConsent', 'true')
      })
      document.body.appendChild(banner)
    }
  }, [showBanner])

  return null
}
