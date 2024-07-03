import Image from "next/image";
import { Inter } from "next/font/google";
import HeadBg from '../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg'
import PhelasofyBg from '../../public/Images/phelasofy.jpeg'
import strelkaIcon from '../../public/svg/strelka.svg'
import WkontakteIcon from '../../public/svg/wkontakte.svg'
import instagramIcon from '../../public/svg/intragram.svg'
import telegramIcon from '../../public/svg/telegram.svg'
import Mainbtn from "@/components/Mainbtn";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className=" relative">
      <Image
      src={HeadBg}
      alt="../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg"
      width={0}
      height={0}
      style={{ width: '100%', height: '690px' }} // optional
      />
      <div className=" bg-black  bg-opacity-70 absolute top-0 w-full h-full flex flex-col justify-center items-center"> 
      <h1 className=" text-white font-[400px] text-[200px] leading-[250px]  font-lobster">Tatoo App</h1>
      <h2 className="  text-white font-[400px] text-[50px]  font-lobster -mt-[40px]">Azerbaijan-Baku</h2>
      <p className=" font-sans  text=[24px]  leading-[20px] font-[700px text-grey w-2/5 text-center mt-[40px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
      <Image
      src={strelkaIcon}
      alt=""
      className=" absolute bottom-[40px] "
      />
      </div>
    </div>
    <div className=" w-full bg-black h-[582px] flex flex-col items-center pb-16">
      <div className="flex flex-row gap-9 mt-9">
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
      <h2 className=" text-white font-sans font-[700] text-[80px] leading-[93px] mt-[63px]">Cтоимость Tату</h2>
      <p className=" text-white font-sans font-[700] text-[24px] leading-[30px] mt-8 w-3/5 text-center">Стоимость татуировки зависит от нескольких важных факторов, с которыми мы поможем определиться.</p>
      <p className=" text-white font-sans font-[700] text-[24px] leading-[30px] mt-8 mb-8 w-3/5 text-center">Жми на кнопку, чтобы получить консультацию и рассчитать цену своей идеальной татуировки.</p>
      <Mainbtn text="Записаться" color="gray"/>
    </div>
    <div className="w-full h-[690px] bg-black flex flex-row" >
        <div className="w-1/2 flex justify-center">
        <div className="w-fit  relative">
          <Image
            src={PhelasofyBg}
            alt=""
            className="h-full w-auto"

            />
            <div className="bg-custom-gradient h-full w-full absolute top-0">

          </div>
        </div>
          
          
        </div>
        <div className="w-1/2 flex flex-col ">
          <h5 className=" text-white font-sans font-[700] text-[80px] mt-3">Философия</h5>
          <h6 className="text-white font-sans font-[500] text-[40px] leading-[50px] w-[630px] mt-6">Tatu App - это возможность записаться на прием удаленно</h6>
          <p className="text-grey font-sans font-[300] text-[30px] leading-[35px] w-[630px] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  .
          </p>
        </div>
    </div>
    </>
  );
}
