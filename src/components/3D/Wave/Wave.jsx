import React, { Suspense, useMemo, useRef } from 'react';
import Loader from '../Loader';
import waveFragmentShader from './WaveShaders/fragment.js';
import waveVertexShader from './WaveShaders/vertex.js';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Wave = () => {
    const waveSurfaceColor = '#5AC9E1';
    const waveDeepColor = '#0643C5';
    const plane = useRef();
    const data = useMemo(() => ({
        fragmentShader: waveFragmentShader,
        vertexShader: waveVertexShader,
        uniforms: {
            uBigWavesFrequency: { value: new THREE.Vector2(1.2, 1.2) },
            uTime: { value: 0 },
            uBigWavesSpeed: { value: 1.25 },
            uBigWavesElevation: { value: 0.33 },
            uSmallIterations: { value: 4 },
            uColorOffset: { value: 0.25 },
            uColorMultiplier: { value: 3.8 },
            uSmallWavesFrequency: { value: 5 },
            uSmallWavesSpeed: { value: 1 },
            uSmallWavesElevation: { value: 0.15 },
            uSurfaceColor: { value: new THREE.Color(waveSurfaceColor) },
            uDeepColor: { value: new THREE.Color(waveDeepColor) },
          },
    }),[]);
    useFrame((state, delta) =>{
        const elapsedTime = state.clock.getElapsedTime();
        plane.current.material.uniforms.uTime.value = elapsedTime;
    });
    return (
        <>
            <Suspense fallback={<Loader />}>
                <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry attach='geometry' args={[7, 6, 512, 512]} />
                    <shaderMaterial attach='material' { ...data } />
                </mesh>
            </Suspense> 
        </>
    );
};

export default Wave;