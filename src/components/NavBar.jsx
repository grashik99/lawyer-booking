import React, { useEffect, useState } from 'react';
import Links from './Links';
import logo from '../assets/logo.png'
import { Link } from 'react-router';

const themes = ['light', 'dark', 'cupcake', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'aqua', 'fantasy', 'lemonade']
const NavBar = () => {



    // Theme Control start.
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])
    const handleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    }
    // Theme Control end.



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown mr-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Links />
                    </ul>
                </div>
                <Link to="/">
                    <div className='btn '>
                        <img src={logo} alt="logo" className='h-5 md:h-7' />
                        <h1 className='text-xl md:text-3xl font-bold'>Law.bd</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <Links />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-black text-xl" onClick={handleTheme} title='Change Theme'>{theme}</a>
            </div>
        </div>
    );
};

export default NavBar;