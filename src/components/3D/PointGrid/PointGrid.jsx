import { useFrame, useLoader } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import imgTexture from '../../assets/extras/circle.png';
import * as THREE from 'three';


const PointGrid = ({ gridSize = 20, size = 0.04, color = '#00AAFF' }) => {
    const texture = useLoader(THREE.TextureLoader, imgTexture);
    const pointGrid = useRef();
    const count = useMemo(() =>{
        return gridSize * gridSize;
    },[gridSize]);
    const positions = useMemo(() => {
        const positions = [];
        const spacing = 0.8;
         for (let x = -(gridSize / 2); x < (gridSize / 2); x++) {
            for (let z = -(gridSize / 2); z < (gridSize / 2); z++) {
                const xPos = x * spacing;
                const zPos = z * spacing;
                positions.push(xPos, 0, zPos);
            }
        }
        return new Float32Array(positions);
    }, [gridSize]);

    return (
        <group ref={pointGrid}>
            <points>
                <bufferGeometry attach='geometry'> 
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
    );
};

export default PointGrid;