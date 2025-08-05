'use client'

import { useState, useEffect } from 'react'
import { getProducts, getCollections, getPosts } from '@/lib/sanity'

export default function TestSanityPage() {
  const [products, setProducts] = useState<any[]>([])
  const [collections, setCollections] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testSanityConnection() {
      try {
        console.log('Testing Sanity connection...')
        console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
        console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
        
        const [productsData, collectionsData, postsData] = await Promise.all([
          getProducts(),
          getCollections(),
          getPosts()
        ])
        
        setProducts(productsData)
        setCollections(collectionsData)
        setPosts(postsData)
        setLoading(false)
      } catch (err: any) {
        console.error('Sanity connection error:', err)
        setError(err.message)
        setLoading(false)
      }
    }

    testSanityConnection()
  }, [])

  return (
    <div className="min-h-screen bg-beige pt-20">
      <div className="container-custom py-16">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Sanity Connection Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Environment Variables:</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Project ID:</strong> {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT SET'}</p>
            <p><strong>Dataset:</strong> {process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT SET'}</p>
          </div>
        </div>

        {loading && (
          <div className="text-center">
            <div className="loading-dots">Testing Sanity connection...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-charcoal mb-4">Products ({products.length})</h2>
              {products.length > 0 ? (
                <ul className="space-y-2">
                  {products.map((product: any) => (
                    <li key={product._id} className="text-charcoal">
                      • {product.title} - ${product.price}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-charcoal-light">No products found</p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-charcoal mb-4">Collections ({collections.length})</h2>
              {collections.length > 0 ? (
                <ul className="space-y-2">
                  {collections.map((collection: any) => (
                    <li key={collection._id} className="text-charcoal">
                      • {collection.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-charcoal-light">No collections found</p>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-charcoal mb-4">Blog Posts ({posts.length})</h2>
              {posts.length > 0 ? (
                <ul className="space-y-2">
                  {posts.map((post: any) => (
                    <li key={post._id} className="text-charcoal">
                      • {post.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-charcoal-light">No blog posts found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 