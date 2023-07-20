"use client";
import { usePlayLists } from "@/context/playlist-context";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PlayListContextType } from "../../../../types/playlist";
import { Modal, Paper } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import SpMusicNote from "@/components/icons/SpMusicNote";

type UpdateInput = {
  playlist_id: string;
  name: string;
  description: string;
};
const EditModal = ({
  openEditModal,
  closeModal,
}: {
  openEditModal: boolean;
  closeModal: () => void;
}) => {
  const playListId = usePathname().split("/")[2].split("?")[0];
  // const playListId = 'hhello'as string
  const playListIndex = useSearchParams().get("id") as string;

  const [playlists, setPlayLists] = usePlayLists() as PlayListContextType;
  const { register, handleSubmit } = useForm<UpdateInput>();
  //Get the date from the React Form hooks and inject it to the onSubmit function
  const onSubmit: SubmitHandler<UpdateInput> = (data) => {
    setPlayLists({
      type: "update",
      payload: { ...data, playlist_id: playListId },
    });
    closeModal();
  };
  return (
    <Modal open={openEditModal} onClose={closeModal}>
      <div className="bg-spotify-black-800 w-[30rem] p-5 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 space-y-3 rounded edit-modal">
        <div className="flex justify-between items-center">
          {/* On mobile, this row is reversed */}
          <h4 className="font-semibold text-white text-xl">Edit details</h4>
          <button
            onClick={closeModal}
            className="hover:text-white rounded-full p-2 active:bg-spotify-gray-100 text-spotify-gray-200"
          >
            <AiOutlineClose size={"1.2rem"} />
          </button>
          {/* There will be a save button here that will be invisibke on desktop */}
        </div>

        {/* On mobile, it is a flex column */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="playlist__edit-form space-y-2"
        >
          {/* <form  className="space-y-2 w-full"> */}
          <div className="flex gap-5">
            <div className="playlist__cover aspect-square w-2/5 bg-spotify-gray-300 shadow-md shadow-spotify-black-100 drop-shadow-xl flex justify-center items-center">
              <SpMusicNote className="fill-white" size={40}/>
            </div>
            <div className="playlist__edit-form flex flex-grow flex-col justify-between aspect-2/1 gap-5">
              <div
                id="playlistName"
                className="w-full relative before:font-medium before:text-xs before:text-white"
              >
                <input
                  // onClick={function(this:HTMLInputElement) {this.select()}}
                  className="rounded py-2 bg-spotify-black-700 text-white font-medium text-sm focus:outline-spotify-gray-100 focus:outline focus:outline-2 p-2 w-full placeholder:text-spotify-gray-200"
                  type="text"
                  defaultValue={playlists[Number(playListIndex)]?.name}
                  {...register("name")}
                  placeholder={playlists[Number(playListIndex)]?.name}
                />
              </div>
              {/* This text area becomes an option in mobile */}
              <textarea
                id="playlistDescription resize-none"
                className="w-full flex-grow rounded bg-spotify-black-700 text-white font-medium text-xs focus:outline-spotify-gray-100 focus:outline focus:outline-2 p-2 placeholder:text-spotify-gray-200 resize-none"
                placeholder="Add an optional description"
                {...register("description")}
              ></textarea>
            </div>
          </div>
          <div className="text-right">
            <button className="text-black rounded-3xl py-3 font-medium text-base bg-white w-[6rem]">
              Save
            </button>
          </div>
        </form>
        {/* </form> */}

        {/* Save button for desktop */}

        <div className="legal-stuff-text">
          <p className="text-xs text-white font-medium">
            By proceeding, you agree to give spotify access to all the cake in
            your fridge. Please make sure you have the right flavour in store.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
