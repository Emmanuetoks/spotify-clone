import { Dispatch, SetStateAction } from "react";

export type PlayListContextType = 
  {
    libraryPlaylists: [
      TPlayList[],
      Dispatch<TReducerAction>
    ];

    playlistInView:[TPlayList | null, Dispatch<SetStateAction<TPlayList | null>>]
  }
;

export type PlayListsArray = TPlayList[]; //Array of playlists state that will be provided to all

export type PlayListInView = TPlayList;

type TReducerAction = {
  type: string;
  payload: TPlayList;
};

type FetchedPlaylist = TPlayList | null;

export type TPlayList = {
  name?: string;
  playlist_id: string;
  description?: string;
  likes?: string;
  duration?: string;
  tracks?: string;
  owner: string;
  type:string;
}; //Playlist Type
