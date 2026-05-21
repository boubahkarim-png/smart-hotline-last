import Script from 'next/script'

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RTKKH1R9FB'

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onLoad={() => {
        window.dataLayer = window.dataLayer || []
        // @ts-ignore - gtag is injected by GA script
        function gtag(){dataLayer.push(arguments);}
        // @ts-ignore - gtag is injected by GA script
        gtag('js', new Date())
        // @ts-ignore - gtag is injected by GA script
        gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
          send_page_view: true
        })
      }}
    />
  )
}
