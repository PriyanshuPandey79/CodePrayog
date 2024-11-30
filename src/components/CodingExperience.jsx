import React from 'react'
import { codingExperience } from '../utils/Utils'
import ContentWidget from './ContentWidget'

function CodingExperience({isDarkMode}) {
  return (
    <div className='flex flex-col space-y-16 pt-40 px-8 mt-12'>
        <h1 className='font-bold text-4xl md:text-5xl text-gradient2 pb-2'>Coding Excellence for Young Minds</h1>
        <div className='flex flex-col md:flex-row justify-evenly space-y-9 md:space-y-0'>
            {codingExperience.map((e)=>(
                <ContentWidget key={e.heading} heading={e.heading} content={e.content}/>
            ))}
        </div>
    </div>
  )
}

export default CodingExperience
