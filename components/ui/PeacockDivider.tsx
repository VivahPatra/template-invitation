'use client'

export default function PeacockDivider() {
  return (
    <div className="relative flex justify-center pointer-events-none" style={{ height: 140, marginTop: -70, marginBottom: -70, overflow: 'visible', zIndex: 15 }}>
      <img
        src="/assets/peacock.gif"
        alt=""
        style={{ width: 100, height: 'auto', filter: 'brightness(1.1)' }}
      />
    </div>
  )
}
