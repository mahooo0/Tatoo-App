import Image from 'next/image';
import React, { useState } from 'react';
import Master from '../../../public/Images/Screenshot 2024-06-23 221632.png';
import { StyleType } from '@/Services/Types';
import LazyImage from '../Lazyimg';
interface Props {
    name: string;
    img: string;
    styles: StyleType[];
}
const MasterCard = (props: Props) => {
    let [IsOn, SetIsOn] = useState(false);
    let { name, img, styles } = props;
    console.log(styles);

    return (
        <div
            className="relative w-[360px] overflow-hidden h-[440px] cursor-pointer mx-5 mb-10"
            onMouseEnter={() => SetIsOn(true)}
            onMouseLeave={() => SetIsOn(false)}
        >
            {/* <Image src={img} alt="" /> */}
            {/* <LazyImage src={img} alt="master img" /> */}
            {/* opacity-0 hover:opacity-100 translate-y-6 hover:translate-y-0 transition-all ease-in-out duration-[250ms] */}
            <img src={img} alt="" className="z-0" loading="lazy" />
            <div
                className={
                    IsOn
                        ? 'w-full absolute opacity-100 translate-y-0 transition-all ease-in-out duration-[.5s] z-20 bg-buler-black flex flex-col justify-end  items-center  bottom-0 h-1/2'
                        : 'w-full absolute opacity-0  translate-y-6  transition-all ease-in-out duration-[.5s] z-20 bg-buler-black flex flex-col justify-end  items-center  bottom-0 h-1/2'
                }
            >
                <h5
                    className={
                        IsOn
                            ? 'opacity-100 translate-y-0 transition-all ease-in-out duration-[.5s]  text-white   font-sans font-[700] text-[32px] w-[90%]'
                            : ' opacity-0  translate-y-6  transition-all ease-in-out duration-[.5s] text-white   font-sans font-[700] text-[32px] w-[90%]'
                    }
                >
                    {name}
                </h5>
                <div
                    className={
                        IsOn
                            ? 'opacity-100 translate-y-0 transition-all ease-in-out duration-[.5s] text-white w-[90%]  pb-4  font-sans font-[700] text-[16px] flex flex-row flex-wrap'
                            : 'opacity-0  translate-y-6  transition-all ease-in-out duration-[.5s] text-white w-[90%]  pb-4  font-sans font-[700] text-[16px] flex flex-row flex-wrap'
                    }
                >
                    {styles?.map((item: StyleType) => (
                        <p> {item.name} , </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MasterCard;
