import React from 'react'
import Link from 'next/link'
import {FaFacebookF , FaInstagram ,FaLinkedinIn , FaArrowRight} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-screen bg-slate-800 text-slate-200 pb-2 pt-12 '>
      {/* upper text */}
        <div className='flex flex-col md:flex-row justify-evenly py-4 sm:gap-11 pl-20 sm:space-y-4'>
           {/* quick link */}
           <div>
            <h4 className='text-slate-200 font-bold text-xl pb-2'>Quick link</h4>

            <ul className='flex flex-col text-slate-200'>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/'>Home</Link>
              </li>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/about'>About us</Link>
              </li>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/banner'>Signs & Banner</Link>
              </li>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/branding'>Printing & Branding</Link>
              </li>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/promotion'>Promotion materials</Link>
              </li>
              <li className='hover:text-rose-400 py-1 font-semibold'>
                <Link href='/gift'>Gift Making</Link>
              </li>
          </ul>
           </div>
           {/* Location */}
           <div className='text-slate-200 mt-12'>
              <h4 className='text-slate-200 font-bold text-xl pb-2'>Location</h4>
              <p className='font-semibold'>KG 045,Rwanda,kigali City</p>
              <p className='font-semibold mb-2.5'>Our social media</p>
              <div className='flex'>
               <div className='p-1.5 rounded-full bg-white text-slate-700  hover:bg-rose-400 hover:text-white mr-2 '>
                 <FaFacebookF/>
               </div>
               <div className='p-1.5 rounded-full bg-white text-slate-700 hover:bg-rose-400 hover:text-white mr-2'>
                 <FaInstagram/>
               </div>
               <div className='p-1.5 rounded-full bg-white text-slate-700 hover:bg-rose-400 hover:text-white mr-2 '>
                 <FaLinkedinIn/>
               </div>
            </div>
           </div>
           {/* subscribution */}
           <div className='mt-12'>
              <h4 className='text-slate-200 font-bold text-xl pb-2'>Keep in touch</h4>
              <form className='bg-white flex justify-between  w-5/12 md:w-10/12 relative'>
                <input type="text" placeholder='Enter your Email'className='relative w-30 h-10 p-2'/>
                <button className='bg-rose-400  rounded-l-lg absolute right-0 h-full w-2/12'>
                  <FaArrowRight className='text-2xl pl-2'/>
                </button>
              </form>
              <p className='text-slate-200 font-semibold mt-1'>Sign up to ger Our notifacation every day an g be with us </p>
           </div> 

        </div>
      {/* lower text */}
      <h4 className='text-center w-full'>All rights reserved@2023</h4>
      <div className='w-90  mt-4'>
        <hr/>
      </div>
    </footer>
  )
}

export default Footer