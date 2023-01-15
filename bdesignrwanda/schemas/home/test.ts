import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name:'testimony_title',
      title:'Testimony_title',
      type:'string',
    }),
    defineField({
      name:'testimony_sub_title',
      title:'Testimony_sub_title',
      type:'string',
    }),
    defineField({
      name:'testimony_person_name',
      title:'Testimony_person_name',
      type:'string',
    }),
    defineField({
      name:'testimony_person_words',
      title:'Testimony_person_words',
      type:'string',
    }),
    defineField({
      name:'testimony_person_image',
      title:'Testimony_person_image',
      type:'image',
    }),
  ]
})