'use client'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/wedding-data'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
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
        onAnimationComplete={onComplete}
      />
    </motion.div>
  )
}
