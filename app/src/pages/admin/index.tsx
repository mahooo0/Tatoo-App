import Image from 'next/image'
import React, { useState } from 'react'
import image from '../../../public/Images/Screenshot 2024-06-23 221632.png'
import EditIcon from '../../../public/svg/editIcon.svg'
import DeleteIcon from '../../../public/svg/deleteIcon.svg'
import AddPhotoIcon from '../../../public/svg/addPhotoIcons.svg'
import ColseIcons from '../../../public/svg/Close.svg'
import Mainbtn from '@/components/Mainbtn'
import Panel3 from '@/components/Panel3'
export default function index() {
    let [showstyles,setshowstyles]=useState(false)
    let [showpanel1,setshowpanel1]=useState(false)
    let [showpanel2,setshowpanel2]=useState(false)
    let [showpanel3,setshowpanel3]=useState(false)
  return (
    <>
    <div className='flex flex-col items-center relative'>
        <header className='bg-black w-full flex items-center h-[105px] rounded-[32px] text-white text-[48px] font-lobster pl-8 font-[400]'>Tatoo App </header>
        <div className=' border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]'>
            <h2 className=' font-lobster font-[400] text-black text-[48px]'>Мастера</h2>
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl' onClick={()=>setshowpanel1(true)}> добавить</button>
        </div>
        <table className='w-[95%] bg-white  border-black border-4 mt-10'>
            <thead>
              <tr className=' border-b-2 border-[#868686] '>
                <th className='w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]'>имя</th>
                <th className='w-[15%] border-r border-[#868686]  text-black text-[36px] font-sans font-[400]'>фото</th>
                <th className='w-[40%] border-r border-[#868686]  text-black text-[36px] font-sans font-[400]'>философия</th>
                <th className='w-[25%]  text-black text-[36px] font-sans font-[400] '>стиль</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' border-b-2 border-[#868686] '>
              <th className='w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]'>Егор</th>
                <th className='w-[15%] border-r border-[#868686]  '>
                    <div className='w-full h-full flex justify-center'>
                        <Image src={image} alt='image' className='w-[70px] h-[108px] '/>
                    </div>
                   
                </th>
                <th className='w-[40%] border-r border-[#868686]  text-[#696969] text-[24px] font-sans font-[400]'>Lorem Ipsum is simply dummy text of...</th>
                <th className='w-[25%]  text-black text-[36px] font-sans font-[400]  '>
                    <div className='w-full h-full flex flex-row'>
                        <p className='w-4/5 text-[#696969] text-[20px] font-sans font-[700]'>Netrible , abtrackt...</p>
                        <div className='w-1/5 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
                    </div>
                     </th>
              </tr>
              <tr className=' border-b-2 border-[#868686] '>
              <th className='w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]'>Егор</th>
                <th className='w-[15%] border-r border-[#868686]  '>
                    <div className='w-full h-full flex justify-center'>
                        <Image src={image} alt='image' className='w-[70px] h-[108px] '/>
                    </div>
                   
                </th>
                <th className='w-[40%] border-r border-[#868686]  text-[#696969] text-[24px] font-sans font-[400]'>Lorem Ipsum is simply dummy text of...</th>
                <th className='w-[25%]  text-black text-[36px] font-sans font-[400]  '>
                    <div className='w-full h-full flex flex-row'>
                        <p className='w-4/5 text-[#696969] text-[20px] font-sans font-[700]'>Netrible , abtrackt...</p>
                        <div className='w-1/5 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
                    </div>
                     </th>
              </tr>
              <tr className=' border-b-2 border-[#868686] '>
              <th className='w-1/5 border-r border-[#868686] text-black text-[36px] font-sans font-[400]'>Егор</th>
                <th className='w-[15%] border-r border-[#868686]  '>
                    <div className='w-full h-full flex justify-center'>
                        <Image src={image} alt='image' className='w-[70px] h-[108px] '/>
                    </div>
                   
                </th>
                <th className='w-[40%] border-r border-[#868686]  text-[#696969] text-[24px] font-sans font-[400]'>Lorem Ipsum is simply dummy text of...</th>
                <th className='w-[25%]  text-black text-[36px] font-sans font-[400]  '>
                    <div className='w-full h-full flex flex-row'>
                        <p className='w-4/5 text-[#696969] text-[20px] font-sans font-[700]'>Netrible , abtrackt...</p>
                        <div className='w-1/5 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
                    </div>
                     </th>
              </tr>
            </tbody>
        </table>
        <div className=' border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]'>
            <h2 className=' font-lobster font-[400] text-black text-[48px]'>Работы</h2>
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl' onClick={()=>setshowpanel2(true)}> добавить</button>
        </div>
        <div className=' mt-6 flex flex-row flex-wrap gap-6 justify-center'>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[304px] h-[114px] border-black border-2 flex flex-row items-center'>
                <Image src={image} alt='skd' className=' w-[110px]  h-[110px]'/>
                <div className='h-fit ml-2'>
                    <h1 className='text-[32px] font-sans font-[600] mb-1'>Eqor</h1>
                    <p className='text-[24px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            
        </div>
        <div className=' border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]'>
            <h2 className=' font-lobster font-[400] text-black text-[48px]'>Стили</h2>
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl'onClick={()=>setshowpanel3(true)} > добавить</button>
        </div>
        <div className=' mt-6 flex flex-row flex-wrap gap-x-20 gap-y-8 justify-center'>
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
          
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
          
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
          
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
          
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
            <div className='bg-white relative w-[380px] h-[90px] flex flex-row items-center'>
                
                <div className='h-fit ml-2'>
                    <h1 className='text-[40px] font-sans font-[600] '>Eqor</h1>
                    <p className='text-[28px] text-[#696969] font-sans font-[500]'>neotrible</p>
                </div>
                <div className='w-1/5  absolute top-2 right-2 flex flex-row gap-2 pr-4'>
                        <Image src={EditIcon} alt='EditIcon'/>
                        <Image src={DeleteIcon} alt='DeleteIcon'/>
                        </div>
            </div>
          
          
          
          
          
          
          
            
        </div>
        {/* panel 1*/}
        {/* <div className='w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center' style={showpanel1?{background:"hsla(0, 0%, 0%, 0.7)"}:{display:"none"}}>
            <div className='w-1/2 h-fit bg-white opacity-100 relative' >
                    
                    <div className=' flex flex-row px-12 pt-5 '>
                        <h3 className='font-sans font-[400] text-[64px] w-1/2 text-left'>фото:</h3>
                        <Image src={AddPhotoIcon} alt='AddPhotoIcon' />
                    </div>
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>имя</label>
                        <input type="text" name="" id="" className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' />
                    </div>
                    <div className='flex flex-col w-full px-12'> 
                        <label htmlFor="" className='font-sans font-[400] text-[44px]  '>имя</label>
                        <input type="text" name="" id="" className=' bg-[#d9d9d9] h-[70px] rounded-3xl p-4 font-sans font-[500] text-[24px]' />
                    </div>
                    <div className=' flex flex-row px-12 pt-5'>
                        
                        <div >
                        <h1 className='font-sans font-[400] text-[24px] '>стили</h1>
                            <div className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around'>
                                style <span onClick={()=>setshowstyles(prev=>!prev)}>+</span>
                            </div>
                        <div>
                            <div className={showstyles?'flex flex-col':"hidden"}>
                                <div className='border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around'>
                                    neotrible<span>+</span> 
                                </div>
                                <div className='border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around'>
                                    neotrible<span>+</span> 
                                </div>
                                <div className='border border-black w-[150px] text-center bg-[#d9d9d9] flex justify-around'>
                                    neotrible<span>+</span> 
                                </div>
                            </div>
                        
                        </div>
                        </div>
                        <div className=' flex flex-row gap-2 pl-4' >
                        <div className='w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center'>style 1</div>
                        <div className='w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center'>style 1</div>
                        <div className='w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center'>style 1</div>
                        <div className='w-[70px] h-[30px] bg-[#d9d9d9] rounded-2xl flex justify-center items-center'>style 1</div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex justify-center mt-5 pb-5'>
                        <Mainbtn color='black' text='Submit' />
                    </div>
                   <div className=' absolute top-3 right-3 cursor-pointer'>
                    <Image src={ColseIcons} alt='close' width={32} height={32} onClick={()=>setshowpanel1(false)}/>
                   </div>
            </div>
        </div> */}
        {/* panel2 */}
        {/* <div className='w-full h-[700px]   fixed top-0   left-0  flex justify-center items-center' style={showpanel2?{background:"hsla(0, 0%, 0%, 0.7)"}:{display:"none"}}>
            <div className='w-1/2 h-fit bg-white opacity-100 relative' >
                    
                    <div className=' flex flex-row px-12 pt-5 '>
                        <h3 className='font-sans font-[400] text-[64px] w-1/2 text-left'>фото:</h3>
                        <Image src={AddPhotoIcon} alt='AddPhotoIcon' />
                    </div>
                    
                    <div className='w-full flex justify-center'>
                        <div className='flex flex-row w-3/5 justify-between'>
                            <div>
                                <h4 className='font-sans font-[400] text-[24px]  '>Стили </h4>
                                <select id="cars" className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around'>
                                    
                                    <option value="saab">Saab</option>
                                    <option value="vw">VW</option>
                                    <option value="audi" selected>Audi</option>
                                </select>
                            </div>
                            <div>
                                <h4 className='font-sans font-[400] text-[24px]  '>мастера </h4>
                                <select id="cars" className='border border-black w-[150px] text-center  bg-[#d9d9d9] flex justify-around'>
                                    <option value="saab">Saab</option>
                                    <option value="vw">VW</option>
                                    <option value="audi" selected>Audi</option>
                                </select>
                            </div>
                        
                        </div>
                    </div>
                   
                    <div className='w-full h-fit flex justify-center mt-5 pb-5'>
                        <Mainbtn color='black' text='Submit' />
                    </div>
                   <div className=' absolute top-3 right-3 cursor-pointer'>
                    <Image src={ColseIcons} alt='close' width={32} height={32} onClick={()=>setshowpanel2(false)}/>
                   </div>
            </div>
        </div> */}
        {/* panel3 */}
          <Panel3 Show={showpanel3} setShow={setshowpanel3}/>
    </div>
    </>
  )
}
