'use client'
import DialogBox from "@/components/ui/DialogBox";
import Divider from "@/components/ui/divider";
import OptionsButton from "@/components/ui/option-button";
import React from "react";
import PlayListOptions from "./playlist-options";
import SpotifyPlayBtn from "@/components/web-player/spotify-play-button";

const Main = () => {
  //Make requetst 
  return (
    <main className="playlist__main w-full flex-grow p-7">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <SpotifyPlayBtn />
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

export default Main;
