import React from 'react';
import aboutus from '../assets/aboutus.jpeg';

function About({ isDarkMode }) {
  return (
    <div id='about2' className={`flex flex-col-reverse lg:flex-row px-16 pt-24 space-y-8 md:space-y-0 md:space-x-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="w-full md:w-[50%] pt-6">
        <img src={aboutus} alt="About Us" className="rounded-lg w-full shadow-lg transition-transform duration-300 transform hover:scale-105 border-b border-yellow-400" />
      </div>
      
      <div className="w-full md:w-[50%] space-y-8 pb-8">
        <h1 className="text-5xl lg:text-6xl font-semibold text-gradient2">
          About Us
        </h1>
        <p className="text-lg md:text-xl leading-relaxed border-r-8 border-yellow-400 pr-7">
          At 
          <span className="text-sky-500 font-semibold ">{' '}CodePrayog{' '}</span>
          our mission is to inspire and equip the next generation with the skills they need to thrive in the digital world. We believe in the power of technology to transform lives and are committed to providing high-quality education that is accessible to all.
          <br /><br />

          Founded in 2024, NextGen Coders Academy was born out of a passion for technology and education. Our founders envisioned a platform where young learners could explore the world of coding and technology in a fun and engaging way. Today, we are proud to have helped thousands of students embark on their coding journeys.
          <br /><br />

          Meet our team of dedicated educators and industry professionals who are passionate about teaching and mentoring the next generation of tech innovators.
        </p>
      </div>
    </div>
  );
}

export default About;
