import { Divider } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Tracks = ({ children }: Props) => {
  return (
    <div className="track-table w-full table">
      <div className="table-header-group track-table__header w-full">
        <div className="table-row text-spotify-gray-100">
          <div className="table-cell">#</div>
          <div className="table-cell">Title</div>
          <div className="table-cell albulm">Albulm</div>
          <div className="table-cell date-added">Date added</div>
          <div className="table-cell duration">duration</div>
        </div>
        <Divider component={"div"} />
      </div>
        <div className="table-row-group">{children}</div>
    </div>
  );
};

export default Tracks;
