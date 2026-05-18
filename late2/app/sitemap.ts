import { MetadataRoute } from 'next'

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
  ]
}
