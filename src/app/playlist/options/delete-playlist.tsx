import { usePlayLists } from "@/context/playlist-context";
import React, { Dispatch, MouseEventHandler, useState } from "react";
import {
  TReducerAction,
  PlayListContextType,
} from "../../../../types/playlist";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {  useParams, usePathname, useRouter } from "next/navigation";
import { TPlaylistSearchParam } from "../../../../types/params";
const DeletePlayList = () => {
  const activePlayList= useParams() as TPlaylistSearchParam

  const [playlists, setPlayLists] = usePlayLists().libraryPlaylists 
  const playListName = playlists.find(el => el.id === activePlayList.playlistID)?.name 
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const router = useRouter()
  const deletePlayList: MouseEventHandler<HTMLButtonElement> = (e) => {
    const deleteAction: TReducerAction = {
      type: "delete",
      payload: { name: "", id: activePlayList.playlistID as string},
    };

    setPlayLists(deleteAction);
    setOpenDialog(false);

  };
  return (
    <>
      <button onClick={() => setOpenDialog(true)}>
        <span>Delete Playlist</span>
      </button>

      <Dialog
      sx={{'padding':'4rem'}}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        className="delete-dialog"
        
      >
        <DialogTitle className="title">
          Delete from Library?
        </DialogTitle>
        <DialogContent className="content">
          <p>Are you sure you want to delete <span className="font-bold text-black">{playListName}</span> from <span className="font-bold text-black">Your Library</span></p>
        </DialogContent>

         <DialogActions className="mt-3">
          <Button onClick={() => setOpenDialog(false)} className="cancel-btn">Cancel</Button>

          <Button onClick={deletePlayList} className="delete-btn">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeletePlayList;
