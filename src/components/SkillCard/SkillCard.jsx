import React, { useEffect, useRef } from 'react';
import './SkillCard.css';

const SkillCard = ({ delay = 0, name, image, topColor, bottomColor }) => {
    const card = useRef();
    useEffect(() => {
        card.current.style.backgroundImage = `linear-gradient(to bottom right, ${topColor}, ${bottomColor})`;
    }, [card, topColor, bottomColor]);
    return (
        <div
            ref={card}
            className={`w-56 h-64 p-3 rounded-2xl card text-2xl font-semibold text-white text-center`}
        >
            <img
                className='mb-2 h-5/6'
                src={require(`.././assets/logos/${image}`)}
                alt='not loaded'
                draggable={false}
            />
            <h1 className='h-1/6'>{name}</h1>
        </div>
    );
};

export default SkillCard;
