import Script from 'next/script'

interface ServiceSchemaProps {
  name: string
  description: string
  slug: string
  provider?: {
    name: string
    url: string
  }
  areaServed?: string[]
  offers?: {
    priceFrom: string
    priceCurrency: string
  }
  availableLanguage?: string[]
}

const BASE_URL = 'https://www.smart-hotline.com'

export function ServiceSchema({
  name,
  description,
  slug,
  provider = {
    name: 'Smart Hotline Agency',
    url: BASE_URL
  },
  areaServed = ['Canada', 'France', 'Belgium', 'Switzerland', 'United States'],
  offers,
  availableLanguage = ['French', 'English']
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": `${BASE_URL}/fr/${slug}`,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Country",
      "name": area
    })),
    "availableLanguage": availableLanguage,
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": offers.priceFrom,
          "priceCurrency": offers.priceCurrency,
          "description": `Starting from ${offers.priceFrom} ${offers.priceCurrency}`
        }
      }
    })
  }

  return (
    <Script
      id={`service-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
