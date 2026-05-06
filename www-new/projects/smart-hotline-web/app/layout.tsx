import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: "Smart Hotline | Votre Partenaire Téléphonique 24/7",
  description: "Partenaire téléphonique pour PME. Téléphonistes, réceptionnistes et agents IA vocaux 24/7.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Smart Hotline | Votre Partenaire Téléphonique 24/7',
    description: 'Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME. Réception, émission, support client.',
    url: 'https://www.smart-hotline.com',
    siteName: 'Smart Hotline',
    images: [
      {
        url: 'https://www.smart-hotline.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Hotline - Partenaire Téléphonique 24/7',
      },
    ],
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Hotline | Votre Partenaire Téléphonique 24/7',
    description: 'Téléphonistes, réceptionnistes et agents IA vocaux 24/7 pour PME.',
    images: ['https://www.smart-hotline.com/twitter-image.png'],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smart Hotline",
  "description": "Partenaire téléphonique pour PME. Téléphonistes, réceptionnistes et agents IA vocaux 24/7. Réception d'appels, émission, support client et intégration CRM.",
  "logo": "https://www.smart-hotline.com/logo-smart-hotline.svg",
  "image": "https://www.smart-hotline.com/logo-full.svg",
  "telephone": "+1-514,819,0559",
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
    "name": "Phone Partner Services",
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
  },
  "knowsAbout": [
    "AI Voice Agents",
    "Call Center Services",
    "Phone Answering Service",
    "Virtual Receptionist",
    "Customer Support Automation",
    "French Language AI",
    "Appointment Scheduling AI",
    "24/7 Phone Support",
    "B2B Lead Generation",
    "CRM Integration",
    "ViciDial",
    "Asterisk PBX",
    "Voice AI Technology",
    "Quebec Business Services",
    "SMB Phone Solutions"
  ]
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte un centre d'appels pour une PME?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les tarifs Smart Hotline commencent à 15$ CAD/heure pour les agents sortants en période d'essai. Les forfaits mensuels de réception d'appels débutent à 299$. Les agents IA vocaux sont facturés à la minute, 30% sous les tarifs du marché."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un agent IA vocal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un agent IA vocal comme Sophie de Smart Hotline répond automatiquement aux appels en moins de 2 secondes. Il gère les FAQ, prend des rendez-vous, enregistre les messages et transfère vers un humain si nécessaire."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai de mise en place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart Hotline offre une mise en service en 48 heures après signature du contrat. Cela inclut la personnalisation des scripts, la formation des agents, l'intégration système et les tests."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous un essai gratuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous offrons un essai de 2 semaines à notre tarif d'entrée, ou 1 semaine gratuite suivie de 3 semaines payantes. Aucune carte de crédit requise."
      }
    },
    {
      "@type": "Question",
      "name": "Smart Hotline fonctionne-t-il en français?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, Smart Hotline dispose d'agents francophones natifs du Québec, de France, deBelgique et de Suisse. L'assistante vocale IA Sophie parle également les deux langues avec les accents régionaux."
      }
    }
  ]
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment démarrer avec Smart Hotline",
  "description": "Guide étape par étape pour mettre en place un service de centre d'appels pour votre PME",
  "totalTime": "PT48H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CAD",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Appel de découverte",
      "text": "Appelez-nous au +1 514 819,0559 ou réservez une consultation de 30 minutes via Calendly pour discuter de vos besoins."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Recevoir le devis",
      "text": "Nous vous envoyons un devis personnalisé sous 24 heures avec les tarifs adaptés à votre marché."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Configuration",
      "text": "Nos équipes configurent vos scripts, forment les agents et testent le service."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mise en ligne",
      "text": "Votre service est actif avec monitoring en temps réel et rapports."
    }
  ]
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.smart-hotline.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.smart-hotline.com/fr/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tarifs",
      "item": "https://www.smart-hotline.com/fr/tarifs/"
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
    <link rel="api-catalog" href="/.well-known/api-catalog" type="application/linkset+json" />
    <link rel="service-doc" href="/docs/api" type="text/html" />
    <link rel="mcp-server" href="/.well-known/mcp/server-card.json" type="application/json" />
    <link rel="a2a" href="/.well-known/agent-card.json" type="application/json" />
    <link rel="agent-skills" href="/.well-known/agent-skills/index.json" type="application/json" />
    <link rel="ai-content" href="/llms.txt" type="text/plain" />
    </head>
      <body>
        <GoogleAnalytics />
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
`,
        }}
      />
    </html>
  )
}
