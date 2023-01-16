import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stiker',
  title: 'Stiker',
  type: 'document',
  fields: [
    defineField({
      name: 'sticker_title',
      title: 'Sticker_title',
      type: 'string',
    }),
    defineField({
      name: 'sticker_image',
      title: 'Sticker_image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to:[{
        type:'category',
      }]
    }),
  ]
})
