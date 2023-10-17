import { Html, useProgress } from '@react-three/drei';
import React, { useEffect } from 'react';

const Loader = () => {
    const { progress } = useProgress();
    useEffect(() =>{
        console.log(progress + "% Loaded");
    }, [progress]);
    return (
        <Html center>
            <div className='bg-black'>
                { progress } % Loaded...
            </div>
        </Html>
    );
};

export default Loader;