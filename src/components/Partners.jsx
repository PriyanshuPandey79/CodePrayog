import React from 'react';
import { partners } from '../utils/Utils';
import startup from '../assets/startup.png';

const Partners = () => {
    return (
        <div className="overflow-x-hidden relative w-full h-auto mt-16">

                <h1 className="pt-2 font-bold text-gradient2 text-4xl md:text-6xl text-center">Our Valued Partnerships</h1>
            
            <div 
                className='py-8 mt-12 pb-6 border-b-4 border-yellow-400 shadow-lg'
                style={{
                    background: '#B3F4F7',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}>
                <div className="flex animate-scroll whitespace-nowrap space-x-6 sm:space-x-12 md:space-x-24">
                    {partners.map((partner, index) => (
                        <div className="flex flex-col items-center mx-2 w-auto" key={index}>
                            <img src={partner.src} alt={partner.name} className="max-w-[180px] h-auto" /> {/* Set a max width */}
                            <p className="text-center mt-1 text-gray-800 font-bold">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default Partners;
