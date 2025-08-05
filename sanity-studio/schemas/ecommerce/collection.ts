import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Collection Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline or subtitle (e.g., "Silence no more")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Statement Pieces', value: 'statement'},
          {title: 'Essentials', value: 'basics'},
          {title: 'Limited Edition', value: 'exclusive'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'isNew',
      title: 'New Collection',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Collection',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'itemCount',
      title: 'Number of Items',
      type: 'number',
      description: 'Approximate number of items in this collection',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'content',
      title: 'Content',
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
      subtitle: 'subtitle',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, category, media} = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle} • ${category}` : category,
        media,
      }
    },
  },
}) 