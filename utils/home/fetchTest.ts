import {Testimonial} from '../../typing'
export const fetchTest = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getTest`);
    const data = await res.json()
    const testimonial:Testimonial[] = data.testimonial
    return testimonial;
}