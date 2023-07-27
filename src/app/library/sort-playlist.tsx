import React, { MouseEventHandler, useRef, useState } from "react";
import { Popper } from "@mui/material";
const SortPlayList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const sortButton = useRef<HTMLButtonElement | null>(null);

  const filterPlayList:MouseEventHandler = (e) => {

  }
  return (
    <>
      <button ref={sortButton} onClick={() => setOpen(pre => !pre)}></button>
      <Popper open={open} anchorEl={sortButton.current}></Popper>
    </>
  );
};

export default SortPlayList;
