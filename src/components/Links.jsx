import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <>
            <li><NavLink to="/" className='font-black text-xl p-2'>Home</NavLink></li>
            <li><NavLink to="/booking" className='font-black text-xl p-2'>My Booking</NavLink></li>
            <li><NavLink to="/blogs" className='font-black text-xl p-2'>Blogs</NavLink></li>
            <li><NavLink to="/contact-us" className='font-black text-xl p-2'>Contact Us</NavLink></li>
        </>
    );
};

export default Links;