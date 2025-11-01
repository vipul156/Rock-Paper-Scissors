import React from 'react'
import Element from './Element';
import Image from 'next/image';
import Triangle from '@/assets/images/bg-triangle.svg';


function Start() {
  return (
    <div className='flex justify-center items-center pt-17'>
        <div>
            <Image src={Triangle} alt='logo' width={300} height={300}/>
        </div>
        <div className='absolute flex  flex-col justify-center items-center'>
            <div className='flex justify-between sm:w-[400px] pb-10'>
                <Element size={75} item={0}/>
                <Element size={75} item={1}/>
            </div>
            <div className=''>
                <Element size={75} item={2}/>
            </div>
        </div>
    </div>
  )
}

export default Start
