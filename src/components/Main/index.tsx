'use client'
import React from "react";
import Divider from "../ui/divider";
import Footer from "../Layout/footer";
import DesktopNavigator from "../DesktopNavigator";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

type  Props = {
  children: React.ReactNode;
};
const Main = ({ children }: Props) => {
  return (
    <OverlayScrollbarsComponent className="layout__main pb-[6rem] footer__main-links bg-spotify-black-200 flex-grow rounded-md  overflow-y-auto max-h-full" options={{scrollbars: {theme: 'os-theme-sp'}}}>
      {/* <DesktopNavigator/> */}
      <main className="relative">
        {children}
      </main>
      <Footer/>
    </OverlayScrollbarsComponent>
  );
};

export default Main;
