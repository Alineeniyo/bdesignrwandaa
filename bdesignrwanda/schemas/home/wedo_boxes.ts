import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wedo_boxes',
  title: 'Wedo_boxes',
  type: 'document',
  fields: [  
    defineField({
      name:'work_title',
      title:'Work_title',
      type:'string',
    }),
    defineField({
      name:'work_image',
      title:'Work_image',
      type:'image',
    }),
  ]
})
