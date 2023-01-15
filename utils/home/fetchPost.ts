import {New_post} from '../../typing'
export const fetchPost = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getPost`);
    const data = await res.json()
    const post:New_post[] = data.post
    return post;
}