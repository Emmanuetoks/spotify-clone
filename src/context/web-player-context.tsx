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
const webPlayerContext = createContext<WebPlayerContext | null>(null);

interface WebPlayerContext {
  activeTrack: [AudioTrack | null, Dispatch<SetStateAction<AudioTrack | null>>];
  playerState: [boolean, Dispatch<SetStateAction<boolean>>];
  loadTrack: (track: AudioTrack) => void;
  player: [HTMLAudioElement | null, Dispatch<SetStateAction<HTMLAudioElement | null>>]
}

export type TActiveTrack = {
  name: string;
} | null;

const WebPlayerContextProvider = ({ children }: { children: ReactNode }) => {

  //State to hold the currently playing track object
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>({name:"bomoboclat", uri:"/one-piece_opening-8-crazy-rainbow.mp3", next:"r8eohre", prev:"nwriuw", parentPlaylistId:"abc"});

  //state to show if a track is currently playing or not
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  //Player state to hold the audio object
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null)

  //State used to load the track, i.e to set the currentTRack state to a TRACK Object
  const loadTrack = (track: AudioTrack) => {
    setCurrentTrack(track)
  };

  const contextValue: WebPlayerContext = {
    activeTrack: [currentTrack, setCurrentTrack],
    playerState: [isPlaying, setIsPlaying],
    loadTrack,
    player:[player, setPlayer]
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
