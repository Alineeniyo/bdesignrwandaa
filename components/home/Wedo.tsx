import React from 'react'

const Wedo = () => {
  return (
    <div className='max-w-7xl mx-auto mb-28 p-8'>
       {/* header_section */}
       <div className="text-center">
         <h2 className='text-3xl mb-2.5  font-bold text-rose-400'>What we do in our company</h2>
         <p className='font-semibold w-29 mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempore impedit similique a necessitatibus distinctio illo tenetur  </p>
       </div>
       
        
       {/* visual of what we do */}
       <div className="grid lg:grid-cols-2 md:grid-cols-1  mb-8 gap-x-8 md:gap-6 sm:gap-6">

        {/* many boxes */}
         <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full lg:grid-cols-3">
            <div className="flex flex-col gap-0 w-100 h-90 rounded bg-slate-200 p-4 cursor-pointer">
                <img src="image/image3.jpg" alt="" className='h-[20rem] md:h-full object-cover'/>
                <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white text-center'>Logo Design</h4>
            </div>

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

export default Wedo