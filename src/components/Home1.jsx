import React from 'react';
import Typing from 'react-typing-effect';
import exampleImage from './../assets/bche.jpeg'; 
import compCoding from './../assets/compCoding.png';
import handsOn from './../assets/handsOn.png';
import expert from './../assets/expert.png';
import care from './../assets/care.png';

function Home1() {
  return (
    <div id='home'className="mt-44 flex flex-col items-center justify-center h-screen px-4 pt-36 md:mt-8 lg:mt-24"> {/* Set mt-16 for smaller screens */}
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center pt-32 pb-4">
        <span className="text-gradient2 font-extrabold text-8xl md:text-5xl lg:text-6xl xl:text-7xl">
          Code Prayog <br />
        </span>
        Empowering the next generations of coders.<br />
        Learn to{' '}
        <Typing
          text={['code today', 'create tomorrow']}
          speed={150}
          eraseSpeed={100}
          eraseDelay={200}
          typingDelay={300}
          className="text-gradient2"
        />.
        <br />
        <div className="pt-4">
          <button className="bg-white rounded-md p-2 text-xl text-purple-700 hover:text-white hover:bg-sky-400 transition">
            <a href="#contact">Get Started</a>
          </button>
        </div>
      </h1>
      
      <div className="flex flex-col md:flex-row w-full mt-20"> {/* Keeping the spacing for lower div */}
        {/* Left Div for Bullet Points */}
        <div className="flex-1 flex flex-col items-center pr-4 mt-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex items-center rounded-xl border-4 border-yellow-400 p-4 bg-custom-gradient mx-2">
              <img src={compCoding} alt="Comprehensive coding curriculum" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="font-semibold">Comprehensive coding<br />curriculum</h3>
              </div>
            </div>
            <div className="flex items-center rounded-xl border-4 border-yellow-400 p-4 bg-custom-gradient mx-2">
              <img src={handsOn} alt="Hands-on projects" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="font-semibold">Hands-on projects</h3>
              </div>
            </div>
            <div className="flex items-center rounded-xl border-4 border-yellow-400 p-4 bg-custom-gradient mx-2">
              <img src={care} alt="Community support" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="font-semibold">Community support</h3>
              </div>
            </div>
            <div className="flex items-center rounded-xl border-4 border-yellow-400 p-4 bg-custom-gradient mx-2">
              <img src={expert} alt="Expert instructors" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="font-semibold">Expert instructors</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div for Image */}
        <div className="flex-1 pl-4 flex items-center justify-center mt-4 md:mt-0">
          <img 
            src={exampleImage} 
            alt="Coding" 
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home1;
