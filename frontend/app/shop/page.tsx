'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, Grid, List } from 'lucide-react'
import { ProductCard } from '@/components/shop/ProductCard'
import { getProducts, SanityProduct, getImageUrl } from '@/lib/sanity'

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'pants', name: 'Pants' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'accessories', name: 'Accessories' },
]

export default function ShopPage() {
  const [products, setProducts] = useState<SanityProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts()
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return a.isNew ? -1 : 1
      default:
        return 0
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-beige pt-20">
        <div className="container-custom py-16">
          <div className="text-center">
            <div className="loading-dots">Loading products...</div>
            <p className="text-charcoal-light mt-4">Fetching your amazing products...</p>
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
            <h1 className="heading-secondary mb-4 text-charcoal">Shop Collection</h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Discover our latest drops and timeless pieces. Each design crafted with precision 
              and passion for the urban lifestyle.
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
              placeholder="Search products..."
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

          {/* Sort and View */}
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:border-primary-orange focus:ring-1 focus:ring-primary-orange focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-primary-orange text-white' : 'text-charcoal hover:text-primary-orange'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-primary-orange text-white' : 'text-charcoal hover:text-primary-orange'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom pb-16">
        {sortedProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-charcoal-light text-lg mb-4">No products found matching your criteria.</p>
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
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard 
                  product={{
                    id: product._id,
                    title: product.title,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: getImageUrl(product.mainImage),
                    rating: product.rating,
                    isNew: product.isNew,
                    isSale: product.isSale,
                    category: product.category,
                    tags: product.tags || [],
                  }} 
                  viewMode={viewMode} 
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
} 