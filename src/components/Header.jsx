import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Text from './Text';

const Header = () => {
    return (
        <div className='w-screen bg-transparent fixed top-0 left-0 flex flex-row justify-between px-5 py-1 backdrop-blur-sm'>
            <div className='text-2xl font-bold text-blue-500 rounded-2xl p-2 hover:bg-slate-900 cursor-pointer'>
                <Link to='/'>Shihab Sarar</Link>
            </div>
            <div className='text-lg font-bold text-white w-2/6 flex justify-between'>
                <button className='rounded-2xl p-2 hover:bg-slate-900 cursor-pointer'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500' : ''
                        }
                    >
                        <Text text='HOME' colorDefined={true} />
                    </NavLink>
                </button>
                <button className='rounded-2xl p-2 hover:bg-slate-900 cursor-pointer'>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500' : ''
                        }
                    >
                        <Text text='ABOUT' colorDefined={true} />
                    </NavLink>
                </button>
                <button className='rounded-2xl p-2 hover:bg-slate-900 cursor-pointer'>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500' : ''
                        }
                    >
                        <Text text='PROJECTS' colorDefined={true} />
                    </NavLink>
                </button>
                <button className='rounded-2xl p-2 hover:bg-slate-900 cursor-pointer'>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? 'text-blue-500' : ''
                        }
                    >
                        <Text text='CONTACT' colorDefined={true} />
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Header;
