type Props = {
  name:string;
}

const PlaylistCard = ({name}:Props) => {
  return (
    <div className="library__user-playlist-card sm:flex w-fit sm:w-auto flex-col sm:flex-row gap-3 items-center cursor-pointer hover:bg-spotify-black-100 p-2 rounded-md space-y-3 sm:space-y-0 flex-shrink sidebar__icon">
      <div className="w-24 sm:w-14 aspect-square bg-spotify-gray-100 user-playlist-cover rounded"></div>

      <div className="user-playlist-details remove-on-collapse">
        <h6 className="text-sm sm:text-md text-white">{name}</h6>
        {/* User Playlist Name  */}
        <p className="text-spotify-gray-100 text-xs sm:text-sm font-medium">Playlist Emma</p>
        {/*User name */}
      </div>
    </div>
  );
};

// const PlaylistCardMobile = ({name}:) => {
//   return (
//     <div className="library__user-playlist-card w-fit space-y-3">
//       <div className="user-playlist-cover aspect-square w-10">

//       </div>
//       <div className="user-playlist-details">
//       <h6 className="text-md text-white">{name}</h6>
//       <p className="text-spotify-gray-100 text-sm"></p>
//       </div>

//     </div>
//   )
// }

export default PlaylistCard;
