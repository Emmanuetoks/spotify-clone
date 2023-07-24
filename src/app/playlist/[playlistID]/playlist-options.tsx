"use client";

import OptionsButton from "@/components/ui/option-button";
import React, { useRef, useState } from "react";
import { Popper } from "@mui/material";
import EditPlayList from "./edit-playlist";
import DeletePlayList from "./delete-playlist";
import ContextMenu from "@/components/ui/context-menu";

const PlayListOptions = () => {
  const playListOptionsBtn = useRef<HTMLButtonElement | null>(null);
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  return (
    <>
      <button
        ref={playListOptionsBtn}
        className="w-6 place-items-center hover:text-white aspect-square rounded-full hover:bg-spotify-black-100 active:bg-black outline-transparent outline-2 hover:outline-spotify-black-100 active:outline-black outline grid"
        onClick={() => setOpenPopper((preVal) => !preVal)}
      >
        <OptionsButton borderColor="bg-spotify-gray-200" />
      </button>
      <Popper
        open={openPopper}
        anchorEl={playListOptionsBtn.current}
        disablePortal={true}
        placement="top-start"
      >
        <OptionsContextMenu />
      </Popper>
    </>
  );
};

const OptionsContextMenu = () => {
  return (
    <ContextMenu>
      <ContextMenu.ContextMenuOption>
        <EditPlayList />
      </ContextMenu.ContextMenuOption>

      <ContextMenu.ContextMenuOption>
        <DeletePlayList />
      </ContextMenu.ContextMenuOption>
    </ContextMenu>
  );
};
export default PlayListOptions;
