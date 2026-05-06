#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

function htmlToMarkdown(html) {
  let text = html

  text = text.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  text = text.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
  text = text.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
  text = text.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
  text = text.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
  text = text.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '')

  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
  text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n')
  text = text.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n')

  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
  text = text.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
  text = text.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
  text = text.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
  text = text.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')

  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, function (match, content) {
    const cleaned = content.replace(/<[^>]+>/g, '').trim()
    return '- ' + cleaned + '\n'
  })

  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')
  text = text.replace(/<br\s*\/?>/gi, '\n')
  text = text.replace(/<hr\s*\/?>/gi, '\n---\n')

  text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, function (match, content) {
    return content.split('\n').map(function (line) { return '> ' + line }).join('\n')
  })

  text = text.replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '![$1]')
  text = text.replace(/<img[^>]*>/gi, '')

  text = text.replace(/<[^>]+>/g, '')

  text = text.replace(/&amp;/g, '&')
  text = text.replace(/&lt;/g, '<')
  text = text.replace(/&gt;/g, '>')
  text = text.replace(/&quot;/g, '"')
  text = text.replace(/&#39;/g, "'")
  text = text.replace(/&nbsp;/g, ' ')

  text = text.replace(/\n{3,}/g, '\n\n')
  text = text.trim()

  return text
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let count = 0

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      count += processDirectory(fullPath)
      continue
    }

    if (!entry.name.endsWith('.html')) continue

    const html = fs.readFileSync(fullPath, 'utf8')
    const markdown = htmlToMarkdown(html)
    const mdPath = fullPath.replace(/\.html$/, '.md')

    fs.writeFileSync(mdPath, markdown, 'utf8')
    count++
  }

  return count
}

const outDir = path.join(__dirname, '..', 'out')

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Run "next build" first.')
  process.exit(1)
}

const count = processDirectory(outDir)
console.log(`Generated ${count} markdown files for content negotiation`)
