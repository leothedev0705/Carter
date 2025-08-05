import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'twitter', title: 'Twitter', type: 'url'},
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'email', title: 'Email', type: 'email'},
        {name: 'phone', title: 'Phone', type: 'string'},
        {name: 'address', title: 'Address', type: 'text'},
      ],
    }),
  ],
}) 