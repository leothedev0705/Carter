import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline or subtitle for the product',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price (for sales)',
      type: 'number',
      description: 'Original price before discount',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'T-Shirts', value: 't-shirts'},
          {title: 'Hoodies', value: 'hoodies'},
          {title: 'Pants', value: 'pants'},
          {title: 'Jackets', value: 'jackets'},
          {title: 'Shoes', value: 'shoes'},
          {title: 'Accessories', value: 'accessories'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
      initialValue: 4.5,
    }),
    defineField({
      name: 'isNew',
      title: 'New Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isSale',
      title: 'On Sale',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Product Image',
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
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'XS', value: 'XS'},
          {title: 'S', value: 'S'},
          {title: 'M', value: 'M'},
          {title: 'L', value: 'L'},
          {title: 'XL', value: 'XL'},
          {title: 'XXL', value: 'XXL'},
          {title: '28', value: '28'},
          {title: '30', value: '30'},
          {title: '32', value: '32'},
          {title: '34', value: '34'},
          {title: '36', value: '36'},
          {title: '38', value: '38'},
          {title: '40', value: '40'},
          {title: '42', value: '42'},
          {title: '44', value: '44'},
        ],
      },
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Black', value: 'Black'},
          {title: 'White', value: 'White'},
          {title: 'Red', value: 'Red'},
          {title: 'Blue', value: 'Blue'},
          {title: 'Green', value: 'Green'},
          {title: 'Yellow', value: 'Yellow'},
          {title: 'Purple', value: 'Purple'},
          {title: 'Pink', value: 'Pink'},
          {title: 'Orange', value: 'Orange'},
          {title: 'Brown', value: 'Brown'},
          {title: 'Gray', value: 'Gray'},
          {title: 'Navy', value: 'Navy'},
        ],
      },
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{type: 'collection'}],
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      initialValue: 100,
    }),
    defineField({
      name: 'weight',
      title: 'Weight (grams)',
      type: 'number',
      description: 'Product weight for shipping calculations',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {name: 'length', title: 'Length (cm)', type: 'number'},
        {name: 'width', title: 'Width (cm)', type: 'number'},
        {name: 'height', title: 'Height (cm)', type: 'number'},
      ],
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of materials used in the product',
    }),
    defineField({
      name: 'care',
      title: 'Care Instructions',
      type: 'text',
      rows: 3,
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
      category: 'category',
      price: 'price',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, category, price, media} = selection
      return {
        title,
        subtitle: `${category} • $${price}`,
        media,
      }
    },
  },
}) 