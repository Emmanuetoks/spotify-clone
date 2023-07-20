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

    switch (target.dataset.libraryExpand) {
      case "true":
        desktopLibrary?.classList.add("Library--desktop--expand");
        break;
      case "false":
        desktopLibrary?.classList.remove("Library--desktop--expand");
        break;
    }
  };

  const toggleLibraryLayout: MouseEventHandler = (
    e: React.BaseSyntheticEvent
  ) => {
    const desktopLibrary = document.querySelector(".sidebar");

    switch (e.target.dataset.libraryLayout) {
      case "grid":
        desktopLibrary?.classList.add("Library__layout--grid");
        break;

      case "list":
        desktopLibrary?.classList.remove("Library__layout--grid");
        break;
    }
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
          <div className="library__layout-controllers">
            <button onClick={toggleLibraryLayout} data-library-layout="grid" className="">
              list
            </button>
            <button onClick={toggleLibraryLayout} data-library-layout="list" className="hidden">
              gird
            </button>
          </div>
          <AddPlayList />
          <div className="Library__size-controllers">
            <button
              data-library-expand="true"
              onClick={toggleLibraryExpand}
              className="Library__expand-btn"
            >
              {"->"}
            </button>
            <button
              data-library-expand="false"
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
