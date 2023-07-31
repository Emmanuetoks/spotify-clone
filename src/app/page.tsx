import SongCard from "@/components/cards/song-card";
import React from "react";
import MusicSection from "./home/music-section";
import dummyImage1 from "@/images/spotify--2pac.jpg";
import dummyImagw2 from "@/images/spotify--all-out.jpg";
import dummyImage3 from "@/images/spotify--billie.jpg";
import dummyImage4 from "@/images/spotify--gunna.jpg";
import dummyImage5 from "@/images/spotify--rema.jpg";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { nanoid } from "nanoid";
//Fetch some of the data for the playlist  i think the limit is 10
//I will send an array of the category playlist

type Result = {
  name: string;
  sectionID: string;
  contents: {
    name: string;
    descritption: string;
    sourceID: string;
    imageSource: string;
  }[];
}[];
const page = ({ data }: { data: Result }) => {
  return (
    <div className="home space-y-8 px-7 py-5">
      {data.map((el) => (
        <MusicSection key={nanoid()} sectionLink="dfd" sectionName="dfd">
          {el.contents.map((el) => (
            <SongCard
              key={nanoid()}
              imgSrc={dummyImage1}
              ImgAlt="sdsd"
              sourceID="sds"
              firstTrack={{ name: "" }}
            />
          ))}
        </MusicSection>
      ))}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("localhost:3000/api/v1/user/hom");

  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

//Fecth data serverSideProps
export default page;
