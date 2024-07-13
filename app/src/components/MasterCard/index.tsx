import Image from 'next/image';
import React, { useState } from 'react';
import Master from '../../../public/Images/Screenshot 2024-06-23 221632.png'
const MasterCard = () => {
    let [IsOn,SetIsOn]=useState(false)
    return (
        <div className='relative w-[20%] overflow-hidden max-h-[440px]' onMouseEnter={()=>SetIsOn(true)} onMouseLeave={()=>SetIsOn(false)}>
            <Image
            src={Master}
            alt=''
                />
            <div className={IsOn?'w-full h-full absolute bg-master-gradient  flex flex-col duration-500 items-center top-0':"w-full h-full duration-700 absolute bg-master-gradient  flex flex-col items-center top-[100%]"}>
            <h5 className='text-white  absolute top-[73%] font-sans font-[700] text-[32px] w-[90%]'>Name</h5>
            <p className='text-white w-[90%] absolute top-[85%] font-sans font-[700] text-[16px] '>Description Description Description Description...</p>
            </div>
            

        </div>
    );
};

export default MasterCard;