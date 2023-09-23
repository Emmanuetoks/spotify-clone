import { AudioTrack } from "../../types";

export const loadTrack = (playerInstance: HTMLAudioElement, track: AudioTrack) => {
  playerInstance.src = track.uri;
};
