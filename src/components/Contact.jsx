import React, { Suspense } from 'react';
import Loader from './3D/Loader';
import { Canvas } from '@react-three/fiber';
import Text from './Text';
import Stars from './3D/Star/Stars';

const Contact = () => {
    return (
        <section className='relative bg-black w-screen h-screen p-5 '>
        <Canvas>
            <Suspense fallback={<Loader />}>
                <Stars size={0.04} color='#00AAFF' animate={true} />
            </Suspense>
            <ambientLight />
        </Canvas>
        <div className='absolute left-0 top-0 w-full h-full bg-transparent p-16'>
            <div>
                <Text text='Contact' textSize='text-3xl' />
            </div>
            <div>
                <Text text='Email: hello@johnny.com' textSize='text-2xl' />
            </div>
        </div>
        </section>
    );
};

export default Contact;