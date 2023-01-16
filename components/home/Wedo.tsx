import React from 'react'
import Wedodes from './wedoDe'
import Wedob from './wedoBox'
import {urlFor} from '../../sanity'
import { GetStaticProps } from 'next'
import { fetchWedoN } from '@/utils/home/fetchWedoN'
import { fetchWedodesc } from '@/utils/home/fetchWedodesc'
import { fetchWedob } from '@/utils/home/fetchwedob'
import {Wedoboxes,Wedodesc} from '../../typing'
type Props = {
  desc:Wedodesc[]
  boxes:Wedoboxes[] 
}

const Wedos = ({desc,boxes}: Props) => {
  return (
    <div className='max-w-7xl mx-auto mb-28 p-8'>

      
       {/* header_section */}
       <div className="text-center">
         <h2 className='text-3xl mb-2.5  font-bold text-rose-400'>What we do in our company</h2>
         {/* {
          desc.map((descr) =>{
            return(
              <h1>Hellow</h1>
            )
          })
         }
         <Wedodes wedod={desc}/> */}
       </div>
       
        
       {/* visual of what we do */}
       <div className="grid lg:grid-cols-2 md:grid-cols-1  mb-8 gap-x-8 md:gap-6 sm:gap-6">

        {/* many boxes */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full lg:grid-cols-3">
                 <Wedob wdob={boxes}/>    
            </div>
         {/* larger-visual */}
         <div className="w-full relative sm:order-1">
            <img src="image/new.png" alt="new" className='absolute'/>
            <img src="image/image1.jpg" alt="new product" className='w-full h-full ' />
            <h4 className=' p-4 h-15 w-11/12 ml-8 font-medium bg-white text-slate-900 absolute bottom-5'>Logo Design</h4>
         </div>
       </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () =>{
  
  const desc:Wedodesc[] = await fetchWedodesc()
  const boxes:Wedoboxes[] = await fetchWedob()

  return {
    props:{
      desc,boxes
    },
    revalidate: 10,
  }
}










export default Wedos