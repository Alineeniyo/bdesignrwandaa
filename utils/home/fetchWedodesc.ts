import {Wedodesc} from '../../typing'
export const fetchWedodesc = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getWedodesc`);
    const data = await res.json()
    const wedod:Wedodesc[] = data.wedod
    return wedod;
} 