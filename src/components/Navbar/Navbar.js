import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar bg-base-100 drop-shadow-lg rounded-lg mb-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href='/'>Meal Store</a>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/shop'>Shop</a></li>
                        <li><a href='/contact'>Contact Us</a></li>
                        <li><a href='/about'>About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;