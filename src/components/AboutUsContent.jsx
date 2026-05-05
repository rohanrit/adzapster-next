'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import BuiltProperly from './sections/BuiltProperly'
import Challenges from './sections/Challenges'
import BetterWay from './sections/BetterWay'
import InHouseTeam from './sections/InHouseTeam'
import ComplexityToClarity from './sections/ComplexityToClarity'
import GreatThingsSection from './sections/GreatThingsSection'

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
    <main className="bg-black text-white">
      <BuiltProperly />
      <Challenges />
      <BetterWay />
      <InHouseTeam />
      <ComplexityToClarity />
      <GreatThingsSection />
    </main>
  )
}
