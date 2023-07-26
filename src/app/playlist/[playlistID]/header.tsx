"use client";
import { usePlayLists } from "@/context/playlist-context";
import { useParams} from "next/navigation";
import React, { MouseEventHandler, Suspense } from "react";
import { PlayListContextType } from "../../../../types/playlist";
import SpMusicNote from "@/components/icons/SpMusicNote";
import { useEditModalState } from "@/context/editmodal";
import { TPlaylistSearchParam } from "../../../../types/params";
import truncateString from "@/utils/truncateString";


const Header = () => {
  const activePlayList:TPlaylistSearchParam = useParams()
  const[playLists] = usePlayLists() as PlayListContextType
  const openModal = useEditModalState() as MouseEventHandler<HTMLHeadingElement>
  const playListName = playLists.find(el => el.playlist_id === activePlayList.playlistID)?.name
  return (
    <Suspense>
      <header className="playlist__header pt-20 pb-3 px-7 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 w-full">
          <div className="user__playlist-cover w-[18rem] aspect-square bg-spotify-black-400 grid place-items-center rounded shadow-md shadow-spotify-black-100 drop-shadow-xl">
            <SpMusicNote className=" fill-spotify-gray-200 scale-[2.5]"/>
          </div>

          <div className="user__playlist-details text-white space-y-3 w-full pb-4">
            <p className="hidden sm:blocktext-xs font-medium">Playlist</p>
            <h1 onClick={openModal} className="text-normal sm:text-8xl pb-4 font-bold cursor-pointer">
              {truncateString(playListName as string, 17)}
            </h1>
            <p className="text-xs font-medium">User</p>
          </div>
        </div>
      </header>
    </Suspense>
  );
};

export default Header;
