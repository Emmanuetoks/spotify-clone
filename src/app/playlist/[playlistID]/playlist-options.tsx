"use client";
import DialogBox from "@/components/ui/DialogBox";
import OptionsButton from "@/components/ui/option-button";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import EditPlayList from "./edit-playlist";
import { Popper } from "@mui/material";

const PlayListOptions = ({ openModal }: { openModal: () => void }) => {
  const playListOptionsBtn = useRef<HTMLButtonElement | null>(null);
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  return (
    <>
      <button
        ref={playListOptionsBtn}
        className=""
        onClick={() => setOpenPopper((preVal) => !preVal)}
      >
        <OptionsButton borderColor="bg-spotify-gray-200" />
      </button>
      <Popper open={openPopper} anchorEl={playListOptionsBtn.current} disablePortal={true} placement="top-start">
        <div className={'bg-spotify-black-400 p-1 rounded'}>
          <button className="text-white font-normal p-2 hover:bg-spotify-gray-100 rounded" onClick={openModal}>
            Edit PlayList
          </button>
        </div>
      </Popper>
    </>
  );
};

export default PlayListOptions;
