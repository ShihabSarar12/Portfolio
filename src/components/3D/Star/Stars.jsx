import React, { Suspense, useEffect } from 'react';
import Loader from '../Loader';

const Stars = () => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    useEffect(() =>{
        for (let i = 0;i < count;i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;
        }
    }, [count, positions]);
    return (
        <Suspense fallback={<Loader />}>
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
                    size={0.02}
                    transparent
                />
            </points>
        </Suspense>
    );
};

export default Stars;