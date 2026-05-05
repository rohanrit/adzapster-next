'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { blogs } from '@/data/blogs'

export default function BlogCard({ blog, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-100 to-purple-100">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-4xl opacity-30">📝</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-700">
              {blog.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {blog.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{blog.author}</span>
            <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
