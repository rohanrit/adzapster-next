'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/services/Hero'
import ServicesGrid from '@/components/services/ServicesGrid'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import FAQ from '@/components/services/FAQ'
import ServiceModal from '@/components/services/ServiceModal'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid onSelectService={setSelectedService} />
      <WhyChooseUs />
      <FAQ />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <Footer />
    </div>
  )
}
