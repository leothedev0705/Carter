import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Helper function to get image URL from Sanity image data
export const getImageUrl = (image: any): string => {
  if (!image || !image.asset) return '/images/products/placeholder.jpg'
  
  const { asset } = image
  if (asset._ref) {
    // Construct URL from asset reference
    const [fileId, dimensions, format] = asset._ref.split('-')
    return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileId}-${dimensions}.${format}`
  }
  
  // If asset has direct URL
  if (asset.url) {
    return asset.url
  }
  
  return '/images/products/placeholder.jpg'
}

// Product queries
export const getProducts = async () => {
  const query = `*[_type == "product"] {
    _id,
    title,
    subtitle,
    slug,
    description,
    price,
    originalPrice,
    category,
    tags,
    rating,
    isNew,
    isSale,
    featured,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    images[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    sizes,
    colors,
    stock,
    "collection": collection->{
      _id,
      title,
      slug
    }
  }`
  
  return await client.fetch(query)
}

export const getProductBySlug = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    price,
    originalPrice,
    category,
    tags,
    rating,
    isNew,
    isSale,
    featured,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    images[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    sizes,
    colors,
    stock,
    weight,
    dimensions,
    materials,
    care,
    "collection": collection->{
      _id,
      title,
      slug
    }
  }`
  
  return await client.fetch(query, { slug })
}

export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && featured == true] {
    _id,
    title,
    subtitle,
    slug,
    price,
    originalPrice,
    category,
    tags,
    rating,
    isNew,
    isSale,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }`
  
  return await client.fetch(query)
}

// Collection queries
export const getCollections = async () => {
  const query = `*[_type == "collection"] {
    _id,
    title,
    subtitle,
    slug,
    description,
    category,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    images[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    isNew,
    featured,
    itemCount
  }`
  
  return await client.fetch(query)
}

export const getCollectionBySlug = async (slug: string) => {
  const query = `*[_type == "collection" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    category,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    images[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    isNew,
    featured,
    itemCount,
    content
  }`
  
  return await client.fetch(query, { slug })
}

export const getProductsByCollection = async (collectionSlug: string) => {
  const query = `*[_type == "product" && collection->slug.current == $collectionSlug] {
    _id,
    title,
    subtitle,
    slug,
    price,
    originalPrice,
    category,
    tags,
    rating,
    isNew,
    isSale,
    mainImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }`
  
  return await client.fetch(query, { collectionSlug })
}

// Blog post queries (existing)
export const getPosts = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    excerpt,
    content,
    coverImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    _createdAt
  }`
  
  return await client.fetch(query)
}

export const getPostById = async (id: string) => {
  const query = `*[_type == "post" && _id == $id][0] {
    _id,
    title,
    excerpt,
    content,
    coverImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    _createdAt
  }`
  
  return await client.fetch(query, { id })
}

// Types
export interface SanityProduct {
  _id: string
  title: string
  subtitle?: string
  slug: { current: string }
  description?: string
  price: number
  originalPrice?: number
  category: string
  tags?: string[]
  rating: number
  isNew: boolean
  isSale: boolean
  featured: boolean
  mainImage: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }
  images?: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }[]
  sizes?: string[]
  colors?: string[]
  stock: number
  weight?: number
  dimensions?: {
    length?: number
    width?: number
    height?: number
  }
  materials?: string[]
  care?: string
  collection?: {
    _id: string
    title: string
    slug: { current: string }
  }
}

export interface SanityCollection {
  _id: string
  title: string
  subtitle?: string
  slug: { current: string }
  description?: string
  category: string
  image: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }
  images?: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }[]
  isNew: boolean
  featured: boolean
  itemCount: number
  content?: any
}

export interface SanityPost {
  _id: string
  title: string
  excerpt?: string
  content?: string
  coverImage?: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
      }
    }
  }
  _createdAt: string
} 