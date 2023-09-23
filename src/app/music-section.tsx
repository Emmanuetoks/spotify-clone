import SongCard from "@/components/cards/playlist-card";
import Link from "next/link";

import { ReactNode } from "react";

type Props = {
  sectionName: string;
  sectionID: string;
  children: ReactNode;
};

const SectionRow = ({ sectionName, sectionID, children }: Props) => {
  return (
    <section className="home__music-section space-y-4 w-full">
      <div className="flex w-full justify-between items-center">
        <Link
          href={`/section/${sectionID}`}
          className="text-2xl font-bold text-white hover:underline cursor-pointer capitalize"
        >
          {sectionName}
        </Link>

        <Link
          href={`/section/${sectionID}`}
          className="font-bold text-sm text-spotify-gray-800 hover:underline cursor-pointer"
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

export default SectionRow;
