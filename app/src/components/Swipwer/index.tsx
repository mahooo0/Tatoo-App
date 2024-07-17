// components/PhotoSwiper.tsx

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '../../../public/Images/Screenshot 2024-06-23 221632.png'
import Srelka from '../../../public/svg/strelka.svg'
// Import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const PhotoSwiper: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" relativew-full h-[700px] bg-black flex justify-center items-center">
      
      <Swiper
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full flex justify-center items-center'>
                <Image src={img} alt="img" className='w-[600px] h-[600px]'/>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex justify-center items-center'>
                <Image src={img} alt="img" className='w-[600px] h-[600px]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex justify-center items-center'>
                <Image src={img} alt="img" className='w-[600px] h-[600px]'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full flex justify-center items-center'>
                <Image src={img} alt="img" className='w-[600px] h-[600px]'/>
            </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
        <div className=" absolute flex flex-row w-full h-full top-1/2 justify-around z-20">
            <div ref={prevRef}  className=' '>
            <Image src={Srelka} alt='Srelka' className='rotate-90'/>
            </div>
            <div ref={nextRef} className=''>
            <Image src={Srelka} alt='Srelka' className='rotate-[270deg]'/>
            </div>
        </div>
      </Swiper>
    </div>
  );
};

export default PhotoSwiper;
