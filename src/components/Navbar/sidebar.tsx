import DesktopLibrary from "@/app/library/desktop-library";
import DesktopNavBar from "./desktop-navbar";

const SideBar = () => {
  return (
    <aside id="sideBar" className="sidebar min-w-[5rem] hidden sm:flex flex-col gap-2 min-[800px]:min-w-[20rem] min-[800px]:w-[20rem] min-[800px]:max-w-[150%] max-[800px]:w-[5rem] resize-x max-h-full rounded-md">
      <DesktopNavBar/>
      <DesktopLibrary />
    </aside>
  )
};
export default SideBar;
