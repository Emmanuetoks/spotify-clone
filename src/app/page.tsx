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
console.log(data[0].type ==='category');

  return (
    <div className="home space-y-8 px-7 py-5">
      <Suspense key={nanoid()} fallback={<p>Hello</p>}>
        {data.map((el) => (
          <SectionRow
            key={nanoid()}
            sectionID={el.id as string}
            sectionName={el.name}
          >
            {el.type === "category" &&
              el.playlists.map((el) => (
                <SongCard
                 key={el.description}
                 data={el}
                />
              ))}
          </SectionRow>
        ))}
      </Suspense>
    </div>
  );
};

//Fecth data serverSideProps
export default Home;
