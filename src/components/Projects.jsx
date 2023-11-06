import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Loader from './3D/Loader';
import React, { Suspense } from 'react';
import PointGrid from './3D/PointGrid/PointGrid';

const Projects = () => {
    return (
        <section className='bg-black w-screen h-screen'>
            <Canvas camera={{position: [-0.5, 1, 5]}}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <Suspense fallback={<Loader />}>
                    <PointGrid />
                </Suspense>
                <Stats />
            </Canvas>
        </section>
    );
};

export default Projects;