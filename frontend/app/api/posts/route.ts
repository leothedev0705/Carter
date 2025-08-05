import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '80g83p2r',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // Set to false for server-side
  token: process.env.SANITY_API_TOKEN, // This is server-only, so secure
})

export async function GET() {
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      content,
      _createdAt
    }`)
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
} 