'use client'
import SongCard from "@/components/cards/song-card";
import React from "react";
import dummy from "@/images/spotify--2pac.jpg";
import { useParams } from "next/navigation";
import { TSectionIdParam } from "../../../../types/params";
const Section = () => {
  const sectionId:TSectionIdParam = useParams()

  
  return (
    <div className="Section-page h-full px-7 py-5">
      <h2 className="text-2xl font-semibold text-white">{}</h2>
      <div className="Section-page__contents w-full">
        <SongCard imgSrc={dummy} ImgAlt="2pac" />
      </div>
    </div>
  );
};

// const getStatic

export default Section;
