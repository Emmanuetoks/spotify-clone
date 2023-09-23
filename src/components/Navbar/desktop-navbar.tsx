"use client";
import React, { useState } from "react";
import ActiveLink from "../ui/active-link";
import SpHome from "../icons/SpHome";
import SpSearchV1 from "../icons/SpSearchV1";
import SpSearchV2 from "../icons/SpSearchV2";
import SpHomeV2 from "../icons/SpHomeV2";

const DesktopNavBar = () => {
  const [activeBar, setActiveBar] = useState('home')
  return (
    <nav className=" bg-spotify-black-200 rounded-md">
      <div className="py-5 px-5 space-y-6">
        <ActiveLink onClick={() => setActiveBar('home')} href={"/"} className="nav-link active w-full group">
          {/* <GoHome size={"2rem"} /> */}
          <div className="flex w-fit items-center gap-5">
            <SpHome className="active fill-white hidden"/>
            <SpHomeV2 className={`normal fill-spotify-gray-200 mx-auto group-hover:fill-white`} />
            <h5 className={`${activeBar==='home'?'text-spotify-gray-900':'text-spotify-gray-600'}   font-bold group-hover:text-[#fff]`}>
              Home
            </h5>
          </div>
        </ActiveLink>

        <ActiveLink onClick={() => setActiveBar('search')} href={"/search"} className="nav-link w-full flex group">
          {/* <BiSearchAlt size={"2rem"} /> */}
          <div className="flex w-fit items-center justify-center gap-5">
            <SpSearchV1 className={`normal fill-spotify-gray-200 mx-auto group-hover:fill-white`} />
            <SpSearchV2 className="active fill-white hidden"/>
            <h5 className={`${activeBar==='search'?'text-spotify-gray-900':'text-spotify-gray-600'} text-spotify-gray-200 font-bold group-hover:text-[#fff]`}>
              Search
            </h5>
          </div>
        </ActiveLink>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
