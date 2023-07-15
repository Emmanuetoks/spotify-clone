import React from "react";
import Divider from "../ui/divider";
import Footer from "../Layout/footer";
import DesktopNavigator from "../DesktopNavigator";

type Props = {
  children: React.ReactNode;
};
const Main = ({ children }: Props) => {
  return (
    <div className="pb-[6rem] footer__main-links bg-spotify-black-200 flex-grow rounded-md sm:min-w-[46rem] overflow-y-auto">
      {/* <DesktopNavigator/> */}
      <main className="relative">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Main;
