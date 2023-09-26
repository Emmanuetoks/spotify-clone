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
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLibraryPlaylists } from "@/utils/getLibraryPlaylists";
const PlaylistMain = () => {
  const [layout] = useLibraryContext();

  const [playLists] = usePlayLists().libraryPlaylists;

  if (!playLists) return <h5>Loading</h5>
  if (layout === "gridLayout")
    return (
      <div className="h-full font-normal">
        <main className="Library__main ">
          <OverlayScrollbarsComponent
            options={{ scrollbars: { theme: "os-theme-sp" } }}
            className="h-[40vh] overlay-comp"
          >
            <GridLayout>
              {playLists.map((el) => (
                <Suspense key={el.id}>
                  <GridCard playlist={el} />
                </Suspense>
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
          <OverlayScrollbarsComponent
            className="h-[40vh] w-full overlay-comp "
            options={{ scrollbars: { theme: "os-theme-sp" } }}
          >
            <ListLayout>
              {playLists.map((el) => (
                <Suspense key={el.id}>
                  <ListCard data={el} />
                </Suspense>
              ))}
            </ListLayout>
          </OverlayScrollbarsComponent>
        )}
      </main>
    </div>
  );
};

export default PlaylistMain;
