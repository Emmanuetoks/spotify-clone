import LikeBtn from "@/components/ui/like-btn";
import React from "react";

type Props = {
  position?: string;
  image: {
    url: string;
  };
  name?: string;
  album?: string;
  dateAdded?: string;
  duration?: string;
  artist?: string;
};

const TrackCard = ({
  position,
  image,
  artist,
  name,
  album,
  dateAdded,
  duration,
}: Props) => {
  return (
    <div className="table-row">
      <div className="table-cell">{position}</div>
      <div className="table-cell">
        <div className="flex gap-2">
          <div className="track__cover w-8 aspect-square"></div>
          <div className="flex flex-col justify-between items-start h-full">
            <p className=" text-[1.5rem]">{name}</p>
            <p className=" text-[1rem]">{artist}</p>
          </div>
        </div>
      </div>
      <div className="table-cell">
        <p>{album}</p>
      </div>
      <div className="table-cell">
        <p>{dateAdded}</p>
        <LikeBtn />
      </div>

      <div>{duration}</div>
    </div>
  );
};

export default TrackCard;
