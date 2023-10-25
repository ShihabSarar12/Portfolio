import React, { useRef } from 'react';
import { Text3D } from '@react-three/drei';
import UbuntuBold from './Ubuntu_Bold.json';

const Name = ({ text, position, rotation, scale }) => {
    const nameText = useRef();

    const handleEnter = (event) => {
        console.log(event);
    };

    return (
        <>
            <group position={position} rotation={rotation} scale={scale}>
                <Text3D
                    ref={nameText}
                    font={UbuntuBold}
                    // TODO have to fix mouse enter and leave animation
                    onPointerEnter={handleEnter}
                    onPointerLeave={() => console.log('mouse leave')}
                >
                    {text}
                    <meshNormalMaterial />
                </Text3D>
            </group>
        </>
    );
};

export default Name;
