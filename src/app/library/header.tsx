"use client";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import FilterPlayList from "./filter-playlist";
import Search from "./search-library";
import AddPlayList from "./create-playlist";
import SpLibraryV1 from "@/components/icons/SpSearchLibraryV1";
import SpLibraryV2 from "@/components/icons/SpLibraryV2";
import LayoutControllers from "./library-layout";
import LibrarySizeControllers from "./library-expand";

const Header = () => {
  const libraryCollapseToggler = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    const desktopLibrary = document.getElementById(
      "librarySection"
    ) as HTMLDivElement;
    // const libraryPageIndicator = document.getElementById('libraryCollapseToggler')

    body?.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as Node;
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((el) => el.classList.remove("active"));
  
      if (desktopLibrary.contains(target)) {
        libraryCollapseToggler.current?.classList.add("text-white");
      } else {
        libraryCollapseToggler.current?.classList.remove("text-white");
      }
    });
  }, []);

  const toggleCollapse = () => {
    document
      .querySelector("aside.sidebar")
      ?.classList.toggle("collapsed-sidebar");
  };

  return (
    <header className="space-y-4">
      <div className="Library__modification-tools justify-between flex items-center w-full px-2">
        <button
          // data-popup-info="Hellow orld"
          id="libraryCollapseToggler"
          ref={libraryCollapseToggler}
          onClick={toggleCollapse}
          className="Library__collapse-toggler flex gap-4 items-center hover-white cursor-pointer popup-info-candidate"
        >
          <SpLibraryV1 className="fill-white" />
          <SpLibraryV2 className="fill-white hidden" />
          <h5>Your Library</h5>
        </button>

        <div className="remove-on-collapse flex gap-4 items-center">
          <LayoutControllers />
          <AddPlayList />
          <LibrarySizeControllers />
        </div>
      </div>

      <div className="remove-on-collapse">
        <button className="bg-spotify-black-100 rounded-lg px-3 py-2 hover:bg-spotify-gray-100 text-white">
          Playlists
        </button>
      </div>
      <div className="library__header w-full flex justify-between px-2 remove-on-collapse">
        <Search />
        <FilterPlayList />
      </div>
    </header>
  );
};

export default Header;
