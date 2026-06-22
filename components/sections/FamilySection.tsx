'use client'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/wedding-data'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import FamilyCard from '@/components/ui/FamilyCard'
import { fadeUp, staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FamilySection() {
  return (
    <SectionWrapper id="family" className="py-24" style={{ background: 'linear-gradient(160deg, #1c0b02 0%, #2e1508 50%, #1a0a00 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Family" hi="परिवार" />
          <Divider />
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-8">
          <div>
            <motion.h3
              variants={fadeUp}
              className="font-display text-3xl text-center mb-8"
              style={{ color: 'var(--color-accent)' }}
            >
              {weddingData.brideName}&apos;s Family
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {weddingData.familyBride.map((m, i) => (
                <FamilyCard key={i} member={m} />
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              variants={fadeUp}
              className="font-display text-3xl text-center mb-8"
              style={{ color: 'var(--color-accent)' }}
            >
              {weddingData.groomName}&apos;s Family
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {weddingData.familyGroom.map((m, i) => (
                <FamilyCard key={i} member={m} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
