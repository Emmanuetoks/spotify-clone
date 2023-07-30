// import SplitPane from "react-split-pane";

import PlayListContextProvider from "@/context/playlist-context";
import { LibraryContextProvider } from "@/context/library-context";
import WebPlayer from "../web-player";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <PlayListContextProvider>
      <div className="flex flex-col absolute inset-0 bg-black">
        <div className="flex-grow flex w-full h-[90%] sm:p-2 gap-2 overflow-x-hidden">
          <LibraryContextProvider>{children}</LibraryContextProvider>
        </div>
      <WebPlayer />
      </div>
    </PlayListContextProvider>
  );
};

export default Layout;
