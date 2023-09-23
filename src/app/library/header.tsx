"use client";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import AddPlayList from "./create-playlist";
import SpLibraryV1 from "@/components/icons/SpSearchLibraryV1";
import SpLibraryV2 from "@/components/icons/SpLibraryV2";
import LayoutControllers from "./library-layout";
import LibrarySizeControllers from "./library-expand";

const Header = () => {
  const libraryCollapseToggler = useRef<HTMLButtonElement | null>(null);

  const toggleCollapse = () => {
    document
      .querySelector("aside.sidebar")
      ?.classList.toggle("collapsed-sidebar");
  };

  return (
    <header className="space-y-4 px-2">
      <div className="Library__modification-tools justify-between flex items-center w-full">
        <button
          // data-popup-info="Hellow orld"
          id="libraryCollapseToggler"
          ref={libraryCollapseToggler}
          onClick={toggleCollapse}
          className="Library__collapse-toggler flex gap-4 items-center hover-white cursor-pointer group"
        >
          <SpLibraryV1 className="fill-spotify-gray-900 group-hover:fill-white" />
          <SpLibraryV2 className="fill-spotify-gray-900 hover:fill-white hidden" />
          <h5 className={'text-spotify-gray-900 group-hover:text-white font-bold'}>Your Library</h5>
        </button>

        <div className="remove-on-collapse flex gap-4 items-center">
          <AddPlayList />
          <LayoutControllers />
          <LibrarySizeControllers />
        </div>
      </div>
{/* 
      <div className="remove-on-collapse">
        <button className="bg-spotify-black-100 rounded-lg px-3 py-2 hover:bg-spotify-gray-100 text-white">
          Playlists
        </button>
      </div>
      <div className="library__header w-full flex justify-between px-2 remove-on-collapse">
        <Search />
        <FilterPlayList />
      </div> */}
    </header>
  );
};

export default Header;
