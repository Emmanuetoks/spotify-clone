import SpMusicNote from "@/components/icons/SpMusicNote";
import { useParams, usePathname } from "next/navigation";
import { TPlaylistSearchParam } from "../../../../types/params";
import Link from "next/link";
import { TPlayList } from "../../../../types/playlist";
import SpImage from "@/components/ui/SpImage";

type Props = {
data:TPlayList
};

const ListCard = ({ data}: Props) => {
  const activePlaylistId: TPlaylistSearchParam = useParams();
  return (
    <>
      <Link
        href={`/playlist/${data.id}`}
        className={`rounded table-row w-full library__user-playlist-card items-center cursor-pointer hover:bg-[#191919] flex-shrink sidebar__icon active:bg-black ${
          activePlaylistId.playlistID === data.id ? "active-playlist" : null
        } overflow-hidden`}
      >
        {/* Table Row */}
        <div className="table-cell p-2 rounded">
          <div className="flex flex-col sm:flex-row gap-3 rounded">
            <div className="w-24 sm:w-14 aspect-square bg-spotify-black-900 list-layout-pcover rounded grid place-items-center shadow-[#101010] shadow-md relative">
              <SpImage images={data.images} size="small"/>
            </div>

            <div className="user-playlist-details remove-on-collapse flex flex-col items-start justify-between h-full py-2 font-medium">
              <h6 className="playlist__name text-sm sm:text-md text-white font-normal truncate">
                {data.name}
              </h6>
              {/* User Playlist Name  */}
              <p className="playlist__owner text-spotify-gray-800 text-xs sm:text-sm font-normal translate-x-0 truncate capitalize">
                {(
                  <>
                    <>{data.type}</>
                    <>{" • "}</>
                    <>{data.owner?.display_name}</>
                  </>
                )}
              </p>
              {/*User name */}
            </div>
          </div>
        </div>

        {/* date added */}

        <div className="date-added Library__table-cell hidden text-sm text-spotify-gray-800 font-normal remove-on-collapse">
          <p className="grid w-full h-full place-items-start">4 days ago</p>
        </div>

        <div className="played Library__table-cell hidden text-sm text-spotify-gray-800 font-normal remove-on-collapse rounded">
          <p className="grid place-items-end w-full pr-2">1 day ago</p>
        </div>
      </Link>
    </>
  );
};

export default ListCard;
