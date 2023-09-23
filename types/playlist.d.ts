import { Dispatch, SetStateAction } from "react";
import { User } from "./owner";

export type PlayListContextType = {
  libraryPlaylists: [TPlayList[], Dispatch<TReducerAction>];

  playlistInView: [
    TPlayList | null,
    Dispatch<SetStateAction<TPlayList | null>>
  ];
};

export type PlayListsArray = TPlayList[]; //Array of playlists state that will be provided to all

export type PlayListInView = TPlayList;

type TReducerAction = {
  type: string;
  payload: TPlayList;
};

type FetchedPlaylist = TPlayList | null;

export type TPlayList = {
  name: string;
  id: string;
  description?: string;
  likes?: string;
  duration?: string;
  tracks?: {href:string, total:number};
  owner?: User;
  type?: "playlist" | "artist" | "album";
  images?: { url: string; height: number | null; width: number | null }[];
}; //Playlist Type
