import React, { useEffect, useMemo, useRef } from 'react';
import { Text3D } from '@react-three/drei';
import UbuntuBold from './Ubuntu_Bold.json';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Name = ({ text, position, rotation, scale }) => {
    const mouse = useMemo(() => new THREE.Vector2());
    const rayCaster = new THREE.Raycaster();
    let mouseEnter = null;
    const nameText = useRef();

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        return () => {
            window.removeEventListener('mousemove', (event) => {});
        };
    }, [mouse]);

    useFrame((state, delta) => {
        rayCaster.setFromCamera(mouse, state.camera);
        let intersects = rayCaster.intersectObject(nameText.current);
        if (intersects?.length > 0) {
            if (mouseEnter === null) {
                console.log('Mouse Enter');
            }
            mouseEnter = intersects[0];
        } else {
            if (mouseEnter) {
                console.log('Mouse Leave');
            }
            mouseEnter = null;
        }
    });

    return (
        <>
            <group
                ref={nameText}
                position={position}
                rotation={rotation}
                scale={scale}
            >
                <Text3D font={UbuntuBold}>
                    {text}
                    <meshNormalMaterial />
                </Text3D>
            </group>
        </>
    );
};

export default Name;
