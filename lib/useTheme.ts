'use client'
import { useState, useEffect } from 'react'
import { useWeddingData } from '@/context/WeddingDataContext'

export type Theme = 'gold' | 'maroon' | 'emerald'

const THEME_CLASSES: Record<Theme, string> = {
  gold: 'theme-gold',
  maroon: 'theme-maroon',
  emerald: 'theme-emerald',
}

export function useTheme() {
  const weddingData = useWeddingData()
  const [theme, setThemeState] = useState<Theme>(weddingData.defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wedding-theme') as Theme | null
    if (saved && saved in THEME_CLASSES) setThemeState(saved)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    Object.values(THEME_CLASSES).forEach((c) => html.classList.remove(c))
    html.classList.add(THEME_CLASSES[theme])
    localStorage.setItem('wedding-theme', theme)
  }, [theme, mounted])

  const setTheme = (t: Theme) => setThemeState(t)
  return { theme, setTheme }
}
