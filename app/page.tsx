'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Root() {
  const router = useRouter()
  useEffect(() => {
    // Default to French (main audience: Quebec, France, Belgium, Switzerland)
    // Only use English if explicitly requested or browser is set to English
    const browserLang = navigator.language?.toLowerCase() || ''
    const isEnglish = browserLang.startsWith('en-us') || browserLang.startsWith('en-ca') || browserLang.startsWith('en-gb')
    router.replace(isEnglish ? '/en' : '/fr')
  }, [router])
  return null
}
