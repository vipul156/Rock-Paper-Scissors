import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import { useGlobalContext } from '@/context/GlobalContext';

function Navbar() {

  const { score } = useGlobalContext();

  return (
    <div className='flex justify-between max-w-[600px] p-5 m-auto text-white border-gray-600 border-2 rounded-xl'>
      <div className=''>
        <Image src={logo} alt='logo' width={150} height={150} />
      </div>
      <div className='bg-white px-5 py-2 rounded-xl'>
        <span className='text-blue-700'>SCORE</span>
        <div className= 'text-gray-800 text-4xl font-bold text-center'>
          {score}
        </div>
      </div>
    </div>
  )
}

export default Navbar
