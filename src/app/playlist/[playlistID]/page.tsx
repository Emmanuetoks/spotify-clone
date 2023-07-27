"use client";

import React, { MouseEventHandler, useContext, useState } from "react";
import Header from "./header";
import Main from "./main";
import { GetServerSideProps} from "next";
import EditModal from "./edit-details-modal";
import { EditModalProvider } from "@/context/editmodal";

const Playlist = () => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const closeModal: () => void = () => setOpenEditModal(false);
  const openModal: MouseEventHandler = () => setOpenEditModal(true);
  return (
    <div
      id="PlayListPage"
      className="playlist-page bg-gradient-to-b from-spotify-gray-300 from-10% via-spotify-black-900 via-40% to-spotify-black-200 to-80% min-h-[100vh] flex flex-col w-full"
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
