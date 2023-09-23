"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  TReducerAction,
  PlayListContextType,
  PlayListsArray,
  TPlayList,
} from "../../types/playlist";
import { useRouter } from "next/navigation";
import { LibraryReducer } from "@/utils/libraryStore";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLibraryPlaylists } from "@/utils/getLibraryPlaylists";

const PlayListContext = createContext<PlayListContextType | null>(null);

function PlayListContextProvider({ children }: { children: React.ReactNode }) {
  // InitState will be gotten from user context that will be consumed in the future

  const [fetchedPlaylist, setFetchedPlaylist] = useState<null | TPlayList>(
    null
  );

const [playlists, dispatch] = useReducer<any>(LibraryReducer, [{name:"Dummy", id:"  eouejioer", description:'rrrrt', owner:{display_name:'tooks'}      }]                 );

  return (
    <PlayListContext.Provider
      value={{
        libraryPlaylists: [playlists as TPlayList[], dispatch],
        playlistInView: [fetchedPlaylist, setFetchedPlaylist],
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
}

export default PlayListContextProvider;

export function usePlayLists() {
  const context = useContext(PlayListContext) as PlayListContextType;

  return context;
}
