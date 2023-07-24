import { MouseEventHandler } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import {TfiLayoutGrid2} from 'react-icons/tfi'
const LayoutControllers = () => {
  const toggleLibraryLayout: MouseEventHandler = (
    e: React.BaseSyntheticEvent
  ) => {
    const desktopLibrary = document.querySelector(".sidebar");

    switch (e.currentTarget.dataset.libraryLayout) {
      case "grid":
        desktopLibrary?.classList.add("Library__layout--grid");
        break;

      case "list":
        desktopLibrary?.classList.remove("Library__layout--grid");
        break;
    }
  };

  return (
    <div className="library__layout-controllers hidden w-6 place-items-center hover:text-white aspect-square rounded-full hover:bg-spotify-black-100 active:bg-black outline-transparent outline-2 hover:outline-spotify-black-100 active:outline-black outline">
      <button
        onClick={toggleLibraryLayout}
        data-library-layout="grid"
        className=""
      >
        <BsGrid1X2 size={"0.9rem"} />
      </button>
      <button
        onClick={toggleLibraryLayout}
        data-library-layout="list"
        className="hidden"
      >
        <AiOutlineUnorderedList size={"1rem"} />
      </button>
    </div>
  );
};

export default LayoutControllers;
