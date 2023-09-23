"use client";
import { usePlayLists } from "@/context/playlist-context";
import React, { MouseEventHandler, Suspense } from "react";
import SpMusicNote from "@/components/icons/SpMusicNote";
import { useEditModalState } from "@/context/editmodal-context";
import truncateString from "@/utils/truncateString";
import { useAuth } from "@/context/auth-context";
import { useParams } from "next/navigation";
import { TPlaylistSearchParam } from "../../../types/params";
import { BsSpotify } from "react-icons/bs";
import SpImage from "@/components/ui/SpImage";

const Header = () => {
  const par: TPlaylistSearchParam = useParams();
  const { openModal } = useEditModalState();

  const userName = useAuth().user.name;
  const [libraryPlayLists] = usePlayLists().libraryPlaylists;
  const [playlistInView] = usePlayLists().playlistInView;
  return (
    <Suspense>
      <header className="playlist__header pt-20 pb-3 px-7 w-full">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 w-full">
          <div className="user__playlist-cover min-w-[12rem] aspect-square bg-spotify-black-400 grid place-items-center rounded shadow-md shadow-spotify-black-100 drop-shadow-xl">
            
            <SpImage images={playlistInView?.images} />
          </div>

          <div className="user__playlist-details text-white flex-grow">
            <p className="hidden sm:block text-sm font-semibold">Playlist</p>
            {userName === playlistInView?.owner?.display_name ? (
              <h1
                onClick={openModal}
                className="text-normal sm:text-8xl py-3 font-black cursor-pointer truncate"
              >
                {playlistInView?.name}
              </h1>
            ) : (
              <h1 className="text-normal sm:text-8xl py-3 font-black truncate">
                {playlistInView?.name}
              </h1>
            )}

            <div className="space-y-2">
              <p className="playlist-description text-sm text-spotify-gray-800">
                {playlistInView?.description || ""}
              </p>
              <p className="text-sm font-normal other-details flex items-center gap-1">
                {playlistInView?.owner?.display_name.toLocaleLowerCase() === "spotify" ? (
                  <span>
                    <BsSpotify size={"1rem"} color="green" />
                  </span>
                ) : null}
                <span className="owner font-bold text-white whitespace-nowrap">
                  {playlistInView?.owner?.display_name}
                </span>
                {playlistInView?.likes ? (
                  <> • {playlistInView.likes} likes</>
                ) : (
                  ""
                )}
                {playlistInView?.tracks ? (
                  <>
                    {" "}
                    • {playlistInView.tracks.total} songs,{" "}
                    <span className="text-spotify-gray-800">
                      about {"20mins"}
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
