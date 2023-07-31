import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiPlay } from "react-icons/bi";
import SpotifyPlayBtn from "../ui/spotify-play-button";
import { TActiveTrack } from "@/context/web-player-context";
import Link from "next/link";

// images gotten from api call will be injected
// Texts gotten from api call will be injected in
// This card is for songs, plalist but not for artists

type Props = {
  imgSrc: StaticImageData;
  ImgAlt: string;
  cardName?: string;
  cardDesc?: string;
  sourceID: string;
  firstTrack: TActiveTrack;
};

const SongCard = ({
  imgSrc,
  ImgAlt,
  cardDesc,
  cardName,
  firstTrack,
  sourceID,
}: Props) => {
  return (
    <Link href={`playlist/${sourceID}`}>
      <figure className="card min-w-[5rem] max-w-[25rem] sm:min-w-none sm:max-w-none spotify-song-card  bg-spotify-black-600 rounded-md space-y-3 sm:p-4 sm:w-full transition hover:bg-spotify-black-400 cursor-pointer relative group flex-grow flex-shrink">
        <div className="relative card__cover w-full aspect-square bg-white">
          <Image src={imgSrc} fill={true} alt={ImgAlt} />
        </div>

        <figcaption className="card__details">
          <h5 className="card__name font-medium text-white text-normal">
            Anime Jamz
          </h5>
          <p className="card__description text-[0.8rem] font-medium text-spotify-gray-200">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </figcaption>

        <SpotifyPlayBtn
          trackSource={sourceID}
          firstTrack={firstTrack}
          className="absolute top-[50%] translate-y-3 right-4 opacity-0 group-hover:opacity-100 transition group-hover:-translate-y-3"
        />
      </figure>
      {/* <Mobile /> */}
    </Link>
  );
};
export default SongCard;

/**
 * -------Create SVG
 *
 *
 * ---LIBRARY--OPEN
 *
 *
 * --------NOTE-SVG
 *
 *
 * -----HOME SVG
 *
 *
 *
 * ----SEARCH SVG NORMAL
 *
 *
 * SEARCH SVG ACTIVE
 *
 *
 *
 * ---COLLAPSED LIBRARY
 *
 *
 *
 *
 *
 *
 *
 * NEW COLORS
 * PLAYLIST__SONGS-COMPONENT  BG-COLOR---#121212
 *
 *
 *
 * PLAYLISTCOVER TRANSPARENT #08070a
 *
 *
 * CONTEXT MENU BG COLOR #282828
 *
 * CIBTEXT MENU HOVER BG COLOR #3e3e3e
 * SONG MENU NORMAL BG COLOR #181818
 *
 * SONG CARD HOVER #282828
 * #121212
 * h
 */
