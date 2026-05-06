'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const animationClasses: Record<string, string> = {
  'fade-up': 'scroll-animate',
  'fade-left': 'scroll-slide-left',
  'fade-right': 'scroll-slide-right',
  'scale': 'scroll-scale',
  'rotate': 'scroll-rotate',
  'flip': 'scroll-flip',
}

interface ScrollAnimateProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'rotate' | 'flip'
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  className?: string
}

export function ScrollAnimate({ 
  children, 
  animation = 'fade-up', 
  delay,
  className = '',
}: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation()
  
  const delayClass = delay ? `scroll-delay-${delay}` : ''
  const animClass = animationClasses[animation] || 'scroll-animate'
  const visibleClass = isVisible ? 'is-visible' : ''

  return (
    <div
      ref={ref}
      className={`${animClass} ${delayClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollAnimate
