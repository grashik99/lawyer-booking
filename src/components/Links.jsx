import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <>
            <li><NavLink to="/" className='font-black text-xl'>Home</NavLink></li>
            <li><NavLink to="/" className='font-black text-xl'>My Booking</NavLink></li>
            <li><NavLink to="/" className='font-black text-xl'>Blogs</NavLink></li>
            <li><NavLink to="/" className='font-black text-xl'>Contact Us</NavLink></li>
        </>
    );
};

export default Links;