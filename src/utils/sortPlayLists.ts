import { PlaylistCard } from "../../types/playlist";


type sortQuery = 'alphabetical';
const sortPlayLists = (playlists:PlaylistCard[], sortBy:sortQuery) => {
    
    switch (sortBy) {
        case 'alphabetical':
            
            return playlists;
    
        default:
            break;
    }
}