import { QueryFunction } from "@tanstack/react-query"

export const getLibraryPlaylists = (userID:string) => {
    return ()=> {
        return fetch(`http://localhost:4000/api/v1/users/${userID}/playlists`).then(res => res.json())
    }
}