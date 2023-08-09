"use client";
import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import Header from "../header";
import Main from "../main";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import EditModal from "../edit-details-modal";
import { EditModalProvider } from "@/context/editmodal";
import { usePlayLists } from "@/context/playlist-context";
import { TPlaylistSearchParam } from "../../../../types/params";
import { useParams } from "next/navigation";
import { TPlayList } from "../../../../types/playlist";

const getPlaylist = async (playlistID: string) => {
  const response = await fetch(`localhost:4000/api/v1/playlists/${playlistID}`);
  return response.json();
};
const Playlist = () => {
  const { playlistInView, libraryPlaylists } = usePlayLists();
  const [playlist, setPlayListInView] = playlistInView;
  const { playlistID }: TPlaylistSearchParam = useParams();

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  //For now i will be using library playlist
  //But ideally the currentplayist should be fetched

  const closeModal: () => void = () => setOpenEditModal(false);
  const openModal: MouseEventHandler = () => setOpenEditModal(true);
  return (
    <div
      id="PlayListPage"
      className="playlist-page bg-gradient-to-b from-spotify-gray-300 from-10% via-spotify-black-900 via-40% to-spotify-black-200 to-80% min-h-full flex flex-col w-full"
    >
      <EditModalProvider value={openModal}>
        <Header />
        <Main />
      </EditModalProvider>

      <EditModal openEditModal={openEditModal} closeModal={closeModal} />
    </div>
  );
};

// const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
//   const response = await fetch(`localhost:3000/api/v1/${context.params?.playlistID}`)
//   const data = await response.json()

//   return {
//     props: {
//       data
//     }
//   }
// }
export default Playlist;
