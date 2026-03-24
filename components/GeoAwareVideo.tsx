'use client'
import { useEffect, useState } from 'react'

type VideoKey = 'brand' | 'agent' | 'testimonial'

interface GeoAwareVideoProps {
  videoKey: VideoKey
  className?: string
  poster?: string
}

export default function GeoAwareVideo({ videoKey, className = '', poster }: GeoAwareVideoProps) {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const path = window.location.pathname
    const isFrench = path.includes('/fr') || !path.includes('/en')
    setLang(isFrench ? 'fr' : 'en')
  }, [])

  if (!mounted) {
    return (
      <div className={`bg-slate-200 animate-pulse rounded-2xl ${className}`}>
        <div className="w-full h-full min-h-[200px]" />
      </div>
    )
  }

  const videoSrc = `/videos/promo/${videoKey}_${lang}.mp4`
  const posterSrc = poster || `/videos/promo/${videoKey}_${lang}_poster.jpg`

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={`w-full h-auto rounded-2xl ${className}`}
      poster={posterSrc}
    >
      <source src={videoSrc} type="video/mp4" />
      <p>Your browser does not support the video tag.</p>
    </video>
  )
}
