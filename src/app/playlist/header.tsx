"use client";
import { usePlayLists } from "@/context/playlist-context";
import React, { MouseEventHandler, Suspense } from "react";
import SpMusicNote from "@/components/icons/SpMusicNote";
import { useEditModalState } from "@/context/editmodal";
import truncateString from "@/utils/truncateString";
import { useAuth } from "@/context/auth-context";
import { useParams } from "next/navigation";
import { TPlaylistSearchParam } from "../../../types/params";

const Header = () => {
  const par:TPlaylistSearchParam = useParams();
    const openModal =
    useEditModalState() as MouseEventHandler<HTMLHeadingElement>;

  const userName = useAuth().user.name;
  const [libraryPlayLists] = usePlayLists().libraryPlaylists
  const playlistInView = libraryPlayLists.find(el => el.id === par.playlistID);
  return (
    <Suspense>
      <header className="playlist__header pt-20 pb-3 px-7 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 w-full">
          <div className="user__playlist-cover w-[18rem] aspect-square bg-spotify-black-400 grid place-items-center rounded shadow-md shadow-spotify-black-100 drop-shadow-xl">
            <SpMusicNote className=" fill-spotify-gray-200 scale-[2.5]" />
          </div>

          <div className="user__playlist-details text-white w-full">
            <p className="hidden sm:block text-sm font-semibold">Playlist</p>
            {userName === playlistInView?.owner ? (
              <h1
                onClick={openModal}
                className="text-normal sm:text-8xl py-3 font-black cursor-pointer truncate"
              >
                {playlistInView?.name}
              </h1>
            ) : (
              <h1 className="text-normal sm:text-8xl py-3 font-black cursor-pointer truncate">
                {playlistInView?.name}
              </h1>
            )}

            <div className="space-y-2">
              <p className="playlist-description text-sm text-spotify-gray-200">
                {playlistInView?.description || ""}
              </p>
              <p className="text-sm font-medium other-details">
                <span className="owner font-bold tracking-wider">
                  {playlistInView?.owner === "spotify" ? (
                    <span>Icon Spotify</span>
                  ) : (
                    playlistInView?.owner
                  )}
                </span>
                {playlistInView?.likes ? (
                  <> • {playlistInView.likes} likes</>
                ) : (
                  ""
                )}
                {playlistInView?.tracks ? (
                  <>
                    {" "}
                    • {playlistInView.tracks} songs,{" "}
                    <span className="text-spotify-gray-100">
                      about {playlistInView.duration || ""}
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
