import {Vision} from '../../typing'
export const fetchVision= async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getVision`);
    const data = await res.json()
    const vision:Vision[] = data.vision
    return vision;
}