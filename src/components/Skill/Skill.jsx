import React, { useEffect, useRef } from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './Skill.css';

const Skill = () => {
    const imgBubble = Array.apply(null, Array(7)).map((index) => index);
    const maxDragLimit = -28;
    const track = useRef();
    const handleOnDown = (event) =>
        (track.current.dataset.mouseDownAt = event.clientX);

    const handleOnUp = () => {
        track.current.dataset.mouseDownAt = '0';
        track.current.dataset.prevPercentage = track.current.dataset.percentage;
    };

    const handleOnMove = (event) => {
        if (track.current.dataset.mouseDownAt === '0') return;

        const mouseDelta =
            parseFloat(track.current.dataset.mouseDownAt) - event.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained =
            parseFloat(track.current.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            maxDragLimit
        );

        track.current.dataset.percentage = nextPercentage;

        track.current.animate(
            {
                transform: `translate(${nextPercentage}%, 0%)`,
            },
            { duration: 1200, fill: 'forwards' }
        );
    };

    return (
        //TODO: Complete Skills section
        <section
            id='skill_section'
            className='w-screen h-screen p-8 overflow-hidden'
        >
            <div className='m-10'>
                <h1 className='text-xl font-semibold text-white'>
                    Mother Tongue
                </h1>
            </div>
            <div className='w-full h-full z-10 relative'>
                <div
                    onMouseDown={handleOnDown}
                    onMouseMove={handleOnMove}
                    onMouseUp={handleOnUp}
                    onTouchStart={(event) => handleOnDown(event.touches[0])}
                    onTouchEnd={(event) => handleOnUp(event.touches[0])}
                    onTouchMove={(event) => handleOnMove(event.touches[0])}
                    ref={track}
                    className='h-80 overflow-hidden flex items-center gap-5 absolute left-10 top-10 select-none '
                    data-mouse-down-at='0'
                    data-prev-percentage='0'
                >
                    <SkillCard
                        name='ReactJS'
                        image='react_logo.png'
                        topColor='#01D8FF'
                        bottomColor='#013038'
                    />
                    <SkillCard
                        delay='0.5s'
                        name='HTML'
                        image='html_logo.png'
                        topColor='#E34F26'
                        bottomColor='#361208'
                    />
                    <SkillCard
                        delay='1s'
                        name='CSS'
                        image='css_logo.png'
                        topColor='#264DE4'
                        bottomColor='#0E1C52'
                    />
                    <SkillCard
                        delay='1.5s'
                        name='Javascript'
                        image='javascipt_logo.png'
                        topColor='#f0DB4F'
                        bottomColor='#7D722A'
                    />
                    <SkillCard
                        delay='2s'
                        name='Tailwind CSS'
                        image='tailwind_logo.png'
                        topColor='#38BDF8'
                        bottomColor='#15485E'
                    />
                    <SkillCard
                        delay='2.5s'
                        name='Tailwind CSS'
                        image='tailwind_logo.png'
                        topColor='#38BDF8'
                        bottomColor='#15485E'
                    />
                    <SkillCard
                        delay='3s'
                        name='Tailwind CSS'
                        image='tailwind_logo.png'
                        topColor='#38BDF8'
                        bottomColor='#15485E'
                    />
                </div>
            </div>
            <div className='relative'>
                <div className='w-full bubbles z-20 absolute flex justify-around bottom-0'>
                    {imgBubble.map((value) => {
                        return (
                            <img
                                className='pointer-events-none'
                                key={value}
                                src={require('../assets/extras/bubble.png')}
                                alt='bubble'
                                draggable={false}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skill;
