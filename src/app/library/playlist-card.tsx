import SpMusicNote from "@/components/icons/SpMusicNote";
import { useParams, usePathname } from "next/navigation";
import { TPlaylistSearchParam } from "../../../types/params";

type Props = {
  name?: string;
  playlist_id: string;
};

const PlaylistCard = ({ name, playlist_id }: Props) => {
  const activePlaylistId: TPlaylistSearchParam = useParams();
  return (
    <div
      className={`library__user-playlist-card sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3 items-center cursor-pointer hover:bg-[#191919] p-2 rounded-md space-y-3 sm:space-y-0 flex-shrink sidebar__icon active:bg-black ${
        activePlaylistId.playlistID === playlist_id ? "active-playlist" : null
      }`}
    >
      <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 user-playlist-cover rounded grid place-items-center shadow-[#101010] shadow-md">
        <SpMusicNote className="fill-spotify-gray-200" />
      </div>

      <div className="user-playlist-details remove-on-collapse">
        <h6 className="playlist__name text-sm sm:text-md text-white">{name}</h6>
        {/* User Playlist Name  */}
        <p className="playlist__owner text-spotify-gray-300 text-xs sm:text-sm font-medium">
          Playlist Emma
        </p>
        {/*User name */}
      </div>
    </div>
  );
};

export default PlaylistCard;
