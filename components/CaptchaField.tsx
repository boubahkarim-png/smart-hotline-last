'use client'
import { useState, useEffect } from 'react'

interface CaptchaFieldProps {
  onValidChange: (valid: boolean) => void
}

export function CaptchaField({ onValidChange }: CaptchaFieldProps) {
  const [timestamp] = useState(() => Date.now())
  const [honeypot, setHoneypot] = useState('')
  
  useEffect(() => {
    // Mark as valid after mount (real users have JS enabled)
    onValidChange(true)
  }, [onValidChange])
  
  return (
    <>
      {/* Honeypot field - hidden from real users, bots will fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website (leave empty)</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="opacity-0 absolute"
        />
      </div>
      
      {/* Hidden timestamp field */}
      <input type="hidden" name="form_timestamp" value={timestamp} />
    </>
  )
}
