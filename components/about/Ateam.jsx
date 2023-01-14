import React from 'react'
// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {FaFacebookF , FaInstagram ,FaLinkedinIn} from 'react-icons/fa'
const Ateam = () => {
    const point = {
     0:{
       slidesPerView:1
     },
     520:{
        slidesPerView:2
     },
     950:{
        slidesPerView:5
     }
  }
    const nav = {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
  }
  return (
    <div className='mb-28'>
    <h1 className='font-bold text-2xl text-center mb-10 '>Meet our team member</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={12}
      slidesPerView={5}
      breakpoints={point}
      loop={true}
      fade ='true'
      grabCursor='true'
      centeredSlide='true'
      navigation ={nav }
      className='container mx-auto'
      >
        <SwiperSlide className='border-2 border-rose-400 w-80 h-80 p-10'>
        <img src="image/image2.jpg" alt="worker" />
          <p className='text-slate-400'>CEO and Project Manager</p>
          <h4 className='font-bold text-xl mb-1'>Aline</h4>
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
       </SwiperSlide>
               
        <SwiperSlide className='border-2 border-rose-400 w-80 h-80 p-10'>
        <img src="image/image2.jpg" alt="worker" />
          <p className='text-slate-400'>CEO and Project Manager</p>
          <h4 className='font-bold text-xl mb-1'>Aline</h4>
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className='border-2 border-rose-400 w-80 h-80 p-10'>
        <img src="image/image2.jpg" alt="worker" />
          <p className='text-slate-400'>CEO and Project Manager</p>
          <h4 className='font-bold text-xl mb-1'>Aline</h4>
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className='border-2 border-rose-400 w-80 h-80 p-10'>
        <img src="image/image2.jpg" alt="worker" />
          <p className='text-slate-400'>CEO and Project Manager</p>
          <h4 className='font-bold text-xl mb-1'>Aline</h4>
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
       </SwiperSlide>
       <SwiperSlide className='border-2 border-rose-400 w-80 h-80 p-10'>
        <img src="image/image2.jpg" alt="worker" />
          <p className='text-slate-400'>CEO and Project Manager</p>
          <h4 className='font-bold text-xl mb-1'>Aline</h4>
          <div className="flex gap-4">
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent '>
                <FaFacebookF />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaInstagram />
            </div>
            <div className='bg-rose-400 p-4 rounded-full text-white hover:border-2 hover:text-black hover:border-rose-400 hover:bg-transparent'>
                <FaLinkedinIn />
            </div>
          </div>
       </SwiperSlide>
      </Swiper>
    
   </div>  
  )
}

export default Ateam