import Image from 'next/image'
import React from 'react'
import master from '../../../public/Images/Screenshot 2024-06-23 221632.png';
import Mainbtn from '@/components/Mainbtn';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function index() {
  return (<>
    <div className="flex  justify-center mt-[70px]">
    <div className="max-w-[1200px] mx-auto flex w-full justify-center gap-10 px-5 lg:p-5  md:p-5">
      <Image 
        className="w-[560px] h-[560px] object-cover " 
        src={master}
        alt="Profile Image" 
        loading="lazy"
        width={560}
        height={560}
      />
      <div className="py-[50px] flex-1 md:self-stretch md:py-5 sm:py-4">
        <div className="flex flex-col items-center">
          <h1 className="md:text-[26px] lg:text-[35px] text-[42px] font-semibold !text-black-900">Эрик</h1>
          <div className="mx-[92px] flex flex-col items-center gap-4 self-stretch lg:mx-0 md:mx-0">
            <p className="lg:text-[13px] text-[16px] font-light !text-gray-700">ABSTRACT SMOKE, GRAPHIC, SKETCH ART, BOTANIC</p>
            <div className="w-[80%] h-[2px] bg-gray-700"></div>
          </div>
          <div className="gap-[30px] mt-4 flex flex-col items-center self-stretch">
            <p className="lg:text-[17px] text-[20px] mt-3 font-light !text-black-900">Начал заниматься татуировкой в 2016г.</p>
            <p className="lg:text-[17px] leading-[31px] text-[20px] text-center font-light !text-black-900">
              Умеет мастерски сочетать любые стили в едином дизайне.<br />
              Утверждает, что возможность не ограничивать себя<br />
              одним направлением — это уже огромный шаг в<br />
              становлении новой татуировки.
            </p>
          </div>
        </div>
        <div className='flex w-full justify-center mt-[60px]'>
          <Mainbtn color='black' text='Записаться'/>
        </div>
        
      </div>
    </div>
  </div>
  <div className=' mt-8'>
  <div className="flex flex-row">
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Three"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Five"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Seven"
        loading="lazy"
      />
    </div>
    <div className="flex flex-row">
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Three"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Five"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Seven"
        loading="lazy"
      />
    </div>
    <div className="flex flex-row">
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Three"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Five"
        loading="lazy"
      />
      <Image
        src={master}
        className="w-1/3 h-[540px] object-cover "
        alt="Image Seven"
        loading="lazy"
      />
    </div>
    
  </div>
  <div className="max-w-[1200px] mx-auto flex w-full flex-col items-center gap-2 px-14 lg:p-5 md:p-5 md:px-5 sm:px-4 mt-[50px]">
      <div className="flex px-14 md:px-5 sm:px-4">
        <p className="md:text-[48px] lg:text-[48px] text-[70px] !font-georgia font-normal !text-black-900  font-lobster">“</p>
      </div>
      <div className="px-[30px] w-[70%] flex justify-center lg:w-full md:w-full sm:px-4">
        <p className="sm:text-[24px] md:text-[26px] lg:text-[27px] leading-[43px] text-[32px] flex-1 text-center font-light !text-black-900 undefined">
          Татуировка — это не только про
          <br />
          индивидуальность. В наше время это — часть
          <br />
          искусства, которое мы можем носить на себе.
        </p>
      </div>
    </div>
    <div className='mt-8'>
      <Contact/>
    </div>
    <Footer/>
    
  </>
  
  )
}
