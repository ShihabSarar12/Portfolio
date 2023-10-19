import React from 'react';
import Carousel from './Carousel';

const Art = () => {
    const slides = [
        'portrait1.jpg',
        'skull.jpg',
        'girl.jpg',
        'mother.jpg',
        'lion.jpeg'
    ];
    return (
        <div className='max-w-lg mt-16'>
            <Carousel autoSlide={true}>
                {
                    slides.map((slide, index) =>
                        <img key={index} src={require(`./assets/art/${slide}`)} alt="Art" />
                    )
                }
            </Carousel>
        </div>
    );
};

export default Art;