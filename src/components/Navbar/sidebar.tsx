import DesktopLibrary from "@/app/library/desktop-library";
import DesktopNavBar from "./desktop-navbar";

const SideBar = () => {
  return (
    <aside id="sideBar" className="sidebar min-w-[5rem] max-[800px]:w-[5rem] hidden sm:flex flex-col gap-2 min-[800px]:min-w-[20rem] min-[800px]:w-[25rem] min-[800px]:max-w-[150%] resize-x overflow-y-auto h-full">
      <DesktopNavBar/>
      <DesktopLibrary />
    </aside>
  );
};
export default SideBar;
