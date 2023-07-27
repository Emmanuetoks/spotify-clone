import SongCard from "@/components/cards/song-card";
import React from "react";
import MusicSection from "./home/music-section";

const page = () => {
  return (
    <div className="home space-y-8 px-7 py-5">
      <MusicSection sectionName="Focus"/>
      <MusicSection sectionName="Throwback"/>
      <MusicSection sectionName="Sad Songs"/>
      <MusicSection sectionName="Anime"/>
    </div>
  );
};

export default page;
