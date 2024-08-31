import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://firebasestorage.googleapis.com/v0/b/new-f3ad2.appspot.com/o/bfdbd5f99a4f7c9ae6d9e5e9fbdbbbf1.jpg?alt=media&token=11dbcf41-d081-40a1-91fc-72382ded0001',
        'https://firebasestorage.googleapis.com/v0/b/new-f3ad2.appspot.com/o/Les%20encres%20de%20tatouages%20sont-elles%20nocives_.jpeg?alt=media&token=2560aa5e-433b-4960-b07e-5bf298317c96',
        'https://firebasestorage.googleapis.com/v0/b/new-f3ad2.appspot.com/o/285adf1c93d4773e9efbdbcf6a989d74.jpg?alt=media&token=c41cac71-2f28-41c2-96f1-8fb4f1012d4f',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    return (
        <div className="relative w-full  mx-auto overflow-hidden h-[690px]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out h-full`}
                    style={{
                        backgroundImage: `url(${slide})`,
                        opacity: index === currentSlide ? 1 : 0,
                        // transform: `translateX(${
                        //     index === currentSlide ? 0 : 100
                        // }%)`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default ImageSlider;
