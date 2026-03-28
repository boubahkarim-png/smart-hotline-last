/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASEPATH !== undefined ? process.env.NEXT_BASEPATH : '/smart-hotline-last'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
