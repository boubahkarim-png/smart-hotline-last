'use client'

import { useEffect } from 'react'

export default function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  // Always render a small test indicator to verify component is loaded
  return (
    <>
      <div 
        data-testid="lang-setter-component"
        style={{
          position: 'fixed',
          bottom: '10px',
          left: '50px',
          background: '#007bff',
          color: 'white',
          padding: '2px 6px',
          borderRadius: '3px',
          fontSize: '10px',
          zIndex: 9999,
          fontFamily: 'Arial, sans-serif'
        }}
      >
        LS-{lang}
      </div>
    </>
  )
}
