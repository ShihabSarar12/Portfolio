import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col text-2xl font-semibold gap-4 bg-black text-white'>
            <p>Sorry there is no page by this name...</p>
            <button className='p-2 border-slate-800 border-2 rounded-2xl hover:bg-slate-900'><Link to='/'>Return To HOME!!</Link></button>
        </div>
    );
};

export default NoPageFound;