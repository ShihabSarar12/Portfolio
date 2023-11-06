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
                {/* <pointsMaterial
                    map={texture}
                    alphaTest={0.5}
                    size={size}
                    color={color}
                    transparent
                    opacity={1}
                /> */}
                <shaderMaterial 
                    depthWrite={false}
                    vertexColors={true}
                    vertexShader={`
                        uniform float uTime;
                        void main(){
                            vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                            float elevation = sin(modelPosition.x * 1.2 + uTime * 1.25) *
                              sin(modelPosition.z * 1.2 + uTime * 1.25) *
                              0.33;

                            modelPosition.y = elevation;

                            vec4 viewPosition = viewMatrix * modelPosition;
                            vec4 projectedMatrix = projectionMatrix * viewPosition;
                            gl_Position = projectedMatrix;
                            gl_PointSize = 2.0; 
                        }
                    `}
                    fragmentShader={`
                        void main(){
                            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
                        }
                    `}
                    uniforms={{
                        uTime: { value: 0 }
                    }}
                />
            </points>
        </group>
    );
};

export default PointGrid;