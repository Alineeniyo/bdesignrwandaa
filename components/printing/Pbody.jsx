import React from 'react'

const Pbody = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-4 container mx-auto">
            {/* left */}
            <div>
               <div className="mb-6">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='font-medium text-slate-600'>Gift describution</p>
                <h3 className='font-bold text-lg'>Gift name</h3>
               </div>

                <div className="mb-6">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>

              <div className="mb-6">
                <img src="images/image2.jpg" alt="post" className='object-fit h-80 rounded-md'/>
                <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>
            </div>
            {/* middle */}
            <div className="ml-10">
              <div className="mb-6">
                 <img src="images/image2.jpg" alt="post" className='object-fit h-64 rounded-md'/>
                 <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                 <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>  
               <div className="mb-6">
                 <img src="images/image2.jpg" alt="post" className='object-fit h-64 rounded-md'/>
                 <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                 <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>
               <div className="mb-6">
                 <img src="images/image2.jpg" alt="post" className='object-fit h-64 rounded-md'/>
                 <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                 <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>                          
            </div>
              {/* right */}
            <div className="">
                <div className="mb-6">
                  <img src="images/image2.jpg" alt="post" className='object-fit h-96 rounded-md'/>
                  <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                  <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>
               <div className="mb-6">
                  <img src="images/image2.jpg" alt="post" className='object-fit h-96 rounded-md'/>
                  <p className='mt-4 font-medium text-slate-600'>Gift describution</p>
                  <h3 className='mt-1.5 font-bold text-lg'>Gift name</h3>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Pbody