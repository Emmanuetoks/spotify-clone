import DialogBox from "@/components/ui/DialogBox";
import Divider from "@/components/ui/divider";
import OptionsButton from "@/components/ui/option-button";
import React from "react";
import PlayListOptions from "./playlist-options";

const Main = () => {
  return (
    <main className="playlist__main w-full flex-grow p-7">
      <div className="space-y-3">
        <PlayListOptions />
        <div className="pt-10 space-y-3">
          <Divider />
          <h3 className="text-white font-bold text-xl">Let find something for your playlist</h3>
        </div>

        <div className="playlist__songs flex justify-between bg-spotify-black-200">

        </div>
      </div>
    </main>
  );
};

export default Main;
