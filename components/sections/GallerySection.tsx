'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import Lightbox from '@/components/ui/Lightbox'
import { scaleIn, staggerFast, fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const BG = 'linear-gradient(160deg, #141e12 0%, #1e2e1a 50%, #182618 100%)'

export default function GallerySection() {
  const weddingData = useWeddingData()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const images = weddingData.galleryImages
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % images.length))

  return (
    <>
      <SectionWrapper id="gallery" className="py-24" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <SectionHeading en="Gallery" hi="तस्वीरें" />
            <Divider />
          </div>

          <motion.div className="mt-8" variants={staggerFast} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {/* Polaroid-style masonry grid */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {images.map((src, i) => (
                <motion.div key={i} variants={scaleIn}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setLightboxIndex(i)}>
                  {/* Polaroid frame */}
                  <div className="rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.25)]"
                    style={{
                      background: 'linear-gradient(145deg, #f5f0e4 0%, #ece5d4 100%)',
                      padding: '8px 8px 32px 8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                    }}>
                    <div className="relative overflow-hidden rounded-sm">
                      <img src={src} alt={`Photo ${i + 1}`}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
                        loading="lazy" />
                      {/* Subtle film grain overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />
                    </div>
                    {/* Caption area */}
                    <div className="pt-2 text-center">
                      <p className="font-display text-[10px] tracking-wider" style={{ color: '#8a7a6a' }}>
                        {weddingData.groomName} & {weddingData.brideName}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative corner ornament */}
            <motion.div variants={fadeUp} className="flex justify-center mt-10">
              <div className="flex items-center gap-4">
                <div className="h-px w-16" style={{ background: 'var(--color-accent)', opacity: 0.3 }} />
                <span className="font-display text-sm tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)', opacity: 0.5 }}>
                  {weddingData.hashtag}
                </span>
                <div className="h-px w-16" style={{ background: 'var(--color-accent)', opacity: 0.3 }} />
              </div>
            </motion.div>
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
