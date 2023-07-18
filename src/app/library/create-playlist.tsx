"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContextType, PlaylistCard } from "../../../types/playlist";
import { usePlayLists } from "@/context/playlist-context";
import DialogBox from "@/components/ui/DialogBox";
import { nanoid } from "nanoid";
import { Popper } from "@mui/material";
const AddPlayList = ({ openFunction }: { openFunction?: any }) => {
  const [openPopper, setOpenPopper] = useState<boolean>(false)
  const addBtn = useRef<null | HTMLButtonElement >(null)
  return (
    <>
      <button ref={addBtn} onClick={()=>setOpenPopper(prevVal => !prevVal)} className="library__add-playlist hover-white aspect-square hover:bg-spotify-black-100 outline-transparent hover:outline-spotify-black-100 active:bg-black active:outline-black rounded-[50%] outline-[5px] outline">
           <AiOutlinePlus size={"1.4rem"} />

      </button>
      <Popper open={openPopper} anchorEl={addBtn.current}>
        <ButtonsBox closePopper={setOpenPopper}/>
      </Popper>
    </>
    // <DialogBox>
    //   <DialogBox.Box dialogBoxName="create-playlist">
    //     <ButtonsBox />
    //   </DialogBox.Box>
    //   <DialogBox.Button
    //     
    //     nameOfBoxItOpens="create-playlist"
    //   >
    //   </DialogBox.Button>
    // </DialogBox>
    // <div className="relative w-fit h-fit">

    // </div>
  );
};

// const CreatePlayListBtn = ({
//   openFunction,
//   children,
//   className,
// }: {
//   openFunction?: any;
//   children: React.ReactNode;
//   className: string;
// }) => {
//   const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

//   const handleDialogBoxState = () => {
//     setDialogBoxOpen(!dialogBoxOpen);
//     dialogBoxOpen ? openFunction("create-playlist") : openFunction("");
//   };

//   return (
//     <button onClick={handleDialogBoxState} className={className}>
//       {children}
//     </button>
//   );
// };

const ButtonsBox = ({ closePopper }: { closePopper: Dispatch<SetStateAction<boolean>> }) => {
  const [playLists, dispatchPlayList] = usePlayLists() as PlayListContextType;
  const createPlayList = () => {
    // // After adding new object, make API call to server to update user playlist
    const newPlayListName = playLists ? playLists.length + 1 : 1;
    dispatchPlayList({
      type: "add",
      payload: { name: `My Playlist #${newPlayListName}`, playlist_id:nanoid() },
    });
    closePopper(false);
  };

  return (
    <div className="library__add-playlist-dialog-box bg-spotify-black-400 p-1 rounded-md absolute top-full w-fit">
      <button
        onClick={createPlayList}
        className="text-white hover:bg-spotify-gray-100 p-2 text-sm whitespace-nowrap rounded-md"
      >
        Create New Playlist
      </button>
    </div>
  );
};

const MobileDialogBox = () => {};

export default AddPlayList;
