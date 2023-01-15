import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wedo_new',
  title: 'Wedo_new',
  type: 'document',
  fields: [  
    defineField({
      name:'image_new',
      title:'Image_new',
      type:'image',
    }),
    defineField({
      name:'text_new',
      title:'Text_new',
      type:'string',
    }),
  ]
})
