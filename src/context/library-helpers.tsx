// import { ReactNode, createContext, useReducer } from "react";
// import { usePlayLists } from "./playlist-context";

// const LibraryHelpersContext = createContext(null)


// const LibraryHelpersContextProvider = ({children}:{children:ReactNode}) => {
//     const [playlists, setPlayLists] = usePlayLists()
//     const [state, dispatch] = useReducer(reducer, playlists)

//     const reducer = (state, action) => {
//         const stateUpdate = null;
//         switch (action.type) {
//             case 'sort':
                
//                 break;
        
//             return 'done';
//         }    
//     }


//     <LibraryHelpersContext.Provider value={[]}>
//         {children}
//     </LibraryHelpersContext.Provider>
// }


// export const useLibraryHelper = () => {

// }



// export default LibraryHelpersContextProvider