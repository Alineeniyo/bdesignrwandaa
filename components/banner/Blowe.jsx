import React from 'react'
import Blowest from './Blowest'
const Blowe = () => {
  return (
    <div className=' bg-slate-600 p-10 pb-16'>
        <h1 className='font-bold text-2xl ml-48 text-white mb-4'>Road Signs</h1>
        <div className="grid grid-cols-4 container mx-auto gap-4">
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/> 
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>
            <img src="image/image2.jpg" alt="" className='h-full object-cover rounded-lg w-100 h-90'/>            
        </div>
        <button className=" ml-[50rem] text-white w-80 px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white  ease-in-out delay-100 duration-500 hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent">View more collection</button>

        <Blowest/>
    </div>
  )
}

export default Blowe