'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { blogs } from '@/data/blogs'

export default function FeaturedPost({ blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      {/* Featured Image */}
      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:h-full bg-gradient-to-br from-emerald-100 to-purple-100">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl opacity-30">📝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
            FEATURED
          </span>
          <span className="px-3 py-1 bg-white/90 text-emerald-700 text-xs font-bold rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Featured Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors leading-tight">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-6 line-clamp-3">
          {blog.description}
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm">
            {blog.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-medium text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-3 transition-all"
        >
          Read article →
        </Link>
      </div>
    </motion.div>
  )
}
