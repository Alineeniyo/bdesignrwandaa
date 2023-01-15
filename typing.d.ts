
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

export interface Heros extends sanityBody{
  _type:"home";
  image:Image
  home_desc:string
  home_title:string
}