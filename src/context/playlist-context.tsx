'use client'
import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { PlayListAction, PlayListContextType, PlayListsArray } from "../../types/playlist";

const playListContext = createContext<PlayListContextType | null>(null)

function PlayListContextProvider({children}:{children:React.ReactNode}) {
    // InitState will be gotten from user context that will be consumed in the future
    const playListsInitialState:PlayListsArray = []//Place holder For user fetched
    const [playlists, dispatch] = useReducer(reducer, playListsInitialState)
  
    function reducer(state:PlayListsArray, action:PlayListAction) {
      let stateUpdate = [...state];
      switch (action.type) {
        case 'add':
          stateUpdate.push(action.payload)
          break;
      
        default:
          break;
      }
      return stateUpdate;
    }
    return <playListContext.Provider value={[playlists, dispatch]}>
        {children}
    </playListContext.Provider>
}


export default PlayListContextProvider

export function usePlayLists() {
    const context = useContext(playListContext)    
    return context
}

