import React, { useEffect, useState } from 'react';
import featured from '../assets/featured.png';
import programming from '../assets/programming.png';
import exam from '../assets/exam.png';

// Add this CSS to your styles (e.g., in a CSS file or a styled-components block)
const styles = `
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideInLeft 0.7s ease forwards; /* Adjust duration as needed */
}

.list-yellow-bullets {
  list-style-type: none; /* Remove default bullets */
  padding-left: 0; /* Remove left padding */
}

.list-yellow-bullets li {
  position: relative; /* Position for pseudo-element */
  padding-left: 1.5em; /* Space for the bullet */
}

.list-yellow-bullets li::before {
  content: ''; /* Create a bullet */
  position: absolute; /* Position it absolutely */
  left: 0; /* Align to the left */
  top: 0.5em; /* Center vertically */
  width: 0.5em; /* Bullet size */
  height: 0.5em; /* Bullet size */
  background-color: black; /* Bullet color */
  border-radius: 50%; /* Make it round */
}
`;

function Services({ isDarkMode }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Optional delay for better visual effect

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      <style>{styles}</style>
      <div
        id='services'
        className={` px-7 pb-12 space-y-12 mb-12 ${animate ? 'slide-in' : ''}`}
       
      >
        <h1 className='font-bold text-gradient2 text-5xl md:text-7xl text-center pb-6 underline underline-offset-1'>What we offer</h1>
        <div className='flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0 text-gray-950 p-3 rounded-md'
         style={{
          background:'#B3F4F7'
            }}
        >
          <div className='text-lg md:text-xl space-y-4 w-full md:w-96 border-b-8 border-yellow-400 pb-3'>
            <img src={featured} className='h-16 transition-transform duration-300 transform hover:scale-110' alt="Featured Courses" />
            <h1 className='font-semibold text-3xl md:text-4xl text-gradient2'>Featured Courses</h1>
            <ul className="list-yellow-bullets font-semibold">
              <li>AI Development</li>
              <li>Mobile Development</li>
              <li>Game Development</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div className='text-lg md:text-xl space-y-4 w-full md:w-96 border-b-8 border-yellow-400 pb-3'>
            <img src={programming} className='h-16 transition-transform duration-300 transform hover:scale-110' alt="Advanced Programming Techniques" />
            <h1 className='font-semibold text-3xl md:text-4xl text-gradient2'>Advanced Programming Techniques</h1>
            <p className='font-semibold'>Enhance your coding skills with advanced problem-solving methods and efficient algorithms.</p>
          </div>
          <div className='text-lg md:text-xl space-y-4 w-full md:w-96 border-b-8 border-yellow-400 pb-3'>
            <img src={exam} className='h-16 transition-transform duration-300 transform hover:scale-110' alt="Exam Preparation Assistance" />
            <h1 className='font-semibold text-3xl md:text-4xl text-gradient2'>Exam Preparation Assistance</h1>
            <p className='font-semibold'>Get help with coding exams through structured practice sessions and expert guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
