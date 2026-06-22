import { cn } from '@/lib/utils'

export default function Divider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3 my-10', className)}>
      <div className="h-px flex-1 opacity-30" style={{ background: 'var(--color-accent)' }} />
      <span className="text-xs opacity-50" style={{ color: 'var(--color-accent)' }}>✦</span>
      <span className="text-lg glow-pulse" style={{ color: 'var(--color-accent)' }}>❋</span>
      <span className="text-xs opacity-50" style={{ color: 'var(--color-accent)' }}>✦</span>
      <div className="h-px flex-1 opacity-30" style={{ background: 'var(--color-accent)' }} />
    </div>
  )
}
