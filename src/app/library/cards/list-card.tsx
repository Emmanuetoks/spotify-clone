import SpMusicNote from "@/components/icons/SpMusicNote";
import { useParams, usePathname } from "next/navigation";
import { TPlaylistSearchParam } from "../../../../types/params";
import Link from "next/link";

type Props = {
  name?: string;
  playlist_id: string;
  owner: string;
  type: string;
  numberOfSongs?: string;
};

const ListCard = ({ name, playlist_id, type, owner }: Props) => {
  const activePlaylistId: TPlaylistSearchParam = useParams();
  return (
    <Link className="table-row" href={`/playlist/${playlist_id}`}>
        
      <div
        className={`library__user-playlist-card items-center cursor-pointer hover:bg-[#191919] p-2 rounded-md flex-shrink sidebar__icon active:bg-black ${
          activePlaylistId.playlistID === playlist_id ? "active-playlist" : null
        }`}
      >

        {/* Table Row */}
        <div className="table-row  sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3">
          <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 user-playlist-cover rounded grid place-items-center shadow-[#101010] shadow-md">
            <SpMusicNote className="fill-spotify-gray-200" />
          </div>

          <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2">
            <h6 className="playlist__name text-sm sm:text-md text-white">
              {name}
            </h6>
            {/* User Playlist Name  */}
            <p className="playlist__owner text-spotify-gray-300 text-xs sm:text-sm font-medium">
              {type.toLocaleLowerCase() === "artist" ? (
                <span>Artist</span>
              ) : (
                <>
                  <span>{type}</span>
                  <span>{" • "}</span>
                  <span>{owner}</span>
                </>
              )}
            </p>
            {/*User name */}
          </div>
        </div>

                {/* Table Row */}

        <div className="table-row Library__date-added">

        </div>

      L</div>
    </Link>
  );
};

export default ListCard;
