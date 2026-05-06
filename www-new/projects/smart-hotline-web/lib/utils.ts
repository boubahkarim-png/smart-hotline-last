import basePath from './basePath'

export function assetPath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  return path
}
