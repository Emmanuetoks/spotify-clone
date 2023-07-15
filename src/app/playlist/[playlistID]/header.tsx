import React from 'react'

const Header = () => {
  return (
    <header className='playlist__header pt-5 pb-3 px-7'>
    <div className='flex flex-col sm:flex-row items-center sm:items-end gap-3 w-fulll'>
      <div className='user__playlist-cover w-[10rem] aspect-square bg-spotify-black-100'>

      </div>

      <div className='user__playlist-details text-white space-y-3 w-full'>
        <p className='hidden sm:blocktext-xs font-medium'>Playlist</p>
        <h1 className='text-normal sm:text-7xl  font-bold'>My Playlist #3</h1>
        <p className='text-xs font-medium'>User</p>
      </div>
    </div>
  </header>  )
}

export default Header