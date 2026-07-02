'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const weddingData = useWeddingData()
  const [pct, setPct] = useState(0)
  useEffect(() => {
    let frame: number
    const start = performance.now()
    const duration = 2500
    const tick = (now: number) => {
      const elapsed = now - start
      const next = Math.min(100, Math.round((elapsed / duration) * 100))
      setPct(next)
      if (next < 100) { frame = requestAnimationFrame(tick) }
      else { onComplete() }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-theme-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="font-display text-4xl md:text-5xl text-theme-text tracking-widest">
          {weddingData.groomName}
          <span className="text-theme-accent mx-4">&</span>
          {weddingData.brideName}
        </p>
      </motion.div>

      <motion.div
        className="mt-10 h-px"
        style={{ background: 'var(--color-accent)' }}
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.9, duration: 0.8, ease: 'easeInOut' }}
      />
  
      {/* Percentage */}
      <motion.p
        className="font-sans text-xs tracking-[0.3em] mt-4"
        style={{ color: 'var(--color-accent)', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.3 }}
      >
        {pct}%
      </motion.p>
  </motion.div>
  )
}
