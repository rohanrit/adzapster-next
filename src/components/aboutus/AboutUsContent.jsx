'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import BuiltProperly from '@/components/aboutus/sections/BuiltProperly'
import Challenges from '@/components/aboutus/sections/Challenges'
import BetterWay from '@/components/aboutus/sections/BetterWay'
import InHouseTeam from '@/components/aboutus/sections/InHouseTeam'
import ComplexityToClarity from '@/components/aboutus/sections/ComplexityToClarity'
import GreatThingsSection from '@/components/aboutus/sections/GreatThingsSection'

export default function AboutUsContent() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <main className="bg-black text-white" suppressHydrationWarning>
      <BuiltProperly />
      <Challenges />
      <BetterWay />
      <InHouseTeam />
      <ComplexityToClarity />
      <GreatThingsSection />
    </main>
  )
}
