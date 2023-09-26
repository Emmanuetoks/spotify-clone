"use client";
import React, { Suspense, useEffect, useRef } from "react";
import NowPlayWidget from "./now-playing-widget";
import PlayerControls from "./player-controls";
import OtherControls from "./other-controls";
import { useWebPlayerContext } from "@/context/web-player-context";

const WebPlayer = () => {
  const audioObject = useRef(null)
  const [track, setTrack] = useWebPlayerContext().activeTrack
  const [player, setPlayer] = useWebPlayerContext().player
  useEffect(() => {
    setPlayer(audioObject.current)
  }, [audioObject.current])
  return (
    <div className="bg-black flex-grow flex justify-between p-4">
      <NowPlayWidget />
      <PlayerControls />
      <OtherControls />
      <audio ref={audioObject}>
        <source src={track?.uri} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WebPlayer;
