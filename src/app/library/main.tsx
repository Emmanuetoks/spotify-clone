import React from "react";
import Search from "./search-library";
import FilterPlayList from "./filter-playlist";
import PlaylistCard from "./playlist-card";

const PlaylistMain = () => {
  return (
    <div className="library__main py-5 space-y-3">
      <nav className="library__navbar w-full flex justify-between">
        <Search />
        <FilterPlayList />
      </nav>

      <main>
        <PlaylistCard/>
      </main>
    </div>
  );
};

export default PlaylistMain;
