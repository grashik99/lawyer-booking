import React, { createContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

export const LawyerContext = createContext(null);

const HomeLayouts = () => {

    const [lawyers, setLawyers] = useState([]);
    useEffect(() => {
        fetch('lawyer.json')
            .then(res => res.json())
            .then(data => setLawyers(data))
    }, [])

    return (
        <div>
            <LawyerContext.Provider value={{lawyers}}>
                <NavBar />
                <div className='min-h-[calc(100vh-290px)]'><Outlet /></div>
                <Footer />
            </LawyerContext.Provider>
        </div>
    );
};

export default HomeLayouts;