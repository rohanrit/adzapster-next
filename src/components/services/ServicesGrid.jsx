'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const services = [
  {
    label: 'Brand Awareness',
    icon: 'stars',
    tag: 'Branding',
    desc: 'Amplify your brand presence across all major digital channels, making your message memorable and building equity for the long term.',
    details: 'Our brand awareness solutions combine premium inventory access with advanced targeting to ensure your brand reaches the right audience at the right time. We leverage contextual targeting, demographic segmentation, and behavioral data to maximize brand recall and equity.',
    features: ['Premium Publisher Network', 'Contextual & Behavioral Targeting', 'Brand Safety & Suitability', 'Real-time Performance Dashboards', 'Cross-device Reach'],
    infographic: { metric: '85%', label: 'Brand Recall Increase', color: '#13e195' }
  },
  {
    label: 'Video',
    icon: 'play_circle',
    tag: 'Video',
    desc: 'Engage audiences with immersive video ads across web, mobile, and CTV. Premium inventory, precise targeting, measurable outcomes.',
    details: 'Video advertising that captivates. From pre-roll to outstream, we deliver your message through premium video inventory. Our programmatic video solutions ensure high completion rates and maximum engagement.',
    features: ['Pre-roll & Outstream Video', 'CTV & OTT Integration', 'Interactive Video Formats', 'Advanced Viewability Metrics', 'Cross-platform Video Attribution'],
    infographic: { metric: '12.4x', label: 'Video Engagement Rate', color: '#8B5CF6' }
  },
  {
    label: 'Native',
    icon: 'view_agenda',
    tag: 'Native',
    desc: 'Non-disruptive, seamless native ads that blend with content, driving higher engagement and brand lift.',
    details: 'Native advertising that feels natural. Our native ads integrate seamlessly into the user experience, delivering higher engagement rates while maintaining brand safety and editorial integrity.',
    features: ['In-feed Native Ads', 'Content Recommendation Engines', 'Sponsored Content Integration', 'Native Video Placements', 'Performance Analytics'],
    infographic: { metric: '4.8%', label: 'CTR vs Standard Display', color: '#F97316' }
  },
  {
    label: 'CTV & OTT',
    icon: 'tv_gen',
    tag: 'Streaming',
    desc: 'Reach the cord-cutter audience with targeted ads on connected TVs & streaming platforms—measurable, trackable, powerful.',
    details: 'Connected TV advertising for the modern viewer. Target cord-cutters and streaming enthusiasts with precision. Our CTV solutions offer advanced targeting, measurement, and attribution for the streaming era.',
    features: ['Premium CTV Inventory', 'Audience Targeting for Streaming', 'Cross-device Attribution', 'Advanced TV Analytics', 'Programmatic OTT Buying'],
    infographic: { metric: '92%', label: 'Viewer Retention Rate', color: '#FF69B4' }
  },
  {
    label: 'In-App',
    icon: 'smartphone',
    tag: 'Mobile',
    desc: 'Display perfectly optimized ads within top apps. App install, engagement, and reactivation solutions.',
    details: 'In-app advertising that converts. Reach users where they spend 90% of their mobile time. From app install campaigns to engagement and reactivation, we optimize for every stage of the mobile journey.',
    features: ['App Install Campaigns', 'In-app Engagement Ads', 'Re-engagement Solutions', 'Mobile App Attribution', 'SDK Integration Support'],
    infographic: { metric: '3.2x', label: 'Higher Conversion vs Mobile Web', color: '#13e195' }
  },
  {
    label: 'Display',
    icon: 'web',
    tag: 'Display',
    desc: 'Eye-catching banners, interstitials, & dynamic rich media across premium publisher inventory; high viewability, precise targeting.',
    details: 'Display advertising reimagined. From standard banners to rich media creatives, we deliver high-impact display campaigns across premium publishers with industry-leading viewability rates.',
    features: ['Responsive Display Ads', 'Rich Media & Interstitials', 'Dynamic Creative Optimization', 'Premium Publisher Access', 'Viewability & Brand Safety'],
    infographic: { metric: '78%', label: 'Viewability Rate', color: '#8B5CF6' }
  },
  {
    label: 'DOOH / OOH',
    icon: 'outdoor_garden',
    tag: 'Outdoor',
    desc: 'Bridging physical and digital—place dynamic ads onto digital billboards and screens all over the globe, programmatically.',
    details: 'Digital out-of-home advertising that makes an impact. Programmatically buy and optimize digital billboards, transit screens, and place-based media with real-time data and measurement.',
    features: ['Programmatic DOOH Buying', 'Real-time Audience Measurement', 'Dynamic Creative for Screens', 'Geofencing & Location Data', 'Cross-channel Attribution'],
    infographic: { metric: '5M+', label: 'Daily Impressions', color: '#F97316' }
  },
  {
    label: 'Rich Media',
    icon: 'burst_mode',
    tag: 'Interactive',
    desc: 'Advanced creatives: Interactive, expandable, gamified ad formats to maximize click-through and brand recall.',
    details: 'Rich media ads that engage. From expandable banners to interactive gamified experiences, our rich media solutions drive higher engagement and brand recall through innovative creative formats.',
    features: ['Expandable Ad Formats', 'Interactive & Gamified Ads', 'Video-in-Banner', 'Social Rich Media', 'Creative Performance Analytics'],
    infographic: { metric: '6.8x', label: 'Engagement vs Standard Banners', color: '#FF69B4' }
  },
  {
    label: 'Mobile Marketing',
    icon: 'phone_iphone',
    tag: 'Mobile',
    desc: 'Comprehensive UAC/cross-app/mobile web strategies, precision geo-targeting, and behavioral marketing at scale.',
    details: 'Mobile-first marketing strategies that deliver. From Universal App Campaigns to mobile web and location-based targeting, we help you reach mobile users with precision and scale.',
    features: ['Universal App Campaigns (UAC)', 'Mobile Web Advertising', 'Geo-targeting & Geofencing', 'SMS & Push Notification Ads', 'Mobile Audience Segmentation'],
    infographic: { metric: '68%', label: 'Mobile Traffic Share', color: '#13e195' }
  },
  {
    label: 'Performance / Lead Gen',
    icon: 'track_changes',
    tag: 'Performance',
    desc: 'ROI-driven targeting, CPC/CPA solutions, advanced attribution & fraud protection to deliver real results, not just impressions.',
    details: 'Performance advertising that delivers ROI. Our performance solutions focus on measurable outcomes—from cost-per-acquisition to lead generation—backed by advanced attribution and fraud protection.',
    features: ['CPA & CPC Optimization', 'Advanced Attribution Modeling', 'Real-time Bidding (RTB)', 'Fraud Detection & Prevention', 'Lead Quality Scoring'],
    infographic: { metric: '12.4x', label: 'Average ROAS', color: '#8B5CF6' }
  },
]

export default function ServicesGrid({ onSelectService }) {
  return (
    <section className="section relative" id="services-grid">
      <div className="container relative z-10">
        <motion.div
                  className="section-header"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="section-tag">Our Services</span>
                  <SectionHeading>
                    Solutions
                    <span className="gradient-text"> We Offer</span>
                  </SectionHeading>
                  <p className="text-xl text-tertiary">Every channel, every format, every outcome—powered by data and optimized for performance.</p>
                </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.label}
              className="card service-card cursor-pointer flex flex-col justify-start items-start backdrop-blur-md shadow-xl rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-[#251844] dark:to-[#21294b] border border-[var(--border)] overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.65, ease: 'easeOut' }}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 48px rgba(19,225,149,0.2)' }}
              onClick={() => onSelectService(svc)}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                {svc.tag}
              </div>

              <div className="service-icon mb-5 mt-5 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary via-primary-dark to-accent-purple shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-white text-3xl">
                  {svc.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary-dark dark:text-primary">{svc.label}</h3>
              <p className="text-base font-medium mb-6 text-[var(--text-body)] dark:text-gray-200 min-h-[56px]">
                {svc.desc}
              </p>
              <div className="mt-auto text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
