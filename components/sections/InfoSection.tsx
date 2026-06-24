'use client'
import { motion } from 'framer-motion'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import InfoCard from '@/components/ui/InfoCard'
import { staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function InfoSection() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  return (
    <SectionWrapper id="info" className="py-24" style={{ background: 'linear-gradient(160deg, #141e12 0%, #1e2e1a 50%, #182618 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Good to Know" hi="जानकारी" />
          <Divider />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {d.infoCards.map((card, i) => (
            <InfoCard key={i} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
