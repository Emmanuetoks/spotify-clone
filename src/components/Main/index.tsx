import React from "react";
import Divider from "../ui/divider";
import Footer from "../Layout/footer";
import DesktopNavigator from "../DesktopNavigator";

type Props = {
  children: React.ReactNode;
};
const Main = ({ children }: Props) => {
  return (
    <div className="layout__main pb-[6rem] footer__main-links bg-spotify-black-200 flex-grow rounded-md sm:w-[58.87rem] sm:min-w-[30%] overflow-y-auto max-h-full">
      {/* <DesktopNavigator/> */}
      <main className="relative">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Main;
