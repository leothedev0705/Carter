'use client'

import { useEffect, useState } from 'react'

export default function TestBlogPage() {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function test() {
      try {
        console.log('🧪 Testing Sanity from React...')
        
        const { getPosts } = await import('@/lib/sanity')
        const posts = await getPosts()
        
        console.log('✅ Success! Posts:', posts)
        setData(posts)
      } catch (err: any) {
        console.error('❌ Error:', err)
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    
    test()
  }, [])

  if (loading) return <div className="p-8 text-white">Testing connection...</div>
  
  if (error) return (
    <div className="p-8 text-red-500">
      <h1>Error: {error}</h1>
      <p>Check console for details</p>
    </div>
  )

  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-2xl mb-4">✅ Sanity Connection Test</h1>
      <p className="mb-4">Found {data?.length || 0} posts:</p>
      <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
      <div className="mt-4">
        <a href="/" className="text-blue-400 hover:underline">← Back to Homepage</a>
      </div>
    </div>
  )
} 