import React from 'react'

const Gpost = () => {
  return (
    <div className='container mx-auto mb-14'>
        <h2 className=' mb-4 font-bold text-xl text-rose-400 mb-10'>THIS IS OUR POST TO DAY</h2>
        <div className="grid grid-cols-3 container mx-auto gap-10">
            <div className="">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium '>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
            </div>
            <div className="">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium '>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
            </div>
            <div className="">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium '>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
            </div>
            <div className="">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium '>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
            </div>
                         
        </div>
    </div>
  )
}

export default Gpost