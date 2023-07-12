import { BiLibrary, BiSearch } from "react-icons/bi";
import Search from "./search-library";
import FilterPlayList from "./filter-playlist";
import CreatePlayList from "./create-playlist";
import PlaylistMain from "./main";

const DesktopLibrary = () => {
  return (
    <div className="library bg-spotify-black-200 text-spotify-gray-200 font-medium py-5 px-7 flex-grow rounded-md">
      <div className="flex items-center w-full justify-between">
        <h5 className="flex gap-4 items-center hover-white cursor-pointer">
          <BiLibrary size={"2rem"} />
          <span>Your Library</span>
        </h5>

        <CreatePlayList />
      </div>

      <button className="bg-spotify-black-100 rounded-lg px-3 mt-4 py-2">
        Playlists
      </button>

      <PlaylistMain />
    </div>
  );
};

export default DesktopLibrary;
