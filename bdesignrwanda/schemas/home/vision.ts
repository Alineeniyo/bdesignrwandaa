import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vision',
  title: 'Vision',
  type: 'document',
  fields: [
     defineField({
      name:'mission_title',
      title:'Mission_title',
      type:'string',
    }),
    defineField({
      name:'mission_subtitle',
      title:'Mission_subtitle',
      type:'string',
    }),
  ]
})