import React from 'react';
// import './buttons.css';

function Send({ isDarkMode }) {
  return (
    <div>
      <style>
        {`
          .btn_Send {
            font-family: inherit;
            font-size: 18 px;
            
            color: white;
            display: flex;
            align-items: center;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.2s;
            cursor: pointer;
          }

          .btn_Send span {
            display: block;
            margin-left: 0.3em;
            transition: all 0.3s ease-in-out;
          }

          .btn_Send svg {
            display: block;
            transform-origin: center center;
            transition: transform 0.3s ease-in-out;
          }

          .btn_Send:hover .svg-wrapper {
            animation: fly-1 0.6s ease-in-out infinite alternate;
          }

          .btn_Send:hover svg {
            transform: translateX(1.2em) rotate(45deg) scale(1.1);
          }

          .btn_Send:hover span {
            transform: translateX(5em);
          }

         .btn_Send:active {
            transform: scale(0.95);
          }

          @keyframes fly-1 {
            from {
              transform: translateY(0.1em);
            }

            to {
              transform: translateY(-0.1em);
            }
          }
        `}
      </style>
      <button className={`mt-8 btn_Send bg-custom-gradient border-1 border-white text-white font-semibold text-md px-4 py-2 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md shadow-indigo-900`}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>
    </div>
  );
}

export default Send;
