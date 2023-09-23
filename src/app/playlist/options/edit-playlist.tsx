"use client";
import { useEditModalState } from "@/context/editmodal-context";


const EditPlayList = () => {
  const openModal = useEditModalState() as () => void;
  //This components modal goes full screen in mobile viewports
  return (
    <button
      onClick={openModal}>
      <span>
        Edit PlayList
        </span>
    </button>
  );
};

export default EditPlayList;
