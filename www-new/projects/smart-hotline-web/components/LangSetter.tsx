'use client'
import { useEffect } from 'react'

export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
    // Add test indicator to verify component is loaded
    if (typeof window !== 'undefined') {
      const testDiv = document.createElement('div')
      testDiv.id = 'lang-setter-test-indicator'
      testDiv.style.position = 'fixed'
      testDiv.style.top = '0'
      testDiv.style.left = '0'
      testDiv.style.background = 'blue'
      testDiv.style.color = 'white'
      testDiv.style.padding = '10px'
      testDiv.style.zIndex = '9998'
      testDiv.textContent = `LangSetter Loaded (lang: ${lang})`
      document.body.appendChild(testDiv)
    }
  }, [lang])
  return null
}
