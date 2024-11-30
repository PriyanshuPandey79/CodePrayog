import React from 'react';

function ContentWidget({ heading, content }) {
  return (
    <div className='flex flex-col h-auto md:h-1/2 w-full md:w-1/2 text-white border-b-4 border-yellow-400 mr-8 pb-8 bg-gray-800 rounded-xl p-4
      hover:scale-110 shadow-lg transition-shadow duration-300
      shadow-sky-500/50 hover:shadow-sky-500/75
    '>
      <h1 className='font-semibold text-xl md:text-3xl text-sky-500 mb-5'>{heading}</h1>
      <p className='text-md md:text-lg'>{content}</p>
    </div>
  );
}

export default ContentWidget;
