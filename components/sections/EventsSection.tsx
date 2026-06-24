'use client'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import type { WeddingEvent } from '@/types/wedding.types'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { staggerFast, fadeUp } from '@/lib/animations'

// Per-event accent colors (glow ring)
const EVENT_COLORS: Record<string, string> = {
  engagement: '#c49a6c',
  mehendi:    '#5a9a60',
  haldi:      '#c8a030',
  sangeet:    '#c07060',
  wedding:    '#c49a6c',
  reception:  '#8a9e72',
}

// Fallback emoji when no image
const EVENT_EMOJI: Record<string, string> = {
  engagement: '\u{1F48D}',
  mehendi:    '\u{1F33F}',
  haldi:      '\u{1F33C}',
  sangeet:    '\u{1F3B6}',
  wedding:    '\u{1F549}️',
  reception:  '✨',
}

function EventNode({
  event,
  eventIndex,
  isHero = false,
  delay = 0,
}: {
  event: WeddingEvent
  eventIndex: number
  isHero?: boolean
  delay?: number
}) {
  const color = EVENT_COLORS[event.id] ?? 'var(--color-accent)'
  const emoji = EVENT_EMOJI[event.id] ?? 'diya'
  const circleSize = isHero ? 130 : 100

  return (
    <motion.article
      data-cursor-glow
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Circle icon */}
      <div className="relative" style={{ width: circleSize, height: circleSize }}>
        {/* Outer glow halo — intensifies on hover */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            boxShadow: `0 0 18px 4px ${color}33`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: `0 0 48px 16px ${color}55` }}
        />

        {/* Dashed ring — spins on hover */}
        <div
          className="absolute rounded-full group-hover:[animation:spin_6s_linear_infinite]"
          style={{
            inset: -3,
            border: `1.5px dashed ${color}`,
            opacity: 0.5,
          }}
        />

        {/* Solid border ring */}
        <div
          className="absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-90"
          style={{ border: `2px solid ${color}`, opacity: 0.55 }}
        />

        {/* Image or emoji */}
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="absolute inset-0 rounded-full object-cover transition-all duration-500 group-hover:brightness-100"
            style={{ width: '100%', height: '100%', filter: 'brightness(0.82) saturate(1.05)' }}
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle, ${color}22 0%, ${color}08 100%)`,
              fontSize: isHero ? 44 : 34,
            }}
          >
            {emoji === 'diya'
              ? <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -6, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,180,50,0.6) 0%, rgba(245,158,11,0.25) 50%, transparent 75%)', filter: 'blur(8px)' }} />
                  <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 40, height: 'auto', position: 'relative', zIndex: 1 }} />
                </div>
              : emoji}
          </div>
        )}

        {/* Inner vignette */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, transparent 50%, ${color}18 100%)` }}
        />
      </div>

      {/* Name + date */}
      <div className="text-center mt-3">
        <EditableText field="name" index={eventIndex} arrayField="events" tag="p"
          className="font-display tracking-wide transition-colors duration-300"
          style={{
            color: 'var(--color-text)',
            fontSize: isHero ? '1.25rem' : '1rem',
          }}
        >
          {event.name}
        </EditableText>
        <p
          className="font-sans text-xs tracking-widest mt-0.5"
          style={{ color: color, opacity: 0.7 }}
        >
          <EditableText field="date" index={eventIndex} arrayField="events">{event.date.replace(', 2026', '')}</EditableText> &middot; <EditableText field="time" index={eventIndex} arrayField="events">{event.time}</EditableText>
        </p>
      </div>

      {/* Detail panel — always visible */}
      <div
        className="text-center mt-3 rounded-xl px-3 py-3 transition-all duration-400"
        style={{
          maxWidth: 160,
          background: `linear-gradient(135deg, ${color}14 0%, ${color}08 100%)`,
          border: `1px solid ${color}50`,
          boxShadow: `0 0 16px ${color}20`,
          backdropFilter: 'blur(4px)',
        }}
      >
        <EditableText field="venue" index={eventIndex} arrayField="events" tag="p"
          className="font-serif text-sm"
          style={{ color: 'var(--color-text)', opacity: 0.85 }}
        >
          {event.venue}
        </EditableText>
        <EditableText field="venueAddress" index={eventIndex} arrayField="events" tag="p"
          className="font-sans text-xs mt-1"
          style={{ color: 'var(--color-muted)', opacity: 0.7 }}
        >
          {event.venueAddress.split(',')[0]}
        </EditableText>
        {event.venueMapLink && (
          <a
            href={event.venueMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-sans text-xs tracking-wider underline underline-offset-2 transition-opacity duration-200 hover:opacity-100"
            style={{ color: color, opacity: 0.85 }}
          >
            &#x1f4cd; View on Maps
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function EventsSection() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  const events = d.events
  const half = Math.ceil(events.length / 2)
  const row1 = events.slice(0, half)       // Engagement, Mehendi, Haldi
  const row2 = events.slice(half)           // Sangeet, Wedding, Reception

  // Wedding is last in row2 if 6 events -> index 1 in row2 (center)
  const heroId = 'wedding'

  return (
    <SectionWrapper
      id="events"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1e1408 0%, #2e2010 50%, #261a0c 100%)' }}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}
          >
            <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 32, height: 'auto', display: 'inline', verticalAlign: 'middle' }} /> &nbsp; The Celebrations &nbsp; <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 32, height: 'auto', display: 'inline', verticalAlign: 'middle' }} />
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--color-text)' }}
          >
            Our <em>Events</em>
          </motion.h2>
          {/* Kasavu underline */}
          <motion.div variants={fadeUp} className="flex justify-center mt-5">
            <svg viewBox="0 0 320 14" width="320" height="14" aria-hidden>
              <path d="M10,7 L310,7" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.42"/>
              <path d="M10,11 L310,11" fill="none" stroke="var(--color-accent)" strokeWidth="0.6" opacity="0.25"/>
              <rect x="75"  y="4" width="6" height="6" fill="var(--color-accent)" opacity="0.50" transform="rotate(45 78 7)"/>
              <rect x="155" y="3" width="8" height="8" fill="var(--color-accent)" opacity="0.65" transform="rotate(45 159 7)"/>
              <rect x="235" y="4" width="6" height="6" fill="var(--color-accent)" opacity="0.50" transform="rotate(45 238 7)"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Event grid — two staggered rows */}
        <div className="relative">

          {/* Connecting decorative path (desktop only) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 900 200">
              <path
                d="M 150 60 Q 450 140 750 60"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="0.8"
                opacity="0.25"
                strokeDasharray="4 6"
              />
              {/* Diamonds at event midpoints */}
              {[150, 300, 450, 600, 750].map((x, i) => (
                <rect
                  key={i}
                  x={x - 4} y={i % 2 === 0 ? 56 : 96}
                  width="8" height="8"
                  fill="var(--color-accent)"
                  opacity="0.3"
                  transform={`rotate(45 ${x} ${i % 2 === 0 ? 60 : 100})`}
                />
              ))}
            </svg>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 mb-6 md:mb-0 md:relative md:z-10">
            {row1.map((ev, i) => (
              <EventNode key={ev.id} event={ev} eventIndex={i} delay={i * 0.1} />
            ))}
          </div>

          {/* Row 2 — staggered down on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 mt-8 md:mt-10 md:relative md:z-10">
            {row2.map((ev, i) => (
              <EventNode
                key={ev.id}
                event={ev}
                eventIndex={half + i}
                isHero={ev.id === heroId}
                delay={0.15 + i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom wave hint */}
        <div className="flex justify-center mt-14" aria-hidden>
          <svg viewBox="0 0 600 24" width="400" height="24">
            <path d="M0,12 Q150,0 300,12 Q450,24 600,12" fill="none" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.22"/>
            <path d="M0,16 Q150,4 300,16 Q450,28 600,16" fill="none" stroke="var(--color-accent)" strokeWidth="0.4" opacity="0.14"/>
            <circle cx="300" cy="12" r="3" fill="var(--color-accent)" opacity="0.4"/>
            <circle cx="150" cy="6" r="2"  fill="var(--color-accent)" opacity="0.25"/>
            <circle cx="450" cy="18" r="2" fill="var(--color-accent)" opacity="0.25"/>
          </svg>
        </div>

      </div>
    </SectionWrapper>
  )
}
