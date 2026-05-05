'use client'

import { motion } from 'framer-motion'
import BlogCard from './BlogCard'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export default function BlogGrid({ blogs, currentPage }) {
  const BLOGS_PER_PAGE = 9
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE
  const endIndex = startIndex + BLOGS_PER_PAGE
  const paginatedBlogs = blogs.slice(startIndex, endIndex)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {paginatedBlogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </motion.div>
  )
}
