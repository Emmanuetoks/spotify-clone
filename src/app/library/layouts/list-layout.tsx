import { Divider } from "@mui/material";
import React, { ReactNode } from "react";

const ListLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full table ">
      <div className="Library__table-header hidden remove-on-collapse ">
        <div className=" table-row font-medium text-xs px-4">
          <div className=" table-cell">
            <p className="text-white">Title</p>
          </div>
          <div className=" table-cell ">
            <p className="text-white w-full grid place-items-start">
              Date Added
            </p>
          </div>
          <div className=" table-cell">
            <p className="text-white grid w-full place-items-end pr-2">
              Played
            </p>
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
        </div>
      </div>
      <div className="table-row-group rounded">{children}</div>
    </div>
  );
};

export default ListLayout;
