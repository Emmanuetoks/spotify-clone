"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PlayListContextType, PlaylistCard } from "../../../types/playlist";
import { usePlayLists } from "@/context/playlist-context";
import DialogBox from "@/components/ui/DialogBox";

const CreatePlayList = ({ openFunction }: { openFunction?: any }) => {
  const [newPlayListName, setNewPlayListName] = useState<{} | PlaylistCard>({});

  return (
    // // After adding new object, make API call to server to update user playlist

    <DialogBox>
      <DialogBox.Box dialogBoxName="create-playlist">
        <ButtonsBox />
      </DialogBox.Box>
      <DialogBox.Button
        className="library__add-playlist hover-white aspect-square hover:bg-spotify-black-100 outline-transparent hover:outline-spotify-black-100 active:bg-black active:outline-black rounded-[50%] outline-[5px] outline"
        nameOfBoxItOpens="create-playlist"
      >
        <AiOutlinePlus size={"1.4rem"} />
      </DialogBox.Button>
    </DialogBox>
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

const ButtonsBox = ({ closeFunction }: { closeFunction?: any }) => {
  const [playLists, dispatchPlayList] = usePlayLists() as PlayListContextType;
  const createPlayList = () => {
    const newPlayListName = playLists ? playLists.length + 1 : 1;
    dispatchPlayList({
      type: "add",
      payload: { name: `My Playlist #${newPlayListName}` },
    });
    closeFunction();
  };

  return (
    <div className="library__add-playlist-dialog-box bg-spotify-gray-100 p-1 rounded-md absolute top-full w-fit">
      <button
        onClick={createPlayList}
        className="text-white hover:bg-spotify-gray-200 p-2 text-sm whitespace-nowrap rounded-md"
      >
        Create New Playlist
      </button>
    </div>
  );
};

const MobileDialogBox = () => {};

export default CreatePlayList;
