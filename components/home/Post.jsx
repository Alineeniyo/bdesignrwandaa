import React from 'react'
// import Swiper core and required modules
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Post = () => {
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
    <div className='container mx-auto mt-14 md:w-9/12'>
        <h1 className='font-bold text-2xl mb-4 text-center'>What new to day?</h1>
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
      className="bg-slate-400"
    >
      <SwiperSlide>
        <div className="">
            <img src="image/image1.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image2.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image3.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image2.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image2.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image1.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
            <img src="image/image1.jpg" alt="new post" className='object-fit h-80 w-60'/>
        </div>
        <h3 className='font-bold mt-1'>Best logo</h3>
      </SwiperSlide>
    </Swiper>
    <button className='w-80 bg-rose-400 p-4 rounded font-semibold text-white my-8 ml-[30rem] sm:ml-[6rem]'>
        View more collection
    </button>
   </div>
  )
}

export default Post