import DialogBox from "@/components/ui/DialogBox";
import Divider from "@/components/ui/divider";
import OptionsButton from "@/components/ui/option-button";
import React from "react";
import PlayListOptions from "./playlist-options";

const Main = () => {
  return (
    <main className="playlist__main bg-spotify-black-100">
      <div className="space-y-3">
        <PlayListOptions />
        <div className="mt-5">
          <Divider />
          Play
        </div>

        <div className="flex justify-between"></div>
      </div>
    </main>
  );
};

export default Main;
