import React, { useState, useEffect } from 'react'
import Element from './Element';
import { useGlobalContext } from '@/context/GlobalContext';
import Ring from './Ring'

function Result() {
  const { userChoice, computerChoice, setScore, setUserChoice, setComputerChoice } = useGlobalContext();
  const [result, setResult] = useState()

  useEffect(() => {
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
  }, [])

  function handleAgain() {
    setUserChoice(null);
    setComputerChoice(null);
  }

  return (
    <div className='relative z-1 flex justify-center items-center pb-20'>
      <div className='flex justify-center size-4/5 gap-20 text-2xl font-bold text-white'>
        <div className='flex flex-col items-center gap-15 pointer-events-none'>
          YOU PICKED
          <div className='flex justify-center items-center'>
          {result === 'YOU WIN' ? <Ring/> : ""}
          <Element size={150} item={userChoice} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl'>{result}</div>
          <button className='text-blue-900 bg-white my-5 px-18 py-2 text-lg rounded-md hover:scale-105 transition-all' onClick={handleAgain}>PLAY AGAIN</button>
        </div>
        <div className='flex flex-col items-center gap-15 pointer-events-none'>
          THE HOUSE PICKED
          <div className='flex justify-center items-center'>
          {result === 'YOU LOSE' ? <Ring/> : ""}
          <Element size={150} item={computerChoice} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
