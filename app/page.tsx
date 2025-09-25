import CallToAction from '@/components/call-to-action'
import CommunitySection from '@/components/content-6'
import FeaturesSection from '@/components/features-9'
import HeroSection from '@/components/hero-section'
import IntegrationsSection from '@/components/integrations-7'
import LogoCloud from '@/components/logo-cloud'
import Pricing from '@/components/pricing'
import PricingComparator from '@/components/pricing-comparator'
import StatsSection from '@/components/stats'
import TeamSection from '@/components/team'
import WallOfLoveSection from '@/components/testimonials'
import { Content } from 'next/font/google'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <IntegrationsSection />
      <CommunitySection />
      <StatsSection />
      <TeamSection />
      <WallOfLoveSection/>
      <CallToAction />
      <Pricing />
      <PricingComparator />
    </div>
  )
}
