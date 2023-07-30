import React from 'react'
import PreviousTrack from './previous-track'
import PlayBtn from './play'
import NextTrack from './next-track'

const PlayerControls = () => {
  return (
    <div className='flex items-center gap-4 mx-auto player__controls'>
        <PreviousTrack/>
        <PlayBtn/>
        <NextTrack/>
    </div>
  )
}

export default PlayerControls