import React from 'react'
import {Popular_brand} from '../../typing'
import {urlFor} from '../../sanity'
type Props = {
    brand:Popular_brand[]
}
const Brand = ({brand}:Props) => {
  return (
    <>
    <div className='w-full bg-slate-400  py-4 px-20'>
         <h2 className='font-bold text-2xl text-center'>Popular brand work with us</h2>
         <div className='h-auto py-4 flex gap-14 sm:gap-4 container mx-auto justify-evenly'> 
         {brand.map((brandata) =>{
           
            return(
               <img src={urlFor(brandata.popularbrand_logo).url()} alt="brand" className='object-fit lg:h-60 lg:w-60  sm:h-44 sm:w-44 my-auto rounded-lg' key={brandata._id}/>
            )        
         })}
     </div>
    </div>
    </>
   
  )
}

export default Brand