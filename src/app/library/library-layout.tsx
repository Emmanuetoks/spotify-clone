"use client";
import SpGrid from "@/components/icons/SpGrid";
import { useLibraryContext } from "@/context/library-context";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import {TfiViewGrid} from 'react-icons/tfi'
const LayoutControllers = () => {
  const [libraryLayout, setLibraryLayout] = useLibraryContext();

  return (
    <div className="library__layout-controllers block w-6 place-items-center aspect-square rounded-full sm:hidden group">
      <button
        onClick={() => setLibraryLayout('gridLayout')}
        className={`${libraryLayout === "gridLayout" ? "hidden" : "block"}`}
      >
        <SpGrid size={16} className="fill-spotify-gray-700 group-hover:fill-white"/>
        {/* <TfiViewGrid size={"0.9rem"} /> */}
        
      </button>
      <button
        onClick={() => setLibraryLayout('listLayout')}

        className={`${libraryLayout === "listLayout" ? "hidden" : "block"} text-spotify-gray-700 group-hover:text-white`}
      >
        <AiOutlineUnorderedList size={"1rem"} />
      </button>
    </div>
  );
};

export default LayoutControllers;
