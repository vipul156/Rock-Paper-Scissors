import React from 'react'

function Ring() {
  return (
    <div className='absolute bg-white/2 rounded-full size-[650px] flex justify-center items-center -z-1'>
      <div className='bg-white/2 rounded-full size-[525px] flex justify-center items-center'>
        <div className='bg-white/2 rounded-full size-[430px]'></div>
      </div>
    </div>
  )
}

export default Ring
