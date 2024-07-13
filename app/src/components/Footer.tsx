// components/Footer.js
import WkontakteIcon from '../../public/svg/wkontakte.svg'
import instagramIcon from '../../public/svg/intragram.svg'
import telegramIcon from '../../public/svg/telegram.svg'
import Image from 'next/image';
const Footer = () => {
    return (
      <div className="flex items-center  justify-between bg-black  p-4 flex-row  ">
        <p className="leading-[22px] text-[14px] font-semibold text-white">
          +7 965 121-81-41
          <br />
          studio@broskiytattoo.ru
        </p>
        <div className="flex flex-row gap-9 w-fit -ml-14">
        <a href="">
          <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
            <Image
            src={WkontakteIcon}
            alt=""
            />
          </div>
        </a>
        <a href="">
          <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
            <Image
            src={instagramIcon}
            alt=""
            />
          </div>
        </a>
        <a href="">
          <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
            <Image
            src={telegramIcon}
            alt=""
            width={34}
            height={34}
            />
          </div>
        </a>
      </div>
        <div className="   w-fit ">
          <div className="flex justify-end w-fit">
           
              <p className="text-[14px] font-semibold !text-broskiytattoo_ru-nero text-white">BACK TO TOP</p>
              
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  