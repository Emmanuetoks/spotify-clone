import { QueryFunction } from "@tanstack/react-query"

export const getLibraryPlaylists = (userID:string) => {
    return ()=> {
        fetch(`http://localhost:3000/api/v1/user/${userID}/playlists`)
    }
}