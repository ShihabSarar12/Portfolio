import React, { Suspense } from 'react';
import Loader from './3D/Loader';
import { Canvas } from '@react-three/fiber';
import Stars from './3D/Star/Stars';

const Contact = () => {
    return (
        <section className='bg-black w-screen h-screen p-5'>
        <Canvas>
            <Suspense fallback={<Loader />}>
                <Stars size={0.04} color='#00AAFF' animate={true} />
            </Suspense>
            <ambientLight />
        </Canvas>
        </section>
    );
};

export default Contact;