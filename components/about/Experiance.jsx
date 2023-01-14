import React from 'react'

const Experiance = () => {
  return (
    <div className='bg-slate-800 p-8 container mx-auto mb-20'>
        
        <div className='grid grid-cols-2 gap-10 mb-10'>
         <video  controls className="w-full">
           <source src="" type="video/mp4" /> 
         </video>
         <div className="">
             <h1 className='text-2xl font-bold text-rose-400 mb-8'>Get home experience</h1>
             <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit quia quod veritatis ipsum, vel facere modi architecto consequatur et odio enim dolor consectetur sit ex explicabo ratione nihil iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsa suscipit, id eveniet dignissimos natus.</p>
             <div className="mt-10 flex justify-evenly">
              <button className=" text-white px-28 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-500 hover:border-2 hover:border-rose-400">Contact us</button>
               <button className=" text-black border-2 rounded-md border-rose-400 px-28 py-4 font-medium bg-trasparent mt-4 ease-in-out delay-100 duration-1000">Contact us</button>
             </div>

         </div>
        </div>
         {/* top video */}
        


        <div className="grid grid-cols-2 gap-4"></div>
        {/* experiance */}
        <div className="">
            <h1 className='my-8 font-bold text-2xl'>Super machine in Bridge Design</h1>
            <div className="container mx-auto">
                <div>
                    <h4 className='font-bold text-center text-rose-400 mb-2 text-1xl'>UV PRINTING</h4>
                    <div className="flex gap-4 ml-14 mb-4">
                       <img src="image/image2.jpg" alt="machine" className='object-fit h-80 w-80 mt-2'/>
                       <img src="image/image2.jpg" alt="machine" className='object-fit h-96 w-5/12'/>
                       <img src="image/image2.jpg" alt="machine" className='object-fit h-80 w-80 mt-2'/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiance