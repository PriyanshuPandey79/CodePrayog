import { reviews } from '../utils/Utils';
import React, { useState, useEffect } from 'react';

const Carousel = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  const previousSlide = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsNavigating(false), 300);
  };

  const nextSlide = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setTimeout(() => setIsNavigating(false), 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isNavigating) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isNavigating]);

  return (
    <div className={`relative w-full mx-auto ${isDarkMode ? '' : ''} pt-36 px-4 md:px-16 pb-10`} id='reviews'>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 py-8 md:py-32"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4">
              <div
                className={`flex flex-col items-center justify-center text-center p-4 md:p-8 rounded-xl shadow-lg 
                transition-transform duration-500 transform hover:scale-105 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} border-b-4 border-yellow-400`}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={review.imageSrc}
                  alt={`Profile of ${review.name}`}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-yellow-500 mb-4 shadow-md"
                />
                <p className="text-lg md:text-2xl mb-4 italic">
                  "{review.content}"
                </p>
                <h3 className="text-md md:text-xl font-bold">
                  - {review.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={previousSlide}
        className="font-bold text-xl md:text-2xl absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-400 bg-opacity-100 text-white p-2 md:p-4 rounded-full shadow-lg focus:outline-none hover:bg-blue-400 transition"
        aria-label="Previous Slide"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="font-bold text-xl md:text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-400 bg-opacity-100 text-white p-2 md:p-4 rounded-full shadow-lg focus:outline-none hover:bg-blue-400 transition"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
