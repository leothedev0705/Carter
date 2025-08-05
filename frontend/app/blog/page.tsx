'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getPosts, SanityPost, getImageUrl } from '@/lib/sanity'

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'style', name: 'Style Guide' },
  { id: 'brand', name: 'Brand Stories' },
  { id: 'news', name: 'News & Updates' },
  { id: 'lifestyle', name: 'Lifestyle' },
]

export default function BlogPage() {
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()))
    // Remove category filtering since SanityPost doesn't have category property
    return matchesSearch
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-beige pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <div className="loading-dots">Loading blog posts...</div>
            <p className="text-charcoal-light mt-4">Fetching your amazing content...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-beige pt-20">
      {/* Header */}
      <div className="bg-beige-secondary border-b border-gray-200">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-secondary mb-4 text-charcoal">Blog</h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Stay updated with the latest Carter Chaos news, style guides, and brand stories. 
              Discover the stories behind our designs and the culture that inspires us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-primary-orange focus:ring-1 focus:ring-primary-orange focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-orange text-white'
                    : 'bg-white text-charcoal hover:text-primary-orange border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container-custom pb-16">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-charcoal-light text-lg mb-4">No posts found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post._id}`}>
                  <div className="card-glow overflow-hidden h-full bg-white border border-gray-200">
                    {/* Post image */}
                    <div className="relative aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                      {post.coverImage ? (
                        <Image
                          src={getImageUrl(post.coverImage)}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-gray-200 flex items-center justify-center hidden">
                        <span className="text-gray-600 font-bold text-lg">CARTER CHAOS</span>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-charcoal font-semibold bg-white/90 px-4 py-2 rounded">Read Article</span>
                      </div>
                    </div>

                    {/* Post content */}
                    <div className="p-6">
                      {/* Date and read time */}
                      <div className="flex items-center text-sm text-charcoal-light space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post._createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-primary-orange transition-colors duration-300 line-clamp-2 mb-3">
                        {post.title}
                      </h3>
                      
                      {/* Content Preview */}
                      {post.content && (
                        <p className="text-charcoal-light line-clamp-3 mb-4">
                          {post.content.substring(0, 120)}...
                        </p>
                      )}
                      
                      {/* Read more */}
                      <div className="flex items-center text-primary-orange font-semibold group-hover:gap-2 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
} 