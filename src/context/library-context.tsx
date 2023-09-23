'use client'
import { getLibraryPlaylists } from "@/utils/getLibraryPlaylists";
import { useQuery } from "@tanstack/react-query";
import {
  ReactNode,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// type TLibraryContext =
const LibraryContext = createContext<
  | [
      "gridLayout" | "listLayout",
      Dispatch<SetStateAction<"gridLayout" | "listLayout">>
    ]
  | null
>(null);

export const LibraryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [libraryLayout, setLibraryLayout] = useState<"gridLayout" | "listLayout">("listLayout");

   return (
    <LibraryContext.Provider value={[libraryLayout, setLibraryLayout]}>
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = () => {
  const context = useContext(LibraryContext) as [
    "gridLayout" | "listLayout",
    Dispatch<SetStateAction<"gridLayout" | "listLayout">>
  ];
  return context;
};
