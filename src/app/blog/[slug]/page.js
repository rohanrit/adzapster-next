import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/components/FloatingShapes'
import SectionHeading from '@/components/SectionHeading'
import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const shape = [
  { type: 'cube', size: 35, color: 'emerald', position: { top: '10%', right: '12%' }, depth: 0.3, rotate: { x: -15, y: 40 } },
  { type: 'donut', size: 60, thickness: 10, color: 'purple', position: { bottom: '15%', left: '8%' }, depth: 0.5, rotate: { x: 50, z: 40 } },
]

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return {}
  return {
    title: `${blog.title} | Adzapster Blog`,
    description: blog.description,
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) notFound()

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="section section--white">
        <FloatingShapes shapes={shape} />
        <div className="container relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-emerald-600 font-medium mb-6 hover:gap-3 transition-all">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
              {blog.category}
            </span>
            {blog.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <SectionHeading>
            {blog.title}
          </SectionHeading>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{blog.readTime}</span>
            <span>·</span>
            <span>{blog.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section section--white pt-0">
        <div className="container max-w-4xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-purple-100">
            {blog.image ? (
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl opacity-30">📝</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section section--light pt-0">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-emerald-600">
            <p className="text-xl text-gray-600 leading-relaxed">
              {blog.description}
            </p>
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-700 italic">
                This is a placeholder for the full blog post content. The actual content for &quot;{blog.title}&quot; would be rendered here with rich text formatting, code snippets, images, and more.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
              {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{blog.author}</p>
              <p className="text-sm text-gray-600 mt-1">
                Author at Adzapster. Writing about programmatic advertising, engineering, and industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section section--white">
          <div className="container max-w-6xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <div className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className="relative h-40 bg-gradient-to-br from-emerald-100 to-purple-100">
                        {post.image ? (
                          <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-3xl opacity-30">📝</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-semibold text-emerald-600">{post.category}</span>
                        <h3 className="text-base font-semibold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
