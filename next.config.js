/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/smart-hotline-last',
  assetPrefix: '/smart-hotline-last',
}
module.exports = nextConfig
