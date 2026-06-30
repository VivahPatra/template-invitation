'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import RSVPModal from '@/components/ui/RSVPModal'
import PartyConfetti from '@/components/ui/PartyConfetti'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const { rsvp } = weddingData
  const [modalOpen, setModalOpen] = useState(false)
  const [responded, setResponded] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('rsvp-responded') === 'true') setResponded(true)
  }, [])

  const handleSend = (guestCount: number, fullMessage: string) => {
    const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`
    window.open(whatsappUrl, '_blank')
    setModalOpen(false)
    setResponded(true)
    setShowConfetti(true)
    localStorage.setItem('rsvp-responded', 'true')
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <SectionWrapper id="rsvp" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #141e12 0%, #1e2e1a 50%, #182618 100%)' }}>
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {showConfetti && <PartyConfetti />}
        {responded ? (
          <>
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-display shimmer-text mb-3" style={{ fontSize: '2.5rem', lineHeight: 1.4, padding: '0.1em 0' }}>
              Thank You!
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Your RSVP has been sent. We can&apos;t wait to celebrate with you!
            </p>
          </>
        ) : (
          <>
            <SectionHeading en={weddingData.rsvpHeading || "Will You Attend?"} hi="शादी में आएंगे?" />
            <Divider />

            <motion.p
              variants={fadeUp}
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-muted)' }}
            >
              {weddingData.rsvpText || 'We would be delighted to have you celebrate with us.'} Please RSVP by{' '}
              <span style={{ color: 'var(--color-accent)' }}>{weddingData.rsvpDeadline || 'November 1, 2026'}</span>.
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setModalOpen(true)}
                variants={scaleIn}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-base shadow-xl"
                style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <MessageCircle size={20} />
                RSVP via WhatsApp
              </motion.button>
            </motion.div>
          </>
        )}
      </div>

      <RSVPModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSend={handleSend}
        defaultMessage={rsvp.whatsappMessage}
        brideName={weddingData.brideName}
        groomName={weddingData.groomName}
      />
    </SectionWrapper>
  )
}
