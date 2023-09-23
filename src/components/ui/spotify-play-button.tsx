"use client";
import {
  TActiveTrack,
  useWebPlayerContext,
} from "@/context/web-player-context";
import React, { Suspense } from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { AudioTrack } from "../../../types";
type Props = {
  className?: string;
  trackSource?: string;
  firstTrack?: AudioTrack;
};

const SpotifyPlayBtn = ({
  className,
  trackSource,
  firstTrack = {
    name: "hello",
    uri: "../../assets/one-piece_opening-8-crazy-rainbow",
    next: "jsk",
    prev: "jsjks",
  },
}: Props) => {
  const [activeTrack, setActiveTrack] = useWebPlayerContext().activeTrack;
  const [playPause, setPlayPause] = useWebPlayerContext().playerState;
  const loadTrack = useWebPlayerContext().loadTrack;
  const handleClick = () => {
    if (!(activeTrack?.uri === trackSource) && !firstTrack) {
      loadTrack(firstTrack);
    }

    //Toggle Play or pause
    setPlayPause((prevVal) => !prevVal);
  };
  const tailwindPossibles = [className];
  return (
    <button
      className={`spotify-play-button z-20 grid bg-spotify-green max-w-[2.7rem] aspect-square rounded-full place-items-center pl-1 hover:bg-green-400 hover:scale-105 active:bg-spotify-green active:scale-100 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {!playPause ? (
        <BiPlay color="black" size={"100%"} />
      ) : (
        <BiPause color="black" size={"100%"} />
      )}
    </button>
  );
};

export default SpotifyPlayBtn;
