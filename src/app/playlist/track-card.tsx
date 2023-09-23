import LikeBtn from "@/components/ui/like-btn";
import React from "react";

type Props = {
  position?: string;
  image?: {
    url: string;
  };
  name?: string;
  album?: string;
  dateAdded?: string;
  duration?: string;
  artist?: string;
};

const TrackCard = ({
  position = "1",
  image,
  artist = "the WORLD",
  name = "Nightmare",
  album = "thw WORLD Ruler",
  dateAdded = "2 weeks ago",
  duration = "3:48",
}: Props) => {
  return (
    <div className="track-card table-row hover:bg-[#ffffff1a]">
      <div className="table-cell ">
        <p className="pl-2 grid w-full place-items-center text-spotify-gray-900 h-full py-4">
          {position}
        </p>
      </div>
      <div className="table-cell">
          <div className="flex gap-2 items-center h-full">
            <div className="track__cover aspect-square bg-spotify-black-900"></div>
            <div className="flex flex-col justify-between items-start h-full text-spotify-gray-800 font-normal">
              <p className=" text-base text-white">{name}</p>
              <p className=" text-base">{artist}</p>
            </div>
          </div>
      </div>
      <div className="table-cell album text-spotify-gray-900">
        <p className='w-full grid place-items-start py-4'>{album}</p>
      </div>
      <div className="table-cell date-added text-spotify-gray-800">
        <p>{dateAdded}</p>
      </div>

      <div className="table-cell duration text-spotify-gray-800">
        <p className="w-full grid place-items-end">{duration}</p>
      </div>
    </div>
  );
};

export default TrackCard;
