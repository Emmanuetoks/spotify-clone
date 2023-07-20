"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContextType } from "../../../types/playlist";
import { usePlayLists } from "@/context/playlist-context";
import { nanoid } from "nanoid";
import { Popper } from "@mui/material";
import SpMusicNote from "@/components/icons/SpMusicNote";
import SpMusicNoteWithAdd from "@/components/icons/SpMusicNoteWithAdd";
const AddPlayList = ({ openFunction }: { openFunction?: any }) => {
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  const addBtn = useRef<null | HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={addBtn}
        onClick={() => setOpenPopper((prevVal) => !prevVal)}
        className="library__add-playlist hover-white aspect-square hover:bg-spotify-black-100 outline-transparent hover:outline-spotify-black-100 active:bg-black active:outline-black rounded-[50%] outline-[5px] outline"
      >
        <AiOutlinePlus size={"1.4rem"} />
      </button>
      <Popper open={openPopper} anchorEl={addBtn.current}>
        <ContextMenu closePopper={setOpenPopper} />
      </Popper>
    </>
  );
};

const ContextMenu = ({
  closePopper,
}: {
  closePopper: Dispatch<SetStateAction<boolean>>;
}) => {
  const [playLists, dispatchPlayList] = usePlayLists() as PlayListContextType;
  const createPlayList = () => {
    // After adding new object, make API call to server to update user playlist
    const newPlayListName = playLists ? playLists.length + 1 : 1;
    dispatchPlayList({
      type: "add",
      payload: {
        name: `My Playlist #${newPlayListName}`,
        playlist_id: nanoid(),
      },
    });
    closePopper(false);
  };

  return (
    <ul className="library__add-playlist-dialog-box bg-spotify-black-400 p-1 rounded-md absolute top-full w-fit">
      <li>
        <button
          onClick={createPlayList}
          className="text-white hover:bg-spotify-black-700 p-2 text-sm whitespace-nowrap rounded-md spaxe-x-4"
        >
          <span>

          <SpMusicNoteWithAdd className="fill-white inline" size={18}/>
          </span>
          <span>Create New Playlist</span>
        </button>
      </li>
    </ul>
  );
};

export default AddPlayList;
