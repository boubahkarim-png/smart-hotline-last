import Script from 'next/script'

interface PostMetaData {
  slug: string
  title: string
  date: string
  category: string
  author: string
  excerpt: string
  image: string
  tags: string[]
  canonicalSlug?: string
}

interface BlogPostingSchemaProps {
  post: PostMetaData
  url: string
}

export function BlogPostingSchema({ post, url }: BlogPostingSchemaProps) {
  const baseUrl = 'https://www.smart-hotline.com'
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smart Hotline",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smart-hotline.com/logo-smart-hotline.svg"
      }
    },
    "image": post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    keywords: post.tags.join(', '),
  }

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
