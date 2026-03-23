'use client'
import { useState } from 'react'

interface Props {
  email: string
  className?: string
}

export default function ObfuscatedEmail({ email, className = '' }: Props) {
  const [revealed, setRevealed] = useState(false)
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setRevealed(true)
    setTimeout(() => {
      window.location.href = `mailto:${email}`
    }, 100)
  }
  
  if (revealed) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {email}
      </a>
    )
  }
  
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer hover:text-blue-600 transition-colors ${className}`}
      title="Cliquez pour révéler l'email"
    >
      📧 Cliquez pour voir l'email
    </button>
  )
}
