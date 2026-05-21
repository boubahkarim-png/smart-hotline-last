import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import dynamic from 'next/dynamic'

// Dynamic imports with ssr: false to ensure client-side rendering
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { ssr: false })
const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false })
const LangSetter = dynamic(() => import('@/components/LangSetter'), { ssr: false })
const CleanupTestIds = dynamic(() => import('@/components/CleanupTestIds'), { ssr: false })

export const metadata: Metadata = {
  title: 'Smart Hotline | Votre Partenaire Téléphonique 24/7',
  description: 'Partenaire téléphonique pour PME. Téléphonistes, réceptionnistes et agents IA vocaux 24/7.',
  openGraph: {
    title: 'Smart Hotline | Votre Partenaire Téléphonique 24/7',
    description: 'Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME. Réception, émission, support client.',
    url: 'https://www.smart-hotline.com/',
    siteName: 'Smart Hotline',
    images: [
      {
        url: 'https://www.smart-hotline.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Partenaire Téléphonique 24/7'
      }
    ],
    locale: 'fr_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SmartHotline',
    title: 'Smart Hotline | Votre Partenaire Téléphonique 24/7',
    description: 'Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME.',
    images: [
      {
        url: 'https://www.smart-hotline.com/twitter-image.png'
      }
    ]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-CA">
      <body>
        {/* Language setter - runs on every route change to set lang attribute */}
        <LangSetter lang="fr-CA" />
        {/* Main components */}
        <CookieConsent />
        <GoogleAnalytics />
        {/* Cleanup component to remove any injected test IDs */}
        <CleanupTestIds />
        {children}
      </body>
    </html>
  )
}
