'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/services/Hero'
import ServicesGrid from '@/components/services/ServicesGrid'
import WhatWeDo from '@/components/services/WhatWeDo'
import Infographic from '@/components/services/Infographic'
import FAQ from '@/components/services/FAQ'
import ServiceModal from '@/components/services/ServiceModal'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid onSelectService={setSelectedService} />
      <WhatWeDo />
      <Infographic />
      <FAQ />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <Footer />
    </div>
  )
}
