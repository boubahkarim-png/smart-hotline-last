import Script from 'next/script'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  address: {
    street: string
    city: string
    region: string
    postalCode: string
    country: string
  }
  phone: string
  geo?: { lat: number; lng: number }
  areaServed?: string[]
  openingHours?: string
}

export function LocalBusinessSchema({
  name,
  description,
  address,
  phone,
  geo,
  areaServed = ['Montréal', 'Laval', 'Longueuil', 'Québec'],
  openingHours = 'Mo-Su 00:00-23:59'
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.smart-hotline.com/#local-business-montreal`,
    "name": name,
    "description": description,
    "url": "https://www.smart-hotline.com",
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.region,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.lat,
        "longitude": geo.lng
      }
    }),
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "currenciesAccepted": "CAD, USD",
    "paymentAccepted": "Credit Card, Invoice",
    "availableLanguage": ["French", "English"]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
