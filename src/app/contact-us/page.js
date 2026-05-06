import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/contactus/Hero'
import FormSection from '@/components/contactus/FormSection'
import Sidebar from '@/components/contactus/Sidebar'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Contact Us | Adzapster',
  description: "Let's engineer your programmatic future. Our specialists are ready to help you optimize campaign performance.",
}

export default function ContactUs() {
  return (
    <>
       <Navbar />
       <Hero />
      {/* Contact Form & Info Section */}
      <section className="container" id="contact-form">
        <div className="section-container">
          <SectionHeading
            tag="Contact Us"
            title="Start a Conversation"
            subtitle="Fill out the form below or reach out through our direct channels."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <FormSection />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
