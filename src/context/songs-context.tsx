import { ReactNode, createContext, useContext, useReducer } from "react";
import { TReducerAction, TSong, TSongContext } from "../../types/songs";

const SongsContext = createContext<TSongContext | null>(null);

const SongsContextProvider = ({
  playListId,
  children,
}: {
  children: ReactNode;
  playListId: string;
}) => {
  //Mae API Call to get the sonngs rrelated to the playLists
  const reducer = (state: TSong[], action: TReducerAction) => {
    return [{ name: "Kabuto" }];
  };

  const [songs, dispatch] = useReducer(reducer, [{ name: "Kabuto" }]);

  return <SongsContext.Provider value={}>{children}</SongsContext.Provider>;
};


const usePlayListSongs = () => {
    const context = useContext(SongsContext)
    return context
}