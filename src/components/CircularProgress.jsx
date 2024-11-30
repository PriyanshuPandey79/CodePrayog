import React, { useState, useEffect, useRef } from "react";

function CircularProgress() {
  const targetValues = [20, 40, 60, 80]; // Target values for each progress bar

  const [numbers, setNumbers] = useState(Array(targetValues.length).fill(0));
  const [isVisible, setIsVisible] = useState(false); // Tracks visibility of the component
  const containerRef = useRef(null); // Ref for the container

  // Intersection Observer to detect when the component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Start counting animation when the component becomes visible
      const intervals = targetValues.map((target, index) => {
        return setInterval(() => {
          setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            if (newNumbers[index] < target) {
              newNumbers[index] += 1;
            } else {
              clearInterval(intervals[index]);
            }
            return newNumbers;
          });
        }, 30);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="container mb-32">
      <div className="skill">
        {numbers.map((num, index) => {
          const progress = (450 * (100 - num)) / 100; // Calculate stroke-dashoffset dynamically

          return (
            <div key={index} className="outer">
              <div className="inner">
                <div id="number">{num}%</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id={`GradientColor${index}`} gradientTransform="rotate(135)">
                    <stop offset="0%" stopColor="#1DD6C6" />
                    <stop offset="25%" stopColor="#14ACB7" />
                    <stop offset="50%" stopColor="#5A66B8" />
                    <stop offset="75%" stopColor="#5435AC" />
                    <stop offset="100%" stopColor="#CE73C3" />
                  </linearGradient>
                </defs>
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  strokeLinecap="round"
                  stroke={`url(#GradientColor${index})`}
                  strokeWidth="20"
                  strokeDasharray="450"
                  strokeDashoffset={progress} // Dynamically update stroke-dashoffset
                />
              </svg>
            </div>
          );
        })}
      </div>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill {
          display: flex;
          justify-content: space-between; /* Distribute space between items */
          gap: 45px; /* Space between the circles */
          width: 100%; /* Allow it to stretch */
          max-width: 800px; /* Limit max width */
          flex-wrap: wrap; /* Allow wrapping for responsiveness */
        }

        .outer {
          height: 160px;
          width: 160px;
          padding: 20px;
          box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          display: flex; /* Center content */
          align-items: center;
          justify-content: center;
          position: relative; /* For absolute positioning of SVG */
        }

        .inner {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
          -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
        }

        #number {
          font-weight: 600;
          color: #555;
          font-size: 30px;
        }

        circle {
          fill: none;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          transition: stroke-dashoffset 0.3s ease; /* Smooth progress animation */
        }

        svg {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Responsive styles */
        @media (max-width: 600px) {
          .skill {
            flex-direction: column; /* Stack items in a column */
            align-items: center; /* Center items */
          }

          .outer {
            margin-bottom: 15px; /* Space between stacked items */
          }
        }
        `}
      </style>
    </div>
  );
}

export default CircularProgress;
