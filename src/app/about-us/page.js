import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | AdTech Dynamics',
  description: 'AdTech Dynamics bridges the gap between massive algorithmic data and human-centric marketing.',
}

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32">
        {/* Hero Section: Identity & Scale */}
        <section className="max-w-7xl mx-auto px-6 mb-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full font-label-md text-label-md mb-md">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                The Programmatic Authority
              </span>
              <h1 className="font-display-lg text-display-lg text-on-background mb-md">
                Engineering the future of <span className="text-primary-container">Dynamic Advertising</span>.
              </h1>
              <p className="font-body-lg text-body-lg text-tertiary max-w-2xl">
                AdTech Dynamics bridges the gap between massive algorithmic data and human-centric marketing. We
                empower global brands with precision engineering for the programmatic era.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-outline-variant">
                <img 
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhomJP2tw970SKcTYizdcHv6RzI5kAWSkR1vEAE8YxXExIt-b9Sy-FEzPLsal2Odp40vVhzyc4nzrfPQrKDzxrJSZN-bKCwdZxNzrL6zS2r-TJKjTpYFSCexLoR12RAC-bfMcNTShTlGZb-LvKLcQz_RC3qZBW30vxXpm1HNNETgkPJfCBhBDGbvNLQRQe4FvGvOPkv_5GVSGJYN73-zD8s5RThb3E_C4T0vurJpXlfGdsOoRZt8_o36ZcROegpqzOAA8IWRQi9hZU"
                  alt="Data Visualization"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container p-6 rounded-xl shadow-xl border border-outline-variant/30 hidden md:block min-w-[200px]">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-3xl font-bold text-on-background leading-tight">12B+</p>
                    <p className="text-xs font-medium text-tertiary uppercase tracking-wider">Daily Bid Requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision: Bento Grid Layout */}
        <section className="bg-surface-container-low py-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-lg text-center">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Our Core Foundation</h2>
              <p className="font-body-md text-body-md text-tertiary mt-base">Built on reliability, innovation, and absolute transparency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Mission Card */}
              <div className="md:col-span-2 bg-surface-container p-md rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-md">track_changes</span>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-base">Our Mission</h3>
                  <p className="font-body-lg text-body-lg text-tertiary">
                    To democratize advanced programmatic infrastructure by providing high-performance tools
                    that transform complex data into actionable revenue streams. We believe that every ad
                    should deliver value, not just impressions.
                  </p>
                </div>
                <div className="mt-xl grid grid-cols-2 gap-md">
                  <div className="border-l-4 border-primary-container pl-md">
                    <h4 className="font-label-md text-label-md text-on-background">Real-time Clarity</h4>
                    <p className="font-label-sm text-label-sm text-tertiary">Unmatched visibility into every transaction.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-md">
                    <h4 className="font-label-md text-label-md text-on-background">Algorithmic Edge</h4>
                    <p className="font-label-sm text-label-sm text-tertiary">Proprietary AI designed for efficiency.</p>
                  </div>
                </div>
              </div>
              {/* Vision Card */}
              <div className="bg-on-secondary-container p-md rounded-xl shadow-sm flex flex-col text-white">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-md">visibility</span>
                <h3 className="font-headline-md text-headline-md mb-base">Our Vision</h3>
                <p className="font-body-md text-body-md opacity-90 mb-lg">
                  Setting the global standard for ethical, high-velocity advertising where technology serves
                  the user experience and the brand's bottom line simultaneously.
                </p>
                <div className="mt-auto">
                  <img 
                    className="rounded-lg h-32 w-full object-cover grayscale opacity-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIeKoJ1X94FsOY3lBQnDUbrJoeTCVHhvTvc_hUMqaxIktrxr58sZ32RjLQoR_nRaHcKpYcw547qWgZHcRHagJDC5ptkbteyIHCWGzKINEUMO4cGtUHiH2RkkGIXfBbEIkhy9tFAQ6CTZiKY6MSXo89ROiiWdwmgmNqED7PCj7524VFyMWGQDGIisSFLT79rXZAF7KWM96njnn0QOSKydFh1M672QnFomxMlyhEXPnyUK7Q9uSQsWukDT9goNKxcJg_R8OxeEU6triS"
                    alt="Global Connectivity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-6 py-xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-on-background">The Architects</h2>
              <p className="font-body-md text-body-md text-tertiary mt-base">Meet the visionaries combining decades of experience in fintech, data science, and global marketing.</p>
            </div>
            <button className="group flex items-center gap-2 font-label-md text-label-md text-primary hover:text-on-primary-container transition-colors">
              Join the team
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Team Members */}
            {[
              { name: 'Marcus Thorne', role: 'CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcxwCQwK82iIC3CqeWFFlaBdIbjQHtgpRQ-EThqZO1qpaBmnvpTUDxttvgoT0tikU5BIrViLB9FvWQZEeR9UeslqWytCcXaPh9oIpYZ29e05mFx1YFpm9z0cHvPBovW3DUDJUSaxM-9vbu_pnano3R4uFbRNU0wcdKgqRKBADNI5IoG18VEvIYcYpiQUiNEP6QzindUy7rSLWAm2F2W9KnIxP_0iIanPHHqBV8TuTkts0zCYWeIzeF7TCm18nFdySWoQEu7SSxGf7F' },
              { name: 'Sarah Jenkins', role: 'CTO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_gItOrSce2R4oECA7X4dzXhGPjN3IpuBU8YBxZ-P_0ihXdjIojSenftzeCVnIWd5C-oO_RRTCcq84MmhyhOGB2tcDhRMrIG-xuDgd8AqDR6pLoJozhgUILM2kwJvrKGDysjRpIPtkncVq6yOYA_u8XjsYINhNTdYXrDb_86xjoTn67zQ0P0I4BMWzg2tGlP-uCMsU_Uwhe7A65PFl1US5-s7CIzQqxYwBnmbn86lryWYfkNmVqU-9Z0AqLtvQC3S5SJ0iYqex0nPY' },
              { name: 'David Chen', role: 'VP Engineering', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_IWquKlToAH9EuX9BMWrvg-HOqtN41XPnbT4TgAazrK3bHdxK1DxwmZ5Fz2xX_faxbyrOHsGK9ZzTIv2ygbiegPRf7_G0Pa315fZQGgGiudf7_kKjFYLeAl-mO6ncI_oNg-NQM4tkIIhr2n_Tth1QI0NOnS4npI3JUYm6CPvtAAOdggjdTLkpOsZxlQ7GEBylnYBSwt3u26zrd29rqTjbLCcdkU788THwNrAROeGdnZrZ4gJ8vCIWuLwIckfhd9RJuwwJ27AQyaDB' },
              { name: 'Elena Rodriguez', role: 'Head of Ops', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9yD9IXi1Kwgaeqw6qBrXEolT4fHjJSlCP6uhJXQzSPYJ-7VeZItGIO_ljzI-3pdjNHUeHE8ZarihKMktGog_Fxg5CYEXUc6pb9wgjjxCLPiGuu-T9cyitymAoxbTbU38jxgHc2P4nWf23F-jGpOPt-TK4Le3ycdVREMEtTRWmfenLeoJ_WrWTcC-FoIMXkQgPojrxQ3okZe2n3y2QOLNIQX00TikUJaCY9N8v1wz7ESbTiZDNc7fjNOriTccJ7-9qnVNQ_cpcWVJU' },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-md shadow-md border border-outline-variant/10">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-md">
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">link</span>
                      <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary-container">alternate_email</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-background">{member.name}</h4>
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-xl">
          <div className="bg-primary-container rounded-2xl p-xl flex flex-col items-center text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            <h2 className="font-display-lg text-display-lg mb-md relative z-10">Ready to accelerate your dynamic campaigns?</h2>
            <p className="font-body-lg text-body-lg opacity-90 max-w-2xl mb-lg relative z-10">
              Join over 500+ global brands leveraging AdTech Dynamics to scale their programmatic presence with absolute precision.
            </p>
            <div className="flex flex-wrap gap-md relative z-10">
              <button className="bg-white text-primary-container font-bold px-8 py-4 rounded-lg hover:bg-surface-container transition-all active:scale-95 shadow-lg">
                Talk to an Expert
              </button>
              <button className="bg-transparent border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-lg transition-all active:scale-95">
                View Open Roles
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
