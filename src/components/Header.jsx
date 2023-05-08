import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()

  function pathMathRoute(route){
    if(route===location.pathname){
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-10'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img 
            src="https://res.cloudinary.com/dqnhhf6x3/image/upload/v1683153778/Realtor-com-Logo_uwiaws.svg" 
            alt="logo" className='h-10 cursor-pointer' onClick={()=>navigate('/')}/>
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] 
                border-b-transparent ${pathMathRoute} && text-black border-b-red-500`} 
                onClick={()=>navigate('/')
                } >
                  Home
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] 
                border-b-transparent ${pathMathRoute} && text-black border-b-red-500`} onClick={()=>navigate('/offers')}>
                  Offers
                </li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-500 border-b-[3px] 
                border-b-transparent ${pathMathRoute} && text-black border-b-red-500`} onClick={()=>navigate('/signin')}>
                  SignIn
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}
