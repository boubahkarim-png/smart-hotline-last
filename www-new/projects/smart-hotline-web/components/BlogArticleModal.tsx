'use client'

import { useEffect, useCallback } from 'react'

export interface Article {
  slug: string
  title: string
  date: string
  cat: string
  img: string
  excerpt: string
  author: string
  readTime: string
  metaDesc: string
  keywords: string[]
  content: string
}

interface BlogArticleModalProps {
  article: Article | null
  onClose: () => void
}

export default function BlogArticleModal({ article, onClose }: BlogArticleModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [article, handleKeyDown])

  if (!article) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn" />
      
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all shadow-lg"
          aria-label="Fermer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative h-64 md:h-80 flex-shrink-0">
            <img 
              src={article.img} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.cat}
                </span>
                <span className="text-white/80 text-sm">{article.date}</span>
                <span className="text-white/80 text-sm">• {article.readTime}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{article.author}</p>
                <p className="text-sm text-slate-500">Expert en relation client</p>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.keywords.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-2">Mots-clés :</p>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw, i) => (
                    <span 
                      key={i}
                      className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
