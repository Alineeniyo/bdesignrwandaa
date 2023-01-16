
import { Sticker } from '../../typing'
export const fetchSticker= async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/other/getSticker`);
    const data = await res.json()
    const sticker:Sticker[] = data.sticker
    return sticker;
}