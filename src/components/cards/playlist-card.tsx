"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { BiPlay } from "react-icons/bi";
import parse from 'html-react-parser'
import SpotifyPlayBtn from "../ui/spotify-play-button";
import {
  TActiveTrack,
  useWebPlayerContext,
} from "@/context/web-player-context";
import Link from "next/link";
import { TPlayList } from "../../../types/playlist";
import { dividerClasses } from "@mui/material";
import { nanoid } from "nanoid";
import dummyiMg from "@/images/spotify--rema.jpg";
import SpMusicNote from "../icons/SpMusicNote";
import PlaylistMain from "@/app/library/main";
import SpImage from "../ui/SpImage";
// images gotten from api call will be injected
// Texts gotten from api call will be injected in
// This card is for songs, plalist but not for artists

type Props = {
  data: TPlayList;
};

const PlaylistCard = ({ data }: Props) => {
  return (
    <div className="relative group bg-spotify-black-600 h-full hover:bg-spotify-black-400 w-full rounded-md active:bg-[#000] sp-playlist-card">
      <Link href={`/playlist/${data.id}`}>
        <figure
          className={`home-ps-card min-w-[5rem] max-w-[25rem] sm:min-w-none sm:max-w-none rounded-md space-y-3 sm:p-4 sm:w-full transition cursor-pointer flex-grow flex-shrink h-full ${
            useWebPlayerContext().activeTrack[0]?.uri === data.id
              ? "bg-spotify-black-400"
              : null
          }`}
        >
          <div className="relative card__cover w-full aspect-square bg-spotify-black-900 pointer-evnts-none">
            <SpImage images={data.images} />
          </div>

          <figcaption className="card__details">
            <h5 className="card__name font-bold text-white text-normal capitalize truncate">
              {data.name}
            </h5>
            <p className="card__description text-[0.8rem] font-normal text-spotify-gray-800">
              {parse(data.description as string)}
            </p>
          </figcaption>
        </figure>
        {/* <Mobile /> */}
      </Link>
      <SpotifyPlayBtn
        trackSource={data.id}
        firstTrack={{ name: "" , uri: 'uiuie', next: 'ukdhod', prev:'odio'}}
        className={`absolute top-[45%] right-4 transition ${
          useWebPlayerContext().activeTrack[0]?.uri === data.id
            ? "opacity-100"
            : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:-translate-y-0"
        }`}
      />
    </div>
  );
};
export default PlaylistCard;

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
