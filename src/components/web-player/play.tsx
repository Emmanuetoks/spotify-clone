import React from 'react'
import { BiPlay } from 'react-icons/bi'

const PlayBtn = () => {
  return (
    <button className='grid bg-white max-w-[3rem] aspect-square rounded-full place-items-center cursor-pointer pl-1'>
        <BiPlay color='black' size={'2rem'}/>
    </button>
  )
}

export default PlayBtn