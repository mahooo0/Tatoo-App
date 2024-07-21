import React, { useRef } from 'react';
import Mainbtn from './Mainbtn';
import Image from 'next/image';
import ColseIcons from '../../public/svg/Close.svg'
import { PostStyle } from '@/Services';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
 interface Props{
    Show:boolean,
    setShow:any,
 }

function Panel3(props:Props) {
    let styleref=useRef<any>()
    let descref=useRef<any>()
    let{Show,setShow}=props
    const mutation = useMutation({
        mutationFn: PostStyle,
        onSuccess: () => {
          alert('User successfully added!');
        },
        onError: (error: Error) => {
          alert(`An error occurred: ${error.message}`);
        },
      });
    
    return (
        <div className='w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center' style={Show?{background:"hsla(0, 0%, 0%, 0.7)"}:{display:"none"}}>
            <div className='w-1/2 h-fit bg-white opacity-100 relative' >
                    
                    
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>Стиль</label>
                        <input type="text" name="" id="" className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' ref={styleref} />
                    </div>
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>опесание</label>
                        <input type="text" name="" id="" className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' ref={descref} />
                    </div>
                    
                    <div className='w-full h-fit flex justify-center mt-5 pb-5'>
                        <Mainbtn color='black' text='Submit' action={ async ()=>{
                            let newStyle={ name:styleref.current.value,desc:descref.current.value}
                            mutation.mutate(newStyle);
                            
                        }} />
                    </div>
                   <div className=' absolute top-3 right-3 cursor-pointer'>
                    <Image src={ColseIcons} alt='close' width={32} height={32} onClick={()=>{setShow(false);styleref.current.value="";descref.current.value=""}}/>
                   </div>
            </div>
        </div>  
    );
}

export default Panel3;