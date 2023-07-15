import React from "react";
import PlaylistMain from "./main";
import CreatePlayListBtn from "./create-playlist";
import Search from "./search-library";

//This page will not be found when in desktop mode
const Library = () => {
  return (
    <div className="library space-y-4 px-7 py-5">
      <header className="library__header flex justify-between">
        <h5 className="text-white font-medium text-2xl">Your Library</h5>
        <div className="flex text-spotify-gray-100 items-center gap-5">
          <Search />
          <CreatePlayListBtn />
        </div>
      </header>
      <PlaylistMain />
    </div>
  );
};

export default Library;
