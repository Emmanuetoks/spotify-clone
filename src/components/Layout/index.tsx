// import SplitPane from "react-split-pane";

import PlayListContextProvider from "@/context/playlist-context";
import { LibraryContextProvider } from "@/context/library-context";
import WebPlayer from "../web-player";
import AuthContextProvider from "@/context/auth-context";
import WebPlayerContextProvider from "@/context/web-player-context";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <PlayListContextProvider>
      <div className="flex flex-col absolute inset-0 bg-black">
        <div className="flex-grow flex w-full h-[90%] sm:p-2 gap-2 overflow-x-hidden">
          <AuthContextProvider>
            <WebPlayerContextProvider>
              <LibraryContextProvider>{children}</LibraryContextProvider>
            </WebPlayerContextProvider>
          </AuthContextProvider>
        </div>
        <WebPlayer />
      </div>
    </PlayListContextProvider>
  );
};

export default Layout;
