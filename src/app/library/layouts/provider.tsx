"use client";
import { useQuery } from "@tanstack/react-query";
import { TPlayList } from "../../../../types/playlist";
import { getLibraryPlaylists } from "@/utils/getLibraryPlaylists";
import { useEffect } from 'react';
import { usePlayLists } from "@/context/playlist-context";
import { log } from "console";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useQuery(
    ["Myer Rea554ct qUgtrtgrggERY"],
    getLibraryPlaylists("31jot2higkppu3flg2y6ngi7tpr4")
  );
  if (isLoading) return <h1>It is Loading</h1>;
  console.log(data);
  
  if (!data) return <h1>An Error has Occuured</h1>;
  return <Manner data={data}>{children}</Manner>;
};

const Manner = ({
  data,
  children,
}: {
  data: any;
  children: React.ReactNode;
}) => {
  const [, setPlaylist] = usePlayLists().libraryPlaylists;
  useEffect(() => {
    setPlaylist({ type: "set", payload: data.data });
  }, [setPlaylist, data]);
  return children;
};

export default Provider;