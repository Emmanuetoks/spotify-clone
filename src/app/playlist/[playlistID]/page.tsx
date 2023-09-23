import Header from "../header";
import Main from "../main";
import EditModal from "../edit-details-modal";
import { EditModalProvider } from "@/context/editmodal-context";

export const getPlaylist = async (playlistID: string) => {
  const response = await fetch(
    `http://localhost:4000/api/v1/playlists/${playlistID}`,
    { next: { revalidate: 600 } }
  );
  return response.json();
};

const Playlist = async ({
  params: { playlistID },
}: {
  params: { playlistID: string };
}) => {
  const data = await getPlaylist(playlistID);

  if (!data) return <h4>An error has occured</h4>;
  //For now i will be using library playlist
  //But ideally the currentplayist should be fetched
  return (
    <div
      id="PlayListPage"
      className="playlist-page bg-gradient-to-b from-spotify-gray-300 from-10% via-spotify-black-900 via-40% to-spotify-black-200 to-80%  flex flex-col w-full min-h-[90vh]"
    >
      <EditModalProvider fetchedPlayList={data}>
        <Header />
        <Main />
        <EditModal />
      </EditModalProvider>
    </div>
  );
};

// const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
//   const response = await fetch(`localhost:3000/api/v1/${context.params?.playlistID}`)
//   const data = await response.json()

//   return {
//     props: {
//       data
//     }
//   }
// }
export default Playlist;
