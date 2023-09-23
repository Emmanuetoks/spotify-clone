import SongCard from "@/components/cards/playlist-card";
import React, { Suspense } from "react";
import SectionRow from "./music-section";
import dummyImage1 from "@/images/spotify--2pac.jpg";
import dummyImagw2 from "@/images/spotify--all-out.jpg";
import dummyImage3 from "@/images/spotify--billie.jpg";
import dummyImage4 from "@/images/spotify--gunna.jpg";
import dummyImage5 from "@/images/spotify--rema.jpg";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { nanoid } from "nanoid";
import { TPlayList } from "../../types/playlist";
import ArtistCard from "@/components/cards/artist-card";

//Fetch some of the data for the playlist  i think the limit is 10
//I will send an array of the category playlist

type Result = ({
  name: string;
  id?: string;
} & (
  | { type: "category"; playlists: TPlayList[] }
  | { type: "other"; items: any[] }
))[];

const getHomeFeed = async () => {
  const response = await fetch("http://localhost:4000/api/v1/users/feed");
  if (!response) {
    throw new Error(" Failed to fetch home feed");
  }

  return response.json();
};
const Home = async () => {
  const data: Result = (await getHomeFeed()).data;
if (!data) return <h3>An error has occured</h3>
  return (
    <div className="home space-y-8 px-7 py-5 min-h-[90vh]">
      <Suspense fallback={<p>Hello</p>}>
        {data.map((el) => (
          <SectionRow
            key={el.name}
            sectionID={el.id as string}
            sectionName={el.name}
          >
            {el.type === "category" &&
              el.playlists.map((el) => {
                switch (el.type) {
                  case "playlist":
                    return <SongCard key={el.description} data={el} />;
                  case "artist":
                    return <ArtistCard />;
                  default:
                    return null;
                }
              })}
          </SectionRow>
        ))}
      </Suspense>
    </div>
  );
};

//Fecth data serverSideProps
export default Home;
