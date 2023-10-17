import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Outlet />
            <div>
                <Header />
            </div>
        </div>
    );
};

export default Layout;