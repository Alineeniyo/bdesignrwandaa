import React from 'react'

const Phero = () => {
  return (
    <>
       <div className="grid grid-cols-2 gap-12 mb-28 container mx-auto mt-8">
           <div className="container my-auto text-center">
              <h1 className='font-bold text-xl mb-6'>Printing & Branding in Bridgde Design</h1>
              <p className='text-lg font-medium mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus minima explicabo perferendis aliquam placeat laborum odit quidem! Quibusdam, corporis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga perspiciatis explicabo facilis veniam aliquam deleniti eaque magni, fugiat eum!</p>
              <div className="flex gap-4">
                 <button className=" text-white w-60  font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-500 hover:border-2  hover:border-rose-400 hover:bg-transparent">Make an appointment</button>

                 <button className=" text-black w-60 px-10 py-4  font-medium bg-slate-200 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-500 hover:border-2 hover:border-slate-400 hover:bg-transparent">View the post</button>
              </div>
           </div>
           <div className="w-full h-full">
             <img src="image/image2.jpg" alt="" className='object-fit h-full w-full my-auto rounded-lg '/>
           </div>
       </div>
    </>
  )
}

export default Phero