import DesktopLibrary from "@/app/library/desktop-library";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { GoHome } from "react-icons/go";

const DesktopNavBar = () => {
  return (
    <aside className="sidebar w-[5rem] hidden sm:flex flex-col gap-2 min-[800px]:min-w-[13rem] min-[800px]:w-[20rem] min-[800px]:max-w-[50rem] resize-x">
      <nav className=" bg-spotify-black-200 rounded-md">
        <div className="py-5 px-5 space-y-6 text-spotify-gray-200 font-medium">
          <div className="hover-white pl-1">
            <Link
              href={"/"}
              className="nav-link flex w-full items-center gap-5 "
            >
              <GoHome size={"2rem"} />
              <h5>Home</h5>
            </Link>
          </div>
          <div className="hover-white pl-1">
            <Link
              href={"/search"}
              className="nav-link flex items-center gap-5 w-full"
            >
              <BiSearchAlt size={"2rem"} />
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
