import React from 'react';
import { Link } from 'react-router-dom';
import {  NavLink } from 'react-router-dom'
import './Header.css'

// font - medium tracking - wide text - gray - 700 transition - colors duration - 200 hover: text - blue - 400
// {favorite ? "★" : "☆"}

const Header = () => {

            return (
            <div className='bg-gray-100  p-5'>
                <div className='flex items-center justify-between'>
                   
                        <span className='ml-2  font-bold text-2xl tracking-wide text-gray-800'>
                            Your Job Site
                        </span>
                
                        <ul className='flex items-center text-blue-500 a'>
                            <NavLink
                                to='/applied'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Applayed Jobs
                            </NavLink>
                            <NavLink
                                to='/statics'
                                    className={({ isActive }) => (isActive ? 'active ' : 'default')}
                            >
                                 Statics
                            </NavLink>
                        
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </ul>
                        <NavLink to="/"> <div className='bg-red-400 p-3 rounded-md font-bold'>
                            <button >Start Applaying</button>
                        </div></NavLink>
                    
                </div>
            </div>
        
    );
};

export default Header;