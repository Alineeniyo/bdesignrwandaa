
// import Swiper core and required modules
import {Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
 const Test = () =>{
 
  return (
    <>
    <div className="container mx-auto grid lg:grid-cols-2 mb-14 md: sm:grid-cols-1">
        {/* image */}
         <video  controls className="w-full">
           <source src="" type="video/mp4" />
         </video>
        {/* word slider */}
    <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-11/12 flex flex-cols  lg:mt-20 lg:mb-28  sm:mt-6 lg:text-center sm:text-start"
    >
      <SwiperSlide>
            <h3 className="font-bold text-xl ">This is our Vision</h3>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque necessitatibus, blanditiis cum eligendi dolores facere! Quod harum dolore temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, harum!</p> 
       </SwiperSlide>
       <SwiperSlide>
            <h3 className="font-bold text-xl">This is our Mission</h3>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque necessitatibus, blanditiis cum eligendi dolores facere! Quod harum dolore temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, harum!</p> 
       </SwiperSlide>
    </Swiper>
    </div>

    {/* testimonials */}
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className='font-bold text-3xl text-rose-400 mb-4'>Testimonial</h2>
        <p className='mb-4 font-medium'>Here is happy client  They are working with but really applicited. </p>
      </div>
      <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="sm:w-10/12 pb-8 lg:w-4/12"
    >
      <SwiperSlide className='mb-10 bg-black text-white text-center py-4 px-2 rounded-xl'>
        <img src="image/image2.jpg" alt="image" 
        className='w-40 rounded-lg mx-auto mb-2' />
         <h3 className='font-bold text-xl mb-2 text-blue-400'>Irakoze Divine</h3>
         <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit beatae, perferendis error nobis alias quos doloremque ullam corrupti architecto.</p>
       </SwiperSlide>
       <SwiperSlide>
        <img src="image/image2.jpg" alt="image" className='w-28 rounded-lg mx-auto mb-2' />
         <h3 className='font-bold text-xl mb-2 text-blue-400'>Irakoze Divine</h3>
         <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit beatae, perferendis error nobis alias quos doloremque ullam corrupti architecto.</p>
       </SwiperSlide>
    </Swiper>

    </div>
    </>
  );
}


export default Test