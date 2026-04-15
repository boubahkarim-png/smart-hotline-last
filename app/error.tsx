'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-violet-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-slate-600 mb-8">
          An error occurred while loading this page. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-violet-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-violet-700 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-2 border-slate-300 text-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
