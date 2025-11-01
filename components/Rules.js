'use client'

import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext';
import Image from 'next/image';
import rulesImage from '@/assets/images/image-rules.svg';
import closeIcon from '@/assets/images/icon-close.svg';

function Rules() {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <div className='fixed bottom-10 right-10 z-1'>
      <button onClick={() => { setIsOpen((open) => !open) }} className='px-10 py-2 border-1 border-white rounded-lg text-white'>RULES</button>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center items-center'>
          <div className='bg-white p-5 rounded-2xl'>
            <div className='flex justify-between pb-7'>
              <span className='text-2xl font-bold'>RULES</span>
              <button onClick={() => { setIsOpen(false) }}>
                <Image src={closeIcon} alt='close' width={20} height={20} />
              </button>
            </div>
            <Image className='m-2 mx-5' src={rulesImage} alt='rules' width={300} height={300} />
          </div>
        </div>)}
    </div>
  )
}

export default Rules
