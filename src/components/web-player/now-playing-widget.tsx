'use client'
import React from "react";
import LikeBtn from "../ui/like-btn";
import dummy from "@/images/spotify--rema.jpg";
import Image from "next/image";
import { useWebPlayerContext } from "@/context/web-player-context";
type Props = {
  imageUrl?: string;
};
const NowPlayWidget = ({ imageUrl }: Props) => {
  // const [track] = useWebPlayerContext().activeTrack;
  return (
    <div className="w-[20rem]">

    <div className="player__now-playing-widget flex gap-3 items-center">
      <div className="player__now-playing-cover w-[3.5rem] aspect-square relative rounded">
        <Image src={dummy} alt="spotifu" fill={true} className="rounded" />
      </div>
      <div className="">
        <h6 className="font-normal text-white text-base">
          the WORLD
        </h6>
        <p className="text-spotify-gray-800 text-sm font-normal">{"Coolio"}</p>
      </div>

      <div className="">
        <div>
          <LikeBtn size={16} className="fill-spotify-green" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default NowPlayWidget;
