"use client";
import { usePlayLists } from "@/context/playlist-context";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { PlayListContextType } from "../../../../types/playlist";

const Header = ({openModal}:{openModal:() => void}) => {
  const playListId = useSearchParams().get("id") as string;
  const[playLists] = usePlayLists() as PlayListContextType

  return (
    <Suspense>
      <header className="playlist__header pt-20 pb-3 px-7 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 w-full">
          <div className="user__playlist-cover w-[40%] aspect-square bg-spotify-black-400"></div>

          <div className="user__playlist-details text-white space-y-3 w-full">
            <p className="hidden sm:blocktext-xs font-medium">Playlist</p>
            <h1 onClick={openModal} className="text-normal sm:text-7xl font-bold cursor-pointer">
              {playLists[Number(playListId)]?.name}
            </h1>
            <p className="text-xs font-medium">User</p>
          </div>
        </div>
      </header>
    </Suspense>
  );
};

export default Header;
