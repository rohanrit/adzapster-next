import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | AdTech Dynamics',
  description: 'Let\'s engineer your programmatic future. Our specialists are ready to help you optimize campaign performance.',
}

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
        <header className="mb-xl text-center md:text-left max-w-3xl">
          <span className="inline-block px-3 py-1 mb-base text-label-sm font-bold uppercase tracking-widest text-primary bg-primary-fixed rounded-full">
            Contact Our Team
          </span>
          <h1 className="font-display-lg text-display-lg text-on-background mb-md">Let's engineer your programmatic future.</h1>
          <p className="font-body-lg text-body-lg text-tertiary">Our specialists are ready to help you optimize campaign performance and navigate the complexities of global ad exchanges.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <section className="lg:col-span-7 bg-surface-container p-md border border-outline-variant rounded-xl shadow-lg">
            <div className="mb-md pb-base border-b border-outline-variant/30">
              <h2 className="font-headline-md text-headline-md text-on-background">Send a Message</h2>
            </div>
            <form className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-tertiary">First Name</label>
                  <input 
                    className="w-full px-md py-3 bg-background border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-on-background"
                    placeholder="John"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-tertiary">Last Name</label>
                  <input 
                    className="w-full px-md py-3 bg-background border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-on-background"
                    placeholder="Doe"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-tertiary">Business Email</label>
                <input 
                  className="w-full px-md py-3 bg-background border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-on-background"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-tertiary">Industry</label>
                <select className="w-auto px-md py-3 bg-background border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-on-background">
                  <option>E-commerce</option>
                  <option>SaaS</option>
                  <option>FinTech</option>
                  <option>Media & Publishing</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-tertiary">Message</label>
                <textarea 
                  className="w-full px-md py-3 bg-background border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-on-background"
                  placeholder="How can we help scale your performance?"
                  rows="4"
                ></textarea>
              </div>
              <button 
                className="w-full md:w-auto px-xl py-md bg-primary text-on-primary font-headline-md text-headline-md rounded-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-base"
                type="submit"
              >
                Send Inquiry
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </section>

          <aside className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="bg-surface-container p-md rounded-xl border border-outline-variant/30 space-y-md">
              <h3 className="font-headline-md text-headline-md text-on-background">Direct Support</h3>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-lg shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Technical Assistance</p>
                  <p className="font-body-md text-body-md text-on-background">support@adtechdynamics.com</p>
                  <p className="font-label-sm text-label-sm text-tertiary mt-xs">24/7 Priority support for Enterprise clients.</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-lg shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-primary">business_center</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Sales Inquiries</p>
                  <p className="font-body-md text-body-md text-on-background">+1 (888) 555-0192</p>
                  <p className="font-label-sm text-label-sm text-tertiary mt-xs">Mon - Fri, 9am - 6pm EST.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container shadow-sm">
              <div className="h-48 w-full bg-surface-dim relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpbiDlhioFUGzkCxcf7bAEJ4JHqjKClecqf27yAfglJqAjVjsxnGKp8mVFLvZfIK7706OWg3Su8sJk1WVxYl9VN3LameqV0GAzcNAwIUKwxnU7t9Pmhx_JgvUStSh-s30Gz-bL-lpyKx4v220UEtzbdZ-hfxVeySEihI4XTLb14yd1el8pyyt-HlguENnjTZ1t4SSQ_EcHV7JDafWJlMt6A8WriZBKDDrN71kFjHz7HopFZLtfjlOo8UyYafjIifGRWiFY1Enp-W7Q"
                  alt="Office"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="bg-surface-container px-md py-base rounded-full shadow-lg flex items-center gap-base border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="font-label-md text-on-background">New York HQ</span>
                  </div>
                </div>
              </div>
              <div className="p-md">
                <h3 className="font-headline-md text-headline-md text-on-background mb-base">Global Headquarters</h3>
                <p className="font-body-md text-body-md text-tertiary">
                  One World Trade Center, Suite 85<br />
                  New York, NY 10007<br />
                  United States
                </p>
                <div className="mt-md pt-md border-t border-outline-variant/30 flex gap-gutter">
                  <div>
                    <p className="font-label-md text-primary uppercase tracking-widest text-[10px]">EMEA Hub</p>
                    <p className="font-body-md text-on-background">London, UK</p>
                  </div>
                  <div>
                    <p className="font-label-md text-primary uppercase tracking-widest text-[10px]">APAC Hub</p>
                    <p className="font-body-md text-on-background">Singapore</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
