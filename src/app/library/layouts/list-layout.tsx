import { Divider } from "@mui/material";
import React, { ReactNode } from "react";

const ListLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full table">
      <div className="table-header-group">
        <div className=" table-row font-mdeium text=sm">
          <div className=" table-cell">
            <p>Title</p>
          </div>
          <div className=" table-cell">
            <p>Date Added</p>
          </div>
          <div className=" table-cell">
            <p>Played</p>
          </div>
        </div>

        <Divider/>
      </div>

      <div className="table-row-group">
        {children}
      </div>
    </div>
  );
};

export default ListLayout;
