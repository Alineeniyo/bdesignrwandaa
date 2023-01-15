import React from 'react'
import { GetStaticProps } from 'next'
import {Hero , Wedos , Test ,Post ,Brand} from '../components'
import {Heros , Wedo ,Testimonial,New_post,Vision, Popular_brand} from '../typing'
import { fetchHero } from '@/utils/home/fetchHero'
import { fetchVision } from '@/utils/home/fetchVision'
import { fetchPost } from '@/utils/home/fetchPost'
import { fetchTest } from '@/utils/home/fetchTest'
import { fetchWedo } from '@/utils/home/fetchWedo'
import { fetchBrand } from '@/utils/home/fetchBrand'

type Props = {
  hero:Heros[]
  wedo:Wedo[]
  test:Testimonial[]
  post:New_post[]
  vision:Vision[]
  brand:Popular_brand[]
}
const Home = ({hero,wedo,test,post,vision,brand}: Props) => {

  return (
    <>
      <Hero hero={hero}/>
      <Wedos wedo={wedo}/>
      <Test test={test}/>
      <Post post={post}/>
      <Brand brand={brand}/>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  
  const hero: Heros[] = await fetchHero();
  const wedo: Wedo[] = await fetchWedo();
  const test: Testimonial[] = await fetchTest();
  const post: New_post[] = await fetchPost();
  const vision: Vision[] = await fetchVision();
  const brand: Popular_brand[] = await fetchBrand();

  return {
    props:{
       hero,wedo,test,post,vision,brand
    },
    revalidate: 10,
  }
}

export default Home