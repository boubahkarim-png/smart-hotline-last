'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

const animationClasses: Record<string, string> = {
  'pulse': 'pulse-animate',
  'pulse-slow': 'pulse-animate-slow',
  'pulse-fast': 'pulse-animate-fast',
  'pulse-scale': 'pulse-scale-animate',
  'pulse-rotate': 'pulse-rotate-animate'
}

interface PulseAnimateProps {
  children: ReactNode
  animation?: 'pulse' | 'pulse-slow' | 'pulse-fast' | 'pulse-scale' | 'pulse-rotate'
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  className?: string
}

export function PulseAnimate({ 
  children, 
  animation = 'pulse', 
  delay,
  className = '',
}: PulseAnimateProps) {
  const { ref, isVisible } = useScrollAnimation()
  
  const delayClass = delay ? `scroll-delay-${delay}` : ''
  const animClass = animationClasses[animation] || 'pulse-animate'
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

export default PulseAnimate