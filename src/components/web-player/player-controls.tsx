"use client";
import React from "react";
import PreviousTrack from "./previous-track";
import PlayBtn from "./play";
import NextTrack from "./next-track";
import { useWebPlayerContext } from "@/context/web-player-context";
import Seeker from "./seeker";

const PlayerControls = () => {
  // const [track]= useWebPlayerContext().activeTrack
  return (
    <div className="grid place-items-center max-w-[20rem] flex-grow">
      <div className="space-y-3 mx-auto">
        <div className="flex items-center gap-6 player__controls mx-auto w-fit">
          <PreviousTrack />
          <PlayBtn />
          <NextTrack />
        </div>
        <Seeker />
      </div>
    </div>
  );
};

export default PlayerControls;
