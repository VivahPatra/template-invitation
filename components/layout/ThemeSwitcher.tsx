'use client'
import { motion } from 'framer-motion'
import { useThemeContext } from '@/components/providers/ThemeProvider'
import type { Theme } from '@/lib/useTheme'

const THEMES: { id: Theme; color: string; label: string }[] = [
  { id: 'gold', color: '#c9a84c', label: 'Royal Gold' },
  { id: 'maroon', color: '#7a1530', label: 'Maroon' },
  { id: 'emerald', color: '#d4af37', label: 'Emerald' },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext()

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      {THEMES.map((t) => (
        <motion.button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className="w-5 h-5 rounded-full border-2 transition-all"
          style={{
            backgroundColor: t.color,
            borderColor: theme === t.id ? 'var(--color-text)' : 'transparent',
            boxShadow: theme === t.id ? `0 0 0 1px ${t.color}` : 'none',
          }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${t.label} theme`}
        />
      ))}
    </div>
  )
}
