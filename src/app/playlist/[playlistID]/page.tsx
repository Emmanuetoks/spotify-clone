'use client'
import Divider from '@/components/ui/divider'
import React, { useContext, useState } from 'react'
import Header from './header'
import Main from './main'
import { useRouter } from 'next/navigation'

import { usePlayLists } from '@/context/playlist-context'
import { PlayListContextType } from '../../../../types/playlist'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Modal } from '@mui/material'
import EditModal from './editmodal'
import { createContext } from 'vm'


// const ModalStateContext = createContext<null | []>(null)
const Playlist = () => {
  // const [, setPlayLists] = usePlayLists() as PlayListContextType
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const closeModal = () => setOpenEditModal(false);
    const openModal = () => setOpenEditModal(true);
  return (
    <div className='playlist-page bg-gradient-to-b from-spotify-gray-300 from-10% to-spotify-black-900 to-30% min-h-[100vh] flex flex-col w-full'>
    
     <Header openModal={openModal}/>
      <Main openModal={openModal}/>


    <EditModal openEditModal={openEditModal} closeModal={closeModal}/>
    </div>
  )
}

const getServerSideProps:GetServerSideProps = async (context) =>{
  return {
    props:{
      name:'ahmed'
    }
  }
}
// const getStatic
export default Playlist
