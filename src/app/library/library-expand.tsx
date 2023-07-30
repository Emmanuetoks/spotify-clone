import { MouseEventHandler } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {HiOutlineArrowRight, HiOutlineArrowLeft} from 'react-icons/hi'

const LibrarySizeControllers = () => {
    const toggleLibraryExpand: MouseEventHandler = function (
      e: React.BaseSyntheticEvent
    ) {
      const target = e.currentTarget;
      console.log(target);
      const sidebar = document.getElementById("sideBar") as HTMLDivElement;
  
      switch (target.dataset.libraryExpand) {
        case "true":
          sidebar?.classList.add("Library--desktop--expand");
          break;
        case "false":
          sidebar?.classList.remove("Library--desktop--expand");
          break;
      }
    };
  
    return(
      <div className="Library__size-controllers w-6 place-items-center hover:text-white aspect-square rounded-full hover:bg-spotify-black-100 active:bg-black outline-transparent outline-2 hover:outline-spotify-black-100 active:outline-black outline grid">
      <button
        data-library-expand="true"
        onClick={toggleLibraryExpand}
        className="Library__expand-btn"
      >
        {/* {"->"} */}
        <HiOutlineArrowRight size={'1rem'}/>
      </button>
      <button
        data-library-expand="false"
        onClick={toggleLibraryExpand}
        className="Library__collapse-btn hidden"
      >
        {/* {"<-"} */}
        <HiOutlineArrowLeft size={'1rem'}/>
      </button>
    </div>
    )
  }


export default LibrarySizeControllers