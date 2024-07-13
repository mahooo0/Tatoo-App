import React from 'react';
import Mainbtn from './Mainbtn';

function Contact() {
    return (
        <div className=' bg-black w-full flex flex-col items-center pb-8 '>
            <h1 className='font-sans font-[700] text-[36px] mt-8 text-white'>КАК ЗАПИСАТЬСЯ</h1>
            <p className=' font-sans  text-[16px]  leading-[35px] font-[700px text-white w-3/5 tracking-wide text-center  mt-4'>Записаться на сеанс, бесплатную консультацию и рассчитать стоимость вашей работы можно через Instagram, VK, а также в мессенджерах: Telegram/WhatsApp по телефону</p>
            <p className=" font-sans  text-[16px]  leading-[35px] font-[700px text-white w-fit tracking-wide text-center mt-2 mb-5 "> (+994) 055 266 07 28</p>
            <Mainbtn text='Записаться' color='gray'/>
        </div>
    );
}

export default Contact;