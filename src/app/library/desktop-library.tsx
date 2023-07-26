import PlaylistMain from "./main";
import Header from "./header";

const DesktopLibrary = () => {
  // const LibDesktop = useRef<>(null)
  return (
    <div id="librarySection" className="Library--desktop bg-spotify-black-200 text-spotify-gray-200 font-medium py-5 px-4 flex-grow rounded-md space-y-2">
      <Header />
      <PlaylistMain />
    </div>
  );
};

export default DesktopLibrary;
