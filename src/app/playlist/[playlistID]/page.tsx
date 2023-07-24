"use client";
import Divider from "@/components/ui/divider";
import React, { MouseEventHandler, useContext, useState } from "react";
import Header from "./header";
import Main from "./main";
import { useRouter } from "next/navigation";

import { usePlayLists } from "@/context/playlist-context";
import { PlayListContextType } from "../../../../types/playlist";
import { GetServerSideProps, GetStaticProps } from "next";
import { Modal } from "@mui/material";
import EditModal from "./editmodal";
import { createContext } from "react";
import { EditModalProvider } from "@/context/editmodal";

const Playlist = () => {
  // const [, setPlayLists] = usePlayLists() as PlayListContextType
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const closeModal: () => void = () => setOpenEditModal(false);
  const openModal: MouseEventHandler = () => setOpenEditModal(true);
  return (
    <div
      id="PlayListPage"
      className="playlist-page bg-gradient-to-b from-spotify-gray-300 from-10% to-spotify-black-900 to-30% min-h-[100vh] flex flex-col w-full"
    >
      <EditModalProvider value={openModal}>
        <Header />
        <Main />
      </EditModalProvider>

      <EditModal openEditModal={openEditModal} closeModal={closeModal} />
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: "ahmed",
    },
  };
};
// const getStatic
export default Playlist;
