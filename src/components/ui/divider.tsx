import React from "react";

type Props = {
  color?: string;
  className?:string
};
const Divider = ({ color, className }: Props) => {
  const tailwindPossibles = [color, className];
  return <hr className={`w-full border-${color} h-[0px] ${className}`} />;
};

export default Divider;
