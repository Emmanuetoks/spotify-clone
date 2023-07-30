import React from "react";
import SpBackward from "../icons/SpBackward";

const PreviousTrack = () => {
  return (
    <button className="fill-spotify-gray-200 w-[1rem] aspect-square grid place-items-center">
      <SpBackward size={16} />
    </button>
  );
};

export default PreviousTrack;
