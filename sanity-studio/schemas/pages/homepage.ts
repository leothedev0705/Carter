import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}]
        }
      ],
    }),
    defineField({
      name: 'featuredCollections',
      title: 'Featured Collections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'collection'}]
        }
      ],
    }),
    defineField({
      name: 'content',
      title: 'Additional Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}) 