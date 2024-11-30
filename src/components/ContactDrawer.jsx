// ContactDrawer.jsx
import React from 'react';
import BackBtn from '../buttons/BackBtn';
import DrawerSocial from '../buttons/DrawerSocial';

const ContactDrawer = ({ isOpen, toggleDrawer, isDarkMode }) => {
  // Function to handle email button click
  const handleEmailClick = () => {
    window.location.href = 'mailto:priyanshupandey20021@gmail.com';
  };

  // Function to scroll to the contact form
  const scrollToContactForm = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    toggleDrawer();
  };

  return (
    <div className={`font-roboto fixed top-0 right-0 h-auto w-full sm:w-80 rounded-2xl mt-4 ${isDarkMode ? 'bg-dark-gradient text-white shadow-gray-900' : 'bg-text-gradient text-white shadow-lg'} transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-white'}`}>Quick Links</h2>
        <button onClick={toggleDrawer} aria-label="Close menu">
          <BackBtn />
        </button>
      </div>
      <div className="p-4">
        <div className="mb-4 font-bold">
          <div className="flex justify-center sm:justify-evenly mt-1">
            <DrawerSocial />
          </div>
        </div>
        <div className="mb-4">
          <button
            onClick={handleEmailClick}
            className={`w-full bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] px-0 py-0 border-0 rounded-md shadow-lg transition-all duration-300 flex justify-center items-center text-white font-bold cursor-pointer overflow-hidden hover:scale-95 ${isDarkMode ? 'shadow-gray-600' : 'shadow-blue-600'}`}
            aria-label="Connect via email"
          >
            <span className="bg-[rgb(5,6,45)] py-4 px-6 rounded-md w-full h-full transition duration-300 hover:bg-transparent">
              Connect via mail 📧
            </span>
          </button>
        </div>

        <div>
          <button
            onClick={scrollToContactForm}
            className={`w-full bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] px-0 py-0 border-0 rounded-md shadow-lg transition-all duration-300 flex justify-center items-center text-white font-bold cursor-pointer overflow-hidden hover:scale-95 ${isDarkMode ? 'shadow-gray-600' : 'shadow-blue-600'}`}
            aria-label="Scroll to contact form"
          >
            <span className={`bg-[rgb(5,6,45)] py-4 px-6 rounded-md w-full h-full transition duration-300 hover:bg-transparent`}>
              Reach out 💬
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDrawer;
