import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'popular_brand',
  title: 'Popular_brand',
  type: 'document',
  fields: [
    defineField({
      name:'popularbrand_logo',
      title:'popularbrand_logo',
      type:'image',
    }),
  ]
})
