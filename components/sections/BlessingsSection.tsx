'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import DevAssetLabel from '@/components/ui/DevAssetLabel'
import { scaleIn, staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function BlessingsSection() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  return (
    <SectionWrapper id="blessings" className="py-24" style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading en="Blessings" hi="आशीर्वाद" />
        <Divider />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {d.blessings.map((blessing, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              data-cursor-glow
              className="rounded-2xl p-6 text-left flex flex-col gap-4"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              whileHover={{ boxShadow: '0 0 40px rgba(201,168,76,0.25), 0 8px 32px rgba(0,0,0,0.25)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                {blessing.photo && (
                  <DevAssetLabel path={blessing.photo} className="flex-shrink-0">
                    <div
                      className="relative w-16 h-16 rounded-full overflow-hidden border-2"
                      style={{ borderColor: 'var(--color-accent-dim)' }}
                    >
                      <Image src={blessing.photo} alt={blessing.name} fill className="object-cover" />
                    </div>
                  </DevAssetLabel>
                )}
                <div>
                  <EditableText field="name" index={i} arrayField="blessings" tag="p"
                    className="font-serif font-semibold text-base"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {blessing.name}
                  </EditableText>
                  <EditableText field="relation" index={i} arrayField="blessings" tag="p"
                    className="font-sans text-xs tracking-wide mt-0.5"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {blessing.relation}
                  </EditableText>
                </div>
              </div>
              <EditableText field="message" index={i} arrayField="blessings" tag="p" multiline
                className="font-serif text-sm leading-relaxed italic"
                style={{ color: 'var(--color-text)', opacity: 0.8 }}
              >
                &ldquo;{blessing.message}&rdquo;
              </EditableText>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
