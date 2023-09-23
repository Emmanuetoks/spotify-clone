import { useQuery } from "@tanstack/react-query"

const usePlaylist = (playlistID:string ) => {
const response = useQuery([playlistID], () => fetch(`http://localhost@400/api/v1/playlists/${playlistID}`))
return response
}