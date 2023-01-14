import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight} from 'react-icons/fa'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

import { Navigation } from "swiper";

const Shero = ()=> {
    const background = {
         background:"rgba(0,0,0,0.6) url(image/image2.jpg)",
         backgroundBlendMode:"darken",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",
         backgroundPosition:"center"
         
     }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper w-full mb-14 h-[40rem]">
        <SwiperSlide className="w-full " style={background}>
        </SwiperSlide>
        <SwiperSlide className="w-full " style={background}>
        </SwiperSlide>
        <SwiperSlide className="w-full " style={background}>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Shero