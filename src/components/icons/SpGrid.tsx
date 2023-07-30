import React from "react";
import { SpIcons } from "../../../types/spIcons";

const SpGrid = ({ size = 24, className }: SpIcons) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className={className}
    >
      {" "}
      <path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path>
    </svg>
  );
};

export default SpGrid;
