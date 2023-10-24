import React, { useEffect, useRef } from 'react';
import './SkillCard.css';

const SkillCard = ({ delay = 0, left, name, image, topColor, bottomColor }) => {
    const card = useRef();
    useEffect(() => {
        card.current.style.backgroundImage = `linear-gradient(to bottom right, ${topColor}, ${bottomColor})`;
        card.current.style.animationDelay = delay;
        card.current.style.left = left;
    }, [card, topColor, bottomColor, delay, left]);
    return (
        <div
            ref={card}
            className='w-52 h-64 p-3 rounded-2xl absolute card text-2xl font-semibold text-white text-center hover:scale-105 transition-all duration-300 ease-in-out'
        >
            <img
                className='mb-2 h-5/6'
                src={require(`.././assets/logos/${image}`)}
                alt='not loaded'
            />
            <h1 className='h-1/6'>{name}</h1>
        </div>
    );
};

export default SkillCard;
