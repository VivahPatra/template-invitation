'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Divider from '@/components/ui/Divider'
import { fadeUp, scaleIn, staggerFast } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const SAMPLE_WISHES = [
  { name: 'Meera Joshi', message: 'Wishing you both a lifetime of joy, laughter, and endless love! 💕', time: '2 days ago' },
  {
    name: 'Rahul & Nisha',
    message: 'May your journey together be filled with beautiful memories. So happy for you both!',
    time: '3 days ago',
  },
  { name: 'Aunty Savitri', message: 'Bahut bahut badhai ho! God bless this beautiful couple. 🙏', time: '5 days ago' },
]

export default function GuestbookSection() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSubmitted(true)
    setName('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <SectionWrapper id="guestbook" className="py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <SectionHeading en="Leave Your Wishes" hi="शुभकामनाएं" />
          <Divider />
        </div>

        {/* Wish form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="rounded-2xl p-6 mb-8 flex flex-col gap-4"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none"
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            required
          />
          <textarea
            placeholder="Write your wishes for the couple..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none resize-none"
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
            required
          />
          <button
            type="submit"
            className="self-end flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-semibold"
            style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
          >
            <Send size={15} />
            Send Wishes
          </button>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              className="text-center mb-6 font-sans text-sm"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ✦ Your wish has been noted! Backend coming soon.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sample wishes */}
        <motion.div
          className="flex flex-col gap-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SAMPLE_WISHES.map((wish, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="rounded-xl p-5"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-serif font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                  {wish.name}
                </p>
                <p className="font-sans text-xs" style={{ color: 'var(--color-muted)' }}>
                  {wish.time}
                </p>
              </div>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {wish.message}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
