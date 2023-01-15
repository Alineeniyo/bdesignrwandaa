import {Wedo} from '../../typing'
export const fetchWedo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getWedo`);
    const data = await res.json()
    const wedo:Wedo[] = data.wedo
    return wedo;
} 