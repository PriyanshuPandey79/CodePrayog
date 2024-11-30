import React from 'react';
import navigate from './../assets/navigate.png';
// import Social from '../buttons/SocialCard';

import DrawerSocial from '../buttons/DrawerSocial';
import Logo from './../assets/codePrayog.png';

function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-white mt-16' style={{ background: '#1F1F1F' }}>
      <div className='h-1 bg-white'></div>

      <div className={`flex flex-col md:flex-row justify-around items-start p-4 ${isDarkMode ? '' : 'bg-gray-950'} text-white md:p-16 p-8 mt-10`}>
        {/* Left Div */}
        <div className="mb-8 md:mb-0">
          <div className="flex mt-8">
            {/* <Social /> */}
            <DrawerSocial/>
            
          </div>
          <div className='pt-4 pl-4'>
              <p><span className='text-sky-500'>Phone No:</span>{' '}+91 8892200112</p>
              <p></p>
              <p><span className='text-sky-500'>Email:</span>{'   '}codeprayog.academy@gmail.com</p>
            </div>
        </div>

        {/* Right Div */}
        <div className="w-full md:w-auto">
          <div className="flex items-center mb-4 font-semibold">
            <img src={navigate} className="h-auto w-12 md:w-14 mr-2" alt="Navigate" />
            <span className="underline underline-offset-4 text-gradient2 text-xl md:text-2xl">Navigate</span>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 font-semibold text-center">
            {['Home', 'About', 'Our services', 'Courses', 'Reviews', 'Contact'].map((item, index) => (
              <li key={index} className="text-lg hover:text-sky-500 hover:scale-110 transition">
                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
              </li>
            ))}
          </ul>
        
          
        </div>
      </div>
      <div className='flex flex-col items-center pt-2 pb-4'>
            <img src={Logo} className='w-auto h-20 mb-3' />
            <h1 className="text-5xl md:text-7xl text-gradient2 font-bold text-center">
              CodePrayog
            </h1>
            <p className='text-yellow-400 font-semibold'>Seekho | Banao | Badho</p>
          </div>

      <div className="text-[0.8rem] font-semibold mt-4 bg-gray-950 pt-2">
        <div className='text-center'>Last updated on October 2024.</div>
        <div className='text-center pl-6 pr-6 pb-4'>© {currentYear}-present. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

/* Built by Priyanshu Pandey - 2024 */
