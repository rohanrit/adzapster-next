"use client";

import TiltCard from '@/components/TiltCard';
import SectionHeading from '@/components/SectionHeading';

const dynamicPerks = [
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="var(--icon-color)" strokeWidth="1.5" />
        <path d="M3 12L12 17L21 12" stroke="var(--icon-color)" strokeWidth="1.5" />
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
]

export default function Perks() {
  return (
    <section className="section section--white">
      <div className="container">
        <div className="section-header">
          <SectionHeading>
            Perks of being <span className="gradient-text">dynamic</span>.
          </SectionHeading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dynamicPerks.map((perk, i) => (
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
  );
}
