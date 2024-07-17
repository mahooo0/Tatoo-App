import Image from "next/image";
import { Inter } from "next/font/google";
import HeadBg from '../../public/Images/Les encres de tatouages sont-elles nocives_.jpeg'
import PhelasofyBg from '../../public/Images/phelasofy.jpeg'
import strelkaIcon from '../../public/svg/strelka.svg'
import WkontakteIcon from '../../public/svg/wkontakte.svg'
import instagramIcon from '../../public/svg/intragram.svg'
import telegramIcon from '../../public/svg/telegram.svg'
import Mainbtn from "@/components/Mainbtn";
import MasterCard from "@/components/MasterCard";
import Contact from "@/components/Contact";
import Works from "@/components/Works";
import Map from "@/components/map";
import MasteerCard2 from "@/components/MasterCard2";
import Footer from "@/components/Footer";

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
    <div className=" w-full bg-black h- flex flex-col items-center pb-8">
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
      <h2 className=" text-white font-sans font-[700] text-[36px] leading-[93px] mt-[24px]">Cтоимость Tату</h2>
      <p className=" text-white font-sans font-[700] text-[16px] leading-[30px]  w-[45%] text-center">Стоимость татуировки зависит от нескольких важных факторов, с которыми мы поможем определиться.</p>
      <p className=" text-white font-sans font-[700] text-[16px] leading-[30px]  mb-4 w-[45%] text-center">Жми на кнопку, чтобы получить консультацию и рассчитать цену своей идеальной татуировки.</p>
      <Mainbtn text="Рассчитать стоимость" color="gray"/>
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
          <h5 className=" text-white font-sans font-[400] text-[36px] mt-3">Философия</h5>
          <h6 className="text-white font-sans font-[300] text-[24px] leading-[50px] max-w-[500px] mt-6">Tatu App - это возможность записаться на прием удаленно</h6>
          <p className="text-white font-sans font-[300] text-[18px] leading-[35px] max-w-[500px] mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  .
          </p>
          <p className="text-white font-sans font-[300] text-[18px] leading-[35px] max-w-[500px] mt-6">Lorem Ipsum is sing, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  .
          </p>
        </div>
    </div>
    <div className="  w-full flex flex-col items-center mb-8">
      <h1 className="text-black font-sans font-[700] text-[36px] mt-12">Наша команда</h1>
      <p className=" text-grey font-sans font-[300] text-[24px] leading-[30px] mt-5 mb-4 w-[45%] text-center">Портфолио наших тату-мастеров</p>

      <div className="w-[90%] flex flex-row justify-around flex-wrap mt-12">
        <MasteerCard2 img="https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg" />
        <MasteerCard2 img='https://i.pinimg.com/564x/9c/bf/f3/9cbff31fe90e1dd97e25a9e993a9f0f1.jpg'/>
        <MasteerCard2 img="https://media.cnn.com/api/v1/images/stellar/prod/210604151110-02-platon-nft-iris-series-restricted.jpg?q=w_2000,c_fill"/>
      </div>
      <div className="w-[90%] flex flex-row justify-around flex-wrap mt-12">
        
        <MasteerCard2 img="https://imgix.ranker.com/user_node_img/568/11345473/original/11345473-photo-u-2032380962?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"/>
        <MasteerCard2  img="https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg"/>
        <MasteerCard2  img="https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg"/>
      </div>
      <div className=" flex flex-col items-center">
        <h2 className="text-black font-sans font-[700] text-[36px] mt-16 ">стили и сюжеты</h2>
        <p className=" font-sans  text-[16px]  leading-[35px] font-[700px text-grey w-3/4 tracking-wide text-center  mb-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
        <Mainbtn color="black" text="Смотреть"/>
      </div>
    </div>
    <Contact/>
    <Works/>
    <div  className="bg-black w-full h-fit  flex flex-col gap-9 items-center pt-20">
        <h5 className="text-white font-sans font-[500] text-[36px]">Местоположения</h5>
        <h5 className="text-white font-sans font-[500] text-[24px]">Azerbaijan - baku - babek.p 42a</h5>
        <h5 className="text-white font-sans font-[500] text-[24px]">metro : koroğlu </h5>
        <h5 className="text-white font-sans font-[500] text-[24px]">Мы открыты: 12:00 – 20:00, без выходных</h5>
    </div>
    <Map/>
    <Footer/>
    </>
  );
}
