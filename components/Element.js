'use client'

import React from 'react'
import Image from 'next/image'
import scissors from '@/assets/images/icon-scissors.svg'
import paper from '@/assets/images/icon-paper.svg'
import rock from '@/assets/images/icon-rock.svg'
import { useGlobalContext } from '@/context/GlobalContext';

function Element({ item }) {
  const { setUserChoice } = useGlobalContext();

  const items = [
    { color: 'hsl(230, 89%, 62%)', image: paper },
    { color: 'hsl(39, 89%, 49%)', image: scissors },
    { color: 'hsl(349, 71%, 52%)', image: rock },
  ];

  return (
    <div onClick={() => { setUserChoice(item) }} className='rounded-full flex justify-center items-center hover:cursor-pointer h-full p-5 md:p-10' style={{ backgroundColor: items[item].color }}>
      <div className='bg-white rounded-full flex justify-center items-center size-full'>
        <Image className='size-fit md:scale-150 scale-130' src={items[item].image} alt="Scissors"/>
      </div>
    </div>
  )
}

export default Element
