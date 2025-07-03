import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Scene from './3D/Scene';
import MotherTongue from './MotherTongue';
import Transition from './Transition';

const Home = () => {
    return (
        <>
            <Transition>
                <Scene />
            </Transition>
            <Transition>
                <MotherTongue />
            </Transition>
        </>
    );
};

export default Home;
