'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Heart, ShoppingBag } from 'lucide-react'
import { getFeaturedProducts, getImageUrl } from '@/lib/sanity'

export function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const featuredProducts = await getFeaturedProducts()
        setProducts(featuredProducts)
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="bg-beige-secondary py-16">
        <div className="container-custom">
          <div className="text-center">
            <div className="loading-dots">Loading featured products...</div>
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="bg-beige-secondary py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-secondary mb-4 text-charcoal">Featured Products</h2>
            <p className="text-charcoal-light text-lg mb-8">
              Our most popular pieces that define the Carter Chaos aesthetic.
            </p>
            <p className="text-charcoal-light">No featured products yet. Add some products in your Sanity Studio!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-beige-secondary py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4 text-charcoal">Featured Products</h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Our most popular pieces that define the Carter Chaos aesthetic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <Link href={`/products/${product.slug.current}`}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={getImageUrl(product.mainImage)}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hidden">
                      <span className="text-gray-500 text-sm">Product Image</span>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-primary-orange text-white text-xs font-semibold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.isSale && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          SALE
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-charcoal hover:text-primary-orange transition-colors duration-300">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-charcoal hover:text-primary-orange transition-colors duration-300">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-charcoal font-semibold bg-white/90 px-4 py-2 rounded">View Product</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-charcoal-light uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-charcoal group-hover:text-primary-orange transition-colors duration-300 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center space-x-1 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-charcoal-light">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary-orange">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-charcoal-light line-through">
                            ${product.originalPrice}
                          </span>
                        )}
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
          <Link href="/shop" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 