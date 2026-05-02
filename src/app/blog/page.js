import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'

const blogShapes = [
  { type: 'cube', size: 45, color: 'orange', position: { top: '15%', right: '8%' }, depth: 0.3, rotate: { x: -15, y: 40 } },
  { type: 'donut', size: 80, thickness: 12, color: 'purple', position: { bottom: '20%', left: '10%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 40, color: 'pink', position: { top: '60%', right: '15%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
]

export const metadata = {
  title: 'Blog | Adzapster',
  description: 'Engineering the Future of Programmatic Advertising. Insights and innovation from our team.',
}

const featuredPost = {
  title: 'The Shift to Zero-Latency Bidding: How Neural Networks are Redefining the Auction',
  excerpt: 'Deep dive into our latest architectural upgrade that reduces bid response times to under 15ms while maintaining 99.9% prediction accuracy for CPM optimization.',
  category: 'ALGORITHMS',
  author: 'Dr. Elena Volkov',
  role: 'Chief AI Architect',
  date: 'Oct 24, 2024',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZQMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH',
  readTime: '8 min read'
}

const blogPosts = [
  {
    title: 'Solving the Thundering Herd: Cluster Optimization',
    excerpt: 'How we refactored our load balancers to handle 2 million concurrent requests during Super Bowl LVIII.',
    category: 'ENGINEERING',
    author: 'Mario Sanchez',
    date: 'Oct 21, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpbiDlhioFUGzkCxcf7bAEJ4JHqjKClecqf27yAfglJqAjVjsxnGKp8mVFLvZfIK7706OWg3Su8sJk1WVxYl9VN3LameqV0GAzcNAwIUKwxnU7t9Pmhx_JgvUStSh-s30Gz-bL-lpyKx4v220UEtzbdZ-hfxVeySEihI4XTLb14yd1el8pyyt-HlguENnjTZ1t4SSQ_EcHV7JDafWJlMt6A8WriZBKDDrN71kFjHz7HopFZLtfjlOo8UyYafjIifGRWiFY1Enp-W7Q',
    readTime: '6 min read'
  },
  {
    title: 'Privacy Sandboxes: Life After the Third-Party Cookie',
    excerpt: 'Our roadmap for deterministic attribution in a cookie-less world using federated learning models.',
    category: 'DATA PRIVACY',
    author: 'Dr. Elena Volkov',
    date: 'Oct 18, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZQMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH',
    readTime: '10 min read'
  },
  {
    title: 'Q3 Programmatic Spend Trends: A Rebound Story',
    excerpt: 'Market analysis shows a 14% uptick in connected TV inventory as brands pivot toward premium long-form video.',
    category: 'INDUSTRY',
    author: 'Joshua Wood',
    date: 'Oct 15, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZQMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH',
    readTime: '5 min read'
  },
  {
    title: 'The Future of Header Bidding in a Post-GDPR World',
    excerpt: 'How modern header bidding solutions are adapting to stricter privacy regulations while maintaining performance.',
    category: 'ENGINEERING',
    author: 'Mario Sanchez',
    date: 'Oct 10, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZQMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH',
    readTime: '12 min read'
  },
  {
    title: 'Unlocking the Power of First-Party Data in Programmatic',
    excerpt: 'Strategies for leveraging your own data assets to improve targeting precision and reduce dependency on third-party sources.',
    category: 'DATA SCIENCE',
    author: 'Dr. Elena Volkov',
    date: 'Oct 05, 2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZQMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH',
    readTime: '7 min read'
  },
]

export default function Blog() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section section--white">
        <FloatingShapes shapes={blogShapes} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag">Insights & Innovation</span>
          <SectionHeading>
            Engineering the Future of <span className="gradient-text">Programmatic Advertising</span>.
          </SectionHeading>
          <p className="section-subtitle">
            Insights and innovation from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Post & Sidebar */}
      <section className="section section--light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Featured Post */}
            <article className="lg:col-span-8 card overflow-hidden group">
              <div className="aspect-[16/9] overflow-hidden relative bg-gradient-to-br from-primary/20 to-purple-500/20">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                  <span className="px-3 py-1 bg-white/90 text-primary text-xs font-bold rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-lg">
                <div className="flex items-center gap-base mb-base text-sm text-muted">
                  <span className="material-symbols-outlined text-primary" style={{fontSize: '18px'}}>person</span>
                  <span className="font-semibold text-on-background">{featuredPost.author}</span>
                  <span className="text-tertiary">•</span>
                  <span className="text-tertiary">{featuredPost.date}</span>
                  <span className="text-tertiary">•</span>
                  <span className="text-tertiary">{featuredPost.readTime}</span>
                </div>
                <h2 className="font-headline-lg text-on-background mb-base group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-body-lg text-tertiary mb-md">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-label-md text-on-background">{featuredPost.author}</p>
                    <p className="font-label-sm text-tertiary">{featuredPost.role}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-gutter">
              {/* Categories */}
              <div className="card p-md">
                <h3 className="font-headline-md text-on-background mb-md">Categories</h3>
                <div className="flex flex-wrap gap-xs">
                  {['ALGORITHMS', 'ENGINEERING', 'DATA SCIENCE', 'INDUSTRY TRENDS', 'PRODUCT UPDATES'].map((cat) => (
                    <button key={cat} className="px-4 py-2 bg-surface-container border border-outline-variant/30 rounded-lg font-label-md text-on-background hover:border-primary hover:text-primary transition-all">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="card p-md bg-on-background text-background">
                <span className="material-symbols-outlined text-primary text-4xl mb-base">mail</span>
                <h3 className="font-headline-md mb-base">The Dynamic Digest</h3>
                <p className="font-body-md opacity-90 mb-md">
                  Weekly engineering insights delivered to your inbox. No fluff, just precision data.
                </p>
                <div className="space-y-sm">
                  <input 
                    className="w-full px-md py-3 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all font-body-md text-background placeholder:text-background/50"
                    placeholder="Work email address"
                    type="email"
                  />
                  <button 
                    className="w-full py-3 bg-primary text-on-primary font-label-md rounded-lg hover:shadow-lg transition-all active:scale-95"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section section--white">
        <div className="container">
          <SectionHeading>
            Latest <span className="gradient-text">Insights</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {blogPosts.map((post, idx) => (
              <article 
                key={idx} 
                className={`card overflow-hidden group ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`overflow-hidden relative bg-gradient-to-br from-primary/20 to-purple-500/20 ${idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-md">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted">
                    <span className="material-symbols-outlined" style={{fontSize: '16px'}}>person</span>
                    <span className="font-semibold">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-headline-md text-on-background mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-tertiary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-label-sm text-on-background">{post.author}</span>
                    </div>
                    <span className="font-label-sm text-tertiary">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-xl gap-sm">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-tertiary hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-on-background text-background font-label-md">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-background hover:bg-surface-container transition-all">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-background hover:bg-surface-container transition-all">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-tertiary hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
