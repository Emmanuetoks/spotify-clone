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

type Props = {
  data: TPlayList;
};
const GridCard = ({ data }: Props) => {
  const activePlaylistId: TPlaylistSearchParam = useParams();

  return (
    <>
      <div className={`relative hidden grid-card-container group rounded-md ${
              activePlaylistId.playlistID === data.id ? "bg-[#181818]" : null
            } ${ useWebPlayerContext().activeTrackSource[0] === data.id ? 'bg-[#181818]': null}`}>
        <Link href={`/playlist/${data.id}`}>
          <figure
            className={`w-full grid-card relative rounded-md space-y-3 sm:p-4 sm:w-full transition hover:bg-[#1a1a1a] active:bg-[#000] cursor-pointer overflow-hidden`}
          >
            <div className="cover w-full aspect-square bg-spotify-black-900 grid place-items-center rounded">
              <SpImage images={data.images} />
            </div>
            <div className="details w-full">
              <p className="font-bold text-base text-white truncate">
                {data.name}
              </p>
              <p className="playlist__owner text-spotify-gray-800 text-xs sm:text-base font-normal capitalize truncate">
                { (
                  <>
                    <>{data.type}</>
                    <>{" • "}</>
                    <>{data.owner?.display_name}</>
                  </>
                )}
              </p>
            </div>
          </figure>
        </Link>
        <SpotifyPlayBtn
          trackSource={data.id}
          firstTrack={{ name: "" }}
          className={`absolute top-[45%] right-4 transition ${
            useWebPlayerContext().activeTrackSource[0] === data.id
              ? "opacity-100"
              : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:-translate-y-0"
          }`}
        />
      </div>

      {/*Co,ponent to be displayed as normal card when sidebar is small */}
      <Link
        href={`/playlist/${data.id}`}
        className={`normal-card rounded w-full library__user-playlist-card items-center cursor-pointer hover:bg-[#191919] flex-shrink sidebar__icon active:bg-black ${
          activePlaylistId.playlistID === data.id ? "active-playlist" : null
        } overflow-hidden`}
      >
        <div className="sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3 p-2 hover:bg-[#191919]">
          <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 user-playlist-cover rounded grid place-items-center shadow-[#101010] shadow-md">
            <SpImage size="small" images={data.images} />
          </div>

          <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2">
            <h6 className="playlist__name text-sm sm:text-md text-white font-normal">
              {data.name}
            </h6>
            {/* User Playlist Name  */}
            <p className="playlist__owner text-spotify-gray-800 text-xs sm:text-sm font-normal">
              {data.type?.toLocaleLowerCase() === "artist" ? (
                <span>Artist</span>
              ) : (
                <>
                  <span className=" capitalize">{data.type}</span>
                  <span>{" • "}</span>
                  <span>{data.owner?.display_name}</span>
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
