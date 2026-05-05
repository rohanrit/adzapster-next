import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/careers/Hero'
import Innovation from '@/components/careers/Innovation'
import Perks from '@/components/careers/Perks'
import Openings from '@/components/careers/Openings'

export const metadata = {
  title: 'Careers | Adzapster',
  description: 'Join a team of visionaries, data scientists, and engineers building the world\'s fastest real-time bidding infrastructure.',
}

export default function Careers() {
  return (
    <>
      <Navbar />
      <Hero />
      <Innovation />
      <Perks />
      <Openings />
      <Footer />
    </>
  )
}
