# Enable Markdown for Agents

Allow agents to request Markdown versions of your HTML responses via content negotiation.
When an agent sends `Accept: text/markdown`, return a markdown version of the HTML response.

## Requirements

- Detect `Accept: text/markdown` in request headers
- Return a markdown version of the response (convert HTML to markdown or provide pre-written markdown)
- Set `Content-Type: text/markdown` (and optionally `x-markdown-tokens` if available)
- Keep HTML as the default for browsers (when `Accept: text/html` or no Accept header)

## Implementation Approaches

### 1. Next.js (for your site)

In your Next.js pages or middleware, check the Accept header and render markdown accordingly.

Example in a page component or getServerSideProps:

```javascript
export async function getServerSideProps({ req }) {
  const accept = req.headers.accept || '';
  const wantsMarkdown = accept.includes('text/markdown');

  // Fetch or generate your data
  const data = await getYourData();

  if (wantsMarkdown) {
    // Return markdown version
    const markdownContent = convertToMarkdown(data); // Implement your conversion
    return {
      props: { markdownContent, wantsMarkdown: true },
    };
  } else {
    // Return HTML version (default)
    return {
      props: { data, wantsMarkdown: false },
    };
  }
}
```

Then in your component, conditionally render markdown or HTML.

### 2. Using a Middleware (for all routes)

You can use Next.js middleware to rewrite requests or set response headers.

### 3. Static Site Conversion (for GitHub Pages)

If your site is static, you can pre-generate markdown versions of your pages and serve them when requested.

For example, for each HTML page, have a corresponding .md file, and use server logic (or Netlify/Vercel redirects) to serve the markdown when Accept: text/markdown is sent.

## Validation

```
POST https://isitagentready.com/api/scan
Content-Type: application/json

{"url": "https://YOUR-SITE.com"}
```

Check that `checks.agentExperience.markdownNegotiation.status` is `"pass"`.