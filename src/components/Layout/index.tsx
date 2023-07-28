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
      <div className="absolute inset-0 bg-black">
        <div className="flex w-full max-h-full sm:p-2 gap-2 overflow-x-hidden">
          <LibraryContextProvider>{children}</LibraryContextProvider>
        </div>
      </div>
      <WebPlayer />
    </PlayListContextProvider>
  );
};

export default Layout;
