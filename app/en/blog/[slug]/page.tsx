import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPostingSchema } from '@/components/BlogPostingSchema'
import type { Metadata } from 'next'
import basePath from '@/lib/basePath'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const locale: 'en' = 'en' // Hardcoded for English route

interface PageProps {
  params: Promise<{ slug: string }>
}

function getPostBySlug(slug: string) {
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
      author: data.author || 'Smart Hotline Team',
      excerpt: data.excerpt,
      image: data.image,
      tags: data.tags || [],
      canonicalSlug: data.canonicalSlug,
    },
    content,
  }
}

export async function generateStaticParams() {
  const dir = path.join(postsDirectory, locale)
  const posts = []

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    for (const filename of files) {
      const { data } = matter(fs.readFileSync(path.join(dir, filename), 'utf8'))
      posts.push({ slug: data.slug })
    }
  }

  return posts
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: 'Article not found | Smart Hotline' }
  }

  const baseUrl = 'https://www.smart-hotline.com'
  const url = `/en/blog/${slug}`

  return {
    title: `${post.meta.title} | Smart Hotline Blog`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `${baseUrl}${url}`,
      siteName: 'Smart Hotline',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
      images: [
        {
          url: post.meta.image.startsWith('http') ? post.meta.image : `${baseUrl}${basePath}${post.meta.image}`,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}${url}`,
      languages: {
        fr: post.meta.canonicalSlug ? `${baseUrl}/fr/blog/${post.meta.canonicalSlug}` : undefined,
        en: `${baseUrl}/en/blog/${slug}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [post.meta.image.startsWith('http') ? post.meta.image : `${baseUrl}${basePath}${post.meta.image}`],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark().use(html, { sanitize: false }).process(post.content)
  const contentHtml = processedContent.toString()

  const dir = path.join(postsDirectory, locale)
  const allPosts = fs.readdirSync(dir)
    .map(filename => {
      const { data } = matter(fs.readFileSync(path.join(dir, filename), 'utf8'))
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        image: data.image,
      }
    })
    .filter(p => p.slug !== slug)
    .slice(0, 3)

  const baseUrl = 'https://www.smart-hotline.com'
  const postUrl = `${baseUrl}/en/blog/${slug}`

  return (
    <>
      <BlogPostingSchema post={post.meta} url={postUrl} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link 
              href="/en/blog" 
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium mb-6 transition-colors"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full">
                {post.meta.category}
              </span>
              <span className="text-slate-500 text-sm">
                {new Date(post.meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900">
              {post.meta.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {post.meta.excerpt}
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold">
                  {post.meta.author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-900">{post.meta.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {post.meta.image && (
        <div className="w-full h-[400px] md:h-[500px] relative">
          <img 
            src={post.meta.image.startsWith('http') ? post.meta.image : `${basePath}${post.meta.image}`}
            alt={post.meta.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-h2:text-3xl prose-h2:lg:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-p:leading-relaxed prose-a:text-sky-600 prose-a:font-semibold hover:prose-a:text-sky-700 prose-strong:text-slate-900 prose-strong:font-bold prose-ul:my-6 prose-ol:my-6 prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

           {/* TAGS */}
           {post.meta.tags && post.meta.tags.length > 0 && (
             <div className="mt-12 pt-8 border-t border-slate-200">
               <div className="flex flex-wrap gap-2">
                 {post.meta.tags.map((tag: string) => (
                   <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                     #{tag}
                   </span>
                 ))}
               </div>
             </div>
           )}

          {/* TRANSLATION LINK */}
          {post.meta.canonicalSlug && (
            <div className="mt-12 p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <p className="text-slate-700">
                This article is also available in French.{' '}
                <Link 
                  href={`/fr/blog/${post.meta.canonicalSlug}`} 
                  className="text-sky-600 font-bold hover:underline"
                >
                  Lire en français →
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RELATED POSTS */}
      {allPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="modern-box bg-white p-6 border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    href={`/en/blog/${relatedPost.slug}`}
                    className="text-sky-600 font-semibold text-sm hover:underline"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 py-20 lg:py-28 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-sky-200 text-lg mb-12 max-w-2xl mx-auto">
            Discover how our solutions can improve your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link 
              href="/en/contact"
              className="flex-1 bg-white text-sky-900 font-bold px-8 py-4 rounded-2xl hover:bg-sky-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="/en/services"
              className="flex-1 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
            >
              See Our Services
            </Link>
          </div>
          <div className="mt-8">
            <Link 
              href="/en/pricing"
              className="text-sky-300 hover:text-white transition-colors underline"
            >
              View Pricing
            </Link>
            <span className="mx-3 text-sky-400">·</span>
            <Link 
              href="/en/contact"
              className="text-sky-300 hover:text-white transition-colors underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
