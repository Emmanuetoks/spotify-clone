"use client";
import React, { MouseEventHandler, useContext, useState } from "react";
import { useEditModalState } from "@/context/editmodal";
import ContextMenu from "@/components/ui/context-menu";

const EditPlayList = () => {
  const openModal = useEditModalState() as () => void;
  //This components modal goes full screen in mobile viewports
  return (
    <button
      onClick={openModal}>
      <span>
        Edit PlayList
        </span>
    </button>
  );
};

export default EditPlayList;
