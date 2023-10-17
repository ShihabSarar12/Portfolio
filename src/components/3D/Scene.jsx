import React from 'react';
import Three from './Three';

const Scene = () => {
    return (
      <div>
        <section className='w-screen h-screen relative'>
          <div className='w-full h-full rounded-xl'>
            <Three />
          </div>
          <h1 className='absolute top-[25rem] left-60 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Perferendis magnam expedita omnis quae magni maxime rem saepe possimus? Voluptas, quibusdam.</h1>
          <h1 className='text-center w-full absolute top-[35rem] text-white'>Dive into my story ... </h1>
          <div className='w-full h-14 absolute top-[38rem] backdrop-blur'></div>
        </section>
      </div>
    );
};

export default Scene;