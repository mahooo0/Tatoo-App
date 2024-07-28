import Image from 'next/image'
import React from 'react'
import PhelasofyBg from '../../public/Images/phelasofy.jpeg'
import HeadBg from '../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg'
import { TatoType } from '@/Services/Types'
import LazyImage from './Lazyimg'
interface Props{
  data:TatoType[]
}
export default function Works(props:Props) {
  let{data}=props
  return (
    <div className='bg-black w-full flex flex-col items-center'>
        <h1 className='font-sans font-[700] text-[36px] mt-8 text-white'>Работы</h1>
        <div className='w-full flex flex-row flex-wrap mt-[70px]'>
          {data?.map((item:TatoType)=>(<LazyImage src={item.img_url} alt='  ' calss='w-1/4 max-h-[360px] '/>))}
          
            
        </div>
    </div>
  )
}
