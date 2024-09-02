import React from 'react';
import Mainbtn from './Mainbtn';

function Contact() {
    return (
        <div className=" bg-black w-full flex flex-col items-center pb-8 pt-[60px]">
            <h1 className="font-sans font-[700] text-[36px] mt-8 text-white">
                КАК ЗАПИСАТЬСЯ
            </h1>
            <p className=" font-sans w-[45%] text-[16px]  leading-[35px] font-[700px text-white  tracking-wide text-center  mt-4">
                Записаться на сеанс, бесплатную консультацию и рассчитать
                стоимость вашей работы можно через Instagram, VK, а также в
                мессенджерах: Telegram/WhatsApp по телефону
            </p>
            <p className=" font-sans  text-[16px]  leading-[35px] font-[700px text-white w-fit tracking-wide text-center mt-2 mb-[70px] ">
                (+994) 055 266 07 28
            </p>
            <a href="https://wa.me/+9940552660728">
                <Mainbtn text="Записаться" color="gray" action={() => {}} />
            </a>
        </div>
    );
}

export default Contact;
