import type { Metadata } from 'next'
import type { Lang } from './i18n'

const BASE_URL = 'https://www.smart-hotline.com'

export const SEO_FR = {
  title: 'Smart Hotline Agency | Centre d\'Appels & IA pour PME',
  description: 'Externalisez votre relation client avec des conseillers professionnels et agents IA vocaux 24/7. Réception appels, prospection, support client. Essai gratuit 2 semaines.',
  keywords: 'centre d\'appels PME, externalisation relation client, réception téléphonique, agents IA vocaux, support client 24/7, Sophie IA, call center Québec, télésecrétariat, prospection téléphonique, téléréceptionniste, centre d\'appels quebec',
  ogImage: '/smart-hotline-late2/images/main-hero.jpg',
  twitterCard: 'summary_large_image',
  author: 'Smart Hotline Agency',
  robots: 'index, follow',
  canonical: `${BASE_URL}/fr/`
}

export const SEO_EN = {
  title: 'Smart Hotline Agency | Call Center & AI for SMBs',
  description: 'Outsource your customer relations with professional agents and AI voice assistants 24/7. Call reception, prospecting, customer support. Free 2-week trial.',
  keywords: 'call center SMB, customer service outsourcing, phone reception, AI voice agents, 24/7 support, Sophie AI, call center Quebec, telemarketing, inbound calls, virtual receptionist, answering service',
  ogImage: '/smart-hotline-late2/images/main-hero.jpg',
  twitterCard: 'summary_large_image',
  author: 'Smart Hotline Agency',
  robots: 'index, follow',
  canonical: `${BASE_URL}/en/`
}

// Unique per-page SEO metadata
export const PAGE_SEO: Record<string, { fr: string; en: string; frDesc: string; enDesc: string }> = {
  'inbound': {
    fr: 'Réception d\'Appels 24/7 | Zéro Appel Manqué | Smart Hotline',
    en: 'Inbound Call Center 24/7 | Zero Missed Calls | Smart Hotline Quebec',
    frDesc: 'Service de réception d\'appels 24/7 pour PME québécoises et françaises. Réponse en moins de 3 sonneries. Conseillers bilingues. Essai gratuit 2 semaines.',
    enDesc: '24/7 inbound call center for SMBs in Quebec and Canada. Answer in under 3 rings. Bilingual FR/EN agents. From $11/hr. Free 2-week trial.',
  },
  'outbound': {
    fr: 'Appels Sortants & Prospection | Génération de Leads | Smart Hotline',
    en: 'Outbound Call Center | Lead Generation | Smart Hotline Quebec',
    frDesc: 'Service d\'appels sortants pour PME. Prospection téléphonique, prise de rendez-vous, qualification de leads. Scripts optimisés. À partir de 15$/h.',
    enDesc: 'Outbound call center for SMBs. Phone prospecting, appointment setting, lead qualification. Optimized scripts. From $11/hr. Free trial.',
  },
  'ai_agents': {
    fr: 'Agents IA Vocaux | Sophie répond en 2 sec | Smart Hotline Quebec',
    en: 'AI Voice Agents | Sophie answers in 2 sec | Smart Hotline Quebec',
    frDesc: 'Sophie, votre agente IA vocale 24/7. Répond en français natif (Québec, France, Belgique, Suisse). Jusqu\'à 70% moins cher qu\'un conseiller. Essai gratuit.',
    enDesc: 'AI voice agents 24/7. Sophie answers in under 2 seconds. Native French Quebec, France. Up to 70% cheaper than traditional agents. Free trial.',
  },
  'support': {
    fr: 'Support Client Multicanal | Téléphone, Email, Chat, WhatsApp | Smart Hotline',
    en: 'Multichannel Customer Support | Quebec Call Center | Smart Hotline',
    frDesc: 'Support client multicanal: téléphone, email, chat, WhatsApp. Réponse sous 2h. 98% de satisfaction. Externalisez votre support client dès maintenant.',
    enDesc: 'Multichannel customer support: phone, email, chat, WhatsApp. Responses within 2h. 98% CSAT. Outsource your customer support. From $11/hr.',
  },
  'crm': {
    fr: 'CRM & Listes B2B/B2C | SuiteCRM Intégré | Smart Hotline Quebec',
    en: 'CRM & B2B/B2C Lists | SuiteCRM | Smart Hotline Quebec',
    frDesc: 'SuiteCRM intégré, listes de prospection B2B/B2C qualifiées, email marketing Mautic. Gérez votre pipeline de A à Z. Installation incluse.',
    enDesc: 'SuiteCRM integration, qualified B2B/B2C lists, Mautic email marketing. Complete lead and pipeline management. Setup included.',
  },
  'pricing': {
    fr: 'Tarifs Centre d\'Appels pour PME | À partir de 15$/h | Smart Hotline',
    en: 'Call Center Pricing for SMBs | From $11/hr | Smart Hotline Quebec',
    frDesc: 'Tarifs transparents pour centre d\'appels PME. À partir de 15$/h. Forfaits flexibles 20h à 120h/semaine. Essai gratuit 2 semaines. CAD, EUR, USD, CHF acceptés.',
    enDesc: 'Transparent call center pricing for SMBs. From $11/hr. Flexible plans 20h to 120h/week. Free 2-week trial. CAD, EUR, USD, CHF accepted.',
  },
  'about': {
    fr: 'À Propos | Smart Hotline Agency | Centre d\'Appels Montréal',
    en: 'About Us | Smart Hotline Agency | Call Center Montreal',
    frDesc: 'Découvrez Smart Hotline, votre partenaire téléphonique 24/7 basé à Montréal. Fondée en 2018. Plus de 500 PME servies au Québec et en France.',
    enDesc: 'Meet Smart Hotline, your 24/7 phone partner based in Montreal. Founded 2018. 500+ SMBs served across Quebec, Canada and France.',
  },
  'contact': {
    fr: 'Contactez Smart Hotline | Démo Gratuite | Réponse sous 2h',
    en: 'Contact Smart Hotline | Free Demo | Response within 2h',
    frDesc: 'Contactez Smart Hotline. Consultation gratuite sans engagement. Réponse sous 2h. Démarrez votre essai gratuit de 2 semaines dès aujourd\'hui.',
    enDesc: 'Contact Smart Hotline. Free consultation, no commitment. Response within 2h. Start your 2-week free trial today.',
  },
  'blog': {
    fr: 'Blog | Centre d\'Appels & IA pour PME | Smart Hotline',
    en: 'Blog | Call Center & AI for SMBs | Smart Hotline',
    frDesc: 'Conseils, stratégies et analyses pour optimiser votre relation client. Centre d\'appels, agents IA vocaux, prospection et support client pour PME.',
    enDesc: 'Tips, strategies and insights to optimize your customer relationships. Call centers, AI voice agents, prospecting and customer support for SMBs.',
  },
  'services': {
    fr: 'Nos Solutions | Centre d\'Appels & IA Vocale | Smart Hotline',
    en: 'Our Services | Call Center & AI Voice Solutions | Smart Hotline',
    frDesc: 'Découvrez toutes nos solutions de relation client pour PME: réception d\'appels 24/7, appels sortants, agents IA vocaux, support client et CRM.',
    enDesc: 'Discover all our customer relation solutions for SMBs: 24/7 call reception, outbound calls, AI voice agents, customer support and CRM.',
  },
  'sectors': {
    fr: 'Secteurs d\'Activité | Solutions par Industrie | Smart Hotline',
    en: 'Industries We Serve | Call Center for Your Sector | Smart Hotline',
    frDesc: 'Solutions de centre d\'appels adaptées à votre secteur: restauration, santé, finance, immobilier, services juridiques, e-commerce et plus.',
    enDesc: 'Call center solutions tailored to your industry: restaurant, healthcare, finance, real estate, legal services, e-commerce and more.',
  },
  'privacy': {
    fr: 'Politique de Confidentialité | Smart Hotline Agency',
    en: 'Privacy Policy | Smart Hotline Agency',
    frDesc: 'Politique de confidentialité de Smart Hotline. Conforme à la Loi 25 (Québec) et au RGPD (Europe). Découvrez comment nous protégeons vos données.',
    enDesc: 'Smart Hotline privacy policy. GDPR and Quebec Law 25 compliant. Learn how we protect your data.',
  },
  'terms': {
    fr: 'Conditions Générales de Vente | Smart Hotline',
    en: 'Terms & Conditions | Smart Hotline',
    frDesc: 'Conditions générales de vente et d\'utilisation des services Smart Hotline. Centre d\'appels externalisé pour PME.',
    enDesc: 'Terms and conditions for Smart Hotline services. Call center outsourcing for SMBs.',
  },
  'legal': {
    fr: 'Mentions Légales | Smart Hotline Agency',
    en: 'Legal Notice | Smart Hotline Agency',
    frDesc: 'Mentions légales de Smart Hotline. Informations sur l\'éditeur du site, hébergement et propriété intellectuelle.',
    enDesc: 'Smart Hotline legal notice. Publisher information, hosting and intellectual property.',
  },
}

export function generateMetadata(lang: Lang): Metadata {
  const seo = lang === 'fr' ? SEO_FR : SEO_EN

  return {
    title: {
      default: seo.title,
      template: `%s | Smart Hotline`
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
        'fr-CA': `${BASE_URL}/fr/`,
        'fr-FR': `${BASE_URL}/fr/`,
        'fr-BE': `${BASE_URL}/fr/`,
        'fr-CH': `${BASE_URL}/fr/`,
        'en': `${BASE_URL}/en/`,
        'en-CA': `${BASE_URL}/en/`,
        'en-US': `${BASE_URL}/en/`,
        'x-default': `${BASE_URL}/fr/`,
      }
    },
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_CA' : 'en_US',
      url: seo.canonical,
      title: seo.title,
      description: seo.description,
      siteName: 'Smart Hotline',
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

export function getPageMetadata(page: string, lang: Lang): { title: string; description: string } | null {
  const meta = PAGE_SEO[page]
  if (!meta) return null
  return {
    title: lang === 'fr' ? meta.fr : meta.en,
    description: lang === 'fr' ? meta.frDesc : meta.enDesc,
  }
}

export const JSON_LD_FR = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  "name": "Smart Hotline",
  "alternateName": "Smart Hotline",
  "description": SEO_FR.description,
  "url": `${BASE_URL}`,
  "logo": `${BASE_URL}/smart-hotline-late2/favicon.ico`,
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
    "https://x.com/smarthotline"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Centre d'Appels",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Réception d'Appels 24/7", "description": "Service de réception téléphonique professionnel 24h/24, 7j/7", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agents IA Vocaux", "description": "Assistante vocale IA Sophie - réponse en moins de 2 secondes", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Appels Sortants", "description": "Prospection téléphonique et génération de leads qualifiés", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Support Client", "description": "Support multicanal: téléphone, email, chat, WhatsApp" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Listes", "description": "SuiteCRM intégré et listes de prospection B2B/B2C" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": ["Call Center", "Customer Service", "AI Voice Agents", "Phone Answering Service", "Lead Generation", "Customer Support", "CRM Integration"],
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Call Reception", "description": "Professional phone reception service 24/7", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Voice Agents", "description": "AI Assistant Sophie - answer in less than 2 seconds", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outbound Calls", "description": "Phone prospecting and qualified lead generation", "availableLanguage": ["French", "English"] } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Support", "description": "Multi-channel support: phone, email, chat, WhatsApp" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM & Lists", "description": "SuiteCRM integration and B2B/B2C prospect lists" } }
    ]
  }
}