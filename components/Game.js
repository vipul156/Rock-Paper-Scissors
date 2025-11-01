'use client'

import React, { useEffect, useState } from 'react'
import Element from './Element';
import { useGlobalContext } from '@/context/GlobalContext';

function Game() {

    const [choice, setChoice] = useState(null);
    const { userChoice, setComputerChoice } = useGlobalContext();
    useEffect(() => {
        const randomChoice = Math.floor(Math.random() * 3);
        setTimeout(() => {
            setTimeout(() => {
                setComputerChoice(randomChoice);
            }, 1000);
            setChoice(randomChoice);
        }, 1000);
    }, []);

    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-between size-2/3 text-2xl font-bold text-white pointer-events-none'>
                <div className='flex flex-col items-center gap-15'>
                    YOU PICKED
                    <div className='size-[350px] flex justify-center items-center'>
                        <Element size={150} item={userChoice} />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-15'>
                    THE HOUSE PICKED
                    <div className='size-[350px] flex justify-center items-center'>
                        <div className='bg-black/25 size-[200px] rounded-full'></div>
                        {choice === null ? "" : <div className='absolute'><Element size={150} item={choice} /></div>}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Game
