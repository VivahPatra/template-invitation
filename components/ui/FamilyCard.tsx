'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FamilyMember } from '@/types/wedding.types'
import { scaleIn } from '@/lib/animations'
import DevAssetLabel from '@/components/ui/DevAssetLabel'

export default function FamilyCard({ member }: { member: FamilyMember }) {
  return (
    <motion.div variants={scaleIn} className="flex flex-col items-center text-center gap-3">
      <DevAssetLabel path={member.photo}>
        <div
          className="relative w-20 h-20 rounded-full overflow-hidden border-2"
          style={{ borderColor: 'var(--color-accent-dim)' }}
        >
          <Image src={member.photo} alt={member.name} fill className="object-cover" loading="lazy" />
        </div>
      </DevAssetLabel>
      <div>
        <p className="font-serif font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
          {member.name}
        </p>
        <p className="font-sans text-xs tracking-wide mt-0.5" style={{ color: 'var(--color-accent)' }}>
          {member.relation}
        </p>
      </div>
    </motion.div>
  )
}
