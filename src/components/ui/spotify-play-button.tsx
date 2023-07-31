"use client";
import {
  TActiveTrack,
  useWebPlayerContext,
} from "@/context/web-player-context";
import React, { Suspense } from "react";
import { BiPlay } from "react-icons/bi";


type Props = {
  className?: string;
  trackSource?: string;
  firstTrack?: TActiveTrack;
};

//
const SpotifyPlayBtn = ({ className, trackSource, firstTrack }: Props) => {
  const [activeTrack, setActiveTrack] = useWebPlayerContext().activeTrack;

  const [activeTrackSource, setActiveTrackSource] =
    useWebPlayerContext().activeTrackSource;

  const handleClick = () => {
    if (!(activeTrackSource === trackSource)) {
      setActiveTrackSource(trackSource as string);
      setActiveTrack(firstTrack as TActiveTrack);
    }
    //Toggle Play or pause
  };
  const tailwindPossibles = [className];
  return (
    <Suspense>
      <button
        className={`spotify-play-button grid bg-spotify-green max-w-[3rem] aspect-square rounded-full place-items-center pl-1 hover:bg-green-400 hover:scale-105 active:bg-spotify-green active:scale-100 $ 
      cursor-pointer ${className}`}
      >
        <BiPlay size={"100%"} color="black" />
      </button>
    </Suspense>
  );
};

export default SpotifyPlayBtn;
