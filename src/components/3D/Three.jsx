import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Wave from './Wave/Wave';
import Name from './Name/Name';
import Loader from './Loader';
import Woman from './Woman';
import Stars from './Star/Stars';
import { Stats } from '@react-three/drei';

const Three = () => {
    return (
        <div className='w-full h-full'>
            <Canvas camera={{ position: [0.6, 0.5, 2.5] }}>
                <color attach='background' args={['#000000']} />
                <ambientLight />
                <directionalLight position={[-5, 5, 5]} intensity={5} />
                <Stars size={0.02} color='#FFFFFF' />
                {/*TODO Have to animate name */}
                <Name
                    text='SHIHAB SARAR'
                    position={[-0.3, 0.3, 2]}
                    rotation={[0, Math.PI / 13.5, 0]}
                    scale={[0.1, 0.1, 0.1]}
                />
                <Wave />
                <Suspense fallback={<Loader />}>
                    <group
                        position={[-1, 0, 1]}
                        scale={[0.5, 0.5, 0.5]}
                        rotation={[0, Math.PI / 5, 0]}
                    >
                        <Woman />
                    </group>
                </Suspense>
                <Stats />
            </Canvas>
        </div>
    );
};

export default Three;
