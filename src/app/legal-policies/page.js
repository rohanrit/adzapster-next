import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import TiltCard from '@/components/TiltCard'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Legal Policies | AdTech Dynamics',
  description: 'Our commitment to data privacy, ethical advertising, and regulatory compliance.',
}

const legalShapes = [
  { type: 'cube', size: 45, color: 'pink', position: { top: '12%', right: '10%' }, depth: 0.3, rotate: { x: -15, y: 40 } },
  { type: 'donut', size: 65, thickness: 10, color: 'purple', position: { bottom: '25%', left: '8%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 38, color: 'orange', position: { top: '65%', right: '15%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
]

export default function LegalPolicies() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section - matches landing page Hero/About style */}
      <section className="section section--white">
        <FloatingShapes shapes={legalShapes} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Legal Infrastructure</span>
          <SectionHeading>
            Our commitment to <span className="gradient-text">compliance</span>.
          </SectionHeading>
          <p className="section-subtitle">
            Data privacy, ethical advertising, and regulatory compliance across global jurisdictions.
          </p>
        </div>
      </section>

      {/* Legal Content Section - matches landing page Services style */}
      <section className="section section--light">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-gutter">
            {/* Table of Contents - Sticky Desktop Sidebar */}
            <aside className="md:w-1/4 hidden md:block">
              <div className="sticky top-40 space-y-md">
                <h3 className="font-label-md text-primary uppercase tracking-widest text-xs border-b border-outline-variant/30 pb-base">Directory</h3>
                <nav className="flex flex-col gap-sm">
                  <a className="font-body-md text-primary font-bold border-l-2 border-primary pl-base" href="#privacy">Privacy Policy</a>
                  <a className="font-body-md text-tertiary hover:text-primary transition-colors pl-base border-l-2 border-transparent" href="#terms">Terms of Service</a>
                  <a className="font-body-md text-tertiary hover:text-primary transition-colors pl-base border-l-2 border-transparent" href="#cookie">Cookie Policy</a>
                  <a className="font-body-md text-tertiary hover:text-primary transition-colors pl-base border-l-2 border-transparent" href="#gdpr">GDPR Compliance</a>
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className="md:w-3/4 space-y-xl">
              {/* Privacy Policy */}
              <section className="card p-lg multi-gradient-card" id="privacy">
                <div className="flex items-center gap-base mb-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-lg shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-primary">policy</span>
                  </div>
                  <h2 className="font-headline-lg text-on-background">Privacy Policy</h2>
                </div>
                <div className="font-body-md text-tertiary space-y-md">
                  <p>Last Updated: October 24, 2024</p>
                  <p>AdTech Dynamics operates with a "Privacy by Design" philosophy. This section outlines how we collect, process, and protect data across our programmatic ecosystem.</p>
                  <h3 className="font-headline-md text-on-background text-body-lg">1. Data Collection</h3>
                  <p>We collect non-personally identifiable information (Non-PII) to facilitate real-time bidding, including device type, operating system, and IP address (anonymized).</p>
                  <h3 className="font-headline-md text-on-background text-body-lg">2. Data Usage</h3>
                  <p>Data is used exclusively for bid optimization, frequency capping, and fraud detection. We do not sell raw data to third-party brokers.</p>
                </div>
              </section>

              {/* Terms of Service */}
              <section className="card p-lg multi-gradient-card" id="terms">
                <div className="flex items-center gap-base mb-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-lg shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-primary">gavel</span>
                  </div>
                  <h2 className="font-headline-lg text-on-background">Terms of Service</h2>
                </div>
                <div className="font-body-md text-tertiary space-y-md">
                  <h3 className="font-headline-md text-on-background text-body-lg">1. Platform Usage</h3>
                  <p>By accessing the AdTech Dynamics DSP/SSP, users agree to abide by our fair-use policy. Automated scraping or reverse engineering of our bidding algorithms is strictly prohibited.</p>
                  <h3 className="font-headline-md text-on-background text-body-lg">2. Financial Terms</h3>
                  <p>Net-30 payment terms apply to all managed service contracts unless otherwise specified in the signed Insertion Order (IO).</p>
                </div>
              </section>

              {/* Cookie Policy */}
              <section className="card p-lg multi-gradient-card" id="cookie">
                <div className="flex items-center gap-base mb-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant rounded-lg shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-primary">cookie</span>
                  </div>
                  <h2 className="font-headline-lg text-on-background">Cookie Policy</h2>
                </div>
                <div className="font-body-md text-tertiary space-y-md">
                  <p>We use cookies to improve your experience and optimize our bidding technology. Cookies help us remember your preferences and understand how you interact with our platform.</p>
                  <h3 className="font-headline-md text-on-background text-body-lg">1. Necessary Cookies</h3>
                  <p>These are essential for the operation of our platform, including session management and security.</p>
                  <h3 className="font-headline-md text-on-background text-body-lg">2. Analytics Cookies</h3>
                  <p>We use anonymized analytics to track platform performance and identify areas for improvement.</p>
                </div>
              </section>

              {/* GDPR */}
              <section className="card p-lg bg-on-background text-background relative overflow-hidden" id="gdpr">
                <div className="absolute top-0 right-0 p-md opacity-20">
                  <span className="material-symbols-outlined text-[120px]">verified_user</span>
                </div>
                <div className="relative z-10">
                  <h2 className="font-headline-lg mb-md text-background">GDPR & CCPA Compliance</h2>
                  <p className="font-body-md mb-md opacity-90 max-w-2xl text-tertiary">
                    We are fully compliant with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). Users have the right to request data deletion or "Do Not Sell My Info" status via our automated portal.
                  </p>
                  <button className="btn btn-primary">
                    Access Data Portal
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
