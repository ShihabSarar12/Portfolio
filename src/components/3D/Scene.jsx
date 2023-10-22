import React from 'react';
import Three from './Three';
import picture from '../assets/extras/bubble.png';

const Scene = () => {
    return (
      <div>
        <section className='w-screen h-screen relative'>
          <div className='w-full h-full rounded-xl'>
            <Three />
          </div>
          <h1 className='absolute top-[25rem] left-60 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Perferendis magnam expedita omnis quae magni maxime rem saepe possimus? Voluptas, quibusdam.</h1>
          <a className='absolute top-[30rem] left-60' href={picture} download='picture' target='_blank' >
            <button className='p-4 bg-slate-800 hover:bg-slate-700 text-white text-xl font-semibold rounded-full'>Download CV</button>
          </a>
          <h1 className='text-center w-full absolute top-[35rem] text-white'>Dive into my story ...</h1>
          <div className='w-full h-20 absolute top-[37rem] backdrop-blur'></div>
        </section>
      </div>
    );
};

export default Scene;