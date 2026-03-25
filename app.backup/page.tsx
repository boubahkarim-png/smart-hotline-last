'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Root() {
  const router = useRouter()
  useEffect(() => {
    // Detect language from browser
    const lang = navigator.language?.startsWith('en') ? 'en' : 'fr'
    router.replace('/' + lang)
  }, [router])
  return null
}
