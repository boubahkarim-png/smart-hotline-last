'use client'

import { useEffect } from 'react'

export default function CleanupTestIds() {
  useEffect(() => {
    const removeElements = () => {
      const selectors = [
        '[data-testid="google-analytics-component"]',
        '[data-testid="cookie-consent-component"]'
      ]
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove())
      })
    }
    // Run immediately and then on mutation observer for safety
    removeElements()
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement
            if (el.matches('[data-testid="google-analytics-component"], [data-testid="cookie-consent-component"]')) {
              el.remove()
            }
            // Also check children
            el.querySelectorAll('[data-testid="google-analytics-component"], [data-testid="cookie-consent-component"]').forEach(child => child.remove())
          }
        }
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
