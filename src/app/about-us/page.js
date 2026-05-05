import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/aboutus/Hero'
import Mission from '@/components/aboutus/Mission'
import Leadership from '@/components/aboutus/Leadership'
import BuiltProperly from '@/components/aboutus/BuiltProperly'
import Challenges from '@/components/aboutus/Challenges'
import BetterWay from '@/components/aboutus/BetterWay'
import InHouseTeam from '@/components/aboutus/InHouseTeam'
import ComplexityToClarity from '@/components/aboutus/ComplexityToClarity'
import GreatThingsSection from '@/components/aboutus/GreatThingsSection'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata = {
  title: 'About Us | Adzapster',
  description: 'Adzapster bridges the gap between massive algorithmic data and human-centric marketing.',
}

export default function AboutUs() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="bg-black text-white" suppressHydrationWarning>
        <div className="relative" style={{ position: 'relative' }}>
          <Hero />
          <Mission />
          <Leadership />
          <BuiltProperly />
          <Challenges />
          <BetterWay />
          <InHouseTeam />
          <ComplexityToClarity />
          <GreatThingsSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
