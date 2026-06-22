import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Priya',
  groomName: 'Aryan',
  brideNameHindi: 'प्रिया',
  groomNameHindi: 'आर्यन',
  groomParents: 'Mr. Rajesh Sharma & Mrs. Sunita Sharma',
  brideParents: 'Mr. Vijay Gupta & Mrs. Meena Gupta',
  weddingDate: new Date('2026-11-15T10:00:00'),
  hashtag: '#AryanWedsPriya',
  contactPhone: '+919876543210',

  heroImage: '/assets/hero.jpg',
  heroVideo: '/assets/hero-video.mp4',
  bridePhoto: '/assets/bride.jpg',
  groomPhoto: '/assets/groom.jpg',
  invitationMusic: '/assets/music.mp3',

  galleryImages: [
    '/assets/gallery/gallery-1.jpg',
    '/assets/gallery/gallery-2.jpg',
    '/assets/gallery/gallery-3.jpg',
    '/assets/gallery/gallery-4.jpg',
    '/assets/gallery/gallery-5.jpg',
    '/assets/gallery/gallery-6.jpg',
    '/assets/gallery/gallery-7.jpg',
    '/assets/gallery/gallery-8.jpg',
  ],

  blessings: [
    {
      name: 'Ram Prasad Sharma',
      nameHindi: 'राम प्रसाद शर्मा',
      relation: "Groom's Grandfather",
      relationHindi: 'दादाजी',
      photo: '/assets/family/groom-grandfather.jpg',
      message: 'May God bless this union with love, happiness, and everlasting prosperity.',
    },
    {
      name: 'Savitri Devi Sharma',
      nameHindi: 'सावित्री देवी शर्मा',
      relation: "Groom's Grandmother",
      relationHindi: 'दादीजी',
      photo: '/assets/family/groom-grandmother.jpg',
      message: 'Wishing you a lifetime of togetherness, trust, and divine grace.',
    },
    {
      name: 'Rajesh & Sunita Sharma',
      nameHindi: 'राजेश एवं सुनीता शर्मा',
      relation: "Groom's Parents",
      relationHindi: 'माता-पिता',
      photo: '/assets/family/groom-parents.jpg',
      message: 'With immense joy we invite you to witness the wedding of our beloved son Aryan.',
    },
    {
      name: 'Vijay & Meena Gupta',
      nameHindi: 'विजय एवं मीना गुप्ता',
      relation: "Bride's Parents",
      relationHindi: 'माता-पिता',
      photo: '/assets/family/bride-parents.jpg',
      message: "With heartfelt blessings we invite you to celebrate our daughter Priya's wedding.",
    },
  ],

  coupleStory: [
    {
      date: 'March 2022',
      title: 'First Meeting',
      titleHindi: 'पहली मुलाकात',
      description: "We met at a mutual friend's birthday party in Mumbai. One conversation turned into hours.",
      image: '/assets/story/story-1.jpg',
    },
    {
      date: 'December 2022',
      title: 'First Date',
      titleHindi: 'पहली डेट',
      description: 'A rainy evening, hot chai, and a walk along Marine Drive. We knew something was different.',
      image: '/assets/story/story-2.jpg',
    },
    {
      date: 'February 2024',
      title: 'The Proposal',
      titleHindi: 'प्रपोज़ल',
      description: "Aryan proposed at the same café where we had our first date. She said yes before he finished the sentence.",
      image: '/assets/story/story-3.jpg',
    },
    {
      date: 'November 2026',
      title: 'The Wedding',
      titleHindi: 'विवाह',
      description: "Surrounded by family and friends, we begin our forever. We're so glad you're here.",
      image: '/assets/story/story-4.jpg',
    },
  ],

  events: [
    {
      id: 'engagement',
      name: 'Engagement',
      nameHindi: 'सगाई',
      date: 'November 11, 2026',
      time: '6:00 PM',
      venue: 'Taj Palace Hotel',
      venueAddress: 'Sardar Patel Marg, New Delhi 110021',
      venueMapLink: 'https://maps.google.com/?q=Taj+Palace+Hotel+New+Delhi',
      image: '/assets/events/engagement.png',
    },
    {
      id: 'mehendi',
      name: 'Mehendi',
      nameHindi: 'मेहंदी',
      date: 'November 12, 2026',
      time: '11:00 AM',
      venue: 'Sharma Residence',
      venueAddress: 'B-42, Vasant Vihar, New Delhi 110057',
      venueMapLink: 'https://maps.google.com/?q=Vasant+Vihar+New+Delhi',
      image: '/assets/events/mehendi.png',
    },
    {
      id: 'haldi',
      name: 'Haldi',
      nameHindi: 'हल्दी',
      date: 'November 13, 2026',
      time: '10:00 AM',
      venue: 'Sharma Residence',
      venueAddress: 'B-42, Vasant Vihar, New Delhi 110057',
      venueMapLink: 'https://maps.google.com/?q=Vasant+Vihar+New+Delhi',
      image: '/assets/events/haldi.png',
    },
    {
      id: 'sangeet',
      name: 'Sangeet',
      nameHindi: 'संगीत',
      date: 'November 13, 2026',
      time: '7:00 PM',
      venue: 'The Grand Ballroom',
      venueAddress: 'Nelson Mandela Marg, New Delhi 110070',
      venueMapLink: 'https://maps.google.com/?q=The+Grand+New+Delhi',
      image: '/assets/events/sangeet.png',
    },
    {
      id: 'wedding',
      name: 'Wedding',
      nameHindi: 'विवाह',
      date: 'November 15, 2026',
      time: '10:00 AM',
      venue: 'ISKCON Temple Grounds',
      venueAddress: 'Hare Krishna Hill, Sant Nagar, New Delhi 110019',
      venueMapLink: 'https://maps.google.com/?q=ISKCON+New+Delhi',
      image: '/assets/events/wedding.png',
    },
    {
      id: 'reception',
      name: 'Reception',
      nameHindi: 'रिसेप्शन',
      date: 'November 15, 2026',
      time: '7:00 PM',
      venue: 'Taj Palace Hotel',
      venueAddress: 'Sardar Patel Marg, New Delhi 110021',
      venueMapLink: 'https://maps.google.com/?q=Taj+Palace+Hotel+New+Delhi',
      image: '/assets/events/reception.png',
    },
  ],

  venue: {
    name: 'Taj Palace Hotel',
    address: 'Sardar Patel Marg, Diplomatic Enclave, New Delhi 110021',
    mapLink: 'https://maps.google.com/?q=Taj+Palace+Hotel+New+Delhi',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.167!2d77.1882!3d28.5985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df3d2a5355b%3A0x8b3a8ad3e7b0f0e5!2sTaj%20Palace%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1',
    directionsUrl: 'https://maps.google.com/maps/dir//Taj+Palace+Hotel+New+Delhi',
    accommodations: [
      { name: 'The Leela Palace', distance: '2.1 km', bookingUrl: 'https://www.theleela.com' },
      { name: 'ITC Maurya', distance: '1.3 km', bookingUrl: 'https://www.itchotels.com' },
      { name: 'The Lodhi', distance: '3.4 km', bookingUrl: 'https://www.thelodhi.com' },
    ],
  },

  familyBride: [
    { name: 'Vijay Gupta', relation: 'Father', photo: '/assets/family/bride-father.jpg', side: 'bride' },
    { name: 'Meena Gupta', relation: 'Mother', photo: '/assets/family/bride-mother.jpg', side: 'bride' },
    { name: 'Rohit Gupta', relation: 'Brother', photo: '/assets/family/bride-brother.jpg', side: 'bride' },
    { name: 'Neha Gupta', relation: 'Sister', photo: '/assets/family/bride-sister.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'Rajesh Sharma', relation: 'Father', photo: '/assets/family/groom-father.jpg', side: 'groom' },
    { name: 'Sunita Sharma', relation: 'Mother', photo: '/assets/family/groom-mother.jpg', side: 'groom' },
    { name: 'Aditya Sharma', relation: 'Brother', photo: '/assets/family/groom-brother.jpg', side: 'groom' },
    { name: 'Kavya Sharma', relation: 'Sister', photo: '/assets/family/groom-sister.jpg', side: 'groom' },
  ],

  infoCards: [
    {
      icon: '👗',
      title: 'Dress Code',
      titleHindi: 'ड्रेस कोड',
      description:
        'Traditional Indian attire preferred. For Wedding & Reception: formal ethnic wear. For Mehendi & Haldi: bright colors welcome.',
    },
    {
      icon: '#️⃣',
      title: 'Wedding Hashtag',
      titleHindi: 'हैशटैग',
      description:
        'Share your photos with #AryanWedsPriya on Instagram. The best photos will be featured in our album.',
    },
    {
      icon: '🅿️',
      title: 'Parking',
      titleHindi: 'पार्किंग',
      description:
        'Complimentary valet parking available at all venues. Please carry your invitation card for priority parking.',
    },
    {
      icon: '🏨',
      title: 'Accommodation',
      titleHindi: 'आवास',
      description:
        'Special rates available at The Leela Palace and ITC Maurya for wedding guests. Mention "Aryan-Priya Wedding" when booking.',
    },
    {
      icon: '🌤️',
      title: 'Weather',
      titleHindi: 'मौसम',
      description: 'November in Delhi is pleasant — 12°C to 26°C. Light shawl recommended for evening events.',
    },
    {
      icon: '🎁',
      title: 'Gift Registry',
      titleHindi: 'उपहार',
      description:
        'Your presence is the greatest gift. If you wish to give, a contribution to our honeymoon fund is appreciated.',
    },
  ],

  rsvp: {
    whatsappNumber: '919876543210',
    whatsappMessage: 'Hi! I would like to RSVP for the Aryan & Priya wedding. Name: [Your Name], Number of guests: [Count]',
    googleFormUrl: 'https://forms.google.com/your-rsvp-form-id',
  },

  socialLinks: {
    instagram: 'https://instagram.com/aryanwedspriya',
    youtube: 'https://youtube.com/@aryanwedspriya',
  },

  seo: {
    title: 'Aryan & Priya Wedding — November 15, 2026',
    description:
      'Join us to celebrate the wedding of Aryan Sharma and Priya Gupta on November 15, 2026 in New Delhi.',
    ogImage: '/assets/og-image.jpg',
    url: 'https://aryanwedspriya.com',
  },

  defaultTheme: 'gold',
}
