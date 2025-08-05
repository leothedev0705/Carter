'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getPosts, SanityPost, getImageUrl } from '@/lib/sanity'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
}

export function BlogSection() {
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts()
        setPosts(fetchedPosts.slice(0, 3)) // Show only latest 3 posts
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-dots">Loading blog posts...</div>
            <p className="text-charcoal-light mt-4">Fetching your amazing content...</p>
          </div>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return (
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-secondary mb-4 text-charcoal">Latest from the Blog</h2>
            <p className="text-charcoal-light text-lg mb-4">
              No blog posts yet. Add some posts in your Sanity Studio!
            </p>
            <Link 
              href="http://localhost:3333" 
              target="_blank"
              className="btn-primary mt-6 inline-flex items-center"
            >
              Go to CMS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-beige">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-charcoal">Latest from the Blog</h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Stay updated with the latest Carter Chaos news, style guides, and brand stories.
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {posts.map((post) => (
            <motion.article
              key={post._id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post._id}`}>
                <div className="card-glow overflow-hidden h-full bg-white border border-gray-200">
                  {/* Post image */}
                  <div className="relative aspect-video mb-6 bg-gray-100 rounded-lg overflow-hidden">
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
                  <div className="space-y-4 p-6">
                    {/* Date */}
                    <div className="flex items-center text-sm text-charcoal-light space-x-4">
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
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-primary-orange transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Content Preview */}
                    {post.content && (
                      <p className="text-charcoal-light line-clamp-3">
                        {post.content.substring(0, 100)}...
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

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog" className="btn-secondary group">
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 