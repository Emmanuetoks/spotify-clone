'use client'
import Link from "next/link";
import { createPortal } from "react-dom";
import { GoHome } from "react-icons/go";

const MobileNavBar = () => {

        return(<nav className="px-4 py-3 sm:hidden absolute left-0 right-0 bottom-0 h-auto bg-spotify-black-300 text-spotify-gray-200 z-20">
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
          <Link className='hover-white' href={"/library"}>
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
      </nav>)
      
  };

  export default MobileNavBar