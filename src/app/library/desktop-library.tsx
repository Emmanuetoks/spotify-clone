import PlaylistMain from "./main";
import Header from "./header";
import { Suspense } from "react";
import { LibraryContextProvider } from "@/context/library-context";
import PlayListContextProvider from "@/context/playlist-context";
import Provider from "./layouts/provider";

const DesktopLibrary = () => {
  // const LibDesktop = useRef<>(null)
  return (
    <div
      id="librarySection"
      className="Library--desktop bg-spotify-black-200 text-spotify-gray-200 py-5 flex-grow rounded-md space-y-2 px-2"
    >
      <PlayListContextProvider>
        <Header />
        <div className="">
            <PlaylistMain />
        </div>
      </PlayListContextProvider>
    </div>
  );
};

export default DesktopLibrary;
