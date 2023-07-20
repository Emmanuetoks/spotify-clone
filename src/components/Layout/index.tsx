import SplitPane from "react-split-pane";

import PlayListContextProvider from "@/context/playlist-context";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex w-full bg-black sm:p-2 gap-2 absolute inset-0 overflow-x-hidden">
      <PlayListContextProvider>

          {children}
      </PlayListContextProvider>
     </div>
  );
};

export default Layout;
