"use client";
import SpMusicNote from "@/components/icons/SpMusicNote";
import SpotifyPlayBtn from "@/components/ui/spotify-play-button";
import {
  TActiveTrack,
  useWebPlayerContext,
} from "@/context/web-player-context";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { TPlaylistSearchParam } from "../../../../types/params";
import { TPlayList } from "../../../../types/playlist";
import SpImage from "@/components/ui/SpImage";
import next from "next/types";

type Props = {
  playlist: TPlayList;
};
const GridCard = ({ playlist }: Props) => {
  const activePlaylistId: TPlaylistSearchParam = useParams();
//Activetracksource is 
  return (
    <>
      <div className={`relative hidden grid-card-container group rounded-md ${activePlaylistId.playlistID === playlist.id ? "bg-[#181818]" : null
        }`}>
        <Link href={`/playlist/${playlist.id}`}>
          <figure
            className={`w-full grid-card relative rounded-md space-y-3 sm:p-4 sm:w-full transition hover:bg-[#1a1a1a] active:bg-[#000] cursor-pointer overflow-hidden`}
          >
            <div className="cover w-full aspect-square bg-spotify-black-900 grid place-items-center rounded relative">
              <SpImage images={playlist.images} />
            </div>
            <div className="details w-full">
              <p className="font-bold text-base text-white truncate">
                {playlist.name}
              </p>
              <p className="playlist__owner text-spotify-gray-800 text-xs sm:text-base font-normal capitalize truncate">
                {(
                  <>
                    <>{playlist.type}</>
                    <>{" • "}</>
                    <>{playlist.owner?.display_name}</>
                  </>
                )}
              </p>
            </div>
          </figure>
        </Link>
        <SpotifyPlayBtn
          playlistId={playlist.id}
          firstTrack={{ name: "", uri:"/one-piece_opening-8-crazy-rainbow.mp3",next:"uwehe8w", prev:"7whew9he", parentPlaylistId:playlist.id}}
          className={`absolute top-[45%] right-4 transition ${
            useWebPlayerContext().activeTrack[0]?.parentPlaylistId === playlist.id
              ? "opacity-100"
              : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:-translate-y-0"
          }`}
        />
      </div>

      {/*Component to be displayed as normal card when sidebar is small */}
      <Link
        href={`/playlist/${playlist.id}`}
        className={`normal-card rounded w-full library__user-playlist-card items-center cursor-pointer hover:bg-[#191919] flex-shrink sidebar__icon active:bg-black ${activePlaylistId.playlistID === playlist.id ? "active-playlist" : null
          } overflow-hidden`}
      >
        <div className="sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3 p-2 hover:bg-[#191919]">
          <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 user-playlist-cover rounded grid place-items-center shadow-[#101010] shadow-md relative">
            <SpImage size="small" images={playlist.images} />
          </div>

          <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2">
            <h6 className="playlist__name text-sm sm:text-md text-white font-normal">
              {playlist.name}
            </h6>
            {/* User Playlist Name  */}
            <p className="playlist__owner text-spotify-gray-800 text-xs sm:text-sm font-normal">
              {playlist.type?.toLocaleLowerCase() === "artist" ? (
                <span>Artist</span>
              ) : (
                <>
                  <span className=" capitalize">{playlist.type}</span>
                  <span>{" • "}</span>
                  <span>{playlist.owner?.display_name}</span>
                </>
              )}
            </p>
            {/*User name */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default GridCard;
