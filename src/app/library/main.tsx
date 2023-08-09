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
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
const PlaylistMain = () => {
  const [layout] = useLibraryContext();

  const [playLists] = usePlayLists().libraryPlaylists;

  if (layout === "gridLayout")
    return (
      <div className="h-full font-normal">
        <main className="Library__main ">
          <OverlayScrollbarsComponent className="h-[40vh] overlay-comp">
            <GridLayout>
              {playLists.map((el) => (
                <GridCard
                  key={nanoid()}
                  name={el.name}
                  owner={el.owner}
                  type={el.type}
                  playlist_id={el.id}
                  firstTrack={{ name: "hello" }}
                />
              ))}
            </GridLayout>
          </OverlayScrollbarsComponent>
        </main>
      </div>
    );

  return (
    <div className="h-full">
      <main className={`Library__main `}>
        {playLists.length === 0 ? (
          <div className="remove-on-collapse">No Playlist</div>
        ) : (
          <OverlayScrollbarsComponent className='h-[40vh] w-full overlay-comp' options={{scrollbars:{theme:'os-theme-light'}}}>
            <ListLayout>
              {playLists.map((playList) => (
                <ListCard
                  key={nanoid()}
                  playlist_id={playList.id}
                  owner={playList.owner}
                  type={playList.type}
                  name={playList.name}
                />
              ))}
            </ListLayout>
          </OverlayScrollbarsComponent>
        )}
      </main>
    </div>
  );
};

export default PlaylistMain;
