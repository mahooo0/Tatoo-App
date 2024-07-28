import React, { useRef, useState } from 'react'
import Mainbtn from './Mainbtn'
import Image from 'next/image'
import ColseIcons from '../../public/svg/Close.svg'
import { useMutation } from '@tanstack/react-query';
import AddPhotoIcon from '../../public/svg/addPhotoIcons.svg'
import { MasterType, StyleType } from '@/Services/Types'
import ImageUpload from './ImageApload'
import { PostTatoo } from '@/Services';
import { toast } from 'react-toastify';
interface Props{
    show:boolean,
    setshow:(par:boolean)=>void,
    Styles:StyleType[],
    Masters:MasterType[]
}
export default function Panel2(props:Props) {
    let {show,setshow,Styles,Masters}=props
    let[img_url,setImg_url]=useState<string>("")
    let[Reset,setReset]=useState<boolean>(false)
    let selectRef1=useRef<any>()
    let selectRef2=useRef<any>()
    // console.log(selectRef1.current.value,);
    const mutation = useMutation({
        mutationFn: PostTatoo,
        onSuccess: () => {
            toast.success("art successfully added!")
          alert('User successfully added!');
          setshow(false)
          setReset((prew)=>!prew)
        },
        onError: (error: Error) => {
          alert(`An error occurred: ${error.message}`);
        },
      });
    const onSubmit=()=>{
        let style=selectRef1?.current.value
        let master=selectRef2?.current.value
        let newTatoo={
            img_url,
            master,
            style
        }
        console.log(newTatoo);
        mutation.mutate(newTatoo)
    }
  return (
    <div className='w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center' style={show?{background:"hsla(0, 0%, 0%, 0.7)"}:{display:"none"}}>
            <div className='w-1/2 h-fit bg-white opacity-100 relative' >
                    
                    <div className=' flex flex-row px-12 pt-5 '>
                        <h3 className='font-sans font-[400] text-[64px] w-1/2 text-left'>фото:</h3>
                        <ImageUpload  reset={Reset} seturl={setImg_url}/>

                    </div>
                    
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-row w-3/5 justify-between'>
                            <div>
                                <h4 className='font-sans font-[400] text-[24px]  '>Стили </h4>
                                <select id="cars" className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around' ref={selectRef1}>
                                    {Styles?.map((item:StyleType)=>(<option value={item.name}>{item.name}</option>))}
                                    
                                </select>
                            </div>
                            <div>
                                <h4 className='font-sans font-[400] text-[24px]  '>мастера </h4>
                                <select id="cars" className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around' ref={selectRef2}>
                                {Masters?.map((item:MasterType)=>(<option value={item.name}>{item.name}</option>))}
                                    
                                </select>
                            </div>
                        
                        </div>
                    </div>
                   
                    <div className='w-full h-fit flex justify-center mt-5 pb-5'>
                        <Mainbtn color='black' text='Submit' action={()=>{onSubmit()}}/>
                    </div>
                   <div className=' absolute top-3 right-3 cursor-pointer'>
                    <Image src={ColseIcons} alt='close' width={32} height={32} onClick={()=>{setshow(false);setReset((prew)=>!prew)}}/>
                   </div>
            </div>
        </div>
  )
}
