import PlaylistMain from "./main";
import Header from "./header";
import { Suspense } from "react";

const DesktopLibrary = () => {
  // const LibDesktop = useRef<>(null)
  return (
    <div
      id="librarySection"
      className="Library--desktop bg-spotify-black-200 text-spotify-gray-200 py-5 flex-grow rounded-md space-y-2"
    >
      <Suspense fallback={<p>jjj</p>}>
        <Header />
        <div className="">

       
        <PlaylistMain />
        </div>
      </Suspense>
    </div>
  );
};

export default DesktopLibrary;
