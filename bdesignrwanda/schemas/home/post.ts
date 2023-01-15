import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'new_post',
  title: 'New_post',
  type: 'document',
  fields: [
    defineField({
      name:'what_new_image',
      title:'What_new_image',
      type:'image',
    }),
    defineField({
      name:'what_new_name',
      title:'What_new_name',
      type:'string',
    }),
  ]
})
