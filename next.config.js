/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/smart-hotline-last',
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig
