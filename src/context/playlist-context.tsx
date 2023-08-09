"use client";
import React, { createContext, useContext, useReducer, useState } from "react";
import {
  TReducerAction,
  PlayListContextType,
  PlayListsArray,
  TPlayList,
} from "../../types/playlist";
import { useRouter } from "next/navigation";

const PlayListContext = createContext<PlayListContextType | null>(null);

function PlayListContextProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  // InitState will be gotten from user context that will be consumed in the future
  const playListsInitialState: PlayListsArray = [
    { name: "Default PlayList", id: "testplaylistidroboskeke", description:'Test Playlist', owner:'Emmanuel Toks', likes:'2', tracks:'5', duration:'5hr 3min', type:'playlist' },
  ]; //Place holder For user fetched

  
  const [playlists, dispatch] = useReducer(reducer, playListsInitialState);
  const [fetchedPlaylist, setFetchedPlaylist] = useState<null | TPlayList >(null);
  function reducer(state: PlayListsArray, action: TReducerAction) {
    let stateUpdate = [...state];
    switch (action.type) {
      case "add":
        stateUpdate.unshift(action.payload);
        break;

      case "update":
        stateUpdate = stateUpdate.map((el) =>
          el.id === action.payload.id
            ? { ...el, ...action.payload }
            : el
        );
        break;
      case "delete":
        stateUpdate = stateUpdate.filter(
          (el) => el.id !== action.payload.id
        );
        router.push('/')

        break;
      default:
        break;
    }
    return stateUpdate;
  }
  return (
    <PlayListContext.Provider value={{libraryPlaylists:[playlists, dispatch], playlistInView:[fetchedPlaylist, setFetchedPlaylist]}}>
      {children}
    </PlayListContext.Provider>
  );
}

export default PlayListContextProvider;

export function usePlayLists() {

  const context = useContext(PlayListContext) as PlayListContextType

  return context;
}
