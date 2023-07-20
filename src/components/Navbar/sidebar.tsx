import DesktopLibrary from "@/app/library/desktop-library";
import SpHome from "../icons/SpHome";
import SpSearchV1 from "../icons/SpSearchV1";
import ActiveLink from "../ui/active-link";

const SideBar = () => {
  return (
    <aside className="sidebar min-w-[5rem] max-[800px]:w-[5rem] hidden sm:flex flex-col gap-2 min-[800px]:min-w-[14.37rem] min-[800px]:w-[25rem] min-[800px]:max-w-[150%] resize-x overflow-y-auto h-full">
      <nav className=" bg-spotify-black-200 rounded-md">
        <div className="py-5 px-5 space-y-6">
          <ActiveLink href={"/"} className="nav-link active w-full group">
            {/* <GoHome size={"2rem"} /> */}
            <div className="flex w-fit items-center gap-5">
              <SpHome className="fill-white mx-auto" />
              <h5 className="text-spotify-gray-200 font-medium group-hover:text-white">Home</h5>
            </div>
          </ActiveLink>

          <ActiveLink href={"/search"} className="nav-link w-full flex group">
            {/* <BiSearchAlt size={"2rem"} /> */}
            <div className="flex w-fit items-center justify-center gap-5">
              <SpSearchV1 className="fill-white mx-auto" />
              <h5 className="text-spotify-gray-200 font-medium group-hover:text-white">Search</h5>
            </div>
          </ActiveLink>
        </div>
      </nav>
      <DesktopLibrary />
    </aside>
  );
};
export default SideBar;
