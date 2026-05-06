import type { Metadata } from 'next'
import type { Lang } from './i18n'

const BASE_URL = 'https://www.smart-hotline.com'

export const SEO_FR = {
  title: 'Smart Hotline Agency | Centre d\'Appels & IA pour PME',
  description: 'Externalisez votre relation client avec des conseillers professionnels et agents IA vocaux 24/7. Réception appels, prospection, support client. Essai gratuit 2 semaines.',
  keywords: 'centre d\'appels quebec, centre d\'appels montreal, centre d\'appels PME, externalisation relation client, réception téléphonique 24/7, agents IA vocaux, support client 24/7, Sophie IA, call center Québec, télésecrétariat, prospection téléphonique, réception d\'appels 24/7, externalisation centre d\'appels, service téléconseiller quebec, call center quebec francophone, externalisation appels pme, agents ia vocaux quebec, support client quebec, centre d\'appels virtuel, externalisation service client, prise d\'appels externalisée, centre d\'appels pour pme quebec, service réception d\'appels 24h quebec, externalisation appels entrants montreal, agents vocaux ia pour entreprises, centre d\'appels bilingue quebec, service téléphonique externalisé pme, réponse téléphonique professionnelle quebec, centre d\'appels pas cher quebec, externalisation support client pme, prise d\'appels après heures quebec, centre d\'appels spécialisé pme, service d\'appels sortants quebec, agents virtuels service client, externalisation réception appels montreal, call center francophone canada, centre d\'appels quebec city, centre d\'appels sainte-foy, centre d\'appels laval, centre d\'appels gatineau, centre d\'appels sherbrooke, centre d\'appels trois-rivieres, externalisation centre d\'appels france, centre d\'appels virtuel france, agents ia vocaux francophones, externalisation service client belgique, centre d\'appels suisse romande, télésecrétariat externalisé',
  ogImage: 'https://www.smart-hotline.com/images/main-hero.jpg',
  twitterCard: 'summary_large_image',
  author: 'Smart Hotline Agency',
  robots: 'index, follow',
  canonical: `${BASE_URL}/fr/`
}

export const SEO_EN = {
  title: 'Smart Hotline Agency | Call Center & AI for SMBs',
  description: 'Outsource your customer relations with professional agents and AI voice assistants 24/7. Call reception, prospecting, customer support. Free 2-week trial.',
  keywords: 'call center quebec, call center montreal, call center services quebec, call center SMB, customer service outsourcing, phone reception 24/7, AI voice agents, 24/7 support, Sophie AI, call center Quebec, telemarketing, inbound calls, inbound call center services, outbound call center canada, ai voice agents call center, call center outsourcing canada, customer support outsourcing, virtual call center services, best call center for small business quebec, 24/7 inbound call center services canada, affordable call center outsourcing montreal, ai voice agents for customer service, bilingual call center services quebec, outbound call center for lead generation, virtual receptionist services montreal, call center for startups quebec, customer support outsourcing for small business, after hours call answering service quebec, call center for ecommerce businesses, appointment scheduling call center quebec, lead qualification call center services, inbound sales call center canada, call center toronto, call center vancouver, call center calgary, call center ottawa, call center edmonton, call center winnipeg, quebec call center services, montreal call center, canadian call center outsourcing, french english call center, 24/7 phone answering service',
  ogImage: 'https://www.smart-hotline.com/images/main-hero.jpg',
  twitterCard: 'summary_large_image',
  author: 'Smart Hotline Agency',
  robots: 'index, follow',
  canonical: `${BASE_URL}/en/`
}

export function generateMetadata(lang: Lang): Metadata {
  const seo = lang === 'fr' ? SEO_FR : SEO_EN

  return {
    title: {
      default: seo.title,
      template: `%s | Smart Hotline Agency`
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: seo.author }],
    creator: 'Smart Hotline Agency',
    publisher: 'Smart Hotline Agency',
    robots: seo.robots,
    alternates: {
      canonical: seo.canonical,
      languages: {
        'fr': `${BASE_URL}/fr/`,
        'en': `${BASE_URL}/en/`,
        'fr-CA': `${BASE_URL}/fr/`,
        'fr-FR': `${BASE_URL}/fr/`,
        'fr-BE': `${BASE_URL}/fr/`,
        'fr-CH': `${BASE_URL}/fr/`,
        'en-CA': `${BASE_URL}/en/`,
        'en-US': `${BASE_URL}/en/`,
      }
    },
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_CA' : 'en_US',
      url: seo.canonical,
      title: seo.title,
      description: seo.description,
      siteName: 'Smart Hotline Agency',
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: lang === 'fr' ? 'Smart Hotline - Centre d\'appels pour PME' : 'Smart Hotline - Call Center for SMBs'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage]
    },
  verification: {
    // TODO: Replace with your actual Google Search Console verification code
    // Get it from: https://search.google.com/search-console
    // Steps: Add property → Enter URL → Verify via HTML tag
    // The verification code is the content attribute value from:
    // <meta name="google-site-verification" content="YOUR_CODE_HERE" />
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
    other: {
      'geo.region': 'CA-QC',
      'geo.placename': 'Montreal',
      'geo.position': '45.5017;-73.5673',
      'ICBM': '45.5017, -73.5673',
    }
  }
}

export const JSON_LD_FR = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  "name": "Smart Hotline Agency",
  "alternateName": "Smart Hotline",
  "description": SEO_FR.description,
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo-smart-hotline.svg`,
  "image": SEO_FR.ogImage,
  "telephone": "+1-514-819-0559",
  "email": "direction@smart-hotline.com",
  "foundingDate": "2018",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Montreal",
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5017,
    "longitude": -73.5673
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "currenciesAccepted": "CAD USD EUR CHF",
  "paymentAccepted": "Credit Card, Bank Transfer",
  "areaServed": [
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Belgium" },
    { "@type": "Country", "name": "Switzerland" },
    { "@type": "Country", "name": "United States" }
  ],
  "availableLanguage": ["French", "English"],
  "sameAs": [
    "https://www.linkedin.com/company/smart-hotline",
    "https://twitter.com/smarthotline"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Centre d'Appels",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réception d'Appels 24/7",
          "description": "Service de réception téléphonique professionnel 24h/24, 7j/7",
          "availableLanguage": ["French", "English"],
          "areaServed": [{ "@type": "Country", "name": "Canada" }]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Agents IA Vocaux",
          "description": "Assistante vocale IA Sophie - réponse en moins de 2 secondes",
          "availableLanguage": ["French", "English"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Appels Sortants",
          "description": "Prospection téléphonique et génération de leads qualifiés",
          "availableLanguage": ["French", "English"]
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
          "name": "CRM & Listes",
          "description": "SuiteCRM intégré et listes de prospection B2B/B2C"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Call Center",
    "Customer Service",
    "AI Voice Agents",
    "Phone Answering Service",
    "Lead Generation",
    "Customer Support",
    "CRM Integration"
  ],
  "slogan": "Le Centre d'Appels qui Fait Grandir votre PME"
}

export const JSON_LD_EN = {
  ...JSON_LD_FR,
  "description": SEO_EN.description,
  "slogan": "The Call Center That Grows Your SMB",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Call Center Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Call Reception",
          "description": "Professional phone reception service 24/7",
          "availableLanguage": ["French", "English"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Voice Agents",
          "description": "AI Assistant Sophie - answer in less than 2 seconds",
          "availableLanguage": ["French", "English"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outbound Calls",
          "description": "Phone prospecting and qualified lead generation",
          "availableLanguage": ["French", "English"]
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customer Support",
          "description": "Multi-channel support: phone, email, chat, WhatsApp"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM & Lists",
          "description": "SuiteCRM integration and B2B/B2C prospect lists"
        }
      }
    ]
  }
}
