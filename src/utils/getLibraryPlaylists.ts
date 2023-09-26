import { QueryFunction } from "@tanstack/react-query"

export const getLibraryPlaylists = (userID:string) => {
    return ()=> {
        fetch(`http://localhost:4000/api/v1/playlists/37i9dQZF1DXcBWIGoYBM5M`).then(res => res.json())
    }
}