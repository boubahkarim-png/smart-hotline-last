'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RTKKH1R9FB'

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load gtag script dynamically if not already loaded
      if (!window.gtag) {
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          send_page_view: true
        })
      }
    }
  }, [])

  // Always show a small test indicator to verify the component is loaded
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          })
        `}
      </Script>
      <div data-testid="google-analytics-component" style={{position: 'fixed', bottom: 40, left: 0, background: 'red', color: 'white', padding: '5px', zIndex: 9999, fontSize: '10px'}}>
        GoogleAnalytics Loaded
      </div>
    </>
  )
}
