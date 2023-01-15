import {Heros} from '../../typing'
export const fetchHero = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/getHero`);
    const data = await res.json()
    const hero:Heros[] = data.hero
    return hero;
}