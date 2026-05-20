import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import dynamic from 'next/dynamic'

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { ssr: false })
const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false })

export const metadata: Metadata = {
  title: "Smart Hotline | Votre Partenaire Téléphonique 24/7",
  description: "Partenaire téléphonique pour PME. Téléphonistes, réceptionnistes et agents IA vocaux 24/7.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.smart-hotline.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smart-hotline.com/" />
        <meta property="og:title" content="Smart Hotline | Votre Partenaire Téléphonique 24/7" />
        <meta property="og:description" content="Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME. Réception, émission, support client." />
        <meta property="og:image" content="https://www.smart-hotline.com/og-image.png" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.smart-hotline.com/" />
        <meta property="twitter:title" content="Smart Hotline | Votre Partenaire Téléphonique 24/7" />
        <meta property="twitter:description" content="Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME. Réception, émission, support client." />
        <meta property="twitter:image" content="https://www.smart-hotline.com/og-image.png" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smart Hotline",
              "image": [
                "https://www.smart-hotline.com/og-image.png"
              ],
              "@id": "https://www.smart-hotline.com/",
              "url": "https://www.smart-hotline.com/",
              "telephone": "+1-514-XXX-XXXX",
              "priceRange": "$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Rue Example",
                "addressLocality": "Montréal",
                "postalCode": "H1H 1H1",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.5017",
                "longitude": "-73.5673"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }],
              "sameAs": [
                "https://www.facebook.com/SmartHotline",
                "https://www.linkedin.com/company/smart-hotline",
                "https://www.instagram.com/smarthotline/"
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Qu'est-ce que Smart Hotline ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Smart Hotline est un service de téléphonie 24/7 pour les PME offrant des téléphonistes, réceptionnistes et agents IA vocaux pour la réception d'appels, l'émission d'appels et le support client."
                }
              }, {
                "@type": "Question",
                "name": "Quels sont les horaires de service ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous sommes disponibles 24 heures sur 24, 7 jours sur 7, incluant les jours fériés."
                }
              }, {
                "@type": "Question",
                "name": "Proposez-vous des services en français et en anglais ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, tous nos services sont disponibles entièrement en français et en anglais pour servir le marché québécois et canadien."
                }
              }]
            })
          }}
        />
        
        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Comment commencer avec Smart Hotline",
              "description": "Étapes simples pour mettre en place votre service de téléphonie 24/7",
              "step": [{
                "@type": "HowToStep",
                "text": "Contactez-nous pour une consultation gratuite afin d'analyser vos besoins en téléphonie d'entreprise."
              }, {
                "@type": "HowToStep",
                "text": "Choisissez votre forfait parmi nos options flexibles adaptées aux PME."
              }, {
                "@type": "HowToStep",
                "text": "Nous configurons votre système et formons votre équipe en moins de 48 heures."
              }, {
                "@type": "HowToStep",
                "text": "Commencez à recevoir et émettre des appels professionnels 24/7 avec notre support continu."
              }]
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.smart-hotline.com/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.smart-hotline.com/services/"
              }]
            })
          }}
        />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="05ybAoipr9FaHqaSoGJCrTy1_9jAErcSwsRQtIvZ0iyy7FSdaW9I6p2RLPkhBdRJtwwnw7becuNMLh-L0SaL84rPnSg" />
        
        {/* Well-known endpoints */}
        <link rel="agent-card" href="/.well-known/agent-card.json" type="application/json" />
        <link rel="agent-skills" href="/.well-known/agent-skills/index.json" type="application/json" />
        <link rel="api-catalog" href="/.well-known/api-catalog" type="application/linkset+json" />
        <link rel="mcp-server" href="/.well-known/mcp/server-card.json" type="application/linkset+json" />
        <link rel="llms-txt" href="/llms.txt" type="text/plain" />
        
      </head>
      <body>
        {/*
          Client components loaded dynamically to avoid SSR issues
          */}
        <GoogleAnalytics />
        <CookieConsent />
        <Script src="/scripts/webmcp.js" strategy="afterInteractive" />
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69c14d2a91de1e1c374c9f29/1jkdharj3';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`
        }}
      />
    </html>
  )
}
