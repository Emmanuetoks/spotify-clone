import { ReactNode, createContext, useState } from "react";

const webPlayerContext = createContext(null)


const WebPlayerContextProvider = ({children}:{children:ReactNode}) => {
    const [currentTrack, setCurrentTrack] = useState(null)
    
    return (
        <webPlayerContext.Provider>
            {children}
        </webPlayerContext.Provider>
    )
}


export const useWebPlayerContext = () => {

} 

export default WebPlayerContextProvider

