import React from "react";
import PlaylistMain from "./main";
import CreatePlayListBtn from "./create-playlist";
import Search from "./search-library";
import LayoutControllers from "./library-layout";
import { LibraryContextProvider } from "@/context/library-context";

//This page will not be found when in desktop mode
const Library = () => {
  return (
    
      <div className="Library--mobile space-y-4 px-7 py-5">
        <header className="library__header flex justify-between">
          <h5 className="text-white font-medium text-2xl">Your Library</h5>
          <div className="flex text-spotify-gray-100 items-center gap-5">
            <Search />
            <CreatePlayListBtn />
          </div>
        </header>

        <div>
          <div className="flex justify-between w-full">
            <LayoutControllers />
          </div>
          
          <PlaylistMain />
        </div>
      </div>

  );
};

export default Library;
