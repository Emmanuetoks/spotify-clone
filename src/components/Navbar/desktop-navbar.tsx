import DesktopLibrary from "@/app/library/desktop-library";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import SpHome from "../icons/SpHome";
import SpSearchV1 from "../icons/SpSearchV1";
import toggleIconState from "@/utils/toggleIconState";

const DesktopNavBar = () => {
  return (
    <aside className="sidebar min-w-[5rem] max-[800px]:w-[5rem] hidden sm:flex flex-col gap-2 min-[800px]:min-w-[14.37rem] min-[800px]:w-[25rem] min-[800px]:max-w-[70%] resize-x overflow-y-auto h-full">
      <nav className=" bg-spotify-black-200 rounded-md">
        <div className="py-5 px-5 space-y-6 text-spotify-gray-200 font-medium"> 
          <div className="hover-white pl-1">
            <Link
              href={"/"}
              className="nav-link flex w-full items-center gap-5 "
            >
              {/* <GoHome size={"2rem"} /> */}
              <SpHome className="fill-white"/>
              <h5>Home</h5>
            </Link>


          </div>
          <div className="hover-white pl-1">
            <Link
              href={"/search"}
              className="nav-link flex items-center gap-5 w-full"
            >
              {/* <BiSearchAlt size={"2rem"} /> */}
              <SpSearchV1 className="fill-white"/>
              <h5>Search</h5>
            </Link>
          </div>
        </div>
      </nav>
      <DesktopLibrary />
    </aside>
  );
};
export default DesktopNavBar;
