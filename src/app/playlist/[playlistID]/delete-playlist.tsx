import { usePlayLists } from '@/context/playlist-context'
import React, { Dispatch, MouseEventHandler, useState } from 'react'
import { BsLayoutTextSidebar } from 'react-icons/bs'
import { PlayListAction, PlayListContextType } from '../../../../types/playlist'
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { useParams, useSearchParams } from 'next/navigation'
const DeletePlayList = () => {
    const id = useSearchParams().get('is') as string
    const [playlists ,setPlayLists] = usePlayLists() as PlayListContextType
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const deletePlayList:MouseEventHandler<HTMLButtonElement> = (e) => {
        const deleteAction:PlayListAction = {type:'delete', payload:{playlist_id:playlists[Number(id)].playlist_id}}     
        
        setPlayLists(deleteAction)
        setOpenDialog(false)
    }
  return (
    <>
    <button onClick={() => setOpenDialog(true)}>
        <span>Delete Playlist</span>
    </button>

    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
            <p>Are you sure you want to delete</p>
        </DialogContent>

        <DialogActions>
          <Button onClick={deletePlayList}>
              Yes
          </Button>

          <Button onClick={() => setOpenDialog(false)} >
            No
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default DeletePlayList