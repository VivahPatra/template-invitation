'use client'
import { useState, useEffect } from 'react'

export type Lang = 'en' | 'hi'

function applyLang(lang: Lang) {
  document.documentElement.setAttribute('data-lang', lang)
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wedding-lang') as Lang | null
    const initial: Lang = saved === 'en' || saved === 'hi' ? saved : 'en'
    setLang(initial)
    applyLang(initial)
  }, [])

  const toggle = () => {
    const next: Lang = lang === 'en' ? 'hi' : 'en'
    setLang(next)
    applyLang(next)
    localStorage.setItem('wedding-lang', next)
  }

  return { lang, setLang, toggle, isHindi: lang === 'hi', mounted }
}
