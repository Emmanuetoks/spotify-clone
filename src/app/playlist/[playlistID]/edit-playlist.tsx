"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
} from "@mui/material";
import { PlayListContextType } from "../../../../types/playlist";
import { usePlayLists } from "@/context/playlist-context";
// import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";


const EditPlayList = () => {

  //This components modal goes full screen in mobile viewports
  return (
    <>

      {/* <Dialog open={openEditModal} onClose={closeModal} className='bg-spotify-black-100 p-3' slot='backdrop' slot>
        <div className='flex justify-between mb-4'>
        <DialogTitle className='font-medium text-2xl'>
            Edit Details
        </DialogTitle>
            <Button onClick={closeModal}>X</Button>
        </div>
        <DialogContent>
            Edit Me
        </DialogContent>
    </Dialog> */}
    </>
  );
};

export default EditPlayList;
