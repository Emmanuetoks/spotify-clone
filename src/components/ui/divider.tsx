import React from "react";

type Props = {
  color?: string;
  className?:string
};
const Divider = ({ color, className }: Props) => {
  const tailwindPossibles = [color, className];
  return <hr className={`w-full border-spotify-gray-100 h-[0px] bg-spotify-gray-100 ${className}`} />;
};

export default Divider;
