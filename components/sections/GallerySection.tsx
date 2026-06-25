'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// using img for external URL support
import { useWeddingData } from '@/context/WeddingDataContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import Lightbox from '@/components/ui/Lightbox'
import DevAssetLabel from '@/components/ui/DevAssetLabel'
import { scaleIn, staggerFast, fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const BG = 'linear-gradient(160deg, #141e12 0%, #1e2e1a 50%, #182618 100%)'
const BORDER = '1px solid var(--color-border)'
const OVERLAY = 'rgba(0,0,0,0.25)'
const ICON_STYLE = { color: 'var(--color-accent)', fontSize: 22 }
const HOVER = { scale: 1.02 as const, boxShadow: '0 0 32px rgba(201,168,76,0.28)' }

function GalleryThumb({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
  return (
    <motion.div variants={scaleIn} data-cursor-glow
      className="relative cursor-pointer overflow-hidden rounded-xl group h-full"
      style={{ border: BORDER }}
      onClick={onClick}
      whileHover={HOVER}
      transition={{ duration: 0.2 }}>
      <DevAssetLabel path={src}>
        <img src={src} alt={`Photo ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </DevAssetLabel>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
        style={{ background: OVERLAY }}>
        <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 36, height: 'auto' }} />
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const weddingData = useWeddingData()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const images = weddingData.galleryImages
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % images.length))

  const hero = images[0]
  const pair = images.slice(1, 3)
  const rest = images.slice(3)

  return (
    <>
      <SectionWrapper id="gallery" className="py-24" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <SectionHeading en="Gallery" hi="तस्वीरें" />
            <Divider />
          </div>

          <motion.div className="mt-4" variants={staggerFast} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {/* Feature hero row: large left + 2 stacked right */}
            {hero && (
              <div className="flex flex-col md:flex-row gap-3 mb-3" style={{ height: 320 }}>
                <div className="flex-[2] min-h-[180px] md:min-h-0">
                  <GalleryThumb src={hero} index={0} onClick={() => setLightboxIndex(0)} />
                </div>
                {pair.length > 0 && (
                  <div className="flex flex-row md:flex-col gap-3 flex-1 min-h-[140px]">
                    {pair.map((src, j) => (
                      <div key={j} className="flex-1">
                        <GalleryThumb src={src} index={j + 1} onClick={() => setLightboxIndex(j + 1)} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Remaining: 3-col grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {rest.map((src, i) => (
                  <motion.div key={i} variants={scaleIn} data-cursor-glow
                    className="relative cursor-pointer overflow-hidden rounded-xl group aspect-[4/3]"
                    style={{ border: BORDER }}
                    onClick={() => setLightboxIndex(i + 3)}
                    whileHover={HOVER}
                    transition={{ duration: 0.2 }}>
                    <DevAssetLabel path={src}>
                      <img src={src} alt={`Photo ${i + 4}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </DevAssetLabel>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
                      style={{ background: OVERLAY }}>
                      <img src="/assets/diya.png" alt="" className="lantern-glow" style={{ width: 36, height: 'auto' }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox images={images} currentIndex={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </>
  )
}
