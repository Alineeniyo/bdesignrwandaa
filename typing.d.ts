
interface sanityBody{
    _createdAt:string;
    _id:string;
    _updateAt:string;
}

interface Image {
    _type:"image";
    asset: {
        _ref:string;
        _type:"reference";
    }
}
// home fetching is here
export interface Heros extends sanityBody{
  _type:"home";
  image:Image
  home_desc:string
  home_title:string
}
export interface Wedo extends sanityBody{
  _type:"what_we_do";
  new_image:Image
  new_word:string
  subwork_title:string
  work_image:Image
  work_title:string
  worktitle_onimage:string
  
}

// wedo section 
export interface Wedodesc extends sanityBody{
  _type:"wedo_description";
  subwork_desc:string 
}
export interface Wedoboxes extends sanityBody{
  _type:"wedo_boxes";
  work_title:string 
  work_image:image
}
export interface Wedonew extends sanityBody{
  _type:"wedo_new'";
  text_new:string 
  image_new:image
}




export interface Vision extends sanityBody{
  _type:"vision";
  mission_subtitle:string
  mission_title:string
}
export interface Testimonial extends sanityBody{
  _type:"testimonial";
  testimony_person_image:Image
  testimony_person_name:string
  testimony_person_words:string
  testimony_sub_title:string
  testimony_title:string
}
export interface New_post extends sanityBody{
  _type:"new_post";
  what_new_image:Image
  what_new_name:string
}
export interface Popular_brand extends sanityBody{
  _type:"popular_brand";
  popularbrand_logo:Image
  popularbrand_title:string
}
