import React, { Suspense, useMemo, useRef } from 'react';
import imgTexture from '../../assets/extras/circle.png';
import Loader from '../Loader';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = ({ size, color, animate = false, randomness = 20 }) => {
    const texture = useLoader(THREE.TextureLoader, imgTexture);
    const stars = useRef();
    const count = 2000;
    const positions = useMemo(() =>{
        const positions = [];
        for (let i = 0;i < count;i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * randomness;
            positions[i3 + 1] = (Math.random() - 0.5) * randomness;
            positions[i3 + 2] = (Math.random() - 0.5) * randomness;
        }
        return new Float32Array(positions);
    }, [count, randomness]);
    useFrame((state, delta) =>{
        if(animate){
            stars.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <Suspense fallback={<Loader />}>
            <group ref={stars}>
                <points>
                    <bufferGeometry> 
                        <bufferAttribute
                            attach='attributes-position'
                            count={count}
                            itemSize={3}
                            array={positions}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        map={texture}
                        alphaTest={0.5}
                        size={size}
                        color={color}
                        transparent
                        opacity={1}
                    />
                </points>
            </group>
        </Suspense>
    );
};

export default Stars;