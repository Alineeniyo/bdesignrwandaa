export default{
    name:'home_hero',
    title:'Home_hero',
    type:'document',
    fields:[
        {
            name:'home_title',
            title:'Home_title',
            type:'string'
        },
        {
            name:'home_desc',
            title:'Home_desc',
            type:'string'
        },
        {
            name:'home_image',
            title:'Home_image',
            type:'image',
            options: {
            hotspot: true,
            }
        }
    ]
}