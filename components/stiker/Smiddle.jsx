import React from 'react'

const Smiddle = () => {
  return (
    <div className='container mx-auto mb-28'>
        {/* many boxes */}
          <div className="grid grid-cols-4">
            {/* left */}
            <div className="grid grid-row gap-4">

              <div className="flex flex-col gap-0 w-80 h-80 rounded bg-slate-200 p-4 cursor-pointer">
                <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
              </div>
              <div className="flex flex-col gap-0 w-80 h-80 rounded bg-slate-200 p-4 cursor-pointer">
                <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
              </div>

            </div>
            {/* middle */}
                <div className="grid grid-row gap-4">
                    <div className="flex flex-col gap-0 w-80 h-96 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                    </div>
                    <div className="flex flex-col gap-0 w-80 h-96 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                  </div>
               </div>
            {/* right */}
            <div className="">
                <div className="grid grid-row gap-4">
                    <div className="flex flex-col gap-0 w-80 h-80 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                    </div>
                    <div className="flex flex-col gap-0 w-80 h-80 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                  </div>
               </div>
            </div>
            {/* right-side */}
            <div className="">
                <div className="grid grid-row gap-4">
                    <div className="flex flex-col gap-0 w-80 h-96 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                    </div>
                    <div className="flex flex-col gap-0 w-80 h-96 rounded bg-slate-200 p-4 cursor-pointer">
                        <img src="images/image5.jpg" alt="" className='h-full object-cover'/>
                        <h4 className='w-full py-2 px-1.5 font-medium bg-rose-400 text-white'>Logo Design</h4>
                  </div>
               </div>
            </div>
          </div>
       </div>
  )
}

export default Smiddle