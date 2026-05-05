import Navbar from '@/components/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Funnel from '@/components/home/Funnel'
import Products from '@/components/home/Products'
import WhyUs from '@/components/home/WhyUs'
import Pricing from '@/components/home/Pricing'
import FAQ from '@/components/home/FAQ'
import Contact from '@/components/home/Contact'
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
