import React from 'react'
import { FaArrowRight} from 'react-icons/fa'
const Ghero = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto gap-40 mt-6 mb-28'>
        {/* description */}
        <div className="w-full my-auto">
            <h2 className='font-bold text-xl mb-8'>Gift is Something Voluntarily Transferred By  Person To Another Without Compensation</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minus.</p>
            <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-8 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000 hover:border-4 hover:border-rose-100">Contact us <FaArrowRight className="inline ml-1"/></button>
        </div>
        {/* image */}
        <div className="">
            <img src="image/image1.jpg" alt="gift_img" className='object-fit h-[30rem] rounded-xl'/>
        </div>
    </div>
  )
}

export default Ghero