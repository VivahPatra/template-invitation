'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import ParallaxLanterns from '@/components/ui/ParallaxLanterns'
import PeacockDivider from '@/components/ui/PeacockDivider'
import DiDecor from '@/components/ui/DiDecor'
import HeroSection from '@/components/sections/HeroSection'
import InvitationSection from '@/components/sections/InvitationSection'
import CoupleStory from '@/components/sections/CoupleStory'
import GallerySection from '@/components/sections/GallerySection'
import EventsSection from '@/components/sections/EventsSection'
import RSVPSection from '@/components/sections/RSVPSection'
import CountdownSection from '@/components/sections/CountdownSection'
import InfoSection from '@/components/sections/InfoSection'
import FooterSection from '@/components/sections/FooterSection'

export default function WeddingPage() {
  const [loading, setLoading] = useState(true)

  return (
    <WeddingDataProvider>
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <FloatingFABs />
          <ParallaxLanterns />
          <div className="relative overflow-x-hidden">
            <main>
              <HeroSection />
              <PeacockDivider />
              <DiDecor />
              <InvitationSection />
              <PeacockDivider />
              <DiDecor />
              <CoupleStory />
              <PeacockDivider />
              <DiDecor />
              <GallerySection />
              <PeacockDivider />
              <DiDecor />
              <EventsSection />
              <PeacockDivider />
              <DiDecor />
              <RSVPSection />
              <PeacockDivider />
              <DiDecor />
              <CountdownSection />
              <PeacockDivider />
              <DiDecor />
              <InfoSection />
              <FooterSection />
            </main>
          </div>
        </>
      )}
    </WeddingDataProvider>
  )
}
