import {Popular_brand} from '../../typing'
export const fetchBrand = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getBrand`);
    const data = await res.json()
    const brand:Popular_brand[] = data.brand
    return brand;
}