"use-client";
import React, { Suspense } from "react";
import NowPlayWidget from "./now-playing-widget";
import PlayerControls from "./player-controls";
import OtherControls from "./other-controls";

const WebPlayer = () => {
                                                                              

  return (
    <div className="bg-black flex-grow flex justify-between p-4">
      <NowPlayWidget />
      <PlayerControls />
      <OtherControls />
      <audio controls >           
        <source src="one-piece_opening-8-crazy-rainbow.mp3" type="audio/mpeg"/>
      </audio>  
    </div>
  );
};

export default WebPlayer;
