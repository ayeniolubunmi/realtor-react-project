import React from 'react';
import spinner from '../assests/svg/spinner.svg';

export default function Spinner() {
  return (
    <div className='bg-black bg-opacity 
    flex justify-center items-center fixed left-0 right-0 bottom-0 z-40'>
      <div>
        <img src={spinner} alt="loading" className='h-4'/>
      </div>
    </div>
  )
}
