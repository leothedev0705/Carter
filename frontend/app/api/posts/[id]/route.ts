import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '80g83p2r',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log('🔍 API: Fetching post with ID:', params.id)
    
    const post = await client.fetch(
      `*[_type == "post" && _id == $id][0] {
        _id,
        title,
        content,
        _createdAt
      }`,
      { id: params.id }
    )
    
    console.log('📄 API: Post result:', post)
    
    if (!post) {
      console.log('❌ API: Post not found for ID:', params.id)
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    console.log('✅ API: Returning post:', post.title)
    return NextResponse.json(post)
  } catch (error) {
    console.error('❌ API: Error fetching post:', error)
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
} 