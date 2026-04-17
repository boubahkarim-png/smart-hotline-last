import Script from 'next/script'

interface AIAgentSchemaProps {
  name: string
  description: string
  capabilities: string[]
  responseTime: string
  availability: string
  languages: string[]
  pricingModel: string
  startingPrice?: {
    amount: string
    currency: string
    unit: string
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.smart-hotline.com'

/**
 * AIAgentSchema - Structured data for AI voice/chat agents
 * Optimized for AIO (AI Optimization) and GEO (Generative Engine Optimization)
 * 
 * Uses SoftwareApplication + Service schema combination for maximum AI visibility
 * Includes speakable content for voice search optimization
 */
export function AIAgentSchema({
  name,
  description,
  capabilities,
  responseTime,
  availability,
  languages,
  pricingModel,
  startingPrice
}: AIAgentSchemaProps) {
  // Primary schema: SoftwareApplication for AI agent
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": "BusinessApplication, CommunicationApplication",
    "operatingSystem": "Cloud-based, Phone System Integration",
    "offers": startingPrice ? {
      "@type": "Offer",
      "price": startingPrice.amount,
      "priceCurrency": startingPrice.currency,
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": startingPrice.amount,
        "priceCurrency": startingPrice.currency,
        "unitText": startingPrice.unit
      }
    } : undefined,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "featureList": capabilities.join(', '),
    "availableLanguage": languages,
    "softwareVersion": "2026.1",
    "releaseNotes": "Native French (Quebec, France, Belgium, Switzerland) and English voice AI"
  }

  // Secondary schema: Service for call center context
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Voice Agent Service",
    "name": `${name} - AI Phone Answering Service`,
    "description": `${description} Response time: ${responseTime}. Available: ${availability}.`,
    "provider": {
      "@type": "Organization",
      "name": "Smart Hotline Agency",
      "url": BASE_URL,
      "logo": `${BASE_URL}/logo-smart-hotline.svg`,
      "foundingDate": "2018",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "France" },
        { "@type": "Country", "name": "Belgium" },
        { "@type": "Country", "name": "Switzerland" },
        { "@type": "Country", "name": "United States" }
      ],
      "knowsAbout": [
        "AI Voice Agents",
        "Call Center Services",
        "Phone Answering Service",
        "Virtual Receptionist",
        "Customer Support Automation",
        "French Language AI",
        "Appointment Scheduling AI",
        "24/7 Phone Support"
      ]
    },
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "Belgium" },
      { "@type": "Country", "name": "Switzerland" }
    ],
    "availableLanguage": languages,
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": startingPrice ? {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": startingPrice.amount,
        "priceCurrency": startingPrice.currency,
        "description": `${pricingModel}. Starting from ${startingPrice.amount} ${startingPrice.currency} ${startingPrice.unit}.`
      }
    } : undefined
  }

  // Speakable schema for voice search (Google Assistant, Alexa, Siri)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": [".ai-agent-description", ".ai-agent-features"],
    "xpath": [
      "/html/body/section[@class='hero']/div/h1",
      "/html/body/section[@class='features']/div/p"
    ]
  }

  // FAQ schema specifically about AI agents (for AI citation)
  const aiFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI voice agent for phone calls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `An AI voice agent like ${name} is an artificial intelligence system that answers phone calls automatically. ${name} responds in under ${responseTime}, handles FAQs, schedules appointments, takes messages, and transfers complex calls to human agents. It operates ${availability} at 70% lower cost than human agents.`
        }
      },
      {
        "@type": "Question",
        "name": `How fast does ${name} answer calls?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${name} answers phone calls in under ${responseTime}, eliminating hold times and music. This instant response improves customer satisfaction and reduces hang-ups by up to 80%.`
        }
      },
      {
        "@type": "Question",
        "name": "Does the AI voice agent speak French?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, ${name} speaks native French with regional accents from Quebec, France, Belgium, and Switzerland. It also speaks North American English. This bilingual capability serves businesses across Canada, France, Belgium, and Switzerland.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does ${name} cost?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${name} uses ${pricingModel}. Starting from ${startingPrice?.amount || '0.08'} ${startingPrice?.currency || 'CAD'} per ${startingPrice?.unit || 'minute'}. This represents 30% below market rates and 70% savings compared to hiring human staff.`
        }
      },
      {
        "@type": "Question",
        "name": `What can ${name} do for my business?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${name} can: ${capabilities.slice(0, 5).join(', ')}. It integrates with Google Calendar and Calendly for appointment scheduling, handles FAQs about hours/pricing/location, takes detailed messages, and intelligently transfers complex situations to human agents.`
        }
      }
    ]
  }

  return (
    <>
      <Script
        id={`ai-agent-software-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id={`ai-agent-service-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`ai-agent-speakable-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <Script
        id={`ai-agent-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFAQSchema) }}
      />
    </>
  )
}
