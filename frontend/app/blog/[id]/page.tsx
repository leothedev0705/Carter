'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { getPostById, getImageUrl } from '@/lib/sanity'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getPostById(params.id)
        setPost(fetchedPost)
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-beige pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <div className="loading-dots">Loading blog post...</div>
            <p className="text-charcoal-light mt-4">Fetching your amazing content...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-beige pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="heading-secondary mb-4 text-charcoal">Post Not Found</h1>
            <p className="text-charcoal-light text-lg mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
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
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary-orange hover:text-charcoal transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="heading-secondary mb-4 text-charcoal">{post.title}</h1>
            <div className="flex items-center justify-center text-sm text-charcoal-light space-x-6">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    month: 'long',
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
          </motion.div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Featured Image */}
          {post.coverImage && (
            <div className="relative aspect-video mb-8 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={getImageUrl(post.coverImage)}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
          )}

          {/* Post Content */}
          <article className="prose prose-lg max-w-none">
            {post.content && (
              <div 
                className="text-charcoal leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
            
            {!post.content && post.excerpt && (
              <p className="text-charcoal-light text-lg leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-charcoal-light">Share this post:</span>
                <button className="text-primary-orange hover:text-charcoal transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              <Link 
                href="/blog" 
                className="btn-secondary group"
              >
                Back to Blog
                <ArrowLeft className="ml-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 