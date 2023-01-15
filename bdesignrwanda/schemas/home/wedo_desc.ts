import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wedo_description',
  title: 'Wedo_description',
  type: 'document',
  fields: [  
    defineField({
      name:'subwork_desc',
      title:'Subwork_desc',
      type:'string',
    }),
  ]
})
