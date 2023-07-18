"use client";

import React, { useEffect, useCallback,useRef } from "react";

import PlaylistCard from "./playlist-card";
import { usePlayLists } from "@/context/playlist-context";
import { PlayListContextType } from "../../../types/playlist";
import Link from "next/link";

const PlaylistMain = () => {
  // Bothe will update a userLib State which will render all the playlist cards
  // When new playlist is created, a new Patch request is made to the server to pdate the user playlist
  // There will be a local object which holds the state of the playlists in the browser.
  // If user wants to check songs in his playlist,
  // A new page will bre created where the user context is consumed and gets all the songs of the user and renders it in the new page.

  // What will be created here will be a Reducer containing the playlists and a dispatch option to update it

  const [playLists] = usePlayLists() as PlayListContextType;

  return (
    <div className="library__main">
      <main className="flex flex-wrap gap-3 sm:block place-items-center">
        {playLists.length === 0
          ? <div className="remove-on-collapse">No Playlist</div>
          : playLists.map((playList, index) => (
            <Link key={playList.playlist_id} href={`/playlist/${playList.playlist_id}?id=${index}`}>
              <PlaylistCard  name={playList.name} />
            </Link>
            ))}
      </main>
    </div>
  );
};

// const PlayListMainDesktop = ({ playLists }: { playLists: PlayListsArray }) => {
//   return (

//   );
// };

// const PlayListMainMobile = ({ playLists }: { playLists: PlayListsArray }) => {
//   return (
//     <div className="block sm:hidden library">
//       <main className="grid">
//         {playLists.length === 0
//           ? "No PlayList"
//           : playLists.map((playList) => (
//               <PlaylistCard key={playList.name} name={playList.name} />
//             ))}{" "}
//       </main>
//     </div>
//   );
// };
export default PlaylistMain;
