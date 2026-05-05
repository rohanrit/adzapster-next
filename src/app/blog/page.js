import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'
import BlogPageClient from '@/components/blog/BlogPageClient'

const blogShapes = [
  { type: 'cube', size: 45, color: 'orange', position: { top: '15%', right: '8%' }, depth: 0.3, rotate: { x: -15, y: 40 } },
  { type: 'donut', size: 80, thickness: 12, color: 'purple', position: { bottom: '20%', left: '10%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
  { type: 'pyramid', size: 40, color: 'pink', position: { top: '60%', right: '15%' }, depth: 0.4, rotate: { x: -12, y: 30 } },
]

export const metadata = {
  title: 'Blog | Adzapster',
  description: 'Engineering the Future of Programmatic Advertising. Insights and innovation from our team.',
}

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
          <p className="text-xl text-tertiary">
            Insights and innovation from our team of experts.
          </p>
        </div>
      </section>

      {/* Blog Content (Client Component with Pagination) */}
      <BlogPageClient />

      <Footer />
    </>
  )
}
