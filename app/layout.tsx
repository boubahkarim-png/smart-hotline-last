import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Smart Hotline Agency | Centre d'Appels & IA pour PME",
  description: "Centre d'appels externalisé pour PME. Agents & IA vocaux 24/7.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smart Hotline",
  "description": "Centre d'appels externalisé pour PME. Réception d'appels 24/7, émission d'appels, agents IA vocaux, support client et intégration CRM.",
  "telephone": "+1-514-819-0559",
  "email": "direction@smart-hotline.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Montreal",
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5017",
    "longitude": "-73.5673"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Credit Card, Invoice",
  "sameAs": [
    "https://wa.me/15148190559"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Call Center Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réception d'Appels 24/7",
          "description": "Réception professionnelle d'appels entrants pour PME"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Émission d'Appels",
          "description": "Appels sortants pour prospection et fidélisation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agents IA Vocaux",
          "description": "Intelligence artificielle vocale répondant en 2 secondes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Support Client",
          "description": "Support multicanal: téléphone, email, chat, WhatsApp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intégration CRM",
          "description": "Connexion aux CRM et gestion de listes B2B/B2C"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
<body>
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
          `,
        }}
      />
    </html>
  )
}
