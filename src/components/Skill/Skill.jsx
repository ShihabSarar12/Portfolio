import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './Skill.css';

const Skill = () => {
    const imgBubble = Array.apply(null, Array(7)).map((index) => index);
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
            <div className='w-full h-full relative z-20'>
                <SkillCard
                    left='5rem'
                    name='ReactJS'
                    image='react_logo.png'
                    topColor='#01D8FF'
                    bottomColor='#013038'
                />
                <SkillCard
                    delay='0.5s'
                    left='20rem'
                    name='HTML'
                    image='html_logo.png'
                    topColor='#E34F26'
                    bottomColor='#361208'
                />
                <SkillCard
                    delay='1s'
                    left='35rem'
                    name='CSS'
                    image='css_logo.png'
                    topColor='#264DE4'
                    bottomColor='#0E1C52'
                />
                <SkillCard
                    delay='1.5s'
                    left='50rem'
                    name='Javascript'
                    image='javascipt_logo.png'
                    topColor='#f0DB4F'
                    bottomColor='#7D722A'
                />
                <SkillCard
                    delay='2s'
                    left='65rem'
                    name='Tailwind CSS'
                    image='tailwind_logo.png'
                    topColor='#38BDF8'
                    bottomColor='#15485E'
                />
            </div>
            <div className='relative'>
                <div className='w-full bubbles z-10 absolute flex justify-around bottom-0'>
                    {imgBubble.map((value) => {
                        return (
                            <img
                                key={value}
                                src={require('../assets/extras/bubble.png')}
                                alt='bubble'
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skill;
