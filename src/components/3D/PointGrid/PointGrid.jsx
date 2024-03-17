import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import pointGridFragmentShaders from './PointGridShaders/fragment';
import pointGridVertexShader from './PointGridShaders/vertex';

const PointGrid = ({ gridSize = 20 }) => {
    const grid = useRef();
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
        const elapsedTime = clock.getElapsedTime();
        pointGrid.current.material.uniforms.uTime.value = elapsedTime;
        grid.current.rotation.y += 0.002;
    })

    return (
        <group ref={grid}>
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