import React, { useState, useContext } from 'react';
import { DrawerContext } from './DrawerContext.jsx';
import ContactDrawer from './ContactDrawer.jsx';
import Logo from './../assets/codePrayog.png';

function Navbar({ toggleTheme, isDarkMode }) {
  const { isDrawerOpen, toggleDrawer } = useContext(DrawerContext);
  
  return (
    <div className="fixed w-full top-[-4px] z-10 left-0 right-0 shadow-sm">
      <div className="h-1"></div>
      <div className={`flex items-center justify-between p-4 md:px-8`} style={{ background: '#B3F4F7' }}>
        
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#about">
            <div className='flex'>
              <img src={Logo} alt="Logo" className="h-14 w-auto" />
              <span className='py-3 text-xl font-bold text-gradient2'>CodePrayog</span>
            </div>
          </a>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <ul className={`hidden md:flex md:items-center md:space-x-6 font-semibold ${isDarkMode ? 'text-gray-700' : 'text-sky-900'} p-6 md:p-0 flex-grow justify-center`}>
          <li className="text-xl hover:cursor-pointer hover:text-sky-500 hover:scale-110">
            <a href="#services">Our Services</a>
          </li>
          <li className="text-xl hover:cursor-pointer hover:text-sky-500 hover:scale-110">
            <a href="#tech">Courses</a>
          </li>
          <li className="text-xl hover:cursor-pointer hover:text-sky-500 hover:scale-110">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="text-xl hover:cursor-pointer hover:text-sky-500 hover:scale-110">
            <a href="#about2">About Us</a>
          </li>
          <li className="text-xl hover:cursor-pointer hover:text-sky-500 hover:scale-110">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right Section with Jump to Button */}
        <div className="flex items-center space-x-4 ml-auto">
          <button className='hidden md:block px-1 font-bold text-purple-700 text-lg border-b-2 border-purple-700 hover:border-purple-900'>
            Sign in
          </button>
          <button
            className='border-2 border-purple-700 font-semibold w-auto text-xl bg-white hover:text-sky-500 hover:scale-125 px-3 py-1 rounded-md transition duration-200 text-purple-700'
            onClick={toggleDrawer}
          >
            Jump to
          </button>
        </div>
      </div>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} isDarkMode={isDarkMode} />
    </div>
  );
}

export default Navbar;
