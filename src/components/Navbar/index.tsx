import React from "react";
import Link from "next/link";
import DesktopLibrary from "@/app/library/desktop-library";
import { GoHome } from "react-icons/go";
import {BiSearchAlt} from 'react-icons/bi'
const Index = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

const DesktopNavBar = () => {
  return (
    <aside className="hidden sm:flex flex-col gap-2 min-w-[8rem] w-[20rem] max-w-[50rem] resize-x overflow-hidden">
      <nav className=" bg-spotify-black-200 rounded-md">
        <div className="py-5 px-7 space-y-6 text-spotify-gray-200 font-medium">
          <div className="nav-link hover-white">
            <Link href={"/"} className="flex w-full items-center gap-5">
              <GoHome size={"2rem"} />
              <span>Home</span>
            </Link>
          </div>
          <div className="nav-link hover-white">
            <Link href={"/"} className="flex w-full items-center gap-5">
                <BiSearchAlt size={'2rem'}/>
              <span>Search</span>
            </Link>
          </div>
        </div>
      </nav>
      <DesktopLibrary />
    </aside>
  );
};

const MobileNavBar = () => {
  return (
    <nav className="px-4 py-3 sm:hidden absolute left-0 right-0 bottom-0 h-auto bg-spotify-black-300 text-spotify-gray-200">
      <div className="flex justify-between px-5">
        <Link className='hover-white' href={"/"}>
          <div className="flex flex-col w-fit justify-center items-center">
            <GoHome size={'1.8rem'}/>
            <p className="text-[0.7rem]">Home</p>
          </div>
        </Link>
        <Link className='hover-white' href={"/"}>
          <div className="flex flex-col w-fit justify-center items-center">
            <GoHome size={'1.8rem'}/>
            <p className="text-[0.7rem]">Search</p>
          </div>
        </Link>
        <Link className='hover-white' href={"/"}>
          <div className="flex flex-col w-fit justify-center items-center">
            <GoHome size={'1.8rem'}/>
            <p className="text-[0.7rem]">Your Library</p>
          </div>
        </Link>
        <Link className='hover-white' href={"/"}>
          <div className="flex flex-col w-fit justify-center items-center">
            <GoHome size={'1.8rem'}/>
            <p className="text-[0.7rem]">Premium</p>
          </div>
        </Link>
        {/* <Link href={"/"}>Search</Link>
        <Link href={"/"}>Your Library</Link>
        <Link href={"/"}>Premium</Link> */}
      </div>
    </nav>
  );
};
export default Index;
