import React from 'react';
import Typing from 'react-typing-effect';
import pic1 from "./../assets/bche.jpeg";

function Home({ isDarkMode }) {
  return (
    <div id="home" className='p-6 md:p-12 lg:p-36 font-Roboto pt-16'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        {/* Image Section */}
        <div className='mb-8 md:mb-0 max-h-[40vh] max-w-[40vw] md:max-h-[30vh] md:max-w-[30vw] md:w-1/2 md:-mt-40'>
          <img
            src={pic1}
            className={`object-cover mx-auto border-t-8 border-b-6  border-l-4 rounded-l-3xl
              animate-fade-in animate-zoom-in bg-img-gradient  
              ${isDarkMode ? 'shadow-md shadow-white' : 'shadow-xl shadow-sky-500 border-blue-700'}`}
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div className={`w-full md:w-1/2 text-center md:text-left animate-slide-in-left ${isDarkMode ? 'text-white' : 'text-sky-950'} mt-8 md:ml-12`}>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
            <span className={`${isDarkMode ? 'text-gradient2' : 'text-gradient'} font-extrabold text-4xl md:text-8xl lg:text-9xl`}> {/* Increased font weight and size */}
              Code Prayog <br />
              Coders
            </span><br />
            <br />
            Empowering the next generations of coders.<br />
            Learn to {' '}
            <Typing
             text={['code today', 'create tomorrow']}
             speed={150}        // Increased speed for typing
             eraseSpeed={100}   // Increased speed for erasing
             eraseDelay={200}   // Kept the same or adjust as needed
             typingDelay={300}  // Increased typing delay before starting
             className={isDarkMode ? 'text-gradient2' : 'text-gradient'}
           />.{' '} <br />
          <div className='pt-4 space-x-4'>
           <button className='bg-white rounded-md p-1 text-xl text-black hover:text-white hover:bg-pink-700 '>
            <a href='#contact'> Get Started</a></button>
          
          </div>
          </h1>
        </div>
     
      </div>
      
    </div>
  );
}

export default Home;
