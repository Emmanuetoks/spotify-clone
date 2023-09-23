import React from "react";

const Seeker = () => {
  return (
    <div className="seeker w-full flex items-center gap-1 px-[5rem]">
      <span className="start text-spotify-gray-900 text-xs">start</span>
      <div className="w-[100%] h-1 bg-spotify-green rounded-lg"></div>
      <span className="end text-spotify-gray-900 text-xs">end</span>
    </div>
  );
};

export default Seeker;
