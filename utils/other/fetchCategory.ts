import { Category } from '../../typing'
export const fetchCategory= async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/other/getCategory`);
    const data = await res.json()
    const category:Category[] = data.category
    return category;
}