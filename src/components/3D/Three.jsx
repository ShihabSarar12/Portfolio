import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Wave from './Wave/Wave';
import Name from './Name/Name';
import Loader from './Loader';
import { OrbitControls, Stars, Stats } from '@react-three/drei';

const Three = () => {
    return (
        <div className='w-full h-full'>
            <Canvas
                camera={{
                    position: [0.6, 0.5, 3],
                }}
            >
                <Suspense fallback={<Loader />}>
                    <color attach='background' args={['#000000']} />
                    <ambientLight />
                    <directionalLight position={[-5, 5, 5]} intensity={5} />
                    <Stars depth={100} radius={250} fade={true} />
                    <Name
                        text='SHIHAB SARAR'
                        position={[-0.3, 0.3, 2.45]}
                        rotation={[0, Math.PI / 13.5, 0]}
                        scale={[0.1, 0.1, 0.1]}
                    />
                    <Wave />
                    <Stats />
                </Suspense>
                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    );
};

export default Three;
