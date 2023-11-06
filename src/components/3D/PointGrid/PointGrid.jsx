import { useFrame, useLoader } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import pointGridFragmentShaders from './PointGridShaders/fragment';
import pointGridVertexShader from './PointGridShaders/vertex';

const PointGrid = ({ gridSize = 20, size = 0.04, color = '#00AAFF' }) => {
    const pointGrid = useRef();
    const count = useMemo(() =>{
        return gridSize * gridSize;
    },[gridSize]);
    const positions = useMemo(() => {
        const positions = [];
        const spacing = 0.5;
         for (let x = -(gridSize / 2); x < (gridSize / 2); x++) {
            for (let z = -(gridSize / 2); z < (gridSize / 2); z++) {
                const xPos = x * spacing;
                const zPos = z * spacing;
                positions.push(xPos, 0, zPos);
            }
        }
        return new Float32Array(positions);
    }, [gridSize]);

    const data = useMemo(() =>({
        depthWrite: false,
        vertexColors: true,
        vertexShader: pointGridVertexShader,
        fragmentShader: pointGridFragmentShaders,
        uniforms: {
            uTime: { value: 0 }
        }
    }),[]);

    useFrame(({ clock }) =>{
        pointGrid.current.material.uniforms.uTime.value = clock.getElapsedTime();
    })

    return (
        <group >
            <points ref={pointGrid}>
                <bufferGeometry attach='geometry'> 
                    <bufferAttribute
                        attach='attributes-position'
                        count={count}
                        itemSize={3}
                        array={positions}
                    />
                </bufferGeometry>
                <shaderMaterial attach='material' { ...data } />
            </points>
        </group>
    );
};

export default PointGrid;