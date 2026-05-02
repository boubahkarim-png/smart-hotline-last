/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/smart-hotline-late2',
  assetPrefix: '/smart-hotline-late2',
}
module.exports = nextConfig
