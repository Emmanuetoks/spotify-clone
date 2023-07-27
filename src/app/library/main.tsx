"use client";

import React, { useEffect, useCallback,useRef, useReducer } from "react";

import PlaylistCard from "./playlist-card";
import { usePlayLists } from "@/context/playlist-context";
import { PlayListContextType } from "../../../types/playlist";
import Link from "next/link";
import truncateString from "@/utils/truncateString";
import { useLibraryContext } from "@/context/library-context";

const PlaylistMain = () => {
  // const [state, dispatch] = useReducer();
  const [layout]= useLibraryContext()
  // const reducer = () => {
  // }
  const [playLists] = usePlayLists() as PlayListContextType;
  
  return (
    <div className="h-[55vh]">

      
      <main className={`Library__main ${layout} max-h-full overflow-y-auto`}>
        {playLists.length === 0
          ? <div className="remove-on-collapse">No Playlist</div>
          : playLists.map((playList, index) => (
            <Link key={playList.playlist_id} href={`/playlist/${playList.playlist_id}`}>
              <PlaylistCard  name={truncateString(playList.name as string, layout==='gridLayout'? 15 : 20)} playlist_id={playList.playlist_id} />
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
