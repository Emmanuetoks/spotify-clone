import { BiLibrary, BiSearch } from "react-icons/bi";
import Search from "./search-library";
import FilterPlayList from "./filter-playlist";
import PlaylistMain from "./main";
import Link from "next/link";
import Header from "./header";
import { useRef } from "react";

const DesktopLibrary = () => {
  // const LibDesktop = useRef<>(null)
  return (
    <div className="Library--desktop bg-spotify-black-200 text-spotify-gray-200 font-medium py-5 px-4 flex-grow rounded-md space-y-2">
      <Header />
      <PlaylistMain />
    </div>
  );
};

export default DesktopLibrary;
