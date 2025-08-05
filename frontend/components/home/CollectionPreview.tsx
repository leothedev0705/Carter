'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Filter } from 'lucide-react'
import { getCollections, getImageUrl } from '@/lib/sanity'

export function CollectionPreview() {
  const [collections, setCollections] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionsData = await getCollections()
        setCollections(collectionsData.slice(0, 3)) // Show only first 3 collections
      } catch (error) {
        console.error('Error fetching collections:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCollections()
  }, [])

  if (loading) {
    return (
      <section className="bg-beige py-16">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-dots">Loading collections...</div>
          </div>
        </div>
      </section>
    )
  }

  if (collections.length === 0) {
    return (
      <section className="bg-beige py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-secondary mb-4 text-charcoal">Collections</h2>
            <p className="text-charcoal-light text-lg mb-8">
              Curated collections that tell a story. Each piece designed to elevate your street style.
            </p>
            <p className="text-charcoal-light">No collections yet. Add some collections in your Sanity Studio!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-beige py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4 text-charcoal">Collections</h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Curated collections that tell a story. Each piece designed to elevate your street style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Link href={`/collections/${collection.slug.current}`}>
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Collection image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <Image
                      src={getImageUrl(collection.image)}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
                      <span className="text-gray-500 text-lg font-semibold">{collection.title}</span>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {collection.isNew && (
                        <span className="bg-primary-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-orange transition-colors duration-300">
                          {collection.title}
                        </h3>
                        {collection.subtitle && (
                          <p className="text-white/90 text-sm font-medium">
                            {collection.subtitle}
                          </p>
                        )}
                      </div>
                      {collection.description && (
                        <p className="text-white/80 text-sm mb-3 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">
                          {collection.itemCount} items
                        </span>
                        <ArrowRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link href="/collections" className="btn-primary">
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 