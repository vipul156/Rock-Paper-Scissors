import React from 'react'
import Element from './Element';
import Image from 'next/image';
import Triangle from '@/assets/images/bg-triangle.svg';


function Start() {
  return (
    <div className='flex justify-center items-center pt-17'>
        <div>
            <Image className='size-[200px] sm:size-[300px]'src={Triangle} alt='logo'/>
        </div>
        <div className='absolute flex  flex-col justify-center items-center'>
            <div className='flex gap-10 sm:gap-20 sm:pb-10 pb-5'>
                <div className='size-[150px] sm:size-[200px]'><Element item={0}/></div>
                <div className='size-[150px] sm:size-[200px]'><Element item={1}/></div>
            </div>
            <div className='size-[150px] sm:size-[200px]'>
                <Element item={2}/>
            </div>
        </div>
    </div>
  )
}

export default Start
