import React from 'react'
import { GetStaticProps } from 'next'
import {Hero , Wedo , Test ,Post } from '../components'
import {Heros} from '../typing'
import { fetchHero } from '@/utils/home/fetchHero'

type Props = {
  hero:Heros[]
}
const Home = ({hero}: Props) => {

  return (
    <>
      <Hero hero={hero}/>
      <Wedo/>
      {/* <Test/>
      <Post/> */}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  
  const hero: Heros[] = await fetchHero();

  return {
    props:{
       hero,
    },
    revalidate: 10,
  }
}

export default Home