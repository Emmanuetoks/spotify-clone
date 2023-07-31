"use client";

import OptionsButton from "@/components/ui/option-button";
import React, { useRef, useState } from "react";
import { Popper } from "@mui/material";
import EditPlayList from "./edit-playlist";
import DeletePlayList from "./delete-playlist";
import ContextMenu from "@/components/ui/context-menu";
import SpOptions from "@/components/icons/SpOptions";

const PlayListOptions = () => {
  const playListOptionsBtn = useRef<HTMLButtonElement | null>(null);
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  return (
    <>
      <button
        ref={playListOptionsBtn}
        className="w-6 place-items-center aspect-square rounded-full fill-spotify-gray-700 hover:fill-white"
        onClick={() => setOpenPopper((preVal) => !preVal)}
      >
        <SpOptions size={32}  />
        
      </button>
      <Popper
        open={openPopper}
        anchorEl={playListOptionsBtn.current}
        disablePortal={true}
        placement="bottom-start"
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
