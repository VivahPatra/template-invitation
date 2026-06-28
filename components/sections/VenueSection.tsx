'use client'
import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'
import { useWeddingData } from '@/context/WeddingDataContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { formatShortDate } from '@/lib/utils'

export default function VenueSection() {
  const weddingData = useWeddingData()
  const { venue } = weddingData
  return (
    <SectionWrapper id="venue" className="py-24" style={{ background: 'linear-gradient(160deg, #0e0618 0%, #1c0d2e 50%, #120520 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Venue" hi="स्थान" />
          <Divider />
        </div>

        <motion.div variants={fadeUp} className="text-center mb-8">
          <div className="text-5xl mb-4">🏛️</div>
          <h3 className="font-display text-3xl mb-2" style={{ color: 'var(--color-text)' }}>
            {venue.name}
          </h3>
          <p className="font-sans text-sm mb-2" style={{ color: 'var(--color-muted)' }}>
            {venue.address}
          </p>
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
            {formatShortDate(weddingData.weddingDate)} · {weddingData.weddingDate.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}
          </p>
          <a
            href={venue.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
