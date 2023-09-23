"use client";
import Divider from "@/components/ui/divider";
import React from "react";
import PlayListOptions from "./options";
import SpotifyPlayBtn from "@/components/ui/spotify-play-button";
import SpHeartBtn from "@/components/icons/SpHeartBtn";
import { useAuth } from "@/context/auth-context";
import { usePlayLists } from "@/context/playlist-context";
import Tracks from "./tracks";
import TrackCard from "./track-card";
import { TPlayList } from "../../../types/playlist";

const Main = () => {
  const [playlistInView, setPlaylistInView] = usePlayLists().playlistInView;
  //Make requetst
  return (
    <main className="playlist__main w-full flex-grow p-7">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <SpotifyPlayBtn trackSource={playlistInView?.id} />
          <LikeBtn />
          <PlayListOptions />
        </div>

        {/* This is the searchbar that the user can decidde to remove on his own 👇 */}
        <div className="pt-10 space-y-3">
          <h3 className="text-white font-bold text-xl">
            Let find something for your playlist
          </h3>
        </div>

        {/* Playlist Songs */}
        <div className="playlist__songs w-full">
          <Tracks>
            <TrackCard />
          </Tracks>
        </div>
      </div>
    </main>
  );
};

const LikeBtn = () => {
  const isUserPlayList =
    useAuth().user.name === usePlayLists().playlistInView[0]?.owner?.display_name;
  if (isUserPlayList) return null;
  return (
    <button className="w-fit">
      <SpHeartBtn size={32} className="fill-spotify-green"/>
    </button>
  );
};

export default Main;
