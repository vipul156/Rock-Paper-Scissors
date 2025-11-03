'use client'

import React, { useEffect, useState } from 'react'
import Element from './Element';
import { useGlobalContext } from '@/context/GlobalContext';
import Ring from './Ring'

function Game() {
    const { userChoice, computerChoice, setScore, setUserChoice, setComputerChoice } = useGlobalContext();
    const [result, setResult] = useState()

    function getResult() {
        const s = '2012'
        const str = '' + userChoice + computerChoice
        if (userChoice === computerChoice) {
            setResult('IT\'S A DRAW')
        }
        else if (s.includes(str)) {
            setResult('YOU LOSE')
        }
        else {
            setScore(prev => prev + 1);
            setResult('YOU WIN')
        }
    }

    function handleAgain() {
        setUserChoice(null);
        setComputerChoice(null);
    }

    useEffect(() => {
        const randomChoice = Math.floor(Math.random() * 3);
        setTimeout(() => {
            setComputerChoice(randomChoice);
        }, 1000);
    }, []);

    useEffect(() => {
        if (computerChoice !== null) {
            setTimeout(() => {
                getResult();
            }, 500)
        }
    }, [computerChoice]);

    return (
        <div className='relative z-1 flex justify-center items-center pb-20'>
            <div className='flex justify-center gap-5 gap-y-10 md:gap-20 lg:gap-0 lg:justify-between max-w-[1200px] w-full flex-wrap xl:size-4/5 text-xl md:text-2xl font-bold text-white'>
                <div className='flex flex-col items-center gap-15 pointer-events-none order-1'>
                    YOU PICKED
                    <div className='flex justify-center items-center'>
                        {result === 'YOU WIN' ? <div className='size-[150px] md:size-[300px]'><Ring /></div> : ""}
                        <div className='size-[150px] md:size-[300px]'>
                        <Element item={userChoice} />
                        </div>
                    </div>
                </div>
                {result && <div className='flex justify-center items-center order-3 lg:order-2 px-4.5'>
                    <div>
                        <div className='text-4xl text-center'>{result}</div>
                        <button className='text-blue-900 bg-white my-5 px-18 py-2 text-lg rounded-md hover:scale-105 transition-all' onClick={handleAgain}>PLAY AGAIN</button>
                    </div>
                </div>}
                <div className='flex flex-col items-center gap-15 pointer-events-none order-2 lg:order-3'>
                    THE HOUSE PICKED
                    <div className='flex justify-center items-center'>
                        <div className='bg-black/25 size-[150px] md:size-[300px] rounded-full'></div>
                        {result === 'YOU LOSE' ? <div className='absolute size-[300px] md:size-[520px]'><Ring /></div> : ""}
                        {computerChoice === null ? "" : <div className='absolute size-[150px] md:size-[300px]'><Element item={computerChoice} /></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game
