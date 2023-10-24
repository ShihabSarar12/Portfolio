import React, { Suspense } from 'react';
import Loader from './3D/Loader';
import { Canvas } from '@react-three/fiber';
import Text from './Text';
import Stars from './3D/Star/Stars';
import ContactCard from './ContactCard';

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
                <div className='mb-3'>
                    <Text text='Contact' textSize='text-3xl' />
                </div>
                <div className='flex flex-col w-5/12 h-full gap-3'>
                    <ContactCard
                        envelop={true}
                        name='Email:'
                        message='shihabsararchamok@gmail.com'
                    />
                    <ContactCard
                        messenger={true}
                        name='Messenger'
                        message='Shihab Sarar (Chamok)'
                    />
                    <ContactCard
                        whatsapp={true}
                        name='Whatsapp'
                        message='01788667080'
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
