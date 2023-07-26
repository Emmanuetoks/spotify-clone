import { Dispatch } from "react";

export type PlayListContextType = [PlayListsArray, Dispatch<TReducerAction>]

export type PlayListsArray = PlaylistCard[]  //Array of playlists state that will be provided to all

type TReducerAction = {
  type:string;
  payload:PlaylistCard;
}

export type PlaylistCard = {
  name?:string;
  playlist_id:string ;
  description?:string;
} //Playlist Type 
