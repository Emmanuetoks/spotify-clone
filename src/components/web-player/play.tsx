import { useWebPlayerContext } from "@/context/web-player-context";
import React from "react";
import { BiPause, BiPlay } from "react-icons/bi";

const PlayBtn = () => {
  const [playPause, setPlayPause] = useWebPlayerContext().playerState;
  const player = useWebPlayerContext().webPlayer;
  const handlePlayPause = () => {
    setPlayPause((prevVal) => !prevVal);
    player.play();
  };
  return (
    <button
      onClick={handlePlayPause}
      className="grid bg-white max-w-[3rem] aspect-square rounded-full place-items-center cursor-pointer pl-1"
    >
      {!playPause ? (
        <BiPlay color="black" size={"100%"} />
      ) : (
        <BiPause color="black" size={"100%"} />
      )}
    </button>
  );
};

export default PlayBtn;
