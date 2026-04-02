'use client'
import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options?: {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options?.triggerOnce !== false) {
            observer.unobserve(element)
          }
        } else if (options?.triggerOnce === false) {
          setIsVisible(false)
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px 0px -50px 0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options?.threshold, options?.rootMargin, options?.triggerOnce])

  return { ref, isVisible }
}

export default useScrollAnimation
