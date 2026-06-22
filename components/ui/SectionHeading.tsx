type Props = {
  en: string
  hi: string
  className?: string
}

export default function SectionHeading({ en, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="font-sans text-xs tracking-[0.3em] uppercase mb-3 glow-pulse" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
        ✦ ✦ ✦
      </p>
      <h2 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--color-text)' }}>
        {en}
      </h2>
    </div>
  )
}
