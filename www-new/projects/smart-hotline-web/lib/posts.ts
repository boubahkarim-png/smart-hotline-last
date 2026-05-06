import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  author: string
  excerpt: string
  image: string
  locale: 'fr' | 'en'
  canonicalSlug?: string
  tags: string[]
  published: boolean
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(locale: 'fr' | 'en'): PostMeta[] {
  const dir = path.join(postsDirectory, locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts: PostMeta[] = []

  for (const filename of files) {
    const fullPath = path.join(dir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    if (data.published !== false) {
      posts.push({
        slug: data.slug,
        title: data.title,
        date: data.date,
        category: data.category,
        author: data.author || 'Équipe Smart Hotline',
        excerpt: data.excerpt,
        image: data.image,
        locale: data.locale,
        canonicalSlug: data.canonicalSlug,
        tags: data.tags || [],
        published: data.published ?? true,
      })
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string, locale: 'fr' | 'en'): { meta: PostMeta; content: string } | null {
  const dir = path.join(postsDirectory, locale)
  if (!fs.existsSync(dir)) return null

  const files = fs.readdirSync(dir)
  const match = files.find(f => {
    const filePath = path.join(dir, f)
    const { data } = matter(fs.readFileSync(filePath, 'utf8'))
    return data.slug === slug
  })

  if (!match) return null

  const fullPath = path.join(dir, match)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: {
      slug: data.slug,
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author || (locale === 'fr' ? 'Équipe Smart Hotline' : 'Smart Hotline Team'),
      excerpt: data.excerpt,
      image: data.image,
      locale: data.locale,
      canonicalSlug: data.canonicalSlug,
      tags: data.tags || [],
      published: data.published ?? true,
    },
    content,
  }
}

export function getAllPostSlugs(locale: 'fr' | 'en'): string[] {
  const posts = getAllPosts(locale)
  return posts.map(p => p.slug)
}

export function getTranslatedPost(slug: string, locale: 'fr' | 'en'): { meta: PostMeta; content: string } | null {
  const post = getPostBySlug(slug, locale)
  if (!post) return null

  // If we have a canonicalSlug, try to find the translation
  if (post.meta.canonicalSlug) {
    const otherLocale = locale === 'fr' ? 'en' : 'fr'
    const translated = getPostBySlug(post.meta.canonicalSlug, otherLocale)
    return translated
  }

  return null
}
