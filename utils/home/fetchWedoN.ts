import {Wedonew} from '../../typing'
export const fetchWedoN = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getWedonew`);
    const data = await res.json()
    const wedon:Wedonew[] = data.wedon
    return wedon;
} 