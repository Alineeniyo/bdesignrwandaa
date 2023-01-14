import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight} from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

import { Navigation } from "swiper";

const Dhome = ()=> {
    const background = {
         background:"rgba(0,0,0,0.6) url(images/image4.jpg)",
         backgroundBlendMode:"darken",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",
         backgroundPosition:"center"
         
     }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper w-full mb-14 h-[40rem]">
        <SwiperSlide className="w-full " style={background}>
          <div className="w-full pt-40 ml-20 pl-12 my-9">
            <div className="w-5/12  ">
              <h4 className='text-white font-bold text-xl text-center'>BRIDGE  DESIGN DESIGNED TO MAKE YOUR  MOMENTS BETTER</h4>
              <p className="text-white mt-2 font-medium">Let's Join A great Company in Rwanda To create unforgottable moments with our people...   cupiditate iste vitae? Necessitatibus ipsam quos nisi? Eum distinctio quo veniam dolor aspernatur iure accusamus sit reiciendis repellendus possimus!</p>
             </div>
               <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000">Contact us <FaArrowRight className="inline ml-1"/></button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-full " style={background}>
          <div className="w-full pt-40 pl-12">
            <div className="w-5/12 ">
              <h4 className='text-white font-bold text-xl text-center'>BRIDGE  DESIGN DESIGNED TO MAKE YOUR  MOMENTS BETTER</h4>
              <p className="text-white mt-2 font-medium">Let's Join A great Company in Rwanda To create unforgottable moments with our people...   cupiditate iste vitae? Necessitatibus ipsam quos nisi? Eum distinctio quo veniam dolor aspernatur iure accusamus sit reiciendis repellendus possimus!</p>
             </div>
               <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000">Contact us <FaArrowRight className="inline ml-1"/></button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-full " style={background}>
          <div className="w-full pt-40 pl-12">
            <div className="w-5/12 ">
              <h4 className='text-white font-bold text-xl text-center'>BRIDGE  DESIGN DESIGNED TO MAKE YOUR  MOMENTS BETTER</h4>
              <p className="text-white mt-2 font-medium">Let's Join A great Company in Rwanda To create unforgottable moments with our people...   cupiditate iste vitae? Necessitatibus ipsam quos nisi? Eum distinctio quo veniam dolor aspernatur iure accusamus sit reiciendis repellendus possimus!</p>
             </div>
               <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000">Contact us <FaArrowRight className="inline ml-1"/></button>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Dhome
