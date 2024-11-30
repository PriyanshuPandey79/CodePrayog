import React, { useState, useEffect } from 'react';
import childHero1 from '../assets/childHero.png';
import humanoid from '../assets/humanoid.png';
import ad from '../assets/ad.png';

const images = [childHero1, humanoid,ad]; // Add your images here

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1800); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="text-gradient2 pt-36 px-8 text-center md:text-left flex flex-col md:flex-row md:mt-36 mt-72 mb-12" id='about'>
      <div>
        <h1 className="text-4xl md:text-6xl md:w-3/5">
          Unlock Your Child's <br />
          <span className="text-purple-600 font-bold text-5xl md:text-8xl">Potential</span> with CodePrayog
        </h1>

        <h2 className="mt-16 md:w-[59vw] text-xl md:text-3xl border-l-4 border-yellow-300 p-3 ">
          Welcome to 
          <span className="text-gradient font-bold"> CodePrayog {' '}</span>
          Academy! We are dedicated to nurturing young minds and preparing them for a future in technology.
          Our courses are designed to be engaging, interactive, and hands-on, ensuring that students not only learn but also enjoy the process.
          Our expert instructors make learning coding fun and engaging. Help your child build essential skills for the future with
          <span className="text-gradient font-bold"> CodePrayog.</span>
        </h2>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0 md:h-auto md:px-[5%] md:pb-[17%] pt-12 mb-3" >
        <img
          src={images[currentIndex]}
          className="rounded-b-full h-72 w-72 md:h-[60vh] md:w-[60vw] object-contain shadow-lg shadow-sky-500 "
          alt="CodeCrafters"
        />
      </div>
    </div>
  );
}

export default Intro;
