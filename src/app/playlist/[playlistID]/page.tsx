import Divider from '@/components/ui/divider'
import React from 'react'
import Header from './header'
import Main from './main'

const Playlist = () => {
  return (
    <div className='playlist bg-spotify-gray-100'>
     <Header/>
      <Main/>
    </div>
  )
}

export default Playlist