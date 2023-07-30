import React from 'react'
import SpHeartBtn from '../icons/SpHeartBtn';

type Props = {
    className?:string;
    size?:string  | number ;
}

const LikeBtn = ({className, size=32}:Props) => {
  return (
    <button className={className}>
        <SpHeartBtn size={size}/>
    </button>
  )
}

export default LikeBtn