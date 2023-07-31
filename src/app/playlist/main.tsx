"use client";
import Divider from "@/components/ui/divider";
import React from "react";
import PlayListOptions from "./options";
import SpotifyPlayBtn from "@/components/ui/spotify-play-button";
import SpHeartBtn from "@/components/icons/SpHeartBtn";
import { useAuth } from "@/context/auth-context";
import { usePlayLists } from "@/context/playlist-context";

const Main = () => {
  const [playlistInView] = usePlayLists().playlistInView;
  //Make requetst
  return (
    <main className="playlist__main w-full flex-grow p-7">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <SpotifyPlayBtn />
          <LikeBtn/>
          <PlayListOptions />
        </div>

        {/* This is the searchbar that the user can decidde to remove on his own 👇 */}
        <div className="pt-10 space-y-3">
          <Divider />
          <h3 className="text-white font-bold text-xl">
            Let find something for your playlist
          </h3>
        </div>

        {/* Playlist Songs */}
        <div className="playlist__songs flex justify-between"></div>
      </div>
    </main>
  );
};

const LikeBtn = () => {
  const isUserPlayList =
    useAuth().user.name === usePlayLists().playlistInView[0]?.owner;
  if (isUserPlayList) return null;
  return (
    <button className="w-fit">
      <SpHeartBtn size={32} />
    </button>
  );
};

export default Main;
