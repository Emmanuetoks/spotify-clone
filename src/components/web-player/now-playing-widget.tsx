import React from 'react'
import SpHeartBtn from '../icons/SpHeartBtn'
import LikeBtn from '../ui/like-btn'
import dummy from '@/images/spotify--billie.jpg'
import Image from 'next/image'
type Props ={
  imageUrl?:string;

}
const NowPlayWidget = ({imageUrl}:Props) => {
  return (
    <div className='player__now-playing-widget flex gap-2 items-center'>
        <div className='player__now-playing-cover w-16 aspect-square relative'>
          <Image src={dummy} alt='spotifu' fill={true}/>
        </div>
        <div className='player__now-playing-details'>

        </div>
        <div >
          <h6 className='font-semibold text-white text-base tracking-wide'>Gangstas paradize</h6>
          <p className='text-spotify-gray-700 text-sm'>{'Coolio'}</p>
        </div>

        <div className=''>
          <div>
            <LikeBtn size={16} className='fill-spotify-green'/>
          </div>
        </div>
    </div>
  )
}

export default NowPlayWidget