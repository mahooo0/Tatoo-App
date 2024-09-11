// components/Footer.js
import WkontakteIcon from '../../public/svg/wkontakte.svg';
import instagramIcon from '../../public/svg/intragram.svg';
import telegramIcon from '../../public/svg/telegram.svg';
import Image from 'next/image';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="flex items-center  justify-between bg-black  p-4 flex-row  ">
            <p className="leading-[22px] text-[14px] font-semibold text-white">
                +994 055 266 07 28
                <br />
                studio@TatooApp.az
            </p>
            <div className="flex flex-row gap-9 w-fit -ml-14">
                <a href="https://wa.me/+9940552660728">
                    <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="28px"
                            height="28px"
                            viewBox="-1.66 0 740.824 740.824"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"
                            />
                        </svg>
                    </div>
                </a>
                <a href="https://www.instagram.com/mah0o00">
                    <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
                        <Image src={instagramIcon} alt="" />
                    </div>
                </a>
                <a href="">
                    <div className="bg-white  rounded-full w-[50px] h-[50px] flex justify-center items-center ">
                        <Image
                            src={telegramIcon}
                            alt=""
                            width={28}
                            height={28}
                        />
                    </div>
                </a>
            </div>
            <div className="   w-fit ">
                <div
                    className="flex justify-end w-fit   "
                    onClick={scrollToTop}
                >
                    <p className="text-[14px] font-semibold !text-broskiytattoo_ru-nero text-white flex flex-row gap-2">
                        BACK TO TOP
                        <span className="animate-bounce">
                            <svg
                                role="presentation"
                                width="5px"
                                height="17px"
                                viewBox="0 0 6 20"
                                version="1.1"
                            >
                                <defs></defs>
                                <g
                                    id="Welcome"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="Desktop-HD-Copy-39"
                                        transform="translate(-569.000000, -1797.000000)"
                                        fill="#ffffff"
                                    >
                                        <path
                                            d="M565.662286,1804.2076 L562.095536,1806.87166 C561.958036,1807.00916 561.958036,1807.16385 562.095536,1807.30135 L565.662286,1809.96541 C565.799786,1810.10291 565.941411,1810.0431 565.941411,1809.83616 L565.941411,1808.11741 L581.816411,1808.11741 L581.816411,1806.05491 L565.941411,1806.05491 L565.941411,1804.33616 C565.941411,1804.18147 565.866474,1804.1141 565.769536,1804.14297 C565.737224,1804.1526 565.696661,1804.17322 565.662286,1804.2076 Z"
                                            id="Shape"
                                            transform="translate(571.904411, 1807.088000) rotate(-270.000000) translate(-571.904411, -1807.088000) "
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
