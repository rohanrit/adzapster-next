'use client'

import { useState } from 'react'
import { blogs } from '@/data/blogs'
import BlogGrid from './BlogGrid'
import Pagination from './Pagination'
import FeaturedPost from './FeaturedPost'

const BLOGS_PER_PAGE = 9

export default function BlogPageClient() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE)

  return (
    <>
      {/* Featured Post */}
      <section className="section section--light">
        <div className="container">
          <FeaturedPost blog={blogs[0]} />
        </div>
      </section>

      {/* Blog Grid with Pagination */}
      <section className="section section--white">
        <div className="container">
          <BlogGrid blogs={blogs} currentPage={currentPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  )
}
