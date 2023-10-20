import React, { useEffect, useState } from 'react';

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [ current, setCurrent ] = useState(0);

    const prevButton = () =>{
        setCurrent((curr) => 
            (curr === 0 ? slides.length - 1 : curr - 1)
        )
    }
    const nextButton = () =>{
        setCurrent((curr) => 
            (curr === slides.length - 1 ? 0 : curr + 1)
        )
    }
    useEffect(() =>{
        if(!autoSlide) return;
        const slideInterval = setInterval(nextButton, autoSlideInterval);
        return () => clearInterval(slideInterval)
    });

    return (
        <div className='overflow-hidden relative w-72 rounded-2xl'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${ current * 100 }%)`}}>{ slides }</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prevButton} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>Left</button>
                <button onClick={nextButton} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>Right</button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {
                        slides.map((_, index) =>(
                            <div
                                className={`transition-all w-3 h-3 bg-white rounded-full ${current === index ? 'p-2' : 'bg-opacity-50'}`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Carousel;