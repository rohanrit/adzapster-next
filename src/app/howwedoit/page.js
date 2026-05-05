import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/howwedoit/Hero'
import WhatWeDo from '@/components/howwedoit/WhatWeDo'
import Infographic from '@/components/howwedoit/Infographic'
import CoreTechnologies from '@/components/howwedoit/CoreTechnologies'
import Leadership from '@/components/howwedoit/Leadership'
import ComplexityToClarity from '@/components/howwedoit/ComplexityToClarity'
import WhyChooseUs from '@/components/howwedoit/WhyChooseUs'
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
      <Infographic />
      <CoreTechnologies />
      <Leadership />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <ComplexityToClarity />
      <Footer />
    </div>
  )
}
