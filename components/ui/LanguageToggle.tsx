'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LanguageProvider'

export default function LanguageToggle() {
  const { lang, toggle, mounted } = useLang()

  if (!mounted) return null

  const isHindi = lang === 'hi'

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.4 }}
      className="fixed top-4 right-4 z-50 flex items-center rounded-full px-1 py-1 gap-0"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
      }}
      aria-label={isHindi ? 'Switch to English' : 'Switch to Hindi'}
    >
      <span
        className="px-3 py-1.5 rounded-full font-sans text-xs font-semibold transition-all duration-300"
        style={{
          background: !isHindi ? 'var(--color-accent)' : 'transparent',
          color: !isHindi ? 'var(--color-bg)' : 'var(--color-muted)',
        }}
      >
        EN
      </span>
      <span
        className="px-3 py-1.5 rounded-full font-devanagari text-xs font-semibold transition-all duration-300"
        style={{
          background: isHindi ? 'var(--color-accent)' : 'transparent',
          color: isHindi ? 'var(--color-bg)' : 'var(--color-muted)',
        }}
      >
        हि
      </span>
    </motion.button>
  )
}
