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
    <>
      <Link
        href={`/playlist/${playlist_id}`}
        className={`rounded table-row w-full library__user-playlist-card items-center cursor-pointer hover:bg-[#191919] flex-shrink sidebar__icon active:bg-black ${
          activePlaylistId.playlistID === playlist_id ? "active-playlist" : null
        } overflow-hidden`}
      >
        {/* Table Row */}
        <div className="table-cell p-2 rounded">
          <div className="flex flex-col sm:flex-row gap-3 rounded">
            <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 list-layout-pcover rounded grid place-items-center shadow-[#101010] shadow-md">
              <SpMusicNote className="fill-spotify-gray-200" />
            </div>

            <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2 font-medium">
              <h6 className="playlist__name text-sm sm:text-md text-white font-normal truncate">
                {name}
              </h6>
              {/* User Playlist Name  */}
              <p className="playlist__owner text-spotify-gray-200 text-xs sm:text-sm font-normal">
                {type.toLocaleLowerCase() === "artist" ? (
                  <span>Artist</span>
                ) : (
                  <>
                    <span className=" capitalize">{type}</span>
                    <span>{" • "}</span>
                    <span>{owner}</span>
                  </>
                )}
              </p>
              {/*User name */}
            </div>
          </div>
        </div>

        {/* date added */}

        <div className="date-added Library__table-cell hidden text-sm text-spotify-gray-900 font-normal remove-on-collapse">
          <p className="grid w-full h-full place-items-center">4 days ago</p>
        </div>

        <div className="played Library__table-cell hidden text-sm text-spotify-gray-900 font-normal remove-on-collapse rounded">
          <p className="grid place-items-right w-full">1 day ago</p>
        </div>
      </Link>
    </>
  );
};

export default ListCard;
