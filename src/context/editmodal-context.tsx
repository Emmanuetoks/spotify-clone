'use client'
import {
  ReactNode,
  MouseEventHandler,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { TPlayList } from "../../types/playlist";
import { usePlayLists } from "./playlist-context";

const EditModalContext = createContext<null | {
  openModal: () => void;
  closeModal: () => void;
  modalOpen: boolean;
}>(null);

export const EditModalProvider = ({
  children,
  fetchedPlayList,
}: {
  children: ReactNode;
  fetchedPlayList: TPlayList;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal: () => void = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  const  [playlistInView, setPlaylistInView] = usePlayLists().playlistInView;
console.log(fetchedPlayList);

  console.log(" PLaylist in view value" + playlistInView);
  useEffect(() => {
    setPlaylistInView(fetchedPlayList);
  }, [fetchedPlayList]);
  return (
    <EditModalContext.Provider value={{ openModal, closeModal, modalOpen }}>
      {children}
    </EditModalContext.Provider>
  );
};

export const useEditModalState = () => {
  const context = useContext(EditModalContext) as {
    openModal: () => void;
    closeModal: () => void;
    modalOpen: boolean;
  };
  return context;
};
