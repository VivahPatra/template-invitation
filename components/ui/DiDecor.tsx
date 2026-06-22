'use client'

export default function DiDecor() {
  return (
    <div className="relative w-full pointer-events-none" style={{ height: 0, overflow: 'visible', zIndex: 12 }}>
      <style>{`
        @keyframes diSwayLeft {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(-15px); }
        }
        @keyframes diSwayRight {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(15px); }
        }
        @keyframes diGlow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 6px rgba(196,154,108,0.4)); }
          50%       { filter: brightness(1.3) drop-shadow(0 0 16px rgba(196,154,108,0.8)); }
        }
      `}</style>
      <div className="absolute left-3 sm:left-6" style={{ top: 0 }}>
        <div style={{ position: 'relative', animation: 'diSwayLeft 3.5s ease-in-out infinite' }}>
          <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,180,50,0.6) 0%, rgba(196,154,108,0.25) 50%, transparent 75%)', filter: 'blur(10px)' }} />
          <img src="/assets/di.png" alt="" style={{
            width: 64, height: 'auto', opacity: 0.85, position: 'relative', zIndex: 1,
            animation: 'diGlow 2.5s ease-in-out infinite',
          }} />
        </div>
      </div>
      <div className="absolute right-3 sm:right-6" style={{ top: 0 }}>
        <div style={{ position: 'relative', animation: 'diSwayRight 3.5s ease-in-out infinite' }}>
          <div className="ganesha-backdrop" style={{ position: 'absolute', inset: -10, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,180,50,0.6) 0%, rgba(196,154,108,0.25) 50%, transparent 75%)', filter: 'blur(10px)' }} />
          <img src="/assets/di.png" alt="" style={{
            width: 64, height: 'auto', opacity: 0.85, position: 'relative', zIndex: 1, transform: 'scaleX(-1)',
            animation: 'diGlow 2.5s ease-in-out 0.5s infinite',
          }} />
        </div>
      </div>
    </div>
  )
}
