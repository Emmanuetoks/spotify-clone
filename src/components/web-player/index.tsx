"use-client";
import React, { Suspense } from "react";
import NowPlayWidget from "./now-playing-widget";
import PlayerControls from "./player-controls";
import OtherControls from "./other-controls";

const WebPlayer = () => {
  return (
    <Suspense>
      <div className="bg-black flex-grow flex justify-between p-4">
        <NowPlayWidget />
        <PlayerControls />
        <OtherControls />
      </div>
    </Suspense>
  );
};

export default WebPlayer;
