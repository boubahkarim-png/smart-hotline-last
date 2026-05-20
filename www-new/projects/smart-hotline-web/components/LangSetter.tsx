'use client'
import { useEffect } from 'react'

export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Always show a small test indicator to verify the component is loaded
  return (
    <>
      <div data-testid="lang-setter-component" style={{position: 'fixed', bottom: 20, left: 0, background: 'green', color: 'white', padding: '5px', zIndex: 9999, fontSize: '10px'}}>
        LangSetter ({lang})
      </div>
    </>
  )
}
