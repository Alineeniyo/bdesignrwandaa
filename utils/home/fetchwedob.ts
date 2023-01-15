import {Wedoboxes} from '../../typing'
export const fetchWedob = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getWedobox`);
    const data = await res.json()
    const wedob:Wedoboxes[] = data.wedob
    return wedob;
} 