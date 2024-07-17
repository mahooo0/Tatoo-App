import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Mainbtn from '@/components/Mainbtn'
import SwiperComponent from '@/components/Swipwer'


import React from 'react'

export default function index() {
  return (
    <>
    <div className="flex justify-center bg-black py-8 sm:py-4">
      <div className="max-w-[1200px] mx-auto mt-5 flex w-full justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
        <h1 className="sm:text-[28px] text-white md:text-[30px] lg:text-[42px] text-[42px] tracking-[1.50px] font-semibold !text-white-a700 undefined">
          СТИЛИ И СЮЖЕТЫ
        </h1>
      </div>
    </div>
    <div className="py-[74px] flex justify-center flex-row bg-black lg:py-8 md:py-5 sm:py-4">
      <div className="max-w-[1200px] mx-auto mb-2.5 flex w-full justify-center flex-row px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
        <div className="flex w-full flex-col gap-2">
          <div className="mr-2.5 flex justify-center gap-2.5 lg:mr-0 md:mr-0 flex-row">
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Скульптура &amp; арт
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Цветы
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Гравюра
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Fusion
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Дым
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Драконы
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Абстракция
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Змеи
            </button>
          </div>
          <div className="ml-2.5 mr-5 flex justify-center gap-2.5 lg:mx-0 md:mx-0 flex-row">
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Каллиграфия
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Line work
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Япония
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Микрореализм
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Готика
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Питомцы
            </button>
            <button className="w-fit tracking-[2.00px] border-2 border-solid border-gray-50 uppercase flex flex-row items-center justify-center text-center cursor-pointer  rounded-[22px] h-[46px] px-5 text-[14px] bg-black-900 text-white hover:bg-[#CFCFCF] hover:text-[#858585] hover:border-[#CFCFCF]">
              Надписи
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
        <div className="flex justify-center bg-black">
        <div className="max-w-[1200px] mt-[52px] mx-auto flex w-full justify-center lg:p-5 md:p-5">
            <div className="w-full px-5">
            <div className="flex flex-col items-center gap-8 px-14 md:px-5 sm:px-4">
                <h2 className="sm:text-[28px] md:text-[30px] text-white lg:text-[42px] text-[36px] tracking-[1.50px] font-semibold !text-white-a700">
                СКУЛЬПТУРА &amp; АРТ
                </h2>
                <p className="lg:text-[13px] text-[16px] text-white tracking-[1.50px] text-center font-light leading-6 !text-white-a700">
                Классическое искусство — наша слабость. Оставаясь с ним
                <br />
                наедине, вы рискуете быть прикованным взглядом и всем
                <br />
                нутром. Оно будоражит и не дает шанса остаться
                <br />
                равнодушным. И как же прекрасно осознавать, что шедевры,
                <br />
                прошедшие через века, от гениев возрождения или
                <br />
                голландских провокаторов, можно носить на своем теле.
                </p>
            </div>
            </div>
        </div>
        </div>
        <SwiperComponent/>
    </div>
    <div>
        <div className="flex justify-center bg-black">
        <div className="max-w-[1200px] mt-[52px] mx-auto flex w-full justify-center lg:p-5 md:p-5">
            <div className="w-full px-5">
            <div className="flex flex-col items-center gap-8 px-14 md:px-5 sm:px-4">
                <h2 className="sm:text-[28px] md:text-[30px] text-white lg:text-[42px] text-[36px] tracking-[1.50px] font-semibold !text-white-a700">
                СКУЛЬПТУРА &amp; АРТ
                </h2>
                <p className="lg:text-[13px] text-[16px] text-white tracking-[1.50px] text-center font-light leading-6 !text-white-a700">
                Классическое искусство — наша слабость. Оставаясь с ним
                <br />
                наедине, вы рискуете быть прикованным взглядом и всем
                <br />
                нутром. Оно будоражит и не дает шанса остаться
                <br />
                равнодушным. И как же прекрасно осознавать, что шедевры,
                <br />
                прошедшие через века, от гениев возрождения или
                <br />
                голландских провокаторов, можно носить на своем теле.
                </p>
            </div>
            </div>
        </div>
        </div>
        <SwiperComponent/>
    </div>
    <div>
        <div className="flex justify-center bg-black">
        <div className="max-w-[1200px] mt-[52px] mx-auto flex w-full justify-center lg:p-5 md:p-5">
            <div className="w-full px-5">
            <div className="flex flex-col items-center gap-8 px-14 md:px-5 sm:px-4">
                <h2 className="sm:text-[28px] md:text-[30px] text-white lg:text-[42px] text-[36px] tracking-[1.50px] font-semibold !text-white-a700">
                СКУЛЬПТУРА &amp; АРТ
                </h2>
                <p className="lg:text-[13px] text-[16px] text-white tracking-[1.50px] text-center font-light leading-6 !text-white-a700">
                Классическое искусство — наша слабость. Оставаясь с ним
                <br />
                наедине, вы рискуете быть прикованным взглядом и всем
                <br />
                нутром. Оно будоражит и не дает шанса остаться
                <br />
                равнодушным. И как же прекрасно осознавать, что шедевры,
                <br />
                прошедшие через века, от гениев возрождения или
                <br />
                голландских провокаторов, можно носить на своем теле.
                </p>
            </div>
            </div>
        </div>
        </div>
        <SwiperComponent/>
    </div>
    <div className='bg-grey-light w-full h-[180px] flex justify-center items-center'>
            <Mainbtn color='black' text='Вернуться на главную'/>
    </div>
    <Contact/>
    <Footer/>
    </>
  )
}
