'use client'

import React from 'react'
import Image from 'next/image'
import scissors from '@/assets/images/icon-scissors.svg'
import paper from '@/assets/images/icon-paper.svg'
import rock from '@/assets/images/icon-rock.svg'
import { useGlobalContext } from '@/context/GlobalContext';

function Element({size, item}) {
  const {setUserChoice} = useGlobalContext();

  const items = [
    {color : 'hsl(230, 89%, 62%)', image : paper},
    {color : 'hsl(39, 89%, 49%)', image : scissors},
    {color : 'hsl(349, 71%, 52%)', image : rock},
  ];

  const outerSize = `${size*2.25}px`;
  const innerSize = `${size*1.7}px`;

  return (
    <div onClick={()=>{setUserChoice(item)}} className={`rounded-full flex justify-center items-center hover:cursor-pointer`} style={{width : outerSize, height : outerSize, backgroundColor : items[item].color}}>
  <div className={`bg-white rounded-full flex justify-center items-center`} style={{width : innerSize, height : innerSize}}>
      <Image src={items[item].image} alt="Scissors" width={size} height={size} />
    </div>
    </div>
  )
}

export default Element
