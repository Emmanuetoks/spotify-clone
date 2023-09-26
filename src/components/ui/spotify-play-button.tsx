"use client";
import {
  TActiveTrack,
  useWebPlayerContext,
} from "@/context/web-player-context";
import React, { Suspense } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { AudioTrack } from "../../../types";
import { player } from "../web-player";
type Props = {
  className?: string;
  parentPlaylistId?: string;
  firstTrack?: AudioTrack;
};

const SpotifyPlayBtn = ({
  className,
  parentPlaylistId,
  firstTrack = {
    name: "hello",
    uri: "../../assets/one-piece_opening-8-crazy-rainbow",
    next: "jsk",
    prev: "jsjks",
    parentPlaylistId:"abc"
  },
}: Props) => {
  //Get the trck
  const [activeTrack, setActiveTrack] = useWebPlayerContext().activeTrack;

  //PLay-Pause State
  const [isPlaying, setPlayPause] = useWebPlayerContext().playerState;

  //Track Loader(Used tto load Tracks)
  const loadTrack = useWebPlayerContext().loadTrack;

  //Audio Player OBject


  const handleClick = () => {
    if (!(activeTrack?.parentPlaylistId === parentPlaylistId)) {
      loadTrack(firstTrack);
      setPlayPause((prevVal) => !prevVal);
      player?.play();
      return;
    }
    //Toggle Play or pause
    setPlayPause((prevVal) => !prevVal);
    isPlaying && player?.pause();
    !isPlaying && player?.play();
  };
  const tailwindPossibles = [className];
  return (
    <button
      className={`spotify-play-button z-20 grid bg-spotify-green max-w-[2.7rem] aspect-square rounded-full place-items-center pl-1 hover:bg-green-400 hover:scale-105 active:bg-spotify-green active:scale-100 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {!isPlaying ? (
        <BiPlay color="black" size={"100%"} />
      ) : (
        <BiPause className=" mr-1" color="black" size={"100%"} />
      )}
    </button>
  );
};

export default SpotifyPlayBtn;
