'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const webPlayerContext = createContext<WebPlayerContext | null>(null);

interface WebPlayerContext {
  activeTrack: [TActiveTrack, Dispatch<SetStateAction<TActiveTrack | null>>];
  activeTrackSource: [string | null, Dispatch<SetStateAction<string | null>>]
}

export type TActiveTrack = {
  name: string;
} | null;

const WebPlayerContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<TActiveTrack | null>({name:'kama'});
  const [trackSource, setTrackSource] = useState<string| null>('4t4545')
  const contextValue: WebPlayerContext = {
    activeTrack: [currentTrack, setCurrentTrack],
    activeTrackSource:[trackSource, setTrackSource]
    
  };
  
  return (
    <webPlayerContext.Provider value={contextValue}>
      {children}
    </webPlayerContext.Provider>
  );
};

export const useWebPlayerContext = () => {
  const context = useContext(webPlayerContext) as WebPlayerContext;
  return context;
};

export default WebPlayerContextProvider;
