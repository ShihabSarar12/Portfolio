import React, { useEffect } from 'react';
import Carousel from '../Carousel';
import './Art.css';
import Text from '../Text';

const Art = () => {
    const slides = [
        'portrait1.jpg',
        'skull.jpg',
        'girl.jpg',
        'mother.jpg',
        'lion.jpeg',
    ];

    return (
        <div className='w-screen h-screen bg-black relative overflow-hidden'>
            <div className='mt-16 flex overflow-hidden relative'>
                <div className='max-w-lg z-10'>
                    <Carousel autoSlide={true}>
                        {slides.map((slide) => (
                            <img
                                key={slide}
                                src={require(`../assets/art/${slide}`)}
                                alt='Art'
                            />
                        ))}
                    </Carousel>
                </div>
                <div className='flex flex-col justify-center w-full p-16 font-semibold text-3xl text-white gap-5 z-10'>
                    <div>
                        Hi I am{' '}
                        <Text text='Shihab Sarar ...' textSize='text-3xl' />
                    </div>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae eveniet commodi, nobis cum possimus asperiores
                        eius nemo nesciunt. Consequuntur, quis?
                    </p>
                    <button className='w-44 text-xl p-4 bg-slate-700 border-2 border-slate-800 hover:bg-slate-600 rounded-full active:bg-slate-900'>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Art;
