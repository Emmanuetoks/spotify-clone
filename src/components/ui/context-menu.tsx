import React, { MouseEventHandler, ReactNode } from "react";

const ContextMenu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-spotify-black-400 p-1 rounded-md top-full w-fit shadow-lg">
      <ul>
      {children}
      </ul>
    </div>
  );
};

const ContextMenuOption = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <li className={`whitespace-nowrap text-white hover:bg-spotify-black-700 p-2 text-sm rounded spaxe-x-4 ${className}`}>
        {children}
    </li>
  );
};

ContextMenu.ContextMenuOption = ContextMenuOption;

export default ContextMenu;
