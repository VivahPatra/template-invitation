'use client'
import { createContext, useContext } from 'react'
import { useLanguage, Lang } from '@/lib/useLanguage'

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  isHindi: boolean
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggle: () => {},
  isHindi: false,
  mounted: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const value = useLanguage()
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}
