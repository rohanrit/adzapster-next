import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Funnel from '@/components/Funnel'
import Products from '@/components/Products'
import WhyUs from '@/components/WhyUs'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Funnel />
      <Products />
      <WhyUs />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
