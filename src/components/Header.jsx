import React from 'react'

export default function Header() {
  return (
    <div className='bg-white border-b shadow-sm'>
      <header className='flex justify-between items-center px-10'>
        <div>
            <img src="" alt="logo" className='h-5'/>
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li>Home</li>
                <li>Offers</li>
                <li>SignIn</li>
            </ul>
        </div>
      </header>
    </div>
  )
}
