interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  width?: number
  height?: number
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  style,
  priority = false,
  width,
  height
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      width={width}
      height={height}
    />
  )
}
