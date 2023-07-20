import React from "react";
import Link from "next/link";
import DesktopLibrary from "@/app/library/desktop-library";
import { GoHome } from "react-icons/go";
import {BiSearchAlt} from 'react-icons/bi'
import { createPortal } from "react-dom";
import MobileNavBar from "./mobile-navbar";
import SideBar from "./sidebar";
const Index = () => {
  return (
    <>
      <SideBar />
      <MobileNavBar />  
    </>
  );
};



export default Index;
