import SongCard from "@/components/cards/playlist-card";
import React from "react";
import dummy from "@/images/spotify--2pac.jpg";
import { useParams } from "next/navigation";
import { TSectionIdParam } from "../../../../types/params";
import { useQuery } from "@tanstack/react-query";
import { ServerDataResponse } from "../../../../types/serverResponseTypes.";
import PlaylistCard from "@/components/cards/playlist-card";

const getSections = async (id: string) => {
  const data = await fetch(`http://localhost:4000/api/v1/categories/${id}`);

  return data.json();
};

const Section = async ({
  params: { sectionID },
}: {
  params: { sectionID: string };
}) => {
  const data: ServerDataResponse = await getSections(sectionID);
  // fetch  All data for the section and render the cards
  if (!data) return <p>An Error has occured</p>;
  return (
    <div className="Section-page px-7 py-5 min-h-[90vh] space-y-5">
      <h2 className="text-2xl font-semibold text-white capitalize">{data.name}</h2>
      <div className="Section-page__contents w-full">
        {data.playlists.map((el) => (
          <PlaylistCard key={el.description} data={el} />
        ))}
      </div>
    </div>
  );
};

// const getStatic

export default Section;
