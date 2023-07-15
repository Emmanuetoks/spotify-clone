"use client";
import DialogBox from "@/components/ui/DialogBox";
import OptionsButton from "@/components/ui/option-button";
import React from "react";

const PlayListOptions = () => {
  return (
    <DialogBox>
      <DialogBox.Button nameOfBoxItOpens="playListOptions">
        <OptionsButton borderColor="bg-spotify-gray-200" />
      </DialogBox.Button>
      <DialogBox.Box dialogBoxName="playListOptions">
        <ButtonsBox />
      </DialogBox.Box>
    </DialogBox>
  );
};

const ButtonsBox = ({ closeFunction }: { closeFunction?: any }) => {
  const handleClixk = () => {
    closeFunction();
  };

  return (
    <div>
      <button onClick={handleClixk}>Edit PlayList</button>
    </div>
  );
};
export default PlayListOptions;
