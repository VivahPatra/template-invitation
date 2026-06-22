'use client'
import { motion } from 'framer-motion'
import { weddingData } from '@/data/wedding-data'
import { useCountdown } from '@/lib/useCountdown'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, scaleIn, staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { pad } from '@/lib/utils'

interface UnitProps {
  value: number
  label: string
  labelHindi: string
}

function CountUnit({ value, label, labelHindi }: UnitProps) {
  return (
    <motion.div variants={scaleIn} className="flex flex-col items-center gap-2">
      <div
        className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.28)', backdropFilter: 'blur(4px)' }}
      >
        <motion.span
          key={value}
          className="font-display text-4xl md:text-5xl"
          style={{ color: 'var(--color-accent)' }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {pad(value)}
        </motion.span>
      </div>
      <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
        {label}
      </p>
    </motion.div>
  )
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(weddingData.weddingDate)

  return (
    <SectionWrapper id="countdown" className="py-24" style={{ background: 'linear-gradient(160deg, #1e1408 0%, #2e2010 50%, #261a0c 100%)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading en="Counting Down" hi="उलटी गिनती" />
        <Divider />

        {isPast ? (
          <motion.p variants={fadeUp} className="font-display text-4xl" style={{ color: 'var(--color-accent)' }}>
            💍 We Got Married!
          </motion.p>
        ) : (
          <motion.div
            className="flex justify-center gap-4 md:gap-8 mt-4"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CountUnit value={days} label="Days" labelHindi="दिन" />
            <CountUnit value={hours} label="Hours" labelHindi="घंटे" />
            <CountUnit value={minutes} label="Min" labelHindi="मिनट" />
            <CountUnit value={seconds} label="Sec" labelHindi="सेकंड" />
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}
