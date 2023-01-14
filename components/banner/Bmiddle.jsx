import React from 'react'

const Bmiddle = () => {
  return (
    <div className='mb-28'>
        <hr className='mb-4'/>
        <div className="grid grid-cols-2 container mx-auto gap-12 rounded-lg">
            {/* left */}
             <div className="">
                <div className="">
                    <h2 className='mb-4 font-bold text-2xl text-rose-400'>OUTDOOR VS INDOOR</h2>
                    <p className='font-semibold mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia unde ex cumque dignissimos exercitationem repellendus atque quaerat dolore eveniet.</p>
                    <img src="image/image1.jpg" alt="image-right" className='w-full' />
                </div>
             </div>
            {/* right */}
             <div className="grid grid-cols-3 gap-4 w-full ">
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>
                <img src="image/image3.jpg" alt="img-in" className='h-full object-cover rounded-lg'/>                
             </div>
        </div>
    </div>
  )
}

export default Bmiddle