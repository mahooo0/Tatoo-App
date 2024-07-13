import Image from 'next/image'
import React from 'react'
import PhelasofyBg from '../../public/Images/phelasofy.jpeg'
import HeadBg from '../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg'

export default function Works() {
  return (
    <div className='bg-black w-full flex flex-col items-center'>
        <h1 className='font-sans font-[700] text-[36px] mt-8 text-white'>Работы</h1>
        <div className='w-full flex flex-row flex-wrap mt-[70px]'>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={PhelasofyBg} alt=''className='w-1/4 max-h-[360px] '/>
            <Image  src={HeadBg} alt=''className='w-1/4 max-h-[360px] '/>
        </div>
    </div>
  )
}
