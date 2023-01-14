import React from 'react'

const Blowest = () => {
  return (
    <div className='grid grid-cols-2 gap-8 mx-36  mt-14 border-white border-2 rounded-lg p-5'>
        <div className="grid grid-cols-2  gap-4">
            <div className="grid grid-rows-2 gap-4">
                <img src="image/image3.jpg" alt="image" className='h-full object-cover rounded-lg '/>
                <img src="image/image3.jpg" alt="image" className='h-full object-cover rounded-lg'/>
            </div>
            <div className="">
                <img src="image/image3.jpg" alt="image" className='h-full object-cover rounded-lg'/>
            </div>
        </div>
        <div className="container my-auto">
            <h1 className='text-2xl font-bold mb-6'>Top selling product</h1>
            <p className='font-semibold mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore, culpa, temporibus corrupti laudantium fugit incidunt ipsam dolorum, doloribus nam sunt! Ex, assumenda veniam. Perspiciatis sequi iusto culpa voluptatem rerum!</p>
            <button className=" text-white w-80 px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white  ease-in-out delay-100 duration-500 hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent">View more collection</button>            
        </div>
    </div>
  )
}

export default Blowest