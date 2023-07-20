"use client";
import React, { MouseEventHandler } from "react";
import FilterPlayList from "./filter-playlist";
import Search from "./search-library";
import AddPlayList from "./create-playlist";
import SpLibraryV1 from "@/components/icons/SpSearchLibraryV1";
import SpLibraryV2 from "@/components/icons/SpLibraryV2";
const toggleCollapse = () => {
  document
    .querySelector("aside.sidebar")
    ?.classList.toggle("collapsed-sidebar");
};
const Header = () => {
  const toggleLibraryExpand: MouseEventHandler = function (
    e: React.BaseSyntheticEvent
  ) {
    const target = e.target;
    console.log(target);
    const desktopLibrary = document.querySelector(".sidebar");

    switch (target.dataset) {
      case "grid":
        desktopLibrary?.classList.add("Library--desktop--expand");
        break;
      case "list":
        desktopLibrary?.classList.remove("Library--desktop--expand");
        break;
      default:
        break;
    }

  };

  const toggleLibraryLayout: MouseEventHandler = (
    e: React.BaseSyntheticEvent
  ) => {
    if (e.target.dataset.libraryLayout === "grid") {
    }
    //Remove flex Add grid,
    //Remove grid
  };
  return (
    <header className="space-y-4">
      <div className="Library__modification-tools justify-between flex items-center w-full px-2">
        <button
          data-popup-info="Hellow orld"
          onClick={toggleCollapse}
          className="Library__collapse-toggler flex gap-4 items-center hover-white cursor-pointer popup-info-candidate"
        >
          <SpLibraryV1 className="fill-white" />
          <SpLibraryV2 className="fill-white hidden" />
          <h5>Your Library</h5>
        </button>

        <div className="remove-on-collapse flex gap-2">
          <div className="library__layout-controller">
            <button data-library-layout="grid" className="">
              grid
            </button>
            <button data-library-layout="list" className="hidden">
              row
            </button>
          </div>
          <AddPlayList />
          <div className="Library__size-controllers">
            <button
              data-library-width="expand"
              onClick={toggleLibraryExpand}
              className="Library__expand-btn"
            >
              {"->"}
            </button>
            <button
              data-library-width="normal"
              onClick={toggleLibraryExpand}
              className="Library__collapse-btn hidden"
            >
              {"<-"}
            </button>
          </div>
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
