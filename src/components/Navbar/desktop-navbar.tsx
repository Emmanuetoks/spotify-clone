"use client";
import React from "react";
import ActiveLink from "../ui/active-link";
import SpHome from "../icons/SpHome";
import SpSearchV1 from "../icons/SpSearchV1";
import SpSearchV2 from "../icons/SpSearchV2";

const DesktopNavBar = () => {
  return (
    <nav className=" bg-spotify-black-200 rounded-md">
      <div className="py-5 px-5 space-y-6">
        <ActiveLink href={"/"} className="nav-link active w-full group">
          {/* <GoHome size={"2rem"} /> */}
          <div className="flex w-fit items-center gap-5">
            <SpHome className="fill-white mx-auto" />
            <h5 className="text-spotify-gray-200 font-medium group-hover:text-white">
              Home
            </h5>
          </div>
        </ActiveLink>

        <ActiveLink href={"/"} className="nav-link w-full flex group">
          {/* <BiSearchAlt size={"2rem"} /> */}
          <div className="search flex w-fit items-center justify-center gap-5">
            <SpSearchV1 className="fill-white mx-auto" />
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
