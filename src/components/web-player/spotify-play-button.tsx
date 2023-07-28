import React from "react";
import { BiPlay } from "react-icons/bi";

type Props = {
  className?: string;
  currentTrack?: string;
};
const SpotifyPlayBtn = ({ className, currentTrack }: Props) => {
  const tailwindPossibles = [className];
  return (
    <button className={`spotify-play-button grid bg-spotify-green max-w-[3rem] aspect-square rounded-full place-items-center pl-1 hover:bg-green-400 hover:scale-105 active:bg-spotify-green active:scale-100 $ 
    cursor-pointer ${className}`}>
      <BiPlay size={"100%"} color="black" />
    </button>
  );
};

export default SpotifyPlayBtn;
