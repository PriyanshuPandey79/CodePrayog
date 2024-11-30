import React from 'react';

function DrawerSocial() {
  return (
    <div>
      <style>
        {`
          /* From Uiverse.io by wilsondesouza */ 
          ul {
            list-style: none;
          }

          .example-2 {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .example-2 .icon-content {
            margin: 0 10px;
            position: relative;
          }

          .example-2 .icon-content .tooltip {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            padding: 6px 10px;
            border-radius: 5px;
            opacity: 0;
            visibility: hidden;
            font-size: 14px;
            transition: all 0.3s ease;
          }

          .example-2 .icon-content:hover .tooltip {
            opacity: 1;
            visibility: visible;
            top: -50px;
          }

          .example-2 .icon-content a {
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: #4d4d4d;
            background-color: #fff;
            transition: all 0.3s ease-in-out;
          }

          .example-2 .icon-content a:hover {
            box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
          }

          .example-2 .icon-content a svg {
            position: relative;
            z-index: 1;
            width: 30px;
            height: 30px;
          }

          .example-2 .icon-content a:hover {
            color: white;
          }

          .example-2 .icon-content a .filled {
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background-color: #000;
            transition: all 0.3s ease-in-out;
          }

          .example-2 .icon-content a:hover .filled {
            height: 100%;
          }

          .example-2 .icon-content a[data-social="linkedin"] .filled,
          .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
            background-color: #0274b3;
          }

          .example-2 .icon-content a[data-social="x"] .filled,
          .example-2 .icon-content a[data-social="x"] ~ .tooltip {
            background-color: #1da1f2;
          }

          .example-2 .icon-content a[data-social="whatsapp"] .filled,
          .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
            background-color: #25D366;
          }

          .example-2 .icon-content a[data-social="gmail"] .filled,
          .example-2 .icon-content a[data-social="gmail"] ~ .tooltip {
            background-color: #D14836;
          }
        `}
      </style>
      <ul className="example-2">
        <li className="icon-content">
          <a href="" aria-label="LinkedIn" data-social="linkedin">
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>

        <li className="icon-content">
          <a href="https://x.com/your_profile" aria-label="X" data-social="x">
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 1.646a.5.5 0 0 1 .708 0L8 7.293 13.646 1.646a.5.5 0 1 1 .708.708L8.707 8l5.647 5.646a.5.5 0 0 1-.708.708L8 8.707 2.354 14.354a.5.5 0 0 1-.708-.708L7.293 8 1.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
          <div className="tooltip">X</div>
        </li>

        <li className="icon-content">
          <a href="https://wa.me/your_number" aria-label="WhatsApp" data-social="whatsapp">
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="16"
              // height="16"
              fill="currentColor"
              className="bi bi-whatsapp"
              // viewBox="0 0 16 16"
              width="800px" height="800px" viewBox="0 0 256 256" id="Flat" 
            >
               <path d="M128.00049,24a104.0281,104.0281,0,0,0-91.189,154.041l-8.54687,29.915A15.99944,15.99944,0,0,0,48.044,227.73635l29.916-8.54688A104.00728,104.00728,0,1,0,128.00049,24ZM152.125,192c-.0293.02344-.084,0-.126,0A87.99949,87.99949,0,0,1,64,103.876,36.01385,36.01385,0,0,1,100,68,14.92643,14.92643,0,0,1,112.93066,75.503l11.69092,20.46094a16.01674,16.01674,0,0,1-.17187,16.16992l-7.11084,11.85156a40.03607,40.03607,0,0,0,14.67627,14.67676l11.85107-7.11133a16.01883,16.01883,0,0,1,16.17041-.17285l20.45947,11.69141A14.9238,14.9238,0,0,1,188,156,36.01427,36.01427,0,0,1,152.125,192Z"/>
    <path d="M136.4502,154.6592a7.99584,7.99584,0,0,1-7.397.43652,56.03179,56.03179,0,0,1-28.14892-28.14843,7.99972,7.99972,0,0,1,.43652-7.39746l9.38867-15.64844L99.36328,84.00979A19.99027,19.99027,0,0,0,80,103.89748,72.00036,72.00036,0,0,0,152,176h.10254a19.99027,19.99027,0,0,0,19.88769-19.36328l-19.8916-11.36621Z"/>

</svg>
          </a>
          <div className="tooltip">WhatsApp</div>
        </li>

        <li className="icon-content">
          <a href="mailto:codeprayog.academy@gmail.com" aria-label="Gmail" data-social="gmail">
            <div className="filled"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
              xmlSpace="preserve"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.522L0 4.697zm6.761 4.396-6.52 3.953A2 2 0 0 0 2 14h12a2 2 0 0 0 1.759-1.006l-6.52-3.953L8 9.586l-1.239-.493zM16 4.697l-5.803 3.582L16 11.801V4.697z"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="tooltip">Gmail</div>
        </li>
      </ul>
    </div>
  );
}

export default DrawerSocial;
