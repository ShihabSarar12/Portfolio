import React, { useRef } from 'react';
import { MeshTransmissionMaterial, Text3D } from '@react-three/drei';
import UbuntuBold from './Ubuntu_Bold.json';
import { useFrame, useThree } from '@react-three/fiber';

const Name = ({ text, position, rotation, scale }) => {
    const nameText = useRef();
    const { mouse } = useThree();
    useFrame(() =>{
        nameText.current.position.x = mouse.x * Math.PI * 0.1;
        nameText.current.rotation.x = mouse.x * Math.PI * 0.1;
        nameText.current.rotation.x = mouse.x * Math.PI * 0.1;
        nameText.current.position.y = mouse.y * Math.PI * 0.1;
    });

    return (
        <>
            <group position={position} rotation={rotation} scale={scale}>
                <Text3D
                    ref={nameText}
                    font={UbuntuBold}
                >
                    {text}
                    <MeshTransmissionMaterial 
                        thickness={0.85}
                        roughness={0.2}
                        transmission={1.0}
                        ior={0.9}
                        chromaticAberration={0.38}
                        backside={true}
                    />
                </Text3D>
            </group>
        </>
    );
};

export default Name;
