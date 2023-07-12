const PlaylistCard = () => {
  return (
    <div className="library__user-playlist-card flex flex-col sm:flex-row gap-3 items-center cursor-pointer">
      <div className="w-14 aspect-square bg-spotify-black-100 user-playlist-cover rounded"></div>

      <div className="user-playlist-details ">
        <h6 className="text-md text-white">Banana</h6>
        {/* User Playlist Name  */}
        <span className="text-spotify-gray-100 text-sm">Playlist Emma</span>
        {/*User name */}
      </div>
    </div>
  );
};

export default PlaylistCard;
