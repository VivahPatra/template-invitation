'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function RSVPSection() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  const { rsvp } = d
  const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(rsvp.whatsappMessage)}`

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
        <SectionHeading en="Will You Attend?" hi="शादी में आएंगे?" />
        <Divider />

        <motion.div
          variants={fadeUp}
          className="font-sans text-base leading-relaxed mb-10"
          style={{ color: 'var(--color-muted)' }}
        >
          <EditableText field="rsvpText" tag="p" multiline>
            We would be delighted to have you celebrate with us. Please RSVP by{' '}
            <span style={{ color: 'var(--color-accent)' }}>November 1, 2026</span>.
          </EditableText>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleIn}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-base shadow-xl"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle size={20} />
            RSVP via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
