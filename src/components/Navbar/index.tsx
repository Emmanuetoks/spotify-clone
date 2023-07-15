import React from "react";
import Link from "next/link";
import DesktopLibrary from "@/app/library/desktop-library";
import { GoHome } from "react-icons/go";
import {BiSearchAlt} from 'react-icons/bi'
import { createPortal } from "react-dom";
import DesktopNavBar from "./desktop-navbar";
import MobileNavBar from "./mobile-navbar";
const Index = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
      
    </>
  );
};



export default Index;
