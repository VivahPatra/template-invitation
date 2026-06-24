'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FamilyMember } from '@/types/wedding.types'
import EditableText from '@/components/ui/EditableText'
import { scaleIn } from '@/lib/animations'
import DevAssetLabel from '@/components/ui/DevAssetLabel'

export default function FamilyCard({ member, index, side }: { member: FamilyMember; index: number; side: 'bride' | 'groom' }) {
  const arrayField = side === 'bride' ? 'familyBride' : 'familyGroom'
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
        <EditableText field="name" index={index} arrayField={arrayField} tag="p"
          className="font-serif font-semibold text-sm"
          style={{ color: 'var(--color-text)' }}
        >
          {member.name}
        </EditableText>
        <EditableText field="relation" index={index} arrayField={arrayField} tag="p"
          className="font-sans text-xs tracking-wide mt-0.5"
          style={{ color: 'var(--color-accent)' }}
        >
          {member.relation}
        </EditableText>
      </div>
    </motion.div>
  )
}
