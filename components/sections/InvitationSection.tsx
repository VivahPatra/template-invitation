'use client'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, staggerFast } from '@/lib/animations'

function KasavuCorner({ flip = false, flipY = false }: { flip?: boolean; flipY?: boolean }) {
  return (
    <svg
      viewBox="0 0 52 52"
      width="48"
      aria-hidden
      style={{
        transform: `scale(${flip ? -1 : 1}, ${flipY ? -1 : 1})`,
        transformOrigin: 'center',
      }}
    >
      <path d="M6,46 Q24,-6 48,14" fill="none" stroke="var(--color-accent)" strokeWidth="0.9" opacity="0.4"/>
      <path d="M6,38 Q18,10 38,18" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" opacity="0.22"/>
      <line x1="4" y1="30" x2="22" y2="30" stroke="var(--color-accent)" strokeWidth="0.7" opacity="0.28"/>
      <line x1="4" y1="34" x2="18" y2="34" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.18"/>
      <rect x="4" y="44" width="5" height="5" fill="var(--color-accent)" opacity="0.45" transform="rotate(45 6.5 46.5)"/>
    </svg>
  )
}

export default function InvitationSection() {
  const weddingData = useWeddingData()
  const date = weddingData.weddingDate
  const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <SectionWrapper
      id="invitation"
      className="py-28"
      style={{ background: 'linear-gradient(160deg, #141e12 0%, #1e2e1a 50%, #182618 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs tracking-[0.45em] uppercase mb-5 glow-pulse"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}
          >
            <img src="/assets/diya.webp" alt="" className="lantern-glow" style={{ width: 32, height: 'auto', display: 'inline', verticalAlign: 'middle' }} /> &nbsp; {weddingData.invitationSubtitle || 'With Joy & Blessings'} &nbsp; <img src="/assets/diya.webp" alt="" className="lantern-glow" style={{ width: 32, height: 'auto', display: 'inline', verticalAlign: 'middle' }} />
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display shimmer-text mb-10"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', lineHeight: 1.1 }}
          >
            {weddingData.invitationHeading || 'You Are Invited'}
          </motion.h2>

          {/* Ornate invitation card */}
          <motion.div
            variants={fadeUp}
            data-cursor-glow
            className="relative px-8 py-12 rounded-2xl"
            style={{
              background: 'linear-gradient(160deg, #1e2e1a 0%, #263c22 100%)',
              border: '1px solid rgba(196,154,108,0.25)',
              boxShadow: '0 8px 48px rgba(196,154,108,0.12), 0 2px 8px rgba(10,8,4,0.1)',
            }}
            whileHover={{ boxShadow: '0 8px 60px rgba(196,154,108,0.22), 0 2px 8px rgba(10,8,4,0.12)' }}
            transition={{ duration: 0.5 }}
          >
            {/* Kasavu SVG corners */}
            <div className="absolute top-4 left-4 opacity-70"><KasavuCorner /></div>
            <div className="absolute top-4 right-4 opacity-70"><KasavuCorner flip /></div>
            <div className="absolute bottom-4 left-4 opacity-70"><KasavuCorner flipY /></div>
            <div className="absolute bottom-4 right-4 opacity-70"><KasavuCorner flip flipY /></div>

            {/* Top kasavu rule */}
            <svg viewBox="0 0 320 12" width="100%" style={{ maxWidth: 300 }} className="mx-auto mb-7" aria-hidden>
              <line x1="0" y1="6" x2="126" y2="6" stroke="var(--color-accent)" strokeWidth="0.7" opacity="0.35"/>
              <rect x="148" y="3" width="6" height="6" fill="var(--color-accent)" opacity="0.55" transform="rotate(45 151 6)"/>
              <line x1="172" y1="6" x2="320" y2="6" stroke="var(--color-accent)" strokeWidth="0.7" opacity="0.35"/>
            </svg>

            <div className="flex flex-col items-center mb-6">
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="ganesha-backdrop" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,210,80,0.75) 0%, rgba(201,168,76,0.35) 55%, transparent 75%)', filter: 'blur(10px)' }} />
                <img src="/assets/ganesha.gif" alt="Ganesha" className="ganesha-glow" style={{ width: 58, height: 'auto', position: 'relative', zIndex: 1 }} />
              </div>
              <p className="font-sans text-xs tracking-[0.35em] uppercase mt-2 glow-pulse"
                style={{ color: 'var(--color-accent)', opacity: 0.55 }}>
                {weddingData.invitationBlessing || '॥ Shree Ganeshaya Namah ॥'}
              </p>
            </div>

            {/* Couple names */}
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="text-center">
                <span
                  className="font-display shimmer-text block"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', lineHeight: 1.5, padding: '0.15em 0' }}
                >
                  {weddingData.groomName}
                </span>
                {weddingData.groomParents && (
                  <p className="font-sans text-xs tracking-wide mt-1" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
                    {weddingData.groomFirst === false ? 'Daughter' : 'Son'} of {weddingData.groomParents}
                  </p>
                )}
              </div>
              <span
                className="font-display float-anim"
                style={{ color: 'var(--color-accent)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', opacity: 0.8 }}
              >
                &amp;
              </span>
              <div className="text-center">
                <span
                  className="font-display shimmer-text block"
                  style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', lineHeight: 1.5, padding: '0.15em 0' }}
                >
                  {weddingData.brideName}
                </span>
                {weddingData.brideParents && (
                  <p className="font-sans text-xs tracking-wide mt-1" style={{ color: 'var(--color-muted)', opacity: 0.7 }}>
                    {weddingData.groomFirst === false ? 'Son' : 'Daughter'} of {weddingData.brideParents}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom kasavu rule */}
            <svg viewBox="0 0 320 12" width="100%" style={{ maxWidth: 300 }} className="mx-auto mb-7" aria-hidden>
              <line x1="0" y1="6" x2="126" y2="6" stroke="var(--color-accent)" strokeWidth="0.7" opacity="0.35"/>
              <rect x="148" y="3" width="6" height="6" fill="var(--color-accent)" opacity="0.55" transform="rotate(45 151 6)"/>
              <line x1="172" y1="6" x2="320" y2="6" stroke="var(--color-accent)" strokeWidth="0.7" opacity="0.35"/>
            </svg>

            <p
              className="font-serif text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.8 }}
            >
              {weddingData.invitationText || 'Together with our families, we joyfully invite you to witness and bless the beginning of our forever. Your presence will make our celebration truly complete.'}
            </p>

            <Divider />

            {/* Date / venue / hashtag */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 font-sans text-sm tracking-wide" style={{ color: 'var(--color-accent)', opacity: 0.75 }}>
              <span>📅 &nbsp; {dateStr}</span>
              <span className="hidden sm:block opacity-30">◆</span>
              <span>✉️ &nbsp; {weddingData.hashtag}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
