import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const BASE_URL = 'https://www.smart-hotline.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const frToEnMap: Record<string, string> = {
    '': '',
    '/reception': '/inbound',
    '/emission': '/outbound',
    '/agents-ia': '/ai-agents',
    '/support': '/support',
    '/crm': '/crm',
    '/tarifs': '/pricing',
    '/contact': '/contact',
    '/a-propos': '/about',
    '/services': '/services',
    '/secteurs': '/sectors',
    '/blog': '/blog',
    '/mentions-legales': '/legal',
    '/confidentialite': '/privacy',
    '/cgv': '/terms',
  }

  const frPages = Object.keys(frToEnMap)
  const enPages = Object.values(frToEnMap)

  const frRoutes = frPages.map(frPage => ({
    url: `${BASE_URL}/fr${frPage}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: frPage === '' ? 1 : 0.8,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr${frPage}`,
        en: `${BASE_URL}/en${frToEnMap[frPage]}`,
      },
    },
  }))

  const enRoutes = enPages.map(enPage => {
    const frPage = Object.entries(frToEnMap).find(([_, en]) => en === enPage)?.[0] || ''
    return {
      url: `${BASE_URL}/en${enPage}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: enPage === '' ? 1 : 0.8,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr${frPage}`,
          en: `${BASE_URL}/en${enPage}`,
        },
      },
    }
  })

   return [
     {
       url: BASE_URL,
       lastModified,
       changeFrequency: 'weekly',
       priority: 1,
     },
     ...frRoutes,
     ...enRoutes,
     ...getAllPosts('fr').flatMap(post => ({
       url: `${BASE_URL}/fr/blog/${post.slug}`,
       lastModified: new Date(post.date),
       changeFrequency: 'weekly' as const,
       priority: 0.7,
       alternates: {
         languages: {
           fr: `${BASE_URL}/fr/blog/${post.slug}`,
           en: post.canonicalSlug ? `${BASE_URL}/en/blog/${post.canonicalSlug}` : undefined,
         },
       },
     })),
     ...getAllPosts('en').flatMap(post => ({
       url: `${BASE_URL}/en/blog/${post.slug}`,
       lastModified: new Date(post.date),
       changeFrequency: 'weekly' as const,
       priority: 0.7,
       alternates: {
         languages: {
           fr: post.canonicalSlug ? `${BASE_URL}/fr/blog/${post.canonicalSlug}` : undefined,
           en: `${BASE_URL}/en/blog/${post.slug}`,
         },
       },
     })),
   ]
}
