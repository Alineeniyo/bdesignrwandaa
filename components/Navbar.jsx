import React from 'react'
import Link from 'next/link'
import { useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseFill} from 'react-icons/ri'

const Navbar = () => {

//show navbar
const [navbar , setNavbar] = useState(false);

  return (
     <nav className='bg-slate-400 px-6 py-2  w-screen fixed z-50'>
      <div className='flex justify-between '>
        {/* sidenav_main_left */}
        <Link href="/">
        <div className='w-10'>
          <img src="logo.png" alt="logo" />
        </div>
        </Link>

        {/* list menu */}
        <ul className='hidden  md:flex gap-6 justify-center text-center pt-2 md:px-10'>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/about'>ABOUT US</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/banner'>SIGNS & BANNER</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/printing'>PRINTING & BRANDING</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/sticker'>PROMOTION MATERIALS</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/gift'>GIFT MAKING</Link>
          </li>
          <li className='font-semibold hover:text-orange-500'>
            <Link href='/decoration'>DECORATION</Link>
          </li>
           <li className='font-semibold hover:text-orange-500'>
            <Link href='/contact'>CONTACT US</Link>
          </li>
        </ul>

        <button className='md:hidden text-3xl ' onClick={() => setNavbar(!navbar)}>
            {navbar? <RiCloseFill/>:<GiHamburgerMenu/>}
        </button>
    </div>
    {/* responsive navbar */}
      <div className={`${navbar?"md:inline-block": "hidden"}`}>
        <ul className='mt-8 h-screen flex flex-col space-y-10'>
          <li className='font-semibold text-1xl hover:text-orange-500 ' onClick={()=>setNavbar(!navbar)}>
            <Link href='/'>HOME</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/about'>ABOUT US</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/banner'>SIGNS & BANNER</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/printing'>PRINTING & BRANDING</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/sticker'>PROMOTION MATERIALS</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/gift'>GIFT MAKING</Link>
          </li>
          <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/decoration'>DECORATION</Link>
          </li>
           <li className='font-semibold hover:text-orange-500  text-1xl' onClick={()=>setNavbar(!navbar)}>
            <Link href='/contact'>CONTACT US</Link>
          </li>
        </ul>
      </div>
  </nav> 
  )
}

export default Navbar