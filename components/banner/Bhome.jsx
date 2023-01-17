import React from 'react'
import {FaFacebookF , FaInstagram ,FaLinkedinIn , FaArrowRight} from 'react-icons/fa'
const Bhome = () => {
  return (
    <div className='grid grid-cols-2 gap-8 container mx-auto mb-20 mt-28'>
        <div className="flex flex-col justify-evenly">
        <h2 className='font-bold text-2xl underline underline-offset-4'>PRINTING & BANNERS</h2>

         <button className=" text-white w-80 px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white  ease-in-out delay-100 duration-500 hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent">Contact us <FaArrowRight className="inline ml-1"/></button>

            {/* banner bottom */}
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
             {/* end bottom */}

         </div>
        <div>
            <img src="image/banner.png" alt="two_slides_image" />
        </div>
    </div>
  )
}

export default Bhome