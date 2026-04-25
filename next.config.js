/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.smart-hotline.com',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Link', value: '</.well-known/api-catalog>; rel="api-catalog"' },
          { key: 'Link', value: '</docs/api>; rel="service-doc"' },
          { key: 'Link', value: '</.well-known/mcp/server-card.json>; rel="mcp-server"' },
          { key: 'Link', value: '</.well-known/agent-card.json>; rel="a2a"' },
        ],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json' },
        ],
      },
      {
        source: '/.well-known/mcp/server-card.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
      {
        source: '/.well-known/agent-card.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
