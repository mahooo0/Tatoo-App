import Image from 'next/image'
import React from 'react'
import HeadBg from '../../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg'
import Mainbtn from '@/components/Mainbtn'

export default function index() {
  return (
    <>
    <div className=" relative">
      <Image
      src={HeadBg}
      alt="../../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg"
      width={0}
      height={0}
      style={{ width: '100%', height: '690px' }} // optional
      />
      <div className=" bg-black  bg-opacity-70 absolute top-0 w-full h-full flex flex-col justify-center items-center"> 
        <h2 className=' font-sans text-[96px] text-white font-[700]'>Log in</h2>
        <div className='flex flex-col gap-8 items-center'>
            
            
            <input type="text" name="" id="" className='w-[580px] h-[70px] rounded-2xl bg-grey text-[32px] font-sans font-[700]  flex items-center p-9  placeholder:text-[32px] placeholder:text-[#868686]  placeholder:font-sans placeholder:font-[700]' placeholder='Email' />
            
           
            <input type="text" name="" id="" className='w-[580px] h-[70px] rounded-2xl bg-grey text-[32px] font-sans font-[700]  flex items-center p-9  placeholder:text-[32px] placeholder:text-[#868686]  placeholder:font-sans placeholder:font-[700]' placeholder='Password' />
            
            <button className=' w-[290px] h-[67px bg-[#d9d9d9] text-black text-[37px] rounded-xl font-sans font-[700]'>Войти</button>
        
        </div>
      
      </div>
    </div>
    </>
  )
}
