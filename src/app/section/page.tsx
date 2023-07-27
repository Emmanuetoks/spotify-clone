import SongCard from "@/components/cards/song-card";
import React from "react";
import dummy from "@/images/spotify--2pac.jpg";
const Section = () => {
  return (
    <div className="Section-page h-full">
      <h2 className="text-2xl font-semibold text-white">Focus</h2>

      <div className="Section-page__contents w-full">

      <SongCard imgSrc={dummy} ImgAlt="2pac" />
      </div>
    </div>
  );
};

export default Section;
