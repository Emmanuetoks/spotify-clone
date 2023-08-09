import SpMusicNote from "@/components/icons/SpMusicNote";
import SpotifyPlayBtn from "@/components/ui/spotify-play-button";
import { TActiveTrack } from "@/context/web-player-context";
import Link from "next/link";
import React from "react";

type Props = {
  name?: string;
  playlist_id: string;
  owner: string;
  type: string;
  numberOfSongs?: string;
  firstTrack: TActiveTrack;
};
const GridCard = ({ name, playlist_id, owner, type, firstTrack }: Props) => {
  return (
    <>
      <Link
        className=""
        href={`/playlist/${playlist_id}`}
      >
        <figure className="w-full relative bg-spotify-black-600 rounded-md space-y-3 sm:p-4 sm:w-full transition hover:bg-spotify-black-400 cursor-pointer group hidden grid-card overflow-hidden">
          <div className="cover w-full aspect-square bg-spotify-black-200 grid place-items-center">
            <SpMusicNote className="scale-[1.5] fill-spotify-gray-700" />
          </div>
          <div className="details w-full">
            <p className="font-bold text-base truncate">{name}</p>
            <p className="playlist__owner text-spotify-gray-900 text-xs sm:text-sm font-normal ">
              {type.toLocaleLowerCase() === "artist" ? (
                <span>Artist</span>
              ) : (
                <>
                  <>{type}</>
                  <>{" • "}</>
                  <>{owner}</>
                </>
              )}
            </p>
          </div>
          <SpotifyPlayBtn
            trackSource={playlist_id}
            firstTrack={{ name: "hello" }}
            className="absolute top-[50%] translate-y-3 right-4 opacity-0 group-hover:opacity-100 transition group-hover:-translate-y-3"
          />
        </figure>
      </Link>

      <Link href={`/playlist/${playlist_id}`} className="normal-card hover:bg-spotify-black-400">
        <div className="sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3 p-2">
          <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 user-playlist-cover rounded grid place-items-center shadow-[#101010] shadow-md">
            <SpMusicNote className="fill-spotify-gray-200" />
          </div>

          <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2">
            <h6 className="playlist__name text-sm sm:text-md text-white font-normal">
              {name}
            </h6>
            {/* User Playlist Name  */}
            <p className="playlist__owner text-spotify-gray-900 text-xs sm:text-sm font-normal">
              {type.toLocaleLowerCase() === "artist" ? (
                <span>Artist</span>
              ) : (
                <>
                  <span className=" capitalize">{type}</span>
                  <span>{" • "}</span>
                  <span>{owner}</span>
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
