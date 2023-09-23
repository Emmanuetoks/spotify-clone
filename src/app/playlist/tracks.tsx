import { Divider } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Tracks = ({ children }: Props) => {
  return (
    <div className="track-table w-full table">
      <div className="table-header-group track-table__header w-full">
        <div className="table-row text-spotify-gray-900">
          <div className="table-cell">
            <p className="pl-2 grid w-full place-items-start">#</p>
            </div>
          <div className="table-cell">
            <p>Title</p>
          </div>
          <div className="table-cell album">
            <p>Album</p>
          </div>
          <div className="table-cell date-added">
            <p>Date added</p>
          </div>
          <div className="table-cell duration">
            <p className="pr-2 grid place-items-end">dur</p>
          </div>
        </div>

      </div>
      <div className="table-row remove-on-collapse">
          <div className="table-cell">
            <Divider className="bg-spotify-black-700 my-2" />
          </div>
          <div className="table-cell">
            <Divider className=" bg-spotify-black-700  my-2" />
          </div>
          <div className="table-cell">
            <Divider className=" bg-spotify-black-700 my-2" />
          </div>

          <div className="table-cell">
            <Divider className=" bg-spotify-black-700 my-2" />
          </div>

          <div className="table-cell">
            <Divider className=" bg-spotify-black-700 my-2" />
          </div>
        </div>
        <div className="table-row-group">{children}</div>
    </div>
  );
};

export default Tracks;
