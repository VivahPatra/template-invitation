'use client'

interface DevAssetLabelProps {
  path: string
  children: React.ReactNode
  className?: string
}

/**
 * Dev-only overlay. Shows asset path on hover so you know exactly which
 * file to replace in wedding-data.ts. Renders nothing in production.
 */
export default function DevAssetLabel({ path, children, className = '' }: DevAssetLabelProps) {
  if (process.env.NODE_ENV !== 'development') return <>{children}</>

  return (
    <div className={`relative group/dev ${className}`}>
      {children}
      {/* Hover label */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-50
          pointer-events-none
          opacity-0 group-hover/dev:opacity-100
          transition-opacity duration-150
          flex items-center gap-1.5
          px-2 py-1.5
        "
        style={{ background: 'rgba(0,0,0,0.85)' }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{ color: '#facc15', flexShrink: 0 }}
        >
          <rect width="10" height="10" rx="2" fill="currentColor" opacity="0.3" />
          <path d="M2 3h6M2 5h4M2 7h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span
          className="font-mono text-[10px] truncate"
          style={{ color: '#facc15', maxWidth: '100%' }}
          title={path}
        >
          {path}
        </span>
      </div>
      {/* Corner badge always visible */}
      <div
        className="
          absolute top-1 left-1 z-50
          pointer-events-none
          px-1 py-0.5
          rounded-sm
          font-mono text-[8px] leading-none
          opacity-70
        "
        style={{ background: 'rgba(250,204,21,0.15)', color: '#facc15', border: '1px solid rgba(250,204,21,0.3)' }}
      >
        asset
      </div>
    </div>
  )
}
