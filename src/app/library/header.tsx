'use client'
import React from 'react'
import FilterPlayList from './filter-playlist'
import Search from './search-library'
import AddPlayList from './create-playlist'
import SpLibraryV1 from '@/components/icons/SpSearchLibraryV1'
const toggleCollapse = () => {
    document.querySelector('aside.sidebar')?.classList.toggle('collapse-sidebar')
  }
const Header = () => {
  return (
    <header className="space-y-4">
        <div className="flex items-center w-full justify-between">
          <button
            data-popup-info='Hellow orld'
            onClick={toggleCollapse}
            className="nav-link flex gap-4 items-center hover-white cursor-pointer px-2 popup-info-candidate"
          >
            {/* <BiLibrary size={"2rem"} /> */}
          <SpLibraryV1 className='fill-white'/>
            <h5>Your Library</h5>
          </button>

          <div className="remove-on-collapse">
            <AddPlayList />
          </div>
        </div>

        <div className="remove-on-collapse">
          <button className="bg-spotify-black-100 rounded-lg px-3 py-2 hover:bg-spotify-gray-100 text-white">
            Playlists
          </button>
        </div>
        <div className="library__header w-full flex justify-between px-2 remove-on-collapse">
          <Search />
          <FilterPlayList />
        </div>
      </header>
  )
}

export default Header