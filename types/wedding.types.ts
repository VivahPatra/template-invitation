export interface StoryMilestone {
  date: string
  title: string
  titleHindi: string
  description: string
  image?: string
}

export interface WeddingEvent {
  id: string
  name: string
  nameHindi: string
  date: string
  time: string
  venue: string
  venueAddress: string
  venueMapLink: string
  image: string
}

export interface Blessing {
  name: string
  nameHindi?: string
  relation: string
  relationHindi: string
  photo?: string
  message: string
}

export interface FamilyMember {
  name: string
  relation: string
  photo: string
  side: 'bride' | 'groom'
}

export interface Accommodation {
  name: string
  distance: string
  bookingUrl: string
}

export interface VenueConfig {
  name: string
  address: string
  mapLink: string
  embedUrl: string
  directionsUrl: string
  accommodations: Accommodation[]
}

export interface RSVPConfig {
  whatsappNumber: string
  whatsappMessage: string
  googleFormUrl: string
}

export interface InfoCard {
  icon: string
  title: string
  titleHindi: string
  description: string
}

export interface SocialLinks {
  instagram?: string
  youtube?: string
  facebook?: string
}

export interface SEOConfig {
  title: string
  description: string
  ogImage: string
  url: string
}

export interface WeddingConfig {
  brideName: string
  groomName: string
  brideNameHindi: string
  groomNameHindi: string
  groomParents?: string
  brideParents?: string
  weddingDate: Date
  hashtag: string
  tagline?: string
  heroSubtitle?: string
  heroImage: string
  heroVideo: string
  bridePhoto: string
  groomPhoto: string
  galleryImages: string[]
  invitationMusic: string
  invitationHeading?: string
  invitationSubtitle?: string
  invitationBlessing?: string
  invitationText?: string
  rsvpHeading?: string
  rsvpText?: string
  rsvpDeadline?: string
  blessings: Blessing[]
  coupleStory: StoryMilestone[]
  events: WeddingEvent[]
  venue: VenueConfig
  familyBride: FamilyMember[]
  familyGroom: FamilyMember[]
  infoCards: InfoCard[]
  rsvp: RSVPConfig
  socialLinks: SocialLinks
  seo: SEOConfig
  defaultTheme: 'gold' | 'maroon' | 'emerald'
  contactPhone: string
}
