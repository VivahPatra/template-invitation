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
            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {images.map((src, i) => (
                <motion.div key={i} variants={scaleIn}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => setLightboxIndex(i)}>
                  <div className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.2)]"
                    style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
                    <img src={src} alt={`Photo ${i + 1}`}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1' }}
                      loading="lazy" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }}>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-sans text-[10px] text-white/70">{i + 1} / {images.length}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

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
