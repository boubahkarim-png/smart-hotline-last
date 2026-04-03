# Blog Migration Plan — Hardcoded → Dynamic Routes

> **Project**: Smart Hotline (Next.js 14.2, static export, GitHub Pages)
> **Date**: 2026-04-03
> **Status**: Planning

---

## 1. Current Blog Structure

### File locations
| File | Language | Size | Key Issue |
|------|----------|------|-----------|
| `app/fr/blog/page.tsx` | FR | 284 lines | 'use client', inline POSTS array, `'Lire la suite'` uses `alert()` |
| `app/en/blog/page.tsx` | EN | 163 lines | Inline POSTS array, no individual post links (text says "Read more") |
| `app/fr/blog/page.tsx.backup` | FR | — | Backup copy |

### Routing — current (static list only)
```
/fr/blog   → blog index (FR)
/en/blog   → blog index (EN)
```
**No individual post pages exist.** Clicking "Read more" triggers a JavaScript `alert()`.

### Current data model (hardcoded in each page.tsx)
| Field | FR | EN |
|-------|----|----|
| `title` | French | English |
| `date` | French format (`15 mars 2026`) | English format (`March 15, 2026`) |
| `cat` | FR category (Strategie, IA, Prospection…) | EN category (Strategy, AI, Prospecting…) |
| `img` | Unsplash URL | Unsplash URL (same) |
| `excerpt` | Short French paragraph | Short English paragraph |
| `content` | Long French paragraph | ❌ **Missing entirely** |

There are **6 posts** shared across both languages, each with only an excerpt-level "content" field (no full article body).

---

## 2. Target Route Structure

```
/fr/blog                           → blog index
/fr/blog/[slug]                    → individual post (FR)
/en/blog                           → blog index
/en/blog/[slug]                    → individual post (EN)
```

### Example URLs
```
/fr/blog/5-raisons-externaliser-service-client-2025
/en/blog/5-reasons-outsource-customer-service-2025
```

---

## 3. Recommended Decisions

### 3.1 Content Format → **MDX files**

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| JSON files | Simple parsing, no extra deps | No rich text, no code highlighting, content editors can't write in it | ❌ |
| Pure Markdown (.md) | Simple, version-controllable, human-readable | No interactive components in articles | ⚠️ Good for now |
| **MDX** (recommended) | Rich text + React components, future-proof, great developer experience | Requires `@mdx-js/loader` + `@next/mdx` | ✅ Best choice |

**Why MDX:** We're already React-based. Markdown gives us simple content writing; MDX gives us the ability to embed interactive components (CTAs, pricing cards, testimonials) inside articles later without re-migrating.

**Fallback:** If MDX setup is too heavy for static export, `.md` with `gray-matter` for frontmatter is equally viable for Phase 1.

### 3.2 Static Generation with `generateStaticParams`

| Consideration | Decision |
|---------------|----------|
| Use `generateStaticParams`? | **YES** — required for `output: 'export'` (static export) |
| ISR / on-demand revalidation? | ❌ Not compatible with static export. Full rebuild on content change. |

**Why:** This project uses Next.js `output: 'export'` (deployed to GitHub Pages). Dynamic routes MUST have `generateStaticParams` to pre-render at build time.

### 3.3 Bilingual Routing

| Approach | How it works | Verdict |
|----------|-------------|---------|
| Separate MDX files per language | `content/en/posts/my-post.md` + `content/fr/posts/mon-poste.md` | ✅ Recommended |
| Single file with locale fields | One `.mdx` with `title_en:`, `title_fr:`, `content_en:`, `content_fr:` | ❌ Content editing friction |
| CMS with locale support | Future upgrade (Sanity, Contentful) | ⬜ Phase 3 |

**Recommended:** Separate files in `content/{locale}/posts/` directories. Each file has its own slug, content, and frontmatter. A `postMap` in the MDX frontmatter links translations together for `hreflang`.

---

## 4. File Structure to Create

```
content/
├── README.md                          # Documentation for content authors
├── posts/
│   ├── fr/                            # French blog posts
│   │   ├── 5-raisons-externaliser-service-client-2025.mdx
│   │   ├── agent-ia-vs-agent-humain.mdx
│   │   ├── qualifier-leads-guide-complet.mdx
│   │   ├── kpis-satisfaction-client.mdx
│   │   ├── restauration-centre-appels.mdx
│   │   └── rgpd-centre-appels.mdx
│   └── en/                            # English blog posts
│       ├── 5-reasons-outsource-customer-service-2025.mdx
│       ├── ai-agent-vs-human-agent.mdx
│       ├── qualify-leads-phone-guide.mdx
│       ├── customer-satisfaction-kpis.mdx
│       ├── restaurant-call-center.mdx
│       └── gdpr-call-centers.mdx
└── shared/
    └── blog-images/                   # Local images (optional, replace Unsplash URLs)
```

### MDX File Template
```mdx
---
title: "5 raisons d'externaliser votre service client en 2025"
slug: "5-raisons-externaliser-service-client-2025"
date: "2026-03-15"
category: "Stratégie"
author: "Équipe Smart Hotline"
excerpt: "Découvrez pourquoi de plus en plus de PME font le choix de l'externalisation."
image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
locale: "fr"
canonicalSlug: "5-reasons-outsource-customer-service-2025"  # links to EN version
tags: ["externalisation", "PME", "service client"]
published: true
---

Content goes here with **Markdown formatting** and <InteractiveCTA /> components.
```

---

## 5. Dynamic Route Implementation Steps

### Step 1: Install MDX dependencies
```bash
npm install @next/mdx @mdx-js/loader gray-matter remark remark-html
npm install -D @types/mdx
```

### Step 2: MDX configuration (`next.config.js`)
```js
const createMDX = require('@next/mdx')

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_BASEPATH || '',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = withMDX(nextConfig)
```

### Step 3: Content loading utility
```typescript
// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  author: string
  excerpt: string
  image: string
  locale: 'fr' | 'en'
  canonicalSlug: string
  tags: string[]
  published: boolean
}

export function getAllPosts(locale: 'fr' | 'en'): PostMeta[] {
  const dir = path.join(postsDirectory, locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))

  return files.map(filename => {
    const fullPath = path.join(dir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author,
      excerpt: data.excerpt,
      image: data.image,
      locale: data.locale,
      canonicalSlug: data.canonicalSlug,
      tags: data.tags || [],
      published: data.published ?? true,
    } as PostMeta
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string, locale: 'fr' | 'en') {
  const dir = path.join(postsDirectory, locale)
  const files = fs.readdirSync(dir)
  const match = files.find(f => f.startsWith(slug))

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
      author: data.author,
      excerpt: data.excerpt,
      image: data.image,
      locale: data.locale,
      canonicalSlug: data.canonicalSlug,
      tags: data.tags || [],
    } as PostMeta,
    content,
  }
}

export function getAllPostSlugs(locale: 'fr' | 'en'): string[] {
  const posts = getAllPosts(locale)
  return posts.map(p => p.slug)
}
```

### Step 4: Blog index page — refactor
```typescript
// app/fr/blog/page.tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Conseils et Stratégies | Smart Hotline',
  description: 'Articles d\'experts sur l\'externalisation, l\'IA vocale et la relation client.',
}

export default function BlogIndex() {
  const posts = getAllPosts('fr')

  return (
    <>
      {/* Hero, featured posts, newsletter, FAQ, testimonials, stats preserved */}
      {/* "All Posts" section now maps to real links: */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 ...">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/fr/blog/${post.slug}`}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"/>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-blue-200 text-xs">{formatDate(post.date)}</span>
                </div>
                <h2 className="font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{post.title}</h2>
                <p className="text-blue-200 text-sm mb-4">{post.excerpt}</p>
                <span className="text-blue-200 text-sm font-semibold group-hover:underline block w-fit">
                  Lire la suite →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
```

### Step 5: Individual post page — dynamic route
```typescript
// app/fr/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

// Generate static params for all posts at build time
export function generateStaticParams(): Props['params'][] {
  const slugs = getAllPostSlugs('fr')
  return slugs.map(slug => ({ slug }))
}

// Generate metadata per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, 'fr')
  if (!post) return { title: 'Article non trouvé | Smart Hotline' }
  return {
    title: `${post.meta.title} | Blog Smart Hotline`,
    description: post.meta.excerpt,
  }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug, 'fr')
  if (!post) notFound()

  // Find translated version
  const enSlug = post.meta.canonicalSlug
  const enPost = getPostBySlug(enSlug, 'en')

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg">
      {/* Breadcrumb */}
      {/* Post image */}
      {/* Category + Date header */}
      {/* Title */}
      {/* Rendered MDX content */}
      {/* Language switcher (link to EN version) */}
      {/* Related posts */}
    </article>
  )
}
```

### Step 6: Repeat for English
Create the same structure at `app/en/blog/[slug]/page.tsx` with `locale: 'en'`.

---

## 6. Linking from Old Blog to New Individual Posts

### Migration strategy
| Old behavior | New behavior |
|--------------|-------------|
| "Lire la suite" → `alert()` | `<Link href="/fr/blog/{slug}">` → real post page |
| Same 6 posts in both locales | Full FR + EN content in separate MDX files |
| No post detail pages | Dedicated page per post with full article body |

### Backward compatibility
Since posts are rendered from MDX content at build time, there are no old URLs to redirect — the "Lire la suite" button never pointed to a valid URL. This is a **net-new** feature, not a migration with redirects.

---

## 7. SEO Considerations

### 7.1 Canonical URLs
Each post gets a `<link rel="canonical">` pointing to its own URL. Since FR and EN are separate pages with different content, they are **not** duplicate content — both are canonical:
```html
<!-- FR post -->
<link rel="canonical" href="https://smart-hotline.com/fr/blog/5-raisons-externaliser-service-client-2025" />
<!-- EN post -->
<link rel="canonical" href="https://smart-hotline.com/en/blog/5-reasons-outsource-customer-service-2025" />
```

### 7.2 hreflang Tags
Each article page links to its translation:
```html
<!-- In FR post <head> -->
<link rel="alternate" hreflang="en" href="https://smart-hotline.com/en/blog/5-reasons-outsource-customer-service-2025" />
<link rel="alternate" hreflang="fr" href="https://smart-hotline.com/fr/blog/5-raisons-externaliser-service-client-2025" />

<!-- In EN post <head> -->
<link rel="alternate" hreflang="fr" href="https://smart-hotline.com/fr/blog/5-raisons-externaliser-service-client-2025" />
<link rel="alternate" hreflang="en" href="https://smart-hotline.com/en/blog/5-reasons-outsource-customer-service-2025" />
```

### 7.3 JSON-LD Schema (BlogPosting)
Each individual post page gets structured data:
```typescript
const blogPostSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": { "@type": "Organization", "name": post.author },
  "publisher": {
    "@type": "Organization",
    "name": "Smart Hotline",
    "logo": { "@type": "ImageObject", "url": "https://smart-hotline.com/logo.png" }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.canonicalUrl
  }
})
```

### 7.4 Sitemap
The existing `app/sitemap.ts` must be updated to include dynamic blog post URLs:
```typescript
// Add to sitemap
const frPosts = getAllPosts('fr').map(post => ({
  url: `${baseUrl}/fr/blog/${post.slug}`,
  lastModified: post.date,
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))

const enPosts = getAllPosts('en').map(post => ({
  url: `${baseUrl}/en/blog/${post.slug}`,
  lastModified: post.date,
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}))
```

### 7.5 robots.txt
No changes needed — dynamic routes under `/blog/` are already crawlable. Ensure no `Disallow` rules block `/blog/`.

### 7.6 Blog Index Schema
The index page should include an `ItemList` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://smart-hotline.com/fr/blog/5-raisons-externaliser-service-client-2025",
      "name": "5 raisons d'externaliser votre service client en 2025"
    }
  ]
}
```

---

## 8. Implementation Phases

### Phase 1: Foundation (Day 1-2)
- [ ] Install `@next/mdx`, `gray-matter`, `remark`, `remark-html`
- [ ] Update `next.config.js` with MDX support
- [ ] Create `content/posts/fr/` and `content/posts/en/` directories
- [ ] Create `lib/posts.ts` content loading utility
- [ ] Write `content/README.md` for content author guidelines

### Phase 2: Content Migration (Day 2-3)
- [ ] Convert 6 existing blog posts → MDX files (FR)
- [ ] Create English counterparts (6 posts)
- [ ] Add full article bodies (current pages only have excerpts)
- [ ] Validate frontmatter metadata for all 12 files

### Phase 3: Route Implementation (Day 3-4)
- [ ] Create `app/fr/blog/[slug]/page.tsx` with `generateStaticParams`
- [ ] Create `app/en/blog/[slug]/page.tsx` with `generateStaticParams`
- [ ] Refactor `app/fr/blog/page.tsx` to use `getAllPosts()`
- [ ] Refactor `app/en/blog/page.tsx` to use `getAllPosts()`
- [ ] Add `generateMetadata()` to each dynamic route
- [ ] Add hreflang tags to both FR and EN post pages
- [ ] Add `BlogPosting` JSON-LD schema to post pages
- [ ] Add `ItemList` schema to blog index pages

### Phase 4: Polish & SEO (Day 4-5)
- [ ] Update `app/sitemap.ts` with blog post URLs
- [ ] Build test: `npm run build` and verify `/out/fr/blog/` contains individual post folders
- [ ] Verify all 12 individual post HTML files exist in `out/`
- [ ] Test internal links from index → post pages
- [ ] Test breadcrumb navigation
- [ ] Test mobile responsiveness
- [ ] Deploy to GitHub Pages and verify live URLs
- [ ] Submit updated sitemap to Google Search Console

### Phase 5: Future Enhancements (Post-MVP)
- [ ] Blog search functionality
- [ ] Category/tag filtering on index page
- [ ] Reading time estimation
- [ ] Table of contents for long articles
- [ ] RSS feed generation (`/blog/rss.xml`)
- [ ] "Related posts" section per article
- [ ] CMS integration (Sanity, Contentful, or markdown-based like Decap)
- [ ] Open Graph image generation per post

---

## 9. Build Compatibility Notes

### Static Export Constraints
Since `output: 'export'` is used:

| Feature | Compatible? | Notes |
|---------|-------------|-------|
| `generateStaticParams` | ✅ | Required for dynamic routes |
| `generateMetadata` | ✅ | Works per static page |
| `getServerSideProps` | ❌ | Use `generateStaticParams` |
| Dynamic `<head>` injection | ✅ | Via `generateMetadata` |
| `next/image` optimization | ⚠️ | Must use `unoptimized: true` (already set) |
| MDX rendering | ✅ | Compiles at build time |

### Build output verification
After `npm run build`, verify:
```bash
ls out/fr/blog/                          # Should contain individual post directories
ls out/en/blog/                          # Should contain individual post directories
grep -r "BlogPosting" out/fr/blog/*/     # Verify schema markup exists
grep -r "hreflang" out/fr/blog/*/        # Verify hreflang tags exist
```

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Large MDX files slow build | Medium | Keep images external (Unsplash), use CDN |
| Content drift during migration | Low | Freeze existing blog content; migrate from backup |
| GitHub Pages deploy size increase | Low | MDX compiles to small HTML; negligible impact |
| Breaking existing blog links | None | Old links never existed (alert only) |
| Missing full article content | Medium | Current pages only have excerpts — full content needs to be written |

---

## Recommendation Summary

> **Use MDX files + `generateStaticParams`** for the blog system.
>
> 1. **MDX** gives us the best developer experience and future-proofs us for interactive article components without another migration.
> 2. **`generateStaticParams`** is **mandatory** for `output: 'export'` — it's the only way to have dynamic routes on GitHub Pages.
> 3. **Separate FR/EN files** (`content/posts/fr/` and `content/posts/en/`) keeps content editing clean and supports independent publishing schedules per language.
> 4. **No redirects needed** — the old "Lire la suite" buttons never pointed anywhere valid. This is a net-new feature.
> 5. **Full article content** must be authored — current pages only have 1-2 paragraph excerpts.
