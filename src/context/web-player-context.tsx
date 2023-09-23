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
  webPlayer: HTMLAudioElement;
}

export type TActiveTrack = {
  name: string;
} | null;

const WebPlayerContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audio = new Audio('../assets/one-piece_opening-8-crazy-rainbow');
  const loadTrack = (track: AudioTrack) => {
    audio.src = track.uri;
    setCurrentTrack(track)
  };

  const contextValue: WebPlayerContext = {
    activeTrack: [currentTrack, setCurrentTrack],
    playerState: [isPlaying, setIsPlaying],
    loadTrack,
    webPlayer: audio,
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
