"use client";
import React, { Suspense, useEffect, useRef } from "react";
import NowPlayWidget from "./now-playing-widget";
import PlayerControls from "./player-controls";
import OtherControls from "./other-controls";
import { useWebPlayerContext } from "@/context/web-player-context";

export let player:HTMLAudioElement;
const WebPlayer = () => {
  const audioObject = useRef<HTMLAudioElement | null>(null)
  const [track, setTrack] = useWebPlayerContext().activeTrack
  useEffect(() => {
    player = audioObject.current as HTMLAudioElement;
  }, [audioObject.current])
  return (
    <div className="bg-black flex-grow flex justify-between p-4">
      <NowPlayWidget />
      <PlayerControls />
      <OtherControls />
      <audio ref={audioObject} controls>
        <source src={track?.uri} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WebPlayer;
