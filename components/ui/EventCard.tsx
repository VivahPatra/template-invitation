'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { WeddingEvent } from '@/types/wedding.types'
import { scaleIn } from '@/lib/animations'
import DevAssetLabel from '@/components/ui/DevAssetLabel'

export default function EventCard({ event }: { event: WeddingEvent }) {
  return (
    <motion.div
      variants={scaleIn}
      data-cursor-glow
      className="rounded-2xl overflow-hidden"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
      whileHover={{ boxShadow: '0 0 40px rgba(201,168,76,0.28), 0 8px 32px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
    >
      {event.image ? (
        <DevAssetLabel path={event.image}>
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={event.image}
              alt={event.name}
              fill
              className="object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }}
            />
            <div className="absolute bottom-3 left-4">
              <h3 className="font-display text-2xl text-white">{event.name}</h3>
            </div>
          </div>
        </DevAssetLabel>
      ) : (
        <div
          className="h-14 w-full flex items-end px-4 pb-3"
          style={{ background: 'linear-gradient(135deg, var(--color-surface2), var(--color-surface))' }}
        >
          <h3 className="font-display text-2xl" style={{ color: 'var(--color-text)' }}>{event.name}</h3>
        </div>
      )}

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
          <Calendar size={14} style={{ color: 'var(--color-accent)' }} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
          <Clock size={14} style={{ color: 'var(--color-accent)' }} />
          <span>{event.time}</span>
        </div>
        <div className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
          <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
          <div>
            <p className="font-medium text-sm" style={{ color: 'var(--color-text)' }}>
              {event.venue}
            </p>
            <p className="text-xs opacity-70">{event.venueAddress}</p>
          </div>
        </div>
        <a
          href={event.venueMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border transition-all hover:opacity-80"
          style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
        >
          <MapPin size={12} />
          View on Maps
        </a>
      </div>
    </motion.div>
  )
}
