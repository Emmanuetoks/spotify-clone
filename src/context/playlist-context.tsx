"use client";
import React, { createContext, useContext, useReducer } from "react";
import {
  TReducerAction,
  PlayListContextType,
  PlayListsArray,
} from "../../types/playlist";

const PlayListContext = createContext<PlayListContextType | null>(null);

function PlayListContextProvider({ children }: { children: React.ReactNode }) {
  // InitState will be gotten from user context that will be consumed in the future
  const playListsInitialState: PlayListsArray = [
    { name: "Default PlayList", playlist_id: "testplaylistidroboskeke" },
  ]; //Place holder For user fetched
  const [playlists, dispatch] = useReducer(reducer, playListsInitialState);

  function reducer(state: PlayListsArray, action: TReducerAction) {
    let stateUpdate = [...state];
    switch (action.type) {
      case "add":
        stateUpdate.unshift(action.payload);
        break;

      case "update":
        stateUpdate = stateUpdate.map((el) =>
          el.playlist_id === action.payload.playlist_id
            ? { ...el, ...action.payload }
            : el
        );
        console.log(stateUpdate);
        break;

      case "delete":
        stateUpdate = stateUpdate.filter(
          (el) => el.playlist_id !== action.payload.playlist_id
        );

        console.log(stateUpdate);

        break;
      default:
        break;
    }
    return stateUpdate;
  }
  return (
    <PlayListContext.Provider value={[playlists, dispatch]}>
      {children}
    </PlayListContext.Provider>
  );
}

export default PlayListContextProvider;

export function usePlayLists() {
  const context = useContext(PlayListContext);
  return context;
}
