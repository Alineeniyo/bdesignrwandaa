import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight} from 'react-icons/fa'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {Heros} from '../../typing'
import {urlFor} from '../../sanity'
type Props = {
    hero:Heros[]
}

const Hero = ({hero}:Props)=> {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper w-full mb-14 h-[50rem]">
        {
          hero.map((data)=>{

            return(
              <SwiperSlide className="w-screen h-full relative flex flex-col justify-center items-center"  key={data._id}>
                 <img src={urlFor(data.image).url()} alt="home hero slide image" className=" w-full h-full object-fill"/>
                 <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-80 flex flex-col justify-center md:items-start items-center pl-28">
                     <h4 className='text-white font-bold text-xl'>{data.home_title}</h4>
                     <p className="text-white mt-2 font-medium">{data.home_desc}</p>
                     <button className=" text-white px-12 py-4 font-medium bg-rose-400 rounded mt-4 hover:bg-white hover:text-black ease-in-out delay-100 duration-1000">Contact us <FaArrowRight className="inline ml-1"/></button>
                 </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default Hero