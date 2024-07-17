import Image from 'next/image'
import React from 'react'
import image from '../../../public/Images/Screenshot 2024-06-23 221632.png'
import EditIcon from '../../../public/svg/editIcon.svg'
import DeleteIcon from '../../../public/svg/deleteIcon.svg'
export default function index() {
  return (
    <>
    <div className='flex flex-col items-center'>
        <header className='bg-black w-full flex items-center h-[105px] rounded-[32px] text-white text-[48px] font-lobster pl-8 font-[400]'>Tatoo App </header>
        <div className=' border-b-4 border-black w-[95%] flex flex-row justify-between items-center mt-[22px]'>
            <h2 className=' font-lobster font-[400] text-black text-[48px]'>Мастера</h2>
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl'> добавить</button>
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
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl'> добавить</button>
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
            <button className='w-[200px] h-[48px] bg-black text-white rounded-2xl'> добавить</button>
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
    </div>
    </>
  )
}
