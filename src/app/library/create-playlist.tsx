"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { usePlayLists } from "@/context/playlist-context";
import { nanoid } from "nanoid";
import { Popper } from "@mui/material";
import SpMusicNoteWithAdd from "@/components/icons/SpMusicNoteWithAdd";
import ContextMenu from "@/components/ui/context-menu";

const AddPlayList = ({ openFunction }: { openFunction?: any }) => {
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  const addBtn = useRef<null | HTMLButtonElement>(null);
  return (
    <div className="w-6 place-items-center hover:text-white aspect-square rounded-full hover:bg-spotify-black-100 active:bg-black outline-transparent outline-2 hover:outline-spotify-black-100 active:outline-black outline grid">
      <button
        ref={addBtn}
        onClick={() => setOpenPopper((prevVal) => !prevVal)}
        className="library__add-playlist"
      >
        <AiOutlinePlus size={"1.4rem"} />
      </button>
      <Popper open={openPopper} anchorEl={addBtn.current} placement="bottom">
        <CreateContextMenu closePopper={setOpenPopper} />
      </Popper>
    </div>
  );
};

const CreateContextMenu = ({
  closePopper,
}: {
  closePopper: Dispatch<SetStateAction<boolean>>;
}) => {
  const [playLists, setPlayLists] = usePlayLists().libraryPlaylists;
  const createPlayList = () => {
    // After adding new object, make API call to server to update user playlist
    const newPlayListName = playLists ? playLists.length + 1 : 1;
    setPlayLists({
      type: "add",
      payload: {
        name: `My Playlist #${newPlayListName}`,
        id: nanoid(),
        owner:'Emmanuel Toks',
        type:'Playlist',
        
      },
    });
    closePopper(false);
  };

  return (
    <ContextMenu>
      <ul className="library__add-playlist-dialog-box">
        <ContextMenu.ContextMenuOption>
          <button onClick={createPlayList} className="flex items-center gap-2">
            <span>
              <SpMusicNoteWithAdd className="fill-white inline" size={18} />
            </span>
            <span>Create New Playlist</span>
          </button>
        </ContextMenu.ContextMenuOption>
      </ul>
    </ContextMenu>
  );
};

export default AddPlayList;
