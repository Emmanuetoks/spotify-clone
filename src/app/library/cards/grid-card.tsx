import Link from "next/link";
import React from "react";

type Props = {
  name?: string;
  playlist_id: string;
  owner: string;
  type: string;
  numberOfSongs?: string;
};

const GridCard = ({ name, playlist_id, owner, type }: Props) => {
  return (
    <Link className="w-full" href={`/playlists/${playlist_id}`}>
      <div className="cover w-full aspect-square"></div>
      <div className="details">
        <p>{name}</p>
        <p className="playlist__owner text-spotify-gray-300 text-xs sm:text-sm font-medium">
          {type.toLocaleLowerCase() === "artist" ? (
            <span>Artist</span>
          ) : (
            <>
              <span>{type}</span>
              <span>{" • "}</span>
              <span>{owner}</span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
};

export default GridCard;
