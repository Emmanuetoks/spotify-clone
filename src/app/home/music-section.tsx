import SongCard from "@/components/cards/song-card";
import Link from "next/link";

import { ReactNode } from "react";

type Props = {
  sectionName: string;
  sectionLink: string;
  cards?: { name: string; description: string }[];
  children: ReactNode;
};

const MusicSection = ({ sectionName, sectionLink, children }: Props) => {
  return (
    <section className="home__music-section space-y-4 w-full">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-2xl font-semibold text-white hover:underline cursor-pointer">
          {sectionName}
        </h2>

        <Link
          href={`/section${sectionLink}`}
          className="font-bold text-sm text-spotify-gray-200 hover:underline cursor-pointer"
        >
          Show all
        </Link>
      </div>
      <div className="home__card-container">
        {children}
        {/* I will use the  data gotten to render the playlists*/}
      </div>
    </section>
  );
};

export default MusicSection;
