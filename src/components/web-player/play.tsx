import { useWebPlayerContext } from "@/context/web-player-context";
import React from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { player } from ".";

const PlayBtn = () => {
  const [isPlaying, setPlayPause] = useWebPlayerContext().playerState;
  const [currentTrack] = useWebPlayerContext().activeTrack;
  const handleClick = () => {

    if (currentTrack) {
      setPlayPause(prev => !prev);
      isPlaying && player?.pause();
      !isPlaying && player?.play();
    }
  }
  return (
    <button
      className="grid bg-white max-w-[3rem] aspect-square rounded-full place-items-center cursor-pointer pl-1"
      onClick={handleClick}
    >
      {!isPlaying ? (
        <BiPlay color="black" size={"100%"} />
      ) : (
        <BiPause color="black" className="mr-1" size={"100%"} />
      )}
    </button>
  );
};

export default PlayBtn;