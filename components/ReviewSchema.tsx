import Script from 'next/script'

interface ReviewItem {
  author: string
  role: string
  text: string
  rating: number
  date?: string
}

interface ReviewSchemaProps {
  reviews: ReviewItem[]
  itemName: string
  itemDescription?: string
}

const BASE_URL = 'https://www.smart-hotline.com'

export function ReviewSchema({
  reviews,
  itemName,
  itemDescription
}: ReviewSchemaProps) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0)
  const avgRating = (totalRating / reviews.length).toFixed(1)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "description": itemDescription || `Smart Hotline ${itemName} service`,
    "url": BASE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author,
        "jobTitle": review.role
      },
      "datePublished": review.date || new Date().toISOString().split('T')[0],
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  }

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
