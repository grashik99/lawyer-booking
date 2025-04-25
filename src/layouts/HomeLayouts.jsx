import React, { createContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const LayerContext = createContext(null);

const HomeLayouts = () => {

    const [lawyer, setLawyer] = useState([]);
    useEffect(() => {
        fetch('lawyer.json')
            .then(res => res.json())
            .then(data => setLawyer(data))
    }, [])

    return (
        <div>
            <LayerContext.Provider value={{lawyer}}>
                <NavBar />
                <div className='min-h-[calc(100vh-290px)]'><Outlet /></div>
                <Footer />
            </LayerContext.Provider>
        </div>
    );
};

export default HomeLayouts;