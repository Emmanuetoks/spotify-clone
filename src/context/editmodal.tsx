import { ReactNode,MouseEventHandler, createContext, useContext } from "react"

const EditModalContext = createContext<null | (MouseEventHandler)>(null)


export const EditModalProvider = ({children, value}:{children:ReactNode, value:any}) => {
    return (
        <EditModalContext.Provider value={value}>
                {children}
        </EditModalContext.Provider>
    )
}

export const useEditModalState = () => {
    const context = useContext(EditModalContext)
    return context
}