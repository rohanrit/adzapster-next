import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import TiltCard from '@/components/TiltCard'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Careers | Adzapster',
  description: 'Join a team of visionaries, data scientists, and engineers building the world\'s fastest real-time bidding infrastructure.',
}

const careersShapes = [
  { type: 'cube', size: 50, color: 'pink', position: { top: '10%', right: '10%' }, depth: 0.3, rotate: { x: 20, y: -25 } },
  { type: 'donut', size: 80, thickness: 12, color: 'purple', position: { bottom: '15%', left: '5%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 40, color: 'orange', position: { top: '60%', right: '8%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
]

export default function Careers() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section - matches landing page Hero/About section style */}
      <section className="section section--white">
        <FloatingShapes shapes={careersShapes} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">WE ARE HIRING</span>
          <SectionHeading>
            Engineer the future of <span className="gradient-text">programmatic advertising</span>.
          </SectionHeading>
          <p className="section-subtitle">
            Join a team of visionaries, data scientists, and engineers building the world's fastest real-time bidding infrastructure.
          </p>
          <div className="flex flex-wrap gap-base mt-xl">
            <button className="btn btn-primary">
              View Open Roles
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
            <button className="btn btn-outline">
              Our Culture
            </button>
          </div>
          <div className="relative group mt-xl">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
            <img 
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl border border-outline-variant/40 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUEPsLx0i3q6dXMou-PNc-wHj_HtXD6Jy6bVoH-FlGvfbfbhaHImfxgb22ZSI4HW8ZsKIlPnx5fC486XuGJtcRC8E9DJ79pfecYm80uGUmeSJMdI1a4XL2w-GCAJR4tv1w-MYyLXXEBQCIPf4zSdSHbsXDWH328P2BnNmYPr8YpESFIFA449XThqDNPoKyn5BPKhN8z8ZSODS20oOrT4rwolqwqT-JNLm-9Fy4tN_2XVvfdBu8HjsMkHeGOG6l3MudWseZAcU8Ew4Z"
              alt="Adzapster Team"
            />
          </div>
        </div>
      </section>

      {/* Innovation Section - matches landing page Services section style */}
      <section className="section section--light">
        <div className="container">
          <div className="section-header">
            <SectionHeading>
              Innovation is our <span className="gradient-text">baseline</span>.
            </SectionHeading>
            <p className="section-subtitle">We foster an environment where technical excellence meets radical transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-1 card p-lg flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-6xl">bolt</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background relative z-10">High Velocity</h3>
              <p className="font-body-md text-body-md text-tertiary relative z-10">We ship code daily and iterate at the speed of the global market.</p>
            </div>
            <div className="md:col-span-1 md:row-span-1 card p-lg flex flex-col justify-between items-start bg-secondary text-on-primary">
              <span className="material-symbols-outlined text-on-primary text-4xl">public</span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-primary">Remote First</h3>
                <p className="font-body-md text-label-sm text-on-primary/80">Talent has no borders. Work from anywhere in the world.</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-2 card p-lg flex flex-col gap-md bg-on-background">
              <img 
                className="w-full h-48 object-cover rounded-xl grayscale opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKdFq7t5wUB6lsFryiKZjbsgnN8NhhQQLmRIoP5n09BeKVeYNJJ8EUxfrWE8BdOyoEuVNbx7vwxahSvyScAriwkFgWw-XuZ0JIJZl7e69nCPVMUi0n-miCwhTQH5J5hUe_HmJ60rHNKF41HP7BV5hcx5aiUrVYj8aLNFAPf_-m6NuzWDkv37-snWWFWMkEGnsEKu_bOsRQTwUm9dkF1UGNZOYV-OLq7RNiPG4HOKPeVjxvtPehEAatDMkBJLtuPu82jtfEuUWR-14I"
                alt="Continuous Growth"
              />
              <div>
                <h3 className="font-headline-md text-headline-md text-background">Continuous Growth</h3>
                <p className="font-body-md text-label-sm text-tertiary mt-base">Dedicated annual budget for learning, conferences, and certifications for every team member.</p>
              </div>
              <div className="mt-auto pt-md border-t border-outline-variant/30">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-on-background bg-primary/40"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-on-background bg-secondary/40"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-on-background bg-tertiary/40"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-on-background bg-surface-container flex items-center justify-center text-[10px] text-on-background">+42</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 card p-lg flex items-center gap-lg">
              <div className="hidden sm:block w-32 h-32 rounded-full border-4 border-primary/20 p-2 shrink-0">
                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-4xl">verified</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background">Ownership Mindset</h3>
                <p className="font-body-md text-body-md text-tertiary">Every employee receives equity. You are an architect of the company's success, not just a passenger.</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 card p-lg flex flex-col justify-center text-center">
              <div className="text-on-background font-display-lg text-display-lg">0.2ms</div>
              <div className="text-on-background font-label-md uppercase tracking-widest text-xs opacity-60">Our Latency Peak</div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section - matches landing page WhyUs section style */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <SectionHeading>
              Perks of being <span className="gradient-text">dynamic</span>.
            </SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
            {[
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M3 12L12 17L21 12" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 17L12 22L21 17" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <circle cx="12" cy="7" r="2" fill="var(--icon-color)" />
                  </svg>
                ),
                title: 'Global Healthcare', 
                desc: 'Premium coverage for medical, dental, and vision for you and your dependents, wherever you are.',
                features: ['Medical & dental', 'Vision coverage', 'Global coverage']
              },
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="12" rx="2" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M7 20L12 16L17 20" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="9" y="13" width="6" height="6" rx="1" stroke="var(--icon-color)" strokeWidth="1" />
                  </svg>
                ),
                title: 'Home Office Stipend', 
                desc: '$5,000 setup stipend for your home workstation including the latest M3 MacBook Pro.',
                features: ['$5,000 stipend', 'M3 MacBook Pro', 'Home setup ready']
              },
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M6 21V19C6 16.7909 8.68629 15 12 15C15.3137 15 18 16.7909 18 19V21" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M2 21V20C2 18.3431 3.34315 17 5 17H19C20.6569 17 22 18.3431 22 20V21" stroke="var(--icon-color)" strokeWidth="1.5" />
                  </svg>
                ),
                title: 'Parental Support', 
                desc: '16 weeks of fully paid parental leave for all parents, plus gradual return options.',
                features: ['16 weeks paid leave', 'Gradual return', 'All parents included']
              },
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M12 6V18M6 12H18" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="4" stroke="var(--icon-color)" strokeWidth="1.5" />
                  </svg>
                ),
                title: 'Equity & 401(k)', 
                desc: 'Stock options and 401(k) matching to ensure your financial future is as bright as our tech.',
                features: ['Stock options', '401(k) matching', 'Financial future']
              },
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M2 12L12 17L22 12" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <circle cx="12" cy="7" r="2" fill="var(--icon-color)" />
                  </svg>
                ),
                title: 'Unlimited PTO', 
                desc: 'We believe in balance. Take the time you need, with a minimum required 3 weeks off yearly.',
                features: ['Unlimited PTO', '3 weeks minimum', 'Work-life balance']
              },
              { 
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" stroke="var(--icon-color)" strokeWidth="1.5" />
                    <path d="M12 18V12M12 12L9 15M12 12L15 15" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6L12 10L8 6" stroke="var(--icon-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="var(--icon-color)" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                ),
                title: 'Wellness Credits', 
                desc: '$150 monthly credit for gym memberships, therapy, or meditation apps.',
                features: ['$150 monthly credit', 'Gym memberships', 'Therapy & meditation']
              },
            ].map((perk, i) => (
              <TiltCard key={i} className="perk-card card multi-gradient-card">
                <div className="perk-icon">{perk.icon}</div>
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
                <ul className="service-features">
                  {perk.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section - matches landing page Pricing section style */}
      <section className="section section--gradient rounded-t-[40px]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
            <div>
              <SectionHeading>
                Current <span className="gradient-text">Openings</span>
              </SectionHeading>
              <p className="section-subtitle text-left">Find your place in the programmatic revolution.</p>
            </div>
            <div className="flex items-center gap-base">
              <span className="text-sm font-label-md text-tertiary">Filter by:</span>
              <select className="bg-surface-container border-none rounded-lg text-sm font-label-md py-2 pl-4 pr-10 focus:ring-primary text-on-background">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Data Science</option>
              </select>
            </div>
          </div>
          <div className="space-y-base">
            {[
              { dept: 'Engineering', loc: 'Remote / London', title: 'Senior Software Engineer, Core Systems', tags: 'Rust, WebAssembly, Distributed Systems' },
              { dept: 'Design', loc: 'Remote / San Francisco', title: 'Senior Product Designer', tags: 'Analytics Dashboards, Design Systems, UX' },
              { dept: 'Data Science', loc: 'Remote / Berlin', title: 'Lead Data Scientist, Optimization', tags: 'ML Ops, PyTorch, Real-time Auctions' },
            ].map((role, i) => (
              <div key={i} className="card flex items-center justify-between p-lg group">
                <div>
                  <div className="flex items-center gap-sm mb-base">
                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">{role.dept}</span>
                    <span className="text-tertiary text-xs font-label-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> {role.loc}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">{role.title}</h3>
                  <p className="text-tertiary font-body-md mt-xs">{role.tags}</p>
                </div>
                <span className="material-symbols-outlined text-tertiary group-hover:text-primary transform group-hover:translate-x-2 transition-all">arrow_forward</span>
              </div>
            ))}
          </div>
          <div className="mt-xl text-center">
            <p className="text-tertiary font-body-md mb-md">Don't see a role that fits?</p>
            <button className="text-primary font-headline-md hover:underline">Send us a speculative application</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
