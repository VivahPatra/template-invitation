'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { fadeUp, staggerContainer } from '@/lib/animations'
import OrnateFrame from '@/components/ui/OrnateFrame'
import { formatShortDate } from '@/lib/utils'

export default function HeroSection() {
  const weddingData = useWeddingData()
  const ref = useRef<HTMLElement>(null)
  const [curtainOpen, setCurtainOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0])

  useEffect(() => {
    const open = () => { setCurtainOpen(true); window.removeEventListener('scroll', open) }
    window.addEventListener('scroll', open, { passive: true })
    return () => window.removeEventListener('scroll', open)
  }, [])

  const openCurtain = () => setCurtainOpen(true)

  return (
    <section ref={ref} id="hero" className="relative z-[4] w-full overflow-hidden bg-theme-bg" style={{ height: '160svh' }}>
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="/assets/hero.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.75) saturate(1)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.88) 100%)' }} />
      </motion.div>

      {/* Gold corner frame */}
      <OrnateFrame size={48} offset={28} />

      {/* Center content — sticky so it stays visible during extended scroll */}
      <motion.div
        className="sticky top-0 z-10 flex flex-col items-center justify-center text-center px-8 -mt-[75px]"
        style={{ height: '100svh', opacity: contentOpacity }}
        variants={staggerContainer}
        initial="hidden"
        animate={curtainOpen ? 'visible' : 'hidden'}
        transition={{ delayChildren: 0.6 }}
      >
        <motion.p variants={fadeUp}
          className="font-devanagari text-4xl tracking-[0.25em] mb-8 opacity-60"
          style={{ color: 'var(--color-accent)' }}>
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,180,50,0.6) 0%, rgba(245,158,11,0.25) 50%, transparent 75%)', filter: 'blur(10px)' }} />
            <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 48, height: 'auto', position: 'relative', zIndex: 1 }} />
          </div>
        </motion.p>

        <motion.div variants={fadeUp} className="mb-3 text-center">
          <h1 className="shimmer-text font-display text-6xl md:text-8xl lg:text-9xl leading-none"
            style={{ letterSpacing: '0.08em' }}>
            {weddingData.groomName}
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-6 my-4">
          <div className="h-px w-16 md:w-24" style={{ background: 'var(--color-accent)' }} />
          <span className="font-display text-4xl glow-pulse" style={{ color: 'var(--color-accent)' }}>&amp;</span>
          <div className="h-px w-16 md:w-24" style={{ background: 'var(--color-accent)' }} />
        </motion.div>

        <motion.div variants={fadeUp} className="mb-8 text-center">
          <h1 className="shimmer-text font-display text-6xl md:text-8xl lg:text-9xl leading-none"
            style={{ letterSpacing: '0.08em' }}>
            {weddingData.brideName}
          </h1>
        </motion.div>

        {weddingData.heroSubtitle && (
          <motion.p variants={fadeUp} className="font-sans text-sm tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-muted)', opacity: 0.8 }}>
            {weddingData.heroSubtitle}
          </motion.p>
        )}

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
          <div className="h-px w-20 opacity-50" style={{ background: 'var(--color-accent)' }} />
          <p className="font-sans text-xs tracking-[0.35em] uppercase" style={{ color: 'var(--color-accent)' }}>
            {formatShortDate(weddingData.weddingDate)}
          </p>
          <div className="h-px w-20 opacity-50" style={{ background: 'var(--color-accent)' }} />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-2" style={{ opacity: 0.5 }}>
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase" style={{ color: 'var(--color-accent)' }}>SCROLL</p>
          <motion.div className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.2, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} />
        </motion.div>
      </motion.div>

      {/* LEFT CURTAIN (mirrored) */}
      <motion.div
        className="absolute inset-y-0 left-0 z-20 flex items-center justify-center"
        style={{ width: '54vw' }}
        initial={{ x: 0 }}
        animate={{ x: curtainOpen ? '-110%' : 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <img
          src="/assets/opener.png"
          alt=""
          className="max-h-full w-auto object-contain"
          style={{ userSelect: 'none', pointerEvents: 'none', filter: 'brightness(0.8)', transform: 'scaleX(-1)' }}
          draggable={false}
        />
      </motion.div>

      {/* RIGHT CURTAIN (original) */}
      <motion.div
        className="absolute inset-y-0 right-0 z-20 flex items-center justify-center"
        style={{ width: '54vw' }}
        initial={{ x: 0 }}
        animate={{ x: curtainOpen ? '110%' : 0 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
      >
        <img
          src="/assets/opener.png"
          alt=""
          className="max-h-full w-auto object-contain"
          style={{ userSelect: 'none', pointerEvents: 'none', filter: 'brightness(0.8)' }}
          draggable={false}
        />
      </motion.div>

      {/* Click/Tap hint — visible before open */}
      <motion.div
        className="fixed inset-0 z-30 flex flex-col items-center justify-center select-none cursor-pointer"
        style={{ height: '100svh' }}
        animate={{ opacity: curtainOpen ? 0 : 1, pointerEvents: curtainOpen ? 'none' : 'auto' }}
        transition={{ duration: 0.4 }}
        onClick={openCurtain}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center px-8 py-10"
        >
          <p className="font-display shimmer-text"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '0.06em', textShadow: '0 2px 24px rgba(0,0,0,0.9)' }}>
            {weddingData.groomName} &amp; {weddingData.brideName}
          </p>
          <p className="font-sans text-xs tracking-[0.4em] uppercase mt-3 mb-2"
            style={{ color: 'var(--color-accent)', opacity: 0.85, textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
            {formatShortDate(weddingData.weddingDate)}
          </p>
          <div className="flex flex-col items-center gap-2 mt-8">
            <p className="font-sans text-xs tracking-[0.5em] uppercase"
              style={{ color: 'var(--color-accent)', opacity: 0.85, textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
              Tap or Scroll to Begin
            </p>
            <motion.div className="w-px h-8"
              style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
              animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
