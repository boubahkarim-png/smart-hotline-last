// Centralized site configuration
// These values are injected at BUILD TIME via environment variables

export const basePath = process.env.NEXT_BASEPATH !== undefined ? process.env.NEXT_BASEPATH : '/smart-hotline-last'
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL !== undefined ? process.env.NEXT_PUBLIC_SITE_URL : 'https://smart-hotline.com'

// Helper for asset paths
export function assetPath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  return path
}

// Helper for full URLs
export function fullUrl(path: string): string {
  return `${siteUrl}${path}`
}
