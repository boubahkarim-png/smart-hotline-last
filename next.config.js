/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASEPATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
