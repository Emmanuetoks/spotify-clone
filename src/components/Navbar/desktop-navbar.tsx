"use client";
import React from "react";
import ActiveLink from "../ui/active-link";
import SpHome from "../icons/SpHome";
import SpSearchV1 from "../icons/SpSearchV1";
import SpSearchV2 from "../icons/SpSearchV2";
import SpHomeV2 from "../icons/SpHomeV2";

const DesktopNavBar = () => {
  return (
    <nav className=" bg-spotify-black-200 rounded-md">
      <div className="py-5 px-5 space-y-6">
        <ActiveLink href={"/"} className="nav-link active w-full group">
          {/* <GoHome size={"2rem"} /> */}
          <div className="flex w-fit items-center gap-5">
            <SpHome className="fill-spotify-gray-300 mx-auto group-hover:fill-white" />
            <SpHomeV2 className="fill-white hidden"/>
            <h5 className="text-spotify-gray-200 font-medium group-hover:text-white">
              Home
            </h5>
          </div>
        </ActiveLink>

        <ActiveLink href={"/search"} className="nav-link w-full flex group">
          {/* <BiSearchAlt size={"2rem"} /> */}
          <div className="flex w-fit items-center justify-center gap-5">
            <SpSearchV1 className="fill-spotify-gray-300 mx-auto group-hover:fill-white" />
            <SpSearchV2 className="fill-white hidden"/>
            <h5 className="text-spotify-gray-200 font-medium group-hover:text-white">
              Search
            </h5>
          </div>
        </ActiveLink>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
