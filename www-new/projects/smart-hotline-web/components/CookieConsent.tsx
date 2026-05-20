'use client'

export default function CookieConsent() {
  console.log('CookieConsent component rendered')
  
  // This component MUST be included in the bundle - it has visible side effects
  if (typeof window !== 'undefined') {
    // Add unmistakable visual proof this component is loaded and running
    const proof = document.createElement('div')
    proof.id = 'cookie-consent-debug-proof'
    proof.style.position = 'fixed'
    proof.style.top = '0'
    proof.style.left = '0'
    proof.style.width = '100%'
    proof.style.height = '3px'
    proof.style.background = 'red'
    proof.style.zIndex = '9999'
    document.body.appendChild(proof)
  }
  
  // Always return null for the actual UI to avoid duplicate banners during testing
  // The visual proof above confirms the component is loaded and executed
  return null
}
