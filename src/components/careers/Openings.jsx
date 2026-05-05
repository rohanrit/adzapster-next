'use client'

import SectionHeading from '@/components/SectionHeading'

const openRoles = [
  {
    dept: 'Engineering',
    loc: 'Remote / London',
    title: 'Senior Software Engineer, Core Systems',
    tags: 'Rust, WebAssembly, Distributed Systems',
  },
  {
    dept: 'Design',
    loc: 'Remote / San Francisco',
    title: 'Senior Product Designer',
    tags: 'Analytics Dashboards, Design Systems, UX',
  },
  {
    dept: 'Data Science',
    loc: 'Remote / Berlin',
    title: 'Lead Data Scientist, Optimization',
    tags: 'ML Ops, PyTorch, Real-time Auctions',
  },
]

export default function Openings() {
  return (
    <section className="section section--gradient rounded-t-[40px]">
      <div className="container">
        <div className="flex flex-col md:items-stretch justify-between gap-6 mb-xl">
          <div>
            <SectionHeading>
              Current <span className="gradient-text">Openings</span>
            </SectionHeading> 
            <p className="text-xl text-tertiary text-left ms-0">
              Find your place in the programmatic revolution.
            </p>
          </div>
          <div className="flex items-center justify-end gap-6">           
            <span className="text-sm font-label-md text-tertiary">Filter by:</span>
            <select className="bg-surface-container border-none rounded-lg text-sm font-label-md py-2 pl-4 pr-10 focus:ring-primary text-on-background">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Data Science</option>
            </select>
          </div>
          <div className="space-y-base grid gap-6">
            {openRoles.map((role, i) => (
              <div key={i} className="card flex items-center justify-between p-lg group">
                <div>
                  <div className="flex items-center gap-sm mb-base">
                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                      {role.dept}
                    </span>
                    <span className="text-tertiary text-xs font-label-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>{' '}
                      {role.loc}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-tertiary font-body-md mt-xs">{role.tags}</p>
                </div>
                <span className="material-symbols-outlined text-tertiary group-hover:text-primary transform group-hover:translate-x-2 transition-all">
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
          <div className="mt-xl text-center">
            <p className="text-tertiary font-body-md mb-md">Don't see a role that fits?</p>
            <button className="text-primary font-headline-md hover:underline">
              Send us a speculative application
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
