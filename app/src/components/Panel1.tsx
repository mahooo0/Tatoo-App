import React, { useRef, useState } from 'react'
import Mainbtn from './Mainbtn'
import Image from 'next/image'
import ColseIcons from '../../public/svg/Close.svg'
import ImageUpload from './ImageApload'
import { StyleType } from '@/Services/Types'
import { useMutation } from '@tanstack/react-query';
import { PostMaster } from '@/Services'
import { toast } from 'react-toastify'
interface Props{
    show:boolean,
    setShow:any,
    styles:any,
    
}

type Styles=StyleType[]
export default function Panel1(props:Props) {
    let [showstyles,setshowstyles]=useState(false)
    let {show,setShow,styles}=props
    let [styleList,setstyleList]=useState<Styles>([])
    let [Imgurl,setImgurl]=useState<string>("")
    let nameInpRef=useRef<any>()
    let philosofyInpRef=useRef<any>()
    let [resetImg,setresetImg]=useState<boolean>(false)
    console.log(Imgurl);
    
    const mutation = useMutation({
        mutationFn: PostMaster,
        onSuccess: () => {
          // alert('User successfully added!');
          toast.success("artist successfully added!")
          nameInpRef.current.value=""
          philosofyInpRef.current.value=""
          setstyleList([])
          setImgurl("")
          setShow(false)
          setshowstyles(false)
          setresetImg((prew)=>!prew)
        },
        onError: (error: Error) => {
          alert(`An error occurred: ${error.message}`);
        },
      });

      const addItem = (item: StyleType) => {
        setstyleList((prev) => [...prev, item]);
      };
      const removeItem = (id: number) => {
        setstyleList((prev) => prev.filter(item => item.id !== id));
      };
      const StyleAction=(item:StyleType)=>{
        styleList.includes(item)?
        removeItem(item.id):
        addItem(item)
      }
      const onSubmit=()=>{
        let name=nameInpRef.current.value
        let desc=philosofyInpRef.current.value
        let newMater={
            img_url:Imgurl,
            name,
            desc,
            styles:styleList
        };
        mutation.mutate(newMater);
      }
  return (
          <div className='w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center' style={show?{background:"hsla(0, 0%, 0%, 0.7)"}:{display:"none"}}>
            <div className='w-1/2 h-fit bg-white opacity-100 relative' >
                    
                    <div className=' flex flex-row px-12 pt-5 '>
                        <h3 className='font-sans font-[400] text-[64px] w-1/2 text-left'>фото:</h3>
                        <ImageUpload  reset={resetImg} seturl={setImgurl}/>
                    </div>
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>имя</label>
                        <input type="text" name="" id=""  ref={nameInpRef} className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' />
                    </div>
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>имя</label>
                        <input type="text" name="" id=""ref={philosofyInpRef} className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' />
                    </div>
                    <div className=' flex flex-row px-12 pt-5'>
                        
                        <div >
                        <h1 className='font-sans font-[400] text-[24px] '>стили</h1>
                            <div className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around'>
                                style <span onClick={()=>setshowstyles(prev=>!prev)}>+</span>
                            </div>
                        <div>
                            <div className={showstyles?'flex flex-col':"hidden"}>
                                {styles?.map((item:StyleType)=>(
                                    <div className='border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around'>
                                    {item.name}<span onClick={()=>StyleAction(item)}>{styleList.includes(item)?"-":"+"}</span> 
                                </div>))}
                                
                                
                            </div>
                        
                        </div>
                        </div>
                        <div className=' flex flex-row gap-2 pl-4' >
                            {styleList.map((item:StyleType)=>(<div className='w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center'>{item.name}</div>))}
                        

                        </div>
                    </div>
                    <div className='w-full h-fit flex justify-center mt-5 pb-5'>
                        <Mainbtn color='black' text='Submit'action={()=>{onSubmit()}} />
                    </div>
                   <div className=' absolute top-3 right-3 cursor-pointer'>
                    <Image src={ColseIcons} alt='close' width={32} height={32} onClick={()=>setShow(false)}/>
                   </div>
            </div>
        </div>
  )
}
