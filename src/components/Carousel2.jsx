import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { images } from './../utils/Utils.js';

const Carousel2 = () => {
  const [activeGlowColor, setActiveGlowColor] = useState(images[0].glowColor); // Initialize with the first image's glow color

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setActiveGlowColor(images[next].glowColor); // Update the glow color on slide change
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div 
      className="max-w-4xl mx-auto p-4 pb-8 mt-28 relative" 
      id='tech' 
      style={{
        boxShadow: `0 0 40px ${activeGlowColor}`, // Apply glow to the parent div
        transition: 'box-shadow 0.3s ease-in-out',
        borderRadius: '20px', // Make the div rounded
        overflow: 'hidden' // Ensure contents don't overflow
      }}
    >
      <h2 className="text-6xl font-semibold text-center mb-9 pb-4 text-gradient2">Trending Courses</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <a href={image.pdf} target="_blank" rel="noopener noreferrer">
              <div className={`rounded-lg transition-all duration-300 ease-in-out`}>
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="w-full h-[60vw] sm:h-[35vw] md:h-[35vw] lg:h-[37vw] object-cover rounded-lg"
                />
              </div>
            </a>
            
            <p className={`text-3xl font-semibold text-gradient2 text-center mt-4`}>{image.name}</p>
          </div>
        ))}
      </Slider>
      <style>
        {`
        #tech {
  position: relative;
  overflow: hidden;
}

#tech::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px; // Match the parent div's border-radius
  box-shadow: 0 0 40px rgba(255, 0, 0, 0.5); // Example glow color
  z-index: -1; // Send the pseudo-element behind
  transition: box-shadow 0.3s ease-in-out;
}

        `}
      </style>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-300`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-300`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default Carousel2;
