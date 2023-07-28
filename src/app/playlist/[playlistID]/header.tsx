"use client";
import { usePlayLists } from "@/context/playlist-context";
import { useParams } from "next/navigation";
import React, { MouseEventHandler, Suspense } from "react";
import { PlayListContextType } from "../../../../types/playlist";
import SpMusicNote from "@/components/icons/SpMusicNote";
import { useEditModalState } from "@/context/editmodal";
import { TPlaylistSearchParam } from "../../../../types/params";
import truncateString from "@/utils/truncateString";

const Header = () => {
  const activePlayList: TPlaylistSearchParam = useParams();
  const [playLists] = usePlayLists() as PlayListContextType;
  const openModal =
    useEditModalState() as MouseEventHandler<HTMLHeadingElement>;
  const playList = playLists.find(
    (el) => el.playlist_id === activePlayList.playlistID
  );

  return (
    <Suspense>
      <header className="playlist__header pt-20 pb-3 px-7 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 w-full">
          <div className="user__playlist-cover w-[18rem] aspect-square bg-spotify-black-400 grid place-items-center rounded shadow-md shadow-spotify-black-100 drop-shadow-xl">
            <SpMusicNote className=" fill-spotify-gray-200 scale-[2.5]" />
          </div>

          <div className="user__playlist-details text-white w-full">
            <p className="hidden sm:block text-sm font-semibold">Playlist</p>
            <h1
              onClick={openModal}
              className="text-normal sm:text-8xl py-3 font-black cursor-pointer"
            >
              {truncateString(playList?.name as string, 17)}
            </h1>
            <div className="space-y-2">
              <p className="playlist-description text-sm text-spotify-gray-200">
                {playList?.description || ""}
              </p>
              <p className="text-sm font-medium other-details">
                <span className="owner font-bold tracking-wider">
                  {playList?.owner === "spotify" ? (
                    <span>Icon Spotify</span>
                  ) : (
                    playList?.owner
                  )}
                </span>
                {playList?.likes ? <> • {playList.likes} likes</> : ""}
                {playList?.tracks ? (
                  <>
                      {' '}• {playList.tracks} songs,{" "}
                    <span className="text-spotify-gray-100">
                      about {playList.duration || ""}
                    </span>
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      </header>
    </Suspense>
  );
};

export default Header;
