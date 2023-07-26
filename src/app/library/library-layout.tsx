"use client";
import { useLibraryContext } from "@/context/library-context";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import {TfiViewGrid} from 'react-icons/tfi'
const LayoutControllers = () => {
  const [libraryLayout, setLibraryLayout] = useLibraryContext();

  return (
    <div className="library__layout-controllers block w-6 place-items-center hover:text-white aspect-square rounded-full hover:bg-spotify-black-100 active:bg-black outline-transparent outline-2 hover:outline-spotify-black-100 active:outline-black outline sm:hidden">
      <button
        onClick={() => setLibraryLayout('gridLayout')}
        className={`${libraryLayout === "gridLayout" ? "hidden" : "block"}`}
      >
        <TfiViewGrid size={"0.9rem"} />
        
      </button>
      <button
        onClick={() => setLibraryLayout('listLayout')}

        className={`${libraryLayout === "listLayout" ? "hidden" : "block"}`}
      >
        <AiOutlineUnorderedList size={"1rem"} />
      </button>
    </div>
  );
};

export default LayoutControllers;
