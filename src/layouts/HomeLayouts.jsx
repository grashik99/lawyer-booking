import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <NavBar />
            <div className='min-h-[calc(100vh-290px)]'><Outlet /></div>
            <Footer />
        </div>
    );
};

export default HomeLayouts;