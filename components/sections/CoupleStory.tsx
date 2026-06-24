'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useWeddingData } from '@/context/WeddingDataContext'
import { useEditMode } from '@/context/EditModeContext'
import EditableText from '@/components/ui/EditableText'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import DevAssetLabel from '@/components/ui/DevAssetLabel'
import { fadeUp, slideLeft, slideRight } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CoupleStory() {
  const weddingData = useWeddingData()
  const { isEditing, data: editData } = useEditMode()
  const d = isEditing ? editData : weddingData
  return (
    <SectionWrapper id="story" className="py-24" style={{ background: 'linear-gradient(160deg, #1e1408 0%, #2e2010 50%, #261a0c 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Our Story" hi="हमारी कहानी" />
          <Divider />
        </div>

        {/* Desktop: alternating timeline */}
        <div className="relative hidden md:block">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'var(--color-accent-dim)' }}
          />
          {d.coupleStory.map((milestone, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className={`relative flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content card */}
                <motion.div
                  className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  variants={isLeft ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <EditableText field="date" index={i} arrayField="coupleStory" tag="p"
                    className="font-sans text-xs tracking-widest uppercase mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {milestone.date}
                  </EditableText>
                  <EditableText field="title" index={i} arrayField="coupleStory" tag="h3"
                    className="font-display text-3xl mb-3"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {milestone.title}
                  </EditableText>
                  <EditableText field="description" index={i} arrayField="coupleStory" tag="p" multiline
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {milestone.description}
                  </EditableText>
                </motion.div>

                {/* Center dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 z-10"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  />
                </div>

                {/* Image */}
                <div className={`w-5/12 ${isLeft ? 'pl-12' : 'pr-12'}`}>
                  {milestone.image && (
                    <motion.div
                      variants={isLeft ? slideRight : slideLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-80px' }}
                    >
                      <DevAssetLabel path={milestone.image}>
                        <motion.div
                          data-cursor-glow
                          className="relative h-52 rounded-2xl overflow-hidden"
                          style={{ border: '1px solid var(--color-border)' }}
                          whileHover={{ boxShadow: '0 0 40px rgba(201,168,76,0.3)' }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image src={milestone.image} alt={milestone.title} fill className="object-cover" />
                        </motion.div>
                      </DevAssetLabel>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile/tablet: centered vertical timeline */}
        <div className="relative md:hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'var(--color-accent-dim)' }}
          />
          {d.coupleStory.map((milestone, i) => (
            <motion.div
              key={i}
              className="relative pb-14 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Centered dot */}
              <div className="flex justify-center mb-3">
                <div
                  className="w-3 h-3 rounded-full border-2 z-10 relative"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}
                />
              </div>
              <EditableText field="date" index={i} arrayField="coupleStory" tag="p"
                className="font-sans text-xs tracking-widest uppercase mb-1"
                style={{ color: 'var(--color-accent)' }}
              >
                {milestone.date}
              </EditableText>
              <EditableText field="title" index={i} arrayField="coupleStory" tag="h3"
                className="font-display text-2xl mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                {milestone.title}
              </EditableText>
              {milestone.image && (
                <DevAssetLabel path={milestone.image} className="mb-3">
                  <div
                    className="relative h-44 rounded-xl overflow-hidden"
                    style={{ border: '1px solid var(--color-border)' }}
                  >
                    <Image src={milestone.image} alt={milestone.title} fill className="object-cover" />
                  </div>
                </DevAssetLabel>
              )}
              <EditableText field="description" index={i} arrayField="coupleStory" tag="p" multiline
                className="font-sans text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)' }}
              >
                {milestone.description}
              </EditableText>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
