import React, { useEffect } from 'react';
import Carousel from '../Carousel';
import './Art.css';

const Art = () => {
    const slides = [
        'portrait1.jpg',
        'skull.jpg',
        'girl.jpg',
        'mother.jpg',
        'lion.jpeg'
    ];
    useEffect(() =>{
        const about = document.querySelector('#about');
        const blob = document.querySelector('#mouse_blob');
        about.addEventListener('mousemove',(event) =>{
            blob.animate({
                left: `${event.clientX - 180}px`,
                top: `${event.clientY - 180}px`
            },{ duration: 10000, fill: 'forwards' });
        });
        return () => about.removeEventListener('mousemove', (event) =>{});
    },[]);
    return (
        <div id='about' className='mt-16 flex overflow-hidden relative'>
            <div className='max-w-lg z-10'>
                <Carousel autoSlide={true}>
                    {
                        slides.map((slide, index) =>
                            <img key={index} src={require(`../assets/art/${slide}`)} alt="Art" />
                        )
                    }
                </Carousel>
            </div>
            <div className='flex flex-col justify-center w-full p-16 font-semibold text-3xl text-white gap-5 z-10'>
                <h1>Hi I am Shihab Sarar ...</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet commodi, nobis cum possimus asperiores eius nemo nesciunt. Consequuntur, quis?</p>
                <button className='w-44 text-xl p-4 bg-slate-700 border-2 border-slate-800 hover:bg-slate-600 rounded-full active:bg-slate-900'>Contact Me</button>
            </div>
            <div id='mouse_blob' className='w-80 h-80 bg-white absolute top-1/2 left-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pointer-events-none blur-3xl'></div>
        </div>
    );
};

export default Art;