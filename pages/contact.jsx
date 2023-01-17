import React from 'react'
import {FaFacebookF , FaInstagram ,FaLinkedinIn} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='my-10 container mx-auto mt-28'>
        <h1 className='font-bold text-2xl text-center text-rose-400 mb-6'>Get in Contanct with us</h1>
        <div className="container mx-auto flex gap-12 sm:flex-col justify-between items-center md:flex-row w-8/12">
            {/* left side */}
           <div className="grid md:grid-rows-3  gap-4">
              <div className="px-8 py-10 text-center bg-rose-400 w-72 rounded-xl">
                 <FaFacebookF className='container mx-auto text-white'/>
                 <h4 className='text-white font-bold'>Email</h4>
                 <h5 className='text-white font-semibold'>bridegedesign@gmail.com</h5>
                 <button className='text-white font-medium'>Send message</button>
              </div>
              <div className="px-8 py-10 text-center bg-rose-400 w-72 rounded-xl">
                 <FaFacebookF className='container mx-auto text-white'/>
                 <h4 className='text-white font-bold'>Messenger</h4>
                 <h5 className='text-white font-semibold'>bridegedesign@gmail.com</h5>
                 <button className='text-white font-medium'>Send message</button>
              </div>
              <div className="px-8 py-10 text-center bg-rose-400 w-72 rounded-xl">
                 <FaFacebookF className='container mx-auto text-white'/>
                 <h4 className='text-white font-bold'>Whatsapp</h4>
                 <h5 className='text-white font-semibold'>bridegedesign@gmail.com</h5>
                 <button className='text-white font-medium'>Send message</button>
              </div>
           </div>
           {/* right side */}
               <form className='flex flex-col gap-4 w-full'>
                 <input type="text" placeholder='Enter your name' className='border-2 text-slate-400 border-rose-100 w-full p-3 rounded'/>
                 <input type="text" placeholder='Enter your Email' className='border-2 text-slate-400 border-rose-100 w-full p-3 rounded' />
                 <textarea  className='border-2 border-rose-100 rounded-lg w-full h-72 text-slate-400' value="write for me here">

                 </textarea>
               </form>
        </div>
    </div>
  )
}

export default Contact