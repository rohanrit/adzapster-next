import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog | AdTech Dynamics',
  description: 'Engineering the Future of Programmatic Advertising. Insights and innovation from our team.',
}

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <header className="mb-xl">
            <span className="font-label-md text-primary bg-primary-container/10 px-3 py-1 rounded-full uppercase tracking-wider mb-base inline-block">
              Insights & Innovation
            </span>
            <h1 className="font-display-lg text-on-background max-w-2xl mt-base">
              Engineering the Future of Programmatic Advertising.
            </h1>
          </header>

          {/* Featured Post */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
            <article className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_12lHTwfARoDzvXd-TAV9HtMJo7hmVqlUsjNVnFgihqB83EjFHu1-ikL-08ct7VaCwmVKMvKbq8VNxvl-aRrF-Hu6GM5r9tfWW_OVbBN8rNkJsVO496XpTNLUUfVLMNomYQuwIC9ErR-ZZMmnQqQ_LO7f-_q0I93bwTA2QQE6vnYc9HLFRlZcM-Z2NcnV2JQHTeG4-caqWhVENkjbpNIn1LCOUXmbJwfTTQEHn3GX6pNzjhJRJuPcmSnfzkB-sIOJNqyFSqXfOHCH"
                  alt="Featured Article"
                />
              </div>
              <div className="p-md">
                <div className="flex items-center gap-base mb-base">
                  <span className="font-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded">ALGORITHMS</span>
                  <span className="font-label-sm text-tertiary">Oct 24, 2024</span>
                </div>
                <h2 className="font-headline-lg text-on-background mb-base group-hover:text-primary transition-colors">
                  The Shift to Zero-Latency Bidding: How Neural Networks are Redefining the Auction.
                </h2>
                <p className="font-body-lg text-tertiary max-w-3xl mb-md">
                  Deep dive into our latest architectural upgrade that reduces bid response times to under 15ms while maintaining 99.9% prediction accuracy for CPM optimization.
                </p>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div>
                    <p className="font-label-md text-on-background">Dr. Elena Volkov</p>
                    <p className="font-label-sm text-tertiary">Chief AI Architect</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar Content */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              {/* Categories */}
              <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30">
                <h3 className="font-headline-md text-on-background mb-md">Categories</h3>
                <div className="flex flex-wrap gap-xs">
                  {['Programmatic', 'Data Science', 'Product Updates', 'Engineering', 'Industry Trends'].map((cat) => (
                    <button key={cat} className="px-4 py-2 bg-surface-container border border-outline-variant/30 rounded-lg font-label-md text-on-background hover:border-primary hover:text-primary transition-all">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              {/* Newsletter */}
              <div className="bg-on-background p-md rounded-xl text-background">
                <span className="material-symbols-outlined text-primary text-4xl mb-base">mail</span>
                <h3 className="font-headline-md mb-base text-background">The Dynamic Digest</h3>
                <p className="font-body-md text-tertiary mb-md">Weekly engineering insights delivered to your inbox. No fluff, just precision data.</p>
                <div className="space-y-sm">
                  <input 
                    className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-tertiary focus:outline-none focus:border-primary"
                    placeholder="Work email address"
                    type="email"
                  />
                  <button className="w-full py-3 bg-primary text-on-primary font-label-md rounded-lg hover:shadow-lg transition-all active:scale-95">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                category: 'ENGINEERING',
                title: 'Solving the Thundering Herd: Cluster Optimization.',
                desc: 'How we refactored our load balancers to handle 2 million concurrent requests during Super Bowl LVIII.',
                readTime: '5 min read',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjw_ZDaCfn127mbH9luZD7zIfHWkWHlfVx4qkDlfFwn3f4cqXe3NKN25QOcIYjD6S3-0NVFtuIir2l7kVkNSWK04bcjfeUibpzDW3zrF-2hrAcOIPuZRNkb0TtE-W-EV69GVrEzsB0UJBOHRQIyhuF498cWeeRW6v4LBlzgVZo9DeBoyut10le65mJ2vpptaQ92cY3cGjM_AGw2hhexb_oBX2TYaInm2GorptxkUUwGxhEeJ4L2Avzveee2dq1z89YX6rYwzfgQYNs'
              },
              {
                category: 'DATA PRIVACY',
                title: 'Privacy Sandboxes: Life After the Third-Party Cookie.',
                desc: 'Our roadmap for deterministic attribution in a cookie-less world using federated learning models.',
                readTime: '8 min read',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0Cnl5WgwHquJjum90Yyfpc9iznjWq4V3s4R39WMnI_zbZZMZpi4MIfC93TmkgYJJgYtM9W13ZdYt-YLjvlsHiUSYB7KSAoVV5OppyVB5aEaCVzu19HTfYRoWeRylkm7uS1fF8aO9AHscTpTqrIELZxNFu1t1MIgEFc1AJvQeXrF9sFUp_pkat_aTGI_U_IVvarY9534OOcZ7VQJxnfEtCcijaJ1nnqzsde3kreCcFO7T8sgivrL5T-Ht2-b6_TyGD0Oxizh9OMND8'
              },
              {
                category: 'INDUSTRY',
                title: 'Q3 Programmatic Spend Trends: A Rebound Story.',
                desc: 'Market analysis shows a 14% uptick in connected TV inventory as brands pivot toward premium long-form video.',
                readTime: '4 min read',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIYWGAtTQoKt_JrakGZaIxzuev7PNCTJ-jR5Zqp0yGX0qE1Corc4GoB1AgDXJJ3I-aoUI19S3awUGpVK0Wdu-rWqbpROEz90SsthTrCz9Qu6b7eALNT9IxSN-R1tyUSBCOpyQ5tLBDYywxiAmnF6Ujs3ftG1XHqAw93YmbUfsfSi0h2N5_XYY_HBJuw-6rj20-mavz0rcnUIGFoM3E1jxAbgM17DHbzKLZez6KFG-sXbGUaucwh8Z16HxRqm9mN0xvXplly3Yn_WIT'
              }
            ].map((post, i) => (
              <article key={i} className="group bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={post.img}
                    alt={post.title}
                  />
                </div>
                <div className="p-md">
                  <span className="font-label-sm text-primary mb-xs block">{post.category}</span>
                  <h4 className="font-headline-md text-on-background mb-base group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="font-body-md text-tertiary mb-md">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-tertiary">{post.readTime}</span>
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </div>
                </div>
              </article>
            ))}
          </section>

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
      </main>
      <Footer />
    </>
  )
}
