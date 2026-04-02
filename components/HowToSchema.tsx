import Script from 'next/script'

interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: {
    currency: string
    value: string
  }
}

const BASE_URL = 'https://www.smart-hotline.com'

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost
}: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": `${BASE_URL}${step.image}` })
    })),
    "supply": {
      "@type": "HowToSupply",
      "name": "Phone line or existing business number"
    },
    "tool": {
      "@type": "HowToTool",
      "name": "Smart Hotline Platform"
    }
  }

  return (
    <Script
      id={`howto-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
