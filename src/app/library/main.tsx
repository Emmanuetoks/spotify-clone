"use client";

import { usePlayLists } from "@/context/playlist-context";
import Link from "next/link";
import truncateString from "@/utils/truncateString";
import { useLibraryContext } from "@/context/library-context";
import ListCard from "./cards/list-card";
import ListLayout from "./layouts/list-layout";
import { nanoid } from "nanoid";
import GridCard from "./cards/grid-card";
import GridLayout from "./layouts/grid-layout";

const PlaylistMain = () => {
  const [layout] = useLibraryContext();

  const [playLists] = usePlayLists().libraryPlaylists;

  if (layout === "gridLayout")
    return (
      <main>
        <GridLayout>
          {
            playLists.map(el => <GridCard key={nanoid()} name={el.name} owner={el.owner} type={el.type} playlist_id={el.playlist_id}/>)
          }
        </GridLayout>
      </main>
    );

  return (
    <div className="max-h-full">
      <main className={`Library__main ${layout} max-h-full overflow-y-auto`}>
        {}
        {playLists.length === 0 ? (
          <div className="remove-on-collapse">No Playlist</div>
        ) : (
          playLists.map((playList) => (
            <ListCard
              key={nanoid()}
              playlist_id={playList.playlist_id}
              owner={playList.owner}
              type={playList.type}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default PlaylistMain;
