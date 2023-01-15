import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight} from 'react-icons/fa'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Hero = ()=> {
    const background = { 
         background:`rgba(0,0,0,0.6)`,
         backgroundBlendMode:"darken",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",
         backgroundPosition:"center",
         height:'100%',
         width:'100%'
         
     }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper w-full mb-14 h-[40rem]">
        <SwiperSlide className="w-full relative">
          <img src="" alt="slider_image" className="absolute w-full h-full" style={background}/>
          <div className="w-full pt-40 ml-20 pl-12 my-9">
            <div className="w-5/12  ">
              <h4 className='text-white font-bold text-xl text-center'>props.home_desc</h4>
              <p className="text-white mt-2 font-medium">homw in all people</p>
             </div>
               <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000">Contact us <FaArrowRight className="inline ml-1"/></button>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero