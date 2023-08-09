import { Divider } from "@mui/material";
import React, { ReactNode } from "react";

const ListLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full table">
      <div className="Library__table-header hidden remove-on-collapse">
        <div className=" table-row font-medium text-xs p-2">
          <div className=" table-cell">
            <p className="text-white">Title</p>
          </div>
          <div className=" table-cell ">
            <p className="text-white w-full grid place-items-left">Date Added</p>
          </div>
          <div className=" table-cell">
            <p className="text-white grid w-full place-items-right">Played</p>
          </div>
        </div>

      </div>
      <Divider className="my-3 remove-on-collapse"/>

      <div className="table-row-group rounded">
        {children}
      </div>
    </div>
  );
};

export default ListLayout;
