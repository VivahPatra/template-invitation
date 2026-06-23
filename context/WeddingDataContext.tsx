'use client'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import type { WeddingConfig } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

/**
 * Shape the editor sends via postMessage with type 'VIVAHPATRA_UPDATE'.
 * We map whatever fields are present onto WeddingConfig, keeping defaults
 * for anything the editor doesn't supply.
 */
interface EditorPayload {
  groomName?: string
  brideName?: string
  groomParents?: string
  brideParents?: string
  groomSubtitle?: string
  brideSubtitle?: string
  weddingDate?: string
  hashtag?: string
  tagline?: string
  invitationText?: string
  heroImage?: string
  bridePhoto?: string
  groomPhoto?: string
  backgroundMusic?: string
  galleryImages?: Array<{ src: string; alt?: string; span?: number }>
  events?: Array<{
    id: string
    name: string
    emoji?: string
    date: string
    time: string
    venue: string
    venueAddress: string
    venueMapLink: string
    description?: string
    color?: string
  }>
  coupleStory?: Array<{
    date: string
    title: string
    description: string
    icon?: string
    image?: string
  }>
  familyBride?: Array<{ name: string; relation: string; photo: string; side?: string }>
  familyGroom?: Array<{ name: string; relation: string; photo: string; side?: string }>
  venueName?: string
  venueAddress?: string
  venueMapUrl?: string
  rsvpPhone?: string
  rsvpMessage?: string
  rsvpDeadline?: string
  instagram?: string
}

function mapEditorToConfig(editor: EditorPayload, base: WeddingConfig): WeddingConfig {
  return {
    ...base,

    // Simple string fields
    ...(editor.groomName != null && { groomName: editor.groomName }),
    ...(editor.brideName != null && { brideName: editor.brideName }),
    ...(editor.groomParents != null && { groomParents: editor.groomParents }),
    ...(editor.brideParents != null && { brideParents: editor.brideParents }),
    ...(editor.hashtag != null && { hashtag: editor.hashtag }),
    ...(editor.heroImage != null && { heroImage: editor.heroImage }),
    ...(editor.bridePhoto != null && { bridePhoto: editor.bridePhoto }),
    ...(editor.groomPhoto != null && { groomPhoto: editor.groomPhoto }),
    ...(editor.backgroundMusic != null && { invitationMusic: editor.backgroundMusic }),

    // Wedding date — parse string to Date
    ...(editor.weddingDate != null && { weddingDate: new Date(editor.weddingDate) }),

    // Gallery — editor sends objects with src; template expects string[]
    ...(editor.galleryImages != null && {
      galleryImages: editor.galleryImages.map((img) => img.src),
    }),

    // Events — editor may omit nameHindi / image; fill from defaults or blank
    ...(editor.events != null && {
      events: editor.events.map((ev, i) => ({
        id: ev.id,
        name: ev.name,
        nameHindi: base.events[i]?.nameHindi ?? '',
        date: ev.date,
        time: ev.time,
        venue: ev.venue,
        venueAddress: ev.venueAddress,
        venueMapLink: ev.venueMapLink,
        image: base.events[i]?.image ?? '',
      })),
    }),

    // Couple story — editor may omit titleHindi
    ...(editor.coupleStory != null && {
      coupleStory: editor.coupleStory.map((s, i) => ({
        date: s.date,
        title: s.title,
        titleHindi: base.coupleStory[i]?.titleHindi ?? '',
        description: s.description,
        ...(s.image != null && { image: s.image }),
      })),
    }),

    // Family members
    ...(editor.familyBride != null && {
      familyBride: editor.familyBride.map((m) => ({
        name: m.name,
        relation: m.relation,
        photo: m.photo,
        side: 'bride' as const,
      })),
    }),
    ...(editor.familyGroom != null && {
      familyGroom: editor.familyGroom.map((m) => ({
        name: m.name,
        relation: m.relation,
        photo: m.photo,
        side: 'groom' as const,
      })),
    }),

    // Venue — partial mapping
    ...(editor.venueName != null || editor.venueAddress != null || editor.venueMapUrl != null
      ? {
          venue: {
            ...base.venue,
            ...(editor.venueName != null && { name: editor.venueName }),
            ...(editor.venueAddress != null && { address: editor.venueAddress }),
            ...(editor.venueMapUrl != null && {
              mapLink: editor.venueMapUrl,
              directionsUrl: editor.venueMapUrl,
            }),
          },
        }
      : {}),

    // RSVP — partial mapping
    ...(editor.rsvpPhone != null || editor.rsvpMessage != null
      ? {
          rsvp: {
            ...base.rsvp,
            ...(editor.rsvpPhone != null && { whatsappNumber: editor.rsvpPhone }),
            ...(editor.rsvpMessage != null && { whatsappMessage: editor.rsvpMessage }),
          },
        }
      : {}),

    // Social links
    ...(editor.instagram != null && {
      socialLinks: { ...base.socialLinks, instagram: editor.instagram },
    }),

    // Contact phone from RSVP phone
    ...(editor.rsvpPhone != null && { contactPhone: editor.rsvpPhone }),
  }
}

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type !== 'VIVAHPATRA_UPDATE') return
      const payload = event.data.payload as EditorPayload | undefined
      if (!payload) return
      setData((prev) => mapEditorToConfig(payload, prev))
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <WeddingDataContext.Provider value={data}>
      {children}
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData(): WeddingConfig {
  return useContext(WeddingDataContext)
}
