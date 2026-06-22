'use client'
import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  shape: 'rose' | 'lotus' | 'marigold'
}

const PETAL_SHAPES = {
  rose: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9 2 7 5 7 8c0 2 .8 3.5 2 4.5C7.5 14 6 16 6 18c0 2.5 2.5 4 6 4s6-1.5 6-4c0-2-1.5-4-3-5.5C16.2 11.5 17 10 17 8c0-3-2-6-5-6z" />
    </svg>
  ),
  lotus: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 20c0 0-7-5-7-10C5 6 8 4 12 4s7 2 7 6c0 5-7 10-7 10z" />
      <path d="M5 10c-2 0-3 2-3 4 0 3 3 5 3 5s3-2 3-5c0-2-1-4-3-4z" opacity="0.7"/>
      <path d="M19 10c2 0 3 2 3 4 0 3-3 5-3 5s-3-2-3-5c0-2 1-4 3-4z" opacity="0.7"/>
    </svg>
  ),
  marigold: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2l1.5 4h-3L12 2zM12 22l-1.5-4h3L12 22zM2 12l4-1.5v3L2 12zM22 12l-4 1.5v-3L22 12zM5.6 5.6l3 2.8-2.1 2.1-2.8-3 1.9-1.9zM18.4 18.4l-3-2.8 2.1-2.1 2.8 3-1.9 1.9zM5.6 18.4l2.8-3 2.1 2.1-2.8 3-2.1-2.1zM18.4 5.6l-2.8 3-2.1-2.1 2.8-3 2.1 2.1z"/>
    </svg>
  ),
}

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 8,
    size: 10 + Math.random() * 14,
    rotation: Math.random() * 360,
    shape: (['rose', 'lotus', 'marigold'] as const)[Math.floor(Math.random() * 3)],
  }))
}

export default function FloralPetals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(generatePetals(count))
  }, [count])

  if (petals.length === 0) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-60px',
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            color: 'var(--color-accent)',
            opacity: 0.55,
            animationName: 'petalFall, petalSway',
            animationDuration: `${p.duration}s, ${p.duration * 0.7}s`,
            animationDelay: `${p.delay}s, ${p.delay * 0.5}s`,
            animationTimingFunction: 'linear, ease-in-out',
            animationIterationCount: 'infinite',
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {PETAL_SHAPES[p.shape]}
        </div>
      ))}
    </div>
  )
}
