/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASEPATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
