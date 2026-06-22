'use client'
import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { weddingData } from '@/data/wedding-data'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, scaleIn, staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function VenueSection() {
  const { venue } = weddingData
  return (
    <SectionWrapper id="venue" className="py-24" style={{ background: 'linear-gradient(160deg, #0e0618 0%, #1c0d2e 50%, #120520 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Venue" hi="स्थान" />
          <Divider />
        </div>

        <motion.div variants={fadeUp} className="text-center mb-8">
          <h3 className="font-display text-3xl mb-2" style={{ color: 'var(--color-text)' }}>
            {venue.name}
          </h3>
          <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
            {venue.address}
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


        {/* Nearby accommodations */}
        <div className="text-center mb-6">
          <motion.h3 variants={fadeUp} className="font-display text-3xl" style={{ color: 'var(--color-text)' }}>
            Nearby Stays
          </motion.h3>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {venue.accommodations.map((acc, i) => (
            <motion.a
              key={i}
              href={acc.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              className="rounded-xl p-4 flex flex-col gap-1 group"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <p
                className="font-serif font-semibold group-hover:opacity-80 transition-opacity"
                style={{ color: 'var(--color-text)' }}
              >
                {acc.name}
              </p>
              <p className="font-sans text-xs flex items-center gap-1" style={{ color: 'var(--color-muted)' }}>
                <MapPin size={11} />
                {acc.distance} from venue
              </p>
              <p className="font-sans text-xs flex items-center gap-1 mt-1" style={{ color: 'var(--color-accent)' }}>
                Book now <ExternalLink size={10} />
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
