import {defineType, defineField} from 'sanity'

// Import object schemas
import seo from './objects/seo'
import blockContent from './objects/blockContent'

// Import e-commerce schemas
import product from './ecommerce/product'
import collection from './ecommerce/collection'

// Simple blog post schema
const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        }
      ]
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short description of the blog post (optional)',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 10,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'excerpt'
    }
  }
})

// Simple page schema
const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
  ],
})

export const schemaTypes = [
  // Object schemas
  seo,
  blockContent,
  
  // E-commerce schemas
  product,
  collection,
  
  // Content schemas
  post,
  page,
] 