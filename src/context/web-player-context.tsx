"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { AudioTrack } from "../../types";
import { loadTrack } from "@/utils/webPlayerHelpers";
import { player } from "@/components/web-player";
const webPlayerContext = createContext<WebPlayerContext | null>(null);

interface WebPlayerContext {
  activeTrack: [AudioTrack | null, Dispatch<SetStateAction<AudioTrack | null>>];
  playerState: [boolean, Dispatch<SetStateAction<boolean>>];
  loadTrack: (track: AudioTrack) => void;
}

export type TActiveTrack = {
  name: string;
} | null;

const WebPlayerContextProvider = ({ children }: { children: ReactNode }) => {

  //State to hold the currently playing track object
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);

  //state to show if a track is currently playing or not
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  //State used to load the track, i.e to set the currentTRack state to a TRACK Object
  const loadTrack = (track: AudioTrack) => {
    setCurrentTrack(track)
    player.src = track.uri;
    console.log(track.uri)
  };

  const contextValue: WebPlayerContext = {
    activeTrack: [currentTrack, setCurrentTrack],
    playerState: [isPlaying, setIsPlaying],
    loadTrack,
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
