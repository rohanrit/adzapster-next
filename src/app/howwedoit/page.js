import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/howwedoit/Hero'
import WhatWeDo from '@/components/howwedoit/WhatWeDo'
import Process from '@/components/howwedoit/Process'
import Infographic from '@/components/howwedoit/Infographic'
import CoreTechnologies from '@/components/howwedoit/CoreTechnologies'
import FAQ from '@/components/howwedoit/FAQ'
import CTA from '@/components/howwedoit/CTA'

export const metadata = {
  title: 'How We Do It | Adzapster',
  description: 'The BIT framework™ ensures your AI Agent is fit for purpose. Discover our proven methodology.',
}

export default function HowWeDoIt() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Process />
      <Infographic />
      <CoreTechnologies />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
